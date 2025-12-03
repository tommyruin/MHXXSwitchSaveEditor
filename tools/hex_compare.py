#!/usr/bin/env python3
"""
Hex Comparison Tool for MHGU Save Files
Compares two save files to identify changed bytes/bits for quest completion tracking
"""

import sys
import argparse
from pathlib import Path


def read_file(filepath):
    """Read a binary file and return its contents"""
    try:
        with open(filepath, 'rb') as f:
            return f.read()
    except FileNotFoundError:
        print(f"Error: File not found: {filepath}")
        sys.exit(1)
    except Exception as e:
        print(f"Error reading file {filepath}: {e}")
        sys.exit(1)


def compare_bytes(before, after):
    """Compare two byte arrays and return list of differences"""
    if len(before) != len(after):
        print(f"Warning: File sizes differ: {len(before)} vs {len(after)}")
        min_len = min(len(before), len(after))
    else:
        min_len = len(before)
    
    differences = []
    for offset in range(min_len):
        if before[offset] != after[offset]:
            differences.append({
                'offset': offset,
                'before': before[offset],
                'after': after[offset],
                'before_bits': format(before[offset], '08b'),
                'after_bits': format(after[offset], '08b')
            })
    
    return differences


def find_bit_changes(before_byte, after_byte):
    """Find which specific bits changed in a byte"""
    changed_bits = []
    for bit in range(8):
        mask = 1 << bit
        before_bit = (before_byte & mask) >> bit
        after_bit = (after_byte & mask) >> bit
        if before_bit != after_bit:
            changed_bits.append({
                'bit': bit,
                'before': before_bit,
                'after': after_bit
            })
    return changed_bits


def format_hex_context(data, offset, context_bytes=16):
    """Format hex context around an offset"""
    start = max(0, offset - context_bytes)
    end = min(len(data), offset + context_bytes + 1)
    
    hex_lines = []
    for i in range(start, end, 16):
        chunk_end = min(i + 16, end)
        hex_values = ' '.join(f'{b:02X}' for b in data[i:chunk_end])
        ascii_values = ''.join(chr(b) if 32 <= b < 127 else '.' for b in data[i:chunk_end])
        marker = ' <--' if i <= offset < chunk_end else ''
        hex_lines.append(f'  0x{i:08X}: {hex_values:<48} {ascii_values}{marker}')
    
    return '\n'.join(hex_lines)


def group_consecutive_changes(differences, max_gap=16):
    """Group consecutive changes into regions"""
    if not differences:
        return []
    
    regions = []
    current_region = {
        'start': differences[0]['offset'],
        'end': differences[0]['offset'],
        'changes': [differences[0]]
    }
    
    for diff in differences[1:]:
        if diff['offset'] - current_region['end'] <= max_gap:
            current_region['end'] = diff['offset']
            current_region['changes'].append(diff)
        else:
            regions.append(current_region)
            current_region = {
                'start': diff['offset'],
                'end': diff['offset'],
                'changes': [diff]
            }
    
    regions.append(current_region)
    return regions


def print_summary(differences):
    """Print a summary of changes"""
    print("\n" + "="*80)
    print("SUMMARY")
    print("="*80)
    print(f"Total changed bytes: {len(differences)}")
    
    if not differences:
        print("No differences found!")
        return
    
    print(f"First change at: 0x{differences[0]['offset']:08X}")
    print(f"Last change at:  0x{differences[-1]['offset']:08X}")
    
    # Group changes into regions
    regions = group_consecutive_changes(differences)
    print(f"\nNumber of change regions: {len(regions)}")
    print("\nChange regions:")
    for i, region in enumerate(regions, 1):
        size = region['end'] - region['start'] + 1
        print(f"  Region {i}: 0x{region['start']:08X} - 0x{region['end']:08X} ({len(region['changes'])} bytes changed, {size} byte span)")


def print_detailed_changes(differences, before_data, after_data, max_display=50):
    """Print detailed information about changes"""
    print("\n" + "="*80)
    print("DETAILED CHANGES")
    print("="*80)
    
    display_count = min(len(differences), max_display)
    
    for i, diff in enumerate(differences[:display_count]):
        offset = diff['offset']
        print(f"\n--- Change #{i+1} at offset 0x{offset:08X} (decimal: {offset}) ---")
        print(f"Before: 0x{diff['before']:02X} (binary: {diff['before_bits']}, decimal: {diff['before']})")
        print(f"After:  0x{diff['after']:02X} (binary: {diff['after_bits']}, decimal: {diff['after']})")
        
        # Show which bits changed
        bit_changes = find_bit_changes(diff['before'], diff['after'])
        if bit_changes:
            bit_str = ', '.join([f"bit {bc['bit']}: {bc['before']}→{bc['after']}" for bc in bit_changes])
            print(f"Bit changes: {bit_str}")
        
        # Show hex context
        print("\nContext (BEFORE):")
        print(format_hex_context(before_data, offset))
        print("\nContext (AFTER):")
        print(format_hex_context(after_data, offset))
    
    if len(differences) > max_display:
        print(f"\n... and {len(differences) - max_display} more changes (use --all to see all)")


def print_region_analysis(differences, before_data, after_data):
    """Analyze and print regions that might contain quest flags"""
    print("\n" + "="*80)
    print("QUEST FLAG ANALYSIS")
    print("="*80)
    
    regions = group_consecutive_changes(differences, max_gap=32)
    
    for i, region in enumerate(regions, 1):
        print(f"\n--- Region {i} ---")
        print(f"Offset range: 0x{region['start']:08X} - 0x{region['end']:08X}")
        print(f"Size: {region['end'] - region['start'] + 1} bytes")
        print(f"Changed bytes: {len(region['changes'])}")
        
        # Check if this looks like bit flags
        single_bit_changes = sum(1 for change in region['changes'] 
                                 if bin(change['before'] ^ change['after']).count('1') == 1)
        
        if single_bit_changes > len(region['changes']) * 0.5:
            print(f"⭐ This region shows single-bit changes ({single_bit_changes}/{len(region['changes'])})")
            print("   This is likely a BIT FLAG region (one bit per quest)")
        
        # Show the changed area
        print("\nBEFORE:")
        print(format_hex_context(before_data, region['start'], context_bytes=32))
        print("\nAFTER:")
        print(format_hex_context(after_data, region['start'], context_bytes=32))


def export_csv(differences, output_file):
    """Export differences to CSV file"""
    try:
        with open(output_file, 'w') as f:
            f.write("Offset(Hex),Offset(Dec),Before(Hex),After(Hex),Before(Bin),After(Bin),Before(Dec),After(Dec)\n")
            for diff in differences:
                f.write(f"0x{diff['offset']:08X},{diff['offset']},")
                f.write(f"0x{diff['before']:02X},0x{diff['after']:02X},")
                f.write(f"{diff['before_bits']},{diff['after_bits']},")
                f.write(f"{diff['before']},{diff['after']}\n")
        print(f"\n✓ Exported {len(differences)} changes to {output_file}")
    except Exception as e:
        print(f"Error exporting to CSV: {e}")


def main():
    parser = argparse.ArgumentParser(
        description='Compare two MHGU save files to find quest completion flags',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Basic comparison
  python3 hex_compare.py save_before.bin save_after.bin
  
  # Show all changes (not just first 50)
  python3 hex_compare.py save_before.bin save_after.bin --all
  
  # Export to CSV
  python3 hex_compare.py save_before.bin save_after.bin --csv changes.csv
  
  # Focus on specific offset range
  python3 hex_compare.py save_before.bin save_after.bin --range 0x100000 0x200000

How to use this tool:
  1. Copy your save file (before completing a quest)
  2. Complete ONE specific quest in the game
  3. Copy your save file again (after completing the quest)
  4. Run this tool to compare them
  5. Look for "BIT FLAG" regions - these likely contain quest flags
        """
    )
    
    parser.add_argument('before', help='Path to save file BEFORE completing quest')
    parser.add_argument('after', help='Path to save file AFTER completing quest')
    parser.add_argument('--all', action='store_true', help='Show all changes (not just first 50)')
    parser.add_argument('--csv', metavar='FILE', help='Export changes to CSV file')
    parser.add_argument('--range', nargs=2, metavar=('START', 'END'), 
                       help='Only compare specific offset range (hex values like 0x100000)')
    parser.add_argument('--summary-only', action='store_true', help='Only show summary and region analysis')
    
    args = parser.parse_args()
    
    # Read files
    print(f"Reading {args.before}...")
    before = read_file(args.before)
    print(f"Reading {args.after}...")
    after = read_file(args.after)
    
    # Apply range filter if specified
    if args.range:
        try:
            start = int(args.range[0], 16) if args.range[0].startswith('0x') else int(args.range[0])
            end = int(args.range[1], 16) if args.range[1].startswith('0x') else int(args.range[1])
            print(f"\nFiltering to range: 0x{start:08X} - 0x{end:08X}")
            before = before[start:end]
            after = after[start:end]
            offset_base = start
        except ValueError:
            print("Error: Invalid range values")
            sys.exit(1)
    else:
        offset_base = 0
    
    # Compare
    print("\nComparing files...")
    differences = compare_bytes(before, after)
    
    # Adjust offsets if range was used
    if args.range:
        for diff in differences:
            diff['offset'] += offset_base
    
    # Print results
    print_summary(differences)
    
    if differences:
        print_region_analysis(differences, before, after)
        
        if not args.summary_only:
            print_detailed_changes(differences, before, after, 
                                 max_display=len(differences) if args.all else 50)
    
    # Export if requested
    if args.csv and differences:
        export_csv(differences, args.csv)
    
    print("\n" + "="*80)
    print("Analysis complete!")
    print("="*80)


if __name__ == '__main__':
    main()
