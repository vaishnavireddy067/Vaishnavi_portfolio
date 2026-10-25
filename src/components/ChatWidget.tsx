"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  X, Send, Bot, Sparkles, User, FileText, Download, 
  ExternalLink, Briefcase, GraduationCap, Award, RefreshCw, Mail, Phone
} from "lucide-react";
import { PROJECTS } from "../data/projects";
import { SKILL_CATEGORIES } from "../data/skills";

interface Message {
  role: "user" | "bot";
  text: string;
  actions?: { label: string; href?: string; download?: boolean; action?: () => void }[];
}

const QUICK_PROMPTS = [
  "🪐 Tell me about QIVORA",
  "🤖 What are Vaishnavi's AI & Agent skills?",
  "💼 Internship experience & roles",
  "📄 Download Resume & CV",
  "🏆 Hackathons & Achievements",
  "📬 Contact & Interview info",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "👋 Hi! I'm Vaishnavi's **AI Portfolio Navigator**.\n\nI can answer questions about her **agentic AI skills**, **projects (like QIVORA)**, **internships**, **education**, or help you download her latest **Resume & CV**.\n\nWhat would you like to explore?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (open) {
      scrollToBottom();
    }
  }, [messages, open, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", text: query }]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateBotResponse(query);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 450);
  };

  const generateBotResponse = (query: string): Message => {
    const q = query.toLowerCase();

    // 1. QIVORA Project
    if (q.includes("qivora")) {
      const qivora = PROJECTS.find((p) => p.name.toLowerCase().includes("qivora"));
      return {
        role: "bot",
        text: `🪐 **QIVORA — Adaptive Cognitive Assessment & Procedural Game Platform**\n\n• **Core Purpose**: Authoritative psychometric evaluation and brain agility platform delivering 8 bespoke procedural mental arenas.\n• **Tech Stack**: React 19, TypeScript, Vite, FastAPI (Python 3.11), TailwindCSS, Pytest.\n• **Key Features**: Kinetic orbital navigation hub, sub-millisecond reaction telemetry, 1v1 ghost duel arena, and anti-cheat validation.\n• **Backend**: Authoritative FastAPI engine generates deterministically seeded puzzles in <10ms.`,
        actions: [
          { label: "🚀 Launch QIVORA Demo", href: qivora?.demo || "https://qivora-adaptive-cognitive-assessmen.vercel.app/" },
          { label: "💻 View QIVORA Source", href: qivora?.github || "https://github.com/vaishnavireddy067/QIVORA-Adaptive-Cognitive-Assessment-Procedural-Game-Platform" },
        ],
      };
    }

    // 2. AirCanvas AI
    if (q.includes("aircanvas") || q.includes("air canvas") || q.includes("drawing") || q.includes("gesture")) {
      const aircanvas = PROJECTS.find((p) => p.name.toLowerCase().includes("aircanvas"));
      return {
        role: "bot",
        text: `🎨 **AirCanvas AI — Multimodal Air Drawing Platform**\n\n• **What it does**: Tracks 21 hand landmarks in real time via webcam with MediaPipe and OpenCV, enabling users to draw in mid-air with zero touch.\n• **Tech Stack**: Python, OpenCV, MediaPipe, Next.js, Computer Vision.\n• **Impact**: Enabled rapid UI concept prototyping, cutting interaction development time by 40%.`,
        actions: [
          { label: "🚀 Live Demo", href: aircanvas?.demo || "https://air-canvas-flame.vercel.app/" },
          { label: "💻 View Source", href: aircanvas?.github || "https://github.com/vaishnavireddy067/AIR-DRAWING" },
        ],
      };
    }

    // 3. ResearchPilot
    if (q.includes("researchpilot") || q.includes("research") || q.includes("paper") || q.includes("citation")) {
      const rp = PROJECTS.find((p) => p.name.toLowerCase().includes("researchpilot"));
      return {
        role: "bot",
        text: `🔬 **ResearchPilot | Autonomous Research Hub**\n\n• **What it does**: AI literature review engine with interactive citation graphs, automated document summarization, and RAG-based multi-paper Q&A.\n• **Tech Stack**: Python, FastAPI, LangChain, FAISS Vector DB, Sentence Transformers, Next.js.\n• **Impact**: Reduced literature review synthesis time by ~60% in academic evaluations.`,
        actions: [
          { label: "🚀 Live Demo", href: rp?.demo || "https://research-orbit-six.vercel.app/" },
          { label: "💻 View Source", href: rp?.github || "https://github.com/vaishnavireddy067/ResearchPilot-AI" },
        ],
      };
    }

    // 4. All Projects
    if (q.includes("project") || q.includes("portfolio") || q.includes("built") || q.includes("work")) {
      const projectList = PROJECTS.map((p) => `• **${p.name.split("–")[0].split("—")[0].split("|")[0].trim()}**: ${p.desc}`).join("\n\n");
      return {
        role: "bot",
        text: `Here are the 6 featured projects Vaishnavi has architected and deployed:\n\n${projectList}\n\n*Click on any card in the Projects section or ask me about a specific project!*`,
        actions: [
          { label: "🪐 Ask about QIVORA", action: () => handleSend("Tell me about QIVORA") },
          { label: "🎨 Ask about AirCanvas", action: () => handleSend("Tell me about AirCanvas AI") },
        ],
      };
    }

    // 5. Skills, Agent Frameworks, AI
    if (q.includes("skill") || q.includes("agent") || q.includes("tech") || q.includes("langgraph") || q.includes("langchain") || q.includes("python") || q.includes("fastapi")) {
      return {
        role: "bot",
        text: `🛠️ **Vaishnavi's Core Technical Skills:**\n\n• **Agentic AI & Orchestration**: LangGraph, LangChain, AutoGen, CrewAI, OpenAI Agents SDK, Tool Calling, Multi-Agent Planning, RAG Pipelines.\n• **LLMs & GenAI**: GPT-4o, Gemini API, Groq (Llama 3.3), Prompt Engineering, Fine-tuning, FAISS Vector Search.\n• **Backend & APIs**: Python, FastAPI, Flask, REST API Architecture, Node.js, Firebase Auth & Firestore, WebSockets.\n• **Frontend & UI**: React 19, Next.js, TypeScript, TailwindCSS, HTML5 Canvas, Responsive Architecture.\n• **Databases**: PostgreSQL, MySQL, SQLite, MongoDB, Vector Stores.\n• **Core CS**: Data Structures & Algorithms, System Design, Operating Systems, Computer Networks.`,
      };
    }

    // 6. Experience & Internships
    if (q.includes("experience") || q.includes("intern") || q.includes("job") || q.includes("company") || q.includes("flyrank") || q.includes("ibm")) {
      return {
        role: "bot",
        text: `💼 **Professional Experience & Internships:**\n\n1. **AI Backend Engineer Intern | FlyRank** (Jul 2026 – Present)\n   • Engineering backend services & APIs powering AI features across computer vision, NLP, agentic AI, and voice AI.\n\n2. **AI Automation & Intelligent Systems Intern | IBM CSR BharatCares** (Jul 2026 – Aug 2026)\n   • Built AI-driven automation workflows in Python for CSR operational monitoring and reporting.\n\n3. **AI Engineer Intern | Coding Blocks School of Technology** (Jun 2026 – Jul 2026)\n   • Trained ML models and integrated GenAI/LLM APIs into client applications.\n\n4. **Artificial Intelligence Intern | Viswam.ai (SoAI)** (Jun 2024 – Aug 2024)\n   • Cleaned and structured large datasets with Pandas & NumPy, reducing preparation time by ~30%.`,
      };
    }

    // 7. Resume & CV Download
    if (q.includes("resume") || q.includes("cv") || q.includes("download") || q.includes("pdf")) {
      return {
        role: "bot",
        text: `📄 **Download Latest Verified Documents:**\n\n• **Resume (1-Page)**: Tailored for AI/ML Agent Engineer & LLM systems roles.\n• **Curriculum Vitae (2-Page)**: Comprehensive overview of SDE systems, full-stack projects, and coursework.`,
        actions: [
          { label: "📥 Download Resume (PDF)", href: "/resume.pdf", download: true },
          { label: "📥 Download CV (PDF)", href: "/cv.pdf", download: true },
        ],
      };
    }

    // 8. Education
    if (q.includes("education") || q.includes("degree") || q.includes("college") || q.includes("university") || q.includes("cgpa") || q.includes("gpa")) {
      return {
        role: "bot",
        text: `🎓 **Academic Background:**\n\n• **B.Tech in Artificial Intelligence & Data Science** (2023 – 2027)\n  *AVN Institute of Engineering & Technology, Hyderabad*\n  **CGPA: 8.72** (Score: 85%)\n\n• **Intermediate (MPC)** (2021 – 2023)\n  *Pragati Junior College, Nalgonda* — **88.5%**\n\n• **Secondary School Certificate (SSC)** (2021)\n  *MVR High School, Nalgonda* — **100%**`,
      };
    }

    // 9. Hackathons & Achievements
    if (q.includes("hackathon") || q.includes("award") || q.includes("achievement") || q.includes("nasscom")) {
      return {
        role: "bot",
        text: `🏆 **Major Achievements & Awards:**\n\n• **1st Place Winner — GenAI Forge Hackathon (Nasscom, January 2026)**\n  Won first prize for designing and deploying complex multi-agent generative workflow models under rapid time and memory constraints.\n\n• **Certifications**: Codec Technologies (Credly Verified), Elite Coders Frontend, IBM AI Fundamentals, Innomatics Research Labs Machine Learning.`,
      };
    }

    // 10. Contact & Interview
    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("hire") || q.includes("reach") || q.includes("interview") || q.includes("linkedin") || q.includes("whatsapp") || q.includes("watsap") || q.includes("msg") || q.includes("message")) {
      return {
        role: "bot",
        text: `📬 **Let's Connect! Vaishnavi is actively open to AI/ML & SDE roles:**\n\n• **WhatsApp**: +91 96523 78004 (Direct & Instant)\n• **Email**: anuguvaishnavireddy2@gmail.com\n• **Phone**: +91 96523 78004\n• **Location**: Nalgonda / Hyderabad, India (Open to Remote & Relocation)\n• **LinkedIn**: linkedin.com/in/anugu-vaishnavi-651a67353\n• **GitHub**: github.com/vaishnavireddy067`,
        actions: [
          { label: "💬 Chat on WhatsApp", href: "https://wa.me/919652378004?text=Hi%20Vaishnavi,%20I'm%20reaching%20out%20from%20your%20portfolio!" },
          { label: "✉️ Send an Email", href: "mailto:anuguvaishnavireddy2@gmail.com" },
          { label: "💼 LinkedIn Profile", href: "https://www.linkedin.com/in/anugu-vaishnavi-651a67353" },
          { label: "🐙 GitHub Profile", href: "https://github.com/vaishnavireddy067" },
        ],
      };
    }

    // 11. Why Hire Vaishnavi
    if (q.includes("why") || q.includes("hire") || q.includes("strength") || q.includes("candidate")) {
      return {
        role: "bot",
        text: `🌟 **Why Hire Vaishnavi?**\n\n1. **Proven Agentic AI Expertise**: Hands-on orchestration with LangGraph, CrewAI, AutoGen, and tool calling.\n2. **4 Hands-On Internships**: Track record building production AI backends, automation pipelines, and data systems.\n3. **Proven Competitor**: 1st place winner at Nasscom GenAI Forge Hackathon.\n4. **End-to-End Execution**: Full-stack capability from React 19/Next.js frontend to FastAPI backend and vector database architecture.`,
        actions: [
          { label: "📄 Download Resume", href: "/resume.pdf", download: true },
          { label: "📬 Contact Vaishnavi", href: "mailto:anuguvaishnavireddy2@gmail.com" },
        ],
      };
    }

    // Fallback
    return {
      role: "bot",
      text: `I can help with that! Here are quick topics you can explore about Vaishnavi:\n\n• Ask about **QIVORA** or any of her 6 featured projects\n• Ask about her **internships at FlyRank and IBM**\n• Ask about her **skills in Agentic AI, LangGraph, and FastAPI**\n• Download her **Resume or CV**`,
      actions: [
        { label: "🪐 Tell me about QIVORA", action: () => handleSend("Tell me about QIVORA") },
        { label: "🤖 AI & Agent Skills", action: () => handleSend("What are Vaishnavi's AI & Agent skills?") },
        { label: "📄 Download Resume", href: "/resume.pdf", download: true },
      ],
    };
  };

  return (
    <>
      {/* Floating Navigator Trigger Button */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
        {!open && (
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--card-bg)]/90 backdrop-blur-md border border-[var(--card-border)] shadow-xl text-xs font-semibold text-[var(--foreground)] animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>AI Portfolio Navigator</span>
          </div>
        )}
        <button
          className="relative flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20"
          onClick={() => setOpen(!open)}
          aria-label="Open AI Portfolio Navigator"
        >
          <Bot className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-500 border-2 border-[var(--background)]"></span>
          </span>
        </button>
      </div>

      {/* Navigator Chat Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end p-2 sm:p-6 bg-black/40 backdrop-blur-sm">
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl w-full max-w-lg h-[85vh] sm:h-[650px] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[var(--card-border)] bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--foreground)] font-heading flex items-center gap-2">
                    <span>AI Portfolio Navigator</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-body">
                    Recruiter Assistant • Instant Answers
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    setMessages([
                      {
                        role: "bot",
                        text: "Conversation refreshed. Ask me anything about Vaishnavi's skills, projects, or background!",
                      },
                    ]);
                  }}
                  title="Clear conversation"
                  className="p-2 text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background)] rounded-full transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--background)] rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Recruiter Prompt Chips */}
            <div className="px-4 py-2.5 bg-[var(--background)]/60 border-b border-[var(--card-border)]/50 overflow-x-auto no-scrollbar flex gap-2">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt.replace(/^[^\w]+/, ""))}
                  className="whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-medium bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--card-border)] hover:border-blue-500 hover:text-blue-400 transition-all flex-shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Messages Feed */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "bot" && (
                    <div className="w-7 h-7 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm space-y-2.5 leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-none font-medium"
                      : "bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--card-border)] rounded-tl-none font-body"
                  }`}>
                    <div className="space-y-1.5 whitespace-pre-wrap">
                      {msg.text.split("\n").map((line, idx) => (
                        <p key={idx} className={line.startsWith("•") || line.startsWith("1.") || line.startsWith("2.") ? "pl-1" : ""}>
                          {line}
                        </p>
                      ))}
                    </div>

                    {/* Action buttons inside bot messages */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border-subtle)]">
                        {msg.actions.map((act, idx) => {
                          if (act.action) {
                            return (
                              <button
                                key={idx}
                                onClick={act.action}
                                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600/15 text-blue-400 hover:bg-blue-600 hover:text-white transition-all border border-blue-500/30 flex items-center gap-1.5"
                              >
                                {act.label}
                              </button>
                            );
                          }
                          return (
                            <a
                              key={idx}
                              href={act.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              download={act.download}
                              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600/15 text-blue-400 hover:bg-blue-600 hover:text-white transition-all border border-blue-500/30 flex items-center gap-1.5"
                            >
                              {act.download ? <Download className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                              <span>{act.label}</span>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 items-center text-xs text-[var(--text-muted)] font-code pl-1">
                  <div className="w-7 h-7 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="p-3 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3.5 border-t border-[var(--card-border)] bg-[var(--background)]/80 flex gap-2 items-center">
              <input
                type="text"
                placeholder="Ask about skills, projects, internships, resume..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--foreground)] placeholder:text-[var(--text-muted)] text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="p-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 disabled:opacity-40 text-white rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md shadow-blue-500/20 flex-shrink-0"
                aria-label="Send query"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
