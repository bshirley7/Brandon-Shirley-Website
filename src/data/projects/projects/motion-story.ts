import { Project } from '../config/types';
import { PROJECT_CATEGORIES, DISCIPLINES } from '../config/constants';

export const motionStoryProject: Project = {
  id: 'motion-story',
  title: "Animated Storytelling",
  year: "2024",
  description: "An immersive animated story that combines 3D graphics, motion design, and compelling narrative to create an unforgettable viewing experience.",
  image: "/images/motion-story/hero.jpg",
  hero: {
    type: 'image',
    src: "/images/motion-story/hero.jpg"
  },
  category: PROJECT_CATEGORIES.ANIMATION,
  disciplines: [
    DISCIPLINES.ANIMATION,
    DISCIPLINES.MOTION_GRAPHICS,
    DISCIPLINES.THREE_D_GRAPHICS
  ],
  technologies: [
    {
      category: "3D Software",
      items: [
        "Maya",
        "Blender",
        "Cinema 4D",
        "Houdini"
      ]
    },
    {
      category: "2D Animation",
      items: [
        "After Effects",
        "Adobe Animate",
        "Toon Boom Harmony",
        "Procreate"
      ]
    },
    {
      category: "Rendering",
      items: [
        "Arnold",
        "Redshift",
        "Octane",
        "V-Ray"
      ]
    },
    {
      category: "Audio",
      items: [
        "Pro Tools",
        "Ableton Live",
        "Audition",
        "Sound Design Libraries"
      ]
    }
  ],
  featured: true,
  sections: [
    {
      type: 'header',
      title: 'Mission',
      content: 'Create an engaging animated story that pushes the boundaries of visual storytelling while delivering a powerful message through innovative animation techniques.'
    },
    {
      type: 'header',
      title: 'Challenge',
      content: 'Developing a unique visual style that combines multiple animation techniques while maintaining narrative coherence and emotional impact.'
    },
    {
      type: 'innovations',
      title: 'Creative Innovations',
      content: [
        {
          title: "Mixed Techniques",
          description: "Seamless blend of 2D and 3D animation styles"
        },
        {
          title: "Custom Pipeline",
          description: "Developed unique rendering and compositing workflow"
        },
        {
          title: "Real-time Elements",
          description: "Integrated procedural animation systems"
        },
        {
          title: "Sound Design",
          description: "Created immersive audio landscape"
        }
      ]
    },
    {
      type: 'header',
      title: 'Creative Process',
      content: `1. Pre-production
- Story development and scripting
- Style frames and mood boards
- Character and environment design

2. Visual Development
- Animation style exploration
- Color script development
- Lighting concepts

3. Production Pipeline
- Asset creation and rigging
- Animation and motion design
- Rendering and compositing

4. Post-production
- Color grading
- Sound design and music
- Final assembly and delivery`
    },
    {
      type: 'results',
      title: 'Project Impact',
      content: {
        generated: "Millions of online views",
        doubled: "Engagement rates vs. benchmarks",
        awarded: "Multiple animation awards",
        supported: "Featured in animation festivals"
      }
    },
    {
      type: 'gallery',
      title: 'Behind the Scenes',
      content: [
        {
          src: "/images/motion-story/architecture.jpg",
          alt: 'Storyboard Design',
          span: 2
        },
        {
          src: "/images/motion-story/dashboard.jpg",
          alt: 'Animation Frames',
          span: 1
        },
        {
          src: "/images/motion-story/metrics.jpg",
          alt: 'Visual Effects',
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
        { role: "Team Member", name: "Team Member Name" },
        { role: "Team Member", name: "Team Member Name" },
        { role: "Team Member", name: "Team Member Name" }
      ]
    }
  ]
}; 