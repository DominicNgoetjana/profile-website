import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const QUOTES = [
  { text: "There are only two hard things in Computer Science: cache invalidation and naming things.", author: "Phil Karlton" },
  { text: "It's not a bug – it's an undocumented feature.", author: "Anonymous" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.", author: "Edsger Dijkstra" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.", author: "Dan Salomon" },
  { text: "Simplicity is prerequisite for reliability.", author: "Edsger Dijkstra" },
  { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
  { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" }
];

export default function Hero({ onExploreClick }) {
  const [currentQuote, setCurrentQuote] = useState(QUOTES[0]);
  
  useEffect(() => {
    let currentIndex = 0;
    const rotateQuote = () => {
      currentIndex = (currentIndex + 1) % QUOTES.length;
      setCurrentQuote(QUOTES[currentIndex]);
    };

    const timer = setInterval(rotateQuote, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen">
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Profile picture */}
            <div className="relative h-[300px] md:h-[340px] mb-4 flex justify-center items-start">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.1 }}
                className="relative w-[256px] h-[256px] md:w-[320px] md:h-[320px] rounded-2xl p-1 bg-gradient-to-r from-primary via-secondary to-accent"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden bg-dark">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Crect width='800' height='800' fill='black'/%3E%3Ctext x='400' y='400' font-family='Arial' font-size='60' font-weight='bold' fill='url(%23gradient)' text-anchor='middle' dominant-baseline='middle'%3EI AM HERE%3C/text%3E%3ClinearGradient id='gradient' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF4D00;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23FFB800;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23FF0000;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/svg%3E"
                    alt="I AM HERE"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Rotating Quotes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div className="bg-dark/40 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuote.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center"
                  >
                    <p className="text-lg md:text-xl font-medium mb-3 gradient-text-primary leading-relaxed">
                      "{currentQuote.text}"
                    </p>
                    <p className="text-sm md:text-base text-gray-400">
                      - {currentQuote.author}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text-primary">Welcome to My World</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I create beautiful and functional web experiences
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onExploreClick}
              >
                Explore More
              </motion.button>
              
              <motion.a 
                href="#projects"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>

            <motion.button
              onClick={onExploreClick}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDownIcon className="w-8 h-8" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
