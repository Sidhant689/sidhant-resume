import React from 'react';
import { motion as M } from 'framer-motion';
import portfolioData from "../data/portfolioData";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 200 }
    }
  };

  return (
    <M.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gradient-to-b from-gray-50 to-white py-16 px-8 rounded-xl shadow-lg"
    >
      <M.div className="max-w-4xl mx-auto" variants={containerVariants}>
        <M.h2 
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          About Me
        </M.h2>
        <M.div 
          variants={itemVariants}
          className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
        >
          <p className="text-gray-600 leading-relaxed text-lg">
            Innovative and results-driven Full Stack Developer with 3+ years of comprehensive 
            experience in designing, developing, and implementing cutting-edge web applications 
            using .NET Core, React.js, and modern software engineering practices. Proven track 
            record of delivering high-performance, scalable solutions that drive technological 
            advancement and business growth.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <M.a 
              href={`mailto:${portfolioData.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Contact Me
            </M.a>
            <M.a 
              href="/Sidhant Resume.pdf" 
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-secondary text-secondary px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV
            </M.a>
          </div>
        </M.div>
      </M.div>
    </M.section>
  );
};

export default About;