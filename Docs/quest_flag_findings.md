# Quest Flag Research Findings

**Date:** December 3, 2025  
**Test:** Completed one gathering hall quest

## Summary

After comparing saves before and after completing a Hub quest, I identified **several candidate regions** for quest completion flags. The comparison shows 849,371 changed bytes across 54 regions.

## 🎯 Most Likely Quest Flag Regions

These regions show **single-bit changes** (marked with ⭐), which is the signature pattern for quest completion flags:

### Region 3: `0x0018CDAD`
- **Change:** `0x80` → `0x00` (bit 7 cleared)
- **Pattern:** Single-bit flag
- **Context:** Near other quest-related data

### Region 4: `0x0018CE31`
- **Change:** `0x00` → `0x80` (bit 7 set)
- **Pattern:** Single-bit flag
- **Context:** Similar offset pattern to Region 3 (offset by 0x84 bytes)

### Region 8: `0x0018F93D`
- **Change:** `0x00` → `0x04` (bit 2 set)
- **Pattern:** Single-bit flag

### Region 10: `0x001B092E`
- **Change:** `0x02` → `0x03` (bit 0 set)
- **Pattern:** Single-bit flag
- **Data after:** `0x21` which could be a quest category marker

### Region 11: `0x001B0A72`
- **Change:** `0x02` → `0x03` (bit 0 set)
- **Pattern:** Single-bit flag
- **Data after:** `0x22` followed by quest category marker

### Region 14: `0x0025432D`
- **Change:** `0x02` → `0x03` (bit 0 set)
- **Pattern:** Single-bit flag
- **Context:** Near guild card data region

### Region 15: `0x00254571`
- **Change:** `0x02` → `0x03` (bit 0 set)
- **Pattern:** Single-bit flag
- **Offset from Region 14:** 580 bytes (0x244)

## 📊 Quest Count Changes

### Region 6: `0x0018F511`
- **Change:** `0x03` → `0x04` (+1)
- **Type:** Quest counter (incremented by 1)
- **Likely:** Hub quest completion count

### Region 16: `0x002546BB`
- **Change:** `0x07` → `0x08` (+1)
- **Type:** Quest counter (incremented by 1)

### Region 17: `0x00254741`
- **Change:** `0x01` → `0x02` (+1)
- **Type:** Quest counter (incremented by 1)

## 🕐 Time/Session Data

### Region 2: `0x0018CCBC - 0x0018CCC0`
- **Before:** `22 1D 00 00 38 8D 21 00`
- **After:** `7A 1D 00 00 C4 8D 21 00`
- **Change:** Play time increased
  - First value: `0x1D22` → `0x1D7A` (+88 decimal = 1 minute 28 seconds)
  - Second value: `0x218D38` → `0x218DC4` (+140 decimal)
- **Type:** Playtime/timestamp counter

### Region 9: `0x001AF127 - 0x001AF12D`
- **Before:** `22 1D 00 00 45 17 08 42`
- **After:** `7A 1D 00 00 78 0E 56 42`
- **Type:** Another playtime/session timestamp

## 📝 Quest History/Log Data

### Regions 18-27: String Data Changes
These regions show quest names being shuffled in what appears to be a **quest history log** or **recently completed quests list**:

- Region 18 (`0x0025476D`): "Royal Spit..." → "Harvest Tou..."
- Region 19 (`0x00254811`): "Wipe Out!" → "Royal Spit Ta..."
- Region 20 (`0x002548B1`): "Shells of Steel" → "Wipe Out!"
- Region 21 (`0x002549F7`): "Shells of Steel" → "Tackling the T&..."
- Region 22 (`0x00254A97`): "Lost in the Ju&..." → "Shells of Steel"
- Region 23 (`0x00254B31`): "In Pursuit of..." → "Lost in the..."
- Region 24 (`0x00254BD7`): "A Season for L&..." → "In Pursuit of &..."
- Region 25 (`0x00254C71`): Empty → "A Season for..."

**Pattern:** Quest names are shifting - new quest pushes old ones down in a history list.

## 🗄️ Large Data Regions

### Region 13: `0x001BAFDD - 0x0024ABA0`
- **Size:** 626,300 bytes (565,417 changed)
- **Before header:** `ARC.........quest\boss\setEmP...`
- **After header:** `...."...a.n.d.r.o.i.d...g.u.i...`
- **Type:** Large archive/resource data (possibly quest file cache or DLC data)

### Region 27: `0x00257683 - 0x002A3DC0`
- **Size:** 313,150 bytes (283,628 changed)
- **Same pattern:** ARC header replaced with android.gui data
- **Type:** Another archive/resource section

## 🎮 Palico/Weapon Data

### Region 28: `0x002A9597 - 0x002A959F`
- **Change:** "Hired Heavy" → "Hired Lance"
- **Type:** Palico equipment or weapon type change

## Next Steps

To identify **individual quest completion flags**, focus on:

1. **Regions 10 & 11** (`0x001B092E` and `0x001B0A72`)
   - Both show `0x02 → 0x03` (bit 0 set)
   - Followed by quest category bytes (`0x21`, `0x22`)
   - These are **most likely** quest completion flags

2. **Test methodology:**
   - Complete **one specific Hub quest**
   - Note which bit changes in these regions
   - Map bit position to quest ID from database

3. **Check region size:**
   - Calculate bytes between Region 10 and nearby flags
   - Estimate total quest flag array size
   - Compare with total quest count in database

## Database Quest Count

Run this to see how many quests are in each category:

```sql
SELECT hub, COUNT(*) as quest_count 
FROM quests 
GROUP BY hub;
```

Then calculate expected flag array size:
- If 500 quests → need ~63 bytes (500 bits / 8 = 62.5)
- If 1000 quests → need ~125 bytes

## Recommended Implementation Order

1. ✅ **Parse quest counts** (already implemented at `0xC7A1B` region)
2. 🔲 **Parse playtime** (Region 2: `0x0018CCBC`)
3. 🔲 **Parse quest history log** (Regions 18-27 around `0x00254000`)
4. 🔲 **Parse quest completion flags** (Regions 10-11 around `0x001B0000`)
5. 🔲 **Map flags to quest IDs** using database

## Files Generated

- `quest_changes.csv` - Full diff export for further analysis
