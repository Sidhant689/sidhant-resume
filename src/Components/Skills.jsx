import React, { useRef } from 'react';
import { motion as M, useInView } from 'framer-motion';
import portfolioData from '../data/portfolioData';

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <M.section 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-white shadow-md rounded-lg p-8"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <M.div 
        className="flex flex-wrap justify-center gap-6"
        variants={containerVariants}
      >
        {portfolioData.skills.map((skill, index) => (
          <M.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.2 }
            }}
            className="flex flex-col items-center p-4 hover:bg-gray-100 rounded-lg transition-all cursor-pointer"
          >
            <skill.icon className="text-4xl text-secondary mb-2" />
            <span className="text-md">{skill.name}</span>
          </M.div>
        ))}
      </M.div>
    </M.section>
  );
}

export default Skills;