import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.resolve(__dirname, '../public/images');

async function convertImages() {
    try {
        if (!fs.existsSync(imagesDir)) {
            console.error('Directory not found:', imagesDir);
            return;
        }

        const files = fs.readdirSync(imagesDir);

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
                const inputFile = path.join(imagesDir, file);
                const outputFile = path.join(imagesDir, path.basename(file, ext) + '.webp');

                console.log(`Converting ${file} to WebP...`);
                await sharp(inputFile)
                    .webp({ quality: 80 })
                    .toFile(outputFile);
                console.log(`Converted: ${outputFile}`);
            }
        }
        console.log('All images converted successfully!');
    } catch (err) {
        console.error('Error converting images:', err);
    }
}

convertImages();
