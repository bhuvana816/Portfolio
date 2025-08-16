import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ai', label: 'AI/ML' }
  ];

  // ✅ Updated to also check project.title for "Green Cycle Hub"
  const getProjectCategory = (tags: string[], title?: string) => {
    const tagString = tags.join(' ').toLowerCase();

    // AI/ML check
    if (
      tagString.includes('ai') ||
      tagString.includes('ml') ||
      tagString.includes('chatbot') ||
      tagString.includes('opengpt')
    ) {
      return 'ai';
    }

    // Special case: Green Cycle Hub → AI/ML
    if (title && title.toLowerCase().includes('green cycle hub')) {
      return 'ai';
    }

    // Fullstack check
    if (tagString.includes('firebase') || tagString.includes('django') || tagString.includes('python')) {
      return 'fullstack';
    }

    return 'frontend';
  };

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(project => getProjectCategory(project.tags, project.title) === activeFilter);

  return (
    <section
      id="projects"
      className="py-20 px-6 lg:px-12 relative"
      style={{
        background: "linear-gradient(135deg, #0a192f 0%, #1a1a2e 50%, #0a192f 100%)"
      }}
    >
      {/* Glow effect */}
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

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl font-light mb-10 text-center"
            style={{
              background: "linear-gradient(45deg, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Featured Projects
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full font-light transition-all duration-300 text-sm ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white shadow-lg'
                    : 'bg-[#112240] text-gray-300 hover:text-white hover:bg-[#1a365d]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#112240] to-[#1a365d] rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:border-[#a855f7] max-w-[300px] mx-auto transform transition-all duration-500"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(168, 85, 247, 0.5)"
                }}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-all duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-light ${
                        getProjectCategory(project.tags, project.title) === 'ai'
                          ? 'bg-gradient-to-r from-[#8b5cf6] to-[#e91e63] text-white'
                          : getProjectCategory(project.tags, project.title) === 'fullstack'
                          ? 'bg-gradient-to-r from-[#06d6a0] to-[#64ffda] text-[#0a192f]'
                          : 'bg-gradient-to-r from-[#64ffda] to-[#06d6a0] text-[#0a192f]'
                      }`}
                    >
                      {getProjectCategory(project.tags, project.title) === 'ai'
                        ? 'AI/ML'
                        : getProjectCategory(project.tags, project.title) === 'fullstack'
                        ? 'Full Stack'
                        : 'Frontend'}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#64ffda] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 font-light text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] bg-[#64ffda] bg-opacity-10 text-[#64ffda] rounded-full border border-[#64ffda] border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 text-sm">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                        style={{ color: "#ffffff" }}
                        whileHover={{ scale: 1.1, color: "#181717" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                        style={{ color: "#ffffff" }}
                        whileHover={{ scale: 1.1, color: "#e91e63" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
