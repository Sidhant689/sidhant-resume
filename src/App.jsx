import React from 'react';
import { motion as M, useInView } from 'framer-motion';
import ScrollProgressBar from './Components/ScrollProgressBar';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const SectionWrapper = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.3 }); // Triggers when 30% is visible

  return (
    <M.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Hide when scrolling up
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-16"
    >
      {children}
    </M.div>
  );
};

function App() {
  return (
    <div className="relative">
      <ScrollProgressBar />
      <M.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <main className="container mx-auto px-4 py-8 space-y-12">
          <SectionWrapper><About /></SectionWrapper>
          <SectionWrapper><Skills /></SectionWrapper>
          <SectionWrapper><Experience /></SectionWrapper>
          <SectionWrapper><Projects /></SectionWrapper>
          <SectionWrapper><Achievements /></SectionWrapper>
          <SectionWrapper><Contact /></SectionWrapper>
        </main>
        <Footer />
      </M.div>
    </div>
  );
}

export default App;
