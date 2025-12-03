// Auto-generated equipment catalog for filtering and searching
import { equipmentNameMaps } from './equipmentNames';
import equipmentRaritiesData from './equipmentRarities.json';

export interface CatalogEquipment {
  type: number;
  id: number;
  name: string;
  category: 'weapon' | 'armor' | 'talisman';
  subcategory: string;
  rarity: number;
}

// Type the imported JSON data
const equipmentRarities: Record<string, Record<string, number>> = equipmentRaritiesData as any;

const EQUIPMENT_TYPE_NAMES: Record<number, string> = {
  1: 'Head',
  2: 'Chest',
  3: 'Arms',
  4: 'Waist',
  5: 'Legs',
  6: 'Talisman',
  7: 'Great Sword',
  8: 'Sword and Shield',
  9: 'Hammer',
  10: 'Lance',
  11: 'Heavy Bowgun',
  13: 'Light Bowgun',
  14: 'Longsword',
  15: 'Switch Axe',
  16: 'Gunlance',
  17: 'Bow',
  18: 'Dual Blades',
  19: 'Hunting Horn',
  20: 'Insect Glaive',
  21: 'Charge Blade'
};

const ARMOR_TYPES = [1, 2, 3, 4, 5];
const WEAPON_TYPES = [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21];
const TALISMAN_TYPE = 6;

// Generate flattened catalog from equipmentNameMaps
function generateCatalog(): CatalogEquipment[] {
  const catalog: CatalogEquipment[] = [];

  for (const [typeStr, idMap] of Object.entries(equipmentNameMaps)) {
    const type = parseInt(typeStr, 10);
    
    // Skip unknown types
    if (!EQUIPMENT_TYPE_NAMES[type]) continue;

    for (const [idStr, name] of Object.entries(idMap)) {
      const id = parseInt(idStr, 10);
      
      // Skip empty slots and unknown items
      if (name === '(None)' || name.startsWith('(Unknown')) continue;
      if (id === 0) continue;

      let category: 'weapon' | 'armor' | 'talisman';
      if (ARMOR_TYPES.includes(type)) {
        category = 'armor';
      } else if (WEAPON_TYPES.includes(type)) {
        category = 'weapon';
      } else if (type === TALISMAN_TYPE) {
        category = 'talisman';
      } else {
        continue; // Skip unknown categories
      }

      // Get rarity from database mapping
      const rarity = equipmentRarities[type]?.[id] ?? 1; // Default to rarity 1 if not found

      catalog.push({
        type,
        id,
        name,
        category,
        subcategory: EQUIPMENT_TYPE_NAMES[type],
        rarity
      });
    }
  }

  return catalog;
}

export const EQUIPMENT_CATALOG = generateCatalog();

// Helper to get unique armor types for filter dropdown
export const ARMOR_PIECE_TYPES = ARMOR_TYPES.map(type => ({
  value: type,
  label: EQUIPMENT_TYPE_NAMES[type]
}));

// Helper to get unique weapon types for filter dropdown
export const WEAPON_TYPE_LIST = WEAPON_TYPES.map(type => ({
  value: type,
  label: EQUIPMENT_TYPE_NAMES[type]
}));
