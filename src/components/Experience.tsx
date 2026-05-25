import React from "react";
import { Experience as ExperienceType, ResumeBasicInfo } from "../types";
import { motion } from "framer-motion";

type ExperienceProps = {
  resumeExperience: ExperienceType[];
  resumeBasicInfo: ResumeBasicInfo;
}

const Experience: React.FC<ExperienceProps> = ({ resumeExperience, resumeBasicInfo }) => {
  if (!resumeExperience || !resumeBasicInfo) {
    return null;
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-900">Experience</h1>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2 hidden md:block rounded-full"></div>

          <div className="space-y-12">
            {resumeExperience.map((work, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={work.title + work.company}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 flex items-center justify-center z-10 hidden md:flex">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2 px-8"></div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 px-4 md:px-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative">

                      {/* Arrow pointer for desktop */}
                      <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-gray-100 transform rotate-45 ${isEven ? 'left-full -ml-2 border-r border-t' : 'right-full -mr-2 border-l border-b'}`}></div>

                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{work.title}</h3>
                          <h4 className="text-lg text-blue-600 font-medium">{work.company}</h4>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 whitespace-nowrap">
                          {work.years}
                        </span>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-gray-100">
                        {work.technologies && work.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-md border border-blue-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
