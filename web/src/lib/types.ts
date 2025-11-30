export type PlayerCore = {
  name: string;
  playTime: number;
  funds: number;
  hunterRank: number;
  hrPoints: number;
  academyPoints: number;
  bhernaPoints: number;
  kokotoPoints: number;
  pokkePoints: number;
  yukumoPoints: number;
};

export type LoadedSave = {
  kind: "3ds" | "switch";
  payload: Uint8Array;
  header: Uint8Array;
  slotAvailable: boolean[];
  defaultSlot: number;
  originalSize: number;
  fileName?: string;
};

export type ItemSlot = {
  id: number;
  count: number;
};

export type EquipmentBoxes = {
  hunter: Uint8Array;
  palico: Uint8Array;
};

export type PalicoData = {
  raw: Uint8Array;
};

export type GuildCardData = {
  card: Uint8Array;
  arenaLog: Uint8Array;
};

export type ShoutoutData = {
  manual: Uint8Array;
  automatic: Uint8Array;
};

export type MonsterLogData = {
  kills: Uint8Array;
  captures: Uint8Array;
  sizes: Uint8Array;
};

export const ITEM_SLOT_COUNT = 2300;
export const ITEM_SLOT_BITS = 19;
export const ITEM_COUNT_BITS = 7;
export const ITEM_ID_BITS = 12;
export const ITEM_PADDING_BITS = 4;
export const ITEM_BOX_BYTES = 5463;

export const EQUIPMENT_BOX_BYTES = 72000;
export const PALICO_EQUIPMENT_BYTES = 36000;
export const PALICO_BYTES = 27216;
export const PALICO_SLOT_BYTES = 324;
export const GUILD_CARD_BYTES = 4986;
export const ARENA_LOG_BYTES = 342;
export const MANUAL_SHOUTOUT_BYTES = 2880;
export const AUTOMATIC_SHOUTOUT_BYTES = 1620;
export const MONSTER_KILL_BYTES = 274;
export const MONSTER_CAPTURE_BYTES = 274;
export const MONSTER_SIZE_BYTES = 548;
