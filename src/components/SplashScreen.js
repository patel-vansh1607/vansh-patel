import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import "../styles/SplashScreen.css"

const lines = [
  '> Initializing Portfolio...',
  "> Welcome, I'm Vansh Patel",
];

const SplashScreen = ({ onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + lines[lineIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const nextLineTimeout = setTimeout(() => {
          setDisplayedText(prev => prev + '\n');
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }, 400);
        return () => clearTimeout(nextLineTimeout);
      }
    } else {
      setTimeout(() => {
        setIsDone(true);
        setTimeout(onComplete, 1000); // wait for slide animation
      }, 700);
    }
  }, [charIndex, lineIndex]);

  return (
    <motion.div
      className="splash-screen"
      initial={{ y: 0 }}
      animate={isDone ? { y: '-100%' } : {}}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <pre className="terminal-text">{displayedText}_</pre>
    </motion.div>
  );
};

export default SplashScreen;
