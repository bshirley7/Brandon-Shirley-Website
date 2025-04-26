import { Project } from '../config/types';
import { PROJECT_CATEGORIES, DISCIPLINES } from '../config/constants';

export const webPlatformProject: Project = {
  id: 'web-platform',
  title: "Modern Web Platform",
  year: "2024",
  description: "A scalable web platform built with modern technologies, serving millions of users with real-time features.",
  image: "/images/web-platform/hero.jpg",
  hero: {
    type: 'image',
    src: "/images/web-platform/hero.jpg"
  },
  category: PROJECT_CATEGORIES.PRODUCT_LAUNCH,
  disciplines: [
    DISCIPLINES.STRATEGIC_LEAD,
    DISCIPLINES.INNOVATION_LEAD,
    DISCIPLINES.PRODUCTION_LEAD
  ],
  technologies: [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Next.js"
      ]
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "GraphQL",
        "PostgreSQL",
        "Redis"
      ]
    },
    {
      category: "DevOps",
      items: [
        "Docker",
        "Kubernetes",
        "AWS",
        "CI/CD Pipeline"
      ]
    },
    {
      category: "Testing",
      items: [
        "Jest",
        "Cypress",
        "Testing Library",
        "Performance Testing"
      ]
    }
  ],
  featured: true,
  sections: [
    {
      type: 'header',
      title: 'Mission',
      content: 'Create a high-performance web platform that scales to millions of users while maintaining sub-second response times and real-time capabilities.'
    },
    {
      type: 'header',
      title: 'Challenge',
      content: 'Building a system that could handle real-time updates, manage high concurrency, and maintain performance at scale while ensuring a seamless user experience.'
    },
    {
      type: 'innovations',
      title: 'Technical Achievements',
      content: [
        {
          title: "99.99% Uptime",
          description: "Achieved through distributed architecture and automated failover"
        },
        {
          title: "50ms Response Time",
          description: "Optimized through caching and edge computing"
        },
        {
          title: "1M+ Daily Users",
          description: "Scaled through microservices and load balancing"
        },
        {
          title: "Real-time Updates",
          description: "Implemented using WebSocket and event-driven architecture"
        }
      ]
    },
    {
      type: 'header',
      title: 'Technical Approach',
      content: `1. Architecture Design
- Microservices architecture for scalability
- Event-driven design for real-time features

2. Frontend Development
- React with TypeScript for type safety
- Server-side rendering for performance
- Tailwind CSS for responsive design

3. Backend Implementation
- Node.js microservices
- PostgreSQL and Redis for data storage
- GraphQL API for efficient data fetching

4. Infrastructure Setup
- Containerized deployment with Kubernetes
- CI/CD pipeline for automated deployments
- Monitoring and logging infrastructure`
    },
    {
      type: 'results',
      title: 'Project Outcomes',
      content: {
        generated: "Processed over 1 million requests per day",
        doubled: "Improved system performance by 200%",
        awarded: "Recognized for technical excellence",
        supported: "Enabled seamless scaling to handle peak loads"
      }
    },
    {
      type: 'gallery',
      title: 'Technical Diagrams & UI',
      content: [
        {
          src: "/images/web-platform/architecture.jpg",
          alt: 'System Architecture Diagram',
          span: 2
        },
        {
          src: "/images/web-platform/dashboard.jpg",
          alt: 'Dashboard Interface',
          span: 1
        },
        {
          src: "/images/web-platform/metrics.jpg",
          alt: 'Performance Metrics',
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