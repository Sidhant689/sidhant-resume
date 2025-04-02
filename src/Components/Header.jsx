import React from 'react';
import { motion as M } from 'framer-motion';
import portfolioData from '../data/portfolioData';

const Header = () => {
  return (
    <M.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-primary to-secondary text-white py-24 px-8 rounded-b-3xl shadow-lg relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 left-0 opacity-10" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <M.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <M.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
            className="mb-8 p-1 rounded-full bg-white bg-opacity-20 backdrop-blur-sm"
          >
            <div className="w-32 h-32 rounded-full bg-white text-primary text-6xl flex items-center justify-center font-bold">
              {portfolioData.name.charAt(0)}
            </div>
          </M.div>

          <M.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
            className="text-5xl font-bold mb-4 text-center"
          >
            {portfolioData.name}
          </M.h1>

          <M.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-2xl text-white text-opacity-90 mb-8 text-center"
          >
            <span className="font-light">I'm a </span>
            <span className="font-bold">{portfolioData.title}</span>
          </M.p>

          <M.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4 mt-4"
          >
            {portfolioData.socialLinks.map((link, index) => (
              <M.a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center text-neutral-500 hover:bg-white hover:text-secondary transition-all duration-300 backdrop-blur-sm"
              >
                <link.icon size={20} />
              </M.a>
            ))}
          </M.div>

          <M.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 bg-white text-primary hover:text-secondary font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get In Touch
          </M.button>
        </M.div>
      </div>

      {/* Animated Wave SVG at the bottom */}
      <M.div 
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none"
        //initial={{ y: 10 }}
        //animate={{ y: [10, -10, 10] }}
        //transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        whileHover={{ y: -5 }}
      >
        <svg viewBox="0 0 1200 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,192L48,186.7C96,181,192,171,288,154.7C384,139,480,117,576,133.3C672,149,768,203,864,213.3C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,250L0,250Z" fill="white" />
        </svg>
      </M.div>
    </M.header>
  );
};

export default Header;
