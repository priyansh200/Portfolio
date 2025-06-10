import { motion } from 'framer-motion';
import { FaDribbble, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="bg-light-dark dark:bg-dark-light py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.a 
              href="#home" 
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Priyansh Khandelwal
            </motion.a>
            <p className="mt-2 text-dark/60 dark:text-light/60">
              Creating digital experiences with passion and purpose.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {[
                { icon: <FaGithub />, href: 'https://github.com/priyansh200' },
                { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/priyansh-khandelwal01/' }
        ,
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white dark:bg-dark flex items-center justify-center text-dark/70 dark:text-light/70 hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <p className="text-dark/60 dark:text-light/60 text-sm">
              © {currentYear} Priyansh Khandelwal. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-light-darker dark:border-dark-lighter flex justify-between items-center">
          <p className="text-dark/60 dark:text-light/60 text-sm">
            Designed and developed with ❤️
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 