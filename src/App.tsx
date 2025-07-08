import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HomePage } from './components/HomePage';
import { ProjectPage } from './components/ProjectPage';
import { ProjectGalleryPage } from './components/ProjectGalleryPage';
import AboutPage from './components/AboutPage';
import { InsightsPage } from './components/InsightsPage';
import { InsightPage } from './components/InsightPage';
import { projects } from './data/projects';

// Wrapper component to handle project data fetching
const ProjectPageWrapper = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <a href="/" className="text-white/70 hover:text-white transition-colors">Return to Home</a>
      </div>
    </div>;
  }

  return <ProjectPage project={project} />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<ProjectGalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/:slug" element={<InsightPage />} />
        <Route path="/project/:id" element={<ProjectPageWrapper />} />
      </Routes>
      <SpeedInsights />
    </Router>
  );
}

export default App;
