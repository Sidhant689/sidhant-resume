import React, { useRef } from 'react';
import { motion as M, useInView } from 'framer-motion';
import portfolioData from '../data/portfolioData';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="bg-gradient-to-b from-gray-50 to-white py-16 px-8 rounded-xl shadow-lg"
    >
      <M.h2 
        variants={itemVariants}
        className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
      >
        Professional Experience
      </M.h2>
      
      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] h-full w-1 bg-gray-200"></div>
        
        <M.div variants={containerVariants} className="space-y-12">
          {portfolioData.experiences.map((exp, index) => (
            <M.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-left' : 'md:pl-12 md:text-right'}`}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary bg-opacity-10 text-gray-100 mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-2">{exp.role}</h3>
                  <p className="text-gray-600 mb-4">{exp.company}</p>
                  <ul className={`text-gray-600 space-y-2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start">
                        <span className="text-secondary mr-2 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="md:flex-[0_0_60px] flex md:justify-center relative my-4 md:my-0">
                <div className="h-10 w-10 rounded-full bg-secondary border-4 border-white shadow-md z-10"></div>
              </div>
              
              <div className="flex-1 md:hidden"></div>
            </M.div>
          ))}
        </M.div>
      </div>
    </M.section>
  );
};

export default Experience;