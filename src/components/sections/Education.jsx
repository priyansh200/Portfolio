import { motion, useAnimationControls, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FiAward } from 'react-icons/fi';

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-100px' });
  const controls = useAnimationControls();
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);
  
  const educationData = [
    {
      degree: "Bachelor of Technology",
      institution: "MITRC",
      percentage: "86.6%",
      duration: "2022 - Present",
      description: "Computer Science & Engineering"
    },
    {
      degree: "Higher Secondary",
      institution: "Agrasen Public School",
      percentage: "90%",
      duration: "2021 - 2022",
      description: "Science & Mathematics"
    },
    {
      degree: "Secondary School",
      institution: "Agrasen Public School",
      percentage: "88%",
      duration: "2019 - 2020",
      description: "General Education"
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  };
  
  const progressVariants = {
    hidden: { width: 0 },
    visible: (percentage) => ({
      width: percentage,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.8,
      }
    })
  };
  
  const iconVariants = {
    hidden: { scale: 0.5, opacity: 0, rotate: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1,
      }
    },
    hover: {
      scale: 1.2,
      rotate: 15,
      color: "#8B5CF6",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="education" className="section py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            animate={{ 
              textShadow: inView ? ["0 0 0px rgba(0,0,0,0)", "0 0 15px rgba(99, 102, 241, 0.5)", "0 0 0px rgba(0,0,0,0)"] : "none"
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
          >
            Academic Achievements
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-lg max-w-3xl mx-auto text-dark/70 dark:text-light/70"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            My educational background and academic qualifications that have shaped my knowledge and skills.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "rgba(99, 102, 241, 0.4)"
              }}
              className="bg-white/80 dark:bg-dark/80 backdrop-blur-sm shadow-lg rounded-xl p-8 text-center transition-all duration-300 border border-transparent hover:border-primary/20 group relative"
            >
              {/* Animated background glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 -z-10"
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <motion.div 
                className="text-4xl text-primary mb-6 flex justify-center"
                variants={iconVariants}
                whileHover="hover"
              >
                <FiAward className="group-hover:text-secondary transition-colors duration-300" />
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-bold mb-2 gradient-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                {item.degree}
              </motion.h3>
              
              <motion.h4 
                className="text-xl mb-2 text-dark/80 dark:text-light/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                {item.institution}
              </motion.h4>
              
              <motion.div 
                className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              />
              
              <motion.p 
                className="text-dark/70 dark:text-light/70 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.2 }}
              >
                {item.description}
              </motion.p>
              
              <motion.div 
                className="flex justify-between items-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.2 }}
              >
                <span className="text-primary/80 dark:text-secondary/80">{item.duration}</span>
                <span className="font-bold text-lg">{item.percentage}</span>
              </motion.div>
              
              <div className="mt-6 w-full bg-light-dark dark:bg-dark-light rounded-full h-2 overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  custom={item.percentage}
                  variants={progressVariants}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 