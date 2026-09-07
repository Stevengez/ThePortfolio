import React from 'react'

const ResumeCard = ({title,subTitle,result,des}) => {
  return (
    <div className="w-full h-auto group flex">
      <div className="w-6 sm:w-10 h-[4px] sm:h-[6px] bgOpacity mt-8 sm:mt-12 relative shrink-0">
        <span className="absolute w-4 h-4 sm:w-5 sm:h-5 rounded-full -top-1.5 sm:-top-2 -left-2 sm:-left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/80 duration-300 p-4 sm:p-6 lgl:px-10 flex flex-col justify-center gap-4 sm:gap-6 mb-6">
        <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 sm:items-center">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div className="self-start sm:self-auto shrink-0 mt-1 sm:mt-0">
            <p className="px-3 sm:px-4 py-1 sm:py-1.5 text-designColor bg-zinc-800/80 rounded-lg flex justify-center items-center text-xs sm:text-sm font-medium border border-zinc-700">
              {result}
            </p>
          </div>
        </div>
        <p className="text-xs sm:text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300 leading-relaxed">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard