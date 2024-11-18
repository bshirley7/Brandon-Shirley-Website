import React from 'react';
import { Mail, Linkedin, PhoneCall } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-white py-32 px-8" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
        <div>
          <h2 className="text-lg font-light text-black mb-4">About</h2>
          <div className="w-full h-px bg-black/20 mb-8" />
          <p className="text-black/70 font-light leading-relaxed">
          Emmy Award-winning Creative Director and founder of LaBelle XL, partnering with Private Equity firms and global brands like Samsung and AstraZeneca. Led multiple Emmy-winning broadcasts and launched successful campaigns including Malibu Solar ($40M first-week sales). Currently developing innovative solutions for retirement planning.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-light text-black mb-4">Services</h2>
          <div className="w-full h-px bg-black/20 mb-8" />
          <div className="space-y-2 text-black/70 font-light">
            <p>Creative Direction</p>
            <p>Business Development</p>
            <p>Product Innovation</p>
            <p>Strategic Advisor</p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-light text-black mb-4">Contact</h2>
          <div className="w-full h-px bg-black/20 mb-8" />
          <p className="text-black/70 font-light leading-relaxed mb-6">
            Whether you're launching a product, seeking strategic guidance, or exploring venture opportunities, let's discuss how we can create impact together.
          </p>
          <div className="space-y-4">
            <a href="mailto:brandon.shirley@gmail.com" className="flex items-center gap-3 text-black/70 hover:text-black transition-colors">
              <Mail size={20} />
              <span className="font-light">brandon.shirley@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/brandonshirley/" className="flex items-center gap-3 text-black/70 hover:text-black transition-colors">
              <Linkedin size={20} />
              <span className="font-light">/in/brandonshirley</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
