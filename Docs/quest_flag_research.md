# Quest Flag Research Guide

## Overview
This guide explains how to manually identify where individual quest completion flags are stored in MHGU save files.

## Current Status

### What's Known
- **Quest completion counts** (totals) are stored in Guild Card at these offsets:
  - Village Low: `0xC7A1B` (2 bytes)
  - Village High: `0xC7A1D` (2 bytes)
  - Hub Low: `0xC7A1F` (2 bytes)
  - Hub High: `0xC7A21` (2 bytes)
  - G-Rank: `0xC7A23` (2 bytes)
  - Special Permit: `0xC7A25` (2 bytes)
  - Arena: `0xC7A27` (2 bytes)

### What's Unknown
- **Individual quest completion flags** - which specific quests have been completed
- The hex offset where these flags are stored
- The format (bit flags vs byte values)

## How to Find Quest Flags

### Step 1: Prepare Test Saves

1. **Load your MHGU save** on your Switch
2. **Choose a specific quest** you haven't completed yet
   - Write down the exact quest name, category, and star rank
   - Example: "Village 3★ - Jaggi Alliance"
3. **Save your game** → This is your "BEFORE" save
4. **Copy the save file** to your computer:
   ```
   Saves/0000000000000001/0/system
   ```
   Rename it to `save_before_quest.bin`

5. **Complete ONLY that one quest** in the game
6. **Save your game again** → This is your "AFTER" save
7. **Copy the save file** again and rename it to `save_after_quest.bin`

### Step 2: Run the Hex Comparison Tool

Use the provided Python script to compare the two saves:

```bash
cd /home/tommy/MHXXSwitchSaveEditor/tools
python3 hex_compare.py save_before_quest.bin save_after_quest.bin
```

#### Advanced Options:

```bash
# Show all changes (not just first 50)
python3 hex_compare.py save_before.bin save_after.bin --all

# Export to CSV for spreadsheet analysis
python3 hex_compare.py save_before.bin save_after.bin --csv changes.csv

# Only check a specific range (if you have a suspicion)
python3 hex_compare.py save_before.bin save_after.bin --range 0x100000 0x200000

# Only show summary and likely flag regions
python3 hex_compare.py save_before.bin save_after.bin --summary-only
```

### Step 3: Analyze the Results

The tool will output:

1. **Summary** - Total number of changed bytes
2. **Quest Flag Analysis** - Regions marked with ⭐ are likely bit flag areas
3. **Detailed Changes** - Exact hex offsets and values

#### What to Look For:

**Bit Flags (Most Likely):**
- Look for regions where only **1 bit changed** in a byte
- Example: `0x00 → 0x01` or `0x04 → 0x05`
- These are typically quest completion flags

**Byte Values (Less Common):**
- Look for bytes that changed from `0x00 → 0x01`
- Could indicate quest status (0 = not completed, 1 = completed)

**Other Changes:**
- Play time, quest counts, etc. will also change
- Focus on the regions marked as "BIT FLAG" regions

### Step 4: Repeat for Confirmation

To confirm your findings:

1. Test with **different quests** in the same category
2. See if nearby bits/bytes change in the same region
3. Build a map of which bit corresponds to which quest

### Step 5: Map Quest IDs to Offsets

Once you've identified the quest flag region:

1. Use the `mhgu.db` database to get the list of quests:
   ```bash
   python3 -c "import sqlite3; conn = sqlite3.connect('scripts/mhgu.db'); \
   cursor = conn.cursor(); \
   cursor.execute('SELECT _id, name, hub, stars FROM quests ORDER BY _id'); \
   for r in cursor.fetchall(): print(f'{r[0]}: {r[1]} ({r[2]} {r[3]}★)')"
   ```

2. Compare quest IDs to the bit positions you found
3. Determine the mapping formula

## Quest Data in Database

The `mhgu.db` database contains a `quests` table with:
- `_id` - Quest ID
- `name` - Quest name (various languages)
- `hub` - Village/Hub/Arena
- `stars` - Star rank
- Other metadata

## Expected Results

### Example Output

```
===========================================
QUEST FLAG ANALYSIS
===========================================

--- Region 1 ---
Offset range: 0x00123450 - 0x0012347F
Size: 48 bytes
Changed bytes: 1
⭐ This region shows single-bit changes (1/1)
   This is likely a BIT FLAG region (one bit per quest)

BEFORE:
  0x00123450: 00 00 04 20 FF 3C 00 A1 ...
               ^^ change here

AFTER:
  0x00123450: 00 00 05 20 FF 3C 00 A1 ...
               ^^ bit 0 set (0x04 → 0x05)
```

This would indicate:
- Quest flags start at `0x00123450`
- Bit flags are used (one bit per quest)
- The quest you completed is mapped to bit 0 of byte offset `0x00123452`

## Next Steps

Once you've identified the quest flag offset and format:

1. **Update the documentation** with your findings
2. **Add parsing logic** to `web/src/lib/saveParser.ts`
3. **Create TypeScript types** for quest data
4. **Build UI component** to display completed quests
5. **Map quest IDs** from the database to flag positions

## Common Quest Flag Patterns

Based on other Monster Hunter games:

- **Village Quests**: Usually a separate flag array
- **Hub Quests**: Another flag array (larger, more quests)
- **Arena/Special**: Often separate smaller arrays
- **DLC Quests**: May be in a different location or at the end

Typical sizes:
- ~50-100 bytes for village quests (~400-800 quests max)
- ~100-200 bytes for hub/G-rank quests
- Organized sequentially by quest ID

## Resources

- **MHFF Wiki**: https://github.com/svanheulen/mhff/wiki
- **Quest ID Format**: ABCDDEE (DLC-Palico-Type-Stars-Number)
- **Database**: `web/scripts/mhgu.db` contains quest metadata

## Tools in This Repository

- `tools/hex_compare.py` - Hex comparison tool (this guide)
- `web/scripts/mhgu.db` - Quest database with names and metadata
- `web/src/lib/saveParser.ts` - Save file parser (to be updated)

---

**Good luck with your research!** Once you find the quest flag offsets, we can implement the quest completion viewer in the web app.
