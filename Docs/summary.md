# MHGU Save Editor - Current Status (Updated)

**Project:** MHXXSwitchSaveEditor  
**Status:** Partially understood — quest completion history and per-quest state located, boolean semantics still unresolved  
**Date:** Latest automation runs (headless Ghidra + save diffs) after Dec 2024 investigations

## Where Things Stand
- Core save editing, item/equipment/quest metadata, and binary extraction scripts are working.
- There is no simple global quest completion bitfield. Quest completion history is stored in a quest log region and per-quest state is stored in a dbId-indexed table; prior docs claiming a solved bitfield were incorrect and have been removed.
- Existing “quest flag regions” (0x1AFE00, 0x1AFE26, 0x1B019A, 0x1B092E) remain all zero in tested saves.

## Recent Automation Findings
- Quest completions appear as append-only quest log records in a fixed 0xA0-byte table at `0x250060–0x260000` per character, with dbId at +0x77 and UTF-16 quest name at +0x79.
- Save diff scan (`tools/completion_flag_scanner.py` over SAVE_A…SAVE_X) confirmed there is no consistent quest-bit region indexed by `flagIndex`; previous "quest flag" regions A–D are empty and full scans produced only false positives in unrelated header bytes.

## What’s Next
1) Use quest log records as the primary source for displaying quest completion in tools and UI; avoid editing quest completion until the semantics of the per-quest state table are fully understood.
2) Collect additional labeled saves and analyze how the `0x23B000 + dbId*4` per-quest entries evolve across "never seen" / "attempted" / "cleared" states, rejecting any heuristic that produces false positives on fresh saves.
3) If a safe read-only completion heuristic emerges for the `0x23B000` table, document it and consider limited editor support; otherwise, keep quest completion editing disabled.

## Key Paths
- Saves used: `Saves/0000000000000001/0/{SAVE_A..SAVE_X}` plus `tools/ground_truth.json` flags.
- Reports: `Game/extracted/quest_completion_report.txt`, `Game/extracted/quest_completion_functions.txt`.
