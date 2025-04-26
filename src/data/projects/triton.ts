import { Project } from '../../types';
import { PROJECT_CATEGORIES } from './constants';

export const tritonProject: Project = {
  id: 'triton',
  title: "Triton Digital Culture Deck",
  year: "2021",
  description: "Triton Digital launched a cultural initiative with a new deck design and office installation, featuring custom iconography for their core values.",
  image: "/images/triton/_0023_TRITON-KEYART.png",
  hero: {
    type: 'image',
    src: '/images/triton/_0004_TRITON-KEYART.png'
  },
  category: PROJECT_CATEGORIES.BRAND_EVOLUTION,
  disciplines: [
    'Brand Development',
    'Presentation Design',
    'Environmental Design'
  ],
  featured: false,
  sections: [
    {
      type: 'header',
      title: 'Overview',
      content: 'In preparation for the return to the office, Triton commissioned me to create an updated Culture Deck and supporting print collateral for installation in their Montreal office. Everything was intended to be versioned in French and English.'
    },
    {
      type: 'gallery',
      layout: 'masonry',
      columns: 2,
      content: [
        {
          src: '/images/triton/_0000_TRITON-KEYART.png',
          alt: 'Triton Digital Culture Deck Cover',
          width: 1614,
          height: 1078,
          span: 1,
          priority: true
        },
        {
          src: '/images/triton/_0003_TRITON-KEYART.png',
          alt: 'Triton Digital Culture Deck Spread',
          width: 1382,
          height: 922,
          span: 1
        }
      ]
    },
    {
      type: 'text',
      title: 'Core Values Iconography',
      content: 'Alongside the new culture deck, I was asked to create iconography to represent each of the core values of Triton. Those values are Integrity, Excellence, Teamwork, and Accountability.'
    },
    {
      type: 'gallery',
      layout: 'masonry',
      columns: 4,
      content: [
        {
          src: '/images/triton/Icon_Accountability.png',
          alt: 'Accountability Icon',
          width: 256,
          height: 256
        },
        {
          src: '/images/triton/Icon_Excellence.png',
          alt: 'Excellence Icon',
          width: 256,
          height: 256
        },
        {
          src: '/images/triton/Icon_Integrity.png',
          alt: 'Integrity Icon',
          width: 256,
          height: 256
        },
        {
          src: '/images/triton/Icon_Teamwork.png',
          alt: 'Teamwork Icon',
          width: 256,
          height: 256
        }
      ]
    },
    {
      type: 'gallery',
      title: 'Environmental Design',
      layout: 'masonry',
      columns: 2,
      content: [
        {
          src: '/images/triton/Triton_Office_01.jpg',
          alt: 'Triton Office Installation',
          width: 1920,
          height: 1080,
          span: 2
        },
        {
          src: '/images/triton/Triton_Office_02.jpg',
          alt: 'Triton Office Installation Detail',
          width: 1920,
          height: 1080,
          span: 2
        }
      ]
    },
    {
      type: 'text',
      title: 'Design Approach',
      content: 'The design system needed to work seamlessly across digital presentations, print materials, and large-format environmental applications while maintaining clarity in both English and French. Special consideration was given to typography selection and layout flexibility to accommodate varying text lengths between languages.'
    },
    {
      type: 'gallery',
      title: 'KeyArt',
      layout: 'masonry',
      columns: 3,
      content: [
        {
          src: '/images/triton/_0006_TRITON-KEYART.png',
          alt: 'Triton KeyArt 1',
          width: 1394,
          height: 932,
          span: 1
        },
        {
          src: '/images/triton/_0007_TRITON-KEYART.png',
          alt: 'Triton KeyArt 2',
          width: 1908,
          height: 1272,
          span: 1
        },
        {
          src: '/images/triton/_0016_TRITON-KEYART.png',
          alt: 'Triton KeyArt 3',
          width: 758,
          height: 506,
          span: 1
        },
        {
          src: '/images/triton/_0021_TRITON-KEYART.png',
          alt: 'Triton KeyArt 4',
          width: 696,
          height: 464,
          span: 1
        },
        {
          src: '/images/triton/_0024_TRITON-KEYART.png',
          alt: 'Triton KeyArt 5',
          width: 1932,
          height: 1288,
          span: 1
        },
        {
          src: '/images/triton/_0027_TRITON-KEYART.png',
          alt: 'Triton KeyArt 6',
          width: 1552,
          height: 1034,
          span: 1
        }
      ]
    },
    {
      type: 'gallery',
      title: 'The Deck',
      layout: 'masonry',
      columns: 2,
      content: [
        {
          src: '/images/triton/TRITON_HORZ-OurMission.jpg',
          alt: 'Triton Mission Statement',
          width: 1240,
          height: 877,
          span: 2
        },
        {
          src: '/images/triton/TRITON_HORZ-OurVision.jpg',
          alt: 'Triton Vision Statement',
          width: 1240,
          height: 877,
          span: 2
        },
        {
          src: '/images/triton/TRITON_HORZ-OurValues.jpg',
          alt: 'Triton Values',
          width: 1240,
          height: 877,
          span: 2
        },
        {
          src: '/images/triton/TRITON_HORZ-ValueIconRepeatTex.jpg',
          alt: 'Triton Values Repeatable Texture',
          width: 1240,
          height: 877,
          span: 2
        },
        {
          src: '/images/triton/TRITON_HORZ-OurValuesDefinitions01.jpg',
          alt: 'Triton Values Definitions 1',
          width: 1240,
          height: 877,
          span: 2
        },
        {
          src: '/images/triton/TRITON_HORZ-OurValuesDefinitions02.jpg',
          alt: 'Triton Values Definitions 2',
          width: 1240,
          height: 877,
          span: 2
        },
        {
          src: '/images/triton/TRITON_HORZ-TeamworkQUOTE.jpg',
          alt: 'Triton Teamwork Quote',
          width: 1240,
          height: 877,
          span: 2
        }
      ]
    },
    {
      type: 'credits',
      title: 'Team',
      content: [
        { role: 'Design', name: 'Brandon Shirley' }
      ]
    }
  ]
};
