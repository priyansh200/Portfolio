import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiCalendar, FiCheckCircle, FiCode, FiUser } from 'react-icons/fi';

const stats = [
  { icon: <FiCalendar />, value: 1, label: 'Years Experience', suffix: '+' },
  { icon: <FiCode />, value: 5, label: 'Projects Completed', suffix: '+' },
  {icon:<FiCode/> ,value:10 , label :'Technology learned ' ,suffix :'+' },

  { icon: <FiUser />, value: 2, label: 'Team Collaborations', suffix: '+' },
];

const Counter = ({ value, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: '-100px' });
  
  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const end = parseInt(value);
    const incrementTime = duration * 1000 / end;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value, duration, inView]);
  
  return (
    <span ref={nodeRef} className="text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="section bg-light-dark dark:bg-dark-light py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-dark/70 dark:text-light/70">
            I'm a passionate developer with a keen eye for design and a love for creating
            seamless user experiences. With a strong foundation in modern web technologies,
            I transform complex problems into elegant solutions.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-dark shadow-lg rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl text-primary mb-4 flex justify-center">
                {stat.icon}
              </div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-dark/70 dark:text-light/70 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-20 grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mb-6"></div>
            <p className="text-dark/70 dark:text-light/70 mb-4">
              I'm a full-stack developer , specializing in building
              exceptional digital experiences. I have a passion for creating intuitive, dynamic
              user interfaces and powerful backend systems.
            </p>
            <p className="text-dark/70 dark:text-light/70">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or enjoying outdoor activities to maintain a healthy work-life balance.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">My Approach</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mb-6"></div>
            <ul className="space-y-3 text-dark/70 dark:text-light/70">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>I believe in clean, efficient code that solves real-world problems.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>I focus on creating responsive designs that work across all devices.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>I value collaboration and communication throughout the development process.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>I'm committed to continuous learning and staying updated with industry trends.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 