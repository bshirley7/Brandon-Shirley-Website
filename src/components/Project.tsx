import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProjectType } from '../types';
import { Image } from './Image';

interface ProjectProps {
  project: ProjectType;
}

export const Project = ({ project }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/project/${project.id}`}
      className="relative w-full h-[400px] bg-black block overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image 
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover brightness-75 transition-transform duration-700 ease-out"
        style={{
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      <div 
        className={`absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 transition-opacity duration-1500 flex items-center justify-center
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="w-full px-6">
          <div className="max-w-[970px] mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-white/60 text-sm tracking-widest uppercase mb-4">
                {project.category}
              </div>
              <h3 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                {project.title}
              </h3>
              <p className="text-white/70 text-lg sm:text-xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
                {project.description}
              </p>
              <div className="flex justify-center gap-8">
                {project.disciplines.map((discipline, index) => (
                  <span key={index} className="text-white/50 text-sm tracking-wider">
                    {discipline}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Link>
  );
};
