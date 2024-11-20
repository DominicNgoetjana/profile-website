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
    <div className="min-h-screen bg-dark">
      <div className="floating-gradient" />
      
      {/* Navigation */}
      <nav className="fixed w-full bg-dark/80 backdrop-blur-md z-50 py-4">
        <div className="section-padding flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text"
          >
            Portfolio
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
                    <item.icon className="nav-icon" />
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section-padding min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="gradient-text">Welcome</span> to My Portfolio
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            I create beautiful and functional web experiences
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll('Projects')}
            >
              View Projects
            </motion.button>
            <motion.button 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll('Contact')}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Placeholder sections */}
      <section id="about" className="section-padding min-h-screen">
        <h2 className="text-3xl font-bold gradient-text mb-8">About Me</h2>
      </section>

      <section id="projects" className="section-padding min-h-screen">
        <h2 className="text-3xl font-bold gradient-text mb-8">Projects</h2>
      </section>

      <section id="contact" className="section-padding min-h-screen">
        <h2 className="text-3xl font-bold gradient-text mb-8">Contact</h2>
      </section>
    </div>
  );
}

export default App;
