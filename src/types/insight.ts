import { ProjectSection } from './project';

export interface Insight {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;
  category: InsightCategory;
  tags: string[];
  featured: boolean;
  thumbnail: string;
  readTime: string;
  author?: {
    name: string;
    role?: string;
    avatar?: string;
  };
  sections: ProjectSection[];
  relatedInsights?: string[];
}

export type InsightCategory = 
  | 'Case Study'
  | 'Industry Analysis'
  | 'Technical Deep Dive'
  | 'Design Process'
  | 'Product Strategy';

export interface InsightCardProps {
  insight: Insight;
  featured?: boolean;
}