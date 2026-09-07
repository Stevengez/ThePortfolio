import React from 'react'
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-8 sm:gap-12 lgl:gap-20 py-4"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-4 sm:py-6 font-titleFont flex flex-col gap-2 sm:gap-3">
          <p className="text-xs sm:text-sm text-designColor tracking-[4px] uppercase font-semibold">
            Tech Stack
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Frontend & Core</h2>
        </div>
        <div className="mt-4 sm:mt-6 w-full flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-xs sm:text-sm uppercase font-medium">Javascript / Typescript</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-xs sm:text-sm">95%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs sm:text-sm uppercase font-medium">React.js & Next.js</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-xs sm:text-sm">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs sm:text-sm uppercase font-medium">Git & Version Control</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-xs sm:text-sm">95%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs sm:text-sm uppercase font-medium">Java / Kotlin</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[75%] h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-md relative"
              >
                <span className="absolute -top-7 right-0 text-xs sm:text-sm">75%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-4 sm:py-6 font-titleFont flex flex-col gap-2 sm:gap-3">
          <p className="text-xs sm:text-sm text-designColor tracking-[4px] uppercase font-semibold">
            Backend & Architecture
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Backend & DevOps</h2>
        </div>
        <div className="mt-4 sm:mt-6 flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Node.js</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">NestJS & APIRest</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[85%] h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">85%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">SQL / PostgreSQL</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[85%] h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">85%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Docker & Kubernetes</p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">80%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills