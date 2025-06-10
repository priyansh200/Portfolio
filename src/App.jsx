import { useEffect, useState } from 'react';
import './App.css';
import BackgroundAnimation from './components/BackgroundAnimation';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Education from './components/sections/Education';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-light dark:bg-dark">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light/90 dark:bg-dark/90 text-dark dark:text-light relative">
      {/* Background animation positioned with higher z-index */}
      <BackgroundAnimation />
      
      {/* Content wrapper with higher z-index */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <ThemeToggle />
        <main>
          <Hero />
          <About />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
