import React, { useEffect, useState } from 'react';

interface PointerEffectProps {
  enabled?: boolean;
}

const PointerEffect: React.FC<PointerEffectProps> = ({ enabled = true }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Only enable on desktop and when enabled prop is true
    if (isMobile || !enabled) return;

    let particles: HTMLElement[] = [];
    let trail: HTMLElement | null = null;
    let mouseX = 0;
    let mouseY = 0;

    // Create cursor trail
    const createTrail = () => {
      trail = document.createElement('div');
      trail.className = 'cursor-trail';
      document.body.appendChild(trail);
    };

    const createParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      particle.className = 'pointer-particle';
      
      // Add some randomness to particle position and color
      const offsetX = (Math.random() - 0.5) * 30;
      const offsetY = (Math.random() - 0.5) * 30;
      const colors = ['#64ffda', '#e91e63', '#8b5cf6', '#06d6a0'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      particle.style.left = `${x + offsetX}px`;
      particle.style.top = `${y + offsetY}px`;
      particle.style.background = `radial-gradient(circle, ${randomColor} 0%, transparent 70%)`;
      
      document.body.appendChild(particle);
      particles.push(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
        particles = particles.filter(p => p !== particle);
      }, 1500);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update trail position with smooth following
      if (trail) {
        trail.style.left = `${mouseX - 10}px`;
        trail.style.top = `${mouseY - 10}px`;
      }

      // Create particles with reduced frequency
      if (Math.random() > 0.85) {
        createParticle(mouseX, mouseY);
      }
    };

    const handleMouseEnter = () => {
      if (trail) {
        trail.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      if (trail) {
        trail.style.opacity = '0';
      }
    };

    createTrail();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      // Clean up trail
      if (trail && trail.parentNode) {
        trail.parentNode.removeChild(trail);
      }
      
      // Clean up remaining particles
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, [enabled, isMobile]);

  return null;
};

export default PointerEffect;