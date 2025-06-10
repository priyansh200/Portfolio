import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaDribbble, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';

const socialLinks = [
  { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/priyansh200' },
  { name: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/priyansh-khandelwal01/' },

];

const contactInfo = [
  { icon: <FiMail />, text: 'khandelwalpriyansh878@gmail.com', href: 'mailto:khandelwalpriyansh878@gmail.com' },
  { icon: <FiPhone />, text: '+91 9649370388', href: 'tel:+919649370388' },
  { icon: <FiMapPin />, text: 'Alwar, India', href: '#' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };
  
  const inputVariants = {
    focus: { scale: 1.01, boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.3)' },
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-dark/70 dark:text-light/70">
            Have a project in mind or just want to say hello? Feel free to reach out to me. I'm always open to discussing new projects and opportunities.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            className="md:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-dark/80 dark:text-light/80 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                    {item.text}
                  </span>
                </motion.a>
              ))}
            </div>
            
            <div className="pt-6 border-t border-light-darker dark:border-dark-lighter">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white dark:bg-dark-light rounded-full flex items-center justify-center text-dark/70 dark:text-light/70 hover:bg-primary hover:text-white transition-colors"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label htmlFor="name" className="block text-sm font-medium text-dark/70 dark:text-light/70 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-light border border-light-darker dark:border-dark-lighter focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </motion.div>
                
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label htmlFor="email" className="block text-sm font-medium text-dark/70 dark:text-light/70 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-light border border-light-darker dark:border-dark-lighter focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </motion.div>
              </div>
              
              <motion.div variants={inputVariants} whileFocus="focus">
                <label htmlFor="subject" className="block text-sm font-medium text-dark/70 dark:text-light/70 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-light border border-light-darker dark:border-dark-lighter focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </motion.div>
              
              <motion.div variants={inputVariants} whileFocus="focus">
                <label htmlFor="message" className="block text-sm font-medium text-dark/70 dark:text-light/70 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-light border border-light-darker dark:border-dark-lighter focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </motion.div>
              
              <div className="flex items-center justify-between">
                <motion.button
                  type="submit"
                  className="btn btn-primary inline-flex items-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FiSend className="ml-2" />
                    </>
                  )}
                </motion.button>
                
                {submitSuccess && (
                  <motion.span
                    className="text-green-600 dark:text-green-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Message sent successfully!
                  </motion.span>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 