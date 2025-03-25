import React from 'react';
import { motion as M, useScroll, useSpring } from 'framer-motion';

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <M.div 
      className="progress-bar fixed top-0 left-0 right-0 h-1 bg-secondary origin-left z-50"
      style={{ scaleX }}
    />
  );
}

export default ScrollProgressBar;