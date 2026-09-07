import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaFolderOpen } from "react-icons/fa";
import { SiGithub,SiGmail } from "react-icons/si";
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBrand, setShowBrand] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("hero-name-section");
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        // Trigger brand appearance precisely when "Hi, I'm Steven..." scrolls past the topbar (80px height)
        if (rect.bottom <= 80) {
          setShowBrand(true);
        } else {
          setShowBrand(false);
        }
      } else {
        // Fallback based on scroll offset
        if (window.scrollY > 220) {
          setShowBrand(true);
        } else {
          setShowBrand(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-md shadow-black/25 transition-all">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center font-titleFont px-4 sm:px-6 md:px-8 h-20">
        
        {/* Brand initials and name - appears when scrolled past hero title */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`flex items-center gap-3 cursor-pointer transition-all duration-300 ${
            showBrand
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 -translate-x-3 pointer-events-none"
          }`}
        >
          <div className="hidden mdl:flex w-9 h-9 rounded-xl bg-blue-600 items-center justify-center font-black text-white text-lg shadow-lg shadow-blue-500/30 shrink-0">
            SJ
          </div>
          <span className="font-bold text-white tracking-wide text-lg whitespace-nowrap">
            Steven Jocol
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-8">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-sm font-medium text-slate-400 tracking-wide cursor-pointer hover:text-blue-400 duration-200"
                key={_id}
              >
                <Link
                  activeClass="text-blue-400 font-semibold"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md shadow-blue-600/20 cursor-pointer"
          >
            <FaFolderOpen className="text-xs" />
            <span>Projects</span>
          </Link>
          <button
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Toggle Navigation Menu"
            className="text-xl mdl:hidden bg-slate-900/90 hover:bg-slate-800 w-10 h-10 inline-flex items-center justify-center rounded-xl text-blue-400 cursor-pointer border border-slate-700/80 transition-colors"
          >
            <FiMenu />
          </button>
        </div>

        {showMenu && (
          <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-start animate-fade-in mdl:hidden">
            <div 
              className="fixed inset-0"
              onClick={() => setShowMenu(false)}
              aria-hidden="true"
            />
            <div className="relative w-[85%] max-w-xs h-full bg-slate-950 border-r border-slate-800 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl z-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
                      SJ
                    </div>
                    <span className="font-bold text-white tracking-wide">Steven Jocol</span>
                  </div>
                  <button
                    onClick={() => setShowMenu(false)}
                    aria-label="Close Navigation Menu"
                    className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 text-2xl transition-colors"
                  >
                    <MdClose />
                  </button>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Fullstack Developer & Systems Engineer passionate about scalable architectures and high-impact platforms.
                </p>

                <ul className="flex flex-col gap-3">
                  {navLinksdata.map((item) => (
                    <li
                      key={item._id}
                      className="text-sm font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-900/80 rounded-xl px-3 py-2.5 transition-all cursor-pointer"
                    >
                      <Link
                        onClick={() => setShowMenu(false)}
                        activeClass="text-blue-400 font-semibold"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="block w-full"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
                <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold font-mono">
                  Find me on
                </h2>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Stevengez"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-10 h-10 bg-slate-900 text-slate-300 hover:text-white text-lg inline-flex items-center justify-center rounded-xl border border-slate-800 hover:border-blue-500 transition-colors"
                  >
                    <SiGithub />
                  </a>
                  <a
                    href="mailto:steven.jsg@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Send Email"
                    className="w-10 h-10 bg-slate-900 text-slate-300 hover:text-white text-lg inline-flex items-center justify-center rounded-xl border border-slate-800 hover:border-blue-500 transition-colors"
                  >
                    <SiGmail />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/steven-jocol/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-10 h-10 bg-slate-900 text-slate-300 hover:text-white text-lg inline-flex items-center justify-center rounded-xl border border-slate-800 hover:border-blue-500 transition-colors"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;