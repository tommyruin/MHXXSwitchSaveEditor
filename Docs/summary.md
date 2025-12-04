# MHGU Save Editor - Current Status (Updated)

**Project:** MHXXSwitchSaveEditor  
**Status:** In progress — quest completion storage still unresolved  
**Date:** Latest automation runs (headless Ghidra + save diffs) after Dec 2024 investigations

## Where Things Stand
- Core save editing, item/equipment/quest metadata, and binary extraction scripts are working.
- Quest completion flags are **not** located yet. Prior docs claiming the system was solved were incorrect and have been removed.
- Existing “quest flag regions” (0x1AFE00, 0x1AFE26, 0x1B019A, 0x1B092E) remain all zero in tested saves.

## Recent Automation Findings
- Headless Ghidra: only code xref to `mCompleteFlag` is `FUN_60012d20`. Quest-related functions with large offsets to inspect: `FUN_60c06a14` (0x1FF90), `FUN_61320044`/`FUN_613205b0` (0x640000).
- Save diff scan (`tools/completion_flag_scanner.py` over SAVE_A…SAVE_X): thousands of single-bit changes; no consistent quest-bit region. Full scan produced false positives in header bytes (offsets ~0x20) and no validated region for flagIndex 0/5/335, etc.

## What’s Next
1) Inspect the Ghidra candidates above to see if they add those offsets to a save buffer pointer.
2) Re-scan saves focusing on plausible data ranges (skip headers) and around the candidate offsets.
3) If new ground truth becomes available, re-run `completion_flag_scanner.py` on it.

## Key Paths
- Saves used: `Saves/0000000000000001/0/{SAVE_A..SAVE_X}` plus `tools/ground_truth.json` flags.
- Reports: `Game/extracted/quest_completion_report.txt`, `Game/extracted/quest_completion_functions.txt`.
