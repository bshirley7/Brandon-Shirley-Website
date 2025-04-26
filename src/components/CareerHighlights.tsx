import React from 'react';
import { careerInfo } from '@/data/personal/career-info';

export const CareerHighlights: React.FC = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-light text-black mb-12">Career Highlights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {careerInfo.highlights.map((highlight, index) => (
          <div key={index}>
            <div className="text-4xl font-light text-black mb-3">{highlight.value}</div>
            <p className="text-black/70 font-light leading-relaxed">{highlight.description}</p>
          </div>
        ))}
      </div>

      {careerInfo.awards.length > 0 && (
        <div className="pt-12 border-t border-black/10">
          <h3 className="text-xl font-light text-black mb-6">Notable Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {careerInfo.awards.map((award, index) => (
              <div key={index} className="space-y-2">
                <span className="block text-lg font-medium text-black">{award.category}</span>
                {award.organization && (
                  <span className="text-black/70 font-light">{award.organization}</span>
                )}
                {award.achievements.map((achievement, i) => (
                  <span key={i} className="text-black/70 font-light block">{achievement}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {careerInfo.partnerships.length > 0 && (
        <div className="pt-12 border-t border-black/10">
          <h3 className="text-xl font-light text-black mb-6">Notable Partnerships</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerInfo.partnerships.map((partnership, index) => (
              <div key={index}>
                <span className="block text-lg font-medium text-black mb-4">{partnership.category}</span>
                <div className="grid grid-cols-2 gap-4">
                  {partnership.companies.map((company, i) => (
                    <span key={i} className="text-black/70 font-light">{company}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerHighlights;
