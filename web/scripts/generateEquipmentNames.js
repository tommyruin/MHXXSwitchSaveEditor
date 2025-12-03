import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GAME_CONSTANTS_PATH = path.join(__dirname, "..", "..", "MHXXSaveEditor", "Data", "GameConstants.cs");
const OUTPUT_PATH = path.join(__dirname, "..", "src", "lib", "data", "equipmentNames.ts");

const TYPE_CONFIG = [
  { type: 1, names: "EquipHeadNames", ids: "EquipHeadIDs" },
  { type: 2, names: "EquipChestNames", ids: "EquipChestIDs" },
  { type: 3, names: "EquipArmsNames", ids: "EquipArmsIDs" },
  { type: 4, names: "EquipWaistNames", ids: "EquipWaistIDs" },
  { type: 5, names: "EquipLegsNames", ids: "EquipLegsIDs" },
  { type: 6, names: "EquipTalismanNames" }, // Uses index as ID
  { type: 7, names: "EquipGreatSwordNames" },
  { type: 8, names: "EquipSwordnShieldNames" },
  { type: 9, names: "EquipHammerNames" },
  { type: 10, names: "EquipLanceNames" },
  { type: 11, names: "EquipHeavyBowgunNames" },
  // type 12 is ignored
  { type: 13, names: "EquipLightBowgunNames" },
  { type: 14, names: "EquipLongswordNames" },
  { type: 15, names: "EquipSwitchAxeNames" },
  { type: 16, names: "EquipGunlanceNames" },
  { type: 17, names: "EquipBowNames" },
  { type: 18, names: "EquipDualBladesNames" },
  { type: 19, names: "EquipHuntingHornNames" },
  { type: 20, names: "EquipInsectGlaiveNames" },
  { type: 21, names: "EquipChargeBladeNames" }
];

const readSource = () => fs.readFileSync(GAME_CONSTANTS_PATH, "utf8");

const parseArray = (source, name, kind) => {
  const regex = new RegExp(`public static readonly ${kind}\\[]\\s+${name}\\s*=\\s*{([\\s\\S]*?)};`);
  const match = source.match(regex);
  if (!match) {
    throw new Error(`Array ${name} not found in GameConstants.cs`);
  }
  const raw = match[1]
    .replace(/\/\/.*$/gm, "") // strip inline comments
    .replace(/\r?\n/g, " ") // flatten
    .trim();
  const cleaned = raw.replace(/,\s*$/, ""); // drop trailing comma
  const json = `[${cleaned}]`;
  try {
    return JSON.parse(json);
  } catch (err) {
    throw new Error(`Failed to parse ${name}: ${err.message}`);
  }
};

const generate = () => {
  const source = readSource();
  const equipmentNameMaps = {};

  TYPE_CONFIG.forEach((cfg) => {
    const names = parseArray(source, cfg.names, "string");
    const ids = cfg.ids ? parseArray(source, cfg.ids, "int") : null;
    const map = {};
    if (ids && ids.length === names.length) {
      ids.forEach((id, idx) => {
        map[id] = names[idx];
      });
    } else {
      names.forEach((name, idx) => {
        map[idx] = name;
      });
    }
    equipmentNameMaps[cfg.type] = map;
  });

  const output = `// Auto-generated from MHXXSaveEditor/Data/GameConstants.cs\n` +
    `// Do not edit by hand; run scripts/generateEquipmentNames.js\n` +
    `export const equipmentNameMaps: Record<number, Record<number, string>> = ${JSON.stringify(equipmentNameMaps, null, 2)};\n`;

  fs.writeFileSync(OUTPUT_PATH, output, "utf8");
  console.log(`Wrote equipment names to ${OUTPUT_PATH}`);
};

generate();
