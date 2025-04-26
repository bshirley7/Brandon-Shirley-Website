import { Project } from './types';
import { PROJECT_CATEGORIES, DISCIPLINES } from './constants';

export const scripps65Project: Project = {
  id: 'scripps-howard-65',
  title: "The Sixty Fifth Annual Scripps Howard Awards",
  year: "2018",
  description: "Led design for prestigious journalism awards show, elevating the program's influence through art deco-inspired design and innovative virtual production.",
  image: "/images/scripps-65/hero.png",
  hero: {
    type: 'youtube',
    src: 'https://www.youtube.com/watch?v=wOCfzuzzR0I',
    youtubeId: 'wOCfzuzzR0I'
  },
  category: PROJECT_CATEGORIES.LIVE_EVENT,
  disciplines: [
    DISCIPLINES.CREATIVE_DIRECTOR,
    DISCIPLINES.BRAND_DEVELOPMENT,
    DISCIPLINES.EVENT_DESIGN,
    DISCIPLINES.MOTION_GRAPHICS,
    DISCIPLINES.THREE_D_GRAPHICS
  ],
  featured: false,
  sections: [
    {
      type: 'header',
      title: 'Overview',
      content: 'For the Sixty Fifth Annual Scripps Howard Awards, Dr. Battinto Batts Jr. challenged the production team to increase the influence the award show holds over the journalism industry through elegance and magnitude. We studied every leading awards show in the country and identified core aspects that added to their grandeur, incorporating art deco design and golden columns to provide the needed pomp and circumstance.'
    },
    {
      type: 'innovations',
      title: 'Key Responsibilities',
      content: [
        {
          title: 'Lead Creative Concept & Execution',
          description: 'Lead creative concept and execution for broadcast via 3 digital platforms and over 61 television stations nationally'
        },
        {
          title: 'Set Brand Standards',
          description: 'Establish visual branding elements and standards for the show and marketing'
        },
        {
          title: 'Develop Sponsorship Opportunities',
          description: 'Develop visual sponsorship opportunities for national sales'
        },
        {
          title: 'Virtual Set Design & Development',
          description: 'Develop a virtual set and graphics for the Finalist Awards show that takes place a month prior to the large event'
        },
        {
          title: 'Live Event Optimization',
          description: 'Work with Director & Producers to optimize production planning, viewing angles, graphics, color, and audio-visual cohesion'
        }
      ]
    },
    {
      type: 'gallery',
      title: 'Brand Standards',
      layout: 'masonry',
      columns: 1,
      content: [
        {
          src: '/images/scripps-65/scripps_pg_02.webp',
          alt: 'Brand Standards Page 2'
        },
        {
          src: '/images/scripps-65/scripps_pg_03.webp',
          alt: 'Brand Standards Page 3'
        },
        {
          src: '/images/scripps-65/scripps_pg_04.webp',
          alt: 'Brand Standards Page 4'
        },
        {
          src: '/images/scripps-65/scripps_pg_05.webp',
          alt: 'Brand Standards Page 5'
        },
        {
          src: '/images/scripps-65/scripps_pg_06.webp',
          alt: 'Brand Standards Page 6'
        },
        {
          src: '/images/scripps-65/scripps_pg_07.webp',
          alt: 'Brand Standards Page 7'
        },
        {
          src: '/images/scripps-65/scripps_pg_08.png',
          alt: 'Brand Standards Page 8'
        },
        {
          src: '/images/scripps-65/scripps_pg_09.webp',
          alt: 'Brand Standards Page 9'
        },
        {
          src: '/images/scripps-65/scripps_pg_10.webp',
          alt: 'Brand Standards Page 10'
        },
        {
          src: '/images/scripps-65/scripps_pg_11.webp',
          alt: 'Brand Standards Page 11'
        },
        {
          src: '/images/scripps-65/scripps_pg_12.webp',
          alt: 'Brand Standards Page 12'
        },
        {
          src: '/images/scripps-65/scripps_pg_13.webp',
          alt: 'Brand Standards Page 13'
        }
      ]
    },
    {
      type: 'text',
      title: 'Design Approach',
      content: 'Drawing inspiration from classic art deco design, we created a visual language that emphasized elegance and prestige through golden columns, geometric patterns, and sophisticated typography. This aesthetic was consistently applied across all platforms, from digital broadcasts to marketing materials.'
    },
    {
      type: 'credits',
      title: 'Core Team',
      content: [
        { role: 'Executive Producer', name: 'Dr. Battinto Batts Jr.' },
        { role: 'Producer', name: 'Marie Gould' },
        { role: 'Editor', name: 'Ted Heck' },
        { role: 'Director', name: 'Matthew Bellehumeur' },
        { role: 'Production Manager', name: 'Donn Bousquet' },
        { role: 'Design Director', name: 'Darrin Shaw' },
        { role: 'Lead Designer', name: 'Brandon Shirley' },
        { role: 'Designer', name: 'Sandra Scagliotti' },
        { role: 'VizRT Developer', name: 'Robert Prescott' }
      ]
    }
  ]
};
