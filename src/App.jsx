import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Bars3Icon as MenuIcon, 
  XMarkIcon as XIcon,
  HomeIcon,
  UserIcon,
  FolderIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', icon: HomeIcon },
    { name: 'About', icon: UserIcon },
    { name: 'Projects', icon: FolderIcon },
    { name: 'Contact', icon: EnvelopeIcon }
  ];

  const handleScroll = (section) => {
    setActiveSection(section.toLowerCase());
    setIsMenuOpen(false);
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Navigation */}
      <nav className="fixed w-full bg-dark/80 backdrop-blur-md z-50 h-14">
        <div className="section-padding h-full flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text"
          >
            KDN
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="nav-menu-item group"
                onClick={() => handleScroll(item.name)}
              >
                <item.icon className="nav-menu-icon group-hover:scale-110 group-hover:-translate-y-1" />
                <span className="nav-menu-text text-sm font-medium group-hover:opacity-100 group-hover:translate-y-0">
                  {item.name}
                </span>
                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-dark/95 backdrop-blur-sm"
            >
              <div className="section-padding flex flex-col space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    className="nav-link group"
                    onClick={() => handleScroll(item.name)}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="nav-icon group-hover:scale-110" />
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <Hero onExploreClick={() => handleScroll('About')} />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
