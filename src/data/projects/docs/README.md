# Project Data Structure

This folder contains all the data for your portfolio projects. Here's how it's organized:

## 📁 Folder Structure

```
projects/
├── projects/           # Your actual project files
├── templates/          # Templates for creating new projects
├── config/            # Configuration files
└── docs/             # Documentation and guides
```

## 📄 File Types

### Project Files (`/projects`)
- Each project has its own file (e.g., `web-platform.ts`, `brand-evolution.ts`)
- These files contain all the content for your projects
- Images for each project are stored in `/public/images/[project-name]/`

### Templates (`/templates`)
- `project-template.ts` - Use this as a starting point for new projects
- Contains example sections and structure

### Configuration (`/config`)
- `constants.ts` - Lists of categories and disciplines
- `types.ts` - Type definitions (for developers)
- `utils.ts` - Helper functions (for developers)

### Documentation (`/docs`)
- Guides and documentation
- Example images and screenshots

## 🚀 Getting Started

1. To create a new project:
   - Copy `templates/project-template.ts` to `projects/your-project-name.ts`
   - Update the content with your project details
   - Add your images to `/public/images/your-project-name/`

2. To edit an existing project:
   - Open the project file in `projects/`
   - Update the content as needed
   - Add or replace images in the corresponding folder in `/public/images/`

## 📝 Project File Structure

Each project file contains:
- Basic info (title, year, description)
- Hero image/video
- Category and disciplines
- Technologies used
- Sections (mission, challenge, results, etc.)

## 🖼️ Images

- Store all project images in `/public/images/[project-name]/`
- Required images:
  - `hero.jpg` - Main project image (1920x1080 recommended)
  - `thumbnail.jpg` - Small preview image (800x600 recommended)
  - Additional images for galleries and sections

## 🎨 Available Sections

1. Project Overview
   - Mission
   - Challenge
   - Key Statistics

2. Process and Results
   - Approach
   - Results
   - Impact

3. Visual Documentation
   - Gallery
   - Team Credits

## 💡 Tips

- Use clear, descriptive names for your projects
- Keep image file sizes reasonable (compress if needed)
- Follow the template structure for consistency
- Add meaningful descriptions for all sections

## 🆘 Need Help?

- Check the example projects in the `projects/` folder
- Refer to the template file for structure
- Contact the development team for assistance 