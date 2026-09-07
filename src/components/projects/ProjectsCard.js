import React from 'react'
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, websiteLink }) => {
  return (
    <div className="w-full p-4 sm:p-6 xl:p-8 h-auto rounded-2xl border border-zinc-800 bg-zinc-900/50 flex flex-col justify-between hover:border-designColor transition-colors duration-300 group">
      <div>
        <div className="w-full h-48 sm:h-52 md:h-56 overflow-hidden rounded-xl mb-4 bg-white border border-slate-700/50 flex items-center justify-center p-2 shadow-inner">
          <img
            className="w-full h-full object-contain group-hover:scale-105 duration-300 cursor-pointer"
            src={src}
            alt={title}
          />
        </div>
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-base sm:text-lg uppercase text-designColor font-semibold tracking-wide">
              {title}
            </h3>
            {websiteLink && (
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${title}`}
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-blue-600 hover:text-white inline-flex justify-center items-center text-slate-300 transition-colors cursor-pointer shrink-0"
              >
                <FaGlobe size={15} />
              </a>
            )}
          </div>
          <p className="text-xs sm:text-sm tracking-wide text-slate-400 group-hover:text-slate-300 duration-300 leading-relaxed">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard