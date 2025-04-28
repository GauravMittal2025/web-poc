import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-soft py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-darkText flex items-center">
            <motion.span 
              className="text-primary mr-1"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              W
            </motion.span>
            ebency
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-darkText hover:text-primary font-medium transition-colors">Home</a>
          <div className="relative group">
            <button 
              className="text-darkText hover:text-primary font-medium transition-colors flex items-center"
              onClick={() => toggleDropdown('services')}
            >
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#web-design" className="block px-4 py-2 text-sm text-darkText hover:bg-primary hover:text-white">Web Design</a>
              <a href="#app-development" className="block px-4 py-2 text-sm text-darkText hover:bg-primary hover:text-white">App Development</a>
              <a href="#branding" className="block px-4 py-2 text-sm text-darkText hover:bg-primary hover:text-white">Branding</a>
              <a href="#marketing" className="block px-4 py-2 text-sm text-darkText hover:bg-primary hover:text-white">Digital Marketing</a>
            </div>
          </div>
          <a href="#about" className="text-darkText hover:text-primary font-medium transition-colors">About</a>
          <a href="#portfolio" className="text-darkText hover:text-primary font-medium transition-colors">Portfolio</a>
          <a href="#team" className="text-darkText hover:text-primary font-medium transition-colors">Team</a>
          <a href="#contact" className="text-darkText hover:text-primary font-medium transition-colors">Contact</a>
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="btn btn-primary">Get Started</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-darkText hover:text-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#home" className="text-darkText hover:text-primary font-medium transition-colors py-2" onClick={toggleMenu}>Home</a>
              
              <div className="relative">
                <button 
                  className="text-darkText hover:text-primary font-medium transition-colors flex items-center justify-between w-full py-2"
                  onClick={() => toggleDropdown('mobileServices')}
                >
                  <span>Services</span> 
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === 'mobileServices' ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'mobileServices' && (
                    <motion.div 
                      className="pl-4 mt-2 space-y-2"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a href="#web-design" className="block py-2 text-darkText hover:text-primary" onClick={toggleMenu}>Web Design</a>
                      <a href="#app-development" className="block py-2 text-darkText hover:text-primary" onClick={toggleMenu}>App Development</a>
                      <a href="#branding" className="block py-2 text-darkText hover:text-primary" onClick={toggleMenu}>Branding</a>
                      <a href="#marketing" className="block py-2 text-darkText hover:text-primary" onClick={toggleMenu}>Digital Marketing</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <a href="#about" className="text-darkText hover:text-primary font-medium transition-colors py-2" onClick={toggleMenu}>About</a>
              <a href="#portfolio" className="text-darkText hover:text-primary font-medium transition-colors py-2" onClick={toggleMenu}>Portfolio</a>
              <a href="#team" className="text-darkText hover:text-primary font-medium transition-colors py-2" onClick={toggleMenu}>Team</a>
              <a href="#contact" className="text-darkText hover:text-primary font-medium transition-colors py-2" onClick={toggleMenu}>Contact</a>
              
              <div className="pt-2">
                <a href="#contact" className="btn btn-primary w-full text-center" onClick={toggleMenu}>Get Started</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;