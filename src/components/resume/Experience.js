import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 sm:py-10 font-titleFont flex flex-col gap-10 md:gap-14 lgl:flex-row"
    >
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-2 sm:gap-3">
          <p className="text-xs sm:text-sm text-designColor tracking-[4px] uppercase font-semibold">2014 - Present</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Job Experience</h2>
        </div>
        <div className="mt-6 sm:mt-8 w-full h-auto border-l-[4px] sm:border-l-[6px] border-l-slate-800 flex flex-col">
          <ResumeCard
            title="Fullstack Developer"
            subTitle="Anacafe - (Nov 2023 - Present)"
            result="Guatemala"
            des="Development and deployment of scalable full-stack solutions utilizing cutting-edge technologies including TypeScript, Next.js, React, Redux, Node.js, Docker, Kubernetes, and PostgreSQL."
          />
          <ResumeCard
            title="Developer Success Engineer"
            subTitle="Telus International / monday.com - (2020 - Nov 2023)"
            result="Guatemala"
            des="Developer Success Engineer for the monday.com platform. Focused on Mobile App (Android), API GraphQL, Single Sign On (SSO), and their Apps Framework."
          />
          <ResumeCard
            title="Freelance Developer"
            subTitle="Self Employed - (2018 - Present)"
            result="Remote"
            des="Development of multiple personal projects encompassing both self-learning initiatives and commercial ventures."
          />
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-2 sm:gap-3">
          <p className="text-xs sm:text-sm text-designColor tracking-[4px] uppercase font-semibold">2014 - 2020</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Early Experience</h2>
        </div>
        <div className="mt-6 sm:mt-8 w-full h-auto border-l-[4px] sm:border-l-[6px] border-l-slate-800 flex flex-col">
          <ResumeCard
            title="Tech Support Representative"
            subTitle="Allied Global S.A. - (2016 - 2020)"
            result="Guatemala"
            des="Technical support for telecommunications services. Handled complex troubleshooting and ensured customer satisfaction."
          />
          <ResumeCard
            title="Support and Maintenance Technician"
            subTitle="Intelaf S.A. - (2014 - 2016)"
            result="Guatemala"
            des="Computer Assembly, Maintenance, and Technical Services for hardware and software systems."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
