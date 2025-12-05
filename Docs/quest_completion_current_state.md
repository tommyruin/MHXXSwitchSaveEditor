# MHGU Quest Completion Storage – Current State (Dec 2024+)

**Project:** MHXXSwitchSaveEditor  
**Scope:** How Monster Hunter Generations Ultimate (Switch) stores quest completion and what the editor currently relies on.

> This document supersedes all previous "quest flag" and dbId bitfield documentation. Older files such as `quest_completion_investigation_dec4.md` and `quest_flag_dbid_hypothesis_results.md` were removed because they contained now-known false positives or misleading interpretations.

---

## 1. Save Formats & Offsets

- **3DS base save size:** `4,726,152` bytes (no additional header).  
- **Switch MHGU system file size:** `5,159,100` bytes.
  - Internally treated as: `BASE_SAVE_SIZE (4,726,152)` + `SWITCH_HEADER_SIZE (36)` + MHGU extra.
  - In the C#/TS tooling:
    - `detectSave` strips the 36-byte Switch header and exposes only the **payload**.
    - All *absolute* offsets in this document refer to the full system file (with header).

For MHGU Switch saves, to convert an absolute offset to a payload index:

```text
payloadIndex = absoluteOffset - SWITCH_HEADER_SIZE   (for MHGU Switch)
```

The quest log and per-quest tables described below are **absolute** offsets; the web parser adjusts for the header when indexing into the payload.

---

## 2. Structures That Are Confirmed to Be Real

### 2.1 Quest History Log (Primary Source of Truth)

- **Region:** `0x250060–0x260000` (absolute, per character).  
- **Record size:** `0xA0` bytes.  
- **Layout within each record:**
  - `+0x77` – 16-bit little-endian ID (`uint16`), often equal to the quest `dbId` from `mhgu.db`.
  - `+0x79` – UTF-16LE quest name, null-terminated within the record.
- **Semantics:**
  - Acts as an **append-only quest history log**. New quest completions insert a record at the front, older records shift down.
  - In labeled saves:
    - `SAVE_B` (only "Find the Ferns") shows id `0x0065` at `0x254700`.
    - `SAVE_C` (Find the Ferns + Wipe Out!) shows ids `0x006A` and `0x0065` at `0x254700/0x2547A0`.
    - `SAVE_D` and `SAVE_X` show additional Guild 1★ quests in this region with correct names.
  - This region is the **most reliable indicator** of quests that have been completed at least once.

**Editor usage (current):**

- The web app now derives quest completion entirely from this quest log:
  - It scans all 0xA0-byte records in `0x250060–0x260000` and collects all non-zero, non-`0xFFFF` IDs.
  - For each quest in `QUEST_CATALOG` (from `mhgu.db`), it marks the quest as `completed = true` if its `dbId` appears in the log.
  - The "Quest completion" tab is a **read-only** view of this derived completion state.

### 2.2 dbId-Indexed Per-Quest State Table

- **Region base:** `0x23B000` (absolute).  
- **Indexing:** `entryOffset = 0x23B000 + dbId * 4`.  
- **Entry size:** 4 bytes per quest.

Examples validated against `test_save.bin` (and consistent with previous notes):

- `Find the Ferns` (`dbId 0x0065`)  → offset `0x23B000 + 0x65*4 = 0x23B194`.
- `Wipe Out!` (`dbId 0x006A`)       → offset `0x23B1A8`.
- `Harvest Tour` variants (`0x2775/0x2776`) → offsets `0x244DD4/0x244DD8`.
- `Shells of Steel` (`0x2781`)     → `0x244E04`.
- `Royal Spit Take` (`0x278D`)     → `0x244E34`.

The contents of these entries clearly change with quest activity (values such as `0xFF`, `0x00`, and small integers appear), but the semantics are **not** understood well enough to map to a single "completed" bit. A single quest clear can affect multiple dbIds in this table.

**Editor usage (current):**

- **Read-only.** The web app does **not** interpret or write into this table.
- Any future use must be based on robust, cross-save validation to avoid corruption.

### 2.3 Guild Card Quest Completion Counters

- The Guild Card contains counters for the number of quests completed in each category (Village LR/HR, Hub LR/HR/G, Special Permit, Arena). 
- Offsets for these counters were previously validated and remain correct; they are used in the guild card UI to display totals but not to infer per-quest flags.

---

## 3. Structures That Are *Not* Quest Completion Flags

These regions/assumptions are now known to be wrong for per-quest completion:

### 3.1 Legacy "Quest Flag Regions" A–D

- Offsets tested:
  - `0x1AFE00`
  - `0x1AFE26`
  - `0x1B019A`
  - `0x1B092E`
- Findings:
  - These regions are either **all zeros** (except for a couple static bytes) or contain data that does **not** correlate with known quest completions.
  - Extensive bit-by-bit analysis across SAVE_A/B/C/D/X showed no pattern matching the ground truth for specific flag indices.
- Status: **Do not use these regions** for quest completion.

### 3.2 flagIndex-Based Bitfields

- Earlier web app versions treated `flagIndex` (0–1354) from the quest catalog as a bit index into a theoretical quest flags array.
- Comprehensive scans over the entire save buffer found **no single bitfield** where bits match completion of the test quests when indexed by `flagIndex`.
- Status: `flagIndex` is a useful **catalog index** only; it has **no direct mapping** to a save bitfield.

### 3.3 dbId Bitfield Bases (0x002890C3, 0x0023D717, etc.)

- `Docs/quest_flag_dbid_hypothesis_results.md` previously claimed:
  - A "Village quest region" at `0x002890C3` with inverted logic.
  - "Guild quest region candidates" at `0x0023D717`, `0x0023D71B`, etc.
- Later verification showed these were **false positives**:
  - Patterns were inconsistent across saves.
  - Fresh saves already had bits set.
  - Many unrelated quests appeared "completed" in the supposed regions.
- Status: These base offsets and bitfield models are **deprecated** and have been removed from active docs.

---

## 4. Current Editor Behaviour

### 4.1 Web App (`web/`)

- **Quest completion tab:**
  - Labelled "Quest completion" in the UI.
  - Uses `parseQuestFlags` in `web/src/lib/saveParser.ts`:
    - Reads a legacy "quest flags" raw block starting at `0x1B092E` (for hex display / debugging only).
    - Calls `decodeQuestFlagsFromQuestLog` to derive `QuestFlagEntry[]` using the quest log.
  - Displays quests grouped by hub and stars; marks a quest as completed if its `dbId` appears at least once in the quest log.
  - **Editing is disabled**: no "Complete All" / "Mark Complete" actions are applied to the save.
  - `writeQuestFlags` is a no-op so quest completion data is never written back.

- **Safety:**
  - Other features (player stats, items, equipment, guild card, shoutouts, monster logs) remain editable and are written via their respective `write*` functions.
  - Quest completion remains **read-only** until a trustworthy write model exists.

### 4.2 CLI Tooling (`tools/`)

- **`quest_log_parser.py`**
  - Reads one or more saves and dumps quest log records to CSV.
  - Usage examples:

    ```bash
    cd /home/tommy/MHXXSwitchSaveEditor

    # Single save
    python3 tools/quest_log_parser.py Saves/0000000000000001/0/SAVE_C

    # Directory of saves
    python3 tools/quest_log_parser.py Saves/0000000000000001/0 -o quest_log_dump.csv
    ```

  - CSV columns: `save, record_index, offset_hex, id_hex, id_dec, name`.
  - Intended for offline analysis and verification of the quest log.

- Other existing tools (`completion_flag_scanner.py`, `test_dbid_hypothesis.py`, etc.) remain in `tools/` for historical analysis but their "success" regions are now considered invalid and should not be used to infer completion flags.

---

## 5. Open Questions and Future Work

1. **Semantics of the `0x23B000 + dbId*4` table**
   - It clearly changes with quest activity and is indexed by `dbId`.
   - Likely encodes richer state (attempt counts, best rank, unlock state, etc.), not just a boolean.
   - Next steps:
     - Collect more labeled saves with controlled quest sequences:
       - never seen, posted-only, failed, cleared once, cleared multiple times.
     - For each dbId, track how its 4-byte entry evolves across states.
     - Reject heuristics that produce any false positives on fresh saves.

2. **Extended quest history semantics**
   - The current editor only uses the **presence** of a record to mark a quest as completed.
   - Potential enhancements:
     - Track the most recent record per quest and expose additional metadata (e.g., clear count, latest clear time) if they can be decoded.

3. **3DS vs Switch differences**
   - All offsets here are for MHGU Switch system files.
   - 3DS saves use the same base layout but without the Switch header; mapping must be re-verified before enabling quest completion display for 3DS saves.

4. **Community input & cross-game comparison**
   - Other MH games (MH4U, MHGen, MHW) may use similar per-quest structures.
   - Cross-referencing findings or documentation from the wider modding community may clarify semantics for the `0x23B000` table.

---

## 6. Recommended Practices (Until Further Notice)

- **For displaying quest completion:**
  - Use the quest log at `0x250060–0x260000` only.
  - Treat a quest as "completed at least once" if its `dbId` appears in any log record.

- **For editing saves:**
  - Do **not** attempt to set or clear quest completion by writing into:
    - The `0x23B000 + dbId*4` table.
    - Any of the legacy A–D flag regions.
    - Any `flagIndex`-derived bitfield.
  - Keep quest completion editing disabled until a safe write model backed by reverse-engineered code or extensive save testing exists.

- **For experimentation:**
  - Always work on copies of saves.
  - Use `tools/quest_log_parser.py` to confirm real quest history before and after any manual changes.

This document should be treated as the single source of truth for quest completion storage in this repository going forward.

---

## 7. Ground Truth: Labeled SAVE_A…SAVE_X

The repo includes a canonical set of MHGU Switch saves under `Saves/0000000000000001/0` used to validate quest completion logic:

- `SAVE_A` – baseline (fresh/new save)
- `SAVE_B` – baseline + 1 quest
- `SAVE_C` – baseline + 2 quests
- `SAVE_D` – baseline + 3 quests
- `SAVE_X` – baseline + 7 quests

For clarity, we track a small set of named test quests and their `dbId` values from `questCatalog.ts`:

> **Name reuse warning:** Quest names are *not* guaranteed to be unique. Several quests share the same English name across Village/Guild and LR/HR/G variants (e.g., "Royal Spit Take" appears as Village LR 3★, Guild LR 1★, and Guild HR 4★). When matching or displaying quests, always key off `dbId` **and** hub/rank (and stars if needed), rather than name alone.

- Village LR 1★:
  - `Find the Ferns` – `dbId = 101`
  - `Wipe Out!` – `dbId = 106`
- Guild LR 1★:
  - `Harvest Tour: Jurassic Frontier` – `dbId = 10101`
  - `Tackling the Tetsucabra` – `dbId = 10107`
  - `Lost in the Jurassic Frontier` – `dbId = 10108`
  - `In Pursuit of the Sand Wyvern` – `dbId = 10112`
  - `Shells of Steel` – `dbId = 10113`
- Village LR 3★ (present in catalog, not completed in these saves):
  - `Royal Spit Take` (Village) – `dbId = 328`
- Guild LR 1★:
  - `Royal Spit Take` (Guild) – `dbId = 10125`

For each labeled save below, "completed" means **the quest’s `dbId` appears at least once in the quest log region** (`0x250060–0x260000`, absolute) of that save.

### 7.1 SAVE_A (baseline)

- **File:** `Saves/0000000000000001/0/SAVE_A`
- **Quest log:** contains various internal IDs, but **none** of the test `dbId`s above.
- **Ground truth:**
  - `Find the Ferns` (101): **not completed**
  - `Wipe Out!` (106): **not completed**
  - `Harvest Tour: Jurassic Frontier` (10101): **not completed**
  - `Tackling the Tetsucabra` (10107): **not completed**
  - `Lost in the Jurassic Frontier` (10108): **not completed**
  - `In Pursuit of the Sand Wyvern` (10112): **not completed**
  - `Shells of Steel` (10113): **not completed**
  - `Royal Spit Take` (328): **not completed**

### 7.2 SAVE_B (1 quest: Find the Ferns)

- **File:** `Saves/0000000000000001/0/SAVE_B`
- **Quest log matches:**
  - `dbId 101` (`Find the Ferns`) at absolute offset `0x254700`.
- **Ground truth:**
  - `Find the Ferns` (101): **completed**
  - All other test quests (106, 10101, 10107, 10108, 10112, 10113, 328): **not completed**

### 7.3 SAVE_C (2 quests: Find the Ferns, Wipe Out!)

- **File:** `Saves/0000000000000001/0/SAVE_C`
- **Quest log matches:**
  - `dbId 101` (`Find the Ferns`) at `0x2547A0`.
  - `dbId 106` (`Wipe Out!`) at `0x254700`.
- **Ground truth:**
  - `Find the Ferns` (101): **completed**
  - `Wipe Out!` (106): **completed**
  - All other test quests (10101, 10107, 10108, 10112, 10113, 328): **not completed**

### 7.4 SAVE_D (3 quests: Find the Ferns, Wipe Out!, Guild Harvest Tour)

- **File:** `Saves/0000000000000001/0/SAVE_D`
- **Quest log matches:**
  - `dbId 101` (`Find the Ferns`) at `0x2548E0`.
  - `dbId 106` (`Wipe Out!`) at `0x254840`.
  - `dbId 10101` (`Harvest Tour: Jurassic Frontier`, Guild LR ★1) at `0x254700`.
- **Ground truth:**
  - `Find the Ferns` (101): **completed**
  - `Wipe Out!` (106): **completed**
  - `Harvest Tour: Jurassic Frontier` (10101, Guild LR ★1): **completed**
  - `Tackling the Tetsucabra` (10107): **not completed**
  - `Lost in the Jurassic Frontier` (10108): **not completed**
  - `In Pursuit of the Sand Wyvern` (10112): **not completed**
  - `Shells of Steel` (10113): **not completed**
  - `Royal Spit Take` (328): **not completed**

### 7.5 SAVE_X (7 quests: Wipe Out! + 5 Guild quests)

- **File:** `Saves/0000000000000001/0/SAVE_X`
- **Quest log matches:**
  - `dbId 106`  (`Wipe Out!`) at `0x2548E0`.
  - `dbId 10101` (`Harvest Tour: Jurassic Frontier`, Guild LR ★1) at `0x2547A0`.
  - `dbId 10107` (`Tackling the Tetsucabra`) at `0x254A20`.
  - `dbId 10108` (`Lost in the Jurassic Frontier`) at `0x254B60`.
  - `dbId 10112` (`In Pursuit of the Sand Wyvern`) at `0x254C00`.
  - `dbId 10113` (`Shells of Steel`) at `0x254980` and `0x254AC0` (multiple completions).
  - `dbId 10125` (`Royal Spit Take`, Guild LR ★1) at `0x254840`.
  - **Note:** The Village LR 3★ version of Royal Spit Take (`dbId 328`) does **not** appear in the quest log for `SAVE_X`; the completed quest here is the Guild version (`dbId 10125`).
- **Ground truth:**
  - `Wipe Out!` (106): **completed**
  - `Harvest Tour: Jurassic Frontier` (10101, Guild LR ★1): **completed**
  - `Tackling the Tetsucabra` (10107): **completed**
  - `Lost in the Jurassic Frontier` (10108): **completed**
  - `In Pursuit of the Sand Wyvern` (10112): **completed**
  - `Shells of Steel` (10113): **completed (multiple times)**
  - `Royal Spit Take` (Guild LR ★1, 10125): **completed**
  - `Find the Ferns` (101): **not completed**
  - `Royal Spit Take` (Village LR 3★, 328): **not completed**
