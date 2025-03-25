import React from 'react';
import { motion as M, AnimatePresence } from 'framer-motion';
import ScrollProgressBar from './Components/ScrollProgressBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
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