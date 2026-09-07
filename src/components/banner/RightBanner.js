import React from 'react'
import { heroBannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative py-6 sm:py-8">
      {/* Outer ambient glow circles that merge seamlessly with dark background */}
      <div className="absolute w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] lgl:w-[480px] lgl:h-[480px] rounded-full bg-blue-600/15 blur-3xl -z-0 pointer-events-none animate-pulse"></div>
      <div className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lgl:w-[380px] lgl:h-[380px] rounded-full bg-cyan-500/10 blur-2xl -z-0 pointer-events-none"></div>

      {/* Outer decorative dashed orbit ring */}
      <div className="relative flex items-center justify-center p-2 sm:p-3 rounded-full border border-blue-500/20 shadow-2xl shadow-blue-500/10 max-w-full">
        {/* Inner rotating gradient accent ring */}
        <div className="p-1.5 sm:p-2 rounded-full bg-gradient-to-tr from-blue-600/30 via-slate-800/40 to-cyan-400/30 border border-slate-700/60">
          {/* Main circular image container with radial feather and bottom fade */}
          <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 lgl:w-96 lgl:h-96 rounded-full overflow-hidden border-2 border-blue-500/40 shadow-inner bg-slate-950">
            <img
              className="w-full h-full object-cover object-top filter brightness-105 contrast-105 hover:scale-105 transition-transform duration-500"
              src={heroBannerImg}
              alt="Steven Jocol profile"
            />
            {/* Radial vignette / bottom blend overlay so photo melts into dark canvas */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none"></div>
          </div>
        </div>

        {/* Floating status indicator badge positioned on circular photo */}
        <div className="absolute bottom-1 right-0 sm:bottom-4 sm:right-3 bg-slate-900/95 border border-blue-500/30 backdrop-blur-md px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-2xl flex items-center gap-2 z-20">
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-semibold text-slate-200 tracking-wide whitespace-nowrap">
            Available for opportunities
          </span>
        </div>
      </div>
    </div>
  );
}

export default RightBanner