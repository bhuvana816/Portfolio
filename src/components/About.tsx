import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-20 px-6 lg:px-12 flex flex-col items-center text-center"
      style={{
        background: "linear-gradient(135deg, #0a192f 0%, #1a1a2e 50%, #0a192f 100%)"
      }}
    >
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #a855f7 0%, transparent 60%), radial-gradient(circle at 80% 70%, #ec4899 0%, transparent 60%)",
            width: "100%",
            height: "100%",
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl relative z-10"
      >
        {/* About Me Heading */}
        <h2 className="text-4xl md:text-5xl font-light mb-8"
          style={{
            background: "linear-gradient(45deg, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          About Me
        </h2>

        {/* Main description */}
        <p className="text-gray-300 text-lg md:text-xl font-extralight leading-relaxed mb-4">
          I’m a passionate Full Stack Developer in love with building digital experiences that blend 
          functionality and aesthetics. I thrive on turning complex ideas into simple, elegant solutions 
          while continuously exploring new technologies and creative possibilities.
        </p>

        {/* Small secondary line */}
        <p className="text-gray-400 text-sm font-light">
          Currently pursuing my B.Tech in Computer Science at Vignan's Institute of Information Technology.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
