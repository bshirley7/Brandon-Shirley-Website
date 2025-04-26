import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export interface RootLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen ${className}`}>
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout; 