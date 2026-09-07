import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";
import LogoLoop from "../reactbits/LogoLoop";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiPostgresql, 
  SiNestjs, 
  SiKotlin, 
  SiKubernetes,
  SiDotnet,
  SiRedis,
  SiAndroid,
  SiDebian 
} from "react-icons/si";

const MetalChip = ({ icon, label }) => (
  <div className="relative group overflow-hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-slate-700/80 shadow-[0_2px_8px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-cyan-400/60 transition-all duration-300 select-none">
    {/* Metallic lightning sweep beam */}
    <div className="absolute inset-0 -top-1 -bottom-1 w-1/2 pointer-events-none bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent animate-metal-shimmer" />
    
    {/* Subtle top edge metallic reflection highlight */}
    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200/40 to-transparent" />
    
    <span className="text-sm shrink-0 drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]">
      {icon}
    </span>
    <span className="text-xs font-semibold tracking-wider font-mono uppercase text-slate-200 group-hover:text-white transition-colors">
      {label}
    </span>
  </div>
);

const techLogos = [
  { node: <MetalChip icon={<SiTypescript className="text-blue-400" />} label="TypeScript" /> },
  { node: <MetalChip icon={<FaReact className="text-cyan-400" />} label="React.js" /> },
  { node: <MetalChip icon={<SiNextdotjs className="text-white" />} label="Next.js" /> },
  { node: <MetalChip icon={<SiDotnet className="text-purple-400" />} label=".NET" /> },
  { node: <MetalChip icon={<FaNodeJs className="text-emerald-400" />} label="Node.js" /> },
  { node: <MetalChip icon={<SiNestjs className="text-red-500" />} label="NestJS" /> },
  { node: <MetalChip icon={<SiPostgresql className="text-sky-400" />} label="PostgreSQL" /> },
  { node: <MetalChip icon={<SiRedis className="text-red-500" />} label="Redis" /> },
  { node: <MetalChip icon={<FaDocker className="text-blue-400" />} label="Docker" /> },
  { node: <MetalChip icon={<SiKubernetes className="text-blue-500" />} label="Kubernetes" /> },
  { node: <MetalChip icon={<SiKotlin className="text-purple-400" />} label="Kotlin" /> },
  { node: <MetalChip icon={<SiAndroid className="text-emerald-400" />} label="Jetpack Compose" /> },
  { node: <MetalChip icon={<SiDebian className="text-rose-400" />} label="Linux (Debian)" /> },
  { node: <MetalChip icon={<FaGitAlt className="text-orange-500" />} label="Git" /> },
];

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-16 sm:py-20 border-b-[1px] border-b-black"
    >
      <div className="mb-12 sm:mb-14">
        <p className="text-xs uppercase tracking-widest text-designColor mb-2 font-semibold">Stack At A Glance</p>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6">Technologies I Engineer With Daily</h3>
        <div className="w-full py-3 rounded-2xl bg-slate-950/40 border border-slate-800/80 overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={35}
            gap={14}
            logoHeight={34}
            pauseOnHover={true}
            scaleOnHover={true}
          />
        </div>
      </div>

      <Title title="Expertise" des="What I Deliver" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;
