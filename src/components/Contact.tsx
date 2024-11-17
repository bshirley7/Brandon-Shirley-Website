import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-white py-32 px-8" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Let's Create Something Together</h2>
          <p className="text-black/70 text-xl font-light max-w-2xl mx-auto">
            Interested in collaborating? Whether you have a project in mind or just want to explore possibilities, I'd love to hear from you.
          </p>
        </div>
        
        <div className="flex justify-center">
          <a
            href="mailto:studio@davidson.co"
            className="group flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full hover:bg-black/90 transition-colors"
          >
            <Mail size={20} />
            <span className="text-sm tracking-wider">GET IN TOUCH</span>
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};