import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

interface StatItemProps {
  number: number;
  text: string;
  suffix?: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ number, text, suffix = '+', delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <motion.div 
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <h3 className="text-5xl font-bold text-primary mb-2">
        {inView ? (
          <CountUp 
            end={number} 
            duration={2.5} 
            suffix={suffix} 
          />
        ) : (
          <span>0{suffix}</span>
        )}
      </h3>
      <p className="text-grayText uppercase tracking-wider">{text}</p>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { number: 750, text: "Projects Completed" },
    { number: 8, text: "Years of Experience", suffix: '+' },
    { number: 500, text: "Happy Clients" },
    { number: 25, text: "Team Members" }
  ];

  return (
    <section className="py-20 bg-primary bg-opacity-95 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ 
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 2px, transparent 2px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              text={stat.text}
              suffix={stat.suffix}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;