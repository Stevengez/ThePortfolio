import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="w-full px-6 sm:px-8 py-6 sm:py-7 rounded-2xl border border-zinc-800 bg-zinc-900/50 flex flex-col justify-between hover:bg-zinc-800/80 hover:border-designColor transition-colors duration-300 group min-h-[220px]">
      <div className="flex flex-col gap-3.5">
        {/* Same row: Icon and Title */}
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-2xl text-designColor shrink-0">
            {icon ? (
              icon
            ) : (
              <span className="w-4 h-4 rounded bg-designColor inline-flex" />
            )}
          </div>
          <h2 className="text-lg sm:text-xl font-titleFont font-bold text-white group-hover:text-designColor transition-colors">
            {title}
          </h2>
        </div>
        
        <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
          {des}
        </p>
      </div>

      <div className="pt-4 flex items-center gap-1.5 text-designColor text-xs sm:text-sm font-semibold">
        <span>Explore Expertise</span>
        <HiArrowRight className="group-hover:translate-x-1 transition-transform text-xs sm:text-sm" />
      </div>
    </div>
  );
};

export default Card;