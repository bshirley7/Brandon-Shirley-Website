# Project Section Cheatsheet

## Table of Contents
1. [Project Header](#project-header)
2. [Section Types](#section-types)
   - [Header Section](#header-section)
   - [Innovations Section](#innovations-section)
   - [Gallery Section](#gallery-section)
   - [Results Section](#results-section)
   - [Credits Section](#credits-section)
3. [Common Combinations](#common-combinations)
4. [Best Practices](#best-practices)
5. [Common Issues and Solutions](#common-issues-and-solutions)

## Project Header

The project header contains the basic information about your project, including technologies used.

```typescript
{
  id: "project-id",
  title: "Project Title",
  year: "2023",
  description: "A brief description of your project.",
  image: "/images/project-id/hero.jpg",
  hero: {
    type: "image", // or "video" or "youtube"
    src: "/images/project-id/hero.jpg"
  },
  category: PROJECT_CATEGORIES.PRODUCT_LAUNCH,
  disciplines: [
    DISCIPLINES.CREATIVE_DIRECTOR,
    DISCIPLINES.BRAND_STRATEGIST
  ],
  technologies: [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Tailwind CSS"
      ]
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Python",
        "PostgreSQL"
      ]
    }
  ],
  featured: true
}
```

### Technologies Field
The `technologies` field in the project header allows you to list all software and tools used in your project, organized by category.

#### Structure
```typescript
technologies: [
  {
    category: string,  // e.g., "Frontend", "Backend", "Design"
    items: string[]    // List of technologies in this category
  }
]
```

#### Common Categories
- Frontend (React, Vue, Angular, etc.)
- Backend (Node.js, Python, Java, etc.)
- Design (Figma, Adobe Suite, etc.)
- DevOps (Docker, AWS, etc.)
- Database (PostgreSQL, MongoDB, etc.)
- Testing (Jest, Cypress, etc.)

#### Modification Notes
- Add/remove categories as needed for your project
- Keep technology names concise and consistent
- Group related technologies together
- Consider listing specific versions if relevant
- Order categories by importance to your project

## Section Types

### Header Section
```typescript
{
  type: 'header',
  title: 'Section Title',
  content: 'Your content here. Supports markdown-style formatting:\n\n1. First point\n2. Second point\n\n- Bullet point 1\n- Bullet point 2'
}
```

#### Modification Notes
- Use markdown-style formatting for lists and emphasis
- Keep paragraphs concise
- Use bullet points for key information
- Include relevant links when needed

### Innovations Section
```typescript
{
  type: 'innovations',
  title: 'Key Statistics or Innovations',
  content: [
    {
      title: "Statistic 1",
      description: "Description of the first statistic"
    },
    {
      title: "Statistic 2",
      description: "Description of the second statistic"
    },
    {
      title: "Statistic 3",
      description: "Description of the third statistic"
    },
    {
      title: "Statistic 4",
      description: "Description of the fourth statistic"
    }
  ]
}
```

#### Modification Notes
- Always include exactly 4 items
- Keep titles short and impactful
- Use specific numbers and metrics when possible
- Ensure descriptions are clear and concise

### Gallery Section
```typescript
{
  type: 'gallery',
  title: 'Project Visuals',
  content: [
    {
      src: '/images/project-id/image-01.jpg',
      alt: 'Image description 1',
      span: 2  // 1 or 2 for column span
    },
    {
      src: '/images/project-id/image-02.jpg',
      alt: 'Image description 2',
      span: 1
    }
  ],
  layout: 'masonry',  // or 'grid'
  columns: 2  // 1 or 2
}
```

#### Modification Notes
- Use descriptive alt text for accessibility
- Optimize images before adding them
- Consider the layout (masonry vs grid)
- Use span property to control image size
- Keep image paths consistent with project structure

### Results Section
```typescript
{
  type: 'results',
  title: 'Results and Impact',
  content: {
    generated: "Key result 1",
    doubled: "Key result 2",
    awarded: "Key result 3",
    supported: "Key result 4"
  }
}
```

#### Modification Notes
- Use specific metrics when possible
- Keep results concise and impactful
- Focus on quantifiable outcomes
- Use consistent formatting for numbers

### Credits Section
```typescript
{
  type: 'credits',
  title: 'Team',
  content: [
    { role: "Role 1", name: "Team Member 1" },
    { role: "Role 2", name: "Team Member 2" },
    { role: "Role 3", name: "Team Member 3" }
  ]
}
```

#### Modification Notes
- List roles in order of importance
- Keep role titles consistent
- Include full names for team members
- Consider adding links to team member profiles

## Common Combinations

### Project Overview
```typescript
const sections: ProjectSection[] = [
  {
    type: 'header',
    title: 'Mission',
    content: 'Project mission statement'
  },
  {
    type: 'header',
    title: 'Challenge',
    content: 'Project challenges'
  },
  {
    type: 'innovations',
    title: 'Key Statistics or Innovations',
    content: [
      // 4 innovation items
    ]
  }
];
```

### Process and Results
```typescript
const sections: ProjectSection[] = [
  {
    type: 'header',
    title: 'Our Approach',
    content: 'Step-by-step process'
  },
  {
    type: 'results',
    title: 'Results and Impact',
    content: {
      generated: "Result 1",
      doubled: "Result 2",
      awarded: "Result 3",
      supported: "Result 4"
    }
  }
];
```

### Visual Documentation
```typescript
const sections: ProjectSection[] = [
  {
    type: 'gallery',
    title: 'Project Visuals',
    content: [
      // Gallery items
    ],
    layout: 'masonry',
    columns: 2
  },
  {
    type: 'credits',
    title: 'Team',
    content: [
      // Team credits
    ]
  }
];
```

## Best Practices

### Image Management
- Store all project images in `/public/images/project-id/`
- Use consistent naming convention (e.g., `image-01.jpg`)
- Optimize images for web use
- Include descriptive alt text
- Use appropriate image formats (jpg for photos, png for graphics)

### Content Structure
- Start with mission and challenge
- Follow with key statistics/innovations
- Include process/approach details
- Show results and impact
- End with visuals and credits
- Keep sections focused and concise

### Section Order
1. Mission/Challenge (Header)
2. Key Statistics (Innovations)
3. Process/Approach (Header)
4. Results (Results)
5. Visual Documentation (Gallery)
6. Team Credits (Credits)

### Accessibility
- Use semantic HTML elements
- Include alt text for all images
- Maintain proper heading hierarchy
- Ensure sufficient color contrast
- Use descriptive link text

## Common Issues and Solutions

### Images Not Loading
- Check image paths are correct
- Ensure images are in the correct directory
- Verify image file names match exactly
- Check file permissions

### Layout Issues
- Use span property correctly (1 or 2)
- Check column settings
- Verify image dimensions
- Test responsive behavior

### Content Formatting
- Use proper markdown syntax
- Check for special characters
- Verify list formatting
- Test line breaks

### Type Errors
- Verify all required fields are present
- Check field types match interface
- Ensure arrays have correct number of items
- Validate enum values 