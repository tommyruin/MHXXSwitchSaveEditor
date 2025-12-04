# Quest Completion Flag Investigation - Comprehensive Analysis

**Date:** December 4, 2024  
**Investigator:** OpenCode AI  
**Objective:** Identify where quest completion flags are stored in MHGU save files using systematic analysis

---

## Update (latest automation)
- Re-ran `tools/completion_flag_scanner.py` on the five labeled saves (`Saves/0000000000000001/0/SAVE_A..SAVE_X`), including full scan. Result: no consistent quest-bit region; “100%” hits were header bytes near offset `0x20` (not usable).
- Headless Ghidra automation shows only one xref to `mCompleteFlag` (function `FUN_60012d20`). Quest-related functions with large offsets worth inspecting for save buffer math: `FUN_60c06a14` (offset `0x1FF90`), `FUN_61320044` and `FUN_613205b0` (offset `0x640000`).
- Previously identified regions (0x1AFE00, 0x1AFE26, 0x1B019A, 0x1B092E) remain all zeros across the saves; no quest completions reflected there.

---

## Executive Summary

After comprehensive analysis of 5 save files with known quest completion states using multiple approaches, **we were unable to identify a consistent quest completion flag region** that uses simple bit-array indexing by `flagIndex`.

**Key Finding:** The previously identified "quest flag" regions (A, B, C, D at offsets `0x1AFE00`, `0x1AFE26`, `0x1B019A`, `0x1B092E`) are **completely empty** (`0x00` bytes) for all tested quest positions across all save files.

---

## Test Data

### Save Files Analyzed

| Save | Completed Quests | Description |
|------|------------------|-------------|
| **SAVE_A** | 0 quests | Fresh/new save |
| **SAVE_B** | 1 quest | Find the Ferns (Village 1★, flagIndex 0) |
| **SAVE_C** | 2 quests | Above + Wipe Out! (Village 1★, flagIndex 5) |
| **SAVE_D** | 3 quests | Above + Harvest Tour: Jurassic Frontier (Guild 1★, flagIndex 335) |
| **SAVE_X** | 7 quests | Wipe Out!, Harvest Tour, + 5 more Guild quests (NO flagIndex 0) |

### Quest Details

```
flagIndex 0:   Find the Ferns (Village 1★)
flagIndex 5:   Wipe Out! (Village 1★)
flagIndex 335: Harvest Tour: Jurassic Frontier (Guild 1★)
flagIndex 342: Lost in the Jurassic Frontier (Guild 1★)
flagIndex 346: In Pursuit of the Sand Wyvern (Guild 1★)
flagIndex 449: Tackling the Tetsucabra (Guild 4★)
flagIndex 452: Shells of Steel (Guild 4★)
flagIndex 460: Royal Spit Take (Guild 4★)
```

**Character slot base offset:** `0x14`

---

## Investigation Results

### Finding #1: Known Regions Are Empty

Detailed hex dump of Region A (`0x1AFE14` absolute, `0x1AFE00` relative):

```
First 60 bytes (covers flagIndex 0-479):

SAVE_A:  00 00 00 00 00 00 00 FF FF 00 00 00 00 00 00 00...
SAVE_B:  00 00 00 00 00 00 00 FF FF 00 00 00 00 00 00 00...
SAVE_C:  00 00 00 00 00 00 00 FF FF 00 00 00 00 00 00 00...
SAVE_D:  00 00 00 00 00 00 00 FF FF 00 00 00 00 00 00 00...
SAVE_X:  00 00 00 00 00 00 00 FF FF 00 00 00 00 00 00 00...
```

**All five saves show IDENTICAL data** - all `0x00` except for two static `0xFF` bytes at offsets 7-8.

**Tested bit positions:**
- Byte 0, bit 0 (flagIndex 0): Always `0` in all saves (should be `1` in SAVE_B, SAVE_C, SAVE_D)
- Byte 0, bit 5 (flagIndex 5): Always `0` in all saves (should be `1` in SAVE_C, SAVE_D, SAVE_X)
- Byte 41, bit 7 (flagIndex 335): Always `0` in all saves (should be `1` in SAVE_D, SAVE_X)

**Conclusion:** These regions do NOT store quest completion data.

### Finding #2: No Consistent Bit-Array Pattern Found

**Incremental Analysis Results:**

| Comparison | Changed Bytes | Single-Bit Changes | Bit 0 Changes (0→1) |
|------------|---------------|-------------------|---------------------|
| SAVE_A → SAVE_B | 341,439 | 13,652 | 2,162 offsets |
| SAVE_B → SAVE_C | 239,304 | 13,020 | N/A |
| SAVE_C → SAVE_D | 36,108 | 4,468 | N/A |

**Cross-Reference Test:**
1. Found 2,162 offsets where bit 0 changed `0→1` (SAVE_A → SAVE_B)
2. Filtered to 2 offsets where bit 5 also changed `0→1` (SAVE_B → SAVE_C):
   - `0x001B7696`
   - `0x001B76A6`
3. Tested if flagIndex 335 (byte 41, bit 7) changed at these bases (SAVE_C → SAVE_D):
   - **Neither offset showed the expected change**

**Conclusion:** Quest completion is NOT stored as a simple bit array indexed by `flagIndex`.

### Finding #3: Full Save Scan - No Perfect Matches

Scanned **2,097,152 bytes** (from `0x14` to `0x200014`) testing every 16-byte boundary for perfect matches against ground truth.

**Tested:**
- Both bit directions (`0→1` and `1→0` for completion)
- All 8 quest flag indices
- Against all 5 save files

**Result:** **Zero perfect matches found.**

### Finding #4: Inverted Pattern Analysis

Tested the two candidate offsets (`0x001B7696`, `0x001B76A6`) with inverted logic (bit `1` = not done, bit `0` = completed):

| Flag | Byte | Bit | Pattern Observed |
|------|------|-----|------------------|
| 0 | 0 | 0 | Partial match (works for SAVE_A, SAVE_B, SAVE_X only) |
| 5 | 0 | 5 | No consistent pattern |
| 335 | 41 | 7 | Partial match (works for SAVE_D, SAVE_X only) |

**Conclusion:** Even with inverted logic, no candidate showed consistent behavior for all quests.

---

## Conclusions

### What We Know For Certain

✅ **Guild Card quest completion counters work** (offsets `0xC7A1B`-`0xC7A27`)  
✅ **Test saves are valid** (counters increment correctly after quest completion)  
✅ **Known "quest flag" regions are empty** (all `0x00` bytes)  
✅ **No simple bit-array indexed by flagIndex exists** (extensive search found no matches)  

### What This Means

❌ **The current web app implementation is likely incorrect**
   - The OR logic across regions A-D reads from empty data
   - 87.5% reported accuracy may be coincidental or based on other data

❌ **Simple flagIndex-based lookup will not work**
   - Quest completion is stored using a different indexing scheme
   - May use `dbId`, quest type, rank, or hub as primary key

### Possible Explanations

1. **Per-Hub/Rank Storage**
   - Village quests stored separately from Guild quests
   - Low Rank / High Rank / G-Rank in different regions
   - Would explain why Village 1★ quests (flags 0, 5) showed some correlation

2. **Database ID Indexing**
   - Bits indexed by `dbId` from quest database instead of `flagIndex`
   - Would require re-mapping all quest IDs

3. **Quest History Structure**
   - Completion stored as metadata in a quest history list
   - Each entry contains: quest ID, clear time, rewards, **completion bit**
   - Not a global bit array at all

4. **Hash Table / Lookup Structure**
   - Quest completion stored in a dynamic structure
   - Offsets vary based on how many quests have been attempted
   - Would explain the inability to find fixed patterns

5. **Non-Binary Storage**
   - Completion might be stored as multi-byte records
   - E.g., each quest has a 4-byte struct with completion count, best time, etc.

---

## Recommendations

### Immediate Actions

1. **Update web app documentation** to note that quest completion display is **experimental** and may be inaccurate
2. **Disable quest completion editing** (if implemented) to prevent save corruption
3. **Keep the quest completion counter display** (Guild Card totals) as these are verified

### Further Research Required

1. **Test dbId Hypothesis**
   ```python
   # Instead of: bit_position = flagIndex
   # Try: bit_position = dbId
   ```

2. **Analyze Quest History Structure**
   - Look for repeating patterns in the save file
   - Search for quest IDs from the database
   - May find completion metadata records

3. **Separate Analysis by Quest Type**
   - Test only Village quests (flags 0-200)
   - Test only Guild quests (flags 300-600)
   - Test Arena/Event quests separately

4. **Reverse Engineer Game Code**
   - Decompile MHGU executable
   - Find `isQuestCompleted(quest_id)` functions
   - Trace to save file read operations

5. **Community Data Collection**
   - Request saves from players with known completion states
   - Build larger ground truth dataset (20+ saves)
   - Statistical analysis may reveal hidden patterns

---

## Tools Created

All tools available in `/tools/` directory:

1. **`completion_flag_scanner.py`** (750+ lines)
   - Phase 1: Incremental change analysis
   - Phase 2: Consistent base offset detection
   - Phase 3: Candidate validation
   - Phase 4: Full save scan (optional)

2. **`analyze_specific_bits.py`** (200+ lines)
   - Tests known regions against ground truth
   - Searches for perfect match regions
   - Calculates accuracy percentages

3. **`detailed_bit_analysis.py`** (150+ lines)
   - Bit-by-bit comparison for specific quests
   - Raw hex dumps of quest flag regions
   - Incremental diff analysis

### Usage

```bash
cd /home/tommy/MHXXSwitchSaveEditor/tools

# Run full analysis
python3 completion_flag_scanner.py /path/to/saves/directory

# Test specific regions
python3 analyze_specific_bits.py /path/to/saves/directory

# Detailed bit analysis
python3 detailed_bit_analysis.py /path/to/saves/directory
```

---

## Data Summary

```
Save file size: 5,159,100 bytes (MHGU Switch format)
Character slot base: 0x14

Change statistics:
  SAVE_A → SAVE_B: 341,439 bytes changed (6.6% of file)
  SAVE_B → SAVE_C: 239,304 bytes changed (4.6% of file)
  SAVE_C → SAVE_D: 36,108 bytes changed (0.7% of file)

Single-bit changes:
  SAVE_A → SAVE_B: 13,652 locations
  SAVE_B → SAVE_C: 13,020 locations
  SAVE_C → SAVE_D: 4,468 locations

Known regions tested:
  Region A (0x1AFE00): All zeros
  Region B (0x1AFE26): All zeros
  Region C (0x1B019A): All zeros
  Region D (0x1B092E): Partial data, inconsistent

Full save scan:
  Range: 0x14 to 0x200014
  Offsets tested: ~131,072
  Perfect matches: 0
```

---

## Related Documentation

- `quest_flag_research.md` - Original research guide
- `quest_flag_findings.md` - Initial findings
- `quest_flag_troubleshooter_summary.md` - Troubleshooting tool summary
- `quest_flag_absolute_offset_discovery.md` - Earlier absolute offset findings

---

**Status:** Investigation incomplete. Completion flag storage mechanism remains unknown.

**Next Steps:** Attempt dbId indexing hypothesis or reverse engineer game code.

---

**End of Report**
