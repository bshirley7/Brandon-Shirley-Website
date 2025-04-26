import { Project } from './config/types';
import { sortProjectsByYear } from './config/utils';

// Import individual project data
import { testDisciplines } from './projects/test-disciplines';
import { testThisOut } from './projects/test-this-out';
import { webPlatformProject } from './projects/web-platform';
import { brandEvolutionProject } from './projects/brand-evolution';
import { motionStoryProject } from './projects/motion-story';
import { socialImpactProject } from './projects/social-impact';
import { eventExperienceProject } from './projects/event-experience';

// Combine and sort all projects
export const projects: Project[] = [

  webPlatformProject,
  brandEvolutionProject,
  motionStoryProject,
  socialImpactProject,
  eventExperienceProject,
];

export * from './config/types';
export * from './config/constants';
export * from './config/utils';
