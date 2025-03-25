import React from 'react'
import portfolioData from '../data/portfolioData'
import { motion as M } from 'framer-motion'

const Header = () => {
  return (
    <M.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="bg-primary text-white py-16 text-center"
    >
      <M.h1 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 0.2 
        }}
        className="text-4xl font-bold mb-2"
      >
        {portfolioData.name}
      </M.h1>
      <M.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl text-gray-300"
      >
        {portfolioData.title}
      </M.p>
      <M.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center space-x-4 mt-4"
      >
        {portfolioData.socialLinks.map((link, index) => (
          <M.a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl hover:text-secondary transition-colors"
          >
            <link.icon />
          </M.a>
        ))}
      </M.div>
    </M.header>
  )
}

export default Header