import React from 'react';
import Title from '../layouts/Title';
import {
  projectCatalogoImg,
  projectTaskLabImg,
  projectCodeNPlayImg,
  projectMiComunidadImg,
  projectLocalLuxImg,
  projectMyFamilyImg
} from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import CardSwap, { Card } from '../reactbits/CardSwap';
import { FaGlobe, FaStar } from "react-icons/fa";

const topProjects = [
  {
    title: "Catalogo",
    tag: "Mobile App • Play Store",
    des: "Mobile app enabling businesses to generate, curate, and share dynamic interactive product catalogs via PDF or web.",
    src: projectCatalogoImg,
    websiteLink: "https://play.google.com/store/apps/details?id=com.s7even.software.catalogo",
    stack: ["React Native", "Android", "API REST", "PDF Engine"]
  },
  {
    title: "TaskLab",
    tag: "Productivity & SaaS",
    des: "A multipurpose task and project management ecosystem with advanced scheduling and multi-tenant capabilities.",
    src: projectTaskLabImg,
    websiteLink: "https://tasklab.dev",
    stack: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind"]
  },
  {
    title: "CodeNPlay",
    tag: "Interactive Gaming & EdTech",
    des: "Real-time multiplayer coding arena where players program autonomous bot strategies and battle live.",
    src: projectCodeNPlayImg,
    websiteLink: "https://playncode.web.app/",
    stack: ["JavaScript", "Firebase", "WebSockets", "Canvas"]
  }
];

const allProjects = [
  {
    title: "MiComunidad",
    des: "Community marketplace mobile app designed to facilitate peer-to-peer barter, services, and neighborhood trade.",
    src: projectMiComunidadImg,
    websiteLink: "https://play.google.com/store/apps/details?id=com.s7evensoftware.comunidades"
  },
  {
    title: "LocalLux",
    des: "LAN controller app for Luxpower solar inverters, delivering low-latency real-time solar yield metrics and inverter commands.",
    src: projectLocalLuxImg,
    websiteLink: "https://play.google.com/store/apps/details?id=com.s7evensoftware.locallux"
  },
  {
    title: "MyFamily",
    des: "Intelligent Alexa voice skill executing Wi-Fi router probe presence detection to announce household arrivals and departures.",
    src: projectMyFamilyImg,
    websiteLink: "https://www.amazon.it/dp/B0G8QVY7J6/"
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center mb-10">
        <Title
          title="Engineered for Scalability & Impact"
          des="Featured Engineering Projects"
        />
      </div>

      {/* Flagship Interactive Showcase using CardSwap */}
      <div className="w-full mb-16 sm:mb-20 p-4 sm:p-8 md:p-12 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md relative overflow-hidden flex flex-col lg:flex-row items-center justify-between min-h-[480px] sm:min-h-[520px] gap-8 lg:gap-0">
        <div className="lg:w-1/2 flex flex-col gap-4 sm:gap-6 z-10 py-2 sm:py-6 text-center lg:text-left items-center lg:items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs w-fit uppercase tracking-widest font-semibold">
            <FaStar className="text-cyan-400 text-xs" />
            <span>Interactive Spotlight</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Top Flagship Ventures
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md">
            Interactive deck of top applications spanning cloud SaaS, Android utilities, and real-time multiplayer web applications.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500">
            <span>Click cards to cycle</span>
            <span>•</span>
            <span>Automatic hover preview</span>
          </div>
        </div>

        {/* CardSwap Deck */}
        <div className="lg:w-1/2 w-full h-[420px] sm:h-[460px] relative flex justify-center items-center overflow-visible">
          <CardSwap
            width={480}
            height={410}
            cardDistance={20}
            verticalDistance={14}
            delay={2200}
            pauseOnHover={true}
            skewAmount={0}
          >
            {topProjects.map((proj, idx) => (
              <Card
                key={idx}
                customClass="bg-slate-950/95 border border-slate-700/80 rounded-2xl p-4 sm:p-6 flex flex-col justify-between shadow-2xl backdrop-blur-md cursor-pointer hover:border-blue-500 transition-colors"
              >
                <div>
                  <div className="w-full h-36 sm:h-44 rounded-xl overflow-hidden mb-3 sm:mb-4 bg-white border border-slate-700/50 flex items-center justify-center p-2 shadow-inner">
                    <img
                      src={proj.src}
                      alt={proj.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-[11px] sm:text-xs font-semibold text-blue-400 uppercase tracking-wider">
                        {proj.tag}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5 sm:mt-1">{proj.title}</h3>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={proj.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${proj.title}`}
                        className="p-2 rounded-lg bg-blue-600/80 hover:bg-blue-600 text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGlobe size={15} />
                      </a>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2">
                    {proj.des}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2.5 sm:pt-3 border-t border-slate-800">
                  {proj.stack.map((tech, sIdx) => (
                    <span key={sIdx} className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-slate-800/80 text-slate-300 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>

      {/* Grid of Other Standout Products */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">More Notable Releases</h3>
        <p className="text-sm text-slate-400 mb-8">Hardware integrations, neighborhood social commerce, and IoT voice skills.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
        {allProjects.map((item, idx) => (
          <ProjectsCard
            key={idx}
            title={item.title}
            des={item.des}
            src={item.src}
            websiteLink={item.websiteLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;