export interface Credit {
  role: string;
  name: string;
}

export interface Innovation {
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt?: string;
  width?: number;  // Original width of image
  height?: number; // Original height of image
  span?: 1 | 2;    // How many columns to span in grid
  priority?: boolean; // For important images that should be larger
}

export type GalleryLayout = 'full' | 'split' | 'grid' | 'masonry';

export interface ProjectSection {
  type: 'header' | 'text' | 'image' | 'gallery' | 'video' | 'credits' | 'quote' | 'statistics' | 'bullets' | 'approach' | 'results' | 'value' | 'innovations' | 'impact' | 'dashboard';
  title?: string;
  content: string | string[] | GalleryImage[] | Credit[] | Record<string, string> | Array<{step: string; details: string[]}> | Innovation[] | { type: string };
  layout?: GalleryLayout;
  background?: 'black' | 'white';
  columns?: 1 | 2 | 3 | 4;  // Number of columns for masonry layout
}

export interface ProjectHero {
  type: 'image' | 'video' | 'youtube';
  src: string;
  videoType?: 'local' | 'youtube';
  youtubeId?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  controls?: boolean;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  image: string;
  hero?: ProjectHero;
  category: string;
  disciplines: string[];
  featured: boolean;
  sections: ProjectSection[];
}

// Alias for backward compatibility
export type ProjectType = Project;
