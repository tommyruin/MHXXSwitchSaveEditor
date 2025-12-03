import { HunterEquipmentEntry } from "./types";
import { equipmentNameMaps } from "./data/equipmentNames";

const EQUIPMENT_TYPES = [
  "(None)",
  "Head",
  "Chest",
  "Arms",
  "Waist",
  "Legs",
  "Talisman",
  "Great Sword",
  "Sword and Shield",
  "Hammer",
  "Lance",
  "Heavy Bowgun",
  "IGNORE THIS",
  "Light Bowgun",
  "Longsword",
  "Switch Axe",
  "Gunlance",
  "Bow",
  "Dual Blades",
  "Hunting Horn",
  "Insect Glaive",
  "Charge Blade"
] as const;

const RARITY_COLORS: Record<string, string> = {
  "1": "#E6E6E6",
  "2": "#B092F2",
  "3": "#DED55E",
  "4": "#E88E9E",
  "5": "#6FC773",
  "6": "#708EF8",
  "7": "#DA565A",
  "8": "#4C9EAC",
  "9": "#EE8C5D",
  "10": "#FF45BD",
  X: "#7D00FF"
};

export const getEquipmentTypeName = (type: number) =>
  EQUIPMENT_TYPES[type] ?? "(Unknown)";

export const getEquipmentName = (type: number, id: number) => {
  const map = equipmentNameMaps[type];
  if (!map) return `(Unknown)`;
  return map[id] ?? `(Unknown #${id})`;
};

const TYPE_ICON: Record<number, string> = {
  1: "/icons/items/icon_armor_head.png",
  2: "/icons/items/icon_armor_body.png",
  3: "/icons/items/icon_armor_arms.png",
  4: "/icons/items/icon_armor_waist.png",
  5: "/icons/items/icon_armor_legs.png",
  6: "/icons/items/icon_charm_stone.png",
  7: "/icons/items/icon_great_sword.png",
  8: "/icons/items/icon_sword_and_shield.png",
  9: "/icons/items/icon_hammer.png",
  10: "/icons/items/icon_lance.png",
  11: "/icons/items/icon_heavy_bowgun.png",
  13: "/icons/items/icon_light_bowgun.png",
  14: "/icons/items/icon_long_sword.png",
  15: "/icons/items/icon_switch_axe.png",
  16: "/icons/items/icon_gunlance.png",
  17: "/icons/items/icon_bow.png",
  18: "/icons/items/icon_dual_blades.png",
  19: "/icons/items/icon_hunting_horn.png",
  20: "/icons/items/icon_insect_glaive.png",
  21: "/icons/items/icon_charge_blade.png"
};

export const getEquipmentIcon = (type: number) => TYPE_ICON[type] ?? "/icons/items/icon_armor.png";

export const deriveRarityLabel = (levelBits: number): string => {
  if (levelBits <= 0) return "1";
  if (levelBits > 10) return "X";
  return `${levelBits}`;
};

export const getRarityColor = (entry: HunterEquipmentEntry) => {
  const label = deriveRarityLabel(entry.levelBits);
  return RARITY_COLORS[label] ?? RARITY_COLORS["1"];
};

export const rarityToLevelBits = (rarity: number): number => {
  // Convert rarity (1-10 or X) to levelBits
  // Based on the deriveRarityLabel logic, it appears levelBits === rarity for 1-10
  if (rarity <= 0) return 0;
  if (rarity > 10) return 11; // X rarity
  return rarity;
};

export const getRarityColorFromNumber = (rarity: number): string => {
  const key = rarity > 10 ? "X" : rarity.toString();
  return RARITY_COLORS[key] ?? RARITY_COLORS["1"];
};
