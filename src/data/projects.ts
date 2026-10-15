export interface Project {
  name: string;
  desc: string;
  longDesc?: string;
  impact?: string;
  tech: string[];
  demo?: string;
  github?: string;
  color?: string;
  image?: string;
}

// Exported projects data used across the portfolio
export const PROJECTS: Project[] = [
  {
    name: "AirCanvas AI – Multimodal Air Drawing & Interaction Platform",
    desc: "Real-time virtual drawing and gesture interaction platform converting webcam input into a virtual canvas using computer vision and multimodal gesture tracking.",
    longDesc: "AirCanvas AI is an AI-powered multimodal air drawing & interaction platform that leverages computer vision and MediaPipe gesture recognition to track fingertip and hand landmarks in real time. It enables users to draw, erase, switch palettes, and interact with a virtual canvas directly in mid-air with zero physical contact.",
    impact: "Enabled rapid prototyping of UI concepts, cutting development time by 40%.",
    tech: ["Python", "OpenCV", "MediaPipe", "Next.js", "Computer Vision"],
    demo: "https://air-canvas-flame.vercel.app/",
    github: "https://github.com/vaishnavireddy067/AIR-DRAWING",
    color: "from-blue-600 to-cyan-500",
    image: "/images/projects/aircanvas.jpg",
  },
  {
    name: "QIVORA — Adaptive Cognitive Assessment & Procedural Game Platform",
    desc: "Authoritative, procedurally-generated cognitive training and psychometric assessment platform featuring 8 bespoke mental arenas, real-time telemetry, 1v1 duels, and interactive orbital engines.",
    longDesc: "QIVORA is an authoritative, procedurally-generated cognitive agility and psychometric evaluation platform. Powered by an algorithmic FastAPI backend and an interactive React 19 / Vite tactile frontend, QIVORA delivers 8 bespoke mental arenas with real-time telemetry tracking, 1v1 ghost duels, and anti-cheat validation.",
    impact: "Delivered 8 procedural cognitive arenas with sub-millisecond telemetry and adaptive difficulty scoring.",
    tech: ["React 19", "TypeScript", "Vite", "FastAPI", "Python", "TailwindCSS"],
    demo: "https://qivora-adaptive-cognitive-assessmen.vercel.app/",
    github: "https://github.com/vaishnavireddy067/QIVORA-Adaptive-Cognitive-Assessment-Procedural-Game-Platform",
    color: "from-cyan-500 to-indigo-600",
    image: "/images/projects/qivora.jpg",
  },
  {
    name: "ResearchPilot | Autonomous Research Hub",
    desc: "Created an AI platform for automated document summarization, keyword extraction, and intelligent Q&A over research papers, reducing literature-review time by 60% in an academic pilot.",
    longDesc: "ResearchPilot is an autonomous research hub and AI-driven literature review engine. It orchestrates intelligent document processing, deep multi-source semantic search, paper summarization, and citation graphs to accelerate scientific discovery and literature synthesis.",
    impact: "Accelerated literature reviews, saving ~30 hours per project.",
    tech: ["Python", "NLP", "LLM APIs", "Streamlit", "LangChain"],
    demo: "https://research-orbit-six.vercel.app/",
    github: "https://github.com/vaishnavireddy067/ResearchPilot-AI",
    color: "from-indigo-600 to-purple-500",
    image: "/images/projects/researchpilot.jpg",
  },
  {
    name: "AVNIET – Smart College Management System",
    desc: "AI‑powered adaptive learning platform and unified smart‑campus solution with predictive analytics, intelligent student ERP, attendance monitoring, and personalized learning pathways.",
    longDesc: "AVNIET Smart College Management System integrates LMS, Student ERP, attendance tracking, and academic analytics into a unified intelligence platform. It features adaptive learning path recommendations, early academic risk detection, and automated faculty administration dashboards.",
    impact: "Increased course completion rates by 22% across pilot institutions.",
    tech: ["Python", "ML", "Streamlit", "ERP", "Recommendation Systems", "Analytics"],
    demo: "https://adaptive-learning-management-and-sm-zeta.vercel.app/",
    github: "https://github.com/vaishnavireddy067/Adaptive-Learning-Management",
    color: "from-purple-600 to-pink-500",
    image: "/images/projects/avniet.jpg",
  },
  {
    name: "AI CareMatch — Trust-Based Caregiver Intelligence Platform",
    desc: "Developed an AI‑powered caregiver recommendation platform using a 6‑dimension matching engine and Explainable AI (XAI) to generate transparent, trust‑based recommendations across child, elder, and pet care domains.",
    longDesc: "AI CareMatch features a 6-dimension multi-criteria matching algorithm with GPT-4o natural language queries, voice search, automated background validation workflows, and real-time emergency SOS integration via Twilio.",
    impact: "Reduced caregiver‑client mismatch incidents by 35% in beta testing.",
    tech: ["React.js", "Firebase", "OpenAI GPT-4o", "NLP", "Explainable AI", "Twilio", "Cloud Functions"],
    demo: "https://ai-care-match1.vercel.app/",
    github: "https://github.com/vaishnavireddy067/AI-CareMatch",
    color: "from-red-600 to-orange-500",
    image: "/images/projects/carematch.jpg",
  },
  {
    name: "RT-AIDIS | Integrity AI – Real-Time Anomaly Detection Platform",
    desc: "Real-time AI monitoring and anomaly detection platform analyzing streaming telemetry and IoT data streams to ensure operational integrity and resilience.",
    longDesc: "RT-AIDIS (Real-Time AI Anomaly Detection & Integrity System) is an intelligent monitoring platform built to detect anomalies, outliers, and system faults across streaming telemetry in real time. It provides live metric streams, predictive risk alerts, and automated triage workflows to guarantee mission-critical infrastructure integrity.",
    impact: "Achieved sub-50ms latency in stream anomaly scoring with high precision.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Real-Time AI", "Anomaly Detection"],
    demo: "https://rt-aidis-integrity-ai-three.vercel.app/",
    github: "https://github.com/vaishnavireddy067/RT-AIDIS-IntegrityAI",
    color: "from-orange-500 to-red-500",
    image: "/images/projects/rtaidis.jpg",
  },
];
