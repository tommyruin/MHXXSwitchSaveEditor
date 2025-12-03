import {
  PALICO_EQUIPMENT_CATALOG,
  PALICO_EQUIPMENT_TYPES,
  PALICO_WEAPONS,
  PALICO_HELMETS,
  PALICO_BODY_ARMOR,
  getPalicoEquipmentById,
  type PalicoEquipmentEntry
} from './data/palicoEquipmentCatalog';
import { PalicoEquipmentSlot, PalicoRosterEntry, PALICO_EQUIPMENT_NONE } from './types';
import { getRarityColorFromNumber } from './equipmentUtils';

// Convert save file ID to database ID
export const saveIdToDbId = (type: number, saveId: number): number => {
  if (saveId === 0 || saveId === PALICO_EQUIPMENT_NONE) return 0;

  switch (type) {
    case PALICO_EQUIPMENT_TYPES.WEAPON:
      return 1048577 + (saveId - 1);
    case PALICO_EQUIPMENT_TYPES.HELMET:
      return 1114113 + (saveId - 1);
    case PALICO_EQUIPMENT_TYPES.BODY:
      return 1179649 + (saveId - 1);
    default:
      return 0;
  }
};

// Convert database ID to save file ID
export const dbIdToSaveId = (dbId: number): { type: number; saveId: number } => {
  if (dbId >= 1048577 && dbId <= 1049071) {
    return { type: PALICO_EQUIPMENT_TYPES.WEAPON, saveId: dbId - 1048577 + 1 };
  }
  if (dbId >= 1114113 && dbId <= 1114536) {
    return { type: PALICO_EQUIPMENT_TYPES.HELMET, saveId: dbId - 1114113 + 1 };
  }
  if (dbId >= 1179649 && dbId <= 1180072) {
    return { type: PALICO_EQUIPMENT_TYPES.BODY, saveId: dbId - 1179649 + 1 };
  }
  return { type: 0, saveId: 0 };
};

// Get equipment entry by save file ID and type
export const getPalicoEquipmentEntry = (type: number, saveId: number): PalicoEquipmentEntry | undefined => {
  if (saveId === 0 || saveId === PALICO_EQUIPMENT_NONE) return undefined;
  return getPalicoEquipmentById(type, saveId);
};

// Get equipment name by save file ID
export const getPalicoEquipmentName = (type: number, saveId: number): string => {
  if (saveId === 0 || saveId === PALICO_EQUIPMENT_NONE) {
    return '(None)';
  }
  const entry = getPalicoEquipmentEntry(type, saveId);
  return entry?.name ?? `Unknown ${type}/${saveId}`;
};

// Get equipment type name
export const getPalicoEquipmentTypeName = (type: number): string => {
  switch (type) {
    case PALICO_EQUIPMENT_TYPES.WEAPON:
      return 'Palico Weapon';
    case PALICO_EQUIPMENT_TYPES.HELMET:
      return 'Palico Helmet';
    case PALICO_EQUIPMENT_TYPES.BODY:
      return 'Palico Armor';
    default:
      return '(None)';
  }
};

// Get equipment icon path
export const getPalicoEquipmentIcon = (type: number): string => {
  switch (type) {
    case PALICO_EQUIPMENT_TYPES.WEAPON:
      return '/icons/items/icon_cutting.png'; // Generic weapon icon
    case PALICO_EQUIPMENT_TYPES.HELMET:
      return '/icons/items/icon_armor_head.png';
    case PALICO_EQUIPMENT_TYPES.BODY:
      return '/icons/items/icon_armor_body.png';
    default:
      return '/icons/items/icon_question.png';
  }
};

// Get rarity color for palico equipment
export const getPalicoRarityColor = (entry: PalicoEquipmentEntry): string | null => {
  return getRarityColorFromNumber(entry.rarity);
};

// Get rarity color from equipment slot
export const getPalicoSlotRarityColor = (slot: PalicoEquipmentSlot): string | null => {
  const entry = getPalicoEquipmentEntry(slot.type, slot.equipId);
  return entry ? getPalicoRarityColor(entry) : null;
};

// Get forte name
const FORTE_NAMES = [
  'Charisma',
  'Fighting',
  'Protection',
  'Assisting',
  'Healing',
  'Bombing',
  'Gathering',
  'Beast'
];

export const getForteName = (forte: number): string => {
  return FORTE_NAMES[forte] ?? 'Unknown';
};

// Get target preference name
const TARGET_NAMES = ['-----', 'Small Only', 'Small First', 'Balanced', 'Big First', 'Big Only'];

export const getTargetName = (target: number): string => {
  return TARGET_NAMES[target] ?? 'Unknown';
};

// Check if palico roster entry is empty
export const isPalicoRosterEntryEmpty = (entry: PalicoRosterEntry): boolean => {
  return entry.name.trim() === '';
};

// Check if palico equipment slot is empty
export const isPalicoEquipmentSlotEmpty = (slot: PalicoEquipmentSlot): boolean => {
  return slot.type === 0 && slot.equipId === 0;
};

// Export catalogs for direct use
export { PALICO_EQUIPMENT_CATALOG, PALICO_WEAPONS, PALICO_HELMETS, PALICO_BODY_ARMOR, PALICO_EQUIPMENT_TYPES };
