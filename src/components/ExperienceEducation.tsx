import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, Award, Building2 } from "lucide-react";
import { experiences, education } from "../data/portfolio";

const ExperienceEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 px-4 lg:px-8">
      {/* ↓ narrower container */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10 text-center">
            Experience & Education
          </h2>

          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="bg-[#112240] rounded-lg p-1 flex">
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-5 py-2.5 rounded-md transition-all duration-300 font-light ${
                  activeTab === "experience"
                    ? "bg-[#64ffda] text-[#0a192f]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`px-5 py-2.5 rounded-md transition-all duration-300 font-light ${
                  activeTab === "education"
                    ? "bg-[#64ffda] text-[#0a192f]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Education
              </button>
            </div>
          </div>

          {/* Switchable Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            {/* ====== EXPERIENCE: COMPACT CENTERED TIMELINE ====== */}
            {activeTab === "experience" && (
              <div className="relative">
                {/* center line */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#233554]" />

                <div className="space-y-8 md:space-y-12">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      className="grid grid-cols-1 md:grid-cols-[1fr_28px_1fr] items-center gap-5 md:gap-6"
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* LEFT card on even rows */}
                      {index % 2 === 0 ? (
                        <>
                          <div className="md:col-start-1">
                            <ExperienceCard exp={exp} />
                          </div>

                          {/* dot in middle column */}
                          <div className="hidden md:flex md:col-start-2 h-full items-center justify-center">
                            <span className="z-10 w-4 h-4 rounded-full bg-[#64ffda] border-4 border-[#0a192f]" />
                          </div>

                          <div className="hidden md:block md:col-start-3" />
                        </>
                      ) : (
                        /* RIGHT card on odd rows */
                        <>
                          <div className="hidden md:block md:col-start-1" />

                          <div className="hidden md:flex md:col-start-2 h-full items-center justify-center">
                            <span className="z-10 w-4 h-4 rounded-full bg-[#64ffda] border-4 border-[#0a192f]" />
                          </div>

                          <div className="md:col-start-3">
                            <ExperienceCard exp={exp} align="right" />
                          </div>
                        </>
                      )}

                      {/* Mobile fallback: left line timeline */}
                      <div className="md:hidden relative border-l-2 border-[#233554] pl-5 -mt-1">
                        <span className="absolute -left-[10px] top-[8px] w-4 h-4 rounded-full bg-[#64ffda] border-4 border-[#0a192f]" />
                        <div className="mt-1">
                          <ExperienceCard exp={exp} compact />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ====== EDUCATION: COMPACT GLOW GRID ====== */}
            {activeTab === "education" && (
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#e91e63] to-[#64ffda] rounded-2xl blur opacity-20 group-hover:opacity-60 transition" />
                    <div className="relative bg-[#112240] rounded-2xl p-5 border border-gray-700 hover:border-[#64ffda]/60 transition-shadow shadow-md hover:shadow-2xl">
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-1.5">
                        {edu.degree}
                      </h3>
                      <p className="text-[#e91e63] mb-1.5">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-gray-400 mb-1.5">
                        <MapPin size={16} />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span className="text-sm">{edu.duration}</span>
                      </div>
                      {edu.cgpa && (
                        <div className="flex items-center gap-2 mt-2">
                          <Award size={18} className="text-[#64ffda]" />
                          <span className="text-[#64ffda] font-semibold">CGPA: {edu.cgpa}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* ====== compact experience card ====== */
const ExperienceCard = ({
  exp,
  align,
  compact,
}: {
  exp: any;
  align?: "right" | "left";
  compact?: boolean;
}) => (
  <div
    className={[
      "bg-[#112240] rounded-xl p-5 border border-gray-700 shadow-md hover:shadow-xl transition",
      "hover:border-[#64ffda]/60",
      align === "right" ? "md:rounded-tr-2xl md:rounded-br-2xl" : "md:rounded-tl-2xl md:rounded-bl-2xl",
      compact ? "mt-0" : "",
    ].join(" ")}
  >
    <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{exp.role}</h3>
    <p className="text-[#64ffda] flex items-center gap-2 mb-1.5">
      <Building2 size={16} />
      {exp.company}
    </p>
    <div className="flex items-center gap-3 text-gray-400 text-sm mb-2.5">
      <Calendar size={16} />
      <span>
        {exp.startDate} - {exp.endDate}
      </span>
    </div>
    {Array.isArray(exp.description) && exp.description.length > 0 && (
      <ul className="space-y-1.5 text-gray-300 text-sm leading-relaxed">
        {exp.description.map((d: string, i: number) => (
          <li key={i} className="flex gap-2">
            <span className="text-[#64ffda]">•</span>
            <span>{d}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ExperienceEducation;
