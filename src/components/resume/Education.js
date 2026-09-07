import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-8 sm:gap-12 lgl:gap-16 py-6"
    >
      {/* part one */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 sm:py-6 font-titleFont flex flex-col gap-2 sm:gap-3">
          <p className="text-xs sm:text-sm text-designColor tracking-[4px] uppercase font-semibold">2016 - Present</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Degrees</h2>
        </div>
        <div className="mt-6 sm:mt-8 w-full h-auto border-l-[4px] sm:border-l-[6px] border-l-slate-800 flex flex-col">
          <ResumeCard
            title="Master's Degree in Information and Communication Technologies"
            subTitle="Universidad San Carlos de Guatemala (Feb 2026 - Present)"
            result="In Progress"
            des="Currently expanding my knowledge in advanced communication technologies and modern information systems."
          />
          <ResumeCard
            title="Science and Systems Engineering"
            subTitle="Universidad San Carlos de Guatemala (2016 - Dec 2025)"
            result="Completed"
            des="Comprehensive engineering degree covering software architecture, computer science principles, database systems, and fullstack development."
          />
        </div>
      </div>

      {/* part Two */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 sm:py-6 font-titleFont flex flex-col gap-2 sm:gap-3">
          <p className="text-xs sm:text-sm text-designColor tracking-[4px] uppercase font-semibold">2022 - 2026</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Certifications</h2>
        </div>
        <div className="mt-6 sm:mt-8 w-full h-auto border-l-[4px] sm:border-l-[6px] border-l-slate-800 flex flex-col">
          <ResumeCard
            title="Scrum Master Certified"
            subTitle="TecnasU Learning Center (Jan 2026 - Feb 2026)"
            result="Certified"
            des="Mastered agile methodologies and the Scrum framework for leading software development teams efficiently."
          />
          <ResumeCard
            title="Systems Integration and Event Driven Architecture"
            subTitle="Guatemaltek (May 2024 - Aug 2024)"
            result="Certified"
            des="Learned advanced integration patterns and event-driven architectures to build highly scalable backend solutions."
          />
          <ResumeCard
            title="React and NodeJS Developer"
            subTitle="Academik (Apr 2022 - Jun 2022)"
            result="Certified"
            des="Specialized training in building modern web applications using the React frontend library and NodeJS backend."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education