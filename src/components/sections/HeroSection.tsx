import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-darkText mb-6">
              <span className="block">We Create</span>
              <span className="text-gradient">Digital Experiences</span>
              <span className="block">That Matter</span>
            </h1>
            
            <p className="text-lg text-grayText mb-8 max-w-xl">
              We're a creative digital agency focused on growing brands through 
              thoughtful design and innovative technology solutions. Let's build 
              something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started <ArrowRight size={18} className="ml-2" />
              </motion.a>
              
              <motion.a 
                href="#portfolio" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.a>
            </div>
            
            <div className="mt-12 flex items-center space-x-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/40?img=${i + 10}`} 
                    alt="Client" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <p className="text-darkText font-bold">500+</p>
                <p className="text-grayText text-sm">Satisfied Clients</p>
              </div>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Digital Agency Team Working" 
                className="w-full rounded-xl shadow-xl"
              />
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-soft flex items-center space-x-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <div className="bg-primary/10 p-2 rounded-full">
                  <div className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full">
                    <span className="text-sm font-bold">4.9</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-darkText">Excellent</p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-soft"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              >
                <p className="text-sm font-bold text-darkText mb-1">Projects Completed</p>
                <p className="text-2xl font-bold text-primary">750+</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Clients */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-grayText mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {['Google', 'Microsoft', 'Airbnb', 'Spotify', 'Amazon'].map((client) => (
              <div key={client} className="text-gray-400 font-bold text-xl">{client}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;