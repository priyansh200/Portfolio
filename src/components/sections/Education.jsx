import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward } from 'react-icons/fi';

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  
  const educationData = [
    {
      degree: "Bachelor of Technology",
      institution: "MITRC",
      percentage: "86.6",
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
      duration: "2019 - 200",
      description: "General Education"
    }
  ];
  
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="education" className="section py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-dark/70 dark:text-light/70">
            My educational background and academic qualifications that have shaped my knowledge and skills.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-dark shadow-lg rounded-xl p-8 text-center transform hover:scale-105 transition-transform duration-300 border border-transparent hover:border-primary/20 group"
            >
              <div className="text-3xl text-primary mb-6 flex justify-center">
                <FiAward className="group-hover:text-secondary transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2 gradient-text">{item.degree}</h3>
              <h4 className="text-xl mb-2 text-dark/80 dark:text-light/80">{item.institution}</h4>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
              <p className="text-dark/70 dark:text-light/70 mb-2">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-primary/80 dark:text-secondary/80">{item.duration}</span>
                <span className="font-bold text-lg">{item.percentage}</span>
              </div>
              <div className="mt-6 w-full bg-light-dark dark:bg-dark-light rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  style={{ width: item.percentage }}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 