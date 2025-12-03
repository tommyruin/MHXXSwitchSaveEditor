import { useEffect, useMemo, useRef, useState } from "react";
import {
  assembleSave,
  detectSave,
  formatPlayTime,
  parseEquipmentBoxes,
  parseGuildCard,
  parseItemBox,
  parseMonsterLogs,
  parsePalicoes,
  parsePlayer,
  parseShoutouts,
  parseHunterEquipmentEntries,
  parsePalicoEquipmentEntries,
  parsePalicoRosterEntries,
  writeEquipmentBoxes,
  writeGuildCard,
  writeItemBox,
  writeMonsterLogs,
  writeHunterEquipmentEntries,
  writePalicoEquipmentEntries,
  writePalicoRosterEntries,
  writePalicoes,
  writePlayer,
  writeShoutouts
} from "./lib/saveParser";
import {
  EquipmentBoxes,
  GuildCardData,
  HunterEquipmentEntry,
  PalicoEquipmentSlot,
  PalicoRosterEntry,
  ItemSlot,
  LoadedSave,
  MonsterLogData,
  PalicoData,
  PlayerCore,
  ShoutoutData,
  ARENA_LOG_BYTES,
  AUTOMATIC_SHOUTOUT_BYTES,
  EQUIPMENT_BOX_BYTES,
  GUILD_CARD_BYTES,
  MANUAL_SHOUTOUT_BYTES,
  MONSTER_CAPTURE_BYTES,
  MONSTER_KILL_BYTES,
  MONSTER_SIZE_BYTES,
  PALICO_BYTES,
  PALICO_EQUIPMENT_BYTES,
  PALICO_EQUIP_SLOT_COUNT,
  PALICO_ROSTER_SLOT_COUNT,
  PALICO_EQUIPMENT_NONE,
  ITEM_COUNT_BITS,
  ITEM_ID_BITS,
  ITEM_SLOT_COUNT,
  EQUIPMENT_SLOT_COUNT,
  PALICO_SLOT_BYTES
} from "./lib/types";
import { ITEMS } from "./lib/data/items";
import { EQUIPMENT_CATALOG, ARMOR_PIECE_TYPES, WEAPON_TYPE_LIST } from "./lib/data/equipmentCatalog";
import {
  PALICO_EQUIPMENT_CATALOG,
  PALICO_EQUIPMENT_TYPES,
  PALICO_WEAPONS,
  PALICO_HELMETS,
  PALICO_BODY_ARMOR,
  type PalicoEquipmentEntry
} from "./lib/data/palicoEquipmentCatalog";
import {
  getPalicoEquipmentName,
  getPalicoEquipmentEntry,
  getPalicoEquipmentTypeName,
  getPalicoEquipmentIcon,
  getForteName,
  getTargetName
} from "./lib/palicoEquipmentUtils";
import "./App.css";
import './components/InventoryGrid.css';
import InventoryGrid from './components/InventoryGrid';
import EquipmentGrid from './components/EquipmentGrid';
import PalicoEquipmentGrid from './components/PalicoEquipmentGrid';
import PalicoRosterGrid from './components/PalicoRosterGrid';
import { getIconPath, getIconColor } from './lib/itemUtils';
import { deriveRarityLabel, getEquipmentTypeName, getEquipmentName, getEquipmentIcon, getRarityColor, rarityToLevelBits, getRarityColorFromNumber } from "./lib/equipmentUtils";

type FieldKey = keyof PlayerCore;
type TabKey = "edit" | "items" | "hunterEquip" | "palicoEquip" | "progress";

const FIELD_META: Array<{
  key: FieldKey;
  label: string;
  helper?: string;
  min?: number;
  max?: number;
}> = [
    { key: "name", label: "Hunter Name", helper: "32 bytes max (UTF-8)" },
    { key: "playTime", label: "Play Time (seconds)", min: 0 },
    { key: "funds", label: "Funds (zenny)", min: 0 },
    { key: "hunterRank", label: "Hunter Rank", min: 1 },
    { key: "hrPoints", label: "HR Points", min: 0 },
    { key: "academyPoints", label: "Academy Points", min: 0 },
    { key: "bhernaPoints", label: "Bherna Points", min: 0 },
    { key: "kokotoPoints", label: "Kokoto Points", min: 0 },
    { key: "pokkePoints", label: "Pokke Points", min: 0 },
    { key: "yukumoPoints", label: "Yukumo Points", min: 0 }
  ];

const encoder = new TextEncoder();

const initialMessage =
  "Load your MHXX/MHGU system file, pick a slot, tweak values, then download the updated save.";

const bytesToHex = (bytes: Uint8Array) =>
  Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join(" ");

const hexToBytes = (hex: string, expectedLength: number) => {
  const cleaned = hex.replace(/[^0-9a-fA-F]/g, "");
  if (cleaned.length !== expectedLength * 2) {
    throw new Error(`Expected ${expectedLength * 2} hex characters, got ${cleaned.length}.`);
  }
  const output = new Uint8Array(expectedLength);
  for (let i = 0; i < expectedLength; i++) {
    output[i] = parseInt(cleaned.slice(i * 2, i * 2 + 2), 16);
  }
  return output;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);


const getItemName = (id: number) => ITEMS[id]?.name ?? `Unknown #${id}`;

// Monster Hunter enforces a 99-item stack limit in-game, even though the save format supports up to 127
const MAX_ITEM_STACK = 99;
const MAX_ITEM_TOTAL = ITEM_SLOT_COUNT * MAX_ITEM_STACK;


type HexBlockKey =
  | "hunterEquip"
  | "palicoEquip"
  | "palicoes"
  | "guildCard"
  | "arenaLog"
  | "manualShoutouts"
  | "automaticShoutouts"
  | "monsterKills"
  | "monsterCaptures"
  | "monsterSizes";

const emptyHexBlocks: Record<HexBlockKey, string> = {
  hunterEquip: "",
  palicoEquip: "",
  palicoes: "",
  guildCard: "",
  arenaLog: "",
  manualShoutouts: "",
  automaticShoutouts: "",
  monsterKills: "",
  monsterCaptures: "",
  monsterSizes: ""
};

const emptyBlockErrors: Record<HexBlockKey, string | null> = {
  hunterEquip: null,
  palicoEquip: null,
  palicoes: null,
  guildCard: null,
  arenaLog: null,
  manualShoutouts: null,
  automaticShoutouts: null,
  monsterKills: null,
  monsterCaptures: null,
  monsterSizes: null
};

const TAB_CONFIG: Array<{ key: TabKey; label: string; helper: string }> = [
  { key: "edit", label: "Edit value", helper: "Hunter core stats and name" },
  { key: "items", label: "Items & inventory", helper: "Item box totals and slots" },
  { key: "hunterEquip", label: "Hunter equipment box", helper: "Full hunter gear hex block" },
  { key: "palicoEquip", label: "Palico equipment & pals", helper: "Palico gear and roster hex blocks" },
  { key: "progress", label: "Guild card & logs", helper: "Arena log, shoutouts, monster data" }
];

function App() {
  const [loadedSave, setLoadedSave] = useState<LoadedSave | null>(null);
  const [currentSlot, setCurrentSlot] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<TabKey>("edit");
  const [form, setForm] = useState<PlayerCore | null>(null);
  const [items, setItems] = useState<ItemSlot[] | null>(null);
  const [equipment, setEquipment] = useState<EquipmentBoxes | null>(null);
  const [hunterEquipmentEntries, setHunterEquipmentEntries] = useState<HunterEquipmentEntry[] | null>(null);
  const [palicoEquipmentEntries, setPalicoEquipmentEntries] = useState<PalicoEquipmentSlot[] | null>(null);
  const [palicoRosterEntries, setPalicoRosterEntries] = useState<PalicoRosterEntry[] | null>(null);
  const [palicoes, setPalicoes] = useState<PalicoData | null>(null);
  const [guildCard, setGuildCard] = useState<GuildCardData | null>(null);
  const [shoutouts, setShoutouts] = useState<ShoutoutData | null>(null);
  const [monsterLogs, setMonsterLogs] = useState<MonsterLogData | null>(null);
  const [status, setStatus] = useState<string>(initialMessage);
  const [error, setError] = useState<string | null>(null);
  const [itemSlotInput, setItemSlotInput] = useState<number>(1);
  const [itemIdInput, setItemIdInput] = useState<number>(0);
  const [itemCountInput, setItemCountInput] = useState<number>(0);
  const [itemSearch, setItemSearch] = useState<string>("");
  const [equipSearch, setEquipSearch] = useState<string>("");
  const [equipCategoryFilter, setEquipCategoryFilter] = useState<'all' | 'weapon' | 'armor' | 'talisman'>('all');
  const [equipTypeFilter, setEquipTypeFilter] = useState<number>(0);
  const [equipRarityFilter, setEquipRarityFilter] = useState<number>(0); // 0 = all rarities
  const [palicoEquipSearch, setPalicoEquipSearch] = useState<string>("");
  const [palicoEquipTypeFilter, setPalicoEquipTypeFilter] = useState<number>(0); // 0 = all, 22 = weapon, 23 = helmet, 24 = body
  const [palicoRarityFilter, setPalicoRarityFilter] = useState<number>(0);
  const [hexBlocks, setHexBlocks] = useState<Record<HexBlockKey, string>>(emptyHexBlocks);
  const [blockErrors, setBlockErrors] = useState<Record<HexBlockKey, string | null>>(emptyBlockErrors);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!items) return;
    const firstFilled = items.findIndex((entry) => entry.id !== 0 || entry.count !== 0);
    const suggestedSlot = firstFilled >= 0 ? firstFilled + 1 : 1;
    const safeSlot = clamp(suggestedSlot, 1, ITEM_SLOT_COUNT);
    const entry = items[safeSlot - 1];
    setItemSlotInput(safeSlot);
    setItemIdInput(entry?.id ?? 0);
    setItemCountInput(entry?.count ?? 0);
    setItemSearch(entry ? getItemName(entry.id) : "");
  }, [items]);

  useEffect(() => {
    if (!equipment) {
      setHunterEquipmentEntries(null);
      setPalicoEquipmentEntries(null);
      setSelectedEquipIndex(null);
      setSelectedPalicoEquipIndex(null);
      return;
    }
    const hunterEntries = parseHunterEquipmentEntries(equipment.hunter);
    setHunterEquipmentEntries(hunterEntries);
    const firstFilled = hunterEntries.findIndex(
      (entry) =>
        entry.type !== 0 ||
        entry.equipId !== 0 ||
        entry.transmogId !== 0 ||
        entry.deco1 !== 0 ||
        entry.deco2 !== 0 ||
        entry.deco3 !== 0
    );
    setSelectedEquipIndex(firstFilled >= 0 ? firstFilled : 0);
    
    const palicoEntries = parsePalicoEquipmentEntries(equipment.palico);
    setPalicoEquipmentEntries(palicoEntries);
    
    setHexBlocks((prev) => ({
      ...prev,
      hunterEquip: bytesToHex(equipment.hunter),
      palicoEquip: bytesToHex(equipment.palico)
    }));
    setBlockErrors((prev) => ({ ...prev, hunterEquip: null, palicoEquip: null }));
  }, [equipment]);

  useEffect(() => {
    if (!palicoes) {
      setPalicoRosterEntries(null);
      setSelectedPalicoRosterIndex(null);
      return;
    }
    const entries = parsePalicoRosterEntries(palicoes.raw);
    setPalicoRosterEntries(entries);
    setHexBlocks((prev) => ({ ...prev, palicoes: bytesToHex(palicoes.raw) }));
    setBlockErrors((prev) => ({ ...prev, palicoes: null }));
  }, [palicoes]);

  useEffect(() => {
    if (!guildCard) return;
    setHexBlocks((prev) => ({
      ...prev,
      guildCard: bytesToHex(guildCard.card),
      arenaLog: bytesToHex(guildCard.arenaLog)
    }));
    setBlockErrors((prev) => ({ ...prev, guildCard: null, arenaLog: null }));
  }, [guildCard]);

  useEffect(() => {
    if (!shoutouts) return;
    setHexBlocks((prev) => ({
      ...prev,
      manualShoutouts: bytesToHex(shoutouts.manual),
      automaticShoutouts: bytesToHex(shoutouts.automatic)
    }));
    setBlockErrors((prev) => ({ ...prev, manualShoutouts: null, automaticShoutouts: null }));
  }, [shoutouts]);

  useEffect(() => {
    if (!monsterLogs) return;
    setHexBlocks((prev) => ({
      ...prev,
      monsterKills: bytesToHex(monsterLogs.kills),
      monsterCaptures: bytesToHex(monsterLogs.captures),
      monsterSizes: bytesToHex(monsterLogs.sizes)
    }));
    setBlockErrors((prev) => ({
      ...prev,
      monsterKills: null,
      monsterCaptures: null,
      monsterSizes: null
    }));
  }, [monsterLogs]);

  const handleFileChange = async (file: File | null) => {
    if (!file) {
      return;
    }
    setError(null);
    try {
      const buffer = await file.arrayBuffer();
      const detected = detectSave(buffer);
      const slot = detected.defaultSlot;
      const parsed = parsePlayer(detected.payload, slot);
      setLoadedSave({ ...detected, fileName: file.name });
      setCurrentSlot(slot);
      setForm(parsed);
      setItems(parseItemBox(detected.payload, slot));
      setEquipment(parseEquipmentBoxes(detected.payload, slot));
      setPalicoes(parsePalicoes(detected.payload, slot));
      setGuildCard(parseGuildCard(detected.payload, slot));
      setShoutouts(parseShoutouts(detected.payload, slot));
      setMonsterLogs(parseMonsterLogs(detected.payload, slot));
      setActiveTab("edit");
      setStatus(
        `Loaded ${detected.kind.toUpperCase()} save • Slot ${slot} ready`
      );
    } catch (err) {
      setLoadedSave(null);
      setForm(null);
      setItems(null);
      setEquipment(null);
      setHunterEquipmentEntries(null);
      setPalicoEquipmentEntries(null);
      setPalicoRosterEntries(null);
      setPalicoes(null);
      setGuildCard(null);
      setShoutouts(null);
      setMonsterLogs(null);
      setHexBlocks(emptyHexBlocks);
      setBlockErrors(emptyBlockErrors);
      setItemSlotInput(1);
      setItemIdInput(0);
      setItemCountInput(0);
      setItemSearch("");
      setEquipSearch("");
      setPalicoEquipSearch("");
      setSelectedEquipIndex(null);
      setSelectedItemIndex(null);
      setSelectedPalicoEquipIndex(null);
      setSelectedPalicoRosterIndex(null);
      setStatus(initialMessage);
      setError((err as Error).message);
    }
  };

  const pickFile = () => fileInputRef.current?.click();

  const handleSlotChange = (slotNumber: number) => {
    if (!loadedSave) return;
    const parsed = parsePlayer(loadedSave.payload, slotNumber);
    setCurrentSlot(slotNumber);
    setForm(parsed);
    setItems(parseItemBox(loadedSave.payload, slotNumber));
    setEquipment(parseEquipmentBoxes(loadedSave.payload, slotNumber));
    setPalicoes(parsePalicoes(loadedSave.payload, slotNumber));
    setGuildCard(parseGuildCard(loadedSave.payload, slotNumber));
    setShoutouts(parseShoutouts(loadedSave.payload, slotNumber));
    setMonsterLogs(parseMonsterLogs(loadedSave.payload, slotNumber));
    setStatus(`Slot ${slotNumber} loaded`);
  };

  const updateField = (key: FieldKey, value: string) => {
    setForm((prev) => {
      if (!prev) return prev;
      if (key === "name") {
        return { ...prev, name: value };
      }
      const numeric = Number.parseInt(value, 10);
      const safe = Number.isFinite(numeric) ? numeric : 0;
      return { ...prev, [key]: safe };
    });
  };

  const isNameTooLong = useMemo(() => {
    if (!form) return false;
    return encoder.encode(form.name).length > 32;
  }, [form]);

  const itemTotals = useMemo(() => {
    const totals = new Map<number, number>();
    items?.forEach((entry) => {
      if (entry.id === 0 || entry.count === 0) return;
      totals.set(entry.id, (totals.get(entry.id) ?? 0) + entry.count);
    });
    return totals;
  }, [items]);

  const equipmentCounts = useMemo(() => {
    const counts = new Map<string, number>();
    hunterEquipmentEntries?.forEach((entry) => {
      if (entry.type === 0 && entry.equipId === 0) return;
      const key = `${entry.type}-${entry.equipId}`;
      counts.set(key, (counts.get(key) ?? 0) + 1);
    });
    return counts;
  }, [hunterEquipmentEntries]);

  const palicoEquipmentCounts = useMemo(() => {
    const counts = new Map<string, number>();
    palicoEquipmentEntries?.forEach((entry) => {
      if (entry.type === 0 && entry.equipId === 0) return;
      const key = `${entry.type}-${entry.equipId}`;
      counts.set(key, (counts.get(key) ?? 0) + 1);
    });
    return counts;
  }, [palicoEquipmentEntries]);

  const filledItems = useMemo(
    () =>
      items
        ?.map((entry, index) => ({ ...entry, slot: index + 1 }))
        .filter((entry) => entry.id !== 0 || entry.count !== 0) ?? [],
    [items]
  );

  // Show individual item stacks as they appear in the save file (max 99 per stack)
  const itemStacks = useMemo(() => {
    if (!items) return [] as Array<{ id: number; name: string; count: number; slot: number }>;
    return items
      .map((entry, index) => ({ ...entry, name: getItemName(entry.id), slot: index + 1 }))
      .filter((entry) => entry.id !== 0 && entry.count > 0);
  }, [items]);

  const filteredHunterEntries = useMemo(() => {
    if (!hunterEquipmentEntries) return [];
    const query = equipSearch.trim().toLowerCase();
    return hunterEquipmentEntries.filter((entry) => {
      const typeName = getEquipmentTypeName(entry.type).toLowerCase();
      const equipName = getEquipmentName(entry.type, entry.equipId).toLowerCase();
      const matchesQuery =
        !query ||
        typeName.includes(query) ||
        equipName.includes(query) ||
        entry.slot.toString() === query ||
        entry.equipId.toString().includes(query) ||
        entry.transmogId.toString().includes(query);
      const isEmpty =
        entry.type === 0 &&
        entry.equipId === 0 &&
        entry.transmogId === 0 &&
        entry.deco1 === 0 &&
        entry.deco2 === 0 &&
        entry.deco3 === 0;
      return matchesQuery && !isEmpty;
    });
  }, [equipSearch, hunterEquipmentEntries]);

  const filteredCatalog = useMemo(() => {
    let results = EQUIPMENT_CATALOG;

    // Filter by category (weapon, armor, talisman)
    if (equipCategoryFilter !== 'all') {
      results = results.filter(e => e.category === equipCategoryFilter);
    }

    // Filter by specific type (e.g., Great Sword, Head armor)
    if (equipTypeFilter !== 0) {
      results = results.filter(e => e.type === equipTypeFilter);
    }

    // Filter by rarity
    if (equipRarityFilter !== 0) {
      results = results.filter(e => e.rarity === equipRarityFilter);
    }

    // Filter by search query
    if (equipSearch.trim()) {
      const query = equipSearch.toLowerCase();
      results = results.filter(e =>
        e.name.toLowerCase().includes(query) ||
        e.id.toString() === query ||
        e.subcategory.toLowerCase().includes(query)
      );
    }

    return results;
  }, [equipCategoryFilter, equipTypeFilter, equipRarityFilter, equipSearch]);

  const filteredPalicoCatalog = useMemo(() => {
    let results = PALICO_EQUIPMENT_CATALOG;

    // Filter by type
    if (palicoEquipTypeFilter !== 0) {
      results = results.filter(e => e.type === palicoEquipTypeFilter);
    }

    // Filter by rarity
    if (palicoRarityFilter !== 0) {
      results = results.filter(e => e.rarity === palicoRarityFilter);
    }

    // Filter by search query
    if (palicoEquipSearch.trim()) {
      const query = palicoEquipSearch.toLowerCase();
      results = results.filter(e =>
        e.name.toLowerCase().includes(query) ||
        e.id.toString() === query
      );
    }

    return results;
  }, [palicoEquipTypeFilter, palicoRarityFilter, palicoEquipSearch]);

  const itemRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  useEffect(() => {
    const query = itemSearch.trim().toLowerCase();
    if (!query) return;

    const match = ITEMS.find(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.id.toString() === query ||
        item.id.toString().startsWith(query)
    );

    if (match) {
      const element = itemRefs.current.get(match.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [itemSearch]);

  const hasBlockErrors = Object.values(blockErrors).some(Boolean);

  const canDownload = Boolean(
    loadedSave &&
    form &&
    items &&
    equipment &&
    palicoes &&
    guildCard &&
    shoutouts &&
    monsterLogs &&
    !isNameTooLong &&
    !hasBlockErrors
  );

  const handleDownload = () => {
    if (!loadedSave || !form || !items || !equipment || !palicoes || !guildCard || !shoutouts || !monsterLogs) return;
    try {
      let updatedPayload = writePlayer(loadedSave.payload, currentSlot, {
        ...form,
        name: form.name.trim()
      });
      updatedPayload = writeItemBox(updatedPayload, currentSlot, items);
      updatedPayload = writeEquipmentBoxes(updatedPayload, currentSlot, equipment);
      updatedPayload = writePalicoes(updatedPayload, currentSlot, palicoes);
      updatedPayload = writeGuildCard(updatedPayload, currentSlot, guildCard);
      updatedPayload = writeShoutouts(updatedPayload, currentSlot, shoutouts);
      updatedPayload = writeMonsterLogs(updatedPayload, currentSlot, monsterLogs);
      const merged = assembleSave(loadedSave.header, updatedPayload);
      setLoadedSave({ ...loadedSave, payload: updatedPayload });
      const blob = new Blob([merged], { type: "application/octet-stream" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = loadedSave.fileName || "system";
      link.click();
      URL.revokeObjectURL(link.href);
      setStatus("Download prepared. Replace your original save carefully.");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleReset = () => {
    setLoadedSave(null);
    setForm(null);
    setItems(null);
    setEquipment(null);
    setHunterEquipmentEntries(null);
    setPalicoEquipmentEntries(null);
    setPalicoRosterEntries(null);
    setPalicoes(null);
    setGuildCard(null);
    setShoutouts(null);
    setMonsterLogs(null);
    setHexBlocks(emptyHexBlocks);
    setBlockErrors(emptyBlockErrors);
    setItemSlotInput(1);
    setItemIdInput(0);
    setItemCountInput(0);
    setItemSearch("");
    setEquipSearch("");
    setPalicoEquipSearch("");
    setError(null);
    setStatus(initialMessage);
    setCurrentSlot(1);
    setActiveTab("edit");
    setSelectedEquipIndex(null);
    setSelectedItemIndex(null);
    setSelectedPalicoEquipIndex(null);
    setSelectedPalicoRosterIndex(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const setItemSlotFromValue = (slotNumber: number) => {
    if (!items?.length) return;
    const safeSlot = clamp(Math.trunc(slotNumber) || 1, 1, ITEM_SLOT_COUNT);
    const entry = items[safeSlot - 1];
    setItemSlotInput(safeSlot);
    setItemIdInput(entry?.id ?? 0);
    setItemCountInput(entry?.count ?? 0);
    setItemSearch(entry ? getItemName(entry.id) : "");
  };

  const applyItemSlot = () => {
    setItems((prev) => {
      if (!prev?.length) return prev;
      const safeSlot = clamp(Math.trunc(itemSlotInput) || 1, 1, ITEM_SLOT_COUNT);
      const next = [...prev];
      next[safeSlot - 1] = {
        id: clamp(Math.trunc(itemIdInput) || 0, 0, (1 << ITEM_ID_BITS) - 1),
        count: clamp(Math.trunc(itemCountInput) || 0, 0, (1 << ITEM_COUNT_BITS) - 1)
      };
      setItemSlotInput(safeSlot);
      setItemSearch(getItemName(next[safeSlot - 1].id));
      return next;
    });
  };

  const clearItemSlot = () => {
    setItems((prev) => {
      if (!prev?.length) return prev;
      const safeSlot = clamp(Math.trunc(itemSlotInput) || 1, 1, ITEM_SLOT_COUNT);
      const next = [...prev];
      next[safeSlot - 1] = { id: 0, count: 0 };
      return next;
    });
    setItemIdInput(0);
    setItemCountInput(0);
    setItemSearch("");
  };

  const syncHunterBox = (entries: HunterEquipmentEntry[]) => {
    const updatedBox = writeHunterEquipmentEntries(entries);
    setEquipment((prev) => (prev ? { ...prev, hunter: updatedBox } : prev));
    setHexBlocks((prev) => ({ ...prev, hunterEquip: bytesToHex(updatedBox) }));
    setBlockErrors((prev) => ({ ...prev, hunterEquip: null }));
  };

  const updateHunterEntry = (
    slotIndex: number,
    updater: (entry: HunterEquipmentEntry) => Partial<HunterEquipmentEntry>
  ) => {
    setHunterEquipmentEntries((prev) => {
      if (!prev) return prev;
      if (slotIndex < 0 || slotIndex >= prev.length) return prev;
      const next = [...prev];
      next[slotIndex] = { ...next[slotIndex], ...updater(next[slotIndex]) };
      syncHunterBox(next);
      return next;
    });
  };

  const clearHunterEntry = (slotIndex: number) => {
    updateHunterEntry(slotIndex, (entry) => ({
      type: 0,
      levelBits: entry.levelBits,
      equipId: 0,
      transmogId: 0,
      deco1: 0,
      deco2: 0,
      deco3: 0
    }));
  };

  const addEquipmentToBox = (type: number, equipId: number, rarity: number) => {
    setHunterEquipmentEntries((prev) => {
      if (!prev) return prev;

      // Find first empty slot
      const emptyIndex = prev.findIndex(
        (entry) =>
          entry.type === 0 &&
          entry.equipId === 0 &&
          entry.transmogId === 0 &&
          entry.deco1 === 0 &&
          entry.deco2 === 0 &&
          entry.deco3 === 0
      );

      if (emptyIndex === -1) {
        setError('Equipment box is full. Remove an item first.');
        return prev;
      }

      const next = [...prev];
      // Use the actual rarity from the database, not the level input
      const levelBits = rarityToLevelBits(rarity);
      next[emptyIndex] = {
        ...next[emptyIndex],
        type,
        equipId,
        transmogId: 0,
        levelBits,
        deco1: 0,
        deco2: 0,
        deco3: 0
      };

      syncHunterBox(next);
      setSelectedEquipIndex(emptyIndex);
      setError(null);
      return next;
    });
  };

  const removeEquipmentFromBox = (type: number, equipId: number) => {
    setHunterEquipmentEntries((prev) => {
      if (!prev) return prev;

      // Find the first matching equipment piece
      const matchIndex = prev.findIndex(
        (entry) => entry.type === type && entry.equipId === equipId
      );

      if (matchIndex === -1) {
        return prev; // Not found, nothing to remove
      }

      const next = [...prev];
      // Clear this slot
      next[matchIndex] = {
        ...next[matchIndex],
        type: 0,
        equipId: 0,
        transmogId: 0,
        levelBits: 0,
        deco1: 0,
        deco2: 0,
        deco3: 0
      };

      syncHunterBox(next);
      setError(null);
      return next;
    });
  };

  const setSelectedEquipSlot = (slotNumber: number) => {
    if (!hunterEquipmentEntries) return;
    const safeSlot = clamp(Math.trunc(slotNumber) || 1, 1, EQUIPMENT_SLOT_COUNT);
    setSelectedEquipIndex(safeSlot - 1);
  };

  const updateSelectedEquipmentField = (
    key: keyof Omit<HunterEquipmentEntry, "slot" | "raw">,
    value: number
  ) => {
    if (selectedEquipIndex === null) return;
    let capped = value;
    if (key === "type") {
      capped = clamp(value, 0, 21);
    } else if (key === "levelBits") {
      capped = clamp(value, 0, 2047);
    } else {
      capped = clamp(value, 0, 65535);
    }
    updateHunterEntry(selectedEquipIndex, () => ({ [key]: capped } as Partial<HunterEquipmentEntry>));
  };

  // Palico Equipment Management Functions
  const syncPalicoEquipmentBox = (entries: PalicoEquipmentSlot[]) => {
    const updatedBox = writePalicoEquipmentEntries(entries);
    setEquipment((prev) => (prev ? { ...prev, palico: updatedBox } : prev));
    setHexBlocks((prev) => ({ ...prev, palicoEquip: bytesToHex(updatedBox) }));
    setBlockErrors((prev) => ({ ...prev, palicoEquip: null }));
  };

  const syncPalicoRoster = (entries: PalicoRosterEntry[]) => {
    const updatedRoster = writePalicoRosterEntries(entries);
    setPalicoes((prev) => (prev ? { ...prev, raw: updatedRoster } : prev));
    setHexBlocks((prev) => ({ ...prev, palicoes: bytesToHex(updatedRoster) }));
    setBlockErrors((prev) => ({ ...prev, palicoes: null }));
  };

  const addPalicoEquipmentToBox = (catalogEntry: PalicoEquipmentEntry) => {
    setPalicoEquipmentEntries((prev) => {
      if (!prev) return prev;
      const emptyIndex = prev.findIndex(e => e.type === 0 && e.equipId === 0);
      if (emptyIndex === -1) {
        setError('Palico equipment box is full. Remove an item first.');
        return prev;
      }

      const next = [...prev];
      const levelBits = rarityToLevelBits(catalogEntry.rarity);
      next[emptyIndex] = {
        ...next[emptyIndex],
        type: catalogEntry.type,
        equipId: catalogEntry.id,
        levelBits
      };

      syncPalicoEquipmentBox(next);
      setSelectedPalicoEquipIndex(emptyIndex);
      setError(null);
      return next;
    });
  };

  const removePalicoEquipmentFromBox = (type: number, equipId: number) => {
    setPalicoEquipmentEntries((prev) => {
      if (!prev) return prev;
      const matchIndex = prev.findIndex(e => e.type === type && e.equipId === equipId);
      if (matchIndex === -1) return prev;

      const next = [...prev];
      next[matchIndex] = {
        ...next[matchIndex],
        type: 0,
        equipId: 0,
        levelBits: 0
      };

      syncPalicoEquipmentBox(next);
      setError(null);
      return next;
    });
  };

  const updatePalicoRosterEntry = (
    index: number,
    updates: Partial<Omit<PalicoRosterEntry, 'slot' | 'raw'>>
  ) => {
    setPalicoRosterEntries((prev) => {
      if (!prev || index < 0 || index >= prev.length) return prev;
      const next = [...prev];
      next[index] = { ...next[index], ...updates };
      syncPalicoRoster(next);
      return next;
    });
  };

  const assignEquipmentToPalico = (
    palicoIndex: number,
    slotType: 'weapon' | 'helmet' | 'body',
    equipId: number
  ) => {
    const updates: Partial<PalicoRosterEntry> = {};
    if (slotType === 'weapon') {
      updates.equippedWeaponId = equipId;
    } else if (slotType === 'helmet') {
      updates.equippedHelmetId = equipId;
    } else if (slotType === 'body') {
      updates.equippedBodyId = equipId;
    }
    updatePalicoRosterEntry(palicoIndex, updates);
  };

  const setItemTotal = (id: number, total: number) => {
    let overflow = false;
    const desired = clamp(Math.trunc(total) || 0, 0, MAX_ITEM_TOTAL);
    setItems((prev) => {
      if (!prev?.length) return prev;
      const next = [...prev];
      const reusableSlots: number[] = [];
      const emptySlots: number[] = [];

      for (let i = 0; i < next.length; i++) {
        const entry = next[i];
        if (entry.id === id) {
          reusableSlots.push(i);
          next[i] = { id: 0, count: 0 };
        } else if (entry.id === 0 || entry.count === 0) {
          emptySlots.push(i);
        }
      }

      // For new items, use empty slots from the end (reverse order) to avoid auto-sorting to the beginning
      // For existing items, reuse their original slots first
      const fillOrder = reusableSlots.length > 0
        ? [...reusableSlots, ...emptySlots]
        : [...emptySlots].reverse();

      let remaining = desired;
      for (const slot of fillOrder) {
        if (remaining <= 0) break;
        const stack = Math.min(remaining, MAX_ITEM_STACK);
        next[slot] = { id, count: stack };
        remaining -= stack;
      }

      if (remaining > 0) {
        overflow = true;
      }

      return next;
    });

    if (overflow) {
      setError(`Not enough slots to fit ${desired} of item ID ${id}.`);
    } else {
      setError(null);
    }
  };

  const adjustItemTotal = (id: number, delta: number) => {
    const current = itemTotals.get(id) ?? 0;
    setItemTotal(id, current + delta);
  };

  const sortInventoryById = () => {
    setItems((prev) => {
      if (!prev?.length) return prev;
      const next = [...prev];

      // Extract all non-empty items with their data
      const nonEmptyItems = next
        .map((item, index) => ({ ...item, originalIndex: index }))
        .filter(item => item.id !== 0 && item.count > 0)
        .sort((a, b) => a.id - b.id);

      // Clear all slots
      for (let i = 0; i < next.length; i++) {
        next[i] = { id: 0, count: 0 };
      }

      // Place sorted items back starting from slot 0
      nonEmptyItems.forEach((item, index) => {
        next[index] = { id: item.id, count: item.count };
      });

      return next;
    });
  };

  const applyHexBlock = (
    key: HexBlockKey,
    expectedLength: number,
    applyBytes: (bytes: Uint8Array) => void
  ) => {
    if (!loadedSave) return;
    try {
      const bytes = hexToBytes(hexBlocks[key], expectedLength);
      applyBytes(bytes);
      setBlockErrors((prev) => ({ ...prev, [key]: null }));
    } catch (err) {
      setBlockErrors((prev) => ({ ...prev, [key]: (err as Error).message }));
    }
  };

  const handleHexFile = async (
    file: File | null,
    key: HexBlockKey,
    expectedLength: number,
    applyBytes: (bytes: Uint8Array) => void
  ) => {
    if (!file) return;
    const buffer = await file.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    if (bytes.length !== expectedLength) {
      setBlockErrors((prev) => ({
        ...prev,
        [key]: `File is ${bytes.length} bytes. Expected ${expectedLength}.`
      }));
      return;
    }
    applyBytes(bytes);
    setHexBlocks((prev) => ({ ...prev, [key]: bytesToHex(bytes) }));
    setBlockErrors((prev) => ({ ...prev, [key]: null }));
  };

  const renderHexEditor = (
    key: HexBlockKey,
    label: string,
    expectedLength: number,
    applyBytes: (bytes: Uint8Array) => void,
    helper?: string
  ) => (
    <div className="hex-editor" key={key}>
      <div className="hex-head">
        <div>
          <p className="label">{label}</p>
          <p className="meta">{helper ?? `${expectedLength} bytes. Keep the length exact.`}</p>
        </div>
        <div className="hex-actions">
          <label className="ghost mini file-button">
            Replace from file
            <input
              type="file"
              onChange={(e) => handleHexFile(e.target.files?.[0] ?? null, key, expectedLength, applyBytes)}
            />
          </label>
          <button
            type="button"
            className="primary mini"
            onClick={() => applyHexBlock(key, expectedLength, applyBytes)}
          >
            Apply hex
          </button>
        </div>
      </div>
      <textarea
        value={hexBlocks[key]}
        onChange={(e) => setHexBlocks((prev) => ({ ...prev, [key]: e.target.value }))}
        rows={4}
        spellCheck={false}
      />
      {blockErrors[key] && <p className="error">{blockErrors[key]}</p>}
    </div>
  );

  const slotButtons = loadedSave?.slotAvailable ?? [false, false, false];
  const decodedPlayTime =
    form?.playTime !== undefined ? formatPlayTime(form.playTime) : "--";
  const nameBytes = form ? encoder.encode(form.name).length : 0;
  const filledItemCount = filledItems.length;
  const palicoCount =
    palicoes?.raw.reduce((acc, byte, index) => {
      if (index % PALICO_SLOT_BYTES === 0 && byte !== 0) {
        return acc + 1;
      }
      return acc;
    }, 0) ?? 0;

  const renderEditTab = () => (
    <div className="tab-panel" data-tab="edit">
      <div className="tab-panel-head">
        <div>
          <p className="label">Hunter values</p>
          <p className="meta">Rename, adjust funds, HR, and play time.</p>
        </div>
        <span className="pill">Slot {currentSlot}</span>
      </div>
      {form ? (
        <div className="form-grid">
          {FIELD_META.map((field) => (
            <label key={field.key} className="field">
              <div className="field-top">
                <span>{field.label}</span>
                {field.key === "playTime" && (
                  <span className="meta">{decodedPlayTime}</span>
                )}
              </div>
              <input
                type={field.key === "name" ? "text" : "number"}
                min={field.min}
                max={field.max}
                value={
                  field.key === "name"
                    ? form.name
                    : (form[field.key] as number)
                }
                onChange={(e) => updateField(field.key, e.target.value)}
                aria-label={field.label}
              />
              <div className="field-helper">
                <span>{field.helper ?? " "}</span>
                {field.key === "name" && (
                  <span
                    className={isNameTooLong ? "meta meta-warn" : "meta"}
                    title="UTF-8 bytes used"
                  >
                    {nameBytes}/32 bytes
                  </span>
                )}
              </div>
            </label>
          ))}
        </div>
      ) : (
        <p className="hint">Load a save slot to edit values.</p>
      )}
    </div>
  );

  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [selectedEquipIndex, setSelectedEquipIndex] = useState<number | null>(null);
  const [selectedPalicoEquipIndex, setSelectedPalicoEquipIndex] = useState<number | null>(null);
  const [selectedPalicoRosterIndex, setSelectedPalicoRosterIndex] = useState<number | null>(null);
  const selectedEquipEntry =
    selectedEquipIndex !== null && hunterEquipmentEntries
      ? hunterEquipmentEntries[selectedEquipIndex]
      : null;
  const selectedPalicoRosterEntry =
    selectedPalicoRosterIndex !== null && palicoRosterEntries
      ? palicoRosterEntries[selectedPalicoRosterIndex]
      : null;

  const handleItemClick = (item: ItemSlot, index: number) => {
    setSelectedItemIndex(index);

    // Scroll to the item in the catalog
    const element = itemRefs.current.get(item.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const renderItemsTab = () => (
    <div className="tab-panel" data-tab="items">
      {loadedSave && items ? (
        <div className="subcard">
          <div className="subcard-header">
            <div>
              <p className="label">Item box</p>
              <p className="meta">
                {filledItemCount}/{ITEM_SLOT_COUNT} slots with items. IDs up to {(1 << ITEM_ID_BITS) - 1},
                counts up to {MAX_ITEM_STACK}.
              </p>
            </div>
            <span className="pill">{ITEM_SLOT_COUNT} slots</span>
          </div>
          <div className="item-form">
            <label className="field small full">
              <div className="field-top">
                <span>Search items</span>
                <span className="meta">Type to scroll to item.</span>
              </div>
              <input
                type="text"
                value={itemSearch}
                onChange={(e) => setItemSearch(e.target.value)}
                placeholder="Potion, Powercharm, 99..."
              />
            </label>
            <div className="item-lists">
              <div className="item-list">
                <div className="list-head">
                  <div>
                    <p className="label">Item catalog</p>
                  </div>
                  <span className="pill">{ITEMS.length} items</span>
                </div>
                <div className="list-body">
                  {ITEMS.map((item) => {
                    const iconPath = getIconPath(item.id);
                    const iconColor = getIconColor(item.id);
                    return (
                      <div
                        className="item-row"
                        key={item.id}
                        ref={(el) => {
                          if (el) itemRefs.current.set(item.id, el);
                          else itemRefs.current.delete(item.id);
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {iconPath ? (
                            <div
                              className="item-icon-container"
                              style={iconColor ? {
                                '--icon-color': iconColor,
                                '--icon-url': `url(${iconPath})`,
                                width: '32px', height: '32px'
                              } as React.CSSProperties : { width: '32px', height: '32px' }}
                            >
                              <img
                                src={iconPath}
                                alt={item.name}
                                className="item-icon"
                                style={{ width: '32px', height: '32px' }}
                              />
                            </div>
                          ) : (
                            <div className="item-placeholder" style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>?</div>
                          )}
                          <div>
                            <p className="label small">{item.name}</p>
                            <p className="meta">ID {item.id}</p>
                          </div>
                        </div>
                        <div className="row-actions">
                          <button className="ghost mini" type="button" onClick={() => adjustItemTotal(item.id, -10)}>
                            -10
                          </button>
                          <button className="ghost mini" type="button" onClick={() => adjustItemTotal(item.id, -1)}>
                            -
                          </button>
                          <span className="pill count">{itemTotals.get(item.id) ?? 0}</span>
                          <button className="primary mini" type="button" onClick={() => adjustItemTotal(item.id, 1)}>
                            +
                          </button>
                          <button className="primary mini" type="button" onClick={() => adjustItemTotal(item.id, 10)}>
                            +10
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="item-list">
                <div className="list-head">
                  <div>
                    <p className="label">Current inventory</p>
                    <p className="meta">Only items you currently hold.</p>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span className="pill">{itemStacks.length} stacks</span>
                    <button className="primary mini" type="button" onClick={sortInventoryById}>
                      Sort by ID
                    </button>
                  </div>
                </div>
                <div className="list-body">
                  <InventoryGrid
                    items={itemStacks}
                    onItemClick={handleItemClick}
                    selectedIndex={selectedItemIndex}
                  />
                </div>
              </div>
            </div>
            <details className="manual-editor">
              <summary>Advanced: edit a specific slot</summary>
              <div className="inline-fields">
                <label className="field small">
                  <div className="field-top">
                    <span>Slot #</span>
                  </div>
                  <input
                    type="number"
                    min={1}
                    max={ITEM_SLOT_COUNT}
                    value={itemSlotInput}
                    onChange={(e) => setItemSlotFromValue(Number(e.target.value))}
                  />
                  <div className="field-helper">
                    <span>1-{ITEM_SLOT_COUNT}</span>
                  </div>
                </label>
                <label className="field small">
                  <div className="field-top">
                    <span>Item ID</span>
                  </div>
                  <input
                    type="number"
                    min={0}
                    max={(1 << ITEM_ID_BITS) - 1}
                    value={itemIdInput}
                    onChange={(e) => setItemIdInput(Number(e.target.value))}
                  />
                  <div className="field-helper">
                    <span>{getItemName(itemIdInput)}</span>
                  </div>
                </label>
                <label className="field small">
                  <div className="field-top">
                    <span>Count</span>
                  </div>
                  <input
                    type="number"
                    min={0}
                    max={(1 << ITEM_COUNT_BITS) - 1}
                    value={itemCountInput}
                    onChange={(e) => setItemCountInput(Number(e.target.value))}
                  />
                  <div className="field-helper">
                    <span>0-{(1 << ITEM_COUNT_BITS) - 1}</span>
                  </div>
                </label>
              </div>
              <div className="actions wrap">
                <button className="primary" type="button" onClick={applyItemSlot}>
                  Save slot
                </button>
                <button className="ghost" type="button" onClick={() => setItemSlotFromValue(itemSlotInput)}>
                  Reload slot
                </button>
                <button className="ghost" type="button" onClick={clearItemSlot}>
                  Clear slot
                </button>
              </div>
            </details>
          </div>
        </div>
      ) : (
        <p className="hint">Load a save to edit item box and inventory.</p>
      )}
    </div>
  );

  const renderHunterEquipTab = () => (
    <div className="tab-panel" data-tab="hunterEquip">
      {equipment && hunterEquipmentEntries ? (
        <div className="subcard">
          <div className="subcard-header">
            <div>
              <p className="label">Equipment box</p>
              <p className="meta">
                {filteredHunterEntries.length}/{EQUIPMENT_SLOT_COUNT} slots with equipment. Add from catalog or edit manually.
              </p>
            </div>
            <span className="pill">{EQUIPMENT_SLOT_COUNT} slots</span>
          </div>

          <div className="item-form">
            <label className="field small full">
              <div className="field-top">
                <span>Search equipment</span>
                <span className="meta">Type to filter catalog and box.</span>
              </div>
              <input
                type="text"
                value={equipSearch}
                onChange={(e) => setEquipSearch(e.target.value)}
                placeholder="Great Sword, Rathalos, 123..."
              />
            </label>

            <div className="item-lists">
              {/* LEFT SIDE - Equipment Catalog */}
              <div className="item-list">
                <div className="list-head">
                  <div>
                    <p className="label">Equipment catalog</p>
                  </div>
                  <span className="pill">{filteredCatalog.length} items</span>
                </div>

                {/* Filter Controls */}
                <div className="filter-controls">
                  <select 
                    value={equipCategoryFilter} 
                    onChange={(e) => {
                      setEquipCategoryFilter(e.target.value as 'all' | 'weapon' | 'armor' | 'talisman');
                      setEquipTypeFilter(0);
                    }}
                  >
                    <option value="all">All Categories</option>
                    <option value="weapon">Weapons</option>
                    <option value="armor">Armor</option>
                    <option value="talisman">Talismans</option>
                  </select>

                  <select 
                    value={equipTypeFilter} 
                    onChange={(e) => setEquipTypeFilter(Number(e.target.value))}
                  >
                    <option value={0}>All Types</option>
                    {equipCategoryFilter === 'weapon' && WEAPON_TYPE_LIST.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                    {equipCategoryFilter === 'armor' && ARMOR_PIECE_TYPES.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                    {equipCategoryFilter === 'all' && [
                      ...WEAPON_TYPE_LIST.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                      )),
                      ...ARMOR_PIECE_TYPES.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                      ))
                    ]}
                  </select>

                  <select
                    value={equipRarityFilter}
                    onChange={(e) => setEquipRarityFilter(Number(e.target.value))}
                  >
                    <option value={0}>All Rarities</option>
                    <option value={1}>Rare 1</option>
                    <option value={2}>Rare 2</option>
                    <option value={3}>Rare 3</option>
                    <option value={4}>Rare 4</option>
                    <option value={5}>Rare 5</option>
                    <option value={6}>Rare 6</option>
                    <option value={7}>Rare 7</option>
                    <option value={8}>Rare 8</option>
                    <option value={9}>Rare 9</option>
                    <option value={10}>Rare 10</option>
                  </select>
                </div>

                <div className="list-body">
                  {filteredCatalog.map((item) => {
                    const iconPath = getEquipmentIcon(item.type);
                    const rarityColor = getRarityColorFromNumber(item.rarity);
                    const equipKey = `${item.type}-${item.id}`;
                    const count = equipmentCounts.get(equipKey) ?? 0;
                    
                    return (
                      <div className="item-row" key={equipKey}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div
                            className="item-icon-container"
                            style={rarityColor ? {
                              '--icon-color': rarityColor,
                              '--icon-url': `url(${iconPath})`,
                              width: '32px',
                              height: '32px'
                            } as React.CSSProperties : { width: '32px', height: '32px' }}
                          >
                            <img 
                              src={iconPath} 
                              alt={item.subcategory} 
                              className="item-icon"
                              style={{ width: '32px', height: '32px' }}
                            />
                          </div>
                          <div>
                            <p className="label small">{item.name}</p>
                            <p className="meta">{item.subcategory} • ID {item.id} • Rare {item.rarity}</p>
                          </div>
                        </div>
                        <div className="row-actions">
                          <button 
                            className="ghost mini" 
                            type="button"
                            onClick={() => removeEquipmentFromBox(item.type, item.id)}
                            disabled={count === 0}
                          >
                            -
                          </button>
                          <span className="pill count">{count}</span>
                          <button 
                            className="primary mini" 
                            type="button"
                            onClick={() => addEquipmentToBox(item.type, item.id, item.rarity)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT SIDE - Equipment Box Grid */}
              <div className="item-list">
                <div className="list-head">
                  <div>
                    <p className="label">Current equipment box</p>
                    <p className="meta">Only equipment you currently hold.</p>
                  </div>
                  <span className="pill">{filteredHunterEntries.length} pieces</span>
                </div>
                <div className="list-body">
                  {filteredHunterEntries.length === 0 ? (
                    <p className="hint">No equipment in box. Add items from the catalog on the left.</p>
                  ) : (
                    <div className="inventory-grid">
                      {filteredHunterEntries.map((entry) => {
                        const icon = getEquipmentIcon(entry.type);
                        const name = getEquipmentName(entry.type, entry.equipId);
                        const rarityColor = getRarityColor(entry);
                        const isSelected = selectedEquipIndex === entry.slot - 1;

                        return (
                          <div
                            key={entry.slot}
                            className={`inventory-slot ${isSelected ? "selected" : ""}`}
                            onClick={() => setSelectedEquipIndex(entry.slot - 1)}
                            title={`${name} • ${getEquipmentTypeName(entry.type)} • Rare ${deriveRarityLabel(entry.levelBits)}`}
                          >
                            <div
                              className="item-icon-container"
                              style={rarityColor ? {
                                '--icon-color': rarityColor,
                                '--icon-url': `url(${icon})`
                              } as React.CSSProperties : {}}
                            >
                              <img
                                src={icon}
                                alt={name}
                                className="item-icon"
                              />
                            </div>
                            <span className="item-count">{deriveRarityLabel(entry.levelBits)}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <details className="manual-editor">
            <summary>Advanced: edit a specific equipment slot</summary>
            <div className="inline-fields wrap">
              <label className="field small">
                <div className="field-top">
                  <span>Slot #</span>
                </div>
                <input
                  type="number"
                  min={1}
                  max={EQUIPMENT_SLOT_COUNT}
                  value={(selectedEquipIndex ?? 0) + 1}
                  onChange={(e) => setSelectedEquipSlot(Number(e.target.value))}
                />
                <div className="field-helper">
                  <span>1-{EQUIPMENT_SLOT_COUNT}</span>
                </div>
              </label>

              <label className="field small">
                <div className="field-top">
                  <span>Type</span>
                </div>
                <select
                  value={selectedEquipEntry?.type ?? 0}
                  onChange={(e) => updateSelectedEquipmentField("type", Number(e.target.value))}
                >
                  {Array.from({ length: 22 }, (_, idx) => (
                    <option key={idx} value={idx}>
                      {getEquipmentTypeName(idx)}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field small">
                <div className="field-top">
                  <span>Equip ID</span>
                </div>
                <input
                  type="number"
                  min={0}
                  max={65535}
                  value={selectedEquipEntry?.equipId ?? 0}
                  onChange={(e) => updateSelectedEquipmentField("equipId", Number(e.target.value))}
                />
              </label>

              <label className="field small">
                <div className="field-top">
                  <span>Transmog ID</span>
                </div>
                <input
                  type="number"
                  min={0}
                  max={65535}
                  value={selectedEquipEntry?.transmogId ?? 0}
                  onChange={(e) => updateSelectedEquipmentField("transmogId", Number(e.target.value))}
                />
              </label>

              <label className="field small">
                <div className="field-top">
                  <span>Rarity (level bits)</span>
                </div>
                <input
                  type="number"
                  min={0}
                  max={2047}
                  value={selectedEquipEntry?.levelBits ?? 0}
                  onChange={(e) => updateSelectedEquipmentField("levelBits", Number(e.target.value))}
                />
                <div className="field-helper">
                  <span>Rare {selectedEquipEntry ? deriveRarityLabel(selectedEquipEntry.levelBits) : "1"}</span>
                </div>
              </label>

              <label className="field small">
                <div className="field-top">
                  <span>Deco 1 ID</span>
                </div>
                <input
                  type="number"
                  min={0}
                  max={65535}
                  value={selectedEquipEntry?.deco1 ?? 0}
                  onChange={(e) => updateSelectedEquipmentField("deco1", Number(e.target.value))}
                />
              </label>
              <label className="field small">
                <div className="field-top">
                  <span>Deco 2 ID</span>
                </div>
                <input
                  type="number"
                  min={0}
                  max={65535}
                  value={selectedEquipEntry?.deco2 ?? 0}
                  onChange={(e) => updateSelectedEquipmentField("deco2", Number(e.target.value))}
                />
              </label>
              <label className="field small">
                <div className="field-top">
                  <span>Deco 3 ID</span>
                </div>
                <input
                  type="number"
                  min={0}
                  max={65535}
                  value={selectedEquipEntry?.deco3 ?? 0}
                  onChange={(e) => updateSelectedEquipmentField("deco3", Number(e.target.value))}
                />
              </label>
            </div>
            <div className="actions wrap">
              <button
                className="primary"
                type="button"
                onClick={() => selectedEquipIndex !== null && clearHunterEntry(selectedEquipIndex)}
                disabled={selectedEquipIndex === null}
              >
                Clear slot
              </button>
              <button
                className="ghost"
                type="button"
                onClick={() => {
                  if (!equipment) return;
                  const entries = parseHunterEquipmentEntries(equipment.hunter);
                  setHunterEquipmentEntries(entries);
                  setHexBlocks((prev) => ({ ...prev, hunterEquip: bytesToHex(equipment.hunter) }));
                }}
              >
                Reload from save
              </button>
            </div>
          </details>

          <details className="manual-editor">
            <summary>Raw hex (fallback)</summary>
            {renderHexEditor(
              "hunterEquip",
              "Hunter equipment box",
              EQUIPMENT_BOX_BYTES,
              (bytes) =>
                setEquipment((prev) =>
                  prev
                    ? { ...prev, hunter: bytes }
                    : { hunter: bytes, palico: new Uint8Array(PALICO_EQUIPMENT_BYTES) }
                ),
              "72,000 bytes. Import an eqpboXX export or paste hex."
            )}
          </details>
        </div>
      ) : (
        <p className="hint">Load a save to edit hunter equipment.</p>
      )}
    </div>
  );

  const renderPalicoEquipTab = () => (
    <div className="tab-panel" data-tab="palicoEquip">
      {equipment && palicoes ? (
        <div className="block-grid">
          {/* Equipment Box Section */}
          <div className="subcard">
            <div className="subcard-header">
              <div>
                <p className="label">Palico equipment box</p>
                <p className="meta">{palicoEquipmentEntries.filter(e => e.type !== 0).length} / {PALICO_EQUIP_SLOT_COUNT} slots used</p>
              </div>
              <span className="pill">{PALICO_EQUIPMENT_BYTES.toLocaleString()} bytes</span>
            </div>

            {/* Equipment Catalog Browser */}
            <div className="inline-fields wrap" style={{ marginBottom: '1rem' }}>
              <label className="field small">
                <div className="field-top">
                  <span>Type filter</span>
                </div>
                <select
                  value={palicoEquipTypeFilter}
                  onChange={(e) => setPalicoEquipTypeFilter(Number(e.target.value))}
                >
                  <option value={0}>All types</option>
                  <option value={22}>Weapons</option>
                  <option value={23}>Helmets</option>
                  <option value={24}>Body armor</option>
                </select>
              </label>

              <label className="field small">
                <div className="field-top">
                  <span>Rarity filter</span>
                </div>
                <select
                  value={palicoRarityFilter}
                  onChange={(e) => setPalicoRarityFilter(Number(e.target.value))}
                >
                  <option value={0}>All rarities</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(r => (
                    <option key={r} value={r}>Rare {r}</option>
                  ))}
                </select>
              </label>

              <label className="field">
                <div className="field-top">
                  <span>Search equipment</span>
                </div>
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={palicoEquipSearch}
                  onChange={(e) => setPalicoEquipSearch(e.target.value)}
                />
              </label>
            </div>

            {/* Catalog Grid */}
            <div style={{ marginBottom: '1rem' }}>
              <p className="meta" style={{ marginBottom: '0.5rem' }}>
                {filteredPalicoCatalog.length} equipment items available
              </p>
              <div className="inventory-grid" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {filteredPalicoCatalog.map((equip) => {
                  const icon = getPalicoEquipmentIcon(equip.type);
                  const rarityColor = getRarityColorFromNumber(equip.rarity);
                  const count = palicoEquipmentCounts[`${equip.type}-${equip.id}`] || 0;

                  return (
                    <div
                      key={`${equip.type}-${equip.id}`}
                      className="inventory-slot"
                      onClick={() => addPalicoEquipmentToBox(equip)}
                      title={`${equip.name} • ${getPalicoEquipmentTypeName(equip.type)} • Rare ${equip.rarity} • Click to add`}
                      style={{ cursor: 'pointer' }}
                    >
                      <div
                        className="item-icon-container"
                        style={rarityColor ? {
                          '--icon-color': rarityColor,
                          '--icon-url': `url(${icon})`
                        } as React.CSSProperties : {}}
                      >
                        <img
                          src={icon}
                          alt={equip.name}
                          className="item-icon"
                        />
                      </div>
                      {count > 0 && <span className="item-count">{count}</span>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Equipment Box Grid */}
            <div>
              <p className="meta" style={{ marginBottom: '0.5rem' }}>Your equipment box (click to remove)</p>
              {palicoEquipmentEntries.filter(e => e.type !== 0).length > 0 ? (
                <PalicoEquipmentGrid
                  entries={palicoEquipmentEntries}
                  selectedSlot={selectedPalicoEquipIndex}
                  onSlotClick={(slot) => {
                    setSelectedPalicoEquipIndex(slot);
                    const entry = palicoEquipmentEntries[slot];
                    if (confirm(`Remove ${getPalicoEquipmentName(entry.type, entry.equipId)} from box?`)) {
                      removePalicoEquipmentFromBox(entry.type, entry.equipId);
                    }
                  }}
                />
              ) : (
                <p className="hint">No equipment in box. Add equipment from the catalog above.</p>
              )}
            </div>
          </div>

          {/* Palico Roster Section */}
          <div className="subcard">
            <div className="subcard-header">
              <div>
                <p className="label">Palico roster</p>
                <p className="meta">{palicoCount} / {PALICO_ROSTER_SLOT_COUNT} palicoes recruited</p>
              </div>
              <span className="pill">{PALICO_BYTES.toLocaleString()} bytes</span>
            </div>

            {/* Roster Grid */}
            {palicoRosterEntries.filter(p => p.name.length > 0).length > 0 ? (
              <div style={{ marginBottom: '1rem' }}>
                <PalicoRosterGrid
                  entries={palicoRosterEntries}
                  selectedIndex={selectedPalicoRosterIndex}
                  onPalicoClick={setSelectedPalicoRosterIndex}
                />
              </div>
            ) : (
              <p className="hint">No palicoes in roster.</p>
            )}

            {/* Palico Editor */}
            {selectedPalicoRosterIndex !== null && palicoRosterEntries[selectedPalicoRosterIndex]?.name && (
              <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid var(--border)', borderRadius: '4px' }}>
                <p className="label" style={{ marginBottom: '1rem' }}>
                  Editing: {palicoRosterEntries[selectedPalicoRosterIndex].name}
                </p>

                <div className="inline-fields wrap">
                  <label className="field">
                    <div className="field-top">
                      <span>Name</span>
                    </div>
                    <input
                      type="text"
                      maxLength={31}
                      value={palicoRosterEntries[selectedPalicoRosterIndex].name}
                      onChange={(e) => updatePalicoRosterEntry(selectedPalicoRosterIndex, { name: e.target.value })}
                    />
                  </label>

                  <label className="field small">
                    <div className="field-top">
                      <span>Level</span>
                    </div>
                    <input
                      type="number"
                      min={1}
                      max={99}
                      value={palicoRosterEntries[selectedPalicoRosterIndex].level}
                      onChange={(e) => updatePalicoRosterEntry(selectedPalicoRosterIndex, { level: Number(e.target.value) })}
                    />
                  </label>

                  <label className="field small">
                    <div className="field-top">
                      <span>EXP</span>
                    </div>
                    <input
                      type="number"
                      min={0}
                      max={999999}
                      value={palicoRosterEntries[selectedPalicoRosterIndex].exp}
                      onChange={(e) => updatePalicoRosterEntry(selectedPalicoRosterIndex, { exp: Number(e.target.value) })}
                    />
                  </label>

                  <label className="field small">
                    <div className="field-top">
                      <span>Forte</span>
                    </div>
                    <select
                      value={palicoRosterEntries[selectedPalicoRosterIndex].forte}
                      onChange={(e) => updatePalicoRosterEntry(selectedPalicoRosterIndex, { forte: Number(e.target.value) })}
                    >
                      {[0, 1, 2, 3, 4, 5, 6, 7].map(f => (
                        <option key={f} value={f}>{getForteName(f)}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="inline-fields wrap" style={{ marginTop: '1rem' }}>
                  <label className="field">
                    <div className="field-top">
                      <span>Weapon</span>
                    </div>
                    <select
                      value={palicoRosterEntries[selectedPalicoRosterIndex].equippedWeaponId}
                      onChange={(e) => assignEquipmentToPalico(selectedPalicoRosterIndex, 'weapon', Number(e.target.value))}
                    >
                      <option value={0xFFFF}>None</option>
                      {palicoEquipmentEntries
                        .filter(e => e.type === 22 && e.equipId > 0)
                        .map(e => (
                          <option key={e.slot} value={e.equipId}>
                            {getPalicoEquipmentName(e.type, e.equipId)}
                          </option>
                        ))}
                    </select>
                  </label>

                  <label className="field">
                    <div className="field-top">
                      <span>Helmet</span>
                    </div>
                    <select
                      value={palicoRosterEntries[selectedPalicoRosterIndex].equippedHelmetId}
                      onChange={(e) => assignEquipmentToPalico(selectedPalicoRosterIndex, 'helmet', Number(e.target.value))}
                    >
                      <option value={0xFFFF}>None</option>
                      {palicoEquipmentEntries
                        .filter(e => e.type === 23 && e.equipId > 0)
                        .map(e => (
                          <option key={e.slot} value={e.equipId}>
                            {getPalicoEquipmentName(e.type, e.equipId)}
                          </option>
                        ))}
                    </select>
                  </label>

                  <label className="field">
                    <div className="field-top">
                      <span>Body armor</span>
                    </div>
                    <select
                      value={palicoRosterEntries[selectedPalicoRosterIndex].equippedBodyId}
                      onChange={(e) => assignEquipmentToPalico(selectedPalicoRosterIndex, 'body', Number(e.target.value))}
                    >
                      <option value={0xFFFF}>None</option>
                      {palicoEquipmentEntries
                        .filter(e => e.type === 24 && e.equipId > 0)
                        .map(e => (
                          <option key={e.slot} value={e.equipId}>
                            {getPalicoEquipmentName(e.type, e.equipId)}
                          </option>
                        ))}
                    </select>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Collapsed Hex Editors */}
          <details className="subcard" style={{ gridColumn: '1 / -1' }}>
            <summary>Advanced: raw hex editors</summary>
            <div className="block-grid">
              <div>
                <div className="subcard-header">
                  <div>
                    <p className="label">Palico equipment box (hex)</p>
                    <p className="meta">Direct byte editing. Use with caution.</p>
                  </div>
                  <span className="pill">{PALICO_EQUIPMENT_BYTES.toLocaleString()} bytes</span>
                </div>
                {renderHexEditor(
                  "palicoEquip",
                  "Palico equipment box",
                  PALICO_EQUIPMENT_BYTES,
                  (bytes) =>
                    setEquipment((prev) =>
                      prev
                        ? { ...prev, palico: bytes }
                        : { palico: bytes, hunter: new Uint8Array(EQUIPMENT_BOX_BYTES) }
                    ),
                  "36,000 bytes."
                )}
              </div>
              <div>
                <div className="subcard-header">
                  <div>
                    <p className="label">Palicoes roster (hex)</p>
                    <p className="meta">Direct byte editing. Use with caution.</p>
                  </div>
                  <span className="pill">{PALICO_BYTES.toLocaleString()} bytes</span>
                </div>
                {renderHexEditor(
                  "palicoes",
                  "Palicoes",
                  PALICO_BYTES,
                  (bytes) => setPalicoes((prev) => (prev ? { ...prev, raw: bytes } : { raw: bytes })),
                  `${PALICO_BYTES} bytes.`
                )}
              </div>
            </div>
          </details>
        </div>
      ) : (
        <p className="hint">Load a save to edit palico gear and roster.</p>
      )}
    </div>
  );

  const renderProgressTab = () => (
    <div className="tab-panel" data-tab="progress">
      {loadedSave && guildCard && shoutouts && monsterLogs ? (
        <div className="block-grid">
          <div className="subcard">
            <div className="subcard-header">
              <div>
                <p className="label">Guild card</p>
                <p className="meta">Arena log included—keep byte counts matched.</p>
              </div>
              <span className="pill">{(guildCard.card.length + guildCard.arenaLog.length).toLocaleString()} bytes</span>
            </div>
            {renderHexEditor(
              "guildCard",
              "Guild card block",
              GUILD_CARD_BYTES,
              (bytes) =>
                setGuildCard((prev) =>
                  prev
                    ? { ...prev, card: bytes }
                    : { card: bytes, arenaLog: new Uint8Array(ARENA_LOG_BYTES) }
                ),
              `${GUILD_CARD_BYTES} bytes.`
            )}
            {renderHexEditor(
              "arenaLog",
              "Arena log",
              ARENA_LOG_BYTES,
              (bytes) =>
                setGuildCard((prev) =>
                  prev
                    ? { ...prev, arenaLog: bytes }
                    : { card: new Uint8Array(GUILD_CARD_BYTES), arenaLog: bytes }
                ),
              `${ARENA_LOG_BYTES} bytes.`
            )}
            <div className="subcard-header">
              <div>
                <p className="label">Shoutouts</p>
                <p className="meta">Manual + automatic messages.</p>
              </div>
              <span className="pill">{(shoutouts.manual.length + shoutouts.automatic.length).toLocaleString()} bytes</span>
            </div>
            {renderHexEditor(
              "manualShoutouts",
              "Manual shoutouts",
              MANUAL_SHOUTOUT_BYTES,
              (bytes) =>
                setShoutouts((prev) =>
                  prev
                    ? { ...prev, manual: bytes }
                    : { manual: bytes, automatic: new Uint8Array(AUTOMATIC_SHOUTOUT_BYTES) }
                ),
              `${MANUAL_SHOUTOUT_BYTES} bytes.`
            )}
            {renderHexEditor(
              "automaticShoutouts",
              "Automatic shoutouts",
              AUTOMATIC_SHOUTOUT_BYTES,
              (bytes) =>
                setShoutouts((prev) =>
                  prev
                    ? { ...prev, automatic: bytes }
                    : { manual: new Uint8Array(MANUAL_SHOUTOUT_BYTES), automatic: bytes }
                ),
              `${AUTOMATIC_SHOUTOUT_BYTES} bytes.`
            )}
          </div>

          <div className="subcard">
            <div className="subcard-header">
              <div>
                <p className="label">Monster logs</p>
                <p className="meta">Kills, captures, and size records.</p>
              </div>
              <span className="pill">
                {(monsterLogs.kills.length + monsterLogs.captures.length + monsterLogs.sizes.length).toLocaleString()} bytes
              </span>
            </div>
            {renderHexEditor(
              "monsterKills",
              "Kill log",
              MONSTER_KILL_BYTES,
              (bytes) =>
                setMonsterLogs((prev) =>
                  prev
                    ? { ...prev, kills: bytes }
                    : { kills: bytes, captures: new Uint8Array(MONSTER_CAPTURE_BYTES), sizes: new Uint8Array(MONSTER_SIZE_BYTES) }
                ),
              `${MONSTER_KILL_BYTES} bytes.`
            )}
            {renderHexEditor(
              "monsterCaptures",
              "Capture log",
              MONSTER_CAPTURE_BYTES,
              (bytes) =>
                setMonsterLogs((prev) =>
                  prev
                    ? { ...prev, captures: bytes }
                    : { kills: new Uint8Array(MONSTER_KILL_BYTES), captures: bytes, sizes: new Uint8Array(MONSTER_SIZE_BYTES) }
                ),
              `${MONSTER_CAPTURE_BYTES} bytes.`
            )}
            {renderHexEditor(
              "monsterSizes",
              "Size log",
              MONSTER_SIZE_BYTES,
              (bytes) =>
                setMonsterLogs((prev) =>
                  prev
                    ? { ...prev, sizes: bytes }
                    : { kills: new Uint8Array(MONSTER_KILL_BYTES), captures: new Uint8Array(MONSTER_CAPTURE_BYTES), sizes: bytes }
                ),
              `${MONSTER_SIZE_BYTES} bytes.`
            )}
          </div>
        </div>
      ) : (
        <p className="hint">Load a save to edit guild card, shoutouts, and monster logs.</p>
      )}
    </div>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case "edit":
        return renderEditTab();
      case "items":
        return renderItemsTab();
      case "hunterEquip":
        return renderHunterEquipTab();
      case "palicoEquip":
        return renderPalicoEquipTab();
      case "progress":
        return renderProgressTab();
      default:
        return renderEditTab();
    }
  };

  return (
    <div className="page">
      <div className="bg-accent" />
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Browser preview</p>
          <h1>MHXX Save Editor</h1>
          <p className="lede">
            Edit core character data directly in your browser. No upload, no
            installer—everything stays local.
          </p>
          <div className="hero-actions">
            <button className="primary" onClick={pickFile}>
              Load save file
            </button>
            <button className="ghost" onClick={handleReset}>
              Reset
            </button>
            <span className="hint">Accepts 3DS and Switch system files</span>
          </div>
        </div>
        <div className="hero-card">
          <p className="status">{status}</p>
          {error && <p className="error">Error: {error}</p>}
        </div>
      </header>

      <main className="grid">
        <section className="card">
          <div className="card-header">
            <h2>1) Load your save</h2>
            <span className="chip">Local only</span>
          </div>
          <div className="file-drop" onClick={pickFile}>
            <input
              ref={fileInputRef}
              type="file"
              accept="*/*"
              onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
            />
            <p>
              Drag a save here or <span className="linklike">browse</span>
            </p>
            <small>Expected sizes: 4,726,152 bytes (3DS) or Switch variants.</small>
            {loadedSave && (
              <div className="file-meta">
                <p>
                  {loadedSave.fileName ?? "system"} • {loadedSave.kind.toUpperCase()} •{" "}
                  {loadedSave.payload.length.toLocaleString()} byte payload
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <h2>2) Pick a slot</h2>
            <span className="chip subtle">Slots</span>
          </div>
          <div className="slots">
            {slotButtons.map((available, index) => {
              const slotNumber = index + 1;
              const disabled = !available;
              return (
                <button
                  key={slotNumber}
                  className={`slot ${currentSlot === slotNumber ? "active" : ""}`}
                  onClick={() => handleSlotChange(slotNumber)}
                  disabled={disabled}
                >
                  Slot {slotNumber}
                  <span className="slot-sub">
                    {available ? "Loaded" : "Empty in save"}
                  </span>
                </button>
              );
            })}
            {!slotButtons.some(Boolean) && (
              <p className="hint">
                Load a save to see which character slots are active.
              </p>
            )}
          </div>
        </section>

      </main>

      <section className="card tall tab-card">
        <div className="tab-header">
          <div>
            <h2>3) Edit save data</h2>
            <p className="meta">
              {loadedSave
                ? `Working on slot ${currentSlot}. Toggle tabs to edit different areas.`
                : "Load a save to unlock the editor tabs below."}
            </p>
          </div>
          <div className="tab-actions">
            <button className="primary" disabled={!canDownload} onClick={handleDownload}>
              Download updated save
            </button>
            <div className="stack compact">
              <span className="meta">
                Changes apply to slot {currentSlot}. Keep a backup before replacing your original file.
              </span>
              {isNameTooLong && (
                <span className="error">
                  Hunter name is too long. Reduce to 32 bytes or less.
                </span>
              )}
              {hasBlockErrors && (
                <span className="error">Fix hex editor errors before downloading.</span>
              )}
            </div>
          </div>
        </div>

        <div className="tab-bar">
          {TAB_CONFIG.map((tab) => (
            <button
              key={tab.key}
              className={`tab ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
              disabled={!loadedSave}
            >
              <span className="tab-label">{tab.label}</span>
              <span className="meta">{tab.helper}</span>
            </button>
          ))}
        </div>

        <div className="tab-body">{renderActiveTab()}</div>
      </section>
    </div>
  );
}

export default App;
