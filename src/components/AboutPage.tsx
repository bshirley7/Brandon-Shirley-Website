import React, { useEffect } from 'react';
import { Award, Briefcase, Lightbulb, Target } from 'lucide-react';
import CareerHighlights from './CareerHighlights';
import { Navigation } from './Navigation';
import Testimonials from './Testimonials';

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
                  Brandon Shirley
                </h1>
                <div className="w-20 h-1 bg-black/20 mb-8" />
                <p className="text-xl text-black/70 font-light leading-relaxed max-w-2xl">
                  Emmy Award-winning Creative Director transforming industries through innovative design and strategic vision.
                </p>
              </div>
              <div className="shrink-0">
                <img 
                  src="/images/main/headshot_sm.jpg"
                  alt="Brandon Shirley"
                  className="w-40 h-40 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-black/70" />
                  <h2 className="text-xl font-light text-black">Broadcast Innovation</h2>
                </div>
                <p className="text-black/70 font-light leading-relaxed">
                  Transformed broadcast media through pioneering virtual production solutions at E.W. Scripps Company, generating $1.4M in annual revenue. Led creative direction for multiple Emmy-winning broadcasts, successfully doubling primetime viewership through innovative virtual set design.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-6 h-6 text-black/70" />
                  <h2 className="text-xl font-light text-black">Strategic Leadership</h2>
                </div>
                <p className="text-black/70 font-light leading-relaxed">
                  As founder of LaBelle XL, partners with agencies and global brands including Samsung, LG, and AstraZeneca to drive marketplace impact. Serves Private Equity giants through strategic creative direction and innovative campaign development.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-6 h-6 text-black/70" />
                  <h2 className="text-xl font-light text-black">Innovation & Entrepreneurship</h2>
                </div>
                <p className="text-black/70 font-light leading-relaxed">
                  Co-founded Wisp Energy, developing patent-pending wind turbine technology that secured victories in multiple startup competitions and gained recognition at international energy conferences. Launched breakthrough product campaign for Malibu Solar, driving $40M in first-week sales.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-black/70" />
                  <h2 className="text-xl font-light text-black">Current Focus</h2>
                </div>
                <p className="text-black/70 font-light leading-relaxed">
                  Currently focused on developing applications that reimagine retirement planning for the next generation. Combines strategic thinking with innovative design to build solutions that address meaningful challenges, drawing on extensive experience in creative direction, entrepreneurship, and technology innovation.
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
