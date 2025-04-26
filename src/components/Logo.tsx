import React from 'react';
import { Link } from 'react-router-dom';
import { logoInfo } from '../data/personal';

interface LogoProps {
  className?: string;
}

const sizeClasses = {
  icon: {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  },
  text: {
    sm: 'text-sm leading-4',
    md: 'text-lg leading-6',
    lg: 'text-xl leading-8',
    xl: 'text-2xl leading-10'
  }
};

export const Logo = ({ className = '' }: LogoProps) => {
  const LogoIcon = () => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={sizeClasses.icon[logoInfo.size.icon]}
    >
      <path d="M9 7L10 0H8L2 7V9H7L6 16H8L14 9L14 7H9Z" fill="currentColor"/>
    </svg>
  );

  if (logoInfo.iconOnly) {
    return (
      <Link to="/" className={`inline-flex items-center justify-center ${className}`}>
        <LogoIcon />
      </Link>
    );
  }

  return (
    <Link to="/" className={`inline-flex items-center justify-center gap-2 ${className}`}>
      <div className="flex items-center">
        <LogoIcon />
      </div>
      {logoInfo.showText && (
        <div className="flex items-center">
          <span className={`font-medium tracking-wide ${sizeClasses.text[logoInfo.size.text]}`}>
            {logoInfo.text}
          </span>
        </div>
      )}
    </Link>
  );
};