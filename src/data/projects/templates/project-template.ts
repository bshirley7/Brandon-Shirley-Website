import { Project } from '../config/types';
import { PROJECT_CATEGORIES, DISCIPLINES } from '../config/constants';

/**
 * Project Template
 * 
 * This template can be used as a starting point for creating new project files.
 * Simply copy this file, rename it to your project name (e.g., 'my-project.ts'),
 * and update the content with your project details.
 * 
 * Available section types:
 * - header: Simple header with title and content
 * - innovations: List of key statistics or innovations
 * - gallery: Image gallery with various layout options
 * - results: Key results or achievements
 * - credits: Team credits
 * 
 * Available hero types:
 * - image: Static image
 * - video: Local video file
 * - youtube: YouTube video
 * 
 * Note: This template uses placeholder.com for images. Replace with your actual images
 * when creating a new project.
 */

export const projectTemplate: Project = {
  id: 'project-id', // Use kebab-case for the ID (e.g., 'my-awesome-project')
  title: "Project Title",
  year: "2023",
  description: "A brief description of your project that highlights its key achievements.",
  image: "https://via.placeholder.com/800x600", // Placeholder hero image
  hero: {
    type: 'image', // Options: 'image', 'video', 'youtube'
    src: 'https://via.placeholder.com/1920x1080' // Placeholder hero image
    // For YouTube videos, uncomment and update these lines:
    // type: 'youtube',
    // src: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
    // youtubeId: 'YOUR_VIDEO_ID' // Optional: provide ID directly to skip URL parsing
  },
  category: PROJECT_CATEGORIES.PRODUCT_LAUNCH, // Choose from PROJECT_CATEGORIES
  disciplines: [
    DISCIPLINES.CREATIVE_DIRECTOR,
    DISCIPLINES.BRAND_STRATEGIST,
    DISCIPLINES.PRODUCTION_LEAD
  ],
  technologies: [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Next.js"
      ]
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Python",
        "PostgreSQL",
        "Redis"
      ]
    },
    {
      category: "Design",
      items: [
        "Figma",
        "Adobe Creative Suite",
        "Blender",
        "After Effects"
      ]
    },
    {
      category: "DevOps",
      items: [
        "Docker",
        "AWS",
        "GitHub Actions",
        "Terraform"
      ]
    }
  ],
  featured: true, // Set to true to feature this project on the homepage
  sections: [
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
    },
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
- Another detail about the fourth step

5. Step Five
- Detail about the fifth step
- Another detail about the fifth step`
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
    },
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
  ]
}; 