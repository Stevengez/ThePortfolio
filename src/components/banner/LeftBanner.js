import React from 'react';
import { Link } from 'react-scroll';
import { FaBolt } from 'react-icons/fa';
import SplitFlapText from '../reactbits/SplitFlapText';
import Media from './Media';

const LeftBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-8 md:gap-10">
      <div className="flex flex-col gap-4 sm:gap-5">
        <h1 id="hero-name-section" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          Hi, I'm <span className="text-designColor capitalize">Steven Jocol</span>
        </h1>

        <div className="h-14 sm:h-16 flex items-center overflow-x-auto py-1 max-w-full scrollbar-none">
          <div className="transform scale-[0.82] xs:scale-[0.88] sm:scale-100 origin-left">
            <SplitFlapText
              words={["FULLSTACK DEV", "SYSTEMS ENG", "SCRUM MASTER", "MOBILE APPS"]}
              fontSize={26}
              tileColor="#0f172a"
              textColor="#38bdf8"
              tileRadius={6}
              gap={3}
              padTo={14}
              flipDuration={0.08}
              cycleDelay={2200}
            />
          </div>
        </div>

        <p className="text-sm sm:text-base font-bodyFont leading-relaxed sm:leading-7 text-slate-400">
          Passionate systems engineer and fullstack developer focused on scalable web & mobile architectures. I turn complex requirements into robust, high-performance software.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="h-12 inline-flex items-center justify-center gap-2 px-5 sm:px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 cursor-pointer text-center shrink-0"
          >
            <FaBolt className="text-cyan-300 text-xs shrink-0" />
            <span>Jump directly to Projects</span>
          </Link>
          <Link
            to="resume"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="h-12 inline-flex items-center justify-center px-5 sm:px-6 rounded-xl border border-slate-700 bg-slate-800/40 hover:bg-slate-800 hover:border-slate-500 text-slate-200 font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer text-center shrink-0"
          >
            <span>View Experience & Stack</span>
          </Link>
        </div>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;