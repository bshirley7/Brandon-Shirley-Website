import React from 'react';

const CareerHighlights = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-light text-black mb-12">Career Highlights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="text-4xl font-light text-black mb-3">Award-Winning</div>
          <p className="text-black/70 font-light leading-relaxed">Multiple Emmy, Edward R. Murrow, and Peabody award recipient for excellence in creative direction and investigative journalism</p>
        </div>

        <div>
          <div className="text-4xl font-light text-black mb-3">$1.4M</div>
          <p className="text-black/70 font-light leading-relaxed">Annual revenue generated through innovative virtual set solutions at E.W. Scripps Company</p>
        </div>

        <div>
          <div className="text-4xl font-light text-black mb-3">$40M</div>
          <p className="text-black/70 font-light leading-relaxed">First-week sales achieved through groundbreaking Malibu Solar campaign</p>
        </div>

        <div>
          <div className="text-4xl font-light text-black mb-3">2x Growth</div>
          <p className="text-black/70 font-light leading-relaxed">Doubled primetime viewership through innovative virtual set design</p>
        </div>
      </div>

      <div className="pt-12 border-t border-black/10">
        <h3 className="text-xl font-light text-black mb-6">Notable Awards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <span className="block text-lg font-medium text-black">Emmy Awards</span>
            <span className="text-black/70 font-light">NATAS Suncoast Regional</span>
            <span className="text-black/70 font-light block">2019 - Up In Flames</span>
            <span className="text-black/70 font-light block">2019 - Taking Action Against Domestic Violence</span>
          </div>
          <div className="space-y-2">
            <span className="block text-lg font-medium text-black">Edward R. Murrow</span>
            <span className="text-black/70 font-light">2020 - Up In Flames</span>
          </div>
          <div className="space-y-2">
            <span className="block text-lg font-medium text-black">Peabody Award</span>
            <span className="text-black/70 font-light">2014 - Under The Radar</span>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-black/10">
        <h3 className="text-xl font-light text-black mb-6">Notable Partnerships</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="block text-lg font-medium text-black mb-4">Private Equity</span>
            <div className="grid grid-cols-2 gap-4">
              <span className="text-black/70 font-light">KKR</span>
              <span className="text-black/70 font-light">Bain Capital</span>
              <span className="text-black/70 font-light">WCAS</span>
              <span className="text-black/70 font-light">Advent International</span>
            </div>
          </div>
          
          <div>
            <span className="block text-lg font-medium text-black mb-4">Technology</span>
            <div className="grid grid-cols-2 gap-4">
              <span className="text-black/70 font-light">Samsung</span>
              <span className="text-black/70 font-light">LG</span>
              <span className="text-black/70 font-light">Verizon Wireless</span>
              <span className="text-black/70 font-light">Motorola</span>
            </div>
          </div>
          
          <div>
            <span className="block text-lg font-medium text-black mb-4">Healthcare</span>
            <div className="grid grid-cols-2 gap-4">
              <span className="text-black/70 font-light">Pfizer</span>
              <span className="text-black/70 font-light">AstraZeneca</span>
              <span className="text-black/70 font-light">Lilly</span>
              <span className="text-black/70 font-light">Matter Health</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHighlights;
