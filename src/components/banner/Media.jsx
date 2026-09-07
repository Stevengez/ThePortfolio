import React from 'react';
import { FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiGithub, SiGmail, SiNextdotjs, SiNestjs, SiPostgresql, SiMongodb } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col sm:flex-row xl:flex-row gap-6 sm:gap-8 justify-between relative z-20">
      <div>
        <h2 className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 font-titleFont font-semibold mb-3">
          Find me on
        </h2>
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="https://github.com/Stevengez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-900/80 text-slate-300 hover:text-white text-lg sm:text-xl inline-flex items-center justify-center rounded-xl border border-slate-700/80 hover:border-blue-500 hover:bg-blue-600/20 hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-md"
          >
            <SiGithub />
          </a>
          <a
            href="mailto:steven.jsg@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send Email"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-900/80 text-slate-300 hover:text-white text-lg sm:text-xl inline-flex items-center justify-center rounded-xl border border-slate-700/80 hover:border-blue-500 hover:bg-blue-600/20 hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-md"
          >
            <SiGmail />
          </a>
          <a
            href="https://www.linkedin.com/in/steven-jocol/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-900/80 text-slate-300 hover:text-white text-lg sm:text-xl inline-flex items-center justify-center rounded-xl border border-slate-700/80 hover:border-blue-500 hover:bg-blue-600/20 hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-md"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 font-titleFont font-semibold mb-3">
          Core Web Stack
        </h2>
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          <span title="React.js" className="w-10 h-10 sm:w-11 sm:h-11 bg-slate-900/80 text-cyan-400 text-lg sm:text-xl inline-flex items-center justify-center rounded-xl border border-slate-700/80 shadow-md hover:border-cyan-400/60 transition-colors">
            <FaReact />
          </span>
          <span title="Next.js" className="w-10 h-10 sm:w-11 sm:h-11 bg-slate-900/80 text-white text-lg sm:text-xl inline-flex items-center justify-center rounded-xl border border-slate-700/80 shadow-md hover:border-slate-400 transition-colors">
            <SiNextdotjs />
          </span>
          <span title="NestJS" className="w-10 h-10 sm:w-11 sm:h-11 bg-slate-900/80 text-red-500 text-lg sm:text-xl inline-flex items-center justify-center rounded-xl border border-slate-700/80 shadow-md hover:border-red-500/60 transition-colors">
            <SiNestjs />
          </span>
          <span title="Node.js" className="w-10 h-10 sm:w-11 sm:h-11 bg-slate-900/80 text-emerald-400 text-lg sm:text-xl inline-flex items-center justify-center rounded-xl border border-slate-700/80 shadow-md hover:border-emerald-400/60 transition-colors">
            <FaNodeJs />
          </span>
          <span title="PostgreSQL" className="w-10 h-10 sm:w-11 sm:h-11 bg-slate-900/80 text-sky-400 text-lg sm:text-xl inline-flex items-center justify-center rounded-xl border border-slate-700/80 shadow-md hover:border-sky-400/60 transition-colors">
            <SiPostgresql />
          </span>
          <span title="MongoDB" className="w-10 h-10 sm:w-11 sm:h-11 bg-slate-900/80 text-green-500 text-lg sm:text-xl inline-flex items-center justify-center rounded-xl border border-slate-700/80 shadow-md hover:border-green-500/60 transition-colors">
            <SiMongodb />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media