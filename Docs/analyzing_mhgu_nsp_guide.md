# Analyzing MHGU .nsp File - Complete Guide

**Goal:** Extract and analyze Monster Hunter Generations Ultimate game files to find quest completion flag logic  
**File Size:** 11 GB .nsp (Nintendo Submission Package)  
**Available Space:** 939 GB

---

## Overview

To reverse-engineer quest completion flags, we need to:
1. **Extract** the .nsp file to access game code
2. **Decompile** the executable to readable code
3. **Search** for quest completion check functions
4. **Trace** save file read/write operations

---

## Step 1: Extract the .nsp File

### What is an .nsp File?

An NSP (Nintendo Submission Package) is a container format containing:
- **Code** (.nso executables) - The actual game logic
- **RomFS** - Game data (textures, models, quest data)
- **ExeFS** - Executable filesystem (main binary)
- **Metadata** - Title info, icons, etc.

### Tools Required

#### Option A: hactool (Recommended)
```bash
# Install hactool
git clone https://github.com/SciresM/hactool.git
cd hactool
make
sudo cp hactool /usr/local/bin/

# You'll also need prod.keys (Switch encryption keys)
# Place at: ~/.switch/prod.keys
```

**Usage:**
```bash
# Extract NSP
hactool -t pfs0 --pfs0dir=./extracted mhgu.nsp

# Extract individual NCA files
for nca in extracted/*.nca; do
    hactool -t nca --romfsdir=./romfs --exefsdir=./exefs "$nca"
done
```

#### Option B: hactoolnet (Cross-platform .NET)
```bash
# Download from: https://github.com/Thealexbarney/LibHac/releases
# Extract and run:
./hactoolnet -t pfs0 --outdir extracted mhgu.nsp
```

#### Option C: Python-based NSP Extractor
```bash
pip install pycryptodome
# Use community scripts like nstools
```

### Expected Output Structure
```
extracted/
├── exefs/
│   ├── main (main executable)
│   ├── main.npdm (metadata)
│   ├── rtld (runtime linker)
│   └── sdk (SDK version)
├── romfs/
│   ├── quest/
│   ├── monster/
│   ├── item/
│   └── ... (game data)
└── meta/
    └── (title metadata)
```

---

## Step 2: Analyze the Main Executable

### File Information

The main game executable is typically:
- **Location:** `exefs/main`
- **Format:** NSO (Nintendo Shared Object) - compressed executable
- **Architecture:** ARM64 (AArch64)
- **Endianness:** Little-endian

### Decompression

NSO files are compressed. Decompress first:

```bash
# Using hactool
hactool -t nso --uncompressed=main.elf exefs/main

# Or using Python
python3 << 'EOF'
import lz4.block

with open('exefs/main', 'rb') as f:
    data = f.read()

# NSO header is 0x100 bytes
# Then compressed sections follow
# (Requires understanding NSO format)
EOF
```

### Disassembly Options

#### Option A: Ghidra (Best for ARM64)

**Pros:**
- Free and open-source
- Excellent ARM64 support
- Built-in decompiler
- Pattern matching

**Setup:**
```bash
# Download Ghidra
wget https://github.com/NationalSecurityAgency/ghidra/releases/download/Ghidra_10.4_build/ghidra_10.4_PUBLIC_20230928.zip
unzip ghidra_*.zip
cd ghidra_*
./ghidraRun
```

**Import Process:**
1. Create new project
2. Import `main.elf` (uncompressed NSO)
3. Select processor: `AARCH64:LE:64:v8A`
4. Auto-analyze with default options
5. Wait for analysis (may take 30-60 minutes for 11GB game)

#### Option B: IDA Pro (Commercial)

**Pros:**
- Industry standard
- Excellent decompiler
- Better for complex code

**Cons:**
- Expensive ($$$)
- Not open-source

#### Option C: Binary Ninja (Mid-tier)

**Pros:**
- Good decompiler
- Faster than Ghidra
- Modern UI

**Cons:**
- Commercial (but cheaper than IDA)

#### Option D: radare2/Cutter (CLI + GUI)

**Pros:**
- Free
- Powerful CLI
- Good for scripting

**Cons:**
- Steeper learning curve

```bash
# Install
sudo apt install radare2
pip install cutter
```

---

## Step 3: Search for Quest Completion Functions

### Strategy 1: String Search

Look for debug strings or error messages:

```bash
# Extract strings from main executable
strings extracted/exefs/main > main_strings.txt

# Search for quest-related strings
grep -i "quest" main_strings.txt
grep -i "complete" main_strings.txt
grep -i "clear" main_strings.txt
grep -i "flag" main_strings.txt
grep -i "save" main_strings.txt
```

Common patterns to look for:
```
"QuestComplete"
"CheckQuestClear"
"GetQuestFlag"
"SetQuestComplete"
"SaveQuestData"
"quest_clear_flag"
```

### Strategy 2: Known Offset Search

We know quest completion counters are at Guild Card offsets:
- `0xC7A1B`, `0xC7A1D`, `0xC7A1F`, etc.

Search for these values in the code:

```python
# In Ghidra or IDA
# Search for immediate values:
0xC7A1B  # As hex
817691   # As decimal

# Look for patterns like:
# LDR X0, [base + 0xC7A1B]  ; Load quest count
# ADD X0, X0, #1            ; Increment
# STR X0, [base + 0xC7A1B]  ; Store back
```

### Strategy 3: Function Pattern Matching

Look for functions that:
1. Take a quest ID as parameter (int)
2. Access save file data
3. Return bool (completed/not completed)

Typical ARM64 pattern:
```assembly
; Function: isQuestCompleted(int questId)
; X0 = questId parameter

STP     X29, X30, [SP, #-16]!  ; Function prologue
MOV     X29, SP

; Calculate byte offset
LSR     X1, X0, #3              ; X1 = questId / 8
AND     X2, X0, #7              ; X2 = questId % 8

; Load save data base
ADRP    X3, #saveDataBase
LDR     X3, [X3, #offset]

; Read byte
LDRB    W4, [X3, X1]            ; Load byte at offset

; Check bit
LSR     W4, W4, W2              ; Shift right by bit position
AND     W0, W4, #1              ; Mask to get bit

LDP     X29, X30, [SP], #16     ; Function epilogue
RET
```

### Strategy 4: Save File I/O Tracing

Find functions that read/write save files:

```bash
# Search for file I/O functions
grep -i "fopen\|fread\|fwrite\|fseek" main_strings.txt

# Or look for Switch-specific functions:
grep -i "FsFile\|ReadFile\|WriteFile" main_strings.txt
```

---

## Step 4: Analyze RomFS Quest Data

The `romfs/` folder may contain quest definitions:

```bash
# Look for quest data files
find extracted/romfs -name "*quest*" -o -name "*qst*"

# Common formats:
# - .bin (binary data)
# - .json (structured data)
# - .tbl (table files)
# - .mib (Monster Hunter specific)
```

### Quest Data Structure

May contain:
- Quest ID (dbId)
- Quest name
- Unlock conditions
- **Completion flag offset** (if hardcoded)
- Rewards
- Monsters

---

## Step 5: Cross-Reference with mhgu.db

Compare extracted quest data with the existing `mhgu.db`:

```bash
cd /home/tommy/MHXXSwitchSaveEditor/web/scripts

python3 << 'EOF'
import sqlite3

conn = sqlite3.connect('mhgu.db')
cursor = conn.cursor()

# Get quest IDs we're testing
test_dbids = [101, 106, 10101, 10107, 10108]

for dbid in test_dbids:
    cursor.execute("SELECT _id, name, hub, stars FROM quests WHERE _id = ?", (dbid,))
    row = cursor.fetchone()
    if row:
        print(f"dbId {dbid}: {row[1]} ({row[2]} {row[3]}★)")

conn.close()
EOF
```

---

## Practical Approach (Without .nsp File)

If you don't have the .nsp file, alternative approaches:

### 1. Community Resources

Check if the MHGU modding community has already documented quest flags:

- **GBAtemp Forums:** https://gbatemp.net/
- **Reddit /r/MonsterHunter:** https://reddit.com/r/MonsterHunter
- **Kiranico:** https://mhgu.kiranico.com/
- **GitHub:** Search for "MHGU save editor" or "MHGU quest flags"

### 2. Compare with Other MH Games

Monster Hunter games often use similar save structures:

- **MH4U (3DS)** - Similar engine
- **MHGen (3DS)** - Direct predecessor
- **MHXX (3DS/Switch)** - Same game, different platform

Search for documented offsets from these games.

### 3. Pattern Analysis from More Saves

Create 20+ test saves with very specific quest completions:
- Only Village 1★ quests
- Only Guild 1★ quests  
- Only Key quests
- etc.

Statistical analysis may reveal hidden patterns.

### 4. Use Existing Tools

Check if tools like **MHXX Save Editor** or **MHGenU Save Manager** exist and:
- Reverse-engineer their code
- See what offsets they use
- Test their accuracy

---

## Expected Time Investment

| Task | Time | Difficulty |
|------|------|------------|
| Extract .nsp | 30 min | Easy |
| Decompress NSO | 15 min | Medium |
| Load in Ghidra | 1-2 hours | Easy |
| Initial analysis | 2-4 hours | Medium |
| Find quest functions | 4-8 hours | Hard |
| Trace to save offsets | 2-4 hours | Hard |
| Validate findings | 1-2 hours | Medium |
| **Total** | **10-20 hours** | **Hard** |

---

## Automated Analysis Script

If you have the .nsp file, here's a script to automate initial analysis:

```bash
#!/bin/bash
# analyze_mhgu.sh

NSP_FILE="$1"
OUTPUT_DIR="./mhgu_analysis"

echo "MHGU .nsp Analysis Script"
echo "=========================="
echo ""

# Check prerequisites
if ! command -v hactool &> /dev/null; then
    echo "Error: hactool not found. Please install it first."
    exit 1
fi

if [ ! -f ~/.switch/prod.keys ]; then
    echo "Error: prod.keys not found at ~/.switch/prod.keys"
    exit 1
fi

# Extract NSP
echo "[1/5] Extracting NSP..."
mkdir -p "$OUTPUT_DIR"
hactool -t pfs0 --pfs0dir="$OUTPUT_DIR/nsp_contents" "$NSP_FILE"

# Extract NCAs
echo "[2/5] Extracting NCA files..."
for nca in "$OUTPUT_DIR"/nsp_contents/*.nca; do
    echo "  Processing $(basename $nca)..."
    hactool -t nca \
        --romfsdir="$OUTPUT_DIR/romfs" \
        --exefsdir="$OUTPUT_DIR/exefs" \
        "$nca" 2>/dev/null
done

# Decompress main
echo "[3/5] Decompressing main executable..."
if [ -f "$OUTPUT_DIR/exefs/main" ]; then
    hactool -t nso --uncompressed="$OUTPUT_DIR/main.elf" "$OUTPUT_DIR/exefs/main"
fi

# Extract strings
echo "[4/5] Extracting strings..."
strings "$OUTPUT_DIR/main.elf" > "$OUTPUT_DIR/main_strings.txt"

# Search for quest-related strings
echo "[5/5] Searching for quest-related strings..."
grep -i "quest\|complete\|clear\|flag" "$OUTPUT_DIR/main_strings.txt" > "$OUTPUT_DIR/quest_strings.txt"

echo ""
echo "Analysis complete!"
echo "Results in: $OUTPUT_DIR"
echo ""
echo "Next steps:"
echo "  1. Open main.elf in Ghidra"
echo "  2. Review quest_strings.txt for hints"
echo "  3. Search for offsets: 0xC7A1B, 0xC7A1D, etc."
```

---

## Conclusion

**Best Approach:**
1. ✅ Use **Ghidra** (free, excellent ARM64 support)
2. ✅ Start with **string search** (fastest way to find functions)
3. ✅ Cross-reference with **known offsets** (0xC7A1B, etc.)
4. ✅ Look for **file I/O** and **save data** functions

**Alternative If No .nsp:**
1. Check **community resources** (forums, GitHub)
2. Reverse-engineer **existing save editors**
3. Create **more test saves** for statistical analysis

**Estimated Success Rate:**
- With .nsp file and Ghidra: **80-90%** (within 10-20 hours)
- Without .nsp file: **30-50%** (may never find it)

---

## Resources

- **hactool:** https://github.com/SciresM/hactool
- **Ghidra:** https://ghidra-sre.org/
- **Switch Homebrew Guide:** https://switchbrew.org/
- **ARM64 Reference:** https://developer.arm.com/documentation
- **MHGU Database:** Already in repo at `web/scripts/mhgu.db`

---

**Status:** Ready to proceed if .nsp file is available

**Next Action:** Locate MHGU .nsp file or search community resources for existing documentation
