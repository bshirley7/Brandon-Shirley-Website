import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { insights } from '@/data/insights';
import { InsightCategory } from '@/types/insight';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories: { value: InsightCategory | 'All'; label: string }[] = [
  { value: 'All', label: 'All Insights' },
  { value: 'Case Study', label: 'Case Studies' },
  { value: 'Industry Analysis', label: 'Industry Analysis' },
  { value: 'Technical Deep Dive', label: 'Technical Deep Dives' },
  { value: 'Design Process', label: 'Design Process' },
  { value: 'Product Strategy', label: 'Product Strategy' },
];

export const InsightsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<InsightCategory | 'All'>('All');

  const filteredInsights = selectedCategory === 'All' 
    ? insights 
    : insights.filter(insight => insight.category === selectedCategory);

  const featuredInsight = insights.find(insight => insight.featured);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Enhanced Header Section */}
      <div className="pt-24 pb-20 px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-700 uppercase tracking-wider">Knowledge Hub</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-black leading-tight">
              Insights
            </h1>
            
            <p className="text-xl md:text-2xl text-black/70 max-w-4xl mx-auto leading-relaxed">
              Thoughts on product design, technology, and building meaningful digital experiences that make a difference.
            </p>
          </div>
        </div>
      </div>
      
      <main className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {featuredInsight && (
            <Link to={`/insights/${featuredInsight.slug}`} className="block mb-20 group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-black/10 hover:border-black/20 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  <div className="flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 text-sm mb-6">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">{featuredInsight.category}</span>
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-medium">Featured</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black group-hover:text-black/90 transition-colors leading-tight">
                      {featuredInsight.title}
                    </h2>
                    <p className="text-lg text-black/70 mb-8 leading-relaxed">{featuredInsight.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-black/60">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredInsight.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredInsight.readTime}
                      </span>
                      <span className="ml-auto flex items-center gap-2 group-hover:gap-3 transition-all text-blue-600 font-medium">
                        Read more <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <img 
                      src={featuredInsight.thumbnail} 
                      alt={featuredInsight.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </Link>
          )}

          <div className="flex flex-wrap gap-3 mb-16 justify-center">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-medium ${
                  selectedCategory === category.value
                    ? 'bg-black text-white border-black shadow-lg'
                    : 'bg-white text-black/70 border-black/20 hover:border-black/40 hover:text-black hover:shadow-md'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map(insight => (
              <Link 
                key={insight.id} 
                to={`/insights/${insight.slug}`}
                className="group block"
              >
                <article className="h-full bg-white rounded-xl overflow-hidden border border-black/10 hover:border-black/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:transform hover:scale-105">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={insight.thumbnail} 
                      alt={insight.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">{insight.category}</span>
                      <span className="text-black/60">{new Date(insight.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-black group-hover:text-black/90 transition-colors leading-tight">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-black/70 line-clamp-3 mb-6 leading-relaxed">{insight.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-black/60">
                        <Clock className="w-4 h-4" />
                        {insight.readTime}
                      </span>
                      <span className="flex items-center gap-2 group-hover:gap-3 transition-all text-blue-600 font-medium">
                        Read <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredInsights.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-gray-50 rounded-2xl p-12 border border-black/10">
                <p className="text-black/60 text-lg">No insights found in this category.</p>
                <p className="text-black/40 text-sm mt-2">Try selecting a different category to see more content.</p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};