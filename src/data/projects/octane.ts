import { Project } from '../../types';
import { PROJECT_CATEGORIES } from './constants';

export const octaneProject: Project = {
  id: 'octane',
  title: "Scripps Octane",
  year: "2020",
  description: "Launching an OTT advertising platform with high-impact motion graphics and brand development.",
  image: "/images/octane/Octane_Cover_02.png",
  hero: {
    type: 'youtube',
    src: 'https://www.youtube.com/watch?v=55YatXSzZ5c',
    youtubeId: '55YatXSzZ5c'
  },
  category: PROJECT_CATEGORIES.PRODUCT_LAUNCH,
  disciplines: [
    'Motion Graphics',
    'Video Editing',
    'Brand Development'
  ],
  featured: false,
  sections: [
    {
      type: 'header',
      title: 'Overview',
      content: 'Scripps Octane, an OTT advertising platform was launched as part of Scripps\' marketing solutions in 2019. To help prepare the sales teams and new potential customers for this new service, Brandon was asked to create a teaser and explainer video.'
    },
    {
      type: 'text',
      title: 'Creative Approach',
      content: 'Per the name, Octane is showcased for its high speed, highly maneuverability and the videos needed to reflect that theme. What followed was truly OTT (Over the Top) with engine noise and acceleration drive the messaging to the viewer.'
    },
    {
      type: 'text',
      title: 'Key Message',
      content: 'Our Audience is your consumer. With millions cutting the cord, Scripps provided a B2B solution that allows marketers and advertisers to connect with their intended audience in the places they are now watching content.'
    },
    {
      type: 'text',
      title: 'Creative Execution',
      content: 'As part of exploring the look and feel for Octane, this teaser was put together to explore the visual, emotional, and sonic language of the Octane brand using a combination of stock footage, 3d animation, and motion graphic samples.'
    },
    {
      type: 'gallery',
      layout: 'masonry',
      columns: 2,
      content: [
        {
          src: '/images/octane/Octane_Cover_03.png',
          alt: 'Octane is a connected web app',
          width: 1920,
          height: 1080,
          span: 2,
          priority: true
        },
        {
          src: '/images/octane/OCTANE_OVER14k.webp',
          alt: '14 thousand people cut the cord every day.',
          width: 1920,
          height: 1080
        },
        {
          src: '/images/octane/OCTANE_OVER.webp',
          alt: 'Octane is OVER',
          width: 1920,
          height: 1080
        },
        {
          src: '/images/octane/OCTANE_THE.webp',
          alt: 'THE',
          width: 1920,
          height: 1080
        },
        {
          src: '/images/octane/OCTANE_TOP.webp',
          alt: 'TOP',
          width: 1920,
          height: 1080
        },
      ]
    },
    {
      type: 'credits',
      title: 'Team',
      content: [
        { role: 'Motion Graphics', name: 'Brandon Shirley' },
        { role: 'Logo Design', name: 'Steve Sanning' }
      ]
    }
  ]
};
