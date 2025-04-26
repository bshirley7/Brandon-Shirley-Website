import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Download Images Script
 * 
 * This script downloads placeholder images for testing the portfolio website.
 * It creates the necessary directory structure and downloads images for each project.
 * 
 * Usage:
 * node scripts/download-images.js
 */

const PROJECTS = [
  'web-platform',
  'brand-evolution',
  'motion-story',
  'social-impact',
  'event-experience'
];

const IMAGES = {
  hero: '800x600',
  heroSection: '1920x1080',
  gallery: '1200x800'
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filepath);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function main() {
  for (const project of PROJECTS) {
    const projectDir = path.join(__dirname, '..', 'public', 'images', project);
    
    // Create project directory if it doesn't exist
    if (!fs.existsSync(projectDir)) {
      fs.mkdirSync(projectDir, { recursive: true });
    }

    // Download hero image
    await downloadImage(
      `https://placehold.co/${IMAGES.hero}`,
      path.join(projectDir, 'hero.jpg')
    );

    // Download gallery images
    const galleryImages = ['architecture.jpg', 'dashboard.jpg', 'metrics.jpg'];
    for (const image of galleryImages) {
      await downloadImage(
        `https://placehold.co/${IMAGES.gallery}`,
        path.join(projectDir, image)
      );
    }

    console.log(`Downloaded images for ${project}`);
  }

  console.log('All images downloaded successfully!');
}

main().catch(console.error); 