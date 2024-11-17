import React, { useState, useEffect } from 'react';
import { Project } from './Project';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { About } from './About';
import { Hero } from './Hero';
import { projects } from '../data/projects';

export const HomePage = () => {
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
          <Project key={index} project={project} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
