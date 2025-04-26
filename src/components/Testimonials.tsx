import React, { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/personal';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div className="relative">
      <div className="absolute -top-12 -left-12 text-black/5">
        <Quote size={120} />
      </div>
      <div className="relative">
        <div className="space-y-8">
          <div className="space-y-4">
            {Array.isArray(currentTestimonial.quote) ? (
              currentTestimonial.quote.map((paragraph, index) => (
                <p key={index} className="text-xl text-black/70 font-light leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-xl text-black/70 font-light leading-relaxed">
                {currentTestimonial.quote}
              </p>
            )}
          </div>
          <div>
            <p className="text-lg font-medium text-black">{currentTestimonial.author}</p>
            <p className="text-black/70 font-light">{currentTestimonial.title}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeIndex ? 'bg-black' : 'bg-black/20'
            }`}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
