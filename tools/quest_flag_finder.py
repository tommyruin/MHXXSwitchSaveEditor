#!/usr/bin/env python3
"""
Quest Flag Finder Tool
Compares two MHGU save files to identify quest completion flag locations.

Usage:
    python3 quest_flag_finder.py <save_before> <save_after>

Example:
    python3 quest_flag_finder.py ../Saves/before/system ../Saves/after/system
"""

import sys
import os

def compare_saves(file1_path, file2_path):
    """Compare two save files and show byte differences."""
    
    # Read both files
    with open(file1_path, 'rb') as f1:
        data1 = f1.read()
    
    with open(file2_path, 'rb') as f2:
        data2 = f2.read()
    
    # Check if files are same size
    if len(data1) != len(data2):
        print(f"WARNING: Files are different sizes!")
        print(f"  {file1_path}: {len(data1)} bytes")
        print(f"  {file2_path}: {len(data2)} bytes")
        print()
    
    # Find all differences
    differences = []
    min_len = min(len(data1), len(data2))
    
    for i in range(min_len):
        if data1[i] != data2[i]:
            differences.append({
                'offset': i,
                'before': data1[i],
                'after': data2[i],
                'before_bin': format(data1[i], '08b'),
                'after_bin': format(data2[i], '08b')
            })
    
    # Display results
    print("=" * 80)
    print("QUEST FLAG FINDER - SAVE FILE COMPARISON")
    print("=" * 80)
    print(f"\nFile 1 (Before): {file1_path}")
    print(f"File 2 (After):  {file2_path}")
    print(f"\nTotal bytes compared: {min_len:,}")
    print(f"Differences found: {len(differences)}")
    print("\n" + "=" * 80)
    
    if len(differences) == 0:
        print("\n✓ Files are identical - no quest completion detected!")
        print("  Make sure you completed a quest between saves.")
        return
    
    # Group consecutive differences
    groups = []
    current_group = [differences[0]]
    
    for i in range(1, len(differences)):
        if differences[i]['offset'] - differences[i-1]['offset'] <= 16:
            current_group.append(differences[i])
        else:
            groups.append(current_group)
            current_group = [differences[i]]
    groups.append(current_group)
    
    # Display grouped differences
    print(f"\nFound {len(groups)} region(s) with changes:\n")
    
    for group_idx, group in enumerate(groups, 1):
        start_offset = group[0]['offset']
        end_offset = group[-1]['offset']
        size = len(group)
        
        print(f"Region {group_idx}: Offset 0x{start_offset:X} - 0x{end_offset:X} ({size} bytes changed)")
        print("-" * 80)
        
        # Show detailed changes for this region
        for diff in group[:20]:  # Limit to first 20 bytes per region
            offset = diff['offset']
            print(f"  0x{offset:06X} ({offset:7d}): "
                  f"0x{diff['before']:02X} → 0x{diff['after']:02X}  "
                  f"({diff['before']:3d} → {diff['after']:3d})  "
                  f"Binary: {diff['before_bin']} → {diff['after_bin']}")
        
        if len(group) > 20:
            print(f"  ... and {len(group) - 20} more bytes in this region")
        print()
    
    # Analyze bit-level changes
    print("=" * 80)
    print("BIT-LEVEL ANALYSIS")
    print("=" * 80)
    print("\nLooking for single-bit changes (likely quest flags):\n")
    
    single_bit_changes = []
    for diff in differences:
        xor = diff['before'] ^ diff['after']
        # Check if only one bit changed (power of 2)
        if xor != 0 and (xor & (xor - 1)) == 0:
            bit_position = (xor.bit_length() - 1)
            single_bit_changes.append({
                'offset': diff['offset'],
                'bit': bit_position,
                'before': diff['before'],
                'after': diff['after']
            })
    
    if single_bit_changes:
        print(f"Found {len(single_bit_changes)} single-bit change(s):")
        print("(These are most likely quest completion flags!)\n")
        
        for change in single_bit_changes[:50]:  # Show first 50
            print(f"  0x{change['offset']:06X}: Bit {change['bit']} changed  "
                  f"(0x{change['before']:02X} → 0x{change['after']:02X})")
        
        if len(single_bit_changes) > 50:
            print(f"  ... and {len(single_bit_changes) - 50} more")
    else:
        print("No single-bit changes found.")
        print("Quest flags might use multi-bit encoding or be in a larger changed region.")
    
    # Show hex dump of first changed region
    if groups:
        print("\n" + "=" * 80)
        print("HEX DUMP OF FIRST CHANGED REGION")
        print("=" * 80)
        
        first_group = groups[0]
        start = max(0, first_group[0]['offset'] - 32)
        end = min(len(data1), first_group[-1]['offset'] + 32)
        
        print(f"\nShowing bytes 0x{start:X} - 0x{end:X}:\n")
        print("Offset    | Before                                            | After")
        print("-" * 80)
        
        for offset in range(start, end, 16):
            before_hex = ' '.join(f'{data1[i]:02X}' for i in range(offset, min(offset + 16, end)))
            after_hex = ' '.join(f'{data2[i]:02X}' for i in range(offset, min(offset + 16, end)))
            
            # Highlight differences
            before_parts = []
            after_parts = []
            for i in range(offset, min(offset + 16, end)):
                if data1[i] != data2[i]:
                    before_parts.append(f'\033[91m{data1[i]:02X}\033[0m')  # Red
                    after_parts.append(f'\033[92m{data2[i]:02X}\033[0m')   # Green
                else:
                    before_parts.append(f'{data1[i]:02X}')
                    after_parts.append(f'{data2[i]:02X}')
            
            before_str = ' '.join(before_parts).ljust(60)
            after_str = ' '.join(after_parts)
            
            print(f'0x{offset:06X} | {before_str} | {after_str}')
    
    print("\n" + "=" * 80)
    print("SUMMARY")
    print("=" * 80)
    print(f"""
Quest completion flags are likely at one of these locations:
""")
    
    for group_idx, group in enumerate(groups[:5], 1):  # Top 5 regions
        start = group[0]['offset']
        size = len(group)
        print(f"  {group_idx}. Offset 0x{start:X} ({start} decimal) - {size} byte(s) changed")
    
    if single_bit_changes:
        most_likely = single_bit_changes[0]
        print(f"\n⭐ MOST LIKELY QUEST FLAG LOCATION:")
        print(f"   Offset: 0x{most_likely['offset']:X} ({most_likely['offset']} decimal)")
        print(f"   Bit: {most_likely['bit']}")
        print(f"   Changed from: 0x{most_likely['before']:02X} to 0x{most_likely['after']:02X}")

def main():
    if len(sys.argv) != 3:
        print("Usage: python3 quest_flag_finder.py <save_before> <save_after>")
        print("\nExample:")
        print("  python3 quest_flag_finder.py ../Saves/before/system ../Saves/after/system")
        sys.exit(1)
    
    file1 = sys.argv[1]
    file2 = sys.argv[2]
    
    # Check if files exist
    if not os.path.exists(file1):
        print(f"Error: File not found: {file1}")
        sys.exit(1)
    
    if not os.path.exists(file2):
        print(f"Error: File not found: {file2}")
        sys.exit(1)
    
    compare_saves(file1, file2)

if __name__ == '__main__':
    main()
