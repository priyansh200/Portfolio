import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'GoFix: On demand service platform',
    description: ' goFix — A service booking platform where users can easily hire service providers, manage bookings, and resolve complaints with role-based dashboards.',
    image: 'https://media.istockphoto.com/id/1049775258/photo/smiling-handsome-electrician-repairing-electrical-box-with-pliers-in-corridor-and-looking-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=OwRcD2ubKvWifI972PtNgJoFJbwWl9R7xgIVJEJYXXw=',
    tags: ['React', 'Node.js', 'MongoDB', 'express'],

    githubLink: 'https://github.com/priyansh200/GoFix-on-demand-service-Platform',
  },
  {
    id: 2,
    title: 'Online OPD Booking System',
    description: 'OPD — Book doctor appointments hassle-free with real-time availability and patient-friendly dashboards.',
    image: 'https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D',
    tags: ['React', 'node', 'Tailwind CSS','mongodb'],

    githubLink: 'https://github.com/priyansh200/OPD-Appointments',
  },
  {
    id: 3,
    title: 'Student Management System',
    description: 'A smart platform to manage student records, attendance, performance, and communication — all in one place.',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Nob29sfGVufDB8fDB8fHww',
    tags: ['Java SpringBoot','SQL','Tomcat'],

    githubLink: 'https://github.com/priyansh200/StudentManagementSystem',
  },
  {
    id: 4,
    title: 'Library Management System',
    description: 'A digital system to manage book inventory, track borrow/return activity, and streamline library operations.',
    image: 'https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D',
    tags: ['JavaServlet', 'SQL', 'HTML','CSS'],
   
    githubLink: 'https://github.com/priyansh200/LiberaryManagementSystem',
  },
  {
    id: 5,
    title: 'UniProjectHUB',
    description: 'A Platform to manage all your code at one place',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    tags: ['React', 'TailwindCSS','node','express'],

    githubLink: 'https://github.com/priyansh200',
  },
 
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group"
    >
      <div className="relative overflow-hidden h-48 md:h-64">
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60 z-10" />
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-dark/70 dark:text-light/70 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="mr-1" /> Code
              </motion.a>
            )}
          </div>
          
          <motion.button
            className="text-primary"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <FiArrowRight />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto text-dark/70 dark:text-light/70">
            Here are some of my recent projects. Each project is unique and showcases different skills and technologies.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/priyansh200"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="mr-2" /> View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 