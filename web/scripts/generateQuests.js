#!/usr/bin/env node
import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = path.join(__dirname, 'mhgu.db');
const OUTPUT_PATH = path.join(__dirname, '../src/lib/data/questCatalog.ts');

// Open database
const db = new sqlite3.Database(DB_PATH);

// Promisify database operations
const dbAll = (query, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

const generateQuestCatalog = async () => {
  try {
    console.log('Querying quests from mhgu.db...');
    
    // Query all quests ordered by sort_order (which represents in-game order)
    const query = `
      SELECT 
        _id as id,
        name,
        name_de,
        name_fr,
        name_es,
        name_it,
        name_ja,
        hub,
        stars,
        rank,
        type,
        sort_order
      FROM quests
      ORDER BY sort_order
    `;
    
    const rows = await dbAll(query);
    
    console.log(`Found ${rows.length} quests`);
    
    // Convert to TypeScript-friendly format
    const quests = rows.map((row, index) => ({
      flagIndex: index,
      dbId: row.id,
      name: row.name || '',
      name_de: row.name_de || row.name || '',
      name_fr: row.name_fr || row.name || '',
      name_es: row.name_es || row.name || '',
      name_it: row.name_it || row.name || '',
      name_ja: row.name_ja || row.name || '',
      hub: row.hub || 'Unknown',
      stars: row.stars || 0,
      rank: row.rank || 'LR',
      type: row.type || '0',
      sortOrder: row.sort_order
    }));
    
    // Generate TypeScript file
    const output = `// Auto-generated from mhgu.db
// Do not edit by hand; run scripts/generateQuests.js
//
// Quest flag bit positions match the sort_order from the database
// Each quest occupies exactly one bit in the save file's quest flags region

export interface QuestInfo {
  flagIndex: number;    // Bit position in save file quest flags (0-1354)
  dbId: number;         // Database _id
  name: string;         // English name
  name_de: string;      // German name
  name_fr: string;      // French name
  name_es: string;      // Spanish name
  name_it: string;      // Italian name
  name_ja: string;      // Japanese name
  hub: string;          // Village, Guild, Arena, Permit, Event
  stars: number;        // Star rating (1-10)
  rank: string;         // LR (Low Rank), HR (High Rank), G (G-Rank)
  type: string;         // Quest type
  sortOrder: number;    // Original sort order from database
}

export type Language = 'en' | 'de' | 'fr' | 'es' | 'it' | 'ja';

export const QUEST_CATALOG: QuestInfo[] = ${JSON.stringify(quests, null, 2)};

// Lookup quest by flag bit index (0-1354)
export const getQuestByFlagIndex = (flagIndex: number): QuestInfo | undefined => {
  return QUEST_CATALOG[flagIndex];
};

// Lookup quest by database ID
export const getQuestByDbId = (dbId: number): QuestInfo | undefined => {
  return QUEST_CATALOG.find(q => q.dbId === dbId);
};

// Get localized quest name
export const getQuestName = (quest: QuestInfo, lang: Language = 'en'): string => {
  switch (lang) {
    case 'de': return quest.name_de;
    case 'fr': return quest.name_fr;
    case 'es': return quest.name_es;
    case 'it': return quest.name_it;
    case 'ja': return quest.name_ja;
    default: return quest.name;
  }
};

// Quest count: ${quests.length}
// Hub distribution:
${(() => {
  const hubCounts = {};
  quests.forEach(q => {
    hubCounts[q.hub] = (hubCounts[q.hub] || 0) + 1;
  });
  return Object.entries(hubCounts)
    .map(([hub, count]) => `//   ${hub}: ${count}`)
    .join('\n');
})()}
`;
    
    fs.writeFileSync(OUTPUT_PATH, output, 'utf8');
    console.log(`✓ Generated ${OUTPUT_PATH}`);
    console.log(`  Total quests: ${quests.length}`);
    
    // Print hub distribution
    const hubCounts = {};
    quests.forEach(q => {
      hubCounts[q.hub] = (hubCounts[q.hub] || 0) + 1;
    });
    console.log('  Hub distribution:');
    Object.entries(hubCounts).forEach(([hub, count]) => {
      console.log(`    ${hub}: ${count}`);
    });
    
  } catch (err) {
    console.error('Error generating quest catalog:', err);
    process.exit(1);
  } finally {
    db.close();
  }
};

generateQuestCatalog();
