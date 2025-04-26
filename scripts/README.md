# Scripts

This directory contains utility scripts to help with common tasks.

## Available Scripts

### create-project.js

Creates a new project file from the template.

```bash
node scripts/create-project.js my-awesome-project
```

This will:
1. Create a new file at `src/data/projects/my-awesome-project.ts`
2. Set up the basic structure based on the template
3. Replace placeholder values with project-specific values

## Adding New Scripts

When adding new scripts, make sure to:
1. Add a description in this README
2. Include usage examples
3. Add error handling
4. Make the script executable if needed (`chmod +x script.js`) 