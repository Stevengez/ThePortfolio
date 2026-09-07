import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from "./Experience";
import { FaBriefcase, FaCode, FaGraduationCap } from "react-icons/fa";

const Resume = () => {
   const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Proven Track Record & Technical Pedigree" des="Career & Credentials" />
      </div>
      <div className="mb-10">
        <ul className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <li
            onClick={() => setActiveTab('experience')}
            className={`${
              activeTab === 'experience'
                ? "border-blue-500 bg-blue-500/10 text-white shadow-lg shadow-blue-500/15"
                : "border-slate-800 bg-slate-900/40 text-slate-400"
            } py-4 px-4 text-center cursor-pointer rounded-2xl border font-semibold transition-all duration-200 hover:border-slate-600 hover:text-white flex flex-col items-center justify-center gap-2 group`}
          >
            {/* Row 1: Button / Icon */}
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-colors ${
              activeTab === 'experience'
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                : "bg-slate-800/80 text-blue-400 group-hover:bg-slate-800"
            }`}>
              <FaBriefcase />
            </div>
            {/* Row 2: Title */}
            <span className="text-xs sm:text-sm tracking-wide">Job Experience</span>
          </li>

          <li
            onClick={() => setActiveTab('skills')}
            className={`${
              activeTab === 'skills'
                ? "border-blue-500 bg-blue-500/10 text-white shadow-lg shadow-blue-500/15"
                : "border-slate-800 bg-slate-900/40 text-slate-400"
            } py-4 px-4 text-center cursor-pointer rounded-2xl border font-semibold transition-all duration-200 hover:border-slate-600 hover:text-white flex flex-col items-center justify-center gap-2 group`}
          >
            {/* Row 1: Button / Icon */}
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-colors ${
              activeTab === 'skills'
                ? "bg-cyan-600 text-white shadow-md shadow-cyan-500/30"
                : "bg-slate-800/80 text-cyan-400 group-hover:bg-slate-800"
            }`}>
              <FaCode />
            </div>
            {/* Row 2: Title */}
            <span className="text-xs sm:text-sm tracking-wide">Tech Stack & Skills</span>
          </li>

          <li
            onClick={() => setActiveTab('education')}
            className={`${
              activeTab === 'education'
                ? "border-blue-500 bg-blue-500/10 text-white shadow-lg shadow-blue-500/15"
                : "border-slate-800 bg-slate-900/40 text-slate-400"
            } py-4 px-4 text-center cursor-pointer rounded-2xl border font-semibold transition-all duration-200 hover:border-slate-600 hover:text-white flex flex-col items-center justify-center gap-2 group`}
          >
            {/* Row 1: Button / Icon */}
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-colors ${
              activeTab === 'education'
                ? "bg-purple-600 text-white shadow-md shadow-purple-500/30"
                : "bg-slate-800/80 text-purple-400 group-hover:bg-slate-800"
            }`}>
              <FaGraduationCap />
            </div>
            {/* Row 2: Title */}
            <span className="text-xs sm:text-sm tracking-wide">Degrees & Certifications</span>
          </li>
        </ul>
      </div>

      {activeTab === 'experience' && <Experience />}
      {activeTab === 'skills' && <Skills />}
      {activeTab === 'education' && <Education />}
    </section>
  );
}

export default Resume