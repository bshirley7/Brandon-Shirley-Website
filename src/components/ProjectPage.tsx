import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProjectType } from '../types';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ProjectSection } from './ProjectSection';
import { ProjectHero } from './ProjectHero';

interface ProjectPageProps {
  project: ProjectType;
}

export const ProjectPage = ({ project }: ProjectPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]); // Re-run when project changes

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Minimal Header */}
      <div className="pt-24 pb-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h2 className="text-sm font-light uppercase tracking-wider text-black/50 mb-2">Project</h2>
            <h1 className="text-3xl font-light text-black">{project.title}</h1>
          </div>
          <div>
            <h2 className="text-sm font-light uppercase tracking-wider text-black/50 mb-2">Year</h2>
            <p className="text-black">{project.year}</p>
          </div>
          <div>
            <h2 className="text-sm font-light uppercase tracking-wider text-black/50 mb-2">Category</h2>
            <div className="space-y-1">
              {project.disciplines.map((discipline, index) => (
                <p key={index} className="text-black">{discipline}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <ProjectHero 
        hero={project.hero}
        fallbackImage={project.image}
        title={project.title}
      />

      {/* Project Content */}
      <div className="max-w-6xl mx-auto">
        {project.sections.map((section, index) => (
          <ProjectSection key={index} section={section} />
        ))}
      </div>

      {/* Back Link */}
      <div className="px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/work"
            className="text-sm font-light uppercase tracking-wider text-black/50 hover:text-black transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};
