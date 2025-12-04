# dbId Hypothesis Testing - Final Results

**Date:** December 4, 2024  
**Test:** Using actual database IDs instead of flagIndex for quest completion tracking  
**Result:** ❌ Hypothesis partially validated but not conclusive

---

## Executive Summary

Testing revealed that **quest completion flags ARE partially indexed by dbId** (not flagIndex), with **separate storage regions for Village and Guild quests**. However, no configuration achieved 100% accuracy, suggesting the storage mechanism is more complex than a simple bit array.

---

## dbId Extraction

Successfully extracted dbIds from the MHGU database (`mhgu.db`):

| Quest Name | flagIndex | dbId | Hub | Stars |
|------------|-----------|------|-----|-------|
| Find the Ferns | 0 | 101 | Village | 1★ |
| Wipe Out! | 5 | 106 | Village | 1★ |
| Royal Spit Take | 460 | 328 | Village | 3★ |
| Harvest Tour: Jurassic Frontier | 335 | 10101 | Guild | 1★ |
| Tackling the Tetsucabra | 449 | 10107 | Guild | 1★ |
| Lost in the Jurassic Frontier | 342 | 10108 | Guild | 1★ |
| In Pursuit of the Sand Wyvern | 346 | 10112 | Guild | 1★ |
| Shells of Steel | 452 | 10113 | Guild | 1★ |

**Key Insight:** Village quests have dbIds in the 100-500 range, while Guild quests have dbIds in the 10,000+ range.

---

## Findings

### 1. Separate Village and Guild Regions

**Village Quest Base (dbId < 10000):**
- **Absolute offset:** `0x002890C3`
- **Relative offset:** `0x002890AF` (from character slot base)
- **Logic:** INVERTED (bit 1 = not completed, bit 0 = completed)
- **Accuracy:** Matches dbId 101 and 106 in some saves

**Guild Quest Bases (dbId >= 10000):**
Found 4 adjacent base offsets that match Guild quests with normal (`0→1`) logic:
- `0x0023D717` (relative: `0x0023D703`)
- `0x0023D71B` (relative: `0x0023D707`)
- `0x0023D727` (relative: `0x0023D713`)
- `0x0023D72B` (relative: `0x0023D717`)

These 4 bases are likely mirrors/duplicates of the same data.

### 2. Partial Pattern Match

Testing Village base `0x002890C3` + Guild base `0x0023D717`:

| dbId | Type | Expected Pattern | Actual Pattern | Match Rate |
|------|------|------------------|----------------|------------|
| 101 | Village | Varies by save | Inconsistent | ~40% |
| 106 | Village | Varies by save | Inconsistent | ~20% |
| 328 | Village | Only in SAVE_X | Always 0 | 0% |
| 10101 | Guild | Set in SAVE_D, SAVE_X | Inconsistent | ~40% |
| 10107 | Guild | Set in SAVE_X | Set in most saves | Poor |
| 10108 | Guild | Set in SAVE_X | Set in most saves | Poor |
| 10112 | Guild | Set in SAVE_X | Varies | Poor |
| 10113 | Guild | Set in SAVE_X | Varies | Poor |

**Overall accuracy:** ~30-40% (far from the 100% needed)

### 3. dbId Values Found Everywhere

Search for dbId values (as 2-byte little-endian) in save files:

| dbId | SAVE_A | SAVE_B | SAVE_X | Notes |
|------|--------|--------|--------|-------|
| 101 | 558 | 541 | 599 | Hundreds of occurrences |
| 106 | 68 | 69 | 70 | Many occurrences |
| 10101 | 7 | 8 | 8 | Fewer, but still multiple |
| 10107 | 20 | 17 | 21 | Multiple occurrences |
| 10108 | 14 | 13 | 15 | Multiple occurrences |

**Interpretation:** These are likely references to quest data throughout the save (monster IDs, equipment references, quest rewards, etc.), not a dedicated completion flag array.

---

## Why dbId Indexing Failed

### 1. Inconsistent Patterns Across Saves

Even with separate Village/Guild bases and appropriate bit logic:
- SAVE_A (fresh) shows bits already set that shouldn't be
- SAVE_B (1 quest) shows the wrong bit for that quest
- SAVE_X (7 quests) has inconsistent patterns

**This suggests the tested regions are NOT pure completion flags.**

### 2. No Common Base for All Quest Types

Village quests (dbId < 10000) and Guild quests (dbId >= 10000) require completely different base offsets, which is unusual for a unified quest system.

### 3. dbIds Appear Throughout Save

With hundreds of occurrences of each dbId, it's impossible to identify which specific instance represents the completion flag without understanding the broader save structure.

---

## Possible Explanations

### Hypothesis 1: Quest History Structure

Quest completion may be stored as a **list of completed quest records**, not a bit array:

```
struct QuestRecord {
    uint16_t dbId;          // 2 bytes
    uint8_t  completionCount; // 1 byte
    uint32_t bestTime;       // 4 bytes
    uint8_t  rewards;        // 1 byte
    // ... other metadata
}
```

This would explain:
- Why dbIds appear multiple times (one per completed quest)
- Why there's no simple bit-array pattern
- Why 341,439 bytes change after completing a single quest

### Hypothesis 2: Multiple Flag Types

The regions we found may track **different types of flags**:
- **Unlock flags** (quest is available to attempt)
- **First clear flags** (cleared at least once)
- **Perfect clear flags** (cleared with special conditions)
- **Displayed flags** (shown on quest board)

Our tests may be mixing these different flag types.

### Hypothesis 3: Compressed/Hashed Storage

Quest completion might use:
- Run-length encoding
- Hash tables
- Compressed bit vectors
- Dynamic allocation based on progression

This would explain why we can't find a fixed offset pattern.

---

## Comparison: flagIndex vs dbId

| Aspect | flagIndex | dbId |
|--------|-----------|------|
| **Index range** | 0-1354 (contiguous) | 100-500 (Village), 10000+ (Guild) |
| **Storage requirement** | ~170 bytes (1355 bits) | ~1300 bytes (10113 bits) |
| **Pattern found** | No consistent pattern | Partial pattern (2 regions) |
| **Accuracy** | 0% (known regions empty) | ~30-40% (inconsistent) |
| **Likelihood** | Low | Medium (but incomplete) |

**Conclusion:** dbId indexing is closer to the truth than flagIndex, but still not the complete picture.

---

## Recommendations

### 1. Reverse Engineer Game Code (High Priority)

Since empirical analysis has reached its limits, the next step is to:
- Decompile MHGU executable
- Find `checkQuestCompleted(quest_id)` or similar functions
- Trace save file read operations
- Identify exact offset calculations

**Tools:** Ghidra, IDA Pro, or similar disassemblers

### 2. Analyze Quest History Structure (Medium Priority)

Look for quest records with this pattern:
```
[dbId (2 bytes)][status/count][time][rewards]...
```

Search for sequences of known completed dbIds (101, 106, 10101, etc.) in SAVE_B, SAVE_C, SAVE_D.

### 3. Test With More Quest Types (Low Priority)

Expand testing to include:
- Arena quests (different dbId range)
- Event/DLC quests
- Special Permit quests
- Different ranks (LR, HR, G-Rank)

May reveal additional patterns or separate storage regions.

### 4. Community Collaboration

- Share findings with MHGU modding community
- Check if anyone has documented quest completion offsets
- Compare with other Monster Hunter games (MH4U, MHGen, MHW)

---

## Tools Created

### `test_dbid_hypothesis.py`

Comprehensive test script that:
1. Extracts dbIds from MHGU database
2. Performs incremental analysis (SAVE_A→B→C→D)
3. Searches for matching bit patterns
4. Cross-references Village and Guild quest bases
5. Validates against all saves

**Usage:**
```bash
cd /home/tommy/MHXXSwitchSaveEditor/tools
python3 test_dbid_hypothesis.py [saves_directory]
```

**Output:** Detailed analysis of dbId-indexed completion patterns

---

## Key Data

```
Character slot base: 0x14

Village quest region:
  Absolute: 0x002890C3
  Relative: 0x002890AF
  Logic: INVERTED (1=not done, 0=done)
  Size: ~500 bytes (covers dbId 0-4000)

Guild quest region candidates:
  0x0023D717 (relative: 0x0023D703)
  0x0023D71B (relative: 0x0023D707)
  0x0023D727 (relative: 0x0023D713)
  0x0023D72B (relative: 0x0023D717)
  Logic: NORMAL (1=done, 0=not done)
  Size: ~1300 bytes (covers dbId 10000-20000)

dbId ranges:
  Village: 100-699
  Guild: 10001-10899
  Arena: ???
  Event: ???
  Special Permit: ???
```

---

## Conclusion

The **dbId hypothesis is partially correct** - quest completion IS related to dbId indexing, not flagIndex, and Village/Guild quests ARE stored in separate regions. However:

❌ **No perfect match found** (~30-40% accuracy)  
❌ **Pattern inconsistent across saves**  
❌ **dbIds appear hundreds of times in save data**  

**Quest completion storage is more complex than a simple dbId-indexed bit array.** Further investigation requires either:
1. Reverse engineering the game code
2. Discovering the quest history/record structure
3. Understanding additional flag types beyond simple completion

The current web app implementation (using flagIndex-based regions A-D) is definitely incorrect and should be disabled or marked as experimental.

---

**Status:** Investigation incomplete. Requires game code analysis or community input.

**Next recommended action:** Reverse engineer MHGU executable to find quest completion check functions.
