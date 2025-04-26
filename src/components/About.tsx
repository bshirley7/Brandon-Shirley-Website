import React from 'react';
import { Mail, Linkedin, PhoneCall } from 'lucide-react';
import { aboutInfo, contactInfo } from '../data/personal';

export const About = () => {
  return (
    <div className="bg-white py-32 px-8" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
        <div>
          <h2 className="text-lg font-light text-black mb-4">About</h2>
          <div className="w-full h-px bg-black/20 mb-8" />
          <p className="text-black/70 font-light leading-relaxed">
            {aboutInfo.bio}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-light text-black mb-4">Services</h2>
          <div className="w-full h-px bg-black/20 mb-8" />
          <div className="space-y-2 text-black/70 font-light">
            {aboutInfo.services.map((service, index) => (
              <p key={index}>{service}</p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-light text-black mb-4">Contact</h2>
          <div className="w-full h-px bg-black/20 mb-8" />
          <p className="text-black/70 font-light leading-relaxed mb-6">
            {contactInfo.availability}
          </p>
          <div className="space-y-4">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-black/70 hover:text-black transition-colors">
              <Mail size={20} />
              <span className="font-light">{contactInfo.email}</span>
            </a>
            <a href={`https://www.linkedin.com/in/${contactInfo.linkedin}`} className="flex items-center gap-3 text-black/70 hover:text-black transition-colors">
              <Linkedin size={20} />
              <span className="font-light">/in/{contactInfo.linkedin}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
