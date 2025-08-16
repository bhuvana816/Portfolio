import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Install: npm install lucide-react

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top Bar */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-transparent z-50">
        {/* Name on left */}
        <div className="text-white text-xl font-semibold tracking-wide">
          Bhuvana
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Overlay Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0a192f] text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg z-40`}
      >
        <nav className="flex flex-col mt-20 space-y-6 px-6">
          <a
            href="#home"
            className="hover:text-[#64ffda] transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-[#64ffda] transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-[#64ffda] transition"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-[#64ffda] transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#experience"
            className="hover:text-[#64ffda] transition"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </a>
          <a
            href="#education"
            className="hover:text-[#64ffda] transition"
            onClick={() => setIsOpen(false)}
          >
            Education
          </a>
          <a
            href="#certifications"
            className="hover:text-[#64ffda] transition"
            onClick={() => setIsOpen(false)}
          >
            Certifications
          </a>
          <a
            href="#contact"
            className="hover:text-[#64ffda] transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Semi-transparent background overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
