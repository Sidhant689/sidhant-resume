import React, { useRef } from 'react';
import { motion as M, useInView } from 'framer-motion';
import portfolioData from '../data/portfolioData';
import { FaTrophy } from 'react-icons/fa';

const Achievements = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
        className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
      >
        Achievements
      </M.h2>
      <M.div className="max-w-4xl mx-auto space-y-6" variants={containerVariants}>
        {portfolioData.achievements.map((achievement, index) => (
          <M.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="flex items-center bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary hover:shadow-lg transition-all duration-300"
          >
            <div className="bg-secondary bg-opacity-10 p-3 rounded-full mr-6">
              <FaTrophy className="text-white text-2xl" />
            </div>
            <div>
              <p className="text-gray-700 font-medium">{achievement}</p>
            </div>
          </M.div>
        ))}
      </M.div>
    </M.section>
  );
};

export default Achievements;