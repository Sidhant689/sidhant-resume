import React from 'react';
import { motion as M, AnimatePresence } from 'framer-motion';
import ScrollProgressBar from './Components/ScrollProgressBar';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="relative">
      <ScrollProgressBar />
      <AnimatePresence mode='wait'>
        <M.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <main className="container mx-auto px-4 py-8 space-y-12">
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </M.div>
      </AnimatePresence>
    </div>
  );
}

export default App;