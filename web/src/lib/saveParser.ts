import {
  ARENA_LOG_BYTES,
  AUTOMATIC_SHOUTOUT_BYTES,
  EQUIPMENT_BOX_BYTES,
  EQUIPMENT_SLOT_BYTES,
  EQUIPMENT_SLOT_COUNT,
  GUILD_CARD_BYTES,
  ITEM_BOX_BYTES,
  ITEM_ID_BITS,
  ITEM_COUNT_BITS,
  ITEM_PADDING_BITS,
  ITEM_SLOT_BITS,
  ITEM_SLOT_COUNT,
  MANUAL_SHOUTOUT_BYTES,
  MONSTER_CAPTURE_BYTES,
  MONSTER_KILL_BYTES,
  MONSTER_SIZE_BYTES,
  PALICO_BYTES,
  PALICO_EQUIPMENT_BYTES,
  PlayerCore,
  ItemSlot,
  EquipmentBoxes,
  HunterEquipmentEntry,
  PalicoData,
  GuildCardData,
  ShoutoutData,
  MonsterLogData,
  LoadedSave
} from "./types";

const BASE_SAVE_SIZE = 4726152;
const SWITCH_HEADER_SIZE = 36;
const MHGU_EXTRA = 432948;
const NAME_LENGTH = 32;

const decoder = new TextDecoder();
const encoder = new TextEncoder();

const OFFSETS = {
  FIRST_CHAR_SLOT_USED: 0x04,
  SECOND_CHAR_SLOT_USED: 0x05,
  THIRD_CHAR_SLOT_USED: 0x06,
  FIRST_CHARACTER_OFFSET: 0x10,
  SECOND_CHARACTER_OFFSET: 0x14,
  THIRD_CHARACTER_OFFSET: 0x18,
  NAME_OFFSET: 0x23b7d,
  PLAY_TIME_OFFSET: 0x20,
  PLAY_TIME_OFFSET2: 0x2248b,
  FUNDS_OFFSET: 0x24,
  FUNDS_OFFSET2: 0x280f,
  HUNTER_RANK_OFFSET: 0x28,
  HR_POINTS_OFFSET: 0x280b,
  ACADEMY_POINTS_OFFSET: 0x2817,
  BHERNA_POINTS_OFFSET: 0x281b,
  KOKOTO_POINTS_OFFSET: 0x281f,
  POKKE_POINTS_OFFSET: 0x2823,
  YUKUMO_POINTS_OFFSET: 0x2827,
  ITEM_BOX_OFFSET: 0x278,
  EQUIPMENT_BOX_OFFSET: 0x62ee,
  PALICO_EQUIPMENT_OFFSET: 0x17c2e,
  PALICO_OFFSET: 0x23bb6,
  MONSTERHUNT_OFFSETS: 0x5ea6,
  MONSTERCAPTURE_OFFSETS: 0x5fb8,
  MONSTERSIZE_OFFSETS: 0x60ca,
  GUILCARD_OFFSET: 0xc71bd,
  GUILDCARD_ARENA_LOG_OFFSET: 0xc83e1,
  MANUAL_SHOUTOUT_OFFSETS: 0x11d629,
  AUTOMATIC_SHOUTOUT_OFFSETS: 0x11e169
} as const;

type SlotIndex = 0 | 1 | 2;

const getSlotOffset = (view: DataView, slot: SlotIndex) => {
  const offsetLookup = [
    OFFSETS.FIRST_CHARACTER_OFFSET,
    OFFSETS.SECOND_CHARACTER_OFFSET,
    OFFSETS.THIRD_CHARACTER_OFFSET
  ] as const;
  return view.getUint32(offsetLookup[slot], true);
};

const getSlotAvailability = (view: DataView) => [
  view.getUint8(OFFSETS.FIRST_CHAR_SLOT_USED) === 1,
  view.getUint8(OFFSETS.SECOND_CHAR_SLOT_USED) === 1,
  view.getUint8(OFFSETS.THIRD_CHAR_SLOT_USED) === 1
];

const ensureSlot = (slot: number): SlotIndex => {
  if (slot < 1 || slot > 3) {
    throw new Error("Slot must be 1, 2, or 3.");
  }
  return (slot - 1) as SlotIndex;
};

const copyBlock = (payload: Uint8Array, start: number, length: number) =>
  new Uint8Array(payload.buffer, payload.byteOffset + start, length).slice();

export const detectSave = (buffer: ArrayBuffer): LoadedSave => {
  const raw = new Uint8Array(buffer);
  const { length } = raw;
  let headerLength = 0;
  let kind: LoadedSave["kind"] = "3ds";

  if (length === BASE_SAVE_SIZE) {
    kind = "3ds";
    headerLength = 0;
  } else if (length === BASE_SAVE_SIZE + SWITCH_HEADER_SIZE) {
    kind = "switch";
    headerLength = SWITCH_HEADER_SIZE;
  } else if (length === BASE_SAVE_SIZE + MHGU_EXTRA) {
    kind = "switch";
    headerLength = SWITCH_HEADER_SIZE;
  } else {
    throw new Error("Unsupported save size. Expecting 3DS or Switch system file.");
  }

  const header = raw.slice(0, headerLength);
  const payload = raw.slice(headerLength);
  const view = new DataView(
    payload.buffer,
    payload.byteOffset,
    payload.byteLength
  );
  const slotAvailable = getSlotAvailability(view);
  const defaultSlot = Math.max(slotAvailable.findIndex(Boolean), 0) + 1;

  return {
    kind,
    header,
    payload,
    slotAvailable,
    defaultSlot,
    originalSize: length
  };
};

export const parsePlayer = (
  payload: Uint8Array,
  slotNumber: number
): PlayerCore => {
  const slot = ensureSlot(slotNumber);
  const view = new DataView(
    payload.buffer,
    payload.byteOffset,
    payload.byteLength
  );
  const base = getSlotOffset(view, slot);

  const nameBytes = new Uint8Array(payload.buffer, base + OFFSETS.NAME_OFFSET, NAME_LENGTH);
  const name = decoder.decode(nameBytes).replace(/\0+$/, "");

  return {
    name,
    playTime: view.getInt32(base + OFFSETS.PLAY_TIME_OFFSET, true),
    funds: view.getInt32(base + OFFSETS.FUNDS_OFFSET, true),
    hunterRank: view.getInt16(base + OFFSETS.HUNTER_RANK_OFFSET, true),
    hrPoints: view.getInt32(base + OFFSETS.HR_POINTS_OFFSET, true),
    academyPoints: view.getInt32(base + OFFSETS.ACADEMY_POINTS_OFFSET, true),
    bhernaPoints: view.getInt32(base + OFFSETS.BHERNA_POINTS_OFFSET, true),
    kokotoPoints: view.getInt32(base + OFFSETS.KOKOTO_POINTS_OFFSET, true),
    pokkePoints: view.getInt32(base + OFFSETS.POKKE_POINTS_OFFSET, true),
    yukumoPoints: view.getInt32(base + OFFSETS.YUKUMO_POINTS_OFFSET, true)
  };
};

export const writePlayer = (
  payload: Uint8Array,
  slotNumber: number,
  updates: PlayerCore
): Uint8Array => {
  const slot = ensureSlot(slotNumber);
  const updated = new Uint8Array(payload);
  const view = new DataView(updated.buffer, updated.byteOffset, updated.byteLength);
  const base = getSlotOffset(view, slot);

  const encodedName = encoder.encode(updates.name);
  if (encodedName.length > NAME_LENGTH) {
    throw new Error("Name is too long for the save file (max 32 bytes).");
  }
  const nameBytes = new Uint8Array(NAME_LENGTH);
  nameBytes.set(encodedName);
  updated.set(nameBytes, base + OFFSETS.NAME_OFFSET);

  view.setInt32(base + OFFSETS.PLAY_TIME_OFFSET, updates.playTime, true);
  view.setInt32(base + OFFSETS.PLAY_TIME_OFFSET2, updates.playTime, true);

  view.setInt32(base + OFFSETS.FUNDS_OFFSET, updates.funds, true);
  view.setInt32(base + OFFSETS.FUNDS_OFFSET2, updates.funds, true);

  view.setInt16(base + OFFSETS.HUNTER_RANK_OFFSET, updates.hunterRank, true);
  view.setInt32(base + OFFSETS.HR_POINTS_OFFSET, updates.hrPoints, true);
  view.setInt32(base + OFFSETS.ACADEMY_POINTS_OFFSET, updates.academyPoints, true);
  view.setInt32(base + OFFSETS.BHERNA_POINTS_OFFSET, updates.bhernaPoints, true);
  view.setInt32(base + OFFSETS.KOKOTO_POINTS_OFFSET, updates.kokotoPoints, true);
  view.setInt32(base + OFFSETS.POKKE_POINTS_OFFSET, updates.pokkePoints, true);
  view.setInt32(base + OFFSETS.YUKUMO_POINTS_OFFSET, updates.yukumoPoints, true);

  return updated;
};

export const parseItemBox = (
  payload: Uint8Array,
  slotNumber: number
): ItemSlot[] => {
  const slot = ensureSlot(slotNumber);
  const view = new DataView(
    payload.buffer,
    payload.byteOffset,
    payload.byteLength
  );
  const base = getSlotOffset(view, slot);
  const raw = copyBlock(payload, base + OFFSETS.ITEM_BOX_OFFSET, ITEM_BOX_BYTES);
  raw.reverse();

  const bitString = Array.from(raw, (b) => b.toString(2).padStart(8, "0")).join("");
  const trimmed = bitString.slice(ITEM_PADDING_BITS);

  const items: ItemSlot[] = new Array(ITEM_SLOT_COUNT);
  let cursor = 0;
  for (let idx = ITEM_SLOT_COUNT - 1; idx >= 0; idx--) {
    const countBits = trimmed.slice(cursor, cursor + ITEM_COUNT_BITS);
    const idBits = trimmed.slice(cursor + ITEM_COUNT_BITS, cursor + ITEM_SLOT_BITS);
    items[idx] = {
      count: parseInt(countBits || "0", 2),
      id: parseInt(idBits || "0", 2)
    };
    cursor += ITEM_SLOT_BITS;
  }

  return items;
};

export const writeItemBox = (
  payload: Uint8Array,
  slotNumber: number,
  items: ItemSlot[]
): Uint8Array => {
  if (items.length !== ITEM_SLOT_COUNT) {
    throw new Error(`Item box must contain exactly ${ITEM_SLOT_COUNT} slots.`);
  }

  const slot = ensureSlot(slotNumber);
  const updated = new Uint8Array(payload);
  const view = new DataView(updated.buffer, updated.byteOffset, updated.byteLength);
  const base = getSlotOffset(view, slot);

  const bitChunks: string[] = ["0".repeat(ITEM_PADDING_BITS)];
  for (let idx = ITEM_SLOT_COUNT - 1; idx >= 0; idx--) {
    const entry = items[idx];
    const count = Math.max(0, Math.min(entry.count | 0, (1 << ITEM_COUNT_BITS) - 1));
    const id = Math.max(0, Math.min(entry.id | 0, (1 << ITEM_ID_BITS) - 1));
    bitChunks.push(count.toString(2).padStart(ITEM_COUNT_BITS, "0"));
    bitChunks.push(id.toString(2).padStart(ITEM_ID_BITS, "0"));
  }

  const bitString = bitChunks.join("");
  const expectedBits = ITEM_BOX_BYTES * 8;
  const paddedBits = bitString.padEnd(expectedBits, "0");
  const packed = new Uint8Array(ITEM_BOX_BYTES);

  for (let i = 0; i < ITEM_BOX_BYTES; i++) {
    const sliceStart = i * 8;
    packed[i] = parseInt(paddedBits.slice(sliceStart, sliceStart + 8), 2);
  }

  packed.reverse();
  updated.set(packed, base + OFFSETS.ITEM_BOX_OFFSET);

  return updated;
};

export const parseEquipmentBoxes = (
  payload: Uint8Array,
  slotNumber: number
): EquipmentBoxes => {
  const slot = ensureSlot(slotNumber);
  const view = new DataView(
    payload.buffer,
    payload.byteOffset,
    payload.byteLength
  );
  const base = getSlotOffset(view, slot);

  return {
    hunter: copyBlock(payload, base + OFFSETS.EQUIPMENT_BOX_OFFSET, EQUIPMENT_BOX_BYTES),
    palico: copyBlock(payload, base + OFFSETS.PALICO_EQUIPMENT_OFFSET, PALICO_EQUIPMENT_BYTES)
  };
};

const decodeHunterEquipment = (box: Uint8Array): HunterEquipmentEntry[] => {
  const entries: HunterEquipmentEntry[] = new Array(EQUIPMENT_SLOT_COUNT);
  for (let slot = 0; slot < EQUIPMENT_SLOT_COUNT; slot++) {
    const start = slot * EQUIPMENT_SLOT_BYTES;
    const raw = box.slice(start, start + EQUIPMENT_SLOT_BYTES);
    const typeLevel = raw[0] | (raw[1] << 8);
    const type = typeLevel & 0x1f; // matches WinForms: bits 0-4 after concatenation
    const levelBits = typeLevel >> 5; // preserve the remaining bits as-is
    const equipId = raw[2] | (raw[3] << 8);
    const transmogId = raw[4] | (raw[5] << 8);
    const deco1 = raw[6] | (raw[7] << 8);
    const deco2 = raw[8] | (raw[9] << 8);
    const deco3 = raw[10] | (raw[11] << 8);

    entries[slot] = {
      slot: slot + 1,
      type,
      levelBits,
      equipId,
      transmogId,
      deco1,
      deco2,
      deco3,
      raw
    };
  }
  return entries;
};

const encodeHunterEquipment = (entries: HunterEquipmentEntry[]): Uint8Array => {
  if (entries.length !== EQUIPMENT_SLOT_COUNT) {
    throw new Error(`Hunter equipment entries must be ${EQUIPMENT_SLOT_COUNT} slots.`);
  }
  const box = new Uint8Array(EQUIPMENT_BOX_BYTES);
  entries.forEach((entry, index) => {
    const start = index * EQUIPMENT_SLOT_BYTES;
    const snapshot = new Uint8Array(entry.raw);

    const typeLevel = (entry.levelBits << 5) | (entry.type & 0x1f);
    snapshot[0] = typeLevel & 0xff;
    snapshot[1] = (typeLevel >> 8) & 0xff;

    snapshot[2] = entry.equipId & 0xff;
    snapshot[3] = (entry.equipId >> 8) & 0xff;

    snapshot[4] = entry.transmogId & 0xff;
    snapshot[5] = (entry.transmogId >> 8) & 0xff;

    snapshot[6] = entry.deco1 & 0xff;
    snapshot[7] = (entry.deco1 >> 8) & 0xff;

    snapshot[8] = entry.deco2 & 0xff;
    snapshot[9] = (entry.deco2 >> 8) & 0xff;

    snapshot[10] = entry.deco3 & 0xff;
    snapshot[11] = (entry.deco3 >> 8) & 0xff;

    box.set(snapshot, start);
  });
  return box;
};

export const writeEquipmentBoxes = (
  payload: Uint8Array,
  slotNumber: number,
  equipment: EquipmentBoxes
): Uint8Array => {
  if (equipment.hunter.length !== EQUIPMENT_BOX_BYTES) {
    throw new Error(`Hunter equipment box must be ${EQUIPMENT_BOX_BYTES} bytes.`);
  }
  if (equipment.palico.length !== PALICO_EQUIPMENT_BYTES) {
    throw new Error(`Palico equipment box must be ${PALICO_EQUIPMENT_BYTES} bytes.`);
  }

  const slot = ensureSlot(slotNumber);
  const updated = new Uint8Array(payload);
  const view = new DataView(updated.buffer, updated.byteOffset, updated.byteLength);
  const base = getSlotOffset(view, slot);

  updated.set(equipment.hunter, base + OFFSETS.EQUIPMENT_BOX_OFFSET);
  updated.set(equipment.palico, base + OFFSETS.PALICO_EQUIPMENT_OFFSET);

  return updated;
};

export const parseHunterEquipmentEntries = (box: Uint8Array) => decodeHunterEquipment(box);

export const writeHunterEquipmentEntries = (entries: HunterEquipmentEntry[]) =>
  encodeHunterEquipment(entries);

export const parsePalicoes = (
  payload: Uint8Array,
  slotNumber: number
): PalicoData => {
  const slot = ensureSlot(slotNumber);
  const view = new DataView(
    payload.buffer,
    payload.byteOffset,
    payload.byteLength
  );
  const base = getSlotOffset(view, slot);

  return {
    raw: copyBlock(payload, base + OFFSETS.PALICO_OFFSET, PALICO_BYTES)
  };
};

export const writePalicoes = (
  payload: Uint8Array,
  slotNumber: number,
  palicoes: PalicoData
): Uint8Array => {
  if (palicoes.raw.length !== PALICO_BYTES) {
    throw new Error(`Palico block must be ${PALICO_BYTES} bytes.`);
  }

  const slot = ensureSlot(slotNumber);
  const updated = new Uint8Array(payload);
  const view = new DataView(updated.buffer, updated.byteOffset, updated.byteLength);
  const base = getSlotOffset(view, slot);

  updated.set(palicoes.raw, base + OFFSETS.PALICO_OFFSET);
  return updated;
};

export const parseGuildCard = (
  payload: Uint8Array,
  slotNumber: number
): GuildCardData => {
  const slot = ensureSlot(slotNumber);
  const view = new DataView(
    payload.buffer,
    payload.byteOffset,
    payload.byteLength
  );
  const base = getSlotOffset(view, slot);

  return {
    card: copyBlock(payload, base + OFFSETS.GUILCARD_OFFSET, GUILD_CARD_BYTES),
    arenaLog: copyBlock(payload, base + OFFSETS.GUILDCARD_ARENA_LOG_OFFSET, ARENA_LOG_BYTES)
  };
};

export const writeGuildCard = (
  payload: Uint8Array,
  slotNumber: number,
  guildCard: GuildCardData
): Uint8Array => {
  if (guildCard.card.length !== GUILD_CARD_BYTES) {
    throw new Error(`Guild card block must be ${GUILD_CARD_BYTES} bytes.`);
  }
  if (guildCard.arenaLog.length !== ARENA_LOG_BYTES) {
    throw new Error(`Arena log block must be ${ARENA_LOG_BYTES} bytes.`);
  }

  const slot = ensureSlot(slotNumber);
  const updated = new Uint8Array(payload);
  const view = new DataView(updated.buffer, updated.byteOffset, updated.byteLength);
  const base = getSlotOffset(view, slot);

  updated.set(guildCard.card, base + OFFSETS.GUILCARD_OFFSET);
  updated.set(guildCard.arenaLog, base + OFFSETS.GUILDCARD_ARENA_LOG_OFFSET);

  return updated;
};

export const parseShoutouts = (
  payload: Uint8Array,
  slotNumber: number
): ShoutoutData => {
  const slot = ensureSlot(slotNumber);
  const view = new DataView(
    payload.buffer,
    payload.byteOffset,
    payload.byteLength
  );
  const base = getSlotOffset(view, slot);

  return {
    manual: copyBlock(payload, base + OFFSETS.MANUAL_SHOUTOUT_OFFSETS, MANUAL_SHOUTOUT_BYTES),
    automatic: copyBlock(payload, base + OFFSETS.AUTOMATIC_SHOUTOUT_OFFSETS, AUTOMATIC_SHOUTOUT_BYTES)
  };
};

export const writeShoutouts = (
  payload: Uint8Array,
  slotNumber: number,
  shoutouts: ShoutoutData
): Uint8Array => {
  if (shoutouts.manual.length !== MANUAL_SHOUTOUT_BYTES) {
    throw new Error(`Manual shoutouts block must be ${MANUAL_SHOUTOUT_BYTES} bytes.`);
  }
  if (shoutouts.automatic.length !== AUTOMATIC_SHOUTOUT_BYTES) {
    throw new Error(`Automatic shoutouts block must be ${AUTOMATIC_SHOUTOUT_BYTES} bytes.`);
  }

  const slot = ensureSlot(slotNumber);
  const updated = new Uint8Array(payload);
  const view = new DataView(updated.buffer, updated.byteOffset, updated.byteLength);
  const base = getSlotOffset(view, slot);

  updated.set(shoutouts.manual, base + OFFSETS.MANUAL_SHOUTOUT_OFFSETS);
  updated.set(shoutouts.automatic, base + OFFSETS.AUTOMATIC_SHOUTOUT_OFFSETS);

  return updated;
};

export const parseMonsterLogs = (
  payload: Uint8Array,
  slotNumber: number
): MonsterLogData => {
  const slot = ensureSlot(slotNumber);
  const view = new DataView(
    payload.buffer,
    payload.byteOffset,
    payload.byteLength
  );
  const base = getSlotOffset(view, slot);

  return {
    kills: copyBlock(payload, base + OFFSETS.MONSTERHUNT_OFFSETS, MONSTER_KILL_BYTES),
    captures: copyBlock(payload, base + OFFSETS.MONSTERCAPTURE_OFFSETS, MONSTER_CAPTURE_BYTES),
    sizes: copyBlock(payload, base + OFFSETS.MONSTERSIZE_OFFSETS, MONSTER_SIZE_BYTES)
  };
};

export const writeMonsterLogs = (
  payload: Uint8Array,
  slotNumber: number,
  logs: MonsterLogData
): Uint8Array => {
  if (logs.kills.length !== MONSTER_KILL_BYTES) {
    throw new Error(`Monster kill log must be ${MONSTER_KILL_BYTES} bytes.`);
  }
  if (logs.captures.length !== MONSTER_CAPTURE_BYTES) {
    throw new Error(`Monster capture log must be ${MONSTER_CAPTURE_BYTES} bytes.`);
  }
  if (logs.sizes.length !== MONSTER_SIZE_BYTES) {
    throw new Error(`Monster size log must be ${MONSTER_SIZE_BYTES} bytes.`);
  }

  const slot = ensureSlot(slotNumber);
  const updated = new Uint8Array(payload);
  const view = new DataView(updated.buffer, updated.byteOffset, updated.byteLength);
  const base = getSlotOffset(view, slot);

  updated.set(logs.kills, base + OFFSETS.MONSTERHUNT_OFFSETS);
  updated.set(logs.captures, base + OFFSETS.MONSTERCAPTURE_OFFSETS);
  updated.set(logs.sizes, base + OFFSETS.MONSTERSIZE_OFFSETS);

  return updated;
};

export const assembleSave = (header: Uint8Array, payload: Uint8Array) => {
  const merged = new Uint8Array(header.length + payload.length);
  merged.set(header, 0);
  merged.set(payload, header.length);
  return merged;
};

export const formatPlayTime = (seconds: number) => {
  const total = Math.max(0, seconds | 0);
  const days = Math.floor(total / (24 * 3600));
  const remainder = total % (24 * 3600);
  const hours = Math.floor(remainder / 3600);
  const minutes = Math.floor((remainder % 3600) / 60);
  const secs = remainder % 60;
  const pad = (v: number) => v.toString().padStart(2, "0");
  return `${days}.${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
};
