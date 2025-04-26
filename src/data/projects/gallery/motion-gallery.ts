import { Project } from './config/types';
import { PROJECT_CATEGORIES, DISCIPLINES } from './config/constants';

export const motionGallery: Project = {
  id: 'motion-gallery',
  title: "Motion Graphics Gallery",
  year: "2024",
  description: "A collection of motion graphics work showcasing various styles and techniques.",
  image: "/images/motion-gallery/thumbnail.jpg",
  hero: {
    type: 'image',
    src: '/images/motion-gallery/hero.jpg'
  },
  category: PROJECT_CATEGORIES.ANIMATION,
  disciplines: [
    DISCIPLINES.MOTION_GRAPHICS,
    DISCIPLINES.ANIMATION,
    DISCIPLINES.CREATIVE_DIRECTOR
  ],
  technologies: [
    {
      category: "Animation Software",
      items: [
        "After Effects",
        "Cinema 4D",
        "Adobe Animate",
        "Blender"
      ]
    },
    {
      category: "Design Tools",
      items: [
        "Illustrator",
        "Photoshop",
        "Figma",
        "Procreate"
      ]
    },
    {
      category: "Plugins",
      items: [
        "Trapcode Suite",
        "Element 3D",
        "Red Giant",
        "Animation Composer"
      ]
    }
  ],
  featured: true,
  sections: [
    {
      type: 'text',
      title: 'About This Gallery',
      content: 'This gallery showcases a diverse collection of motion graphics work, from character animations to abstract designs. Each piece demonstrates different techniques and styles in motion design.'
    },
    {
      type: 'gallery',
      title: 'Motion Graphics Collection',
      content: [
        {
          src: '/images/motion-gallery/piece-01.jpg',
          alt: 'Abstract Motion Design',
          span: 2,
          priority: true
        },
        {
          src: '/videos/motion-gallery/piece-02.mp4',
          alt: 'Character Animation',
          span: 1
        },
        {
          src: '/images/motion-gallery/piece-03.jpg',
          alt: 'Typography Animation',
          span: 1
        },
        {
          src: '/videos/motion-gallery/piece-04.mp4',
          alt: 'Logo Animation',
          span: 1
        }
      ],
      layout: 'masonry',
      columns: 3,
      background: 'white'
    }
  ]
}; 