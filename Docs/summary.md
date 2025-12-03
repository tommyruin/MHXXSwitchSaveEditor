# Project Summary

## Web App Status
- Created a new browser-only React + TypeScript front end in `web/` using Vite. Added project configs (`package.json`, `tsconfig*.json`, `vite.config.ts`, `index.html`, entry files).
- Ported core save parsing/writing for general player data to TS (`src/lib/saveParser.ts`, `src/lib/types.ts`): detects 3DS vs Switch saves, pulls slot offsets, parses/writes name, play time, funds, HR, HR points, and village/academy points, preserves headers when reassembling.
- Added parsing/writing scaffolding for item box bit-packing, hunter/palico equipment boxes, palicoes, guild card + arena log, shoutouts, and monster logs with size validation in TS.
- Built a styled UI (`src/App.tsx`, `src/App.css`, `src/index.css`) that lets you load a save locally, select an occupied slot, edit core fields with name byte-length guard and playtime formatter, and download the updated save—no server involved. New data-block summary section shows counts/byte sizes and preserves the newly ported blocks on download (currently read-only).
- Still to do: make the new sections editable (item box, equipment, palicoes, guild card, shoutouts, monster logs) to reach feature parity with WinForms.

---

# Quest Progress Research - December 3, 2025

## Overview
Analyzed MHGU save files to understand how quest progress is stored. Compared saves before and after completing one Gathering Hub quest.

## Key Findings

### 1. Quest Completion Counts (Already Implemented ✅)
- Location: Guild Card section, offset `0xC71BD` base
- Format: 16-bit unsigned integers (little-endian)
- Already parsed in both C# and web app
- Stores total quest counts per category (Village Low/High, Hub Low/High, G-Rank, etc.)

### 2. Individual Quest Completion Flags (NEW! 🎯)

Found **multiple candidate regions** with bit flags for individual quest completion:

#### Primary Candidates:
- **Region `0x001B092E`** - Most likely Hub quest flags
  - Change: `0x02 → 0x03` (bit 0 set)
  - Followed by category marker `0x21`
  
- **Region `0x001B0A72`** - Adjacent quest flags (324 bytes after first)
  - Change: `0x02 → 0x03` (bit 0 set)
  - Followed by category marker `0x22`

- **Region `0x0025432D`** - Possible Village quest flags
  - Change: `0x02 → 0x03` (bit 0 set)
  - Near guild card region

- **Region `0x00254571`** - Adjacent Village flags (580 bytes after previous)
  - Change: `0x02 → 0x03` (bit 0 set)

#### Pattern:
All show **single-bit changes** - the signature of bit flag arrays where each bit represents one quest.

### 3. Quest History Log

- **Location:** `0x00254000` - `0x00255000` region
- **Format:** UTF-16 LE strings (quest names)
- **Behavior:** Quest names shift down when new quest completed (FIFO queue)
- Stores ~10 recently completed quests

### 4. Play Time Tracking

- **Primary counter:** `0x0018CCBC` (8 bytes)
- **Secondary counter:** `0x001AF127` (8 bytes)
- Format: Two 32-bit integers tracking play time in seconds/frames
- Incremented by quest duration after completion

## Tools Created

1. **`tools/hex_compare.py`** - Comprehensive byte-by-byte save comparison
   - Identifies changed regions
   - Detects bit flag patterns (marks with ⭐)
   - Exports to CSV
   - Shows hex context around changes

2. **`tools/quest_flag_finder.py`** - Quest flag detection tool (already existed)
   - Compares saves
   - Highlights single-bit changes

3. **Documentation:**
   - `Docs/quest_flag_findings.md` - Detailed hex analysis
   - `Docs/quest_flag_research.md` - Research methodology guide

## Next Steps

1. **Test with more quests:**
   - Complete different Hub quests (various star ranks)
   - Complete Village quests
   - Map which bits correspond to which quest IDs

2. **Database integration:**
   - Query `web/scripts/mhgu.db` for quest list
   - Map quest IDs to bit positions
   - Determine category separation

3. **Implementation:**
   - Add quest flag parsing to `saveParser.ts`
   - Create quest completion UI component
   - Display quest names from database

## Implementation Priority

1. ✅ Quest completion counts (done)
2. 🔲 Quest history log parser (easy - UTF-16 strings)
3. 🔲 Play time parser (easy - 2 integers)
4. 🔲 Individual quest flags (complex - needs more testing)
5. 🔲 Quest completion UI component
