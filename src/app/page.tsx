"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, Download, Mail, Code, Database, Smartphone, PlayCircle, 
  Globe, Briefcase, Award, GitBranch, X, ExternalLink, Video, 
  Quote, Cpu, Bot, Sparkles, Terminal, Send, RefreshCw, 
  CheckCircle2, User, MapPin, Sun, Moon, Phone,
  Brain, Network, Eye, Layers, MessageSquare, Mic, Activity,
  AlertTriangle, Workflow, Box, Search, FileText, BarChart, 
  PieChart, LineChart, Server, Layout, BookOpen, Users, Target, Zap, FileSpreadsheet, ArrowUp, GraduationCap,
  Maximize2, Trophy, Camera, Calendar, Play, Pause, LayoutGrid, ChevronLeft, ChevronRight, Film
} from "lucide-react";
import { SKILL_CATEGORIES } from "../data/skills";
import { PROJECTS } from "../data/projects";
import { ACTIVITIES, ActivityItem } from "../data/activities";
import DownloadDropdown from "../components/DownloadDropdown";
import emailjs from "@emailjs/browser";
import TechBackground from "../components/TechBackground";

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

// SVGs for technology logos
const MongoIcon = () => (
  <svg className="w-8 h-8 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-.39 0-.79.08-1.18.23l-.11.04C9.57 1.09 5.34 6.7 5.34 11.23c0 4.67 3.33 8.35 6.66 12.04.16.18.42.27.66.23.22-.04.4-.17.48-.37 3.33-3.69 6.66-7.37 6.66-12.04 0-4.53-4.23-10.14-5.37-10.96l-.1-.04c-.39-.15-.79-.23-1.18-.23zm.14 2.45c2.35 2.92 4.14 7.02 4.14 8.78 0 3.32-2.12 6.06-4.14 8.91V2.45zm-.28 0v16.48c-2.02-2.85-4.14-5.59-4.14-8.91 0-1.76 1.79-5.86 4.14-8.78z"/>
  </svg>
);

const ExpressIcon = () => (
  <span className="text-xl font-extrabold tracking-tighter text-[var(--foreground)] font-mono">ex</span>
);

const ReactIcon = () => (
  <svg className="w-8 h-8 text-[#61DAFB] animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 10.7a3 3 0 00-1.4-2.1 16.5 16.5 0 00-7.3-2 16.5 16.5 0 00-7.3 2 3 3 0 00-1.4 2.1 3 3 0 001.4 2.1c2 1.2 4.4 1.9 7.3 2s5.3-.7 7.3-2A3 3 0 0024 10.7zM12 16.2a5.5 5.5 0 115.5-5.5 5.5 5.5 0 01-5.5 5.5z"/>
    <circle cx="12" cy="10.7" r="2.2" fill="#61DAFB"/>
    <path d="M12 2C6 2 2 6 2 12s4 10 10 10 10-4 10-10S18 2 12 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"/>
  </svg>
);

const NodeIcon = () => (
  <svg className="w-8 h-8 text-[#339933]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1.5l8.5 4.9v9.8L12 21.1l-8.5-4.9V6.4L12 1.5zm.9 3.5l-6.8 3.9v7.8l6.8 3.9 6.8-3.9V8.9l-6.8-3.9z"/>
  </svg>
);

// Waving Character Avatar Component
const WavingAvatar = () => (
  <div className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full border-4 border-blue-500/80 shadow-[0_0_40px_rgba(59,130,246,0.3)] relative overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-indigo-900 flex items-center justify-center">
    <svg className="w-5/6 h-5/6 text-blue-400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="url(#avatar-grad)" opacity="0.1"/>
      
      {/* Hair */}
      <path d="M60 90c-5-30 15-50 40-50s45 20 40 50c-2 15-10 20-15 25" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
      
      {/* Head */}
      <circle cx="100" cy="95" r="30" fill="#fcd34d" stroke="#d97706" strokeWidth="4"/>
      
      {/* Glasses */}
      <rect x="80" y="88" width="16" height="12" rx="3" stroke="#1e293b" strokeWidth="3" fill="none"/>
      <rect x="104" y="88" width="16" height="12" rx="3" stroke="#1e293b" strokeWidth="3" fill="none"/>
      <line x1="96" y1="94" x2="104" y2="94" stroke="#1e293b" strokeWidth="3"/>
      
      {/* Smile */}
      <path d="M92 110c2 4 8 6 16 0" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" fill="none"/>
      
      {/* Body */}
      <path d="M50 160c10-25 25-30 50-30s40 5 50 30" fill="#2563eb" stroke="#1d4ed8" strokeWidth="4"/>
      <path d="M90 130l10 12 10-12" fill="#fff" stroke="#cbd5e1" strokeWidth="2"/>
      
      {/* Waving Hand */}
      <g className="origin-[130px_130px]" style={{ animation: "wave-hand 2s ease-in-out infinite" }}>
        <path d="M130 130l25-15 8 12-25 15z" fill="#2563eb" stroke="#1d4ed8" strokeWidth="3"/>
        <path d="M153 118c4-4 12-4 14 2 2 4 0 10-4 12l-10 6-5-10c0-2 2-6 5-10z" fill="#fcd34d" stroke="#d97706" strokeWidth="3"/>
        <circle cx="162" cy="112" r="3" fill="#fcd34d"/>
        <circle cx="168" cy="116" r="3" fill="#fcd34d"/>
        <circle cx="170" cy="122" r="3" fill="#fcd34d"/>
      </g>

      <defs>
        <linearGradient id="avatar-grad" x1="100" y1="20" x2="100" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6"/>
          <stop offset="1" stopColor="#8b5cf6"/>
        </linearGradient>
      </defs>
    </svg>
    <style jsx global>{`
      @keyframes wave-hand {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(20deg); }
      }
    `}</style>
  </div>
);

// Icons and Data

const getSkillCategoryIcon = (categoryTitle: string) => {
  switch (categoryTitle) {
    case "ML / AI": return <Cpu className="w-6 h-6 text-purple-500" />;
    case "Frameworks": return <Sparkles className="w-6 h-6 text-blue-500" />;
    case "Data Science": return <Database className="w-6 h-6 text-teal-500" />;
    case "Databases": return <Database className="w-6 h-6 text-rose-500" />;
    case "Languages": return <Code className="w-6 h-6 text-amber-500" />;
    case "Data & BI Tools": return <Globe className="w-6 h-6 text-blue-500" />;
    case "Web / Dev Tools": return <Globe className="w-6 h-6 text-indigo-500" />;
    case "Soft Skills": return <User className="w-6 h-6 text-emerald-500" />;
    default: return <Code className="w-6 h-6 text-[var(--accent)]" />;
  }
};

const getSkillIcon = (skillName: string) => {
  const s = skillName.toLowerCase();
  
  // ML / AI
  if (s.includes("machine learning")) return <Brain className="w-6 h-6 text-purple-500" />;
  if (s.includes("deep learning")) return <Network className="w-6 h-6 text-purple-600" />;
  if (s.includes("nlp")) return <MessageSquare className="w-6 h-6 text-indigo-400" />;
  if (s.includes("computer vision")) return <Eye className="w-6 h-6 text-blue-500" />;
  if (s.includes("neural networks")) return <Activity className="w-6 h-6 text-rose-500" />;
  if (s.includes("generative ai")) return <Sparkles className="w-6 h-6 text-amber-500" />;
  if (s.includes("agentic ai")) return <Workflow className="w-6 h-6 text-teal-500" />;
  if (s.includes("llm")) return <Bot className="w-6 h-6 text-blue-600" />;
  if (s.includes("rag")) return <Layers className="w-6 h-6 text-emerald-500" />;
  if (s.includes("ai agents")) return <Bot className="w-6 h-6 text-cyan-500" />;
  if (s.includes("prompt engineering")) return <Terminal className="w-6 h-6 text-yellow-500" />;
  if (s.includes("explainable")) return <Search className="w-6 h-6 text-orange-500" />;
  if (s.includes("anomaly")) return <AlertTriangle className="w-6 h-6 text-red-500" />;
  if (s.includes("conversational")) return <MessageSquare className="w-6 h-6 text-pink-500" />;
  if (s.includes("voice")) return <Mic className="w-6 h-6 text-fuchsia-500" />;
  if (s.includes("semantic search")) return <Search className="w-6 h-6 text-sky-500" />;
  if (s.includes("orchestration")) return <Workflow className="w-6 h-6 text-violet-500" />;

  // Frameworks
  if (s.includes("scikit")) return <Box className="w-6 h-6 text-orange-600" />;
  if (s.includes("tensor")) return <Box className="w-6 h-6 text-orange-500" />;
  if (s.includes("pytorch")) return <Zap className="w-6 h-6 text-red-500" />;
  if (s.includes("langchain")) return <GitBranch className="w-6 h-6 text-emerald-600" />;
  if (s.includes("langgraph")) return <Network className="w-6 h-6 text-emerald-500" />;
  if (s.includes("hugging")) return <Box className="w-6 h-6 text-yellow-400" />;
  if (s.includes("opencv")) return <Eye className="w-6 h-6 text-green-500" />;
  if (s.includes("streamlit")) return <Layout className="w-6 h-6 text-red-400" />;
  if (s.includes("flask")) return <Server className="w-6 h-6 text-gray-500" />;
  if (s.includes("fastapi")) return <Zap className="w-6 h-6 text-teal-400" />;
  if (s.includes("autogen")) return <Bot className="w-6 h-6 text-blue-500" />;
  if (s.includes("crewai")) return <Users className="w-6 h-6 text-orange-500" />;
  if (s.includes("openai")) return <Bot className="w-6 h-6 text-green-600" />;
  if (s.includes("whisper")) return <Mic className="w-6 h-6 text-purple-400" />;

  // Data Science
  if (s.includes("exploratory") || s.includes("eda")) return <Search className="w-6 h-6 text-teal-500" />;
  if (s.includes("feature")) return <Layers className="w-6 h-6 text-indigo-500" />;
  if (s.includes("statistical")) return <BarChart className="w-6 h-6 text-blue-500" />;
  if (s.includes("preprocessing")) return <Workflow className="w-6 h-6 text-gray-500" />;
  if (s.includes("wrangling")) return <RefreshCw className="w-6 h-6 text-emerald-500" />;
  if (s.includes("predictive")) return <LineChart className="w-6 h-6 text-purple-500" />;
  if (s.includes("visualization")) return <PieChart className="w-6 h-6 text-rose-500" />;
  if (s.includes("evaluation") || s.includes("tuning")) return <Target className="w-6 h-6 text-amber-500" />;

  // Languages
  if (s.includes("python")) return <Code className="w-6 h-6 text-blue-500" />;
  if (s.includes("sql")) return <Database className="w-6 h-6 text-blue-400" />;
  if (s.includes("java")) return <Code className="w-6 h-6 text-red-500" />;
  if (s.includes("c")) return <Code className="w-6 h-6 text-blue-600" />;

  // Data & BI Tools
  if (s.includes("numpy")) return <Box className="w-6 h-6 text-cyan-500" />;
  if (s.includes("pandas")) return <FileSpreadsheet className="w-6 h-6 text-indigo-500" />;
  if (s.includes("power bi")) return <BarChart className="w-6 h-6 text-yellow-500" />;
  if (s.includes("tableau")) return <PieChart className="w-6 h-6 text-blue-600" />;
  if (s.includes("matplotlib")) return <LineChart className="w-6 h-6 text-red-400" />;
  if (s.includes("seaborn")) return <BarChart className="w-6 h-6 text-teal-500" />;
  if (s.includes("excel")) return <FileSpreadsheet className="w-6 h-6 text-green-600" />;
  if (s.includes("jupyter")) return <BookOpen className="w-6 h-6 text-orange-500" />;
  if (s.includes("colab")) return <BookOpen className="w-6 h-6 text-yellow-600" />;

  // Databases
  if (s.includes("mysql") || s.includes("postgres")) return <Database className="w-6 h-6 text-blue-500" />;
  if (s.includes("mongo")) return <Database className="w-6 h-6 text-green-500" />;
  if (s.includes("chroma") || s.includes("faiss")) return <Database className="w-6 h-6 text-rose-500" />;

  // Web / Dev Tools
  if (s.includes("html") || s.includes("css")) return <Globe className="w-6 h-6 text-orange-500" />;
  if (s.includes("javascript")) return <Code className="w-6 h-6 text-yellow-400" />;
  if (s.includes("react")) return <Globe className="w-6 h-6 text-cyan-400" />;
  if (s.includes("git")) return <GitBranch className="w-6 h-6 text-red-500" />;
  if (s.includes("vs code")) return <Layout className="w-6 h-6 text-blue-500" />;
  if (s.includes("postman")) return <Network className="w-6 h-6 text-orange-500" />;

  // Soft Skills
  if (s.includes("analytical")) return <Brain className="w-6 h-6 text-purple-500" />;
  if (s.includes("problem")) return <Target className="w-6 h-6 text-red-500" />;
  if (s.includes("research")) return <Search className="w-6 h-6 text-blue-500" />;
  if (s.includes("storytelling")) return <MessageSquare className="w-6 h-6 text-emerald-500" />;
  if (s.includes("teamwork")) return <Users className="w-6 h-6 text-indigo-500" />;
  if (s.includes("documentation")) return <FileText className="w-6 h-6 text-gray-500" />;
  if (s.includes("leadership")) return <Award className="w-6 h-6 text-amber-500" />;
  if (s.includes("communication")) return <MessageSquare className="w-6 h-6 text-pink-500" />;

  return <Terminal className="w-6 h-6 text-[var(--accent)]" />;
};

const LOCAL_PROJECTS = [
  {
    name: "Air Drawing System",
    desc: "Real-time virtual drawing system converting a webcam into a virtual whiteboard using gesture recognition.",
    longDesc: "This project leverages MediaPipe and OpenCV to track hand landmarks in real-time, allowing users to draw in mid-air. It demonstrates complex state management for continuous gesture tracking and rendering.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    github: "https://github.com/vaishnavireddy067/AIR-DRAWING",
    demo: true,
    color: "from-blue-600 to-cyan-500"
  },
  {
    name: "ADAMSS Analytics",
    desc: "Autonomous Data Analytics Model Stability System. A low-code platform automating EDA, model tuning, and monitoring.",
    longDesc: "ADAMSS streamlines the entire data science pipeline. Users can upload datasets and automatically receive exploratory data analysis, train machine learning models, and monitor performance securely from their browser.",
    tech: ["Python", "Machine Learning", "Streamlit"],
    github: "https://github.com/vaishnavireddy067/ADAMSS-Autonomous-Data-Analytics-Model-Stability-System",
    demo: true,
    color: "from-purple-600 to-indigo-500"
  },
  {
    name: "AuraAgent Platform",
    desc: "A premium multi-agent platform coordinating autonomous research and report synthesis via LangChain/CrewAI.",
    longDesc: "AuraAgent leverages specialized LLM agents structured into hierarchical groups. An orchestrator distributes web scraping, semantic search, and summary compilation tasks, delivering production-ready technical reports securely.",
    tech: ["Python", "LangChain", "CrewAI", "FastAPI"],
    github: "https://github.com/vaishnavireddy067",
    demo: true,
    color: "from-pink-600 to-rose-500"
  },
  {
    name: "IrisXplain AI",
    desc: "Multi-model prediction system offering confidence scoring and XAI techniques for feature importance.",
    longDesc: "Built to bring transparency to ML models, this tool uses Explainable AI (XAI) to break down model predictions. It features dynamic dashboards and confidence scoring to help stakeholders trust AI decisions.",
    tech: ["Scikit-learn", "Streamlit", "Python"],
    github: "https://github.com/vaishnavireddy067",
    demo: false,
    color: "from-teal-500 to-emerald-400"
  },
  {
    name: "RT-AIDIS",
    desc: "Real-time AI monitoring platform aimed at anomaly detection across manufacturing and healthcare.",
    longDesc: "A high-performance anomaly detection system capable of monitoring real-time data streams. Highly useful in IoT contexts where rapid detection of outliers is critical for system integrity.",
    tech: ["JavaScript", "AI Core"],
    github: "https://github.com/vaishnavireddy067/RT-AIDIS-IntegrityAI",
    demo: true,
    color: "from-orange-500 to-red-500"
  }
];

const CERTIFICATIONS = [
  {
    title: "GenAI Forge Hackathon Winner",
    issuer: "Hackathon Organizer",
    date: "2024",
    desc: "First Place for building complex multi-agent generative workflow models under constraints.",
    icon: <Award className="w-6 h-6 text-purple-500" />
  },
  {
    title: "Smart India Hackathon (SIH) Participant",
    issuer: "Ministry of Education, Govt of India",
    date: "2023",
    desc: "National level recognition for innovative artificial intelligence project development.",
    icon: <Award className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Poster Presentation Winner (1st Prize)",
    issuer: "SIH Committee",
    date: "2023",
    desc: "Secured first prize for layout design and presentation logic explanation of AI system structures.",
    icon: <Award className="w-6 h-6 text-teal-500" />
  },
  {
    title: "Agentic AI Coordinator Credential",
    issuer: "AVN AI & DS Department",
    date: "2024",
    desc: "Successful supervision and conceptual outline guidance for Agentic AI workshops.",
    icon: <Briefcase className="w-6 h-6 text-indigo-500" />
  },
  {
    title: "MSME Hackathon Participant",
    issuer: "Ministry of MSME",
    date: "2024",
    desc: "Developed and prototyped AI solutions assisting small & medium size enterprise systems.",
    icon: <Code className="w-6 h-6 text-emerald-500" />
  },
  {
    title: "Namespace Hackathon Certificate",
    issuer: "Tech Network Community",
    date: "2024",
    desc: "Participated and showcased scalable rapid prototype developments using cloud databases.",
    icon: <GitBranch className="w-6 h-6 text-blue-500" />
  }
];

const EDUCATION = [
  {
    institution: "AVN Institute of Engineering & Technology",
    degree: "B.Tech – Artificial Intelligence & Data Science",
    period: "2023 - 2027 • Ongoing",
    location: "Hyderabad",
    details: ""
  },
  {
    institution: "Pragati Junior College",
    degree: "Intermediate (MPC)",
    period: "2021 - 2023",
    location: "Nalgonda",
    details: "Score: 88.5%"
  },
  {
    institution: "MVR High School",
    degree: "Secondary School Certificate (SSC)",
    period: "2021",
    location: "Nalgonda",
    details: "Score: 100%"
  }
];

const EXPERIENCE = [
  {
    role: "AI Backend Engineer Intern",
    company: "FlyRank",
    period: "Jul 2026 – Aug 2026 | Remote",
    location: "Remote",
    description: "Designed scalable backend APIs integrating AI/ML pipelines (Computer Vision, NLP, Agentic AI, Voice AI) into production-ready applications, collaborating with global cross-functional teams.",
    tech: ["Python", "Computer Vision", "NLP", "Agentic AI", "Voice AI", "FastAPI"],
    color: "from-blue-600 to-cyan-500"
  },
  {
    role: "AI Automation & Intelligent Solutions Intern",
    company: "IBM SkillsBuild (BharatCares)",
    period: "Jun 2026 – Jul 2026 | Remote",
    location: "Remote",
    description: "Completed a 6-week internship on AI automation and intelligent solutions, in association with BharatCares and AICTE. (Certificate ID: BHIBMAC11845)",
    tech: ["AI Automation", "IBM SkillsBuild", "Intelligent Solutions"],
    color: "from-indigo-600 to-blue-500"
  },
  {
    role: "AI Engineer Intern",
    company: "Coding Blocks School of Technology",
    period: "Jun 2026 – Jul 2026 | Remote",
    location: "Remote",
    description: "Trained and evaluated ML models for applied AI tasks, embedding LLM and GenAI APIs into application workflows through structured debugging and implementation.",
    tech: ["Python", "Machine Learning", "LLM", "GenAI APIs"],
    color: "from-purple-600 to-indigo-500"
  },
  {
    role: "Artificial Intelligence Intern",
    company: "Viswam.ai (SoAI)",
    period: "Jun 2024 – Aug 2024 | Hybrid",
    location: "Hybrid",
    description: "Cleaned and validated 5,000+ real-world records using Python (Pandas, NumPy), cutting data-preparation time by approximately 30% through systematic feature engineering.",
    tech: ["Python", "Pandas", "NumPy", "Feature Engineering"],
    color: "from-teal-500 to-emerald-400"
  }
];

// Reusable Premium Glass Card Component
const GlowCard = ({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.015 }}
    transition={{ duration: 0.22, ease: [0.34, 1.56, 0.64, 1] }}
    onClick={onClick}
    className={`glass-card gradient-border shimmer-on-hover rounded-2xl transition-all duration-300 ${onClick ? 'cursor-pointer' : ''} ${className}`}
  >
    {children}
  </motion.div>
);

const PHOTO_ROTATIONS = [-4, 3, -2, 4, -3, 2, -4, 3, -2, 4];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);
  const [selectedExpIdx, setSelectedExpIdx] = useState(0);
  const [currentActivityIdx, setCurrentActivityIdx] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [isActivityHovered, setIsActivityHovered] = useState(false);
  const [activitySlideDir, setActivitySlideDir] = useState<"left" | "right">("right");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSlide, setActiveSlide] = useState("home");
  const [activeSkillCategoryIdx, setActiveSkillCategoryIdx] = useState(0);
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isFormSending, setIsFormSending] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  // Autoplay photo reel every ~2.2 seconds (runs continuously, pauses only if user clicks pause button or modal is open)
  useEffect(() => {
    if (activeSlide !== "activities" || isAutoplayPaused || selectedActivity !== null) {
      return;
    }
    const timer = setInterval(() => {
      setActivitySlideDir("right");
      setCurrentActivityIdx((prev) => (prev + 1) % ACTIVITIES.length);
    }, 2200);

    return () => clearInterval(timer);
  }, [activeSlide, isAutoplayPaused, selectedActivity]);

  const handlePrevActivity = () => {
    setActivitySlideDir("left");
    setCurrentActivityIdx((prev) => (prev - 1 + ACTIVITIES.length) % ACTIVITIES.length);
  };

  const handleNextActivity = () => {
    setActivitySlideDir("right");
    setCurrentActivityIdx((prev) => (prev + 1) % ACTIVITIES.length);
  };

  const handleJumpToActivity = (idx: number) => {
    setActivitySlideDir(idx > currentActivityIdx ? "right" : "left");
    setCurrentActivityIdx(idx);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    fetch("https://api.counterapi.dev/v1/vaishnavi-portfolio-2026/visits/hit")
      .then(res => res.json())
      .then(data => {
        const count = data?.count ?? data?.value ?? data?.hits;
        if (typeof count === 'number') setVisitorCount(count);
      })
      .catch(() => {});
  }, []);

  // Handle slide transitions from navigation
  const navigateToSlide = (slide: string) => {
    setActiveSlide(slide);
    setIsMobileMenuOpen(false);
  };

  const getLinkClasses = (slide: string) => {
    return `text-[13px] font-semibold transition-all py-1.5 px-3.5 rounded-xl cursor-pointer font-body ${
      activeSlide === slide 
        ? "nav-active-pill active" 
        : "text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--badge-bg)]"
    }`;
  };

  const getMobileLinkClasses = (slide: string) => {
    return `text-base font-semibold transition-all py-2.5 px-4 rounded-xl cursor-pointer font-body ${
      activeSlide === slide 
        ? "nav-active-pill active" 
        : "text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--badge-bg)]"
    }`;
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-body selection:bg-indigo-500/30 overflow-x-hidden transition-colors duration-300 relative stars-bg">
      {/* Background Cosmic Top Center Light */}
      <div className="absolute top-0 left-0 w-full h-[600px] cosmic-glow pointer-events-none z-0" />

      {/* Animated Tech Pattern Background */}
      <TechBackground isDark={isDarkMode} />

      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--nav-bg)] backdrop-blur-2xl border-b border-[var(--card-border)]/60 transition-colors duration-300 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
           {/* Logo Branding */}
           <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigateToSlide("home")}>
             <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-extrabold shadow-lg shadow-indigo-500/25 text-sm font-heading">AV</div>
             <span className="text-lg font-bold tracking-tight text-[var(--foreground)] font-heading hidden sm:block">Anugu Vaishnavi</span>
           </div>
           
           {/* Navigation Centered Slide Links */}
           <div className="hidden md:flex gap-0.5 p-1.5 glass-card rounded-2xl">
             <button onClick={() => navigateToSlide("home")} className={getLinkClasses("home")}>Home</button>
             <button onClick={() => navigateToSlide("about")} className={getLinkClasses("about")}>About</button>
             <button onClick={() => navigateToSlide("skills")} className={getLinkClasses("skills")}>Skills</button>
             <button onClick={() => navigateToSlide("education")} className={getLinkClasses("education")}>Education</button>
             <button onClick={() => navigateToSlide("experience")} className={getLinkClasses("experience")}>Experience</button>
             <button onClick={() => navigateToSlide("projects")} className={getLinkClasses("projects")}>Projects</button>
             <button onClick={() => navigateToSlide("activities")} className={getLinkClasses("activities")}>Activities</button>
             <button onClick={() => navigateToSlide("certifications")} className={getLinkClasses("certifications")}>Certs</button>
             <button onClick={() => navigateToSlide("contact")} className={getLinkClasses("contact")}>Contact</button>
           </div>
           
           {/* Socials & Theme Toggle right */}
           <div className="flex items-center gap-2">
             <a href="https://github.com/vaishnavireddy067" target="_blank" rel="noopener noreferrer" className="hidden sm:flex p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--badge-bg)] transition-all">
               <GithubIcon className="w-4.5 h-4.5" />
             </a>
             <a href="https://www.linkedin.com/in/anugu-vaishnavi-651a67353" target="_blank" rel="noopener noreferrer" className="hidden sm:flex p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--badge-bg)] transition-all">
               <LinkedinIcon className="w-4.5 h-4.5" />
             </a>
             <button 
               onClick={() => setIsDarkMode(!isDarkMode)}
               className="p-2.5 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] hover:border-[var(--card-hover-border)] transition-all shadow-sm"
               aria-label="Toggle Theme"
             >
               {isDarkMode ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-indigo-500" />}
             </button>
             <button className="md:hidden p-2 text-[var(--text-muted)] hover:text-[var(--foreground)] focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
               <Menu className="w-5 h-5" />
             </button>
           </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[72px] left-0 w-full bg-[var(--card-bg)] border-b border-[var(--card-border)] shadow-2xl z-40 flex flex-col px-6 py-6 gap-3 transition-colors duration-300"
          >
             <button onClick={() => navigateToSlide("home")} className={getMobileLinkClasses("home")}>Home</button>
             <button onClick={() => navigateToSlide("about")} className={getMobileLinkClasses("about")}>About</button>
             <button onClick={() => navigateToSlide("skills")} className={getMobileLinkClasses("skills")}>Skills</button>
             <button onClick={() => navigateToSlide("education")} className={getMobileLinkClasses("education")}>Education</button>
             <button onClick={() => navigateToSlide("experience")} className={getMobileLinkClasses("experience")}>Experience</button>
             <button onClick={() => navigateToSlide("projects")} className={getMobileLinkClasses("projects")}>Projects</button>
             <button onClick={() => navigateToSlide("activities")} className={getMobileLinkClasses("activities")}>Activities &amp; Moments</button>
             <button onClick={() => navigateToSlide("certifications")} className={getMobileLinkClasses("certifications")}>Certifications</button>
             <button onClick={() => navigateToSlide("contact")} className={getMobileLinkClasses("contact")}>Contact</button>
             <div className="flex items-center gap-4 pt-4 border-t border-[var(--card-border)]/50 justify-center">
                <a href="https://github.com/vaishnavireddy067" target="_blank" rel="noopener noreferrer" className="p-3 border border-[var(--card-border)] bg-[var(--background)] text-[var(--text-muted)] hover:text-[var(--foreground)] rounded-full transition-all">
                  <GithubIcon className="w-5 h-5 pointer-events-none" />
                </a>
                <a href="https://www.linkedin.com/in/anugu-vaishnavi-651a67353" target="_blank" rel="noopener noreferrer" className="p-3 border border-[var(--card-border)] bg-[var(--background)] text-[var(--text-muted)] hover:text-[var(--foreground)] rounded-full transition-all">
                  <LinkedinIcon className="w-5 h-5 pointer-events-none" />
                </a>
                <a href="mailto:anuguvaishnavireddy2@gmail.com" className="p-3 border border-[var(--card-border)] bg-[var(--background)] text-[var(--text-muted)] hover:text-[var(--foreground)] rounded-full transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide Presentation Canvas */}
      <div className="pt-24 min-h-screen relative z-10 w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full max-w-6xl px-6 py-8 flex flex-col justify-center min-h-[calc(100vh-120px)]"
          >
            {/* Slide: Home/Hero */}
            {activeSlide === "home" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                {/* Left block info */}
                <div className="lg:col-span-7 text-left space-y-7">
                  <div className="space-y-4">
                    <div className="section-eyebrow">Hello World</div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-[var(--foreground)] font-heading">
                      I&apos;m{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500">
                        Anugu Vaishnavi
                      </span>
                    </h1>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-lg md:text-xl font-semibold text-[var(--text-muted)] font-body">AI &amp; ML Enthusiast</span>
                      <span className="text-[var(--card-border)] font-light text-lg">·</span>
                      <span className="text-lg md:text-xl font-semibold text-[var(--text-muted)] font-body">Full Stack Developer</span>
                      <span className="text-[var(--card-border)] font-light text-lg">·</span>
                      <span className="text-lg md:text-xl font-semibold text-[var(--text-muted)] font-body">Data Analyst</span>
                    </div>
                  </div>
                  
                  <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed max-w-lg font-body">
                    Building scalable, intelligent systems powered by Generative AI and LLM technologies. Turning complex data into elegant, impactful solutions.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button onClick={() => navigateToSlide("about")} className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-sm font-semibold rounded-xl transition-all shadow-[0_4px_20px_rgba(99,102,241,0.35)] hover:shadow-[0_6px_28px_rgba(99,102,241,0.45)] hover:-translate-y-0.5 font-body">
                      About Me
                    </button>
                    <DownloadDropdown />
                    <button onClick={() => navigateToSlide("contact")} className="px-6 py-3 bg-transparent text-[var(--foreground)] text-sm font-semibold border border-[var(--card-border)] rounded-xl hover:bg-[var(--badge-bg)] hover:border-[var(--card-hover-border)] transition-all font-body">
                      Contact Me
                    </button>
                  </div>

                  {/* Social Circles Row */}
                  <div className="flex items-center gap-3 pt-2">
                    <a href="https://github.com/vaishnavireddy067" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-xl text-[var(--text-muted)] hover:text-[var(--foreground)] transition-all">
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/anugu-vaishnavi-651a67353" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-xl text-[var(--text-muted)] hover:text-[var(--foreground)] transition-all">
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a href="mailto:anuguvaishnavireddy2@gmail.com" className="p-3 glass-card rounded-xl text-[var(--text-muted)] hover:text-[var(--foreground)] transition-all">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Right avatar visual */}
                <div className="lg:col-span-5 flex flex-col items-center gap-4 relative">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-transparent blur-2xl scale-110" />
                    <img src="/images/profile.png" alt="Anugu Vaishnavi" className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full object-cover ring-4 ring-indigo-500/40 shadow-[0_0_60px_rgba(99,102,241,0.25)] transition-transform hover:scale-105 relative z-10" />
                  </div>
                </div>

                {/* Bottom stats layout */}
                <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[var(--card-border)]/60">
                  {[
                    { value: "5+", label: "Projects Completed" },
                    { value: "10+", label: "Certificates" },
                    { value: "4", label: "Internships" },
                    { value: "100%", label: "Dedication" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -3 }}
                      className="text-center p-5 glass-card rounded-2xl"
                    >
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent font-heading">{stat.value}</div>
                      <div className="text-xs text-[var(--text-muted)] font-medium mt-1.5 font-body">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Slide: About Me */}
            {activeSlide === "about" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch w-full">
                <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
                  <div>
                    <div className="section-eyebrow mb-3">About Me</div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] font-heading leading-tight">Passionate Builder,<br />Curious Thinker.</h2>
                  </div>
                  
                  <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed font-body">
                    I am a passionate <strong className="text-[var(--foreground)] font-semibold">AI & ML Builder and Full Stack Developer</strong> driven by the desire to innovate and engineer scalable solutions. As an aspiring <strong className="text-[var(--foreground)] font-semibold">Data Analyst & Software Developer</strong>, my core goal is to build highly functional, intelligent systems that solve real-world challenges by blending robust AI algorithms with intuitive user interfaces. Furthermore, as an active <strong className="text-[var(--foreground)] font-semibold">Public Speaker & Content Creator</strong>, I love sharing my journey, discussing tech trends, and building in public.
                  </p>

                  {/* Highlight Tags */}
                  <div className="flex flex-wrap gap-2">
                    {["AI & ML Builder", "Full Stack Dev", "Data Analyst", "Public Speaker", "Open Source"].map(tag => (
                      <span key={tag} className="skill-badge">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center">
                  <GlowCard className="p-7 space-y-5">
                    {[
                      { icon: <User className="w-4.5 h-4.5" />, label: "Name", value: "Anugu Vaishnavi" },
                      { icon: <Mail className="w-4.5 h-4.5" />, label: "Email", value: "anuguvaishnavireddy2@gmail.com", small: true },
                      { icon: <MapPin className="w-4.5 h-4.5" />, label: "Location", value: "Hyderabad, India" },
                    ].map(({ icon, label, value, small }) => (
                      <div key={label} className="flex items-center gap-4">
                        <div className="p-2.5 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 text-[var(--accent)] rounded-xl border border-[var(--badge-border)] flex-shrink-0">
                          {icon}
                        </div>
                        <div>
                          <div className="text-[10px] text-[var(--text-muted)] font-semibold uppercase tracking-wider font-code">{label}</div>
                          <div className={`font-semibold text-[var(--foreground)] font-body ${small ? 'text-sm' : ''}`}>{value}</div>
                        </div>
                      </div>
                    ))}
                  </GlowCard>
                </div>
              </div>
            )}

            {/* Slide: Skills */}
            {activeSlide === "skills" && (
              <div className="w-full space-y-8">
                <div className="text-center">
                  <div className="section-eyebrow justify-center mb-3">My Skills</div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] font-heading">Technical &amp; Soft Skills</h2>
                </div>

                {/* Category pills */}
                <div className="flex flex-wrap justify-center gap-1.5 max-w-4xl mx-auto p-1.5 glass-card rounded-2xl">
                  {SKILL_CATEGORIES.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSkillCategoryIdx(idx)}
                      className={`text-xs font-semibold transition-all py-1.5 px-3.5 rounded-xl cursor-pointer font-body ${
                        activeSkillCategoryIdx === idx 
                          ? "nav-active-pill active" 
                          : "text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--badge-bg)]"
                      }`}
                    >
                      {cat.title}
                    </button>
                  ))}
                </div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-h-[50vh] overflow-y-auto pr-1">
                  {SKILL_CATEGORIES[activeSkillCategoryIdx].skills.map((skillName, idx) => (
                    <GlowCard key={idx} className="flex flex-col items-center text-center p-5 gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-[var(--badge-border)] flex items-center justify-center">
                        {getSkillIcon(skillName)}
                      </div>
                      <div>
                        <h4 className="font-bold text-[var(--foreground)] text-sm leading-tight font-heading">{skillName}</h4>
                        <span className="text-[10px] text-[var(--text-muted)] font-medium font-code mt-0.5 block">{SKILL_CATEGORIES[activeSkillCategoryIdx].title}</span>
                      </div>
                    </GlowCard>
                  ))}
                </div>
              </div>
            )}

        {/* Slide: Projects */}
        {activeSlide === "projects" && (
          <div className="w-full space-y-8">
            <div className="text-center">
              <div className="section-eyebrow justify-center mb-3">Projects</div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] font-heading">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PROJECTS.map((proj, idx) => (
                <GlowCard
                  key={idx}
                  className="flex flex-col h-full overflow-hidden"
                  onClick={() => setSelectedProject(proj)}
                  aria-label={`Open ${proj.name} details`}
                >
                  {/* Gradient header band */}
                  <div className={`h-2 w-full bg-gradient-to-r ${proj.color || 'from-indigo-500 to-violet-500'}`} />
                  {proj.image && (
                    <img src={proj.image} alt={`${proj.name} screenshot`} className="w-full h-36 object-cover" />
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-[var(--foreground)] font-heading mb-1">{proj.name}</h3>
                    <p className="text-sm text-[var(--text-muted)] line-clamp-2 font-body leading-relaxed flex-1">{proj.desc}</p>
                    {proj.impact && <p className="text-xs text-[var(--accent)] mt-2 font-medium font-body">{proj.impact}</p>}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {proj.tech.slice(0, 3).map((t: string) => (
                        <span key={t} className="skill-badge">{t}</span>
                      ))}
                      {proj.tech.length > 3 && <span className="skill-badge">+{proj.tech.length - 3}</span>}
                    </div>

                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        )}



            {/* Slide: Education */}
            {activeSlide === "education" && (
              <div className="w-full space-y-8">
                <div className="text-center">
                  <div className="section-eyebrow justify-center mb-3">My Journey</div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] font-heading">Education</h2>
                </div>
                <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                  {EDUCATION.map((edu, idx) => (
                    <GlowCard key={idx} className="p-6 flex gap-5 items-start overflow-hidden">
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-l-2xl`} style={{position: 'absolute'}} />
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-[var(--foreground)] font-heading">{edu.institution}</h3>
                        <p className="text-sm font-semibold text-[var(--accent)] mt-0.5 font-body">{edu.degree}</p>
                        <div className="flex flex-wrap gap-3 mt-2">
                          <span className="text-xs text-[var(--text-muted)] font-code">{edu.period}</span>
                          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1 font-body"><MapPin className="w-3 h-3" />{edu.location}</span>
                        </div>
                        {edu.details && <div className="mt-2 text-xs font-bold text-emerald-500 font-code">{edu.details}</div>}
                      </div>
                    </GlowCard>
                  ))}
                </div>
              </div>
            )}

            {/* Slide: Experience (Interactive Split Career Pathway & Dossier) */}
            {activeSlide === "experience" && (() => {
              const currentExp = EXPERIENCE[selectedExpIdx] || EXPERIENCE[0];

              return (
                <div className="w-full space-y-7 max-w-5xl mx-auto">
                  <div className="text-center space-y-2">
                    <div className="section-eyebrow justify-center mb-1">Career Journey</div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] font-heading">
                      Professional Experience
                    </h2>
                    <p className="text-sm md:text-base text-[var(--text-muted)] max-w-2xl mx-auto font-body">
                      Key engineering roles, AI research internships, and industry collaborations.
                    </p>
                  </div>

                  {/* Split Interactive Experience Explorer */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
                    {/* Left Column: Vertical Timeline Company Tabs */}
                    <div className="lg:col-span-5 flex flex-col gap-3 relative">
                      {/* Connected Vertical Timeline Line */}
                      <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-indigo-500/40 via-purple-500/30 to-transparent hidden sm:block pointer-events-none" />

                      {EXPERIENCE.map((exp, idx) => {
                        const isSelected = idx === selectedExpIdx;
                        return (
                          <div
                            key={idx}
                            onClick={() => setSelectedExpIdx(idx)}
                            className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 relative text-left flex items-start gap-4 ${
                              isSelected
                                ? "glass-card gradient-border border-[var(--accent)] shadow-xl shadow-indigo-500/10 scale-[1.02]"
                                : "bg-[var(--card-bg)]/60 border border-[var(--card-border)] hover:border-[var(--card-hover-border)] hover:bg-[var(--card-bg)] opacity-85 hover:opacity-100"
                            }`}
                          >
                            {/* Glowing Timeline Indicator Node */}
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs font-code flex-shrink-0 transition-all z-10 ${
                              isSelected
                                ? `bg-gradient-to-br ${exp.color} text-white shadow-md shadow-indigo-500/30 scale-110`
                                : "bg-[var(--badge-bg)] text-[var(--text-muted)] border border-[var(--card-border)]"
                            }`}>
                              0{idx + 1}
                            </div>

                            <div className="flex-1 min-w-0">
                              <h4 className={`text-sm font-bold font-heading truncate transition-colors ${isSelected ? "text-[var(--foreground)]" : "text-[var(--text-muted)]"}`}>
                                {exp.company}
                              </h4>
                              <p className="text-xs font-semibold text-[var(--accent)] truncate mt-0.5 font-body">
                                {exp.role}
                              </p>
                              <span className="text-[11px] text-[var(--text-muted)] font-code mt-1 block opacity-80">
                                {exp.period.split("|")[0]}
                              </span>
                            </div>

                            {isSelected && (
                              <div className="self-center text-[var(--accent)] hidden sm:block">
                                <ChevronRight className="w-4 h-4" />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Right Column: Detailed Career Dossier Stage */}
                    <div className="lg:col-span-7 flex">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentExp.company}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="glass-card gradient-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between w-full text-left space-y-6 relative overflow-hidden"
                        >
                          {/* Top Accent Gradient Bar */}
                          <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${currentExp.color}`} />

                          <div className="space-y-4">
                            {/* Header: Company & Role */}
                            <div className="space-y-2">
                              <div className="flex items-center justify-between flex-wrap gap-2">
                                <span className={`text-xs font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r ${currentExp.color} shadow-sm`}>
                                  {currentExp.role}
                                </span>
                                <span className="text-xs text-[var(--text-muted)] font-code flex items-center gap-1">
                                  <MapPin className="w-3 h-3 text-[var(--accent)]" /> {currentExp.location}
                                </span>
                              </div>

                              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] font-heading pt-1">
                                {currentExp.company}
                              </h3>

                              <div className="text-xs font-code font-semibold text-[var(--accent)]">
                                📅 {currentExp.period}
                              </div>
                            </div>

                            {/* Description & Impact Details */}
                            <div className="space-y-3 pt-2 border-t border-[var(--card-border)]/50">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)] font-code">
                                Key Focus &amp; Contributions:
                              </h4>
                              <p className="text-sm text-[var(--text-muted)] leading-relaxed font-body">
                                {currentExp.description}
                              </p>
                            </div>
                          </div>

                          {/* Tech Stack Chips */}
                          <div className="space-y-2 pt-4 border-t border-[var(--card-border)]/50">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)] font-code">
                              Technologies &amp; Core Tools:
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {currentExp.tech.map((t) => (
                                <span key={t} className="skill-badge text-xs px-3 py-1">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Slide: Activities & Moments (Interactive Photo Reel Showcase) */}
            {activeSlide === "activities" && (() => {
              const currentActivity = ACTIVITIES[currentActivityIdx] || ACTIVITIES[0];
              const rotationAngle = PHOTO_ROTATIONS[currentActivityIdx] || 0;
              const formattedCounter = `${String(currentActivityIdx + 1).padStart(2, "0")} / ${String(ACTIVITIES.length).padStart(2, "0")}`;

              return (
                <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-7">
                  {/* Section Header */}
                  <div className="text-center space-y-1.5">
                    <div className="section-eyebrow justify-center">Activities</div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--foreground)] font-heading tracking-tight">
                      &ldquo;Moments that shaped my journey&rdquo;
                    </h2>
                  </div>

                  {/* Central Photo Showcase Stage */}
                  <div className="relative flex flex-col items-center justify-center pt-2 pb-1">
                    {/* Background Ambient Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

                    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                      {/* Left/Center: 3D Stacked Polaroid Photo Deck */}
                      <div className="md:col-span-6 flex justify-center py-4 relative min-h-[300px] sm:min-h-[360px] items-center">
                        <div className="relative w-full max-w-sm sm:max-w-md h-[260px] sm:h-[310px] flex items-center justify-center">
                          {/* Layer 2: Card deep in the background */}
                          {(() => {
                            const nextNextIdx = (currentActivityIdx + 2) % ACTIVITIES.length;
                            const nextNextAct = ACTIVITIES[nextNextIdx];
                            const nextNextRot = PHOTO_ROTATIONS[nextNextIdx] || 0;
                            return (
                              <motion.div
                                key={`stack-bg2-${nextNextAct.id}`}
                                animate={{
                                  scale: 0.88,
                                  y: 18,
                                  rotate: nextNextRot,
                                  opacity: 0.35,
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute inset-0 p-3 sm:p-4 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)]/40 shadow-xl pointer-events-none z-10 filter brightness-75"
                              >
                                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black/70">
                                  <img
                                    src={nextNextAct.image}
                                    alt=""
                                    className="w-full h-full object-cover opacity-60"
                                  />
                                </div>
                              </motion.div>
                            );
                          })()}

                          {/* Layer 1: Card immediately behind top card */}
                          {(() => {
                            const nextIdx = (currentActivityIdx + 1) % ACTIVITIES.length;
                            const nextAct = ACTIVITIES[nextIdx];
                            const nextRot = PHOTO_ROTATIONS[nextIdx] || 0;
                            return (
                              <motion.div
                                key={`stack-bg1-${nextAct.id}`}
                                animate={{
                                  scale: 0.94,
                                  y: 9,
                                  rotate: nextRot,
                                  opacity: 0.7,
                                }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                className="absolute inset-0 p-3 sm:p-4 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)]/70 shadow-2xl pointer-events-none z-20 filter brightness-90"
                              >
                                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black/60">
                                  <img
                                    src={nextAct.image}
                                    alt=""
                                    className="w-full h-full object-cover opacity-80"
                                  />
                                </div>
                              </motion.div>
                            );
                          })()}

                          {/* Layer 0: Front Interactive Active Card (Flies to the back when advancing) */}
                          <AnimatePresence mode="wait" custom={activitySlideDir}>
                            <motion.div
                              key={currentActivity.id}
                              custom={activitySlideDir}
                              initial={{
                                opacity: 0,
                                x: activitySlideDir === "right" ? -60 : 60,
                                y: 15,
                                scale: 0.92,
                                rotate: rotationAngle + (activitySlideDir === "right" ? -5 : 5),
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                                y: 0,
                                scale: 1,
                                rotate: rotationAngle,
                              }}
                              exit={{
                                opacity: 0,
                                x: activitySlideDir === "right" ? 130 : -130,
                                y: -25,
                                scale: 0.88,
                                rotate: rotationAngle + (activitySlideDir === "right" ? 14 : -14),
                              }}
                              transition={{
                                duration: 0.48,
                                ease: [0.34, 1.4, 0.64, 1],
                              }}
                              drag="x"
                              dragConstraints={{ left: 0, right: 0 }}
                              dragElastic={0.3}
                              onDragEnd={(_, info) => {
                                if (info.offset.x < -40) handleNextActivity();
                                else if (info.offset.x > 40) handlePrevActivity();
                              }}
                              whileHover={{
                                scale: 1.03,
                                rotate: 0,
                                y: -4,
                                transition: { duration: 0.22, ease: "easeOut" }
                              }}
                              onClick={() => setSelectedActivity(currentActivity)}
                              className="absolute inset-0 cursor-pointer p-3 sm:p-4 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] shadow-[0_22px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl group z-30 transition-shadow duration-300 hover:shadow-[0_25px_70px_rgba(99,102,241,0.3)] hover:border-[var(--card-hover-border)]"
                            >
                              {/* Photo Aspect Ratio Frame */}
                              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black/60 shadow-inner">
                                <img
                                  src={currentActivity.image}
                                  alt={currentActivity.title}
                                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />

                                {/* Floating Badge on Photo */}
                                <div className="absolute top-3 right-3 z-10">
                                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full shadow-lg bg-gradient-to-r ${currentActivity.badgeColor}`}>
                                    {currentActivity.badge}
                                  </span>
                                </div>

                                {/* Click to expand overlay pill */}
                                <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/75 backdrop-blur-md text-white text-xs px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg scale-95 group-hover:scale-100 font-body">
                                  <Maximize2 className="w-3.5 h-3.5 text-indigo-400" />
                                  <span>View Details</span>
                                </div>
                              </div>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Right/Beside: Activity Editorial Content & Controls */}
                      <div className="md:col-span-6 flex flex-col justify-center space-y-4 text-left">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentActivity.id}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="space-y-3"
                          >
                            {/* Role & Year Header */}
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-500/10 text-[var(--accent)] border border-indigo-500/20 font-body">
                                {currentActivity.badge}
                              </span>
                              <span className="text-xs text-[var(--text-muted)] font-code font-semibold">
                                • {currentActivity.period}
                              </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--foreground)] font-heading leading-snug">
                              {currentActivity.title}
                            </h3>

                            {/* Organization */}
                            <div className="text-xs sm:text-sm font-semibold text-[var(--accent)] font-body">
                              {currentActivity.organization}
                            </div>

                            {/* 2-3 line concise description */}
                            {currentActivity.description && (
                              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-body line-clamp-3">
                                {currentActivity.description}
                              </p>
                            )}

                            {/* View Details Action */}
                            <div className="pt-1">
                              <button
                                onClick={() => setSelectedActivity(currentActivity)}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:text-indigo-400 transition-colors group font-body"
                              >
                                <span>View Details</span>
                                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                              </button>
                            </div>
                          </motion.div>
                        </AnimatePresence>

                        {/* Counter, Progress Bar & Navigation Controls */}
                        <div className="pt-3 border-t border-[var(--card-border)]/60 space-y-3">
                          {/* Counter & Controls Row */}
                          <div className="flex items-center justify-between">
                            {/* Activity Counter: 01 / 10 */}
                            <div className="font-code text-sm font-bold text-[var(--foreground)] tracking-wider">
                              {formattedCounter}
                            </div>

                            {/* Navigation Buttons (< | Play/Pause | >) */}
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={handlePrevActivity}
                                className="p-2 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] hover:border-[var(--card-hover-border)] hover:bg-[var(--badge-bg)] transition-all shadow-sm active:scale-95"
                                aria-label="Previous activity"
                                title="Previous photo"
                              >
                                <ChevronLeft className="w-4 h-4" />
                              </button>
                              
                              <button
                                onClick={() => setIsAutoplayPaused(!isAutoplayPaused)}
                                className={`p-2 rounded-xl border transition-all shadow-sm active:scale-95 ${
                                  isAutoplayPaused
                                    ? "bg-amber-500/10 border-amber-500/30 text-amber-500"
                                    : "bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-muted)] hover:text-[var(--foreground)] hover:border-[var(--card-hover-border)]"
                                }`}
                                aria-label={isAutoplayPaused ? "Resume autoplay" : "Pause autoplay"}
                                title={isAutoplayPaused ? "Resume autoplay" : "Pause autoplay"}
                              >
                                {isAutoplayPaused ? <Play className="w-4 h-4 fill-amber-500" /> : <Pause className="w-4 h-4" />}
                              </button>

                              <button
                                onClick={handleNextActivity}
                                className="p-2 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] hover:border-[var(--card-hover-border)] hover:bg-[var(--badge-bg)] transition-all shadow-sm active:scale-95"
                                aria-label="Next activity"
                                title="Next photo"
                              >
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          {/* Interactive Segmented Progress Bar */}
                          <div className="flex items-center gap-1.5 w-full">
                            {ACTIVITIES.map((_, idx) => {
                              const isActive = idx === currentActivityIdx;
                              return (
                                <button
                                  key={idx}
                                  onClick={() => handleJumpToActivity(idx)}
                                  className={`h-1.5 rounded-full transition-all duration-300 ${
                                    isActive
                                      ? "flex-1 bg-gradient-to-r from-indigo-500 to-violet-500 shadow-md shadow-indigo-500/40"
                                      : "w-3 sm:w-4 bg-[var(--card-border)] hover:bg-[var(--accent)]/50"
                                  }`}
                                  aria-label={`Jump to activity ${idx + 1}`}
                                  title={`Moment ${idx + 1}`}
                                />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Slide: Certifications */}
            {activeSlide === "certifications" && (
              <div className="w-full space-y-8">
                <div className="text-center">
                  <div className="section-eyebrow justify-center mb-3">Credentials</div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] font-heading">Certifications &amp; Achievements</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto pr-1">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <GlowCard key={idx} className="p-5 text-left flex flex-col h-full">
                      <div className="flex-1 space-y-2.5">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-[var(--badge-border)] flex items-center justify-center">
                          {cert.icon}
                        </div>
                        <h3 className="text-base font-bold text-[var(--foreground)] font-heading leading-snug line-clamp-2">{cert.title}</h3>
                        <div className="text-xs text-[var(--accent)] font-semibold font-body">{cert.issuer}</div>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed font-body">{cert.desc}</p>
                      </div>
                      <div className="pt-3 border-t border-[var(--card-border)]/50 mt-4">
                        <span className="skill-badge">{cert.date}</span>
                      </div>
                    </GlowCard>
                  ))}
                </div>
              </div>
            )}

            {/* Slide: Contact */}
            {activeSlide === "contact" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
                {/* Details left */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-7">
                  <div>
                    <div className="section-eyebrow mb-3">Contact Me</div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] font-heading leading-tight">Let&apos;s Work<br />Together.</h2>
                  </div>
                  
                  <p className="text-base text-[var(--text-muted)] leading-relaxed font-body">
                    Have a project in mind, looking for a developer to join your team, or want to build your next intelligence-driven application? My inbox is always open.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-4 text-[var(--foreground)]">
                      <div className="p-3 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 text-[var(--accent)] rounded-xl border border-[var(--badge-border)]">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-body text-[var(--text-muted)]">anuguvaishnavireddy2@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4 text-[var(--foreground)]">
                      <div className="p-3 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 text-[var(--accent)] rounded-xl border border-[var(--badge-border)]">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-body text-[var(--text-muted)]">Hyderabad, India</span>
                    </div>
                  </div>
                </div>

                {/* Form right */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <form ref={formRef} className="space-y-4 text-left glass-card p-6 md:p-8 rounded-3xl" onSubmit={(e) => {
                    e.preventDefault();
                    setIsFormSending(true);
                    setFormStatus("idle");
                    emailjs.sendForm(
                      "YOUR_SERVICE_ID",
                      "YOUR_TEMPLATE_ID",
                      formRef.current!,
                      "YOUR_PUBLIC_KEY"
                    ).then(() => {
                      setFormStatus("success");
                      formRef.current?.reset();
                    }).catch(() => {
                      setFormStatus("error");
                    }).finally(() => setIsFormSending(false));
                  }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" name="from_name" placeholder="Your Name" className="w-full bg-[var(--background)]/60 border border-[var(--card-border)] focus:border-[var(--accent)] rounded-xl px-4 py-3 text-[var(--foreground)] placeholder-[var(--text-muted)] outline-none transition-all duration-300 text-sm font-body" required />
                      <input type="email" name="from_email" placeholder="Your Email" className="w-full bg-[var(--background)]/60 border border-[var(--card-border)] focus:border-[var(--accent)] rounded-xl px-4 py-3 text-[var(--foreground)] placeholder-[var(--text-muted)] outline-none transition-all duration-300 text-sm font-body" required />
                    </div>
                    <input type="text" name="subject" placeholder="Subject" className="w-full bg-[var(--background)]/60 border border-[var(--card-border)] focus:border-[var(--accent)] rounded-xl px-4 py-3 text-[var(--foreground)] placeholder-[var(--text-muted)] outline-none transition-all duration-300 text-sm font-body" required />
                    <textarea name="message" placeholder="Your Message" rows={4} className="w-full bg-[var(--background)]/60 border border-[var(--card-border)] focus:border-[var(--accent)] rounded-xl px-4 py-3 text-[var(--foreground)] placeholder-[var(--text-muted)] outline-none transition-all duration-300 resize-none text-sm font-body" required></textarea>
                    {formStatus === "success" && <p className="text-emerald-500 text-sm font-semibold text-center font-body">✅ Message sent successfully!</p>}
                    {formStatus === "error" && <p className="text-red-500 text-sm font-semibold text-center font-body">❌ Failed to send. Please email directly.</p>}
                    <button type="submit" disabled={isFormSending} className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 text-sm disabled:opacity-60 font-body">
                      <Send className="w-4 h-4" /> {isFormSending ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-[var(--card-border)]/60 text-[var(--text-muted)] text-xs z-20 relative bg-[var(--background)] transition-colors duration-300">
        <p className="font-body">© {new Date().getFullYear()} <span className="font-semibold text-[var(--foreground)]">Anugu Vaishnavi</span>. All rights reserved.</p>
        {typeof visitorCount === 'number' && (
          <p className="mt-1 text-[var(--text-muted)] font-code">👁️ {visitorCount.toLocaleString()} visitors</p>
        )}
      </footer>

      {/* Back to Home Button */}
      <AnimatePresence>
        {activeSlide !== "home" && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => navigateToSlide("home")}
            className="fixed bottom-20 right-4 z-50 p-3 bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-full shadow-xl shadow-indigo-500/30 hover:scale-110 transition-all"
            aria-label="Back to Home"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative transition-all duration-300"
            >
               <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-colors">
                  <X className="w-5 h-5" />
               </button>
               
               <div className={`h-48 md:h-64 w-full bg-gradient-to-br ${selectedProject.color} relative`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[var(--card-bg)] to-transparent" />
               </div>
               
               <div className="p-8 md:p-10 -mt-10 relative z-10">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)] mb-4">{selectedProject.name}</h2>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.map((t: string) => (
                      <span key={t} className="text-xs px-3 py-1 bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] rounded-lg font-medium transition-all duration-300">{t}</span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Project Overview</h3>
                  <p className="text-[var(--text-muted)] leading-relaxed mb-8 text-sm md:text-base">{selectedProject.longDesc}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                     <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors font-semibold">
                       <GithubIcon className="w-5 h-5" /> View Source Code
                     </a>
                     {selectedProject.demo && (
                        <button onClick={() => alert("Local demo environment currently executing. Deployment pending.")} className="flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors font-semibold shadow-lg shadow-blue-500/20">
                           <ExternalLink className="w-5 h-5" /> Launch Live Application
                        </button>
                     )}
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Activity / Event Lightbox Modal */}
      <AnimatePresence>
        {selectedActivity && (() => {
          const currentIndex = ACTIVITIES.findIndex(a => a.id === selectedActivity.id);
          const handlePrev = () => {
            const prevIdx = (currentIndex - 1 + ACTIVITIES.length) % ACTIVITIES.length;
            setSelectedActivity(ACTIVITIES[prevIdx]);
          };
          const handleNext = () => {
            const nextIdx = (currentIndex + 1) % ACTIVITIES.length;
            setSelectedActivity(ACTIVITIES[nextIdx]);
          };

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
              onClick={() => setSelectedActivity(null)}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col transition-all duration-300"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="absolute top-4 right-4 z-30 p-2.5 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full text-white transition-all shadow-lg hover:scale-110"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left/Right Floating Navigation */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/3 -translate-y-1/2 z-30 p-2.5 bg-black/60 hover:bg-indigo-600 backdrop-blur-md rounded-full text-white transition-all shadow-xl hover:scale-110 hidden sm:flex items-center justify-center"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/3 -translate-y-1/2 z-30 p-2.5 bg-black/60 hover:bg-indigo-600 backdrop-blur-md rounded-full text-white transition-all shadow-xl hover:scale-110 hidden sm:flex items-center justify-center"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Scrollable Content */}
                <div className="overflow-y-auto max-h-[90vh]">
                  {/* High-Resolution Photo Viewer */}
                  <div className="relative w-full bg-black flex items-center justify-center min-h-[300px] max-h-[55vh] overflow-hidden">
                    <img
                      src={selectedActivity.image}
                      alt={selectedActivity.title}
                      className="w-full h-auto max-h-[55vh] object-contain"
                    />
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className={`text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xl bg-gradient-to-r ${selectedActivity.badgeColor}`}>
                        {selectedActivity.badge}
                      </span>
                      <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white/90 border border-white/20 font-code">
                        {currentIndex + 1} of {ACTIVITIES.length}
                      </span>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="p-6 md:p-8 space-y-5 text-left">
                    <div className="space-y-2">
                      <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] font-heading leading-tight">
                        {selectedActivity.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)] font-body">
                        <span className="font-semibold text-[var(--accent)]">{selectedActivity.organization}</span>
                        <span>•</span>
                        <span className="font-code text-xs">{selectedActivity.period}</span>
                      </div>
                    </div>

                    {selectedActivity.description && (
                      <p className="text-sm md:text-base text-[var(--text-muted)] leading-relaxed font-body">
                        {selectedActivity.description}
                      </p>
                    )}

                    {/* Key Highlights */}
                    {selectedActivity.highlights && selectedActivity.highlights.length > 0 && (
                      <div className="space-y-2 pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)] font-code">
                          Key Takeaways &amp; Highlights:
                        </h4>
                        <div className="space-y-2">
                          {selectedActivity.highlights.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-[var(--foreground)] font-body">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tags & Mobile Nav Footer */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[var(--card-border)]/50">
                      <div className="flex flex-wrap gap-2">
                        {selectedActivity.tags.map((tag, idx) => (
                          <span key={idx} className="skill-badge text-xs px-3 py-1">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Mobile Next/Prev Buttons */}
                      <div className="flex sm:hidden items-center gap-2 w-full justify-between pt-2">
                        <button
                          onClick={handlePrev}
                          className="flex items-center gap-1 px-3.5 py-2 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl text-xs font-semibold"
                        >
                          <ChevronLeft className="w-4 h-4" /> Prev
                        </button>
                        <span className="text-xs text-[var(--text-muted)] font-code">
                          {currentIndex + 1} / {ACTIVITIES.length}
                        </span>
                        <button
                          onClick={handleNext}
                          className="flex items-center gap-1 px-3.5 py-2 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl text-xs font-semibold"
                        >
                          Next <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
      
    </main>
  );
}
