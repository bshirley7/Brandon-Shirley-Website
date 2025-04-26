import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

// Page imports
import HomePage from '@/pages/home';
import WorkPage from '@/pages/work';
import ProjectPage from '@/pages/project/[id]';
import AboutPage from '@/pages/about';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <SpeedInsights />
      <Analytics />
    </Router>
  );
};

export default App;
