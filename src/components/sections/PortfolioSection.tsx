import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

const PortfolioSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "Eco-Friendly E-commerce",
      category: "web",
      image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#"
    },
    {
      id: 2,
      title: "Fitness Tracker App",
      category: "app",
      image: "https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#"
    },
    {
      id: 3,
      title: "Coffee Brand Identity",
      category: "branding",
      image: "https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#"
    },
    {
      id: 4,
      title: "Real Estate Platform",
      category: "web",
      image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#"
    },
    {
      id: 5,
      title: "Restaurant Booking App",
      category: "app",
      image: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#"
    },
    {
      id: 6,
      title: "Fashion Magazine",
      category: "branding",
      image: "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "#"
    }
  ];

  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  };

  return (
    <section id="portfolio" className="section bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold uppercase tracking-wider">Our Portfolio</span>
          <h2 className="text-4xl font-bold text-darkText mt-4 mb-6">Our Latest Work</h2>
          <p className="text-grayText">
            Explore our portfolio of successful projects that showcase our expertise and creativity.
            Each project represents our commitment to quality and innovation.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 portfolio-filter">
          {['all', 'web', 'app', 'branding'].map((filter) => (
            <motion.button
              key={filter}
              className={`px-5 py-2 m-2 rounded-full transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-grayText hover:bg-gray-100'
              }`}
              onClick={() => handleFilterClick(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-soft bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.a 
                      href={project.link}
                      className="btn bg-white text-primary hover:bg-white/90"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      View Project
                    </motion.a>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-primary uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-bold text-darkText mt-2">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <motion.a 
            href="#" 
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;