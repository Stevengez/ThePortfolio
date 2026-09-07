import React from 'react';
import { Link } from 'react-scroll';
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full py-12 sm:py-16 border-b border-b-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
      {/* Brand & Persona Info */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-blue-500/30">
            SJ
          </div>
          <span className="font-bold text-white tracking-wide text-xl">Steven Jocol</span>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">
          Systems Engineer & Fullstack Developer specializing in high-performance cloud web architectures and native mobile ecosystems.
        </p>
        <div className="flex items-center gap-3 pt-2">
          <a
            href="https://github.com/Stevengez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 bg-slate-900/90 text-slate-300 hover:text-white text-lg inline-flex items-center justify-center rounded-xl border border-slate-800 hover:border-blue-500 hover:bg-blue-600/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shadow-md"
          >
            <SiGithub />
          </a>
          <a
            href="mailto:steven.jsg@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send Email"
            className="w-10 h-10 bg-slate-900/90 text-slate-300 hover:text-white text-lg inline-flex items-center justify-center rounded-xl border border-slate-800 hover:border-blue-500 hover:bg-blue-600/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shadow-md"
          >
            <SiGmail />
          </a>
          <a
            href="https://www.linkedin.com/in/steven-jocol/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 bg-slate-900/90 text-slate-300 hover:text-white text-lg inline-flex items-center justify-center rounded-xl border border-slate-800 hover:border-blue-500 hover:bg-blue-600/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shadow-md"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Working In-Page Navigation */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-4 font-mono">
          Navigation
        </h3>
        <ul className="flex flex-col gap-2.5 text-sm text-slate-400 font-medium">
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-white transition-colors cursor-pointer inline-block"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-white transition-colors cursor-pointer inline-block"
            >
              Expertise & Tech Stack
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-white transition-colors cursor-pointer inline-block"
            >
              Featured Projects
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-white transition-colors cursor-pointer inline-block"
            >
              Experience & Credentials
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-white transition-colors cursor-pointer inline-block"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Working Live Project Links */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-4 font-mono">
          Live Projects
        </h3>
        <ul className="flex flex-col gap-2.5 text-sm text-slate-400 font-medium">
          <li>
            <a
              href="https://tasklab.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <span>TaskLab SaaS</span>
              <span className="text-[10px] text-slate-500 font-mono">↗</span>
            </a>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.s7even.software.catalogo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <span>Catalogo (Play Store)</span>
              <span className="text-[10px] text-slate-500 font-mono">↗</span>
            </a>
          </li>
          <li>
            <a
              href="https://playncode.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <span>CodeNPlay Game</span>
              <span className="text-[10px] text-slate-500 font-mono">↗</span>
            </a>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.s7evensoftware.locallux"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <span>LocalLux Inverter</span>
              <span className="text-[10px] text-slate-500 font-mono">↗</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.it/dp/B0G8QVY7J6/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <span>MyFamily Alexa Skill</span>
              <span className="text-[10px] text-slate-500 font-mono">↗</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Direct Connect & Location */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-4 font-mono">
          Connect
        </h3>
        <div className="flex flex-col gap-3 text-sm text-slate-400">
          <p className="leading-relaxed">
            Based in <span className="text-slate-200 font-medium">Guatemala City, Guatemala</span>.
          </p>
          <p className="leading-relaxed">
            Open to full-time remote engineering roles, contract consulting, and technical architecture.
          </p>
          <div className="pt-2">
            <a
              href="mailto:steven.jsg@gmail.com"
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-all"
            >
              <FaEnvelope className="text-xs" />
              <span>Send Direct Message</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;