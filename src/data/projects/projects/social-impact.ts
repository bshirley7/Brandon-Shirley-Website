import { Project } from '../config/types';
import { PROJECT_CATEGORIES, DISCIPLINES } from '../config/constants';

export const socialImpactProject: Project = {
  id: 'social-impact',
  title: "Social Impact Campaign",
  year: "2024",
  description: "A multi-channel awareness campaign that drove meaningful social change through strategic communication and community engagement.",
  image: "/images/social-impact/hero.jpg",
  hero: {
    type: 'image',
    src: "/images/social-impact/hero.jpg"
  },
  category: PROJECT_CATEGORIES.IMPACT_CAMPAIGN,
  disciplines: [
    DISCIPLINES.STRATEGIC_LEAD,
    DISCIPLINES.BRAND_STRATEGIST,
    DISCIPLINES.PRODUCTION_LEAD
  ],
  technologies: [
    {
      category: "Digital Marketing",
      items: [
        "Social Media Platforms",
        "Email Marketing",
        "Content Management Systems",
        "Analytics Tools"
      ]
    },
    {
      category: "Design",
      items: [
        "Adobe Creative Suite",
        "Canva",
        "Figma",
        "Video Editing Software"
      ]
    },
    {
      category: "Analytics",
      items: [
        "Google Analytics",
        "Social Media Analytics",
        "Survey Tools",
        "Impact Measurement Platforms"
      ]
    }
  ],
  featured: false,
  sections: [
    {
      type: 'header',
      title: 'Mission',
      content: 'Create a powerful awareness campaign that educates, inspires action, and drives measurable social impact through innovative storytelling and community engagement.'
    },
    {
      type: 'header',
      title: 'Challenge',
      content: 'Developing a campaign that effectively communicates complex social issues while motivating meaningful action and measurable change.'
    },
    {
      type: 'innovations',
      title: 'Campaign Impact',
      content: [
        {
          title: "Community Reach",
          description: "Engaged over 100,000 community members"
        },
        {
          title: "Action Rate",
          description: "85% of audience took measurable action"
        },
        {
          title: "Media Coverage",
          description: "Featured in major news outlets"
        },
        {
          title: "Policy Change",
          description: "Influenced local policy development"
        }
      ]
    },
    {
      type: 'header',
      title: 'Strategic Approach',
      content: `1. Research & Planning
- Community needs assessment
- Stakeholder interviews
- Message framework development

2. Campaign Development
- Creative strategy
- Content creation
- Channel strategy

3. Community Engagement
- Local partnerships
- Event series
- Digital activation

4. Impact Measurement
- Data collection
- Impact assessment
- Outcome reporting`
    },
    {
      type: 'results',
      title: 'Campaign Outcomes',
      content: {
        generated: "100,000+ community engagements",
        doubled: "Awareness metrics year-over-year",
        awarded: "Recognition for social impact",
        supported: "Policy changes and community action"
      }
    },
    {
      type: 'gallery',
      title: 'Campaign Highlights',
      content: [
        {
          src: "/images/social-impact/architecture.jpg",
          alt: 'Campaign Strategy',
          span: 2
        },
        {
          src: "/images/social-impact/dashboard.jpg",
          alt: 'Impact Metrics',
          span: 1
        },
        {
          src: "/images/social-impact/metrics.jpg",
          alt: 'Community Engagement',
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