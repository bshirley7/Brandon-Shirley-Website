import React from 'react';
import { Mail, Linkedin, PhoneCall } from 'lucide-react';
import { aboutInfo, contactInfo } from '../data/personal';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white/70 py-16 px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-white text-lg font-light mb-4">Location</h3>
            <p className="font-light">{contactInfo.location}</p>
            <p className="font-light">{contactInfo.availability}</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-light mb-4">Connect</h3>
            <div className="flex gap-6">
              <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href={`https://www.linkedin.com/in/${contactInfo.linkedin}`} className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                <PhoneCall size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-12 border-t border-white/10">
          <p className="text-sm font-light">© {currentYear} {aboutInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};