import React from 'react';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({ 
  orientation = 'horizontal', 
  className = '' 
}) => {
  const baseClasses = 'bg-gray-200 dark:bg-gray-700';
  const orientationClasses = {
    horizontal: 'h-px w-full',
    vertical: 'w-px h-full'
  };

  return (
    <div className={`${baseClasses} ${orientationClasses[orientation]} ${className}`} />
  );
};