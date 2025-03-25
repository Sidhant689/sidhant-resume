import React, { useRef } from 'react';
import { motion as M, useInView } from 'framer-motion';
import portfolioData from '../data/portfolioData';

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
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
      <h2 className="text-3xl font-bold text-center mb-6">Notable Projects</h2>
      <M.div 
        className="grid md:grid-cols-2 gap-6"
        variants={containerVariants}
      >
        {portfolioData.projects.map((project, index) => (
          <M.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            className="border rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="bg-gray-100 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500">{project.period}</p>
          </M.div>
        ))}
      </M.div>
    </M.section>
  );
}

export default Projects;