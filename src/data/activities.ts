export interface ActivityItem {
  id: string;
  title: string;
  category: "hackathon" | "workshop" | "leadership" | "award";
  badge: string;
  badgeColor: string;
  organization: string;
  period: string;
  description?: string;
  image: string;
  tags: string[];
  highlights?: string[];
}

export const ACTIVITIES: ActivityItem[] = [
  {
    id: "genai-forge-winner",
    title: "GenAI Forge Hackathon – Winner 🏆",
    category: "award",
    badge: "1st Place Winner",
    badgeColor: "from-amber-500 to-yellow-400 text-black",
    organization: "AVN Institute of Engineering and Technology",
    period: "2026",
    description: "Won 1st Prize at the prestigious GenAI Forge Hackathon for architecting and deploying an autonomous Generative AI solution. Awarded on stage by college leadership, industry judges, and department dignitaries.",
    image: "/images/activities/genai-forge-winner.jpg",
    tags: ["GenAI", "LLMs", "Hackathon Winner", "Prompt Engineering", "Full-Stack AI"],
    highlights: [
      "Awarded 1st place among dozens of competing engineering teams",
      "Pitched and demonstrated live working prototype to industry jury",
    ]
  },
  {
    id: "msme-hackathon-2025",
    title: "MSME Hackathon 2025",
    category: "hackathon",
    badge: "Project Presenter",
    badgeColor: "from-blue-600 to-indigo-500 text-white",
    organization: "Ministry of MSME / AVNIET",
    period: "2025",
    description: "Presented the technical approach, AI models, and IoT data architecture for enterprise automation and monitoring solutions at MSME Hackathon 2025.",
    image: "/images/activities/msme-hackathon-2025.png",
    tags: ["MSME Hackathon", "Technical Approach", "AI & IoT", "Presentation"],
    highlights: [
      "Walked through machine learning algorithms and system methodology",
      "Demonstrated system architecture on projector to review panel"
    ]
  },
  {
    id: "sih-hackathon",
    title: "Smart India Hackathon (SIH)",
    category: "hackathon",
    badge: "Team Lead & Presenter",
    badgeColor: "from-blue-600 to-cyan-500 text-white",
    organization: "Ministry of Education / SIH",
    period: "2025 - 2026",
    description: "Led team 'Cybers Quest' presenting our flagship AI solution: 'AI-Based Cultural Heritage Preservation Platform'. Pitched advanced computer vision and data digitization models to preserve historical monuments and indigenous culture.",
    image: "/images/activities/sih-hackathon.png",
    tags: ["SIH", "Cultural Heritage AI", "Computer Vision", "Team Lead", "GovTech"],
    highlights: [
      "Designed AI architecture for automated heritage preservation",
      "Delivered live technical presentation and system architecture walkthrough",
    ]
  },
  {
    id: "logic-league-coordinator",
    title: "Coordinator at Logic League (Tech Event)",
    category: "leadership",
    badge: "Event Coordinator",
    badgeColor: "from-purple-600 to-pink-500 text-white",
    organization: "Organized by DS & AI&DS Department",
    period: "2025",
    description: "Served as Student Coordinator for 'Logic League', organizing problem-solving rounds, logic battles, and managing event tracks across departments.",
    image: "/images/activities/logic-league-coordinator.png",
    tags: ["Logic League", "Event Coordinator", "AI&DS", "Student Leadership"],
    highlights: [
      "Managed competition schedules, registration desks, and participant queries",
      "Facilitated event execution alongside faculty coordinators"
    ]
  },
  {
    id: "indiacodex-hackathon",
    title: "IndiaCodex Hackathon",
    category: "hackathon",
    badge: "Hackathon Finalist",
    badgeColor: "from-indigo-600 to-purple-500 text-white",
    organization: "IndiaCodex Tech Community",
    period: "2026",
    description: "Participated in an intense multi-hour collaborative coding sprint at IndiaCodex Hackathon, engineering scalable cloud-backed AI prototypes under tight deadlines with team members.",
    image: "/images/activities/indiacodex-hackathon.png",
    tags: ["IndiaCodex", "Collaborative Sprint", "Cloud AI", "Rapid Prototyping"],
    highlights: [
      "Developed end-to-end prototype during a live 24h coding sprint",
      "Collaborated on backend APIs and real-time model inferencing",
    ]
  },
  {
    id: "swayam-workshop",
    title: "SWAYAM Advanced AI & ML Workshop",
    category: "workshop",
    badge: "Hands-on Participant",
    badgeColor: "from-emerald-600 to-teal-500 text-white",
    organization: "SWAYAM / NPTEL Initiative",
    period: "2026",
    description: "Attended intensive hands-on lab sessions on state-of-the-art Machine Learning algorithms, practical data wrangling, model evaluation, and neural network fundamentals in dedicated laboratory environments.",
    image: "/images/activities/swayam-workshop.jpg",
    tags: ["SWAYAM", "Hands-on Lab", "Deep Learning", "Data Science"],
    highlights: [
      "Executed end-to-end ML model pipelines in real-time lab sessions",
      "Engaged in technical Q&A with domain experts and peer researchers",
    ]
  },
  {
    id: "project-showcase-coordinator",
    title: "Project Showcase & Maker Expo",
    category: "leadership",
    badge: "Student Coordinator",
    badgeColor: "from-rose-500 to-pink-500 text-white",
    organization: "AVN Institute of Engineering and Technology",
    period: "2025 - 2026",
    description: "Served as the Lead Student Coordinator for the Annual Technical Project Showcase and Maker Exhibition, mentoring student teams, managing project booths, and coordinating hardware/software demo evaluations.",
    image: "/images/activities/project-showcase-coordinator.png",
    tags: ["Student Leadership", "Project Management", "Coordination", "Maker Expo"],
    highlights: [
      "Coordinated project exhibitions and technical evaluations across departments",
      "Facilitated hardware setups, demo tracks, and judge scoring workflows",
    ]
  },
  {
    id: "speaking-moment-1",
    title: "Technical Presentation Session",
    category: "workshop",
    badge: "Presenter",
    badgeColor: "from-teal-600 to-emerald-500 text-white",
    organization: "AVNIET Campus",
    period: "2025 - 2026",
    image: "/images/activities/speaking-moment-1.png",
    tags: ["Technical Session", "Live Presentation", "Code Walkthrough"]
  },
  {
    id: "speaking-moment-2",
    title: "Keynote & Speaker Address",
    category: "leadership",
    badge: "Speaker",
    badgeColor: "from-amber-600 to-rose-500 text-white",
    organization: "Campus Tech Event",
    period: "2025 - 2026",
    image: "/images/activities/speaking-moment-2.png",
    tags: ["Speaker", "Podium Address", "Leadership"]
  },
  {
    id: "genai-forge-speech",
    title: "GenAI Forge Hackathon Stage Address",
    category: "hackathon",
    badge: "Hackathon Speaker",
    badgeColor: "from-violet-600 to-purple-500 text-white",
    organization: "AVN Institute of Engineering and Technology",
    period: "2026",
    image: "/images/activities/genai-forge-speech.jpg",
    tags: ["GenAI Forge", "Hackathon", "Stage Address"]
  }
];
