import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      className="py-20 px-6 lg:px-12"
      style={{ backgroundColor: 'rgba(17, 34, 64, 0.7)' }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Get In Touch
          </h2>

          <p className="text-lg text-gray-300 font-light mb-12 max-w-xl mx-auto">
            Let’s connect! Whether it’s about a project, opportunity, or just a quick hello.
          </p>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6 w-full max-w-2xl mx-auto"
          >
            {/* Phone */}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-4 p-6 rounded-xl bg-[#112240] hover:bg-[#1a365d] transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <Phone
                size={28}
                className="text-[#64ffda] group-hover:scale-110 transition-transform"
              />
              <div>
                <p className="text-gray-400 text-sm font-light">Phone</p>
                <p className="text-white font-medium">+91 98765 43210</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:bhuvana.sahithi@example.com"
              className="flex items-center gap-4 p-6 rounded-xl bg-[#112240] hover:bg-[#1a365d] transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <Mail
                size={28}
                className="text-[#e91e63] group-hover:scale-110 transition-transform"
              />
              <div>
                <p className="text-gray-400 text-sm font-light">Email</p>
                <p className="text-white font-medium">bhuvana.sahithi@example.com</p>
              </div>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <h3 className="text-xl font-medium text-white mb-6">Find me online</h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://linkedin.com/in/bhuvana-sahithi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#112240] rounded-lg hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 group shadow-md hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={26} className="group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://github.com/bhuvana816"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#112240] rounded-lg hover:bg-[#e91e63] hover:text-white transition-all duration-300 group shadow-md hover:shadow-lg"
                aria-label="GitHub"
              >
                <Github size={26} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
