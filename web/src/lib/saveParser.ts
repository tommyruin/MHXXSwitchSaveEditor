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
  PALICO_EQUIP_SLOT_COUNT,
  PALICO_EQUIP_SLOT_BYTES,
  PALICO_ROSTER_SLOT_COUNT,
  PALICO_SLOT_BYTES,
  PlayerCore,
  ItemSlot,
  EquipmentBoxes,
  HunterEquipmentEntry,
  PalicoEquipmentSlot,
  PalicoRosterEntry,
  PalicoData,
  GuildCardData,
  ShoutoutData,
  MonsterLogData,
  LoadedSave,
  ArenaRecord,
  MonsterLogEntry
} from "./types";
import {
  HUNT_WEAPONS,
  MONSTER_HUNT_NAMES,
  GRUDGE_MATCHES,
  ARENA_WEAPONS,
  ARENA_PALICO
} from "./gameConstants";

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

const decodePalicoEquipment = (box: Uint8Array): PalicoEquipmentSlot[] => {
  const entries: PalicoEquipmentSlot[] = new Array(PALICO_EQUIP_SLOT_COUNT);
  for (let slot = 0; slot < PALICO_EQUIP_SLOT_COUNT; slot++) {
    const start = slot * PALICO_EQUIP_SLOT_BYTES;
    const raw = box.slice(start, start + PALICO_EQUIP_SLOT_BYTES);
    const typeLevel = raw[0] | (raw[1] << 8);
    const type = typeLevel & 0x1f; // Bits 0-4
    const levelBits = typeLevel >> 5; // Remaining bits
    const equipId = raw[2] | (raw[3] << 8);

    entries[slot] = {
      slot: slot + 1,
      type,
      levelBits,
      equipId,
      raw
    };
  }
  return entries;
};

const encodePalicoEquipment = (entries: PalicoEquipmentSlot[]): Uint8Array => {
  if (entries.length !== PALICO_EQUIP_SLOT_COUNT) {
    throw new Error(`Palico equipment entries must be ${PALICO_EQUIP_SLOT_COUNT} slots.`);
  }
  const box = new Uint8Array(PALICO_EQUIPMENT_BYTES);
  entries.forEach((entry, index) => {
    const start = index * PALICO_EQUIP_SLOT_BYTES;
    const snapshot = new Uint8Array(entry.raw);

    const typeLevel = (entry.levelBits << 5) | (entry.type & 0x1f);
    snapshot[0] = typeLevel & 0xff;
    snapshot[1] = (typeLevel >> 8) & 0xff;

    snapshot[2] = entry.equipId & 0xff;
    snapshot[3] = (entry.equipId >> 8) & 0xff;

    box.set(snapshot, start);
  });
  return box;
};

export const parsePalicoEquipmentEntries = (box: Uint8Array) => decodePalicoEquipment(box);

export const writePalicoEquipmentEntries = (entries: PalicoEquipmentSlot[]) =>
  encodePalicoEquipment(entries);

const decodePalicoRoster = (raw: Uint8Array): PalicoRosterEntry[] => {
  const entries: PalicoRosterEntry[] = new Array(PALICO_ROSTER_SLOT_COUNT);

  for (let i = 0; i < PALICO_ROSTER_SLOT_COUNT; i++) {
    const start = i * PALICO_SLOT_BYTES;
    const slotData = raw.slice(start, start + PALICO_SLOT_BYTES);

    const nameBytes = slotData.slice(0, 32);
    const name = decoder.decode(nameBytes).replace(/\0+$/, '');

    const view = new DataView(slotData.buffer, slotData.byteOffset, slotData.byteLength);
    const exp = view.getUint32(0x20, true);
    const level = slotData[0x24] + 1; // Display as +1
    const forte = slotData[0x25];
    const enthusiasm = slotData[0x26];
    const targetPreference = slotData[0x27];

    const equippedWeaponId = view.getUint16(0x100, true);
    const equippedHelmetId = view.getUint16(0x102, true);
    const equippedBodyId = view.getUint16(0x104, true);

    entries[i] = {
      slot: i + 1,
      name,
      exp,
      level,
      forte,
      enthusiasm,
      targetPreference,
      equippedWeaponId,
      equippedHelmetId,
      equippedBodyId,
      raw: slotData
    };
  }
  return entries;
};

const encodePalicoRoster = (entries: PalicoRosterEntry[]): Uint8Array => {
  if (entries.length !== PALICO_ROSTER_SLOT_COUNT) {
    throw new Error(`Palico roster entries must be ${PALICO_ROSTER_SLOT_COUNT} slots.`);
  }
  const raw = new Uint8Array(PALICO_BYTES);

  entries.forEach((entry, index) => {
    const start = index * PALICO_SLOT_BYTES;
    const snapshot = new Uint8Array(entry.raw);

    // Update name
    const nameBytes = encoder.encode(entry.name);
    const nameBuf = new Uint8Array(32);
    nameBuf.set(nameBytes.slice(0, 32));
    snapshot.set(nameBuf, 0);

    // Update stats
    const view = new DataView(snapshot.buffer, snapshot.byteOffset, snapshot.byteLength);
    view.setUint32(0x20, entry.exp, true);
    snapshot[0x24] = entry.level - 1; // Store as -1
    snapshot[0x25] = entry.forte;
    snapshot[0x26] = entry.enthusiasm;
    snapshot[0x27] = entry.targetPreference;

    // Update equipped gear
    view.setUint16(0x100, entry.equippedWeaponId, true);
    view.setUint16(0x102, entry.equippedHelmetId, true);
    view.setUint16(0x104, entry.equippedBodyId, true);

    raw.set(snapshot, start);
  });
  return raw;
};

export const parsePalicoRosterEntries = (raw: Uint8Array) => decodePalicoRoster(raw);

export const writePalicoRosterEntries = (entries: PalicoRosterEntry[]) =>
  encodePalicoRoster(entries);

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

  const card = copyBlock(payload, base + OFFSETS.GUILCARD_OFFSET, GUILD_CARD_BYTES);
  const arenaLog = copyBlock(payload, base + OFFSETS.GUILDCARD_ARENA_LOG_OFFSET, ARENA_LOG_BYTES);

  return {
    card,
    arenaLog,
    parsed: decodeGuildCard(card, arenaLog)
  };
};

export const writeGuildCard = (
  payload: Uint8Array,
  slotNumber: number,
  guildCard: GuildCardData
): Uint8Array => {
  const encoded = encodeGuildCard(guildCard.parsed);

  // Update the raw buffers in the object to match the parsed data
  guildCard.card = encoded.card;
  guildCard.arenaLog = encoded.arenaLog;

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

  const manual = copyBlock(payload, base + OFFSETS.MANUAL_SHOUTOUT_OFFSETS, MANUAL_SHOUTOUT_BYTES);
  const automatic = copyBlock(payload, base + OFFSETS.AUTOMATIC_SHOUTOUT_OFFSETS, AUTOMATIC_SHOUTOUT_BYTES);

  return {
    manual,
    automatic,
    parsed: decodeShoutouts(manual, automatic)
  };
};

export const writeShoutouts = (
  payload: Uint8Array,
  slotNumber: number,
  shoutouts: ShoutoutData
): Uint8Array => {
  const encoded = encodeShoutouts(shoutouts.parsed);
  shoutouts.manual = encoded.manual;
  shoutouts.automatic = encoded.automatic;

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

  const kills = copyBlock(payload, base + OFFSETS.MONSTERHUNT_OFFSETS, MONSTER_KILL_BYTES);
  const captures = copyBlock(payload, base + OFFSETS.MONSTERCAPTURE_OFFSETS, MONSTER_CAPTURE_BYTES);
  const sizes = copyBlock(payload, base + OFFSETS.MONSTERSIZE_OFFSETS, MONSTER_SIZE_BYTES);

  return {
    kills,
    captures,
    sizes,
    parsed: decodeMonsterLogs(kills, captures, sizes)
  };
};

export const writeMonsterLogs = (
  payload: Uint8Array,
  slotNumber: number,
  logs: MonsterLogData
): Uint8Array => {
  const encoded = encodeMonsterLogs(logs.parsed);
  logs.kills = encoded.kills;
  logs.captures = encoded.captures;
  logs.sizes = encoded.sizes;

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

// --- Helper Functions ---

const decodeGuildCard = (card: Uint8Array, arenaLog: Uint8Array): GuildCardData["parsed"] => {
  const view = new DataView(card.buffer, card.byteOffset, card.byteLength);

  // General
  const nameBytes = card.slice(0, 12);
  // C# uses Encoding.Unicode (UTF-16LE)
  // We need to decode UTF-16LE. TextDecoder("utf-16le") works.
  const utf16Decoder = new TextDecoder("utf-16le");
  const name = utf16Decoder.decode(nameBytes).replace(/\0+$/, "");

  let gcId = "";
  for (let i = 0x8b0; i < 0x8b8; i++) {
    gcId += card[i].toString(16).padStart(2, "0").toUpperCase();
  }

  const playTime = view.getInt32(0x914, true);

  // Quests
  const quests = {
    villageLow: view.getInt16(0x85e, true),
    villageHigh: view.getInt16(0x860, true),
    hubLow: view.getInt16(0x862, true),
    hubHigh: view.getInt16(0x864, true),
    gRank: view.getInt16(0x866, true),
    specialPermit: view.getInt16(0x868, true),
    arena: view.getInt16(0x86a, true)
  };

  // Weapon Usage
  const weaponUsage = {
    village: [] as number[],
    hub: [] as number[],
    arena: [] as number[]
  };

  for (let i = 0; i < HUNT_WEAPONS.length; i++) {
    weaponUsage.village.push(view.getInt16(0x8ba + i * 2, true));
    weaponUsage.hub.push(view.getInt16(0x8d8 + i * 2, true));
    weaponUsage.arena.push(view.getInt16(0x8f6 + i * 2, true));
  }

  // Arena Stats
  const arenaStats: ArenaRecord[] = [];
  const arenaView = new DataView(arenaLog.buffer, arenaLog.byteOffset, arenaLog.byteLength);

  for (let i = 0; i < GRUDGE_MATCHES.length; i++) {
    const entries = [];
    for (let j = 0; j < 5; j++) {
      const offset = i * 20 + j * 4;
      const time = arenaView.getUint16(offset, true);
      const flags = arenaView.getUint16(offset + 2, true);
      const grade = flags & 0x7; // bits 0-2
      const weapon = (flags >> 10) & 0xF; // bits 10-13
      entries.push({ time, weapon, grade });
    }
    arenaStats.push({ questIndex: i, entries });
  }

  return {
    general: { name, gcId, playTime },
    quests,
    weaponUsage,
    arenaStats
  };
};

const encodeGuildCard = (parsed: GuildCardData["parsed"]): { card: Uint8Array; arenaLog: Uint8Array } => {
  const card = new Uint8Array(GUILD_CARD_BYTES);
  const view = new DataView(card.buffer);

  // General
  // Name (UTF-16LE)
  const nameBuffer = new Uint8Array(12);
  // JS strings are UTF-16, but we need to encode to bytes.
  // We can write char codes.
  for (let i = 0; i < 6; i++) { // 6 chars max for 12 bytes? Or 12 bytes = 6 chars?
    // Wait, MHXX names are usually up to 12 bytes.
    // If we just write charCodeAt, it should be fine for basic chars.
    // But for proper UTF-16LE encoding:
    if (i < parsed.general.name.length) {
      const code = parsed.general.name.charCodeAt(i);
      view.setUint16(i * 2, code, true);
    } else {
      view.setUint16(i * 2, 0, true);
    }
  }

  // GC ID
  for (let i = 0; i < 8; i++) {
    const byteVal = parseInt(parsed.general.gcId.substr(i * 2, 2), 16) || 0;
    card[0x8b0 + i] = byteVal;
  }

  view.setInt32(0x914, parsed.general.playTime, true);

  // Quests
  view.setInt16(0x85e, parsed.quests.villageLow, true);
  view.setInt16(0x860, parsed.quests.villageHigh, true);
  view.setInt16(0x862, parsed.quests.hubLow, true);
  view.setInt16(0x864, parsed.quests.hubHigh, true);
  view.setInt16(0x866, parsed.quests.gRank, true);
  view.setInt16(0x868, parsed.quests.specialPermit, true);
  view.setInt16(0x86a, parsed.quests.arena, true);

  // Weapon Usage
  for (let i = 0; i < HUNT_WEAPONS.length; i++) {
    view.setInt16(0x8ba + i * 2, parsed.weaponUsage.village[i] || 0, true);
    view.setInt16(0x8d8 + i * 2, parsed.weaponUsage.hub[i] || 0, true);
    view.setInt16(0x8f6 + i * 2, parsed.weaponUsage.arena[i] || 0, true);
  }

  // Arena Log
  const arenaLog = new Uint8Array(ARENA_LOG_BYTES);
  const arenaView = new DataView(arenaLog.buffer);

  parsed.arenaStats.forEach((record, i) => {
    record.entries.forEach((entry, j) => {
      const offset = i * 20 + j * 4;
      arenaView.setUint16(offset, entry.time, true);
      let flags = entry.grade & 0x7;
      flags |= (entry.weapon & 0xF) << 10;
      arenaView.setUint16(offset + 2, flags, true);
    });
  });

  return { card, arenaLog };
};

const decodeShoutouts = (manual: Uint8Array, automatic: Uint8Array): ShoutoutData["parsed"] => {
  const manualShoutouts: string[] = [];
  const automaticShoutouts: string[] = [];
  const utf8Decoder = new TextDecoder("utf-8");

  for (let i = 0; i < 48; i++) { // TOTAL_MANUAL_SHOUTOUTS
    const start = i * 60;
    const slice = manual.slice(start, start + 60);
    manualShoutouts.push(utf8Decoder.decode(slice).replace(/\0+$/, ""));
  }

  for (let i = 0; i < 27; i++) { // TOTAL_AUTOMATIC_SHOUTOUTS
    const start = i * 60;
    const slice = automatic.slice(start, start + 60);
    automaticShoutouts.push(utf8Decoder.decode(slice).replace(/\0+$/, ""));
  }

  return { manual: manualShoutouts, automatic: automaticShoutouts };
};

const encodeShoutouts = (parsed: ShoutoutData["parsed"]): { manual: Uint8Array; automatic: Uint8Array } => {
  const manual = new Uint8Array(MANUAL_SHOUTOUT_BYTES);
  const automatic = new Uint8Array(AUTOMATIC_SHOUTOUT_BYTES);
  const utf8Encoder = new TextEncoder();

  parsed.manual.forEach((text, i) => {
    const encoded = utf8Encoder.encode(text);
    const slice = new Uint8Array(60);
    slice.set(encoded.slice(0, 60));
    manual.set(slice, i * 60);
  });

  parsed.automatic.forEach((text, i) => {
    const encoded = utf8Encoder.encode(text);
    const slice = new Uint8Array(60);
    slice.set(encoded.slice(0, 60));
    automatic.set(slice, i * 60);
  });

  return { manual, automatic };
};

const decodeMonsterLogs = (kills: Uint8Array, captures: Uint8Array, sizes: Uint8Array): MonsterLogEntry[] => {
  const entries: MonsterLogEntry[] = [];
  const killsView = new DataView(kills.buffer, kills.byteOffset, kills.byteLength);
  const capturesView = new DataView(captures.buffer, captures.byteOffset, captures.byteLength);
  const sizesView = new DataView(sizes.buffer, sizes.byteOffset, sizes.byteLength);

  for (let i = 0; i < MONSTER_HUNT_NAMES.length; i++) {
    entries.push({
      index: i,
      name: MONSTER_HUNT_NAMES[i],
      killed: killsView.getInt16(i * 2, true),
      captured: capturesView.getInt16(i * 2, true),
      sizeSmall: sizesView.getUint16(i * 4, true),
      sizeLarge: sizesView.getUint16(i * 4 + 2, true)
    });
  }
  return entries;
};

const encodeMonsterLogs = (parsed: MonsterLogEntry[]): { kills: Uint8Array; captures: Uint8Array; sizes: Uint8Array } => {
  const kills = new Uint8Array(MONSTER_KILL_BYTES);
  const captures = new Uint8Array(MONSTER_CAPTURE_BYTES);
  const sizes = new Uint8Array(MONSTER_SIZE_BYTES);

  const killsView = new DataView(kills.buffer);
  const capturesView = new DataView(captures.buffer);
  const sizesView = new DataView(sizes.buffer);

  parsed.forEach((entry) => {
    const i = entry.index;
    killsView.setInt16(i * 2, entry.killed, true);
    capturesView.setInt16(i * 2, entry.captured, true);
    sizesView.setUint16(i * 4, entry.sizeSmall, true);
    sizesView.setUint16(i * 4 + 2, entry.sizeLarge, true);
  });

  return { kills, captures, sizes };
};
