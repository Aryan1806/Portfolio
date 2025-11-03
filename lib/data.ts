import { PersonalInfo, Skill, Project, Experience, Education } from '@/types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Aryan Chandrakar",
  title: "Software Developer",
  bio: "I’m a passionate full-stack developer and problem solver pursuing B.Tech in Computer Science at IIIT Naya Raipur. I specialize in building scalable, secure, and high-performance web applications using modern technologies. My interests span across AI, ML, and full-stack development, and I love turning ideas into impactful digital solutions.",
  email: "aryanchandrakar289@gmail.com",
  phone: "+91 7970018603",
  address: "Durg, Chhattisgarh, India",
  resumeUrl: "https://drive.google.com/file/d/12_0rxI79rpwuQOgXw5SopMAJW4mDZGQO/view?usp=sharing",
  profileImage: "https://github.com/Aryan1806/Portfolio/blob/main/assets/Gemini_Generated_Image_lcgj6plcgj6plcgj.png?raw=true",
  socialLinks: {
    github: "https://github.com/Aryan1806",
    linkedin: "https://www.linkedin.com/in/aryan-chandrakar-3553a8273/",
    twitter: "",
    facebook: "",
    leetcode: "https://leetcode.com/u/aryan22100/",
  }
};

export const skills: Skill[] = [
  { name: "React.js", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "TypeScript", icon: "💠" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "JavaScript (ES6+)", icon: "📜" },
  { name: "Python", icon: "🐍" },
  { name: "C++", icon: "💻" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "OpenCV", icon: "📷" },
  { name: "Flask", icon: "🔥" },
  { name: "Git & GitHub", icon: "📦" },
  { name: "REST API", icon: "🔌" },
  { name: "AWS", icon: "☁️" },
  { name: "Firebase", icon: "🔥" },
];

export const projects: Project[] = [
  {
    id: "1",
    name: "AI-Powered Invoice Reimbursement",
    description: "A full-stack invoice reimbursement platform integrated with LLMs and RAG-based chatbot for natural language queries. Uses LangChain and Google Gemini APIs to automate invoice analysis and streamline the reimbursement process.",
    tools: ["Next.js", "Node.js", "LangChain", "ChromaDB", "Gemini API"],
    role: "Full Stack Developer",
    image: "https://github.com/Aryan1806/Portfolio/blob/main/assets/Screenshot%202025-11-03%20130042.png?raw=true",
    link: "https://intelligent-invoice-reimbursement.onrender.com/",
    github: "https://github.com/Aryan1806/Intelligent-Invoice-Reimbursement",
  },
  {
    id: "2",
    name: "Evently - Event Management System",
    description: "A full-stack event management platform built with Next.js and MongoDB. Supports CRUD operations, secure Stripe-based payments, and Clerk authentication, serving 500+ monthly events with 99.9% uptime.",
    tools: ["Next.js", "MongoDB", "Stripe", "Clerk", "Tailwind CSS"],
    role: "Full Stack Developer",
    image: "https://github.com/Aryan1806/Portfolio/blob/main/assets/Screenshot%202025-11-03%20124807.png?raw=true",
    link: "https://evently-yy.vercel.app/",
    github: "https://github.com/Aryan1806/events_app",
  },
  {
    id: "3",
    name: "Chit-Chat - Real-Time Chat App",
    description: "A cross-platform real-time chat application built using the MERN stack and WebSockets for instant messaging. Features JWT authentication, Zustand-based state management, and responsive UI for seamless user experience.",
    tools: ["React", "Node.js", "Express", "MongoDB", "Zustand", "Socket.io"],
    role: "Full Stack Developer",
    image: "https://github.com/Aryan1806/Portfolio/blob/main/assets/Screenshot%202025-11-03%20130056.png?raw=true",
    link: "https://talk-a-tive-7fgq.onrender.com/",
    github: "https://github.com/Aryan1806/mern-chat-app",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Zidio",
    position: "Web Development Intern",
    duration: "May 2024 - July 2024",
    location: "Remote",
    description:
      "• Engineered and optimized REST API endpoints, reducing server response time by 25% and improving backend performance.\n" +
      "• Implemented advanced caching to decrease page load times by 35% and support higher traffic.\n" +
      "• Developed and delivered three custom software components, achieving 100% client satisfaction.",
  },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "IIIT Naya Raipur",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "Nov 2022 - June 2026",
    description:
      "Focused on full-stack web development, machine learning, and distributed systems. Current CGPA: 8.15.",
  },
];
