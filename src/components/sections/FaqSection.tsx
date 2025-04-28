import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const faqs: FaqItem[] = [
    {
      question: "What services does Webency offer?",
      answer: "Webency offers a comprehensive range of digital services including web design and development, mobile app development, brand identity design, digital marketing, social media management, and SEO optimization. We provide tailored solutions to meet your specific business needs."
    },
    {
      question: "How long does it take to complete a typical web project?",
      answer: "The timeline for a web project varies depending on its complexity and scope. A simple website might take 4-6 weeks, while a more complex platform could take 2-3 months or more. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements."
    },
    {
      question: "What is your design process like?",
      answer: "Our design process begins with understanding your business, goals, and target audience. We then move to research, wireframing, and creating design concepts. After your feedback and revisions, we finalize the design before moving to development. Throughout the process, we maintain clear communication and involve you at every stage."
    },
    {
      question: "Do you provide ongoing support after the project is launched?",
      answer: "Yes, we offer various support and maintenance packages to ensure your digital assets continue to perform optimally after launch. Our support services include technical maintenance, content updates, security monitoring, and performance optimization."
    },
    {
      question: "How do you handle project pricing?",
      answer: "Our pricing is tailored to each project's specific requirements. We provide detailed proposals outlining all costs upfront, with no hidden fees. We can work with fixed project fees or hourly rates depending on your preference. Contact us for a personalized quote based on your project needs."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-darkText mt-4 mb-6">Frequently Asked Questions</h2>
          <p className="text-grayText">
            Find answers to common questions about our services, process, and approach.
            If you don't see your question here, feel free to contact us.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="mb-4 bg-white rounded-lg shadow-soft overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-darkText">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-primary flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-grayText">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;