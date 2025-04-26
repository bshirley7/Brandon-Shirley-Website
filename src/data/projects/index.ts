import { Project } from './types';
import { sortProjectsByYear } from './utils';

// Import individual project data
import { huviProject } from './huvi';
import { domesticViolenceProject } from './domestic-violence';
import { scrippsHowardProject } from './scripps-howard';
import { octaneProject } from './octane';
import { tritonProject } from './triton';
import { scripps65Project } from './scripps-howard-65';

// Combine and sort all projects
export const projects: Project[] = sortProjectsByYear([
  huviProject,
  domesticViolenceProject,
  scrippsHowardProject,
  octaneProject,
  tritonProject,
  scripps65Project,
]);

export * from './types';
export * from './constants';
export * from './utils';
