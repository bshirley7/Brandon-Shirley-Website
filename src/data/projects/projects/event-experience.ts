import { Project } from '../config/types';
import { PROJECT_CATEGORIES, DISCIPLINES } from '../config/constants';

export const eventExperienceProject: Project = {
  id: 'event-experience',
  title: "Immersive Event Experience",
  year: "2024",
  description: "A groundbreaking live event that combined digital technology, interactive elements, and stunning visuals to create an unforgettable audience experience.",
  image: "/images/event-experience/hero.jpg",
  hero: {
    type: 'image',
    src: "/images/event-experience/hero.jpg"
  },
  category: PROJECT_CATEGORIES.LIVE_EVENT,
  disciplines: [
    DISCIPLINES.EVENT_DESIGN,
    DISCIPLINES.PRODUCTION_LEAD,
    DISCIPLINES.MOTION_GRAPHICS
  ],
  technologies: [
    {
      category: "Interactive Technology",
      items: [
        "Motion Sensors",
        "AR/VR Systems",
        "Interactive Displays",
        "Gesture Control"
      ]
    },
    {
      category: "Audio Visual",
      items: [
        "Projection Mapping",
        "LED Walls",
        "Spatial Audio",
        "Lighting Control"
      ]
    },
    {
      category: "Event Management",
      items: [
        "Ticketing Systems",
        "Crowd Management",
        "Access Control",
        "Event Analytics"
      ]
    },
    {
      category: "Content Creation",
      items: [
        "Motion Graphics",
        "3D Animation",
        "Video Production",
        "Live Streaming"
      ]
    }
  ],
  featured: false,
  sections: [
    {
      type: 'header',
      title: 'Mission',
      content: 'Design and execute an innovative live event that pushes the boundaries of audience engagement through seamless integration of technology, design, and storytelling.'
    },
    {
      type: 'header',
      title: 'Challenge',
      content: 'Creating a cohesive experience that combines physical and digital elements while ensuring flawless technical execution and maintaining audience engagement.'
    },
    {
      type: 'innovations',
      title: 'Event Highlights',
      content: [
        {
          title: "Interactive Elements",
          description: "Real-time audience participation features"
        },
        {
          title: "Technical Integration",
          description: "Seamless blend of physical and digital"
        },
        {
          title: "Custom Technology",
          description: "Proprietary interaction systems"
        },
        {
          title: "Audience Response",
          description: "95% positive feedback rating"
        }
      ]
    },
    {
      type: 'header',
      title: 'Production Process',
      content: `1. Concept Development
- Experience design
- Technical requirements
- Content strategy

2. Pre-production
- Venue optimization
- Technical setup
- Content creation

3. Technical Integration
- System testing
- Rehearsals
- Final adjustments

4. Event Execution
- Live operation
- Real-time management
- Audience engagement`
    },
    {
      type: 'results',
      title: 'Event Success',
      content: {
        generated: "Record-breaking attendance",
        doubled: "Expected engagement metrics",
        awarded: "Best Live Experience award",
        supported: "Multiple successful tour dates"
      }
    },
    {
      type: 'gallery',
      title: 'Event Documentation',
      content: [
        {
          src: "/images/event-experience/architecture.jpg",
          alt: 'Event Layout',
          span: 2
        },
        {
          src: "/images/event-experience/dashboard.jpg",
          alt: 'Interactive Installations',
          span: 1
        },
        {
          src: "/images/event-experience/metrics.jpg",
          alt: 'Audience Engagement',
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