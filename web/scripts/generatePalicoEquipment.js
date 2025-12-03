import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = path.join(__dirname, 'mhgu.db');
const OUTPUT_PATH = path.join(__dirname, '../src/lib/data/palicoEquipmentCatalog.ts');

// Database ID ranges
const WEAPON_DB_START = 1048577;
const WEAPON_DB_END = 1049071;
const HELMET_DB_START = 1114113;
const HELMET_DB_END = 1114536;
const BODY_DB_START = 1179649;
const BODY_DB_END = 1180072;

const db = new sqlite3.default.Database(DB_PATH);

function queryEquipment(start, end, type) {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT _id, name, rarity, icon_name, icon_color
      FROM items
      WHERE _id BETWEEN ? AND ?
      ORDER BY _id
    `;
    
    db.all(query, [start, end], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        const entries = rows.map(row => ({
          id: row._id - start + 1, // Convert to save file ID (1-indexed)
          dbId: row._id,
          name: row.name,
          type: type,
          rarity: row.rarity,
          iconName: row.icon_name,
          iconColor: row.icon_color
        }));
        resolve(entries);
      }
    });
  });
}

async function generateCatalog() {
  try {
    console.log('Querying database for palico equipment...');
    
    const weapons = await queryEquipment(WEAPON_DB_START, WEAPON_DB_END, 22);
    const helmets = await queryEquipment(HELMET_DB_START, HELMET_DB_END, 23);
    const bodyArmor = await queryEquipment(BODY_DB_START, BODY_DB_END, 24);
    
    console.log(`Found ${weapons.length} weapons`);
    console.log(`Found ${helmets.length} helmets`);
    console.log(`Found ${bodyArmor.length} body armor pieces`);
    
    const allEquipment = [...weapons, ...helmets, ...bodyArmor];
    
    const tsContent = `// Auto-generated from mhgu.db
// Do not edit manually

export const PALICO_EQUIPMENT_TYPES = {
  NONE: 0,
  WEAPON: 22,
  HELMET: 23,
  BODY: 24
} as const;

export type PalicoEquipmentEntry = {
  id: number;          // Save file ID (1-indexed within category)
  dbId: number;        // Database _id
  name: string;        // Equipment name
  type: 22 | 23 | 24;  // Equipment type
  rarity: number;      // 1-10
  iconName: string;    // Icon identifier
  iconColor: number;   // Color index (0 = no special color)
};

export const PALICO_WEAPONS: PalicoEquipmentEntry[] = ${JSON.stringify(weapons, null, 2)};

export const PALICO_HELMETS: PalicoEquipmentEntry[] = ${JSON.stringify(helmets, null, 2)};

export const PALICO_BODY_ARMOR: PalicoEquipmentEntry[] = ${JSON.stringify(bodyArmor, null, 2)};

export const PALICO_EQUIPMENT_CATALOG: PalicoEquipmentEntry[] = ${JSON.stringify(allEquipment, null, 2)};

// Helper to get equipment by save file ID and type
export const getPalicoEquipmentById = (type: number, id: number): PalicoEquipmentEntry | undefined => {
  switch (type) {
    case PALICO_EQUIPMENT_TYPES.WEAPON:
      return PALICO_WEAPONS.find(e => e.id === id);
    case PALICO_EQUIPMENT_TYPES.HELMET:
      return PALICO_HELMETS.find(e => e.id === id);
    case PALICO_EQUIPMENT_TYPES.BODY:
      return PALICO_BODY_ARMOR.find(e => e.id === id);
    default:
      return undefined;
  }
};
`;
    
    fs.writeFileSync(OUTPUT_PATH, tsContent, 'utf8');
    console.log(`✓ Generated catalog at ${OUTPUT_PATH}`);
    
  } catch (error) {
    console.error('Error generating catalog:', error);
    process.exit(1);
  } finally {
    db.close();
  }
}

generateCatalog();
