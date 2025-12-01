
import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_URL = 'https://raw.githubusercontent.com/gatheringhallstudios/MHGenDatabase/develop/app/src/main/assets/databases/mhgu.db.zip';
const ICON_BASE_URL = 'https://raw.githubusercontent.com/gatheringhallstudios/MHGenDatabase/develop/app/src/main/icon-res/drawable/';
const OUTPUT_DIR = path.join(__dirname, '../public/icons/items');
const DATA_DIR = path.join(__dirname, '../src/lib/data');
const DB_ZIP_PATH = path.join(__dirname, 'mhgu.db.zip');
const DB_PATH = path.join(__dirname, 'mhgu.db');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                response.resume(); // Consume response data to free up memory
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            const file = fs.createWriteStream(dest);
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
            file.on('error', (err) => {
                fs.unlink(dest, () => { }); // Delete the file async. (But we don't wait for it)
                reject(err);
            });
        }).on('error', (err) => {
            // If request fails, no file is created yet (or at least writeStream isn't piped)
            reject(err);
        });
    });
};

const main = async () => {
    try {
        // Install dependencies if not present
        const installDependency = (name) => {
            try {
                require.resolve(name);
            } catch (e) {
                console.log(`Installing ${name}...`);
                execSync(`npm install --no-save ${name}`, { stdio: 'inherit', cwd: __dirname });
            }
        };

        installDependency('better-sqlite3');
        installDependency('adm-zip');

        const AdmZip = require('adm-zip');
        const Database = require('better-sqlite3');

        if (fs.existsSync(DB_PATH)) {
            console.log('Found existing mhgu.db, skipping download.');
        } else {
            console.log('Downloading database zip...');
            await downloadFile(DB_URL, DB_ZIP_PATH);
            console.log('Database zip downloaded.');

            console.log('Extracting database...');
            const zip = new AdmZip(DB_ZIP_PATH);
            zip.extractAllTo(__dirname, true);
            console.log('Database extracted.');
        }

        const db = new Database(DB_PATH);

        console.log('Querying items...');
        // The schema usually has an 'items' table with '_id' and 'icon_name'
        const items = db.prepare('SELECT * FROM items LIMIT 1').all();
        console.log('Sample item columns:', Object.keys(items[0] || {}));

        const allItems = db.prepare('SELECT _id, icon_name, icon_color FROM items').all();


        const iconMapping = {};
        const colorMapping = {};
        const uniqueIcons = new Set();

        allItems.forEach(item => {
            if (item.icon_name) {
                iconMapping[item._id] = item.icon_name;
                if (item.icon_color) {
                    colorMapping[item._id] = item.icon_color;
                }
                uniqueIcons.add(item.icon_name);
            }
        });

        console.log(`Found ${allItems.length} items and ${uniqueIcons.size} unique icons.`);

        fs.writeFileSync(
            path.join(DATA_DIR, 'itemIcons.json'),
            JSON.stringify(iconMapping, null, 2)
        );
        console.log('Item mapping saved.');

        if (Object.keys(colorMapping).length > 0) {
            fs.writeFileSync(
                path.join(DATA_DIR, 'itemColors.json'),
                JSON.stringify(colorMapping, null, 2)
            );
            console.log('Color mapping saved.');
        }

        console.log('Downloading icons...');
        let downloaded = 0;
        const total = uniqueIcons.size;

        // Batch download to avoid overwhelming
        const icons = Array.from(uniqueIcons);
        const BATCH_SIZE = 20;

        for (let i = 0; i < icons.length; i += BATCH_SIZE) {
            const batch = icons.slice(i, i + BATCH_SIZE);
            await Promise.all(batch.map(async (icon) => {
                const filename = `${icon}.png`;
                const dest = path.join(OUTPUT_DIR, filename);
                if (!fs.existsSync(dest)) {
                    try {
                        await downloadFile(`${ICON_BASE_URL}${filename}`, dest);
                    } catch (err) {
                        // Some icons might be missing or have different extensions, just log and continue
                    }
                }
            }));
            downloaded += batch.length;
            process.stdout.write(`\rDownloaded ${Math.min(downloaded, total)}/${total} icons`);
        }

        console.log('\nDone!');

        // Cleanup
        if (fs.existsSync(DB_ZIP_PATH)) fs.unlinkSync(DB_ZIP_PATH);
        // Keep DB_PATH as it might be useful or was provided by user
        // if (fs.existsSync(DB_PATH)) fs.unlinkSync(DB_PATH);

    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
};

main();
