import React from 'react';
import { Mail, Linkedin, PhoneCall } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white/70 py-16 px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-white text-lg font-light mb-4">Location</h3>
            <p className="font-light">Chicago, IL  |  Tampa, FL</p>
            <p className="font-light">Available Worldwide</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-light mb-4">Connect</h3>
            <div className="flex gap-6">
              <a href="mailto:brandon.shirley@gmail.com" className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/brandonshirley/" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="tel:8137655281" className="hover:text-white transition-colors">
                <PhoneCall size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10">
          <p className="text-sm font-light mb-4 md:mb-0">© {currentYear} Brandon Shirley. All rights reserved.</p>
          <div className="flex gap-8 text-sm font-light">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};