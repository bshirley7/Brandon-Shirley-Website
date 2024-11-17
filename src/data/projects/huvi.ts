import { Project } from './types';
import { PROJECT_CATEGORIES } from './constants';

export const huviProject: Project = {
  id: 'huvi',
  title: "HUVI Clean Revolution",
  year: "2021",
  description: "Launching a disruptive robotic vacuum through sophisticated creative direction in a saturated market.",
  image: "/images/huvi/hero.jpg",
  hero: {
    type: 'youtube',
    src: 'https://www.youtube.com/watch?v=S0dsqL7ZLe8',
    youtubeId: 'S0dsqL7ZLe8'
  },
  category: PROJECT_CATEGORIES.PRODUCT_LAUNCH,
  disciplines: [
    'Creative Director',
    'Brand Strategist',
    'Post-Production Lead'
  ],
  featured: true,
  sections: [
    {
      type: 'header',
      title: 'Overview',
      content: 'Led the creative direction for the launch of the HUVI Robotic Vacuum, developing a highly polished campaign focused on the "HUVI Clean" experience to compete effectively in a saturated market dominated by established brands.'
    },
    {
      type: 'gallery',
      title: 'Product Renders',
      layout: 'masonry',
      columns: 3,
      content: [
        {
          src: '/images/huvi/HUVI_UPDATE_0000.jpg',
          alt: 'HUVI Campaign Asset 1',
          span: 1
        },
        {
          src: '/images/huvi/HUVI_UPDATE_0001.jpg',
          alt: 'HUVI Campaign Asset 2',
          span: 1
        },
        {
          src: '/images/huvi/HUVI_UPDATE_0002.jpg',
          alt: 'HUVI Campaign Asset 3',
          span: 1
        },
        {
          src: '/images/huvi/HUVI_UPDATE_0003.jpg',
          alt: 'HUVI Campaign Asset 4',
          span: 1
        },
        {
          src: '/images/huvi/HUVI_UPDATE_0004.jpg',
          alt: 'HUVI Campaign Asset 5',
          span: 1
        },
        {
          src: '/images/huvi/HUVI_UPDATE_0005.jpg',
          alt: 'HUVI Campaign Asset 6',
          span: 1
        },
        {
          src: '/images/huvi/HUVI_UPDATE_0006.jpg',
          alt: 'HUVI Campaign Asset 7',
          span: 1
        },
        {
          src: '/images/huvi/HUVI_UPDATE_0007.jpg',
          alt: 'HUVI Campaign Asset 8',
          span: 1
        },
        {
          src: '/images/huvi/HUVI_UPDATE_0008.jpg',
          alt: 'HUVI Campaign Asset 9',
          span: 1
        }
      ]
    },
    {
      type: 'credits',
      title: 'Team',
      content: [
        { role: 'Creative Director', name: 'Brandon Shirley' },
        { role: 'Executive Producer', name: 'Steve Harkey' }
      ]
    }
  ]
};
