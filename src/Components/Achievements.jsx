import React from 'react'
import portfolioData from '../data/portfolioData';
import { FaTrophy } from 'react-icons/fa';

const Achievements = () => {
  return (
    <section className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Achievements</h2>
      <div className="space-y-4">
        {portfolioData.achievements.map((achievement, index) => (
          <div 
            key={index} 
            className="flex items-center bg-gray-50 p-4 rounded-lg"
          >
            <FaTrophy className="text-secondary mr-4 text-2xl" />
            <p className="text-gray-700">{achievement}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements