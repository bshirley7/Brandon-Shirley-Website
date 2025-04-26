import React, { useState, useEffect } from 'react';
import { Project } from '@/components/Project';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { projects } from '@/data/projects';

export interface WorkPageProps {
  // Add any specific props here
}

export const WorkPage: React.FC<WorkPageProps> = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 min-h-screen bg-black`}>
      <Navigation />
      
      {/* Header */}
      <div className="pt-32 pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Work
          </h1>
          <p className="text-white/70 text-xl font-light max-w-2xl">
            Explore my portfolio of projects spanning various industries and disciplines.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="bg-black">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default WorkPage; 