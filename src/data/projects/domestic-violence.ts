import { Project } from './types';
import { PROJECT_CATEGORIES } from './constants';

export const domesticViolenceProject: Project = {
  id: 'domestic-violence',
  title: "A Decade Of Awareness",
  year: "2018",
  description: "Multi-channel awareness campaign driving doubled viewership and over 100,000 helpline calls.",
  image: "/images/domestic-violence/hero.jpg",
  hero: {
    type: 'image',
    src: '/images/domestic-violence/gallery-01.jpg'
//    type: 'youtube',
//    src: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID', // Replace with actual YouTube URL
//    youtubeId: 'YOUR_VIDEO_ID' // Optional: provide ID directly to skip URL parsing
  },
  category: PROJECT_CATEGORIES.IMPACT_CAMPAIGN,
  disciplines: [
    'Creative Director',
    'Strategic Lead',
    'Post-Production'
  ],
  featured: true,
  sections: [
    {
      type: 'header',
      title: 'Mission',
      content: 'A groundbreaking awareness campaign utilizing strategic branding and data-driven storytelling to transform public perception and drive actionable change in domestic violence awareness.'
    },
    {
      type: 'header',
      title: 'Impact',
      content: 'The campaign achieved unprecedented engagement, doubling primetime viewership and generating over 100,000 helpline calls, creating a direct channel for those in need to access support services.'
    },
    {
      type: 'innovations',
      title: 'The Silent Epidemic: Key Statistics',
      content: [
        {
          title: "1 in 4 women",
          description: "experience severe intimate partner violence"
        },
        {
          title: "1 in 9 men",
          description: "experience severe intimate partner violence"
        },
        {
          title: "19% of violent crime",
          description: "is attributed to intimate partner violence"
        },
        {
          title: "1 in 15 children",
          description: "are exposed to intimate partner violence annually"
        }
      ]
    },
    {
      type: 'header',
      title: 'Our Approach: A 5-Step Process',
      content: `1. Strategic Branding
- Developed an eye chart logo symbolizing the hidden nature of domestic violence
- Created a geometric speech bubble emphasizing clear communication

2. Educational Content Creation
- Crafted 'The Wheel of Power & Control' and 'The Wheel of Equality'
- Designed a web experience prioritizing resource access and education

3. Multi-Channel Media Strategy
- Implemented campaigns across TV, web, and social media platforms
- Ensured prominent featuring of the helpline across all channels

4. Narrative Development
- Collaborated with domestic violence experts for accurate, sensitive messaging
- Created compelling stories illustrating subtle signs of abuse

5. Culminating Broadcast
- Produced 'Taking Action Against Domestic Violence,' a special primetime show`
    },
    {
      type: 'results',
      title: 'Results and Community Impact',
      content: {
        generated: "over 100,000 helpline calls",
        doubled: "Primetime ratings against all competing channels",
        awarded: "an Emmy for Community Service the 4th in 5 years",
        supported: "Seven additional county police departments with support materials"
      }
    },
    {
      type: 'gallery',
      title: 'Campaign Visuals',
      content: [
        {
          src: '/images/domestic-violence/gallery-01.jpg',
          alt: 'Campaign Visual 1',
          span: 1
        },
        {
          src: '/images/domestic-violence/gallery-02.jpg',
          alt: 'Campaign Visual 2',
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
        { role: 'Creative Director', name: 'Brandon Shirley' },
        { role: 'Creative Director', name: 'Darrin Shaw' },
        { role: 'Executive Producer', name: 'Lissette Campos' }
      ]
    }
  ]
};
