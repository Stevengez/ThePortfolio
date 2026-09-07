import React, { useState } from 'react';
import Title from '../layouts/Title';
import { FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaEye, FaEyeSlash, FaCheck } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { contactProfileImg } from "../../assets/index";

const Contact = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("steven.jsg@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="w-full py-16 sm:py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center mb-10 sm:mb-12">
        <Title title="GET IN TOUCH" des="Contact & Connect" />
      </div>

      <div className="w-full max-w-5xl mx-auto rounded-3xl bg-slate-900/40 border border-slate-800/90 backdrop-blur-md overflow-hidden p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Avatar & Persona Column */}
          <div className="lg:col-span-5 flex flex-col items-center text-center lg:text-left lg:items-start">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border border-blue-500/30 shadow-xl mb-4 sm:mb-6 bg-slate-950">
              <img
                className="w-full h-full object-cover"
                src={contactProfileImg}
                alt="Steven Jocol"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Steven Jocol</h3>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-400 mt-1 mb-3 sm:mb-4">
              Fullstack Developer & Systems Engineer
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Passionate about architecting high-scale web and mobile platforms. Reach out directly for project collaborations, technical consulting, or leadership opportunities.
            </p>
          </div>

          {/* Details & Find Me Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full min-w-0">
            
            {/* Quick Contact Rows - Distinct separate rows for email, phone, and location */}
            <div className="flex flex-col gap-3.5 w-full min-w-0">
              
              {/* Row 1: Email Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-inner w-full min-w-0">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <FaEnvelope size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-mono">Primary Email</p>
                    <a
                      href="mailto:steven.jsg@gmail.com"
                      className="text-sm font-mono text-slate-200 hover:text-blue-400 transition-colors block truncate font-medium"
                      title="steven.jsg@gmail.com"
                    >
                      steven.jsg@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="w-full md:w-auto px-3.5 py-2 md:py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-blue-500 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-all flex items-center justify-center gap-1.5 shrink-0"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-emerald-400 text-xs" />
                      <span>Copied to Clipboard</span>
                    </>
                  ) : (
                    "Copy Email"
                  )}
                </button>
              </div>

              {/* Row 2: Phone Card (Blur on load, reveal on click) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-inner w-full min-w-0">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <FaPhoneAlt size={15} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-mono">Direct Phone</p>
                    <span
                      onClick={() => setShowPhone(!showPhone)}
                      className={`font-mono text-sm tracking-wider cursor-pointer select-none transition-all duration-300 block font-medium truncate ${
                        showPhone ? "text-slate-200 filter-none" : "text-slate-400 blur-sm hover:blur-[2px]"
                      }`}
                      title="Click to reveal/blur"
                    >
                      (+502) 3327-8165
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setShowPhone(!showPhone)}
                  className="w-full md:w-auto px-3.5 py-2 md:py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-slate-500 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center justify-center gap-1.5 shrink-0"
                  title={showPhone ? "Hide phone" : "Reveal phone"}
                >
                  {showPhone ? (
                    <>
                      <FaEyeSlash size={13} />
                      <span>Blur Number</span>
                    </>
                  ) : (
                    <>
                      <FaEye size={13} />
                      <span>Reveal Number</span>
                    </>
                  )}
                </button>
              </div>

              {/* Row 3: Location Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center gap-3 shadow-inner w-full min-w-0">
                <div className="w-10 h-10 rounded-xl bg-rose-600/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                  <FaMapMarkerAlt size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold font-mono">Public Location</p>
                  <p className="text-sm text-slate-200 font-medium truncate">Guatemala City, Guatemala</p>
                </div>
              </div>

            </div>

            {/* Find Me On - Highlighted interactive channels */}
            <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-950/30 via-slate-950/60 to-slate-950/60 border border-blue-500/20 overflow-hidden">
              <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-3.5 font-mono">
                Direct Channels • Find Me On
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
                <a
                  href="https://github.com/Stevengez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-blue-500 hover:bg-blue-600/15 text-slate-200 hover:text-white transition-all duration-200 shadow-md group min-w-0"
                >
                  <SiGithub className="text-xl text-slate-400 group-hover:text-white transition-colors shrink-0" />
                  <div className="text-left min-w-0">
                    <p className="text-xs font-bold leading-none">GitHub</p>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5 truncate">@Stevengez</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/steven-jocol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-blue-500 hover:bg-blue-600/15 text-slate-200 hover:text-white transition-all duration-200 shadow-md group min-w-0"
                >
                  <FaLinkedinIn className="text-xl text-blue-400 group-hover:text-blue-300 transition-colors shrink-0" />
                  <div className="text-left min-w-0">
                    <p className="text-xs font-bold leading-none">LinkedIn</p>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5 truncate">in/steven-jocol</p>
                  </div>
                </a>

                <a
                  href="mailto:steven.jsg@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-blue-500 hover:bg-blue-600/15 text-slate-200 hover:text-white transition-all duration-200 shadow-md group min-w-0"
                >
                  <SiGmail className="text-xl text-red-400 group-hover:text-red-300 transition-colors shrink-0" />
                  <div className="text-left min-w-0">
                    <p className="text-xs font-bold leading-none">Email</p>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5 truncate">Direct Message</p>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;