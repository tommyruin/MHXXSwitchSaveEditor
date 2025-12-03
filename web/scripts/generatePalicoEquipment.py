#!/usr/bin/env python3
import sqlite3
import json
import os

DB_PATH = os.path.join(os.path.dirname(__file__), 'mhgu.db')
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), '../src/lib/data/palicoEquipmentCatalog.ts')

# Database ID ranges
WEAPON_DB_START = 1048577
WEAPON_DB_END = 1049071
HELMET_DB_START = 1114113
HELMET_DB_END = 1114536
BODY_DB_START = 1179649
BODY_DB_END = 1180072

def query_equipment(cursor, start, end, eq_type):
    query = """
        SELECT _id, name, rarity, icon_name, icon_color
        FROM items
        WHERE _id BETWEEN ? AND ?
        ORDER BY _id
    """
    
    cursor.execute(query, (start, end))
    rows = cursor.fetchall()
    
    entries = []
    for row in rows:
        entry = {
            'id': row[0] - start + 1,  # Convert to save file ID (1-indexed)
            'dbId': row[0],
            'name': row[1],
            'type': eq_type,
            'rarity': row[2],
            'iconName': row[3],
            'iconColor': row[4]
        }
        entries.append(entry)
    
    return entries

def generate_catalog():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    print('Querying database for palico equipment...')
    
    weapons = query_equipment(cursor, WEAPON_DB_START, WEAPON_DB_END, 22)
    helmets = query_equipment(cursor, HELMET_DB_START, HELMET_DB_END, 23)
    body_armor = query_equipment(cursor, BODY_DB_START, BODY_DB_END, 24)
    
    print(f'Found {len(weapons)} weapons')
    print(f'Found {len(helmets)} helmets')
    print(f'Found {len(body_armor)} body armor pieces')
    
    all_equipment = weapons + helmets + body_armor
    
    ts_content = f"""// Auto-generated from mhgu.db
// Do not edit manually

export const PALICO_EQUIPMENT_TYPES = {{
  NONE: 0,
  WEAPON: 22,
  HELMET: 23,
  BODY: 24
}} as const;

export type PalicoEquipmentEntry = {{
  id: number;          // Save file ID (1-indexed within category)
  dbId: number;        // Database _id
  name: string;        // Equipment name
  type: 22 | 23 | 24;  // Equipment type
  rarity: number;      // 1-10
  iconName: string;    // Icon identifier
  iconColor: number;   // Color index (0 = no special color)
}};

export const PALICO_WEAPONS: PalicoEquipmentEntry[] = {json.dumps(weapons, indent=2)};

export const PALICO_HELMETS: PalicoEquipmentEntry[] = {json.dumps(helmets, indent=2)};

export const PALICO_BODY_ARMOR: PalicoEquipmentEntry[] = {json.dumps(body_armor, indent=2)};

export const PALICO_EQUIPMENT_CATALOG: PalicoEquipmentEntry[] = {json.dumps(all_equipment, indent=2)};

// Helper to get equipment by save file ID and type
export const getPalicoEquipmentById = (type: number, id: number): PalicoEquipmentEntry | undefined => {{
  switch (type) {{
    case PALICO_EQUIPMENT_TYPES.WEAPON:
      return PALICO_WEAPONS.find(e => e.id === id);
    case PALICO_EQUIPMENT_TYPES.HELMET:
      return PALICO_HELMETS.find(e => e.id === id);
    case PALICO_EQUIPMENT_TYPES.BODY:
      return PALICO_BODY_ARMOR.find(e => e.id === id);
    default:
      return undefined;
  }}
}};
"""
    
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f'✓ Generated catalog at {OUTPUT_PATH}')
    
    conn.close()

if __name__ == '__main__':
    generate_catalog()
