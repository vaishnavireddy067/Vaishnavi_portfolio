export interface ArchitectureTier {
  name: string;
  role: string;
  tech: string[];
}

export interface ProjectArchitecture {
  frontend: ArchitectureTier;
  backend: ArchitectureTier;
  database: ArchitectureTier;
  aiModel: ArchitectureTier;
  dataFlow: string[];
}

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
  architecture?: ProjectArchitecture;
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
    architecture: {
      frontend: {
        name: "Next.js & HTML5 Canvas Client",
        role: "Real-time webcam video feed display, interactive mid-air canvas, brush palette selector, and gesture HUD overlay.",
        tech: ["Next.js", "React", "HTML5 Canvas", "TailwindCSS"],
      },
      backend: {
        name: "FastAPI Computer Vision Server",
        role: "High-frequency frame coordinate normalization, stroke trajectory interpolation, and WebSocket streaming pipeline.",
        tech: ["Python", "FastAPI", "WebSockets", "AsyncIO"],
      },
      database: {
        name: "Canvas State & Drawing Cache",
        role: "Client-side stroke path serialization, preset palettes, and PNG/SVG export vector storage.",
        tech: ["IndexedDB", "Local Storage", "In-Memory Buffer"],
      },
      aiModel: {
        name: "MediaPipe Hands & OpenCV Vision Pipeline",
        role: "21 3D hand landmark estimation, fingertip velocity tracking, dynamic gesture recognition (draw, erase, pan).",
        tech: ["MediaPipe", "OpenCV", "NumPy", "Computer Vision"],
      },
      dataFlow: [
        "Webcam captures user hand motion in real-time at 60 FPS",
        "MediaPipe extracts 21 3D hand landmarks & fingertip coordinates",
        "OpenCV gesture classifier detects drawing vs. hover vs. erase state",
        "HTML5 Canvas engine renders smoothed strokes with zero physical contact",
      ],
    },
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
    architecture: {
      frontend: {
        name: "React 19 & Vite Orbital Engine",
        role: "Kinetic orbital circular navigation hub, tactile 60fps cognitive arena canvases, live telemetry HUD, and 1v1 duel arena.",
        tech: ["React 19", "TypeScript", "Vite", "TailwindCSS", "Canvas API"],
      },
      backend: {
        name: "Authoritative FastAPI Engine",
        role: "Procedural problem generation, seeded test determinism, graph BFS minimal move verification, and anti-cheat telemetry scoring.",
        tech: ["FastAPI", "Python 3.11", "Pydantic", "Pytest", "Uvicorn"],
      },
      database: {
        name: "Telemetry & Duel Replay Store",
        role: "Low-latency in-memory session cache, psychometric percentile benchmarks, and asynchronous duel ghost replays.",
        tech: ["Redis / In-Memory Store", "Session Storage", "REST APIs"],
      },
      aiModel: {
        name: "Adaptive Psychometric & DDA Engine",
        role: "Dynamic difficulty adjustment, fluid intelligence indexing, sub-millisecond impulse reaction calibration, and attention anomaly scoring.",
        tech: ["Algorithmic Heuristics", "Dynamic Difficulty Scaling", "Telemetry Analytics"],
      },
      dataFlow: [
        "Candidate selects cognitive arena on kinetic orbital navigation hub",
        "FastAPI procedurally synthesizes seeded cognitive assessment in <10ms",
        "Micro-telemetry (reaction time, hesitation, clicks) streamed to backend",
        "Psychometric engine adjusts arena difficulty and updates fluid IQ scorecard",
      ],
    },
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
    architecture: {
      frontend: {
        name: "Interactive Research Studio",
        role: "Force-directed citation network graph, PDF split-screen reader, research Q&A conversation panel, and keyword tag cloud.",
        tech: ["Next.js", "React", "D3.js / Canvas", "TailwindCSS"],
      },
      backend: {
        name: "FastAPI & LangChain Orchestrator",
        role: "Document ingestion pipeline, recursive semantic chunking, multi-hop query routing, and citation grounding verification.",
        tech: ["Python", "FastAPI", "LangChain", "PyMuPDF"],
      },
      database: {
        name: "FAISS Vector Store & Metadata Index",
        role: "High-density dense semantic embeddings index, paper metadata store, and citation relationship graph mapping.",
        tech: ["FAISS Vector DB", "SQLite", "Embeddings Cache"],
      },
      aiModel: {
        name: "RAG & LLM Synthesis Pipeline",
        role: "Sentence transformer embeddings, semantic nearest-neighbor retrieval, automated multi-page summarization, and grounded Q&A.",
        tech: ["OpenAI GPT-4o / Gemini", "Sentence Transformers", "FAISS", "RAG"],
      },
      dataFlow: [
        "Academic PDF papers uploaded and parsed into structured text sections",
        "Sentence Transformers generate dense embeddings stored in FAISS vector database",
        "User asks research query; hybrid semantic retriever pulls top-k grounded passages",
        "LLM synthesizes response with verified citation links and updates citation graph",
      ],
    },
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
    architecture: {
      frontend: {
        name: "Unified Smart Campus Dashboard",
        role: "Student LMS interface, attendance heatmaps, early risk alerts, and faculty administrative portals.",
        tech: ["Streamlit", "React", "TailwindCSS", "Chart.js"],
      },
      backend: {
        name: "Python ERP Intelligence Engine",
        role: "Automated attendance tracking, academic risk scoring algorithms, and administrative workflows.",
        tech: ["Python", "FastAPI / Flask", "REST APIs", "Pandas"],
      },
      database: {
        name: "Relational ERP & Academic Store",
        role: "Normalized student records, course catalog, attendance archives, and grading schemas.",
        tech: ["PostgreSQL / MySQL", "SQLAlchemy", "Database Migrations"],
      },
      aiModel: {
        name: "Predictive Analytics & Recommendation Engine",
        role: "Early student academic risk classifier and personalized learning pathway recommendations.",
        tech: ["Scikit-learn", "Collaborative Filtering", "Predictive Analytics"],
      },
      dataFlow: [
        "Daily attendance and semester test score data ingested into ERP system",
        "Data preprocessing pipeline calculates rolling performance and attendance trends",
        "ML classifier evaluates academic risk factors and early warning flags",
        "Recommendations & personalized learning pathways rendered for faculty & students",
      ],
    },
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
    architecture: {
      frontend: {
        name: "React.js Trust-Based Matching Portal",
        role: "Caregiver profiles, 6-dimension match radar visualization, natural language search, and voice queries.",
        tech: ["React.js", "TailwindCSS", "Lucide Icons", "Web Speech API"],
      },
      backend: {
        name: "Firebase Cloud Functions & Node.js",
        role: "Serverless REST endpoints, automated background check triggers, and Twilio emergency SOS alerts.",
        tech: ["Node.js", "Firebase Cloud Functions", "Express", "Twilio API"],
      },
      database: {
        name: "Cloud Firestore & Auth",
        role: "Secure encrypted caregiver credentials, client requirements, and trust score history.",
        tech: ["Cloud Firestore", "Firebase Authentication", "Security Rules"],
      },
      aiModel: {
        name: "Explainable AI (XAI) & 6-D Match Engine",
        role: "Multi-criteria candidate ranking, natural language query parsing via GPT-4o, and transparent trust explanation.",
        tech: ["OpenAI GPT-4o", "Explainable AI (SHAP/LIME)", "Custom Scoring Engine"],
      },
      dataFlow: [
        "Family enters care requirements via voice or natural language query",
        "GPT-4o parses intent and extracts 6 matching dimensions (skills, availability, trust)",
        "Scoring engine ranks verified caregivers and generates transparent XAI explanation",
        "Secure booking created with one-click Twilio SOS emergency protection active",
      ],
    },
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
    architecture: {
      frontend: {
        name: "Next.js Streaming Telemetry HUD",
        role: "Live waveform telemetry graphs, anomaly incident logs, and system integrity gauges.",
        tech: ["Next.js", "TypeScript", "Canvas/SVG", "TailwindCSS"],
      },
      backend: {
        name: "Real-Time Telemetry Pipeline",
        role: "High-throughput asynchronous stream ingestion, sliding window metric buffers, and alert dispatching.",
        tech: ["Python", "FastAPI", "WebSockets", "AsyncIO"],
      },
      database: {
        name: "Time-Series Telemetry Store",
        role: "Sliding-window buffer, telemetry log archives, and fault classification historical snapshots.",
        tech: ["Redis Time-Series", "TimescaleDB / In-Memory Buffer"],
      },
      aiModel: {
        name: "Real-Time Anomaly & Outlier Detector",
        role: "Sub-50ms streaming anomaly scoring, isolation forest classifier, and dynamic threshold calibration.",
        tech: ["Isolation Forest", "NumPy", "Statistical Outlier Models"],
      },
      dataFlow: [
        "IoT telemetry and sensor data streams arrive via WebSockets",
        "Sliding-window buffer calculates rolling statistical metrics in memory",
        "Isolation Forest anomaly model scores deviation against normal operational baselines",
        "Sub-50ms emergency alerts and live waveform visualizer update in real-time",
      ],
    },
  },
];
