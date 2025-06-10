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
      canvas.height = window.innerHeight;
    };
    
    // Create particles
    const createParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth / 20), 100);
      particles = [];
      
      for (let i = 0; i < particleCount; i++) {
        const shape = Math.random() > 0.5 ? 'circle' : 'diamond';
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          shape: shape,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
          color: Math.random() > 0.7 ? 
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
          drawDiamond(ctx, particle.x, particle.y, particle.size * 1.5, particle.rotation);
          ctx.moveTo(particle.x, particle.y);
        }
        
        ctx.fillStyle = `${particle.color}${particle.opacity})`;
        ctx.fill();
        
        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
              const opacity = 1 - distance / 150;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.3})`;
              ctx.lineWidth = 1.5;
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
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <motion.div
      className="fixed inset-0 -z-10 opacity-70 dark:opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  );
};

export default BackgroundAnimation; 