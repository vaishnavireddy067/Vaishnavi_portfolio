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
  PieChart, LineChart, Server, Layout, BookOpen, Users, Target, Zap, FileSpreadsheet
} from "lucide-react";
import { SKILL_CATEGORIES } from "../data/skills";
import { PROJECTS } from "../data/projects";
import DownloadDropdown from "../components/DownloadDropdown";

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

// Reusable Card Component
const GlowCard = ({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => (
  <motion.div 
    whileHover={{ y: -4, scale: 1.01 }}
    transition={{ duration: 0.2 }}
    onClick={onClick}
    className={`bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-[var(--card-hover-border)] transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSlide, setActiveSlide] = useState("home");
  const [activeSkillCategoryIdx, setActiveSkillCategoryIdx] = useState(0);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Handle slide transitions from navigation
  const navigateToSlide = (slide: string) => {
    setActiveSlide(slide);
    setIsMobileMenuOpen(false);
  };

  const getLinkClasses = (slide: string) => {
    return `text-sm font-semibold transition-all py-1.5 px-3.5 rounded-xl cursor-pointer ${
      activeSlide === slide 
        ? "bg-[var(--accent)] text-white shadow-md shadow-blue-500/20" 
        : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
    }`;
  };

  const getMobileLinkClasses = (slide: string) => {
    return `text-lg font-bold transition-all py-2.5 px-4 rounded-xl cursor-pointer ${
      activeSlide === slide 
        ? "bg-[var(--accent)] text-white" 
        : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
    }`;
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-blue-500/30 overflow-x-hidden transition-colors duration-300 relative stars-bg">
      {/* Background Cosmic Top Center Light */}
      <div className="absolute top-0 left-0 w-full h-[600px] cosmic-glow pointer-events-none z-0" />

      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--card-border)] transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
           {/* Logo Branding */}
           <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateToSlide("home")}>
             <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white font-extrabold shadow-md shadow-blue-500/20">A</div>
             <span className="text-xl font-bold tracking-tight text-[var(--foreground)]">Anugu Vaishnavi</span>
           </div>
           
           {/* Navigation Centered Slide Links */}
           <div className="hidden md:flex gap-1.5 p-1 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl shadow-inner">
             <button onClick={() => navigateToSlide("home")} className={getLinkClasses("home")}>Home</button>
             <button onClick={() => navigateToSlide("about")} className={getLinkClasses("about")}>About</button>
             <button onClick={() => navigateToSlide("skills")} className={getLinkClasses("skills")}>Skills</button>

             <button onClick={() => navigateToSlide("projects")} className={getLinkClasses("projects")}>Projects</button>
             <button onClick={() => navigateToSlide("certifications")} className={getLinkClasses("certifications")}>Certifications</button>
             <button onClick={() => navigateToSlide("contact")} className={getLinkClasses("contact")}>Contact</button>
           </div>
           
           {/* Socials & Theme Toggle right */}
           <div className="flex items-center gap-3">
             <a href="https://github.com/vaishnavireddy067" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block p-2 text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">
               <GithubIcon className="w-5 h-5" />
             </a>
             <a href="https://www.linkedin.com/in/anugu-vaishnavi-651a67353" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block p-2 text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">
               <LinkedinIcon className="w-5 h-5" />
             </a>
             <button 
               onClick={() => setIsDarkMode(!isDarkMode)}
               className="p-2.5 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] hover:border-[var(--card-hover-border)] transition-all"
               aria-label="Toggle Theme"
             >
               {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
             </button>
             <button className="md:hidden p-2 text-[var(--text-muted)] hover:text-[var(--foreground)] focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
               <Menu className="w-6 h-6" />
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
             <button onClick={() => navigateToSlide("projects")} className={getMobileLinkClasses("projects")}>Projects</button>
             <button onClick={() => navigateToSlide("certifications")} className={getMobileLinkClasses("certifications")}>Certifications</button>
             <button onClick={() => navigateToSlide("contact")} className={getMobileLinkClasses("contact")}>Contact</button>
             <div className="flex items-center gap-4 pt-4 border-t border-[var(--card-border)]/50 justify-center">
                <a href="https://github.com/vaishnavireddy067" target="_blank" rel="noopener noreferrer" className="p-3 border border-[var(--card-border)] bg-[var(--background)] text-[var(--text-muted)] hover:text-[var(--foreground)] rounded-full transition-all">
                  <GithubIcon className="w-5 h-5 pointer-events-none" />
                </a>
                <a href="https://www.linkedin.com/in/anugu-vaishnavi-651a67353" target="_blank" rel="noopener noreferrer" className="p-3 border border-[var(--card-border)] bg-[var(--background)] text-[var(--text-muted)] hover:text-[var(--foreground)] rounded-full transition-all">
                  <LinkedinIcon className="w-5 h-5 pointer-events-none" />
                </a>
                <a href="mailto:anuguvaishnavireddy6@gmail.com" className="p-3 border border-[var(--card-border)] bg-[var(--background)] text-[var(--text-muted)] hover:text-[var(--foreground)] rounded-full transition-all">
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
                <div className="lg:col-span-7 text-left space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-semibold text-[var(--foreground)]">Hi there,</h3>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-[var(--foreground)]">
                      I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-violet-400">Anugu Vaishnavi</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-extrabold text-[var(--foreground)] flex items-center gap-2">
                      And I&apos;m an <span className="text-[var(--accent)]">AI & ML Enthusiast |</span>
                    </h2>
                  </div>
                  
                  <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl">
                    I build modern, responsive and scalable intelligent systems using Generative AI and LLM technologies. Aspiring Software Developer & Data Analyst.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-2.5 pt-2">
                    <button onClick={() => navigateToSlide("about")} className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs md:text-sm font-semibold rounded-xl transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                      About Me
                    </button>
                    <DownloadDropdown />
                    <button onClick={() => navigateToSlide("contact")} className="px-5 py-2.5 bg-transparent text-[var(--foreground)] text-xs md:text-sm font-semibold border border-[var(--card-border)] rounded-xl hover:bg-[var(--card-bg)] hover:border-[var(--card-hover-border)] transition-all">
                      Contact Me
                    </button>
                  </div>

                  {/* Social Circles Row */}
                  <div className="flex items-center gap-4 pt-4">
                    <a href="https://github.com/vaishnavireddy067" target="_blank" rel="noopener noreferrer" className="p-3 border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-muted)] hover:text-[var(--foreground)] hover:border-[var(--card-hover-border)] rounded-full transition-all">
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/anugu-vaishnavi-651a67353" target="_blank" rel="noopener noreferrer" className="p-3 border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-muted)] hover:text-[var(--foreground)] hover:border-[var(--card-hover-border)] rounded-full transition-all">
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a href="mailto:anuguvaishnavireddy6@gmail.com" className="p-3 border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-muted)] hover:text-[var(--foreground)] hover:border-[var(--card-hover-border)] rounded-full transition-all">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Right avatar visual */}
                <div className="lg:col-span-5 flex flex-col items-center gap-4 relative">
                  <img src="/images/profile.png" alt="Anugu Vaishnavi" className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full object-cover border-4 border-blue-500/80 shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-transform hover:scale-105 relative z-10" />
                </div>

                {/* Bottom stats layout */}
                <div className="lg:col-span-12 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[var(--card-border)]">
                  <div className="text-center p-4 bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] shadow-sm">
                    <div className="text-3xl font-extrabold text-[var(--accent)]">5+</div>
                    <div className="text-xs text-[var(--text-muted)] font-semibold mt-1">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] shadow-sm">
                    <div className="text-3xl font-extrabold text-[var(--accent)]">10+</div>
                    <div className="text-xs text-[var(--text-muted)] font-semibold mt-1">Certificates</div>
                  </div>
                  <div className="text-center p-4 bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] shadow-sm">
                    <div className="text-3xl font-extrabold text-[var(--accent)]">12+</div>
                    <div className="text-xs text-[var(--text-muted)] font-semibold mt-1">Technologies</div>
                  </div>
                  <div className="text-center p-4 bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] shadow-sm">
                    <div className="text-3xl font-extrabold text-[var(--accent)]">100%</div>
                    <div className="text-xs text-[var(--text-muted)] font-semibold mt-1">Dedication</div>
                  </div>
                </div>
              </div>
            )}

            {/* Slide: About Me */}
            {activeSlide === "about" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch w-full">
                <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-[var(--accent)] uppercase">About Me</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] mt-2">About Me</h2>
                  </div>
                  
                  <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed">
                    I am a passionate <strong className="text-[var(--foreground)]">AI & ML Builder and Full Stack Developer</strong> driven by the desire to innovate and engineer scalable solutions. As an aspiring <strong className="text-[var(--foreground)]">Data Analyst & Software Developer</strong>, my core goal is to build highly functional, intelligent systems that solve real-world challenges by blending robust AI algorithms with intuitive user interfaces. Furthermore, as an active <strong className="text-[var(--foreground)]">Public Speaker & Content Creator</strong>, I love sharing my journey, discussing tech trends, and building in public.
                  </p>
                  
                  <div className="flex justify-center gap-2.5 pt-6">
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 space-y-6 shadow-sm transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[var(--badge-bg)] text-[var(--badge-text)] rounded-xl transition-all duration-300">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-[var(--text-muted)] font-medium">Name</div>
                        <div className="font-semibold text-[var(--foreground)]">Anugu Vaishnavi</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[var(--badge-bg)] text-[var(--badge-text)] rounded-xl transition-all duration-300">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-[var(--text-muted)] font-medium">Email</div>
                        <div className="font-semibold text-[var(--foreground)]">anuguvaishnavireddy6@gmail.com</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[var(--badge-bg)] text-[var(--badge-text)] rounded-xl transition-all duration-300">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-[var(--text-muted)] font-medium">Location</div>
                        <div className="font-semibold text-[var(--foreground)]">Hyderabad, India</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[var(--badge-bg)] text-[var(--badge-text)] rounded-xl transition-all duration-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div>
                        <div className="text-xs text-[var(--text-muted)] font-medium">Availability</div>
                        <div className="font-semibold text-[var(--foreground)] flex items-center gap-2">
                          Available for work
                          <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block animate-ping"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Slide: Skills */}
            {activeSlide === "skills" && (
              <div className="w-full space-y-8">
                <div className="text-center">
                  <span className="text-xs font-bold tracking-widest text-[var(--accent)] uppercase">My Skills</span>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] mt-2">Technical & Soft Skills</h2>
                </div>

                {/* Categories Tab pills */}
                <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto p-1 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl">
                  {SKILL_CATEGORIES.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSkillCategoryIdx(idx)}
                      className={`text-xs md:text-sm font-semibold transition-all py-1.5 px-3 md:px-4 rounded-xl cursor-pointer ${
                        activeSkillCategoryIdx === idx 
                          ? "bg-[var(--accent)] text-white shadow-md shadow-blue-500/10" 
                          : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      {cat.title}
                    </button>
                  ))}
                </div>

                {/* Grid of skill tags in identical cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-h-[50vh] overflow-y-auto pr-2">
                  {SKILL_CATEGORIES[activeSkillCategoryIdx].skills.map((skillName, idx) => (
                    <GlowCard key={idx} className="flex flex-col items-center text-center p-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${(() => {
                        const lower = skillName.toLowerCase();
                        if (lower.includes('python')) return 'bg-blue-100 text-blue-800';
                        if (lower.includes('react')) return 'bg-green-100 text-green-800';
                        if (lower.includes('javascript')) return 'bg-yellow-100 text-yellow-800';
                        if (lower.includes('typescript')) return 'bg-indigo-100 text-indigo-800';
                        if (lower.includes('tailwind')) return 'bg-teal-100 text-teal-800';
                        return 'bg-[var(--background)]';
                      })()}`}
                      >
                        {getSkillIcon(skillName)}
                      </div>
                      <h4 className="font-bold text-[var(--foreground)] text-sm md:text-base mb-1">{skillName}</h4>
                      <span className="text-xs text-[var(--text-muted)] font-medium">{SKILL_CATEGORIES[activeSkillCategoryIdx].title}</span>
                    </GlowCard>
                  ))}
                </div>
              </div>
            )}

        {/* Slide: Projects */}
        {activeSlide === "projects" && (
          <div className="w-full space-y-8">
            <div className="text-center">
              <span className="text-xs font-bold tracking-widest text-[var(--accent)] uppercase">Projects</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] mt-2">Featured Projects</h2>
            </div>
            {/* Enhanced Projects Grid with rich UI */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((proj, idx) => (
                <GlowCard
                  key={idx}
                  className="p-6 flex flex-col h-full justify-between cursor-pointer hover:shadow-lg"
                  onClick={() => setSelectedProject(proj)}
                  aria-label={`Open ${proj.name} details`}
                >
                  {/* Project Image */}
                  {proj.image && (
                    <img
                      src={proj.image}
                      alt={`${proj.name} screenshot`}
                      className="w-full h-40 object-cover rounded mb-3"
                    />
                  )}
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-bold text-[var(--foreground)]">{proj.name}</h3>
                    <p className="text-sm text-[var(--text-muted)] line-clamp-2">{proj.desc}</p>
                    {/* Impact statement */}
                    {proj.impact && (
                      <p className="text-xs text-[var(--accent)] mt-1">{proj.impact}</p>
                    )}
                    {/* Helper to assign Tailwind background colors for tech badges */}
                    {/* Updated tech badge block with Read More and buttons */}
{(() => {
  const getTechBadgeClass = (tech: string) => {
    const lower = tech.toLowerCase();
    if (lower.includes('python')) return 'bg-blue-100 text-blue-800';
    if (lower.includes('react')) return 'bg-green-100 text-green-800';
    if (lower.includes('javascript')) return 'bg-yellow-100 text-yellow-800';
    if (lower.includes('typescript')) return 'bg-indigo-100 text-indigo-800';
    if (lower.includes('next.js') || lower.includes('nextjs')) return 'bg-gray-100 text-gray-800';
    if (lower.includes('tailwind')) return 'bg-teal-100 text-teal-800';
    return 'bg-[var(--badge-bg)] text-[var(--badge-text)]';
  };
  return (
    <>
      <div className="flex flex-wrap gap-2 mt-2">
        {proj.tech.map((t) => (
          <span
            key={t}
            className={`text-xs px-2 py-1 border border-[var(--badge-border)] rounded ${getTechBadgeClass(t)}`}
          >
            {t}
          </span>
        ))}
      </div>
      {/* Read More link */}
      {proj.blog && (
        <a
          href={proj.blog}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${proj.name} blog`}
          className="mt-2 inline-block text-sm text-[var(--accent)] hover:underline"
        >
          Read More
        </a>
      )}
      {/* Demo & Source buttons */}
      <div className="mt-2 flex gap-2">
        {proj.demo && (
          <a
            href={proj.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${proj.name} demo`}
            data-analytics="demo"
            className="px-3 py-1 bg-[var(--accent)] text-white rounded text-sm hover:brightness-90"
          >
            Live Demo
          </a>
        )}
        {proj.github && (
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${proj.name} source`}
            data-analytics="source"
            className="px-3 py-1 bg-gray-200 text-[var(--foreground)] rounded text-sm hover:bg-gray-300"
          >
            View Source
          </a>
        )}
      </div>
    </>
  );
})()}
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        )}


            {/* Slide: Certifications */}
            {activeSlide === "certifications" && (
              <div className="w-full space-y-8">
                <div className="text-center">
                  <span className="text-xs font-bold tracking-widest text-[var(--accent)] uppercase">Credentials</span>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] mt-2">Certifications & Achievements</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[60vh] overflow-y-auto pr-2">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <GlowCard key={idx} className="p-6 text-left flex flex-col h-full justify-between">
                      <div className="space-y-3">
                        <div className="w-12 h-12 rounded-xl bg-[var(--badge-bg)] flex items-center justify-center text-[var(--accent)]">
                          {cert.icon}
                        </div>
                        <h3 className="text-lg font-bold text-[var(--foreground)] line-clamp-2">{cert.title}</h3>
                        <div className="text-xs text-[var(--text-muted)] font-semibold">{cert.issuer}</div>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">{cert.desc}</p>
                      </div>
                      <div className="pt-4 border-t border-[var(--card-border)]/50 mt-4 text-[10px] text-[var(--text-muted)] font-mono">
                        Date: {cert.date}
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
                <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-[var(--accent)] uppercase">Contact Me</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] mt-2">Get In Touch</h2>
                  </div>
                  
                  <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed">
                    Have a project in mind, looking for a developer to join your team, or want to build your next intelligence-driven application? My inbox is always open.
                  </p>

                  <div className="space-y-4 pt-2 font-mono text-sm">
                    <div className="flex items-center gap-4 text-[var(--foreground)]">
                      <div className="p-3 bg-[var(--badge-bg)] text-[var(--badge-text)] rounded-xl">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span>anuguvaishnavireddy6@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4 text-[var(--foreground)]">
                      <div className="p-3 bg-[var(--badge-bg)] text-[var(--badge-text)] rounded-xl">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span>Hyderabad, India</span>
                    </div>
                  </div>
                </div>

                {/* Form right */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <form className="space-y-4 text-left bg-[var(--card-bg)] border border-[var(--card-border)] p-6 md:p-8 rounded-3xl shadow-sm" onSubmit={(e) => { 
                        e.preventDefault(); 
                        const fd = new FormData(e.currentTarget);
                        window.location.href = `mailto:anuguvaishnavireddy6@gmail.com?subject=Portfolio Contact from ${fd.get('name')}&body=${fd.get('message')}`;
                  }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" name="name" placeholder="Your Name" className="w-full bg-[var(--background)] border border-[var(--card-border)] focus:border-[var(--accent)] rounded-xl px-4 py-3 text-[var(--foreground)] placeholder-[var(--text-muted)] outline-none transition-all duration-300 text-sm" required />
                      <input type="email" name="email" placeholder="Your Email" className="w-full bg-[var(--background)] border border-[var(--card-border)] focus:border-[var(--accent)] rounded-xl px-4 py-3 text-[var(--foreground)] placeholder-[var(--text-muted)] outline-none transition-all duration-300 text-sm" required />
                    </div>
                    <input type="text" name="subject" placeholder="Subject" className="w-full bg-[var(--background)] border border-[var(--card-border)] focus:border-[var(--accent)] rounded-xl px-4 py-3 text-[var(--foreground)] placeholder-[var(--text-muted)] outline-none transition-all duration-300 text-sm" required />
                    <textarea name="message" placeholder="Your Message" rows={4} className="w-full bg-[var(--background)] border border-[var(--card-border)] focus:border-[var(--accent)] rounded-xl px-4 py-3 text-[var(--foreground)] placeholder-[var(--text-muted)] outline-none transition-all duration-300 resize-none text-sm" required></textarea>
                    <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 text-sm">
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-[var(--card-border)] text-[var(--text-muted)] text-xs z-20 relative bg-[var(--background)] transition-colors duration-300">
        © {new Date().getFullYear()} Anugu Vaishnavi. All rights reserved.
      </footer>

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
      
    </main>
  );
}
