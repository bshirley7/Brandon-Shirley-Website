import { ProjectData } from '../types';

export const project01: ProjectData = {
  id: "project-01",
  title: "Example Project",
  featured: true,
  thumbnail: "/images/projects/example/thumbnail.jpg",
  sections: [
    {
      type: "header",
      title: "Overview",
      content: "This is an example project showcasing the template structure. Replace this content with your actual project details."
    },
    {
      type: "innovations",
      title: "Key Features",
      content: [
        {
          title: "Feature One",
          description: "Description of the first key feature"
        },
        {
          title: "Feature Two",
          description: "Description of the second key feature"
        }
      ]
    },
    {
      type: "gallery",
      title: "Project Gallery",
      layout: "masonry",
      columns: 2,
      content: [
        {
          src: "/images/projects/example/gallery-01.jpg",
          alt: "Example Gallery Image 1",
          span: 1
        },
        {
          src: "/images/projects/example/gallery-02.jpg",
          alt: "Example Gallery Image 2",
          span: 1
        }
      ]
    },
    {
      type: "results",
      title: "Project Impact",
      content: {
        users: "10,000+ users reached",
        engagement: "85% engagement rate",
        conversion: "40% conversion rate"
      }
    },
    {
      type: "credits",
      title: "Project Team",
      content: [
        { role: "Project Lead", name: "Team Member 1" },
        { role: "Developer", name: "Team Member 2" },
        { role: "Designer", name: "Team Member 3" }
      ]
    }
  ]
}; 