export interface Tool {
  name: string;
  cost: number;
  category: 'ai' | 'infrastructure' | 'production';
  description: string;
  whatItIs: string;
  whatWeUsedItFor: string;
  alternativeCost: number;
  alternativeName: string;
  freeTrialAvailable: boolean;
  freeTierLimit?: string;
  link?: string;
}

export interface Category {
  name: string;
  emoji: string;
  total: number;
  color: string;
  tools: Tool[];
}

export interface ComparisonData {
  feature: string;
  traditional: number;
  ourApproach: number;
}

export interface MetricCard {
  title: string;
  value: string;
  description: string;
  color: string;
}

export interface CalculatorState {
  budget: number;
  features: string[];
  recommendedTools: Tool[];
  totalCost: number;
}