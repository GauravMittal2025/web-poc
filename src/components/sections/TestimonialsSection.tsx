import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

const TestimonialsSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John Peterson",
      role: "Marketing Director",
      company: "TechStart Inc.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "Working with Webency was an exceptional experience! They transformed our outdated website into a stunning platform that perfectly represents our brand. Their team was professional, responsive, and delivered on time and within budget."
    },
    {
      id: 2,
      name: "Lisa Matthews",
      role: "CEO",
      company: "GreenLife",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "Webency's team went above and beyond to understand our vision and translate it into an amazing website. The design is not only beautiful but also functional, resulting in increased user engagement and higher conversion rates."
    },
    {
      id: 3,
      name: "Robert Kim",
      role: "Founder",
      company: "Innovate Solutions",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "The mobile app that Webency developed for us has been a game-changer for our business. Their team's technical expertise and creative approach resulted in an intuitive, high-performing app that our customers love. Highly recommended!"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="section bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl font-bold text-darkText mt-4 mb-6">What Clients Say</h2>
          <p className="text-grayText">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Testimonial Cards */}
            <motion.div 
              className="bg-white rounded-xl shadow-soft p-8 md:p-12 relative"
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Quote size={60} className="absolute top-6 left-6 text-primary/10" />
              
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:w-1/3 flex flex-col items-center text-center">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <h4 className="text-xl font-bold text-darkText">{testimonials[currentIndex].name}</h4>
                  <p className="text-primary">{testimonials[currentIndex].role}</p>
                  <p className="text-grayText text-sm">{testimonials[currentIndex].company}</p>
                </div>
                
                <div className="md:w-2/3 relative">
                  <p className="text-grayText italic text-lg leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </motion.button>
              
              <motion.button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;