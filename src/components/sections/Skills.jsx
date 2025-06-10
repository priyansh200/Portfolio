import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    FaCss3Alt,
    FaDatabase,
    FaFigma,
    FaGitAlt,
    FaHtml5,
    FaJs,
    FaNodeJs,
    FaReact
} from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'React', level: 90, icon: <FaReact className="text-[#61DAFB]" /> },
  { name: 'JavaScript', level: 85, icon: <FaJs className="text-[#F7DF1E]" /> },
  { name: 'Node.js', level: 80, icon: <FaNodeJs className="text-[#339933]" /> },
  { name: 'HTML5', level: 95, icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: 'CSS3', level: 90, icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: 'Next.js', level: 50, icon: <SiNextdotjs /> },
  { name: 'MongoDB', level: 70, icon: <SiMongodb className="text-[#47A248]" /> },
  { name: 'Spring Boot', level: 60, icon: <SiSpringboot className="text-[#6DB33F]" /> },
  { name: 'Java', level: 60, icon: <SiSpringboot className="text-[#007396]" /> },

  { name: 'SQL', level: 65, icon: <FaDatabase className="text-[#4479A1]" /> },
  { name: 'Git', level: 85, icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: 'Figma', level: 70, icon: <FaFigma className="text-[#F24E1E]" /> },
];

const SkillCard = ({ skill, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-dark-light p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-3">{skill.icon}</div>
        <h3 className="font-medium">{skill.name}</h3>
      </div>
      
      <div className="h-2 bg-light-darker dark:bg-dark rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
      
      <div className="flex justify-between mt-2 text-sm text-dark/70 dark:text-light/70">
        <span>Proficiency</span>
        <span>{skill.level}%</span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  return (
    <section id="skills" className="section bg-light-dark dark:bg-dark-light">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-dark/70 dark:text-light/70">
            I specialize in these technologies and continuously expand my knowledge to stay up-to-date with industry trends.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold mb-4">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Responsive Design', 'RESTful APIs', 'UI/UX Design', 'Agile Methodology', 'Testing', 'Performance Optimization', 'Accessibility'].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-white dark:bg-dark rounded-full shadow-sm text-dark/80 dark:text-light/80"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.7 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 