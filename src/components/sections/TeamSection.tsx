import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Twitter, Linkedin, Facebook, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    email?: string;
  };
}

const TeamSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      socials: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
        email: "mailto:alex@webency.com"
      }
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      socials: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
        email: "mailto:sarah@webency.com"
      }
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      socials: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
        email: "mailto:michael@webency.com"
      }
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "UX/UI Designer",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      socials: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
        email: "mailto:emily@webency.com"
      }
    }
  ];

  return (
    <section id="team" className="section py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold uppercase tracking-wider">Our Team</span>
          <h2 className="text-4xl font-bold text-darkText mt-4 mb-6">Meet Our Experts</h2>
          <p className="text-grayText">
            Our team of talented professionals combines creativity, technical expertise, and strategic thinking
            to deliver exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-xl overflow-hidden shadow-soft group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden h-72">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    {member.socials.twitter && (
                      <motion.a 
                        href={member.socials.twitter}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary"
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Twitter size={18} />
                      </motion.a>
                    )}
                    {member.socials.linkedin && (
                      <motion.a 
                        href={member.socials.linkedin}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary"
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin size={18} />
                      </motion.a>
                    )}
                    {member.socials.facebook && (
                      <motion.a 
                        href={member.socials.facebook}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary"
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Facebook size={18} />
                      </motion.a>
                    )}
                    {member.socials.email && (
                      <motion.a 
                        href={member.socials.email}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary"
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Mail size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-darkText">{member.name}</h3>
                <p className="text-primary mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;