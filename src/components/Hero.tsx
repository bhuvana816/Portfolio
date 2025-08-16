import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorCanvasRef = useRef<HTMLCanvasElement>(null);

  // 👉 Dynamic role texts
  const roles = ["React Enthusiast", "Frontend Developer", "UI/UX Explorer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000); // change text every 3 sec
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const cursorCanvas = cursorCanvasRef.current;
    if (!canvas || !cursorCanvas) return;

    const ctx = canvas.getContext('2d');
    const cursorCtx = cursorCanvas.getContext('2d');
    let particles: { x: number; y: number; r: number; dx: number; dy: number }[] = [];
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cursorCanvas.width = window.innerWidth;
      cursorCanvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 3 + 1,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
        });
      }
    };
    initParticles();

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const drawParticles = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0a192f';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(255,255,255,0.1)';
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
    };

    const drawCursorLine = () => {
      if (!cursorCtx) return;
      cursorCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);

      cursorCtx.beginPath();
      cursorCtx.moveTo(window.innerWidth / 2, window.innerHeight / 2);
      cursorCtx.lineTo(mouse.x, mouse.y);
      cursorCtx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      cursorCtx.lineWidth = 1;
      cursorCtx.stroke();
    };

    const animate = () => {
      drawParticles();
      drawCursorLine();
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative overflow-hidden"
    >
      {/* Embedded CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');
        section {
          font-family: 'Poppins', sans-serif;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes nameSlide {
          0% { transform: translateX(-10px); }
          50% { transform: translateX(10px); }
          100% { transform: translateX(-10px); }
        }
        .moving-name {
          animation: nameSlide 4s ease-in-out infinite;
        }
        .shimmer {
          background: linear-gradient(90deg, #a855f7, #ec4899, #a855f7);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes shimmer {
          to { background-position: 200% center; }
        }
      `}</style>

      {/* Particle Mesh Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <canvas ref={cursorCanvasRef} className="absolute inset-0 z-1 pointer-events-none" />

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
        <p className="text-purple-400 text-lg font-extralight mb-4">Hi, I'm</p>

        {/* Moving Name */}
        <h1
          className="moving-name text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight"
          style={{
            background: 'linear-gradient(90deg, #a855f7, #ec4899)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 6s ease infinite, nameSlide 4s ease-in-out infinite',
          }}
        >
          Amajala Bhuvana Sree Sahithi
        </h1>

        {/* Dynamic role */}
        <h2 className="shimmer text-xl md:text-2xl font-extralight mt-3 transition-opacity duration-500">
          {roles[currentRole]}
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-base font-extralight">
          "Building digital experiences that are as seamless to use as they are visually engaging.
          My passion lies in transforming intricate ideas into elegant, user-centric web solutions."
        </p>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {/* View my Work button */}
          <motion.button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-light rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-2">
              <Eye size={20} />
              View my Work
            </div>
          </motion.button>

          {/* Resume button */}
          <motion.a
            href="/resume.pdf" // 👉 replace with your resume file path or Google Drive link
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-light rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-2">
              📄 Resume
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
