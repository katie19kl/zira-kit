const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const distPath = join(__dirname, 'dist');
const filePath = join(distPath, 'index.esm.js');

const importStatement = `import './index.esm.css';\n`;

function addCssImport(filePath) {
    try {
        let content = readFileSync(filePath, 'utf8');

        // Check if the import statement already exists to prevent duplicates
        if (!content.includes(importStatement)) {
            // Prepend the import statement to the content
            content = importStatement + content;
            writeFileSync(filePath, content, 'utf8');
            console.log(`Successfully added CSS import to ${filePath}`);
        } else {
            console.log(`CSS import already exists in ${filePath}, skipping.`);
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
        // Exit with an error code if something goes wrong
        process.exit(1);
    }
}

addCssImport(filePath);

console.log('Post-build CSS import process completed.');