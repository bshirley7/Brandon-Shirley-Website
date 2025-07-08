import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm ${className}`}>
    {children}
  </div>
);

export const CardHeader: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`p-6 pb-4 ${className}`}>
    {children}
  </div>
);

export const CardTitle: React.FC<CardProps> = ({ className = '', children }) => (
  <h3 className={`text-lg font-semibold text-gray-900 dark:text-gray-100 ${className}`}>
    {children}
  </h3>
);

export const CardContent: React.FC<CardProps> = ({ className = '', children }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);