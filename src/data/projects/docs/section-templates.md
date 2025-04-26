# Section Templates Guide

This guide will help you understand the different types of content sections you can use in your projects and how to add them to your portfolio.

## 📝 What Are Section Templates?

Section templates are pre-designed content blocks that you can use to tell your project's story. Think of them as building blocks that you can arrange to create a complete project page.

## 🎨 Available Section Types

### Text Sections
These are for writing about your project:

- **Mission**: What was the goal of your project?
- **Challenge**: What problems did you need to solve?
- **Statistics**: Key numbers and achievements

### Process and Results Sections
These explain how you worked and what you achieved:

- **Our Approach**: Step-by-step process
- **Results**: Measurable outcomes

### Visual Documentation Sections
These showcase your work visually:

- **Gallery**: Project images and videos
- **Team**: Who worked on the project

## 🚀 Using Section Templates

### Basic Project Template

The easiest way to add sections to your project is to use our pre-built combinations:

```typescript
import { 
  projectOverviewSections,
  processAndResultsSections,
  visualDocumentationSections 
} from '../templates/section-templates';

export const myProject: Project = {
  // ... basic information
  sections: [
    ...projectOverviewSections,    // Mission, Challenge, and Statistics
    ...processAndResultsSections,  // Approach and Results
    ...visualDocumentationSections // Gallery and Team
  ]
};
```

### Gallery-Focused Template

If you're creating a gallery project, use this simpler template:

```typescript
import { 
  gallerySections 
} from '../templates/section-templates';

export const myGallery: Project = {
  // ... basic information
  sections: [
    ...gallerySections  // Text introduction and gallery
  ]
};
```

## 📋 Understanding Section Structure

### Text Section
This is for writing paragraphs of text:

```typescript
{
  type: 'text',
  title: 'Project Mission',
  content: 'Our goal was to create a new brand identity that would help the client stand out in a crowded market.'
}
```

### Gallery Section
This displays a collection of images or videos:

```typescript
{
  type: 'gallery',
  title: 'Project Gallery',
  content: [
    {
      src: '/images/my-project/image-01.jpg',
      alt: 'Brand Logo Design',
      span: 2,
      priority: true
    },
    {
      src: '/images/my-project/image-02.jpg',
      alt: 'Website Homepage',
      span: 1
    }
  ],
  layout: 'masonry',
  columns: 3,
  background: 'white'
}
```

### Statistics Section
This highlights key numbers and achievements:

```typescript
{
  type: 'statistics',
  title: 'Project Impact',
  content: {
    items: [
      {
        value: '150%',
        label: 'Increase in website traffic'
      },
      {
        value: '3x',
        label: 'Faster page load time'
      },
      {
        value: '85%',
        label: 'Customer satisfaction'
      }
    ]
  }
}
```

### Team Section
This credits the people who worked on the project:

```typescript
{
  type: 'team',
  title: 'Project Team',
  content: {
    members: [
      {
        name: 'Jane Smith',
        role: 'Creative Director',
        image: '/images/team/jane-smith.jpg'
      },
      {
        name: 'John Doe',
        role: 'Lead Developer',
        image: '/images/team/john-doe.jpg'
      }
    ]
  }
}
```

## 💡 Tips for Using Sections

1. **Tell a Story**
   - Start with the mission and challenge
   - Explain your approach
   - Show the results
   - End with visual documentation

2. **Keep Content Focused**
   - Each section should have a clear purpose
   - Use concise, clear language
   - Include relevant images or statistics

3. **Consider Your Audience**
   - What information would they find most valuable?
   - What visuals would help them understand your work?
   - What metrics would impress them?

## 🔧 Common Questions

### How do I add a new section to my project?
Copy an existing section from another project and modify it for your needs. Make sure to keep the same structure but change the content.

### How do I change the order of sections?
Simply move the sections around in your project file. The order they appear in the file is the order they'll appear on your website.

### Can I mix and match different section types?
Yes! You can use any combination of section types in your project. Just add them to the `sections` array in the order you want them to appear.

## 🆘 Need More Help?

If you're stuck, check out:
- The example projects in the `projects` folder
- The [Project Structure Guide](project-structure.md) for general project information
- The [Gallery Projects Guide](gallery-projects.md) for specialized gallery projects 