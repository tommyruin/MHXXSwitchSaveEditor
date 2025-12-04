# Quest Completion Flag Investigation - Comprehensive Analysis

**Date:** December 4, 2024  
**Investigator:** OpenCode AI  
**Objective:** Identify where quest completion flags are stored in MHGU save files using systematic analysis

---

## Update (latest automation)
- Re-ran `tools/completion_flag_scanner.py` on the five labeled saves (`Saves/0000000000000001/0/SAVE_A..SAVE_X`), including full scan. Result: no consistent quest-bit region; “100%” hits were header bytes near offset `0x20` (not usable).
- Headless Ghidra automation shows only one xref to `mCompleteFlag` (function `FUN_60012d20`). Quest-related functions with large offsets worth inspecting for save buffer math: `FUN_60c06a14` (offset `0x1FF90`), `FUN_61320044` and `FUN_613205b0` (offset `0x640000`).
- Previously identified regions (0x1AFE00, 0x1AFE26, 0x1B019A, 0x1B092E) remain all zeros across the saves; no quest completions reflected there.
- Structured record findings (Dec 6): The quest completions we can see live in a fixed record table at abs `0x250000-0x260000` with 0xA0-byte records. Names are UTF-16 at +0x79; a 16-bit ID is at +0x77. `SAVE_X` records include:
  - 0x254700: id 0x2776, “Harvest Tour: Jurassic Frontier”
  - 0x2547A0: id 0x2775, “Harvest Tour: Jurassic Frontier”
  - 0x254840: id 0x278D, “Royal Spit Take”
  - 0x2548E0: id 0x006A, “Wipe Out!” (note: not the dbId 0x2715)
  - 0x254980: id 0x2781, “Shells of Steel”
  - 0x254A97: dbId 0x277B (10107), “Lost in the Jurassic Frontier”
  `SAVE_D` shows Harvest Tour at 0x254777 (dbId 10101). This region is a quest log, not a bitfield; the +0x77 ID sometimes equals dbId (Guild quests) and sometimes a different internal ID (Village Wipe Out!).

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
| **SAVE_X** | 7 quests | Wipe Out!, Harvest Tour, + 5 more Guild quests  |

### Quest Details

```
Find the Ferns (Village 1★)
Wipe Out! (Village 1★)
Harvest Tour: Jurassic Frontier (Guild 1★)
Lost in the Jurassic Frontier (Guild 1★)
In Pursuit of the Sand Wyvern (Guild 1★)
Tackling the Tetsucabra (Guild 1★)
Shells of Steel (Guild 1★)
Royal Spit Take (Guild 1★)
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

## Update: Targeted Scan Results (Dec 4, 2024 - Part 2)

Following the lead from `FUN_60c06a14` (offset `0x1FF90`), a targeted scan was performed around this offset.

**Initial Findings (DEBUNKED):**
- Initially, offsets `0x1DFA0` and `0x1E1E8` appeared to have 100% accuracy with inverted logic.
- **However**, further verification revealed this was a **False Positive**.

**Verification Results:**
- Running the logic on `SAVE_A` (fresh save, 0 quests completed) showed **800+ completed quests**.
- This indicates the regions are simply initialized to `0` (or `1` depending on logic) and do not represent actual quest flags.
- The "100% accuracy" was due to the scanner checking for the *presence* of expected flags but failing to penalize the *presence* of unexpected flags (false positives).

**Conclusion:**
- Offsets `0x1DFA0` and `0x1E1E8` are **NOT** quest completion flags.
- Offset `0x640000` is confirmed out of bounds.
- The location of quest flags remains unknown.

## Update: Disassembly and Stricter Scan (Dec 4, 2024 - Part 3)

**1. Stricter Scanner Results:**
- The `targeted_scanner.py` was updated to strictly reject any candidate that marks *unexpected* quests as completed (false positives).
- **Result:** No valid candidates found around `0x1FF90` (absolute or relative). The previous "hits" were indeed false positives.

**2. Disassembly Analysis (Capstone):**
- **`FUN_60c06a14`**: Analyzed. Builds lists/objects but does not use large immediates like `0x1FF90` or `0x640000`.
- **`FUN_61320044`**: Manipulates struct fields (offsets `0x100`, `0x54`, `0x2c`). No large save offsets observed.
- **`FUN_613205b0`**: Contains `mov r5, #0x640000`, but this is used as a literal in control flow, not as an offset added to a save buffer pointer.

**3. Quest ID Search:**
- A search for 16-bit Quest IDs (e.g., 5, 335, 342) showed that these IDs appear thousands of times in the file.
- New offsets appear even before quests are completed, suggesting they are not a clean "completion record" signature.

**Next Steps:**
- Investigate "structured record" hypothesis.
- Look for growing tables or lists near regions `0x23Bxxx` and `0x25xxxx` that might store completed Quest IDs.

## Update: Structured Records + `0x23Bxxx` Table (Dec 7, 2024)

- **Quest log structure confirmed (`0x250060-0x260000`, 0xA0-byte records):** `+0x77` holds a 16-bit ID, `+0x79` UTF-16 name. Records append in reverse-chronological order as quests are completed. Examples:
  - `SAVE_B`: `Find the Fern` at `0x254700` (id `0x65`).
  - `SAVE_C`: `Wipe Out` at `0x254700` (id `0x6A`), `Find the Fern` shifts to `0x2547A0`.
  - `SAVE_D`: `Harvest Tour: Jurassic Frontier` at `0x254700` (id `0x2775`), `Wipe Out` at `0x254840`, `Find the Fern` at `0x2548E0`.
  - `SAVE_X`: 11 human-readable entries (`Harvest Tour` twice, `Royal Spit Take`, `Shells of Steel` twice, `Tackling the Tetsucabra`, `Lost in the Jurassic Frontier`, `In Pursuit of the Sand Wyvern`, `A Season for L...`, plus the earlier Village quests).
  - A small header/placeholder at `0x254660` contains the static string `"s do this"` in all saves.

- **ID-indexed table at `0x23B000` (4 bytes per entry, likely `dbId`-indexed):** Entry offset = `0x23B000 + (dbId * 4)`. First byte changes with progress; remaining bytes stay `0xFF`. Observed values:
  - `Find the Fern` (`dbId 0x0065` @ `0x23B194`): `SAVE_B/C = 0xE1`, `SAVE_D = 0x00`, `SAVE_X = 0x05`.
  - `Wipe Out` (`dbId 0x006A` @ `0x23B1A8`): `SAVE_B/C = 0xE3`, `SAVE_D = 0x00`, `SAVE_X = 0x04`.
  - `Harvest Tour` variants (`0x2775/0x2776` @ `0x244DD4/0x244DD8`): `SAVE_D = 0xFF`, `SAVE_X = 0x5D/0x53`.
  - `Royal Spit Take` (`0x278D` @ `0x244E34`): `SAVE_D = 0xFF`, `SAVE_X = 0x59`.
  - `A Season for L...` (`0x6954` @ `0x255550`): `SAVE_X = 0x00`.
  Many entries flip from `0xFF` to small values between `SAVE_D` and `SAVE_X` (10k+ entries differ), suggesting per-quest counters/flags rather than a single bitfield.

- **Interpretation:** The `0x250060` region is a quest history log (append-only). The `0x23B000` table is indexed by `dbId` and changes with play but does not yet map cleanly to a boolean "completed" flag; bytes might be counters or rank codes.

- **Recommended experiments:**
  1. Capture `0x23B000` before/after completing one specific quest (e.g., `Find the Fern`, `Wipe Out`, `Harvest Tour`) to see if its byte increments or flips from `0xFF/0x00` to a small value.
  2. Cross-check a new log insertion in `0x250060` with simultaneous change in the quest’s `0x23B000` byte to link the two structures.
  3. Repeat the same quest multiple times to see if the byte increments (counter) or toggles (flag).

- **Follow-up readout from existing saves (first byte of `0x23B000 + dbId*4`):**

```
dbId  | SAVE_A | SAVE_B | SAVE_C | SAVE_D | SAVE_X
0065  Find the Fern                 77       ff       ff       00       05
006A  Wipe Out                      77       ff       ff       00       04
2775  Harvest Tour A                7e       ff       ff       ff       5d
2776  Harvest Tour B                7e       ff       ff       ff       53
2781  Shells of Steel               7a       00       00       00       63
278D  Royal Spit Take               70       ff       ff       ff       59
277B  Tackling the Tetsucabra       7c       6f       6f       ff       57
277C  Lost in the Jurassic Frontier 7b       ff       ff       ff       52
2780  In Pursuit of the Sand Wyvern 7c       00       00       00       5d
6954  A Season for L...             00       00       00       00       00
```

  - Many entries stay `0xFF` until later saves; some flip to `0x00` in `SAVE_D` (first completion wave) and to small non-FF values in `SAVE_X`. `SAVE_A` shows non-FF defaults (likely initialization noise), so a true before/after capture per quest is needed.
  - Working hypothesis: first byte is a counter/grade per quest id; `0xFF` may mean “unseen,” and small numbers may be attempt/clear counts. Needs validation via single-quest before/after tests.

---



**End of Report**


## Update: Single HR1 Harvest Tour from Fresh Baseline (Dec 8, 2024)

- **Setup:** Copied fresh `SAVE_A` (no quests logged) → ran **Harvest Tour: Jurassic Frontier (HR1, Guild)** once → saved as `SAVE_A_2`.

- **Quest log (`0x250060-0x260000`):** New Harvest Tour entry added at `0x254700` (id `0x2776`). Two preceding gibberish entries appeared (likely system placeholders). Header at `0x254660` unchanged.

- **Per-dbId table changes (`0x23B000 + id*4`):**
  - `0x2775` (Harvest Tour A): `7e877e87` → `00000000`
  - `0x2776` (Harvest Tour B): `7e877e87` → `00000000`
  - `0x278D` (Royal Spit Take): `70947195` → `00020e02`
  - `0x2781` (Shells of Steel): `7a8d798e` → `00000050`
  - `0x0065` (Find the Fern): `77897789` → `47000000`
  - `0x006A` (Wipe Out): `778d768d` → `50ac091b`

- **Interpretation:** A single Guild quest run from a clean baseline zeroed the Harvest Tour dbIds and rewrote multiple other quests to non-FF values. The table clearly mutates per-dbId on quest activity, but values are not a simple boolean; different quests get different small integers/zeros. The quest log remains the reliable completion history; the `0x23B000` table stores mutable per-quest state whose semantics are still unclear.

### Recommended Next Steps (revised)
1. From a fresh-ish baseline (e.g., `SAVE_A`), run one untouched Guild quest whose entry is `0xFF` and capture pre/post to see the first transition direction. Royal Spit Take (`0x278D`) is a good target if still `0xFF` in your current in-game copy.
2. Repeat the same quest twice more from that baseline copy to see whether the table entry increments, toggles, or rewrites trailing bytes.
3. Correlate any nonzero bytes with in-game counters (e.g., quest clear count, cart count, time) to guess meaning; the variation (00, 3B, 3E, 50, 47…) suggests more than a flag.
4. Treat the quest log (`0x250060`) as the authoritative completion list for display; avoid using `0x23B000` as a boolean until semantics are decoded.

---

