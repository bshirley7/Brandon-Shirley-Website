#!/usr/bin/env node

/**
 * Project Creation Wizard
 * 
 * This script guides users through creating a new project file.
 * It will:
 * 1. Ask for basic project information
 * 2. Create the project file
 * 3. Set up the image directory
 * 4. Add the project to index.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper function to convert to kebab case
const toKebabCase = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Helper function to convert to title case
const toTitleCase = (str) => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Helper function to prompt for input
const prompt = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

// Helper function to collect disciplines
async function collectDisciplines() {
  const disciplines = [];
  let addMore = true;

  console.log('\nAvailable disciplines:');
  console.log('1. Creative Director');
  console.log('2. Brand Strategist');
  console.log('3. Brand Development');
  console.log('4. Production Lead');
  console.log('5. Strategic Lead');
  console.log('6. Innovation Lead');
  console.log('7. Animation');
  console.log('8. Production');
  console.log('9. Executive Producer');
  console.log('10. Video Editing');
  console.log('11. Motion Graphics');
  console.log('12. 3D Graphics');
  console.log('13. Event Design');
  console.log('14. Add custom discipline');

  while (addMore) {
    const choice = await prompt('\nEnter the number of the discipline (or "done" to finish): ');
    
    if (choice.toLowerCase() === 'done') {
      addMore = false;
      continue;
    }

    let discipline;
    if (choice === '14') {
      const customDiscipline = await prompt('Enter your custom discipline: ');
      discipline = `"${customDiscipline}"`; // Wrap custom discipline in quotes
    } else {
      const disciplineMap = {
        '1': 'CREATIVE_DIRECTOR',
        '2': 'BRAND_STRATEGIST',
        '3': 'BRAND_DEVELOPMENT',
        '4': 'PRODUCTION_LEAD',
        '5': 'STRATEGIC_LEAD',
        '6': 'INNOVATION_LEAD',
        '7': 'ANIMATION',
        '8': 'PRODUCTION',
        '9': 'EXECUTIVE_PRODUCER',
        '10': 'VIDEO_EDITING',
        '11': 'MOTION_GRAPHICS',
        '12': 'THREE_D_GRAPHICS',
        '13': 'EVENT_DESIGN'
      };
      discipline = disciplineMap[choice];
      if (discipline) {
        discipline = `DISCIPLINES.${discipline}`;
      }
    }

    if (discipline) {
      disciplines.push(discipline);
    }
  }

  return disciplines;
}

// Helper function to collect technology information
async function collectTechnologies() {
  const technologies = [];
  let addMore = true;

  while (addMore) {
    const category = await prompt('\nEnter a technology category (e.g., "Frontend", "Backend", "Design"): ');
    const items = [];
    let addMoreItems = true;

    while (addMoreItems) {
      const item = await prompt(`Enter a technology for ${category} (or press Enter to finish): `);
      if (item.trim() === '') {
        addMoreItems = false;
      } else {
        items.push(item);
      }
    }

    technologies.push({
      category,
      items
    });

    const addAnother = await prompt('\nAdd another technology category? (yes/no): ');
    addMore = addAnother.toLowerCase() === 'yes';
  }

  return technologies;
}

// Main function
async function createProject() {
  console.log('\n🎨 Project Creation Wizard 🎨\n');
  console.log('This wizard will help you create a new project file.\n');

  // Get project information
  const projectName = await prompt('What is your project name? (e.g., "My Amazing Project"): ');
  const projectId = projectName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const projectVarName = projectId
    .split('-')
    .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  const year = await prompt('What year was the project completed? (e.g., 2024): ');
  const description = await prompt('Brief description of your project (1-2 sentences): ');
  const featured = (await prompt('Should this project be featured on the homepage? (yes/no): ')).toLowerCase() === 'yes';

  // Collect disciplines
  console.log('\nLet\'s add the disciplines involved in your project.');
  const disciplines = await collectDisciplines();

  // Collect technology information
  console.log('\nLet\'s add the technologies used in your project.');
  const technologies = await collectTechnologies();

  // Confirm project sections
  console.log('\nAvailable section combinations:');
  console.log('1. Project Overview (Mission, Challenge, Statistics)');
  console.log('2. Process and Results (Approach, Results)');
  console.log('3. Visual Documentation (Gallery, Team)');
  const sections = await prompt('Which sections would you like to include? (Enter numbers separated by commas, e.g., "1,2,3"): ');

  // Create project file
  const templatePath = path.join(__dirname, '..', 'src', 'data', 'projects', 'templates', 'project-template.ts');
  const projectsDir = path.join(__dirname, '..', 'src', 'data', 'projects', 'projects');
  const projectFilePath = path.join(projectsDir, `${projectId}.ts`);
  const imageDir = path.join(__dirname, '..', 'public', 'images', projectId);

  // Ensure projects directory exists
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
  }

  // Read template
  const template = fs.readFileSync(templatePath, 'utf8');

  // Create project content
  let projectContent = template
    .replace(/export const projectTemplate/g, `export const ${projectVarName}`)
    .replace(/id: 'project-id'/g, `id: '${projectId}'`)
    .replace(/title: "Project Title"/g, `title: "${projectName}"`)
    .replace(/year: "2023"/g, `year: "${year}"`)
    .replace(/description: "A brief description of your project that highlights its key achievements."/g, `description: "${description}"`)
    .replace(/image: "https:\/\/via\.placeholder\.com\/800x600"/g, `image: "/images/${projectId}/hero.jpg"`)
    .replace(/src: 'https:\/\/via\.placeholder\.com\/1920x1080'/g, `src: "/images/${projectId}/hero.jpg"`)
    .replace(/featured: true/g, `featured: ${featured}`);

  // Replace disciplines array with user input
  const disciplinesString = disciplines.join(',\n    ');
  projectContent = projectContent.replace(
    /disciplines: \[[\s\S]*?\],/,
    `disciplines: [\n    ${disciplinesString}\n  ],`
  );

  // Replace technologies array with user input
  const technologiesString = JSON.stringify(technologies, null, 2);
  projectContent = projectContent.replace(
    /technologies: \[[\s\S]*?\],/,
    `technologies: ${technologiesString},\n`
  );

  // Add selected sections
  const selectedSections = sections.split(',').map(num => num.trim());
  let sectionsImport = '';
  let sectionsArray = '';

  if (selectedSections.includes('1')) {
    sectionsImport += 'projectOverviewSections,';
    sectionsArray += '...projectOverviewSections,\n    ';
  }
  if (selectedSections.includes('2')) {
    sectionsImport += 'processAndResultsSections,';
    sectionsArray += '...processAndResultsSections,\n    ';
  }
  if (selectedSections.includes('3')) {
    sectionsImport += 'visualDocumentationSections,';
    sectionsArray += '...visualDocumentationSections,\n    ';
  }

  projectContent = projectContent.replace(
    /import { ProjectSection } from '\.\/types';/g,
    `import { ProjectSection } from '../config/types';\nimport { ${sectionsImport} } from '../templates/section-templates';`
  );

  projectContent = projectContent.replace(
    /sections: \[\]/g,
    `sections: [\n    ${sectionsArray}]`
  );

  // Create directories and files
  try {
    // Create project file
    fs.writeFileSync(projectFilePath, projectContent);
    console.log(`\n✅ Created project file: ${projectFilePath}`);

    // Create image directory
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir, { recursive: true });
      console.log(`✅ Created image directory: ${imageDir}`);
    }

    // Update index.ts
    const indexPath = path.join(__dirname, '..', 'src', 'data', 'projects', 'index.ts');
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    
    // Add import statement after other imports
    const importStatement = `import { ${projectVarName} } from './projects/${projectId}';\n`;
    let updatedContent = indexContent.replace(
      /(\/\/ Import individual project data\n)/,
      `$1${importStatement}`
    );

    // Add project to projects array
    updatedContent = updatedContent.replace(
      /export const projects: Project\[\] = \[([\s\S]*?)\];/,
      (match, p1) => {
        const projects = p1.trim() ? `${p1}  ${projectVarName},\n` : `  ${projectVarName},\n`;
        return `export const projects: Project[] = [\n${projects}];`;
      }
    );

    fs.writeFileSync(indexPath, updatedContent);
    console.log('✅ Updated index.ts');

    console.log('\n🎉 Project created successfully!');
    console.log('\nNext steps:');
    console.log(`1. Add your project images to: ${imageDir}`);
    console.log(`2. Edit the project file: ${projectFilePath}`);
    console.log('3. Customize the content in each section');
    console.log('4. Run the development server to see your changes');

  } catch (error) {
    console.error('❌ Error creating project:', error);
  }

  rl.close();
}

// Run the script
createProject();