import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }
    
    // Clear any errors
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section py-24 bg-primary bg-opacity-5">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold uppercase tracking-wider">Contact Us</span>
          <h2 className="text-4xl font-bold text-darkText mt-4 mb-6">Get In Touch</h2>
          <p className="text-grayText">
            Have a project in mind or want to learn more about our services?
            We'd love to hear from you. Reach out to us and let's start a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-soft"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-darkText mb-6">Send Us a Message</h3>
            
            {submitted ? (
              <motion.div 
                className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h4 className="text-xl font-bold text-darkText mb-2">Message Sent!</h4>
                <p className="text-grayText">
                  Thank you for contacting us! We'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-6">
                    {error}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-darkText mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:ring focus:ring-primary/20 outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-darkText mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:ring focus:ring-primary/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-darkText mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:ring focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-darkText mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:ring focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="Web Design">Web Design</option>
                      <option value="App Development">App Development</option>
                      <option value="Branding">Branding</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-darkText mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:ring focus:ring-primary/20 outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="btn btn-primary w-full flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message <Send size={18} className="ml-2" />
                </motion.button>
              </form>
            )}
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-darkText mb-6">Contact Information</h3>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-darkText mb-1">Our Location</h4>
                  <p className="text-grayText">123 Design Street, Creative City, 10001, USA</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-darkText mb-1">Email Us</h4>
                  <p className="text-grayText">info@webency.com</p>
                  <p className="text-grayText">support@webency.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-darkText mb-1">Call Us</h4>
                  <p className="text-grayText">+1 (234) 567-8900</p>
                  <p className="text-grayText">+1 (234) 567-8901</p>
                </div>
              </div>
            </div>
            
            {/* Working Hours */}
            <div className="bg-white p-8 rounded-xl shadow-soft">
              <h4 className="text-lg font-bold text-darkText mb-4">Working Hours</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-grayText">Monday - Friday:</span>
                  <span className="font-medium text-darkText">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-grayText">Saturday:</span>
                  <span className="font-medium text-darkText">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-grayText">Sunday:</span>
                  <span className="font-medium text-darkText">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;