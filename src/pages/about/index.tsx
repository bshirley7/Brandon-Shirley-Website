import React, { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CareerHighlights } from '@/components/CareerHighlights';
import { Testimonials } from '@/components/Testimonials';
import { Award, Briefcase, Lightbulb, Target } from 'lucide-react';
import { aboutInfo } from '@/data/personal';

export interface AboutPageProps {
  // Add any specific props here
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1152px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-12">
            <div className="max-w-[600px]">
              <h1 className="text-4xl md:text-5xl font-light text-black mb-8">
                {aboutInfo.name}
              </h1>
              <div className="w-20 h-1 bg-black/20 mb-8" />
              <p className="text-xl text-black/70 font-light leading-relaxed">
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
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-[1152px] mx-auto">
          <h2 className="text-3xl font-light mb-12">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {aboutInfo.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-white/70" />
                  <h3 className="text-xl font-light">{exp.title}</h3>
                </div>
                <p className="text-white/70 font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Highlights Section */}
      <section className="py-24 px-6 bg-black/5">
        <div className="max-w-[1152px] mx-auto">
          <CareerHighlights />
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="py-24 px-6">
        <div className="max-w-[1152px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-black/70" />
            <h2 className="text-xl font-light text-black">Current Focus</h2>
          </div>
          <p className="text-black/70 font-light leading-relaxed max-w-2xl">
            {aboutInfo.currentFocus}
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1152px] mx-auto">
          <div className="max-w-4xl mx-auto">
            <Testimonials />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage; 