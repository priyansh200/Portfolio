import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl"
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: -4,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: Math.random() * 10 + 10,
            }}
          />
        ))}

        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`diamond-${i}`}
            className="absolute bg-gradient-to-r from-secondary/30 to-primary/30 blur-2xl"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: 'rotate(45deg)',
              zIndex: -3,
            }}
            animate={{
              rotate: [45, 225, 45],
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: Math.random() * 15 + 15,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left side */}
          <div className="max-w-2xl lg:w-1/2 pt-16 md:pt-24 lg:pt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-medium">Hello, I'm</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mt-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="gradient-text">Priyansh</span>
            </motion.h1>

            {/* Role animation - updated for continuous repetition */}
            <motion.div
              className="h-16 md:h-20 mb-8 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full"
                animate={{
                  y: ["0%", "-100%", "-200%", "-300%", "-400%", "0%"]
                }}
                transition={{
                  duration: 40, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="h-[60px] flex items-center text-2xl md:text-4xl font-semibold text-dark/80 dark:text-light/80">Full Stack Developer</div>
                <div className="h-[60px] flex items-center text-2xl md:text-4xl font-semibold text-dark/80 dark:text-light/80">MERN Developer</div>
                <div className="h-[60px] flex items-center text-2xl md:text-4xl font-semibold text-dark/80 dark:text-light/80">Web Developer</div>
                <div className="h-[60px] flex items-center text-2xl md:text-4xl font-semibold text-dark/80 dark:text-light/80">Mobile Developer</div>
                <div className="h-[60px] flex items-center text-2xl md:text-4xl font-semibold text-dark/80 dark:text-light/80">Problem Solver</div>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-dark/70 dark:text-light/70 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's turn your vision into reality!
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <FiArrowRight className="ml-2" />
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <motion.div
            className="lg:w-2/5 pt-20 self-start"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
           
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-xl opacity-80"></div>

              <div className="relative w-full max-w-s overflow-hidden rounded-xl border-4 border-white/20 dark:border-dark-light/30 backdrop-blur-sm bg-white/10 dark:bg-dark-light/10 shadow-xl">
                <img
                  src="/myimg.jpg"
                  alt="Your Photo"
                  className="w-full h-[300px] object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div className="w-1 h-1 bg-primary rounded-full" />
        </motion.div>
        <p className="text-xs text-center mt-2 text-dark/70 dark:text-light/70">Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default Hero;
