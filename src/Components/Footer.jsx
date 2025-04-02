import React from 'react';
import { motion as M } from 'framer-motion';
import portfolioData from '../data/portfolioData';

const Footer = () => {
  return (
    <M.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-secondary to-primary text-white py-8 px-6 rounded-t-3xl shadow-lg relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 right-0 opacity-10" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-footer" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-footer)" />
        </svg>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <M.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center space-x-4 mb-4"
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
        
        <M.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-sm text-white text-opacity-90"
        >
          © {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.
        </M.p>
      </div>

      {/* Animated Wave SVG at the top */}
      <M.div 
        className="absolute top-0 left-0 w-full overflow-hidden leading-none"
        initial={{ y: -10 }}
        //animate={{ y: [-10, 10, -10] }}
        //transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        whileHover={{ y: 5 }}
      >
        <svg viewBox="0 0 1200 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,64L48,74.7C96,85,192,107,288,106.7C384,107,480,85,576,85.3C672,85,768,107,864,122.7C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,0L0,0Z" fill="white" />
        </svg>
      </M.div>
    </M.footer>
  );
};

export default Footer;
