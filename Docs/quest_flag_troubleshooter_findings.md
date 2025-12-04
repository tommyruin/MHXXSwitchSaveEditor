# Quest Flag Troubleshooter - New Findings

**Date:** December 4, 2024  
**Analysis:** Comprehensive ground truth testing with 1,355 quests  
**Result:** ❌ Current offset theory DISPROVEN  

---

## Summary

After testing with comprehensive ground truth data (8 completed quests, 1,347 not completed quests), we discovered that **the bits at the known offsets do NOT represent quest completion status**.

---

## Ground Truth Data

### Test Setup
- **Total quests marked:** 1,355 (all quests in catalog)
- **Completed:** 8 quests
  - Wipe Out! (Village 1★, index 5)
  - Harvest Tour: Jurassic Frontier (Guild 1★, index 335)
  - Tackling the Tetsucabra (Guild 1★, index 341)
  - Lost in the Jurassic Frontier (Guild 1★, index 342)
  - In Pursuit of the Sand Wyvern (Guild 1★, index 346)
  - Shells of Steel (Guild 1★, index 347)
  - Royal Spit Take (Guild 1★, index 359)
  - A Season for Lava (Event 3★, index 1189)
- **Not completed:** 1,347 quests

---

## Test Results

### Individual Region Accuracy

Testing at known offsets (character-slot-relative):

| Region | Offset | Match Rate | Mismatches |
|--------|--------|------------|------------|
| Region A | 0x1AFE00 | 71.7% | 383 quests |
| Region B | 0x1AFE26 | 70.0% | 407 quests |
| Region C | 0x1B019A | 53.8% | 626 quests |
| Region D | 0x1B092E | 59.0% | 555 quests |

### Combined Regions (OR Logic)

**Result: 14.7% accuracy (199/1355 matches)**

This is **drastically worse** than the 87.5% accuracy from the initial limited test.

---

## Critical Discovery: Pattern of Mismatches

**ALL 1,156 mismatches show the same pattern:**
- Quests marked as "not completed" in ground truth
- Show as bit=1 (set) in the save file

**Examples:**
- Find the Ferns (index 0): expected not completed, got set (1)
- Another Pack Attack (index 6): expected not completed, got set (1)
- Due for Dragon Amber (index 1): expected not completed, got set (1)
- Medicinal Moths (index 2): expected not completed, got set (1)
- A Fungal Hunt (index 4): expected not completed, got set (1)

---

## What The Bits Do NOT Represent

### ❌ Quest Completion
- If these were completion flags, we'd expect bits=0 for not-completed quests
- Instead, almost ALL quests show bit=1, including those confirmed not completed

### ❌ Quest Visibility/Unlocked Status
**Evidence:**
- "Another Pack Attack" (Village 1★, index 6):
  - Bit value: 1 (set)
  - User confirms: **NOT visible in quest log**
- This proves bit=1 does NOT mean "visible" or "unlocked for player"

### ❌ Simple Inverted Logic
- Testing with inverted bits (0=completed, 1=not completed) gave even worse results
- Region A: 28.3%, Region B: 30.0%, Region C: 46.2%, Region D: 41.0%

---

## Possible Explanations

### Theory 1: Internal Game State Flags
The bits might represent internal game states such as:
- Quest data loaded from DLC
- Quest prerequisites evaluation cache
- Quest encountered/discovered (different from player visibility)
- Technical flags for game engine

### Theory 2: Different Data Structure
Completion might use:
- A different bit encoding scheme
- Multiple bits per quest (not single-bit flags)
- Stored at completely different offsets
- Compressed or encoded differently

### Theory 3: Quest Counts Are The Key
The known quest completion **counts** at these offsets are accurate:
- Village Low: 0xC7A1B (2 bytes)
- Village High: 0xC7A1D (2 bytes)
- Hub Low: 0xC7A1F (2 bytes)
- Hub High: 0xC7A21 (2 bytes)
- G-Rank: 0xC7A23 (2 bytes)
- Special Permit: 0xC7A25 (2 bytes)
- Arena: 0xC7A27 (2 bytes)

**These counts are correct, so individual completion data must exist somewhere.**

---

## Why The Initial Test Showed 87.5% Accuracy

The initial test with 7 completed + 1 not-completed quest showed high accuracy because:

1. **Small sample size** (8 quests) masked the pattern
2. **Confirmation bias** - we expected completion flags, so we interpreted the data that way
3. **The 7 "completed" quests likely had bit=1 for unrelated reasons**
4. **The pattern only becomes clear with comprehensive ground truth**

---

## Implications for Current Implementation

### Web App Implementation Status
The current `web/src/lib/saveParser.ts` implementation:
- Reads these 4 regions
- Combines with OR logic
- **Incorrectly interprets bits as completion flags**

**Result:** The web app is likely showing:
- Many false positives (quests marked complete that aren't)
- Possibly missing actual completions
- Unreliable quest flag data

### Need for Re-Implementation

The quest flag feature needs:
1. **Complete redesign** - current offsets are wrong
2. **New offset discovery** - find actual completion data
3. **Different scanning strategy** - may not be simple bit flags

---

## Next Steps

### 1. Search for Alternative Completion Storage

**Method A: Compare Two Saves**
- Load save with 8 completed quests
- Complete one MORE quest in-game
- Compare saves to find what changed
- Look for patterns that match the new completion

**Method B: Hex Search for Known Patterns**
- Search for sequences matching the 8 completed quest IDs
- Look for bit patterns that match exactly 8 set bits
- Check areas near quest count offsets (0xC7A1B+)

**Method C: Analyze Quest Count Storage**
- The counts at 0xC7A1B+ are accurate
- Completion data might be stored nearby
- Could be a list of completed quest IDs
- Could be a different bit structure

### 2. Test Different Bit Mappings

Instead of `flagIndex = sortOrder`, try:
- `flagIndex = dbId`
- `flagIndex = (dbId - 100)` (offset)
- Different bit orderings
- Multi-byte quest IDs

### 3. Focus on Small Ground Truth

Return to small, highly confident ground truth:
- Pick 3-5 quests you're 100% certain are completed
- Pick 3-5 quests you're 100% certain are NOT completed
- Do focused scanning with this high-confidence data

---

## Recommended Immediate Actions

1. **Disable quest flag editing in web app** until correct offsets are found
2. **Document this finding** in implementation summary
3. **Create new scanning tool** focused on:
   - Finding quest IDs as sequences
   - Looking for completion count correlation
   - Testing different encodings

4. **User testing workflow:**
   - Complete a specific quest in-game
   - Save immediately
   - Compare before/after with `hex_compare.py`
   - Focus on single-quest changes

---

## Data Available for Further Analysis

The tool has generated:
- `ground_truth.json` - comprehensive 1,355-quest ground truth
- Known character slot offset: 0x18CC78
- Known (but incorrect) quest flag regions identified

This data remains valuable for:
- Testing new offset theories
- Validating future discoveries
- Understanding save file structure

---

## Conclusion

**The current quest flag implementation is based on incorrect offset assumptions.**

While the discovered regions contain quest-related bit flags, they do NOT represent completion status. The actual completion flags remain undiscovered.

This explains:
- Why "Royal Spit Take" showed inconsistent results
- Why the web app may show incorrect completion data
- Why accuracy dropped dramatically with comprehensive testing

**The quest flag feature needs to be re-researched from scratch with this new understanding.**

---

**Status:** ⚠️ Implementation Suspended - Requires New Offset Discovery  
**Confidence:** High - comprehensive ground truth validates findings  
**Priority:** High - affects data integrity in web app
