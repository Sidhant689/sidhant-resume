import React from 'react'
import portfolioData from '../data/portfolioData'

const Experience = () => {
  return (
    <section className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Professional Experience</h2>
      {portfolioData.experiences.map((exp, index) => (
        <div 
          key={index} 
          className="mb-6 pb-6 border-b border-gray-200 last:border-b-0"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <span className="text-sm text-gray-600">{exp.period}</span>
          </div>
          <p className="text-gray-700 mb-2">{exp.company}</p>
          <ul className="list-disc list-inside text-gray-600">
            {exp.highlights.map((highlight, hIndex) => (
              <li key={hIndex} className="mb-1">{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Experience