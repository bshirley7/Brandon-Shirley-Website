import { Insight } from '@/types/insight';
import { tempestCostAnalysis } from './tempest-cost-analysis';

export const insights: Insight[] = [
  tempestCostAnalysis
];

export const getInsightBySlug = (slug: string): Insight | undefined => {
  return insights.find(insight => insight.slug === slug);
};

export const getInsightsByCategory = (category: string): Insight[] => {
  return insights.filter(insight => insight.category === category);
};

export const getFeaturedInsights = (): Insight[] => {
  return insights.filter(insight => insight.featured);
};

export const getRelatedInsights = (currentId: string, tags: string[]): Insight[] => {
  return insights
    .filter(insight => insight.id !== currentId)
    .map(insight => ({
      insight,
      relevance: insight.tags.filter(tag => tags.includes(tag)).length
    }))
    .filter(({ relevance }) => relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 3)
    .map(({ insight }) => insight);
};