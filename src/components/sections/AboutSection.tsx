import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    "Strategic approach to digital solutions",
    "Expert team of designers and developers",
    "Client-centered collaborative process",
    "Attention to detail and quality assurance",
    "Ongoing support and maintenance"
  ];

  return (
    <section id="about" className="section py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <motion.div 
            ref={ref}
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="About Webency" 
                className="rounded-lg shadow-lg w-full"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-soft max-w-xs">
                <div className="flex items-center mb-4">
                  <div className="bg-primary rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-darkText">Fast Delivery</h4>
                </div>
                <p className="text-grayText text-sm">
                  We pride ourselves on delivering projects quickly without compromising on quality.
                </p>
              </div>
            </div>
            
            {/* Background element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/10 rounded-full -z-10"></div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl font-bold text-darkText mt-4 mb-6">
              We Help Businesses <span className="text-gradient">Grow & Innovate</span>
            </h2>
            
            <p className="text-grayText mb-8">
              Founded in 2015, Webency is a leading digital agency with a passion for creating 
              exceptional digital experiences. We combine creativity, technology, and strategy 
              to help businesses achieve their goals and stand out in today's competitive market.
            </p>
            
            <div className="mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center mb-4">
                  <CheckCircle size={20} className="text-primary mr-3 flex-shrink-0" />
                  <span className="text-darkText">{feature}</span>
                </div>
              ))}
            </div>
            
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;