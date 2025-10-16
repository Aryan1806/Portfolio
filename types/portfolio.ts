export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tools: string[];
  role: string;
  image?: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  location?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  description?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  published_at: string;
  url: string;
  cover_image?: string;
  tags?: string[] | string;
  tag_list?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  leetcode?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  address?: string;
  resumeUrl?: string;
  profileImage?: string;
  socialLinks: SocialLinks;
}
