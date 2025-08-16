import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { certifications as initialCertifications } from "../data/portfolio";
import { Certification } from "../types";

const Certifications: React.FC = () => {
  const [certifications] = useState<Certification[]>(initialCertifications);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openModal = (cert: Certification) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  return (
    <section id="certifications" className="py-20 px-6 lg:px-12 bg-[#0a192f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-14 text-center">
            Certifications
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                onClick={() => openModal(cert)}
                className="bg-[#112240] rounded-xl overflow-hidden border border-gray-700 hover:border-[#64ffda]/60 transition cursor-pointer group"
              >
                {/* Thumbnail */}
                <div className="relative">
                  <img
                    src={cert.thumbnail}
                    alt={cert.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-1 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-[#64ffda] text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-xs">{cert.issueDate}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#112240] rounded-xl max-w-md w-full p-6 relative border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={22} />
            </button>

            {/* Thumbnail */}
            <img
              src={selectedCert.thumbnail}
              alt={selectedCert.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            {/* Modal Content */}
            <h3 className="text-xl font-semibold text-white mb-1">
              {selectedCert.title}
            </h3>
            <p className="text-[#64ffda] mb-1">{selectedCert.issuer}</p>
            <p className="text-gray-400 text-sm mb-4">
              Issued: {selectedCert.issueDate}
            </p>

            {selectedCert.link && (
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#e91e63] hover:text-white transition"
              >
                <ExternalLink size={18} />
                <span>View Certificate</span>
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Certifications;
