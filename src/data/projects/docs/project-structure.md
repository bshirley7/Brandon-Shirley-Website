# Project Structure Guide

This guide will help you understand how to create and manage projects in your portfolio website. Don't worry if you're not familiar with code - we'll explain everything in simple terms!

## 📁 Understanding the Folder Structure

Your portfolio website is organized into folders, each with a specific purpose:

```
projects/
├── projects/           # This is where your project files live
├── templates/          # Templates to help you create new projects
├── config/            # Settings and configurations
├── docs/             # Helpful guides like this one
└── gallery/          # Special projects that showcase collections of work
```

Think of these folders like drawers in a filing cabinet - each one holds specific types of information.

## 🚀 Creating Your First Project

### Step 1: Copy the Template

1. Go to the `templates` folder
2. Find the file called `project-template.ts`
3. Copy this file
4. Paste it in the `projects` folder
5. Rename it to something that describes your project, like `my-awesome-project.ts`

### Step 2: Edit the Basic Information

Open your new project file in Visual Studio Code. At the top, you'll see information that looks like this:

```typescript
export const myProject: Project = {
  id: "my-project",           // This is a unique name for your project (use lowercase with hyphens)
  title: "My Amazing Project", // The name of your project as it will appear on your website
  year: 2024,                 // The year you completed this project
  description: "A brief description of your project", // A short summary (1-2 sentences)
  image: "/images/my-project/thumbnail.jpg", // The main image for your project
  featured: true,             // Set to true if you want this project to appear on your homepage
}
```

Edit these fields to match your project. For example:

```typescript
export const myProject: Project = {
  id: "brand-redesign",
  title: "Brand Redesign for XYZ Company",
  year: 2024,
  description: "A complete brand refresh for a tech startup, including logo, website, and marketing materials.",
  image: "/images/brand-redesign/thumbnail.jpg",
  featured: true,
}
```

### Step 3: Add Your Images

1. Create a folder in the `public/images` directory with the same name as your project ID (e.g., `brand-redesign`)
2. Add these images to your folder:
   - `hero.jpg` - The main image for your project (recommended size: 1920x1080 pixels)
   - `thumbnail.jpg` - A smaller preview image (recommended size: 800x600 pixels)
   - Any additional images you want to use in your project

### Step 4: Add Your Project to the Website

1. Open the file `src/data/projects/index.ts`
2. Add these lines at the top of the file (if they're not already there):
   ```typescript
   import { myProject } from './projects/my-project';
   ```
3. Find the `projects` array and add your project to it:
   ```typescript
   export const projects = [
     myProject,
     // ... other projects
   ];
   ```

## 📝 Understanding Project Sections

Each project can have different sections that tell your project's story. Here are the main types:

### Text Sections
These are for writing about your project:
- **Mission**: What was the goal of your project?
- **Challenge**: What problems did you need to solve?
- **Statistics**: Key numbers and achievements

### Gallery Sections
These showcase your work visually:
- **Images**: Photos of your work
- **Videos**: Video content related to your project

### Team Sections
These highlight who worked on the project:
- **Team Members**: Names, roles, and photos of your team

## 💡 Tips for Great Projects

1. **Keep It Simple**
   - Start with the basics and add more details as needed
   - Use clear, simple language to describe your work

2. **Use High-Quality Images**
   - Make sure your images are clear and well-lit
   - Compress large images to help your website load faster

3. **Tell a Story**
   - Begin with the challenge or problem
   - Explain your approach or solution
   - End with the results or impact

## 🔧 Common Questions

### How do I add a new section to my project?
Look at the example projects in the `projects` folder to see how different sections are structured. Copy the section you want and modify it for your project.

### How do I change the order of sections?
Simply move the sections around in your project file. The order they appear in the file is the order they'll appear on your website.

### How do I make my project appear on the homepage?
Set the `featured` property to `true` in your project file.

## 🆘 Need More Help?

If you're stuck, check out:
- The example projects in the `projects` folder
- The [Gallery Projects Guide](gallery-projects.md) for specialized gallery projects
- The [Section Templates Guide](section-templates.md) for detailed information about different section types 