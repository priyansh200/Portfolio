import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 3; // Make canvas taller to cover the entire page
    };
    
    // Create particles
    const createParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth / 15), 150); // More particles
      particles = [];
      
      for (let i = 0; i < particleCount; i++) {
        const shape = Math.random() > 0.4 ? 'circle' : 'diamond'; // More diamonds
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 2, // Larger particles
          speedX: Math.random() * 1.5 - 0.75, // Faster movement
          speedY: Math.random() * 1.5 - 0.75,
          opacity: Math.random() * 0.7 + 0.3, // Higher opacity
          shape: shape,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 3, // Faster rotation
          color: Math.random() > 0.6 ? 
            'rgba(139, 92, 246, ' : // Secondary color (purple)
            'rgba(59, 130, 246, ' // Primary color (blue)
        });
      }
    };
    
    // Draw a diamond
    const drawDiamond = (ctx, x, y, size, rotation) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation * Math.PI / 180);
      
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size, 0);
      ctx.lineTo(0, size);
      ctx.lineTo(-size, 0);
      ctx.closePath();
      
      ctx.restore();
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Draw particle
        ctx.beginPath();
        
        if (particle.shape === 'circle') {
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        } else {
          drawDiamond(ctx, particle.x, particle.y, particle.size * 2, particle.rotation); // Larger diamonds
          ctx.moveTo(particle.x, particle.y);
        }
        
        ctx.fillStyle = `${particle.color}${particle.opacity})`;
        ctx.fill();
        
        // Add glow effect
        if (Math.random() > 0.7) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = particle.color + "1)";
        } else {
          ctx.shadowBlur = 0;
        }
        
        // Draw connections with thicker lines and higher opacity
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 200) { // Longer connection distance
              const opacity = 1 - distance / 200;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.5})`; // Higher opacity connections
              ctx.lineWidth = 2; // Thicker lines
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Initialize
    setCanvasDimensions();
    createParticles();
    animate();
    
    // Handle resize
    const handleResize = () => {
      setCanvasDimensions();
      createParticles();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Handle scroll to reposition canvas
    const handleScroll = () => {
      canvas.style.transform = `translateY(${window.scrollY * 0.3}px)`; // Parallax effect
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }} // Explicit z-index to ensure visibility
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  );
};

export default BackgroundAnimation; 