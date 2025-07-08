import React from 'react';
import { ProjectSection as ProjectSectionType, Credit, Innovation, GalleryImage } from '../types';
import { Image } from './Image';
import { TempestCostDashboard } from './dashboards/TempestCostDashboard';

interface ProjectSectionProps {
  section: ProjectSectionType;
}

export const ProjectSection = ({ section }: ProjectSectionProps) => {
  const renderMasonryGallery = (images: GalleryImage[]) => (
    <div>
      {section.title && (
        <h3 className="text-2xl font-bold mb-6 text-black">{section.title}</h3>
      )}
      <div 
        className={`grid gap-8 ${
          section.columns === 4 ? 'grid-cols-1 md:grid-cols-4' :
          section.columns === 3 ? 'grid-cols-1 md:grid-cols-3' :
          section.columns === 2 ? 'grid-cols-1 md:grid-cols-2' :
          section.columns === 1 ? 'grid-cols-1' :
          'grid-cols-1 md:grid-cols-2'
        }`}
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className={`${
              image.span === 2 ? 'md:col-span-2' : ''
            } ${
              image.priority ? 'row-span-2' : ''
            }`}
            style={{
              aspectRatio: image.width && image.height ? `${image.width}/${image.height}` : 'auto'
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <Image 
                src={image.src}
                alt={image.alt || `Gallery image ${index + 1}`}
                className="w-full h-full"
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGallery = (content: unknown) => {
    // Type guard for GalleryImage array
    const isGalleryImageArray = (arr: unknown): arr is GalleryImage[] => {
      return Array.isArray(arr) && arr.length > 0 && 'src' in arr[0];
    };

    // Type guard for string array
    const isStringArray = (arr: unknown): arr is string[] => {
      return Array.isArray(arr) && arr.length > 0 && typeof arr[0] === 'string';
    };

    if (section.layout === 'masonry' && isGalleryImageArray(content)) {
      return renderMasonryGallery(content);
    }

    if (isGalleryImageArray(content)) {
      const images = content.map(img => img.src);
      return renderDefaultGallery(images);
    }

    if (isStringArray(content)) {
      return renderDefaultGallery(content);
    }

    return null;
  };

  const renderDefaultGallery = (images: string[]) => (
    <div>
      {section.title && (
        <h3 className="text-2xl font-bold mb-6 text-black">{section.title}</h3>
      )}
      <div className={`grid grid-cols-1 ${section.layout === 'grid' ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8`}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-[300px]">
            <Image 
              src={image}
              alt={`${section.title || 'Gallery'} image ${index + 1}`}
              className="w-full h-full"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderStatistics = (stats: Record<string, string> | Array<{value: string; label: string; description: string}>) => {
    if (Array.isArray(stats)) {
      return (
        <div>
          {section.title && (
            <h3 className="text-2xl font-bold mb-6 text-black">{section.title}</h3>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-black/5 p-6 rounded-lg">
                <h4 className="text-black/60 text-sm uppercase tracking-wider mb-2">
                  {stat.label}
                </h4>
                <p className="text-black text-lg font-medium">{stat.value}</p>
                <p className="text-black/60 text-sm mt-1">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    return (
      <div>
        {section.title && (
          <h3 className="text-2xl font-bold mb-6 text-black">{section.title}</h3>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(stats).map(([key, value], index) => (
            <div key={index} className="bg-black/5 p-6 rounded-lg">
              <h4 className="text-black/60 text-sm uppercase tracking-wider mb-2">
                {key.replace(/_/g, ' ')}
              </h4>
              <p className="text-black text-lg font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderApproach = (steps: Array<{step: string; details: string[]}>) => (
    <div>
      {section.title && (
        <h3 className="text-2xl font-bold mb-6 text-black">{section.title}</h3>
      )}
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="border-l-2 border-black/10 pl-6">
            <h4 className="text-xl font-bold text-black mb-3">{step.step}</h4>
            <ul className="list-disc list-inside space-y-2 text-black/70">
              {step.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  const renderResults = (results: Record<string, string>) => (
    <div>
      {section.title && (
        <h3 className="text-2xl font-bold mb-6 text-black">{section.title}</h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(results).map(([key, value], index) => (
          <div key={index} className="bg-black/5 p-6 rounded-lg">
            <h4 className="text-black/60 text-sm uppercase tracking-wider mb-2">
              {key.replace(/_/g, ' ')}
            </h4>
            <p className="text-black text-lg">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderValue = (values: string[]) => (
    <div>
      {section.title && (
        <h3 className="text-2xl font-bold mb-6 text-black">{section.title}</h3>
      )}
      <ul className="space-y-4">
        {values.map((value, index) => (
          <li key={index} className="flex items-start gap-4">
            <span className="text-black/30 font-bold">{(index + 1).toString().padStart(2, '0')}</span>
            <span className="text-black/70">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderCredits = (credits: Credit[]) => (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-black">{section.title}</h3>
      <div className={`grid grid-cols-1 ${
        section.columns === 4 ? 'md:grid-cols-4' :
        section.columns === 3 ? 'md:grid-cols-3' :
        section.columns === 2 ? 'md:grid-cols-2' :
        section.columns === 1 ? 'grid-cols-1' :
        'grid-cols-1 md:grid-cols-2'
      } gap-x-8 gap-y-2`}>
        {credits.map((credit, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-black/70">{credit.role}</span>
            <span className="text-black font-medium">{credit.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderInnovations = (innovations: Innovation[] | Array<Innovation & {badges?: string[]}>) => (
    <div>
      {section.title && (
        <h3 className="text-2xl font-bold mb-6 text-black">{section.title}</h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {innovations.map((innovation, index) => (
          <div key={index} className="bg-black/5 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-black mb-3">{innovation.title}</h4>
            <p className="text-black/70 mb-4">{innovation.description}</p>
            {('badges' in innovation) && innovation.badges && (
              <div className="flex flex-wrap gap-2">
                {innovation.badges.map((badge, badgeIndex) => (
                  <span 
                    key={badgeIndex}
                    className="px-3 py-1 text-xs bg-black/10 border border-black/20 rounded-full text-black/70"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderImpact = (impacts: string[]) => (
    <div>
      {section.title && (
        <h3 className="text-2xl font-bold mb-6 text-black">{section.title}</h3>
      )}
      <ul className="space-y-4">
        {impacts.map((impact, index) => (
          <li key={index} className="flex items-start gap-4">
            <span className="text-black/30 font-bold">{(index + 1).toString().padStart(2, '0')}</span>
            <span className="text-black/70">{impact}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderContent = () => {
    switch (section.type) {
      case 'header':
      case 'text':
        return (
          <div className="prose prose-lg max-w-none">
            {section.title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                {section.title}
              </h2>
            )}
            <div className="text-black/70 text-lg leading-relaxed whitespace-pre-wrap">
              {typeof section.content === 'string' ? section.content : ''}
            </div>
          </div>
        );

      case 'gallery':
        return renderGallery(section.content);

      case 'statistics':
        return renderStatistics(section.content as Record<string, string> | Array<{value: string; label: string; description: string}>);

      case 'approach':
        return renderApproach(section.content as Array<{step: string; details: string[]}>);

      case 'results':
        return renderResults(section.content as Record<string, string>);

      case 'value':
        return renderValue(Array.isArray(section.content) ? section.content as string[] : []);

      case 'credits':
        return renderCredits(Array.isArray(section.content) ? section.content as Credit[] : []);

      case 'innovations':
        return renderInnovations(Array.isArray(section.content) ? section.content as Innovation[] | Array<Innovation & {badges?: string[]}> : []);

      case 'impact':
        return renderImpact(Array.isArray(section.content) ? section.content as string[] : []);

      case 'quote':
        return (
          <blockquote className="text-2xl font-light italic text-center my-12 text-black/80">
            {typeof section.content === 'string' ? section.content : ''}
          </blockquote>
        );

      case 'dashboard': {
        const dashboardContent = section.content as { type: string };
        if (dashboardContent?.type === 'TempestCostDashboard') {
          return <TempestCostDashboard />;
        }
        return null;
      }

      default:
        return null;
    }
  };

  return (
    <section 
      className={`py-12 px-8 ${section.background === 'black' ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <div className="max-w-4xl mx-auto">
        {renderContent()}
      </div>
    </section>
  );
};
