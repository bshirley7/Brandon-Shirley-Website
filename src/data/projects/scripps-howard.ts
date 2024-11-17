import { Project } from './types';
import { PROJECT_CATEGORIES } from './constants';

export const scrippsHowardProject: Project = {
  id: 'scripps-howard',
  title: "Reinventing the Scripps Howard Awards",
  year: "2021",
  description: "Led the transformation of a prestigious journalism awards show, achieving 400% growth across key metrics for 5 consecutive years.",
  image: "/images/scripps-howard/hero.jpg",
  hero: {
    type: 'video',
    src: '/images/scripps-howard/hero.mp4',
    playsInline: true,
    autoplay: true,
    muted: true,
    loop: true,
    controls: false,
    download: false
  },
  category: PROJECT_CATEGORIES.BRAND_EVOLUTION,
  disciplines: [
    'Creative Director',
    'Innovation Lead',
    'Production Director'
  ],
  featured: true,
  sections: [
    {
      type: 'header',
      title: 'Overview',
      content: 'As Creative Director for the Sixty Eighth Annual Scripps Howard Awards, I transformed this prestigious journalism awards show into a streamlined virtual production with dramatically enhanced industry influence.'
    },
    {
      type: 'text',
      title: 'Challenge',
      content: 'Dr. Battinto Batts Jr. challenged our team to streamline virtual awards show production within an 8-week timeline, increase industry influence, adapt to remote production necessities, and continue exponential growth across key metrics.'
    },
    {
      type: 'value',
      title: 'My Role and Key Responsibilities',
      content: [
        'Leading creative concept and execution for broadcast via 3 digital platforms and over 61 television stations nationally',
        'Establishing visual branding elements and standards for the show and marketing',
        'Developing visual sponsorship opportunities for national sales',
        'Conceptualizing, developing, testing, and executing a remotely recorded judging process',
        'Designing and developing an interactive virtual set for remote production',
        'Working with the Director and Producers to establish a large camera shot library',
      ]
    },
    {
      type: 'gallery',
      title: 'Social Media',
      layout: 'masonry',
      columns: 3,
      content: [
        {
          src: '/images/scripps-howard/social-media-01.jpg',
          alt: 'Social Media Campaign 1',
          span: 1
        },
        {
          src: '/images/scripps-howard/social-media-02.jpg',
          alt: 'Social Media Campaign 2',
          span: 1
        },
        {
          src: '/images/scripps-howard/social-media-03.jpg',
          alt: 'Social Media Campaign 3',
          span: 1
        },
      ]
    },
    {
      type: 'approach',
      title: 'Our Approach: A 5-Step Innovation Process',
      content: [
        {
          step: "Format Reimagining",
          details: ["Identified a new format suited for virtual production and audience engagement"]
        },
        {
          step: "Creative Concept Development",
          details: [
            "Leveraged newly developed virtual production techniques",
            "Designed an interactive virtual set for remote production using VizRT and Mo-Sys"
          ]
        },
        {
          step: "Remote Judging Process",
          details: [
            "Established a process for remote interviews with over 50 judges",
            "Partnered with engineering at WXYZ Detroit for implementation"
          ]
        },
        {
          step: "Congratulatory Strategy",
          details: ["Defined a new approach featuring messages from recognizable industry peers"]
        },
        {
          step: "Multi-Platform Distribution",
          details: ["Prepared content for broadcast via 3 digital platforms and over 61 television stations nationally"]
        }
      ]
    },
    {
      type: 'innovations',
      content: [
        {
          title: "Seamless Display Technology",
          description: "Developed a system of texturable displays with different UV coordinate configurations, allowing for dynamic control of virtual display panels"
        },
        {
          title: "Virtual Set Design",
          description: "Created an interactive virtual set compatible with real-time camera tracking within VizRT and Mo-Sys"
        },
        {
          title: "Remote Filming Operations",
          description: "Established a process for remote interviews with over 50 judges"
        },
        {
          title: "Branding and Graphics",
          description: "Set brand standards and developed visual elements for the show and marketing materials"
        },
        {
          title: "Sponsorship Integration",
          description: "Developed visual sponsorship opportunities for national sales"
        }
      ]
    },
    {
      type: 'results',
      title: 'Extraordinary Results: 400% Growth for 5 Consecutive Years',
      content: {
        entries: "400% increase, attracting a wider range of high-quality journalism",
        partnerships: "400% growth in revenue from industry collaborations",
        viewership: "400% rise, expanding the reach and impact of the awards",
        engagement: "400% uplift, amplifying the conversation around journalism excellence"
      }
    },
    {
      type: 'impact',
      title: 'Additional Impact',
      content: [
        'Successfully broadcasted across 3 digital platforms and 61+ television stations nationally',
        'Enhanced the show\'s prestige and influence within the journalism industry',
        'Streamlined production process while maintaining high-quality output',
        'Created new revenue streams through integrated sponsorship opportunities'
      ]
    },
    {
      type: 'value',
      title: 'Key Learnings',
      content: [
        'Consistent innovation can drive exponential growth year over year',
        'Virtual production can significantly enhance the impact and reach of traditional events',
        'Innovative technical solutions can solve multiple challenges simultaneously',
        'Cross-departmental collaboration is crucial for successful implementation of new technologies',
        'Reimagining formats for virtual environments can lead to increased industry influence and engagement'
      ]
    },
    {
      type: 'gallery',
      title: 'Production Assets',
      layout: 'masonry',
      columns: 2,
      content: [
        {
          src: '/images/scripps-howard/gallery-01.jpg',
          alt: 'Production Asset 1',
          span: 1
        },
        {
          src: '/images/scripps-howard/gallery-02.jpg',
          alt: 'Production Asset 2',
          span: 1
        },
        {
          src: '/images/scripps-howard/_0000_00-Finalists_SAMPLE_00000.png',
          alt: 'Production Asset 3',
          span: 2
        },
        {
          src: '/images/scripps-howard/SHA-Winners_SAMPLE_00000.png',
          alt: 'Production Asset 4',
          span: 2
        },
      ]
    },
    {
      type: 'credits',
      title: 'Team',
      columns: 1,
      content: [
        { role: 'Creative Director', name: 'Brandon Shirley' },
        { role: 'Executive Producer', name: 'Dr. Battinto L Batts Jr.' },
        { role: 'Producer', name: 'Zach Wells' },
        { role: 'Editor', name: 'Ted Heck' },
        { role: 'Director', name: 'Matthew Bellehumeur' },
        { role: 'Production Manager', name: 'Donn Bousquet' },
        { role: 'Motion Design', name: 'Jon Deshaies' }
      ]
    }
  ]
};
