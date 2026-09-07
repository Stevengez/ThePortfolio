import React from 'react'
import {  FaLinkedinIn } from "react-icons/fa";
import { SiGithub,SiGmail } from "react-icons/si";
import { contactProfileImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-zinc-900/50 p-4 lgl:p-8 rounded-2xl border border-zinc-800 flex flex-col gap-5 justify-center">
      <img
        className="w-full h-64 object-cover rounded-xl mb-2"
        src={contactProfileImg}
        alt="Steven Jocol contact profile"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white">Steven Jocol</h3>
        <p className="text-lg font-normal text-gray-400">
          Fullstack Developer & Systems Engineer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am a passionate developer with expertise in building robust and scalable applications across web and mobile platforms. I enjoy creating seamless experiences utilizing modern technologies.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">(+502) 33278165</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">steven.jsg@gmail.com</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Github: <span className="text-lightText">https://github.com/Stevengez</span>
        </p>
      </div>
      <div className="flex flex-col gap-0">
        <h2 className="text-sm uppercase tracking-widest text-slate-400 font-titleFont font-semibold mb-3">Find me on</h2>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Stevengez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-12 h-12 bg-slate-900/80 text-slate-300 hover:text-white text-xl inline-flex items-center justify-center rounded-xl border border-slate-700/80 hover:border-blue-500 hover:bg-blue-600/20 hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-md"
          >
            <SiGithub />
          </a>
          <a
            href="mailto:steven.jsg@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send Email"
            className="w-12 h-12 bg-slate-900/80 text-slate-300 hover:text-white text-xl inline-flex items-center justify-center rounded-xl border border-slate-700/80 hover:border-blue-500 hover:bg-blue-600/20 hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-md"
          >
            <SiGmail />
          </a>
          <a
            href="https://www.linkedin.com/in/steven-jocol/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-12 h-12 bg-slate-900/80 text-slate-300 hover:text-white text-xl inline-flex items-center justify-center rounded-xl border border-slate-700/80 hover:border-blue-500 hover:bg-blue-600/20 hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-md"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft