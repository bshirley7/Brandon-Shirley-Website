import { Insight } from '@/types/insight';

export const tempestCostAnalysis: Insight = {
  id: 'tempest-cost-analysis',
  slug: 'tempest-cost-analysis',
  title: 'Building Netflix + Twitch + AdTech for $703.36',
  subtitle: 'How we combined 3 major platforms into one interactive streaming experience',
  excerpt: 'An interactive breakdown of building Netflix-style streaming, Twitch-style interactions, and advanced AdTech in a single platform for under $704.',
  date: '2025-07-08',
  category: 'Case Study',
  tags: ['AI Development', 'Cost Analysis', 'Streaming Platform', 'Hackathon', 'Full Stack'],
  featured: true,
  thumbnail: '/images/tempest/Tempest_Thumbnail_3x2.png',
  readTime: '4 min read',
  author: {
    name: 'Brandon Shirley',
    role: 'Product Designer & Developer',
    avatar: '/images/brandon-avatar.jpg'
  },
  sections: [
    {
      type: 'text',
      content: 'Last month, my team and I took on an ambitious challenge: build Netflix + Twitch + AdTech in 30 days for a streaming platform hackathon. The result? A fully integrated platform combining all three experiences that cost us just $703.36 to build.',
      layout: 'full'
    },
    {
      type: 'text',
      content: 'This isn\'t about theoretical savings or imaginary comparisons. These are the hard costs—every subscription, every tool license, every domain registration. This interactive breakdown shows exactly what $703.36 bought us: Netflix-style streaming, Twitch-style interactions, and advanced AdTech all in one platform.',
      layout: 'full'
    },
    {
      type: 'text',
      content: 'The following dashboard reveals every penny spent building a platform that delivers Netflix-quality streaming, Twitch-level engagement, and enterprise AdTech capabilities—all integrated seamlessly for 10,000+ concurrent users.',
      layout: 'full'
    },
    {
      type: 'dashboard',
      content: {
        type: 'TempestCostDashboard'
      },
      layout: 'full'
    },
    {
      type: 'header',
      content: 'Lessons Learned',
      layout: 'full'
    },
    {
      type: 'innovations',
      content: [
        {
          title: '🎵 Audio Will Eat Your Budget',
          description: 'Music licensing was 27% of our total cost ($189). We used Filmstro because we already had it - smart resource allocation.',
          badges: ['Use what you have', 'Quality matters', 'Don\'t start from scratch']
        },
        {
          title: '⏰ Hidden Time Sinks',
          description: '28 hours of "invisible" work that doesn\'t look like building but is essential.',
          badges: ['Music: 6hrs', 'Design: 10hrs', 'Rendering: 8hrs', 'Debugging: 4hrs']
        },
        {
          title: '💡 What We\'d Change',
          description: 'For someone starting fresh, budget could be ~$586 (17% lower) with different audio choices.',
          badges: ['Keep AI: $236', 'Add Monitoring: +$50', 'Cheaper Audio: -$150']
        }
      ],
      layout: 'full'
    },
    {
      type: 'statistics',
      content: [
        {
          value: '27%',
          label: 'Audio Cost',
          description: 'of total budget'
        },
        {
          value: '28hrs',
          label: 'Hidden Work',
          description: 'invisible time sinks'
        },
        {
          value: '17%',
          label: 'Potential Savings',
          description: 'with better choices'
        },
        {
          value: '$586',
          label: 'Optimized Budget',
          description: 'for next project'
        }
      ],
      layout: 'full'
    }
  ],
  relatedInsights: []
};