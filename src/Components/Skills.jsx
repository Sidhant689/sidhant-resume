import React, { useRef } from 'react';
import { motion as M, useInView } from 'framer-motion';
import portfolioData from '../data/portfolioData';

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.1 }
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

  // Group skills by category (assuming there's a category property in the skills data)
  // If not, you could add categories to your portfolioData
  const groupedSkills = portfolioData.skills.reduce((acc, skill) => {
    const category = skill.category ;//|| 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <M.section 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-gradient-to-b from-gray-50 to-white py-16 px-8 rounded-xl shadow-lg"
    >
      <M.h2 
        variants={itemVariants}
        className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
      >
        Technical Skills
      </M.h2>
      
      <M.div 
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        {/* If you don't have categories, you can remove this outer map and just show the skill cards */}
        {Object.keys(groupedSkills).length > 0 ? (
          Object.entries(groupedSkills).map(([category, skills]) => (
            <div key={category} className="mb-12 last:mb-0">
              <h3 className="text-xl font-semibold mb-6 text-primary">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map((skill, index) => (
                  <M.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    className="bg-white rounded-xl p-6 flex flex-col items-center justify-center shadow-md border border-gray-100 hover:border-secondary transition-all duration-300"
                  >
                    <div className="bg-secondary bg-opacity-10 p-4 rounded-full mb-4 text-gradient-to-r from-primary to-secondary hover:text-gray-100 hover:bg-opacity-10 transition-all duration-300">
                      <skill.icon className="text-3xl text-gray-100" />
                    </div>
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    {skill.level && (
                      <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                        <div 
                          className="bg-secondary h-2 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    )}
                  </M.div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {portfolioData.skills.map((skill, index) => (
              <M.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-xl p-6 flex flex-col items-center justify-center shadow-md border border-gray-100 hover:border-secondary transition-all duration-300"
              >
                <div className="bg-secondary bg-opacity-10 p-4 rounded-full mb-4">
                  <skill.icon className="text-3xl text-secondary" />
                </div>
                <span className="font-medium text-gray-800">{skill.name}</span>
                
              </M.div>
            ))}
          </div>
        )}
      </M.div>
    </M.section>
  );
}

export default Skills;