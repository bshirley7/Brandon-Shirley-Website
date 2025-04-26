import { Project } from '../config/types';
import { PROJECT_CATEGORIES, DISCIPLINES } from '../config/constants';

export const brandEvolutionProject: Project = {
  id: 'brand-evolution',
  title: "Brand Transformation",
  year: "2024",
  description: "A comprehensive brand evolution project that modernized a legacy brand while preserving its core values and heritage.",
  image: "/images/brand-evolution/hero.jpg",
  hero: {
    type: 'image',
    src: "/images/brand-evolution/hero.jpg"
  },
  category: PROJECT_CATEGORIES.BRAND_EVOLUTION,
  disciplines: [
    DISCIPLINES.BRAND_STRATEGIST,
    DISCIPLINES.BRAND_DEVELOPMENT,
    DISCIPLINES.CREATIVE_DIRECTOR
  ],
  technologies: [
    {
      category: "Design Software",
      items: [
        "Adobe Creative Suite",
        "Figma",
        "Sketch",
        "InVision"
      ]
    },
    {
      category: "Brand Management",
      items: [
        "Brand Asset Management",
        "Digital Asset Libraries",
        "Style Guide Tools",
        "Brand Guidelines Platforms"
      ]
    },
    {
      category: "Analytics",
      items: [
        "Brand Tracking Tools",
        "Market Research Software",
        "Social Media Analytics",
        "Customer Feedback Platforms"
      ]
    },
    {
      category: "Implementation",
      items: [
        "CMS Platforms",
        "E-commerce Systems",
        "Digital Signage",
        "Print Production Tools"
      ]
    }
  ],
  featured: true,
  sections: [
    {
      type: 'header',
      title: 'Mission',
      content: 'Transform a 30-year-old brand into a modern, digital-first identity while maintaining its established market presence and customer trust.'
    },
    {
      type: 'header',
      title: 'Challenge',
      content: 'Balancing heritage with innovation: modernizing the brand while retaining recognition and trust from long-time customers.'
    },
    {
      type: 'innovations',
      title: 'Brand Evolution Highlights',
      content: [
        {
          title: "Digital Presence",
          description: "Created cohesive digital brand guidelines and assets"
        },
        {
          title: "Customer Retention",
          description: "Maintained 98% customer retention during transition"
        },
        {
          title: "Market Growth",
          description: "Expanded market reach by 45% post-rebrand"
        },
        {
          title: "Brand Recognition",
          description: "Achieved 92% positive feedback on new identity"
        }
      ]
    },
    {
      type: 'header',
      title: 'Strategic Approach',
      content: `1. Research & Analysis
- Comprehensive market research
- Customer sentiment analysis
- Competitor landscape review

2. Brand Strategy Development
- Core values identification
- Brand voice refinement
- Visual identity evolution

3. Design Implementation
- Logo and visual system redesign
- Digital asset creation
- Brand guidelines development

4. Market Launch
- Phased rollout strategy
- Stakeholder communication
- Digital platform updates`
    },
    {
      type: 'results',
      title: 'Impact & Recognition',
      content: {
        generated: "45% increase in brand awareness",
        doubled: "Digital engagement metrics",
        awarded: "Industry recognition for brand evolution",
        supported: "Successful transition across all channels"
      }
    },
    {
      type: 'gallery',
      title: 'Brand Evolution Journey',
      content: [
        {
          src: "/images/brand-evolution/architecture.jpg",
          alt: 'Brand Architecture',
          span: 2
        },
        {
          src: "/images/brand-evolution/dashboard.jpg",
          alt: 'Brand Guidelines',
          span: 1
        },
        {
          src: "/images/brand-evolution/metrics.jpg",
          alt: 'Brand Metrics',
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