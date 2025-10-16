import { PersonalInfo, Skill, Project, Experience, Education } from '@/types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  bio: "I'm a passionate full-stack developer with expertise in building modern web applications. I love creating elegant solutions to complex problems and am always eager to learn new technologies.",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  address: "San Francisco, CA",
  resumeUrl: "/resume.pdf",
  profileImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    facebook: "https://facebook.com/yourusername",
    leetcode: "https://leetcode.com/yourusername",
  }
};

export const skills: Skill[] = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "💠" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📦" },
  { name: "REST API", icon: "🔌" },
  { name: "GraphQL", icon: "◈" },
];

export const projects: Project[] = [
  {
    id: "1",
    name: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, inventory management, and real-time order tracking. Built with modern technologies for optimal performance.",
    tools: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    role: "Full Stack Developer",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "https://example.com",
    github: "https://github.com/yourusername/project1",
  },
  {
    id: "2",
    name: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and advanced filtering options. Designed for productivity and ease of use.",
    tools: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    role: "Lead Developer",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "https://example.com",
    github: "https://github.com/yourusername/project2",
  },
  {
    id: "3",
    name: "Social Media Dashboard",
    description: "An analytics dashboard for managing multiple social media accounts. Features include post scheduling, engagement metrics, and comprehensive reporting tools.",
    tools: ["Vue.js", "Express", "MongoDB", "Chart.js"],
    role: "Frontend Lead",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "https://example.com",
    github: "https://github.com/yourusername/project3",
  },
  {
    id: "4",
    name: "AI-Powered Chatbot",
    description: "An intelligent chatbot using natural language processing to provide customer support. Integrated with multiple platforms and supports multilingual conversations.",
    tools: ["Python", "TensorFlow", "React", "FastAPI"],
    role: "Backend Developer",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "https://example.com",
    github: "https://github.com/yourusername/project4",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Corp",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    description: "Leading development of enterprise web applications, mentoring junior developers, and implementing best practices for code quality and performance.",
  },
  {
    id: "2",
    company: "StartUp Inc",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    location: "Remote",
    description: "Developed and maintained multiple client projects, collaborated with cross-functional teams, and contributed to the company's core product development.",
  },
  {
    id: "3",
    company: "Digital Agency",
    position: "Junior Developer",
    duration: "2019 - 2020",
    location: "New York, NY",
    description: "Built responsive websites and web applications for various clients, learned industry best practices, and gained experience in modern web development technologies.",
  },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "University of Technology",
    degree: "Bachelor of Science in Computer Science",
    duration: "2015 - 2019",
    description: "Focused on software engineering, data structures, algorithms, and web development. Graduated with honors.",
  },
  {
    id: "2",
    institution: "Online Learning Platform",
    degree: "Full Stack Web Development Bootcamp",
    duration: "2018",
    description: "Intensive program covering modern web development technologies including React, Node.js, and database management.",
  },
];
