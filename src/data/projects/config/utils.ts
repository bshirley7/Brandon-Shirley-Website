import { Project } from './types';

export const sortProjectsByYear = (projects: Project[]): Project[] => {
  return [...projects].sort((a, b) => parseInt(b.year) - parseInt(a.year));
};

export const filterFeaturedProjects = (projects: Project[]): Project[] => {
  return projects.filter(project => project.featured);
};