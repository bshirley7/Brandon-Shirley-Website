import React, { useState, useEffect } from 'react';
import { Project } from '@/components/Project';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { About } from '@/components/About';
import { Hero } from '@/components/Hero';
import { projects } from '@/data/projects';

export interface HomePageProps {
  // Add any specific props here
}

export const HomePage: React.FC<HomePageProps> = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const featuredProjects = projects.filter(project => project.featured);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <Navigation />
      <Hero />
      <About />
      <div className="bg-black">
        {featuredProjects.map((project, index) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage; 