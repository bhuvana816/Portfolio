import React, { useState } from 'react';
import Navigation from './components/Navigation';
import PointerEffect from './components/PointerEffect';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [effectsEnabled, setEffectsEnabled] = useState(true);

  const toggleEffects = () => {
    setEffectsEnabled(!effectsEnabled);
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <PointerEffect enabled={effectsEnabled} />
      <Navigation onToggleEffects={toggleEffects} effectsEnabled={effectsEnabled} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <Certifications />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-gray-400 font-light">
        <p>&copy; 2025 Amajala Bhuvana Sree Sahithi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
