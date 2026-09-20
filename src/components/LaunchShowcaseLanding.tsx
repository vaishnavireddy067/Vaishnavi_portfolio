"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Brain, Cpu, Code2, Database, ArrowRight } from "lucide-react";
import NeuralHoloCore from "./NeuralHoloCore";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={`${className || ""} pointer-events-none`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={`${className || ""} pointer-events-none`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

interface LaunchShowcaseLandingProps {
  onEnterPortfolio: (targetSlide?: string) => void;
  isDarkMode?: boolean;
}

export default function LaunchShowcaseLanding({
  onEnterPortfolio,
}: LaunchShowcaseLandingProps) {
  const handleLaunch = (targetSlide: string = "home") => {
    onEnterPortfolio(targetSlide);
  };

  // Mouse tilt parallax for 3D persona showcase
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-250, 250], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-250, 250], [-12, 12]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      className="h-screen w-full relative overflow-hidden bg-[#070b14] text-[#e8edf5] select-none flex flex-col justify-between p-5 sm:p-8 lg:p-10"
      style={{
        fontFamily: "var(--font-heading), 'Outfit', sans-serif"
      }}
    >
      {/* Background Starfield & Subtle Particle Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen z-0"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)`,
          backgroundSize: "28px 28px"
        }}
      />

      {/* Cinematic Ambient Glows */}
      <div className="absolute top-0 left-0 w-[550px] h-[550px] bg-indigo-600/15 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute right-0 bottom-0 w-[700px] h-[700px] bg-violet-600/15 blur-[160px] pointer-events-none -z-10" />
      <div className="absolute right-1/3 top-1/3 w-[450px] h-[450px] bg-blue-600/10 blur-[130px] pointer-events-none -z-10" />

      {/* ========================================================
          TOP NAVIGATION BAR
          ======================================================== */}
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between z-30 relative font-sans">
        
        {/* Left: Brand Monogram & Name */}
        <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => onEnterPortfolio("home")}>
          <div className="w-11 h-11 border border-indigo-500/40 rounded-xl flex items-center justify-center bg-[#0d1424]/80 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.25)]">
            <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-violet-400 font-heading">
              AV
            </span>
          </div>
          <div>
            <div className="text-xs tracking-[0.2em] font-bold text-[#f1f5f9] uppercase font-mono">
              ANUGU VAISHNAVI
            </div>
            <div className="text-[10px] tracking-[0.16em] text-[#818cf8] uppercase font-mono mt-0.5">
              AI &amp; MACHINE LEARNING PORTFOLIO
            </div>
          </div>
        </div>

        {/* Right: Quick Links, Sound Toggle & Explore Button */}
        <div className="flex items-center gap-5 text-xs font-mono tracking-[0.16em] text-[#94a3b8]">
          <a 
            href="https://github.com/vaishnavireddy067" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 hover:text-[#e8edf5] transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 text-indigo-400" />
            <span>GITHUB</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/anugu-vaishnavi-651a67353" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 hover:text-[#e8edf5] transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-indigo-400" />
            <span>LINKEDIN</span>
          </a>


          {/* Header Explore Button */}
          <button
            onClick={() => handleLaunch("home")}
            className="flex items-center gap-1.5 py-1.5 px-3.5 border border-indigo-500/40 hover:border-indigo-400 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-[#e8edf5] transition-all cursor-pointer"
          >
            <span>EXPLORE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
          </button>
        </div>

      </header>

      {/* ========================================================
          HERO SECTION: Left Headline Copy + Right Interactive 3D Holographic Persona Hub
          ======================================================== */}
      <div className="w-full max-w-7xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-20 relative">
        
        {/* LEFT COLUMN: Authentic Portfolio Content */}
        <div className="lg:col-span-6 text-left space-y-5 sm:space-y-6">
          
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] tracking-[0.25em] font-mono text-indigo-400 uppercase flex items-center gap-2"
          >
            <span className="text-indigo-400 font-bold">+</span>
            <span>HELLO WORLD // WELCOME TO MY PORTFOLIO</span>
          </motion.div>

          {/* Display Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-1 sm:space-y-2"
          >
            <h1 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold text-[#f8fafc] tracking-[-0.03em] leading-[0.98]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Anugu Vaishnavi
            </h1>
            
            <div 
              className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 tracking-[-0.02em] leading-[1.05]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              AI &amp; Machine Learning{" "}
              <span 
                className="italic font-normal text-[#c7d2fe]"
                style={{ fontFamily: "'Instrument Serif', 'Playfair Display', Georgia, serif" }}
              >
                Enthusiast.
              </span>
            </div>

            {/* Sub-Roles */}
            <div className="flex items-center gap-2 flex-wrap pt-2 font-mono text-xs sm:text-sm text-[#94a3b8]">
              <span>Full Stack Developer</span>
              <span className="text-indigo-500">·</span>
              <span>Data Analyst</span>
              <span className="text-indigo-500">·</span>
              <span>Public Speaker</span>
            </div>
          </motion.div>

          {/* Authentic Portfolio Bio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-xl font-sans"
          >
            Building scalable, intelligent systems powered by Generative AI and LLM technologies. Turning complex data into elegant, impactful solutions.
          </motion.div>

          {/* PRIMARY ACTION BUTTON (Goes directly to Home!) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-1 flex items-center gap-3 flex-wrap"
          >
            <button
              onClick={() => handleLaunch("home")}
              className="group w-full max-w-sm sm:max-w-md py-4 px-6 border border-indigo-500/50 hover:border-indigo-400 bg-[#0d1424]/90 hover:bg-indigo-600/15 backdrop-blur-md rounded-xl transition-all duration-300 flex items-center justify-between shadow-[0_10px_35px_rgba(99,102,241,0.25)] cursor-pointer"
            >
              <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#f8fafc] group-hover:text-indigo-300 uppercase transition-colors">
                ENTER FULL PORTFOLIO
              </span>
              <ArrowUpRight className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>

          {/* 4 Portfolio Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-4 gap-3 max-w-lg pt-2 border-t border-[#1e293b]/70"
          >
            {[
              { val: "5+", lbl: "Projects", slide: "projects" },
              { val: "10+", lbl: "Certs", slide: "certifications" },
              { val: "4", lbl: "Internships", slide: "experience" },
              { val: "100%", lbl: "Dedication", slide: "about" },
            ].map((st, i) => (
              <div 
                key={i} 
                onClick={() => onEnterPortfolio(st.slide)}
                className="text-left cursor-pointer group/stat"
              >
                <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 font-heading group-hover/stat:scale-105 transition-transform">
                  {st.val}
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-[#64748b] group-hover/stat:text-indigo-400 uppercase tracking-wider mt-0.5 transition-colors">
                  {st.lbl}
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* RIGHT COLUMN: Interactive 3D Neural Holo Core Visual */}
        <div className="lg:col-span-6 hidden lg:flex flex-col items-center justify-center relative">
          <NeuralHoloCore onLaunch={() => handleLaunch("home")} />
        </div>

      </div>

      {/* ========================================================
          BOTTOM FOOTER TICKER
          ======================================================== */}
      <footer className="w-full max-w-7xl mx-auto flex items-center justify-between z-30 relative font-mono text-[10px] tracking-[0.2em] text-[#64748b] uppercase border-t border-[#1e293b]/70 pt-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span>PORTFOLIO ONLINE // HYDERABAD, INDIA</span>
        </div>

        <div className="hidden sm:block text-indigo-400 font-semibold">
          PRESS &quot;ENTER FULL PORTFOLIO&quot; TO LAUNCH HOME DASHBOARD ↗
        </div>
      </footer>

    </div>
  );
}
