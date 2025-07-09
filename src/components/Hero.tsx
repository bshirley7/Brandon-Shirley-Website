import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{
              height: '100vh',
              width: '177.77vh', // 16/9 ratio
              minWidth: '100vw',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%) scale(1.5)'
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/BDqjOII2Gx4?autoplay=1&mute=1&controls=0&loop=1&playlist=BDqjOII2Gx4&showinfo=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&vq=hd1080&iv_load_policy=3&fs=0&disablekb=1"
              title="Background video"
              className="absolute top-0 left-0 w-full h-full opacity-75"
              style={{ 
                pointerEvents: 'none',
                objectFit: 'cover'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
            />
          </div>
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex items-end pb-24">
        <div className="w-full px-6">
          <div className="max-w-[1152px] mx-auto">
            <motion.div 
              className="w-full max-w-[600px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="text-white/70 text-xl font-light tracking-wider uppercase mb-4">
                Creative Director & Full Stack Developer
              </div>
              <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Brandon Shirley
              </h1>
              <p className="text-white/70 text-2xl font-light mb-12 max-w-2xl leading-relaxed">
                Building Brands. Creating Change.
              </p>

              <Link to="/work">
                <motion.button 
                  className="text-white text-xs sm:text-sm tracking-wider border border-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 hover:bg-white hover:text-black transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  VIEW THE WORK
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        className="absolute left-1/2 bottom-12 z-20 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-5 h-8 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-1.5 bg-white/50 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
        <span className="text-white/50 text-xs tracking-wider uppercase">Scroll</span>
      </motion.div>
    </div>
  );
};
