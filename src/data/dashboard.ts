import { Tool, Category, ComparisonData, MetricCard } from '@/types/dashboard';

export const tools: Tool[] = [
  // AI Creation Suite
  {
    name: 'Anthropic Claude Code',
    cost: 100,
    category: 'ai',
    description: 'Advanced AI coding assistant that understands context and architecture',
    whatItIs: 'AI-powered development environment with deep architectural understanding',
    whatWeUsedItFor: 'Wrote 50,000+ lines of production code, architected the entire platform',
    alternativeCost: 0,
    alternativeName: 'Would require months of development',
    freeTrialAvailable: true,
    freeTierLimit: '200 messages/month',
    link: 'https://claude.ai/code'
  },
  {
    name: 'MidJourney',
    cost: 96,
    category: 'ai',
    description: 'AI image generation platform for creating professional visuals',
    whatItIs: 'Advanced AI image generation with artistic control',
    whatWeUsedItFor: 'Created 3 complete brand identities with logos and assets',
    alternativeCost: 0,
    alternativeName: 'Professional design work',
    freeTrialAvailable: true,
    freeTierLimit: '25 images',
    link: 'https://midjourney.com'
  },
  {
    name: 'Cursor',
    cost: 20,
    category: 'ai',
    description: 'AI-powered IDE that predicts your next code changes',
    whatItIs: 'Enhanced code editor with intelligent autocomplete',
    whatWeUsedItFor: '10x faster code editing with intelligent autocomplete',
    alternativeCost: 0,
    alternativeName: 'Developer productivity enhancement',
    freeTrialAvailable: true,
    freeTierLimit: '2,000 completions/month',
    link: 'https://cursor.sh'
  },
  {
    name: 'Bolt.new',
    cost: 20,
    category: 'ai',
    description: 'Full-stack web development in the browser with AI assistance',
    whatItIs: 'Browser-based development with AI-powered prototyping',
    whatWeUsedItFor: 'Rapid prototyping and instant deployment',
    alternativeCost: 0,
    alternativeName: 'Development environment setup',
    freeTrialAvailable: true,
    freeTierLimit: '5 projects',
    link: 'https://bolt.new'
  },
  {
    name: 'Google AI Studio',
    cost: 0,
    category: 'ai',
    description: 'Google\'s suite including VEO3 (video), Imagen 3 (images), and Gemini (text)',
    whatItIs: 'Complete AI creative suite for video, images, and text',
    whatWeUsedItFor: 'Created 13 professional video ads and promotional content',
    alternativeCost: 0,
    alternativeName: 'Professional video content creation',
    freeTrialAvailable: true,
    freeTierLimit: '$300 free credits',
    link: 'https://aistudio.google.com'
  },
  
  // Infrastructure
  {
    name: 'Convex',
    cost: 45.60,
    category: 'infrastructure',
    description: 'Real-time backend platform with built-in database and sync',
    whatItIs: 'Real-time database with automatic sync and serverless functions',
    whatWeUsedItFor: 'Handled all real-time features (chat, polls, reactions)',
    alternativeCost: 0,
    alternativeName: 'Real-time backend infrastructure',
    freeTrialAvailable: true,
    freeTierLimit: '1M function calls/month',
    link: 'https://convex.dev'
  },
  {
    name: 'Cloudflare',
    cost: 55,
    category: 'infrastructure',
    description: 'Global CDN and edge computing platform with R2 storage and Stream video',
    whatItIs: 'Global edge network with video streaming capabilities',
    whatWeUsedItFor: 'Delivered video content globally with <50ms latency',
    alternativeCost: 0,
    alternativeName: 'Global content delivery network',
    freeTrialAvailable: true,
    freeTierLimit: '10GB storage + 100GB bandwidth',
    link: 'https://cloudflare.com'
  },
  {
    name: 'GitHub Pro',
    cost: 48,
    category: 'infrastructure',
    description: 'Advanced code repository with private repos and Copilot included',
    whatItIs: 'Professional code hosting with AI pair programming',
    whatWeUsedItFor: 'Version control, CI/CD, and AI pair programming',
    alternativeCost: 0,
    alternativeName: 'Professional code hosting + AI tools',
    freeTrialAvailable: true,
    freeTierLimit: 'Public repos only',
    link: 'https://github.com'
  },
  {
    name: 'Clerk',
    cost: 25,
    category: 'infrastructure',
    description: 'Complete user management and authentication platform',
    whatItIs: 'Drop-in authentication with user management',
    whatWeUsedItFor: 'User signup, login, and session management',
    alternativeCost: 0,
    alternativeName: 'User authentication service',
    freeTrialAvailable: true,
    freeTierLimit: '5,000 monthly active users',
    link: 'https://clerk.com'
  },
  {
    name: 'Vercel',
    cost: 20,
    category: 'infrastructure',
    description: 'Frontend deployment platform with global edge network',
    whatItIs: 'Zero-config deployment with automatic scaling',
    whatWeUsedItFor: 'Zero-config deployment with automatic scaling',
    alternativeCost: 0,
    alternativeName: 'Professional deployment platform',
    freeTrialAvailable: true,
    freeTierLimit: '100GB bandwidth',
    link: 'https://vercel.com'
  },
  {
    name: 'Domain',
    cost: 14.77,
    category: 'infrastructure',
    description: '.com domain registration',
    whatItIs: 'Professional domain name registration',
    whatWeUsedItFor: 'Professional web presence',
    alternativeCost: 0,
    alternativeName: 'Professional domain name',
    freeTrialAvailable: false,
    link: 'https://domains.google.com'
  },
  
  // Production Suite
  {
    name: 'Filmstro',
    cost: 189,
    category: 'production',
    description: 'Professional music licensing platform for creators',
    whatItIs: 'Royalty-free music library with licensing',
    whatWeUsedItFor: 'Legal soundtrack for all video content',
    alternativeCost: 0,
    alternativeName: 'Professional music licensing',
    freeTrialAvailable: true,
    freeTierLimit: '30-day trial',
    link: 'https://filmstro.com'
  },
  {
    name: 'Adobe Creative Cloud',
    cost: 69.99,
    category: 'production',
    description: 'Complete creative suite (Premiere, After Effects, Photoshop)',
    whatItIs: 'Professional creative software suite',
    whatWeUsedItFor: 'Final video editing and polish',
    alternativeCost: 0,
    alternativeName: 'Professional creative suite',
    freeTrialAvailable: true,
    freeTierLimit: '7-day trial',
    link: 'https://adobe.com'
  }
];

export const categories: Category[] = [
  {
    name: 'AI Tools',
    emoji: '🤖',
    total: 236,
    color: '#8B5CF6',
    tools: tools.filter(t => t.category === 'ai')
  },
  {
    name: 'Application Infrastructure',
    emoji: '🏗️',
    total: 208.37,
    color: '#10B981',
    tools: tools.filter(t => t.category === 'infrastructure')
  },
  {
    name: 'Brand/Video Production',
    emoji: '🎬',
    total: 259,
    color: '#F59E0B',
    tools: tools.filter(t => t.category === 'production')
  }
];

export const comparisonData: ComparisonData[] = [
  {
    feature: 'Video Production',
    traditional: 195000,
    ourApproach: 50
  },
  {
    feature: 'Platform Development',
    traditional: 300000,
    ourApproach: 385
  },
  {
    feature: 'Music Licensing',
    traditional: 5000,
    ourApproach: 189
  },
  {
    feature: 'Design & Branding',
    traditional: 10000,
    ourApproach: 96
  }
];

export const getTotalCost = (): number => {
  return tools.reduce((sum, tool) => sum + tool.cost, 0);
};

export const metricCards: MetricCard[] = [
  {
    title: 'Total Cost',
    value: `$${getTotalCost().toFixed(2)}`,
    description: 'Complete Netflix-style platform',
    color: '#8B5CF6'
  },
  {
    title: 'Team Size',
    value: '2 people',
    description: 'Built the entire platform',
    color: '#10B981'
  },
  {
    title: 'Time to Build',
    value: '30 days',
    description: 'From concept to production',
    color: '#F59E0B'
  }
];

export const getToolsByCategory = (category: string): Tool[] => {
  return tools.filter(tool => tool.category === category);
};

export const getAlternativeCost = (): number => {
  return tools.reduce((sum, tool) => sum + tool.alternativeCost, 0);
};