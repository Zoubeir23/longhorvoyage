import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '..', 'assets', 'images', 'voyageurs');
const destDir = path.join(__dirname, '..', 'public', 'assets', 'images', 'voyageurs');

// Créer le répertoire de destination s'il n'existe pas
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Lire les fichiers du répertoire source
const files = fs.readdirSync(sourceDir);

// Copier chaque fichier image
files.forEach(file => {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const sourcePath = path.join(sourceDir, file);
        const destPath = path.join(destDir, file);
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copié: ${file}`);
    }
});

console.log('Copie des images terminée !'); 