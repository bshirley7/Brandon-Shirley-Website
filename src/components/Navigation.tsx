import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Navigation = () => {
  return (
    <nav className="fixed w-full z-50 px-6 py-6 mix-blend-difference">
      <div className="max-w-[1152px] mx-auto flex justify-between items-center">
        <Link to="/" className="w-12 h-12 flex items-center justify-center">
          <Logo />
        </Link>
        <div className="flex gap-8 text-white text-sm font-light tracking-wider">
          <Link to="/" className="hover:opacity-70 transition-opacity">Home</Link>
          <Link to="/work" className="hover:opacity-70 transition-opacity">Work</Link>
          <Link to="/#studio" className="hover:opacity-70 transition-opacity">Studio</Link>
          <Link to="/#contact" className="hover:opacity-70 transition-opacity">Contact</Link>
        </div>
      </div>
    </nav>
  );
};
