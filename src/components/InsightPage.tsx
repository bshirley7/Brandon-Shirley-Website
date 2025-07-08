import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ProjectSection } from './ProjectSection';
import { getInsightBySlug, getRelatedInsights } from '@/data/insights';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

export const InsightPage: React.FC = () => {
  const { slug } = useParams();
  const insight = slug ? getInsightBySlug(slug) : undefined;

  if (!insight) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Insight Not Found</h1>
          <Link to="/insights" className="text-white/70 hover:text-white transition-colors">
            Return to Insights
          </Link>
        </div>
      </div>
    );
  }

  const relatedInsights = getRelatedInsights(insight.id, insight.tags);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Enhanced Header Section */}
      <div className="pt-24 pb-16 px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-sm text-black/60 mb-8">
            <Link to="/insights" className="hover:text-black transition-colors">Insights</Link>
            <span className="text-black/30">/</span>
            <span className="text-black/90 font-medium">{insight.category}</span>
          </div>

          {/* Back Button */}
          <Link 
            to="/insights" 
            className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-all duration-300 mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>

          {/* Main Header Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
            {/* Title Section - Takes up more space */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-blue-700 uppercase tracking-wider">Insight</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                {insight.title}
              </h1>
              
              {insight.subtitle && (
                <p className="text-xl text-black/70 leading-relaxed max-w-2xl">
                  {insight.subtitle}
                </p>
              )}
            </div>

            {/* Metadata Section */}
            <div className="lg:col-span-2 space-y-8">
              {/* Publication Info */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-black/10">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-black/50" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-black/50">Published</h3>
                </div>
                <p className="text-black font-medium mb-2">
                  {new Date(insight.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </p>
                <div className="flex items-center gap-2 text-black/60">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{insight.readTime}</span>
                  <span className="text-black/30">•</span>
                  <span className="text-sm">{insight.category}</span>
                </div>
              </div>

              {/* Author Info */}
              {insight.author && (
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-black/10">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-black/50 mb-4">Author</h3>
                  <div className="flex items-center gap-4">
                    {insight.author.avatar && (
                      <img 
                        src={insight.author.avatar} 
                        alt={insight.author.name}
                        className="w-12 h-12 rounded-full ring-2 ring-black/10"
                      />
                    )}
                    <div>
                      <p className="text-black font-semibold">{insight.author.name}</p>
                      {insight.author.role && (
                        <p className="text-sm text-black/60">{insight.author.role}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      {insight.thumbnail && (
        <div className="px-8 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-xl overflow-hidden">
              <img 
                src={insight.thumbnail} 
                alt={insight.title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Content Sections - matching ProjectPage pattern */}
      <div className="max-w-6xl mx-auto">
        {insight.sections.map((section, index) => (
          <ProjectSection key={index} section={section} />
        ))}

        {/* Tags Section */}
        {insight.tags.length > 0 && (
          <section className="py-12 px-8 bg-white text-black">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-sm font-light uppercase tracking-wider text-black/50 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {insight.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-sm bg-black/5 border border-black/10 rounded-full text-black/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Related Insights Section */}
      {relatedInsights.length > 0 && (
        <section className="py-12 px-8 bg-white text-black border-t border-black/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-black">Related Insights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedInsights.map(related => (
                <Link 
                  key={related.id} 
                  to={`/insights/${related.slug}`}
                  className="group"
                >
                  <article className="bg-black/5 rounded-lg overflow-hidden border border-black/10 hover:border-black/20 transition-all duration-300">
                    {related.thumbnail && (
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={related.thumbnail} 
                          alt={related.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-black/60 mb-3">
                        <span>{related.category}</span>
                        <span>•</span>
                        <span>{related.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-black/90 transition-colors text-black">
                        {related.title}
                      </h3>
                      <p className="text-sm text-black/60 line-clamp-2">{related.excerpt}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back Link */}
      <div className="px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/insights"
            className="text-sm font-light uppercase tracking-wider text-black/50 hover:text-black transition-colors"
          >
            Back to Insights
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};