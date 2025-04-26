#!/usr/bin/env node

/**
 * Update Projects Script
 * 
 * This script updates all project files to use placeholder images and remove specific details.
 * It will:
 * 1. Replace all image paths with placeholder.com URLs
 * 2. Remove specific team member names
 * 3. Make project content more generic
 * 4. Keep the project structure intact
 * 
 * Usage:
 * node scripts/update-projects.js
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { dirname, join, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROJECTS_DIR = join(__dirname, '../src/data/projects');

// Image size mappings
const IMAGE_SIZES = {
  hero: '800x600',
  heroSection: '1920x1080',
  gallery: '1200x800'
};

// Generic project content
const GENERIC_CONTENT = {
  title: "Project Title",
  description: "A brief description of your project that highlights its key achievements.",
  mission: "Describe the mission or purpose of your project. What problem were you trying to solve?",
  impact: "Describe the impact and results of your project. What were the key outcomes and achievements?",
  innovations: [
    { title: "Key Metric 1", description: "Description of the first key metric or innovation" },
    { title: "Key Metric 2", description: "Description of the second key metric or innovation" },
    { title: "Key Metric 3", description: "Description of the third key metric or innovation" },
    { title: "Key Metric 4", description: "Description of the fourth key metric or innovation" }
  ],
  approach: `1. Step One
- Detail about the first step
- Another detail about the first step

2. Step Two
- Detail about the second step
- Another detail about the second step

3. Step Three
- Detail about the third step
- Another detail about the third step

4. Step Four
- Detail about the fourth step
- Another detail about the fourth step`,
  results: {
    generated: "Key achievement or metric 1",
    doubled: "Key achievement or metric 2",
    awarded: "Key achievement or metric 3",
    supported: "Key achievement or metric 4"
  }
};

// Function to update image paths in a file
function updateProjectFile(filePath) {
  let content = readFileSync(filePath, 'utf8');

  // Replace image paths with placeholder URLs
  content = content.replace(
    /image: ["']\/images\/[^"']+["']/g,
    `image: "https://via.placeholder.com/${IMAGE_SIZES.hero}"`
  );

  content = content.replace(
    /src: ["']\/images\/[^"']+["']/g,
    `src: "https://via.placeholder.com/${IMAGE_SIZES.heroSection}"`
  );

  // Replace gallery image paths
  content = content.replace(
    /src: ["']\/images\/[^"']+["']/g,
    `src: "https://via.placeholder.com/${IMAGE_SIZES.gallery}"`
  );

  // Replace specific team member names with generic ones
  content = content.replace(
    /{ role: ['"][^'"]+['"], name: ['"][^'"]+['"] }/g,
    '{ role: "Team Member", name: "Team Member Name" }'
  );

  // Replace project title and description
  content = content.replace(
    /title: ["'][^'"]+["']/,
    `title: "${GENERIC_CONTENT.title}"`
  );
  content = content.replace(
    /description: ["'][^'"]+["']/,
    `description: "${GENERIC_CONTENT.description}"`
  );

  // Replace mission and impact content
  content = content.replace(
    /type: ['"]header['"],\s*title: ['"]Mission['"],\s*content: ['"][^'"]+["']/g,
    `type: 'header', title: 'Mission', content: '${GENERIC_CONTENT.mission}'`
  );
  content = content.replace(
    /type: ['"]header['"],\s*title: ['"]Impact['"],\s*content: ['"][^'"]+["']/g,
    `type: 'header', title: 'Impact', content: '${GENERIC_CONTENT.impact}'`
  );

  // Replace innovations content
  content = content.replace(
    /title: ["'][^'"]+["'],\s*description: ["'][^'"]+["']/g,
    (match, offset) => {
      const index = (content.slice(0, offset).match(/title: ["'][^'"]+["'],\s*description: ["'][^'"]+["']/g) || []).length % 4;
      return `title: "${GENERIC_CONTENT.innovations[index].title}", description: "${GENERIC_CONTENT.innovations[index].description}"`;
    }
  );

  // Replace results content
  content = content.replace(
    /generated: ["'][^'"]+["']/,
    `generated: "${GENERIC_CONTENT.results.generated}"`
  );
  content = content.replace(
    /doubled: ["'][^'"]+["']/,
    `doubled: "${GENERIC_CONTENT.results.doubled}"`
  );
  content = content.replace(
    /awarded: ["'][^'"]+["']/,
    `awarded: "${GENERIC_CONTENT.results.awarded}"`
  );
  content = content.replace(
    /supported: ["'][^'"]+["']/,
    `supported: "${GENERIC_CONTENT.results.supported}"`
  );

  // Write the updated content back to the file
  writeFileSync(filePath, content);
  console.log(`Updated ${basename(filePath)}`);
}

// Main function to process all project files
function main() {
  // Get all .ts files in the projects directory
  const files = readdirSync(PROJECTS_DIR)
    .filter(file => file.endsWith('.ts') && !['types.ts', 'constants.ts', 'utils.ts', 'index.ts'].includes(file));

  // Process each file
  files.forEach(file => {
    const filePath = join(PROJECTS_DIR, file);
    updateProjectFile(filePath);
  });

  console.log('\nAll project files have been updated with placeholder images and generic content.');
  console.log('Please review the changes and make any necessary adjustments.');
}

// Run the script
main(); 