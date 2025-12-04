# Quest Flag Troubleshooter Guide

## Overview

The Quest Flag Troubleshooter is an interactive Python tool designed to help reverse-engineer quest completion flag offsets in MHGU save files by comparing user-defined "ground truth" against save file data.

## Location

`tools/quest_flag_troubleshooter.py`

## Requirements

- Python 3.6+
- `rich` library (for terminal UI)

```bash
pip install rich
```

## Quick Start

```bash
cd tools
python3 quest_flag_troubleshooter.py [path/to/save/file]
```

If no save file is specified, the tool will look for:
- `Saves/0000000000000001/0/system`
- `../Saves/0000000000000001/0/system`
- `test_save.bin`
- `../test_save.bin`

## Features

### 1. Ground Truth Builder

Define which quests you know are completed or not completed:

- **Filter by Hub**: Village, Guild, Arena, Permit, Event
- **Filter by Stars**: 1★ to 10★
- **Search**: By quest name
- **Three States**:
  - ✅ Completed (confirmed CLEAR in-game)
  - ❌ Not Completed (confirmed NOT done)
  - ⬜ Unknown (not used for matching)
- **Bulk Operations**:
  - Mark All Complete (for filtered view)
  - Mark None Complete (for filtered view)
  - Clear All (for filtered view)

### 2. Scan Modes

#### Quick Scan
Tests the 4 known candidate regions from research:
- Region A (0x1AFE00): Primary - Village quests
- Region B (0x1AFE26): Guild quests
- Region C (0x1B019A): Supplementary
- Region D (0x1B092E): Additional mirrors

**Note**: Offsets are relative to the character slot base, which is automatically detected.

#### Focused Scan
Scans a configurable range (default ±1000 bytes) around the known regions to find potential alternative offsets.

#### Custom Range Scan
Allows you to specify any hex range to scan.

#### Test Specific Offset
Test a single offset against your ground truth.

#### Test Combined Regions (OR)
Combines all 4 known regions using OR logic to see if the combined data provides better accuracy. This matches the current implementation in the web app.

### 3. Results Display

- Ranked by match percentage
- Shows which quests matched and which didn't
- Visual progress bars
- Detailed mismatch information
- Export to CSV

### 4. Persistence

- Ground truth is automatically saved to `ground_truth.json`
- Import/Export functionality for sharing ground truth data

## Workflow Example

1. **Load your save file**
2. **Define ground truth**:
   - Filter to Village 1★ quests
   - Mark the quests you've completed as ✅
   - Mark quests you know you haven't done as ❌
   - Leave unknown quests as ⬜
3. **Run Quick Scan** to test the 4 known regions
4. **View Results** to see which offset has the best match
5. **Test Combined Regions** to see if OR logic improves accuracy
6. If needed, **Focused Scan** to find alternative offsets

## Understanding Results

### Match Percentage

- **100%**: Perfect match - all ground truth quests match the save data
- **87.5%**: Current known accuracy with combined OR logic (7/8 quests)
- **50-75%**: Partial match - may indicate:
  - Bits represent "unlocked" vs "completed"
  - Different encoding for some quest types
  - Multiple regions needed

### Known Issue

"Royal Spit Take" (Guild 1★, flagIndex 359) is known to show as set (1) in the save but may not actually be completed. See `quest_flag_implementation_summary.md` for details.

## Files Created

| File | Purpose |
|------|---------|
| `tools/quest_data.json` | Quest catalog (1,355 quests) extracted from TypeScript |
| `tools/ground_truth.json` | Your ground truth (auto-saved) |
| `tools/scan_results.csv` | Exported scan results (optional) |

## Tips

1. **Start Small**: Begin with 5-10 quests you're absolutely certain about (recently completed or definitely not done)
2. **Use Both States**: Include both completed AND not-completed quests for better validation
3. **Filter First**: Use hub/star filters to focus on specific quest categories
4. **Test Incrementally**: Test with a small ground truth first, then expand
5. **Check Character Slot**: The tool automatically detects the character slot offset - verify it looks correct (typically 0x18CC78 for MHGU)

## Interpreting Scan Results

### Good Indicators
- **High match %** (>80%): Likely found the correct offset
- **All completed quests match**: Offset is probably correct
- **Only 1-2 mismatches**: Known issues (like Royal Spit Take)

### Investigate Further
- **50-70% match**: May need combined regions
- **Multiple mismatches**: Wrong offset or bit mapping
- **0% match**: Completely wrong offset

## Technical Details

### Character Slot Offset

All quest flag offsets are **relative to the character slot base**, which is read from offset `0x10` in the save file payload (4-byte little-endian).

Example:
```
Character slot base: 0x18CC78
Region D offset:     0x1B092E (relative)
Actual offset:       0x33D5A6 (0x18CC78 + 0x1B092E)
```

### Bit Reading

Quests use bit flags:
- 1 bit per quest
- `flagIndex` (from quest catalog) determines bit position
- Bit position: `byte_offset = flagIndex / 8`, `bit_offset = flagIndex % 8`
- 0 = not completed, 1 = completed

### Combined OR Logic

The current implementation reads 4 regions and combines them:
```python
combined[i] = region_a[i] | region_b[i] | region_c[i] | region_d[i]
```

A quest is considered complete if the bit is set in **any** region.

## Troubleshooting

**Problem**: Tool shows "No save file loaded"
- **Solution**: Provide save file path as argument or place save in default location

**Problem**: Match % is very low (<25%)
- **Solution**: Check that you're using the correct save file with the quests you marked in ground truth

**Problem**: Tool crashes on startup
- **Solution**: Ensure `quest_data.json` exists in the `tools/` directory

**Problem**: Ground truth not saving
- **Solution**: Check write permissions in `tools/` directory

## Next Steps

After identifying correct offsets:

1. Document findings in `quest_flag_findings.md`
2. Update offsets in `web/src/lib/saveParser.ts`
3. Test round-trip (edit → save → reload) with actual game
4. Update `quest_flag_implementation_summary.md` with new accuracy data

## References

- [quest_flag_research.md](quest_flag_research.md) - Research methodology
- [quest_flag_findings.md](quest_flag_findings.md) - Initial findings
- [quest_flag_implementation_summary.md](quest_flag_implementation_summary.md) - Current implementation status
