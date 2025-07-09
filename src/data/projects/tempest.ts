import { Project } from './types';
import { PROJECT_CATEGORIES, DISCIPLINES } from './constants';

export const tempestProject: Project = {
  id: 'tempest',
  title: "Tempest: Interactive Streaming Reimagined",
  year: "2025",
  description: "Built for the Bolt.new Hackathon, Tempest transforms passive streaming into engaging, data-rich experiences with interactive overlays and smart monetization.",
  image: "/images/tempest/Tempest_Thumbnail_3x2.png",
  hero: {
    type: 'youtube',
    src: 'https://www.youtube.com/watch?v=DU5wovu2nJM'
  },
  category: PROJECT_CATEGORIES.PRODUCT_LAUNCH,
  disciplines: [
    DISCIPLINES.FULLSTACK_DEVELOPER,
    DISCIPLINES.DEVOPS,
    DISCIPLINES.AI_ML,
  ],
  featured: true,
  sections: [
    {
      type: 'header',
      title: 'Project Overview',
      content: 'Tempest is an interactive streaming platform that transforms passive video consumption into engaging, data-rich experiences. Built for the Bolt.new Hackathon in June 2025, this "Twitch for Education" platform overlays real-time engagement features on video content while generating valuable behavioral data for targeted advertising.'
    },
    {
      type: 'text',
      title: 'The Challenge',
      content: 'Universities invest heavily in streaming infrastructure ($100k+) but receive minimal return on investment. Current platforms offer basic video delivery without engagement features, monetization capabilities, or meaningful analytics. With over 130,000 developers competing in the hackathon, we needed to build something that demonstrated both technical innovation and real business value in just 30 days.'
    },
    {
      type: 'approach',
      title: 'Our Solution',
      content: [
        {
          step: 'Interactive Overlays',
          details: [
            'Real-time polls, emoji reactions, and chat integrated directly into the video experience',
            'Timeline markers for automated interaction triggers',
            'Rating systems and quiz functionality',
            'All interactions seamlessly overlaid without disrupting viewing'
          ]
        },
        {
          step: 'Smart Monetization',
          details: [
            'Behavioral targeting based on user interactions (not demographics)',
            'Seamless ad insertion without secondary play buttons',
            '10x CPM improvement through verified engagement data',
            'Custom ad pod management supporting multiple ads per break'
          ]
        },
        {
          step: 'Technical Architecture',
          details: [
            'Built with Next.js, TypeScript, and Supabase for core data persistence',
            'Convex integration for real-time features and future scalability',
            'Custom video player using Video.js with no third-party branding',
            'Dual video element system for seamless transitions',
            'Supports 5,000+ concurrent users with <500ms latency'
          ]
        }
      ]
    },
    {
      type: 'innovations',
      title: 'Key Features',
      content: [
        {
          title: 'TV Guide Interface',
          description: 'Professional channel grid showing 8 educational channels with scheduled content'
        },
        {
          title: 'Real-Time Chat',
          description: 'Twitch-like chat with slash commands (/poll, /quiz, /react) that trigger interactive features'
        },
        {
          title: 'Analytics Dashboard',
          description: 'Real-time engagement metrics, viewer analytics, and advertiser insights'
        },
        {
          title: 'Interactive Timeline System',
          description: 'Smart video timeline with pre-programmed trigger points for polls, quizzes, and reactions that activate automatically during playback'
        }
      ]
    },
    {
      type: 'gallery',
      title: 'Platform Gallery',
      layout: 'masonry',
      columns: 2,
      content: [
        {
          src: '/images/tempest/Tempest_Gallery_01_3x2.png',
          alt: 'Tempest TV Guide Interface',
          span: 2,
          priority: true
        },
        {
          src: '/images/tempest/Tempest_Gallery_02_3x2.png',
          alt: 'Interactive Video Player',
          span: 1
        },
        {
          src: '/images/tempest/Tempest_Gallery_03_3x2.png',
          alt: 'Real-time Chat and Polls',
          span: 1
        },
        {
          src: '/images/tempest/Tempest_Gallery_04_3x2.png',
          alt: 'Analytics Dashboard',
          span: 1
        },
        {
          src: '/images/tempest/Tempest_Gallery_05_3x2.png',
          alt: 'Ad Management System',
          span: 1
        },
        {
          src: '/images/tempest/Tempest_Gallery_06_3x2.png',
          alt: 'Mobile Interface',
          span: 2
        }
      ]
    },
    {
      type: 'text',
      title: 'Development Process',
      content: 'Working with a designer partner, we completed the project in 30 days using AI-accelerated development: 13 professional video ads created with VEO3, 3 complete fictional brand campaigns, 50,000+ lines of code written with Claude Code assistance. Total cost: $703.36. We strategically pivoted from live streaming to VOD focus after week one, demonstrating the "fail fast" mentality that ultimately strengthened the final product.'
    },
    {
      type: 'results',
      title: 'Results & Impact',
      content: [
        'Successfully built 70% of intended features with production-ready quality',
        'Existing university client with 183,000 students interested in implementation',
        'Clear revenue model: $300k annual SaaS fee + 45/55 ad revenue split',
        'Demonstrated how AI tools multiply builder productivity',
        'Created new paradigm for educational content monetization'
      ]
    },
    {
      type: 'results',
      title: 'Technologies Used',
      content: {
        'Frontend': 'Next.js, React, TypeScript, Tailwind CSS, Shadcn/ui',
        'Backend': 'Supabase (database), Convex (real-time features), Clerk (authentication), Cloudflare R2 (storage), Cloudflare Stream (video hosting)  ',
        'Video': 'Video.js, Custom overlay system',
        'AI Tools': 'Bolt.new, Claude Code, VEO3, Imagen4, MidJourney, Cursor, Claude 4 Opus, Claude 4 Sonnet, Gemini 2.5 Pro, Gemini 2.5 Flash',
        'Analytics': 'Custom real-time tracking with behavioral data collection',
        'Deployment': 'Vercel, Cloudflare CDN'
      }
    },
    {
      type: 'text',
      title: 'Key Takeaways',
      content: 'This project demonstrated that with modern AI tools and focused execution, a small team can build enterprise-grade platforms that traditionally require months and massive budgets. By embracing constraints and making strategic pivots, we created a platform that solves real problems for educational institutions while pioneering new approaches to interactive content monetization. The hackathon taught us that "failing" to build 100% of an impossible vision while successfully delivering 70% of valuable, working features is actually a profound success - especially when that 70% addresses a $1.6B market opportunity. Competing against 130,000+ developers pushed us to think bigger and execute faster than ever before.'
    },
    {
      type: 'credits',
      title: 'Team',
      content: [
        { role: 'Developer', name: 'Brandon Shirley' },
        { role: 'Creative Director', name: 'Brandon Shirley' },
        { role: 'Strategic Lead', name: 'Brandon Shirley' },
        { role: 'Innovation Lead', name: 'Brandon Shirley' },
        { role: 'Designer Partner', name: 'Nicholas Alexander' }
      ]
    }
  ]
};