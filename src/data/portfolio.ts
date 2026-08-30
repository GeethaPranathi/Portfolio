export const profile = {
  name: "Kanala Geetha Pranathi",
  initials: "KP",
  role: "AI Engineer · Full Stack Developer · Generative AI Enthusiast",
  status: "Open to Software Engineering & AI Engineering Roles",
  intro:
    "B.Tech student in Computer Science Engineering (Artificial Intelligence & Data Science) building AI-powered applications, REST APIs, and full-stack products using Python, React, FastAPI, Flask, and Generative AI.",
  email: "pranathikavyakanala@gmail.com",
  phone: "+91 8186952134",
  github: "https://github.com/geetha-pranathi-kanala", 
  linkedin: "https://linkedin.com/in/kanala-geetha-pranathi", 
  leetcode: "https://leetcode.com/u/Geetha_Pranathi_Kanala/",
};

export const stats = [
  { value: 9.27, suffix: "", label: "CGPA" },
  { value: 3, suffix: "", label: "Projects shipped" },
  { value: 2, suffix: "", label: "Internships" },
  { value: 4, suffix: "", label: "Certifications" },
];

export const education = [
  {
    degree: "Bachelor of Technology",
    period: "2023 – Present",
    field: "Computer Science and Engineering (Artificial Intelligence & Data Science)",
    school: "Vishnu Institute of Technology",
    metricLabel: "CGPA",
    metric: "9.27 / 10",
  },
  {
    degree: "Intermediate (MPC)",
    period: "2021 – 2023",
    field: "Mathematics, Physics & Chemistry",
    school: "Narayana Junior College",
    metricLabel: "Percentage",
    metric: "96.4%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    period: "2020 – 2021",
    field: "High School",
    school: "Kennedy E.M High School",
    metricLabel: "Percentage",
    metric: "100%",
  },
];

export const skills = [
  { group: "Programming", items: ["Java", "Python", "SQL"] },
  { group: "Databases", items: ["MySQL", "MongoDB"] },
  { group: "Backend & APIs", items: ["Flask", "FastAPI", "REST APIs"] },
  { group: "Data Structures & Algorithms", items: ["Data Structures", "Algorithms"] },
  { group: "Web Development", items: ["HTML", "CSS", "JavaScript", "React.js"] },
  { group: "Computer Science", items: ["OOP", "DBMS", "Operating Systems", "Computer Networks"] },
  { group: "AI & GenAI", items: ["LLM Applications", "Prompt Engineering", "Google Gemini API"] },
  { group: "Tools", items: ["Git", "GitHub", "Docker", "GCP", "VS Code"] },
];

export const projects = [
  {
    icon: "🧠",
    title: "Smart ATS Resume Analyzer",
    tags: ["Generative AI", "Resume Analysis", "REST API"],
    summary:
      "A Flask-based AI application that analyzes resumes against job descriptions and generates an ATS-style compatibility score, matching skills, missing skills, and improvement suggestions using Google Gemini.",
    stack: ["Python", "Flask", "Google Gemini API", "PyPDF2", "JavaScript"],
    impact: "Helps candidates identify resume gaps and improve their applications before applying.",
    features: [
      "Developed a Flask-based ATS resume analyzer that returns a 0–100 ATS compatibility score by comparing an uploaded resume against a job description using Google Gemini AI.",
      "Engineered a resume-parsing pipeline (PyPDF2) and REST API returning matching/missing skills and improvement suggestions alongside the ATS score.",
      "Designed a responsive HTML/CSS/JavaScript frontend with asynchronous API calls and loading-state feedback for a smooth user experience.",
    ],
    repoLink: "https://github.com/geetha-pranathi-kanala",
    demoLink: "https://ats-project-e8rd.onrender.com/",
    image: "/projects/ats.png",
  },
  {
    icon: "💳",
    title: "LendSwift — Loan Application Platform",
    tags: ["Full Stack", "BFSI", "Design System"],
    summary:
      "A full-stack loan application platform featuring an 8-step application workflow with real-time validation, reusable components, KYC uploads, digital signature capture, and auto-save functionality.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Zod"],
    impact: "Improves the loan application experience through validation, verification, and auto-save workflows.",
    features: [
      "Developed a production-grade, 8-step multi-step loan application wizard with real-time validation across 45+ rules defined via Zod schemas.",
      "Built a reusable component library (8 components) including digital signature capture, drag-and-drop KYC uploads, and file validation.",
      "Implemented 3 custom React hooks for auto-save, pin-code lookup, and real-time field verification to prevent data loss mid-application.",
    ],
    repoLink: "https://github.com/geetha-pranathi-kanala",
    demoLink: "https://loan-app-lendswift-1xoejpy3t-geethapranathis-projects.vercel.app/",
    image: "/projects/lendswift.png",
  },
  {
    icon: "🤝",
    title: "Personalized Networking Assistant",
    tags: ["Generative AI", "FastAPI", "NLP"],
    summary:
      "An AI-powered assistant that analyzes event descriptions, extracts key themes, and generates personalized conversation starters to help users begin meaningful professional conversations.",
    stack: ["Python", "FastAPI", "Streamlit", "Google Gemini API"],
    impact: "Makes professional networking easier by generating relevant conversation ideas from event context.",
    features: [
      "Created an AI-powered conversation starter generator that extracts key themes from event descriptions and generates tailored icebreakers using GPT-2.",
      "Achieved reliable output correctness through 40 unit tests covering theme analysis, fact-checking, and API routes, served via a FastAPI backend and Streamlit UI.",
    ],
    repoLink: "https://github.com/geetha-pranathi-kanala",
    demoLink: "https://personalized-networking-assistant-mzjnhmehchghqniqhlrbg6.streamlit.app/",
    image: "/projects/networking.png",
  },
];

export const experience = [
  {
    role: "Full Stack Engineer — Remote Live Project",
    company: "ZeTheta Algorithms Private Limited",
    period: "May 2026 – Jul 2026",
    points: [
      "Completed 4 full-stack & cloud engineering projects in the BFSI domain, including a multi-step loan application frontend and an API integration layer connecting an ERP system with a financial analytics platform.",
      "Architected an event-driven notification engine (Kafka, RabbitMQ) supporting 25+ event types across 5+ delivery channels, and established a multi-region disaster recovery architecture for a payment systems platform.",
    ],
  },
  {
    role: "Generative AI Intern",
    company: "SmartBridge",
    period: "May 2026 – Jul 2026",
    points: [
      "Built 2+ LLM-powered applications during a 3-month Generative AI internship, applying prompt engineering and API integration techniques while consistently meeting 10+ weekly milestone deliverables.",
      "Engineered a Personal Networking Assistant in Python using the Google Gemini API to automate contact suggestions and follow-up reminders, streamlining outreach for 50+ professional relationships and cutting manual follow-up time by 40%.",
    ],
  },
];

export const certifications = [
  { 
    name: "Tata GenAI Powered Data Analytics Job Simulation", 
    issuer: "Forage", 
    year: "2026",
    link: "/certificates/tata_forage.pdf"
  },
  { 
    name: "Generative AI Certification", 
    issuer: "Datavalley India Pvt. Ltd.", 
    year: "2026",
    link: "/certificates/datavalley.jpg"
  },
  { 
    name: "Remote Live Project Work Experience (Full Stack Engineer)", 
    issuer: "ZeTheta Algorithms Private Limited", 
    year: "2026",
    link: "/certificates/zetheta.pdf"
  },
  { 
    name: "Full Stack Development – MERN", 
    issuer: "SmartBridge", 
    year: "2025",
    link: "/certificates/smartbridge.pdf"
  },
];

export const learning = [
  "Data Structures & Algorithms",
  "System Design",
  "Advanced Generative AI",
  "AI Agents",
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    username: "@GeethaPranathi",
    link: "https://leetcode.com/u/GeethaPranathi/",
    stats: [
      { label: "Problems Solved", value: "225" },
      { label: "Easy / Medium / Hard", value: "121 / 88 / 16" },
      { label: "Contest Rating", value: "N/A" },
      { label: "Global Ranking", value: "730,403" },
      { label: "Acceptance Rate", value: "N/A" },
    ]
  },
  {
    platform: "GitHub",
    username: "@GeethaPranathi",
    link: "https://github.com/GeethaPranathi",
    stats: [
      { label: "Repositories", value: "25" },
      { label: "Followers", value: "2" },
      { label: "Contributions", value: "Active" },
      { label: "Stars", value: "0" },
      { label: "Most Used Languages", value: "Python, JavaScript" },
    ]
  },
  {
    platform: "GeeksforGeeks",
    username: "@pranathika3pq",
    link: "https://www.geeksforgeeks.org/profile/pranathika3pq",
    stats: [
      { label: "Problems Solved", value: "24" },
      { label: "Coding Score", value: "79" },
      { label: "Contest Rating", value: "N/A" },
      { label: "Current Streak", value: "0 Days" },
    ]
  }
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "coding-profiles", label: "Coding Profiles" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
