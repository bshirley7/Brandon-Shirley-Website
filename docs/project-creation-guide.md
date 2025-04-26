# Project Creation Guide

This guide will help you create new projects for your portfolio website using our Project Creation Wizard.

## Getting Started

1. Open your terminal/command prompt
2. Navigate to your project directory
3. Run the wizard:
   ```bash
   node scripts/create-project.js
   ```

## Step-by-Step Guide

### 1. Project Information
The wizard will ask you for basic information about your project:
- **Project Name**: Enter a descriptive name (e.g., "My Amazing Project")
- **Year**: When was the project completed?
- **Description**: A brief 1-2 sentence description
- **Featured**: Should this appear on the homepage? (yes/no)

### 2. Choose Your Sections
Select which sections you want to include in your project:
1. **Project Overview**
   - Mission statement
   - Challenge description
   - Key statistics
2. **Process and Results**
   - Our approach
   - Results and impact
3. **Visual Documentation**
   - Image gallery
   - Team credits

You can select multiple sections by entering numbers separated by commas (e.g., "1,2,3")

### 3. Add Your Images
After the wizard creates your project:
1. Navigate to `/public/images/your-project/`
2. Add your project images:
   - `thumbnail.jpg`: Main project image (recommended size: 1200x800px)
   - `image-01.jpg`, `image-02.jpg`, etc.: Gallery images

### 4. Customize Content
Open your project file (e.g., `src/data/projects/my-project.ts`) and:
1. Update section content with your project details
2. Add your team members
3. Include your statistics and results

### 5. Preview Your Project
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Visit `http://localhost:3000/projects/my-project`

## Example Project Structure

```
my-project/
├── thumbnail.jpg
├── image-01.jpg
├── image-02.jpg
└── image-03.jpg
```

## Common Questions

### How do I add more sections later?
1. Open your project file
2. Import additional sections from `section-templates.ts`
3. Add them to the `sections` array

### How do I update project images?
1. Replace the images in `/public/images/your-project/`
2. Make sure to keep the same filenames
3. Or update the image paths in your project file

### How do I make my project featured?
1. Open your project file
2. Set `featured: true`
3. Save and refresh the homepage

## Need Help?

- Check the examples in `project-template.ts`
- Look at existing projects for reference
- Contact the development team for assistance 