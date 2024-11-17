import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { ProjectPage } from './components/ProjectPage';
import { ProjectGalleryPage } from './components/ProjectGalleryPage';
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
        <Route path="/project/:id" element={<ProjectPageWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
