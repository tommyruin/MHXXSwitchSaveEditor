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

export type HunterEquipmentEntry = {
  slot: number;
  type: number;
  levelBits: number;
  equipId: number;
  transmogId: number;
  deco1: number;
  deco2: number;
  deco3: number;
  raw: Uint8Array;
};

export type PalicoEquipmentSlot = {
  slot: number;      // 1-1000
  type: number;      // 0=none, 22=weapon, 23=helmet, 24=body
  levelBits: number; // Rarity encoding (same as hunter equip)
  equipId: number;   // 1-indexed save file ID
  raw: Uint8Array;   // 36-byte raw data
};

export type PalicoRosterEntry = {
  slot: number;              // 1-84
  name: string;              // Palico name
  exp: number;               // Experience points
  level: number;             // Displayed level
  forte: number;             // 0-7 (Charisma, Fighting, etc.)
  enthusiasm: number;        // Stat
  targetPreference: number;  // 0-5
  equippedWeaponId: number;  // Save file ID (0xFFFF = none)
  equippedHelmetId: number;  // Save file ID (0xFFFF = none)
  equippedBodyId: number;    // Save file ID (0xFFFF = none)
  raw: Uint8Array;           // 324-byte raw data
};

export type PalicoData = {
  raw: Uint8Array;
};

export type GuildCardData = {
  card: Uint8Array;
  arenaLog: Uint8Array;
  parsed: {
    general: {
      name: string;
      gcId: string;
      playTime: number;
    };
    quests: {
      villageLow: number;
      villageHigh: number;
      hubLow: number;
      hubHigh: number;
      gRank: number;
      specialPermit: number;
      arena: number;
    };
    weaponUsage: {
      village: number[];
      hub: number[];
      arena: number[];
    };
    arenaStats: ArenaRecord[];
  };
};

export type ArenaRecord = {
  questIndex: number;
  entries: {
    time: number; // seconds
    weapon: number; // index into ArenaWeapons/ArenaPalico
    grade: number; // 0=S, 1=A, 2=B, 3=None
  }[];
};

export type ShoutoutData = {
  manual: Uint8Array;
  automatic: Uint8Array;
  parsed: {
    manual: string[];
    automatic: string[];
  };
};

export type MonsterLogEntry = {
  index: number;
  name: string;
  killed: number;
  captured: number;
  sizeSmall: number;
  sizeLarge: number;
};

export type MonsterLogData = {
  kills: Uint8Array;
  captures: Uint8Array;
  sizes: Uint8Array;
  parsed: MonsterLogEntry[];
};

export const ITEM_SLOT_COUNT = 2300;
export const ITEM_SLOT_BITS = 19;
export const ITEM_COUNT_BITS = 7;
export const ITEM_ID_BITS = 12;
export const ITEM_PADDING_BITS = 4;
export const ITEM_BOX_BYTES = 5463;

export const EQUIPMENT_BOX_BYTES = 72000;
export const EQUIPMENT_SLOT_COUNT = 2000;
export const EQUIPMENT_SLOT_BYTES = 36;
export const PALICO_EQUIPMENT_BYTES = 36000;
export const PALICO_EQUIP_SLOT_COUNT = 1000;
export const PALICO_EQUIP_SLOT_BYTES = 36;
export const PALICO_BYTES = 27216;
export const PALICO_SLOT_BYTES = 324;
export const PALICO_ROSTER_SLOT_COUNT = 84;
export const PALICO_EQUIPMENT_NONE = 0xFFFF;
export const GUILD_CARD_BYTES = 4986;
export const ARENA_LOG_BYTES = 342;
export const MANUAL_SHOUTOUT_BYTES = 2880;
export const AUTOMATIC_SHOUTOUT_BYTES = 1620;
export const MONSTER_KILL_BYTES = 274;
export const MONSTER_CAPTURE_BYTES = 274;
export const MONSTER_SIZE_BYTES = 548;
