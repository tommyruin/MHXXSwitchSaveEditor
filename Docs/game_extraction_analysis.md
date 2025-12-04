# MHGU Game File Extraction - Analysis Summary

**Date:** December 4, 2025  
**Status:** Successfully extracted and analyzed game files  
**Location:** `/home/tommy/MHXXSwitchSaveEditor/Game/extracted/`

---

## Extraction Summary

### Successfully Extracted:
- Main executable (NSO → decompressed to 25MB)
- RomFS with 1,849 quest data files
- Quest link files (.qdl) for all quests
- String data (30,687 strings extracted)

### Key Files Locations:
- **Main Executable:** `Game/extracted/main.elf` (25MB)
- **String Database:** `Game/extracted/main_strings.txt` (30,687 lines)
- **Quest Data:** `Game/extracted/romfs/nativeNX/loc/quest/questData/` (1,849 files)
- **Quest Links:** `Game/extracted/romfs/nativeNX/loc/quest/questLink/` (many .qdl files)

---

## Key Findings

### 1. Quest-Related Strings Found

#### Critical Function Names:
```
mCompleteFlag                    - Quest completion flag variable
mForQuestFlag                    - Quest-specific flag
nFestaNetwork::netQuestClear     - Network quest clear function
nFestaNetwork::netQuestClearProcedure - Quest clear procedure
```

#### Quest Data File Pattern:
```
%s\quest\questData\questData_%07d_%s
```
This matches the extracted files: `questData_0000101.ext`, etc.

#### Quest-Related Files:
```
roQuest.cro                      - Quest CRO module
roPlayerQuest%02d.cro            - Player quest module
eventQuestList.bin               - Event quest list
challengeQuestList.bin           - Challenge quest list
```

### 2. Quest Data Structure

Quest data files (`.ext` format) contain:
- Magic header: `KC` (0x4B43)
- Quest ID references (e.g., `$0000101_eng`)
- Language-specific strings
- Quest parameters and flags

Example from `questData_0000101.ext`:
```
Offset 0xE0: $0000101_eng
Offset 0xF0: $0000101_fre
Offset 0x100: $0000101_ger
Offset 0x120: $0000101_ita
Offset 0x130: $0000101_spa
```

### 3. Quest Completion System

Based on string analysis, the game appears to use:
1. **mCompleteFlag** - A flag variable to track quest completion
2. **netQuestClear** functions - Handle quest completion logic
3. Quest data files that reference quest IDs

---

## Quest ID to File Mapping

The quest files follow this pattern:
- **Village Quests:** `questData_0000101.ext` to `questData_0001055.ext`
- **Guild Quests:** `questData_0010101.ext` to `questData_0011490.ext`
- **Event Quests:** `questData_0020001.ext` to `questData_0020011.ext`
- **Arena Quests:** `questData_0030101.ext` to `questData_0030298.ext`
- **Special Quests:** `questData_0040101.ext` to `questData_0041816.ext`
- **DLC Quests:** `questData_0090000.ext` onwards

Total quest files: **1,849 unique quests**

---

## Next Steps for Reverse Engineering

### Immediate Actions:
1. **Install Ghidra** - For ARM64 disassembly of main.elf
2. **Search for offset references** - Look for `0xC7A1B`, `0xC7A1D`, etc. in the binary
3. **Trace `mCompleteFlag` usage** - Find all code that reads/writes this flag
4. **Analyze `netQuestClear` function** - Understand quest completion logic

### Binary Analysis Strategy:
```bash
# Search for known Guild Card quest counter offsets
# These are the offsets we need to understand
0xC7A1B  # Low Rank Village Count
0xC7A1D  # High Rank Village Count
0xC7A1F  # G Rank Village Count
0xC7A21  # Low Rank Hub Count
0xC7A23  # High Rank Hub Count
0xC7A25  # G Rank Hub Count
```

### Ghidra Analysis Plan:
1. Import `main.elf` as ARM64 binary (AARCH64:LE:64:v8A)
2. Auto-analyze with default settings
3. Search for immediate values: 817691 (0xC7A1B in decimal)
4. Trace function calls to/from `mCompleteFlag` references
5. Find save file read/write functions
6. Map quest ID → completion flag bit calculation

---

## String Analysis Results

### Quest-Related Strings (325 total):
```bash
# Top findings from quest_strings.txt:
aQuest                           - Quest string identifier
roQuest.cro                      - Quest module
uUIQuestBoard                    - Quest board UI
uUIQuestCounter                  - Quest counter UI
uUIQuestStart                    - Quest start UI
mQuestNo[0-2]                    - Quest number arrays
uQuestCamera                     - Quest camera
rPastQuestGroup                  - Past quest group
cPastQuestGroup                  - Quest group class
eventQuestList.bin               - Event quest binary list
challengeQuestList.bin           - Challenge quest list
```

### Save-Related Strings:
```bash
mFlag                            - Generic flag
mAcceptFlag                      - Quest accept flag
mCompleteFlag                    - Quest completion flag  ← KEY
mSpFlag                          - Special flag
mForQuestFlag                    - Quest-specific flag   ← KEY
```

---

## Quest File Structure Analysis

### Quest Data (.ext) Files:
- **Size:** ~329 bytes average
- **Format:** Binary data with embedded text references
- **Contents:**
  - Quest parameters
  - Language references
  - Quest ID mappings
  - Completion requirements (likely)

### Quest Link (.qdl) Files:
- Links quests together (prerequisites, chains)
- Maps quest IDs to completion dependencies
- Could contain flag offset information

---

## Tools Installed

1. **hactool** - Successfully compiled and used
   - Location: `/tmp/hactool/hactool`
   - Keys: `~/.switch/prod.keys`, `~/.switch/title.keys`
   - Successfully decrypted MHGU titlekey

2. **strings** - Used for initial analysis

3. **Python 3** - Available for scripting

---

## Extracted Game Information

### SDK Version: 4.4.1.0
### Title ID: 0100770008dd8000
### Titlekey: c53e5b58639c45ba07cacd533fd3ce89
### Build ID: 936ABC6624FC8D8A72E277EB82576F5200000000000000000000000000000000

### Executable Sections:
```
.text:    00000000-013ef000  (Code)
.rodata:  013ef000-01728000  (Read-only data)
.rwdata:  01728000-01843c90  (Read/write data)
.bss:     01843c90-02140000  (Uninitialized data)
```

---

## Recommended Next Action

**Install Ghidra and begin ARM64 analysis of the main executable.**

The key is to find:
1. How quest IDs map to save file bit offsets
2. The formula: `offset = f(questId)` 
3. Which quest IDs are excluded from completion tracking

This will solve the quest flag mystery once and for all.

---

## File Sizes Summary

```
Main executable:     25 MB
String database:     ~500 KB
Quest data files:    1,849 files (~600 KB total)
RomFS total:         ~12 GB
Extracted total:     ~12.5 GB
```

---

**Status:** Ready for Ghidra analysis  
**Next Tool:** Ghidra 10.4+ with ARM64 support
