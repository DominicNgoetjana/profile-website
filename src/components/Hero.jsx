import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

export default function Hero({ onExploreClick }) {
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
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
              className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/20 shadow-xl"
            >
              {/* Replace the src with your profile picture */}
              <img 
                src="https://via.placeholder.com/400" 
                alt="Profile"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text">Welcome</span> to My Portfolio
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
