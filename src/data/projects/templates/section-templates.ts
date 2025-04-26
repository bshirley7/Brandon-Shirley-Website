import { ProjectSection } from '../config/types';

/**
 * Section Templates
 * 
 * This file contains templates for all available section types.
 * Copy and paste these templates into your project file and customize as needed.
 * 
 * Available section types:
 * - header: Simple header with title and content
 * - innovations: List of key statistics or innovations
 * - gallery: Image gallery with various layout options
 * - results: Key results or achievements
 * - credits: Team credits
 */

// Header Section Template
export const headerSection: ProjectSection = {
  type: 'header',
  title: 'Section Title',
  content: `Your content goes here. You can use multiple paragraphs.

Second paragraph with more details.

- Bullet point 1
- Bullet point 2
- Bullet point 3`
};

// Innovations Section Template
export const innovationsSection: ProjectSection = {
  type: 'innovations',
  title: 'Key Statistics or Innovations',
  content: [
    {
      title: "Statistic 1",
      description: "Description of the first statistic or innovation"
    },
    {
      title: "Statistic 2",
      description: "Description of the second statistic or innovation"
    },
    {
      title: "Statistic 3",
      description: "Description of the third statistic or innovation"
    },
    {
      title: "Statistic 4",
      description: "Description of the fourth statistic or innovation"
    }
  ]
};

// Gallery Section Template
export const gallerySection: ProjectSection = {
  type: 'gallery',
  title: 'Project Visuals',
  content: [
    {
      src: '/images/your-project/image-01.jpg',
      alt: 'Image description 1',
      span: 1  // How many columns to span (1 or 2)
    },
    {
      src: '/images/your-project/image-02.jpg',
      alt: 'Image description 2',
      span: 1
    },
    {
      src: '/images/your-project/image-03.jpg',
      alt: 'Image description 3',
      span: 2  // This image will span both columns
    }
  ],
  layout: 'masonry',
  columns: 2
};

// Results Section Template
export const resultsSection: ProjectSection = {
  type: 'results',
  title: 'Results and Impact',
  content: {
    generated: "Key result 1 (e.g., Revenue generated, Users reached)",
    doubled: "Key result 2 (e.g., Growth metrics, Performance improvement)",
    awarded: "Key result 3 (e.g., Awards, Recognition)",
    supported: "Key result 4 (e.g., Customer satisfaction, Market impact)"
  }
};

// Credits Section Template
export const creditsSection: ProjectSection = {
  type: 'credits',
  title: 'Team',
  content: [
    { role: "Role 1", name: "Team Member 1" },
    { role: "Role 2", name: "Team Member 2" },
    { role: "Role 3", name: "Team Member 3" }
  ]
};

/**
 * Common Section Combinations
 * 
 * These are common combinations of sections that work well together.
 * Copy the entire combination and customize as needed.
 */

// Project Overview Combination
export const projectOverviewSections: ProjectSection[] = [
  {
    type: 'header',
    title: 'Mission',
    content: 'Describe the mission or purpose of your project. What problem were you trying to solve?'
  },
  {
    type: 'header',
    title: 'Challenge',
    content: 'Describe the challenges you faced and how you overcame them.'
  },
  {
    type: 'innovations',
    title: 'Key Statistics or Innovations',
    content: [
      {
        title: "Statistic 1",
        description: "Description of the first statistic or innovation"
      },
      {
        title: "Statistic 2",
        description: "Description of the second statistic or innovation"
      },
      {
        title: "Statistic 3",
        description: "Description of the third statistic or innovation"
      },
      {
        title: "Statistic 4",
        description: "Description of the fourth statistic or innovation"
      }
    ]
  }
];

// Process and Results Combination
export const processAndResultsSections: ProjectSection[] = [
  {
    type: 'header',
    title: 'Our Approach',
    content: `1. Step One
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
- Another detail about the fourth step`
  },
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
];

// Visual Documentation Combination
export const visualDocumentationSections: ProjectSection[] = [
  {
    type: 'gallery',
    title: 'Project Visuals',
    content: [
      {
        src: '/images/your-project/image-01.jpg',
        alt: 'Image description 1',
        span: 2
      },
      {
        src: '/images/your-project/image-02.jpg',
        alt: 'Image description 2',
        span: 1
      },
      {
        src: '/images/your-project/image-03.jpg',
        alt: 'Image description 3',
        span: 1
      }
    ],
    layout: 'masonry',
    columns: 2
  },
  {
    type: 'credits',
    title: 'Team',
    content: [
      { role: "Role 1", name: "Team Member 1" },
      { role: "Role 2", name: "Team Member 2" },
      { role: "Role 3", name: "Team Member 3" }
    ]
  }
]; 