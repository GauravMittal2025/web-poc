import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <a href="#" className="text-2xl font-bold flex items-center mb-4">
              <span className="text-primary mr-1">W</span>
              ebency
            </a>
            <p className="text-grayText mb-6">
              Creative digital agency delivering exceptional web and mobile solutions
              to help businesses grow and succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-grayText hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-grayText hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-grayText hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-grayText hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#web-design" className="text-grayText hover:text-primary transition-colors">Web Design</a>
              </li>
              <li>
                <a href="#app-development" className="text-grayText hover:text-primary transition-colors">App Development</a>
              </li>
              <li>
                <a href="#ux-ui" className="text-grayText hover:text-primary transition-colors">UX/UI Design</a>
              </li>
              <li>
                <a href="#branding" className="text-grayText hover:text-primary transition-colors">Branding</a>
              </li>
              <li>
                <a href="#seo" className="text-grayText hover:text-primary transition-colors">SEO Optimization</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-grayText hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#portfolio" className="text-grayText hover:text-primary transition-colors">Our Work</a>
              </li>
              <li>
                <a href="#team" className="text-grayText hover:text-primary transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#pricing" className="text-grayText hover:text-primary transition-colors">Pricing Plans</a>
              </li>
              <li>
                <a href="#contact" className="text-grayText hover:text-primary transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-grayText">123 Design Street, Creative City, 10001, USA</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary mr-3 flex-shrink-0" />
                <a href="tel:+12345678900" className="text-grayText hover:text-primary transition-colors">+1 (234) 567-8900</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary mr-3 flex-shrink-0" />
                <a href="mailto:info@webency.com" className="text-grayText hover:text-primary transition-colors">info@webency.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-grayText text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Webency. All rights reserved.
          </p>
          <div className="flex items-center">
            <a href="#" className="text-grayText hover:text-primary text-sm mr-6">Privacy Policy</a>
            <a href="#" className="text-grayText hover:text-primary text-sm mr-6">Terms of Service</a>
            <motion.button
              onClick={scrollToTop}
              className="bg-primary text-white p-3 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;