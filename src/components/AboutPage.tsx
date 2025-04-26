import React, { useEffect } from 'react';
import { Award, Briefcase, Lightbulb, Target } from 'lucide-react';
import CareerHighlights from './CareerHighlights';
import { Navigation } from './Navigation';
import Testimonials from './Testimonials';
import { aboutInfo } from '../data/personal';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center gap-12 mb-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-light text-black mb-8">
                  {aboutInfo.name}
                </h1>
                <div className="w-20 h-1 bg-black/20 mb-8" />
                <p className="text-xl text-black/70 font-light leading-relaxed max-w-2xl">
                  {aboutInfo.title}
                </p>
              </div>
              <div className="shrink-0">
                <img 
                  src="/images/main/headshot_sm.jpg"
                  alt={aboutInfo.name}
                  className="w-40 h-40 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {aboutInfo.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-6 h-6 text-black/70" />
                    <h2 className="text-xl font-light text-black">{exp.title}</h2>
                  </div>
                  <p className="text-black/70 font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-black/70" />
                  <h2 className="text-xl font-light text-black">Current Focus</h2>
                </div>
                <p className="text-black/70 font-light leading-relaxed">
                  {aboutInfo.currentFocus}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Highlights Section */}
        <section className="py-24 bg-black/5">
          <div className="max-w-6xl mx-auto px-8">
            <CareerHighlights />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <Testimonials />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
