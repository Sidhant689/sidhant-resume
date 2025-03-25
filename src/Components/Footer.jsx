import React from 'react';
import portfolioData from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          {portfolioData.socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl hover:text-secondary transition-colors"
            >
              <link.icon />
            </a>
          ))}
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer