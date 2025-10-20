'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Facebook, Twitter, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/data';

const codeSnippet = `const developer = {
  name: "${personalInfo.name}",
  title: "${personalInfo.title}",
  passion: "Building amazing things",
  skills: ["React", "Node.js", "TypeScript"],
  status: "Available for opportunities"
};

console.log(\`\${developer.name} is ready to create!\`);`;

export default function Hero() {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < codeSnippet.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(codeSnippet.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: personalInfo.socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Facebook, href: personalInfo.socialLinks.facebook, label: 'Facebook' },
    { icon: Twitter, href: personalInfo.socialLinks.twitter, label: 'Twitter' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl text-muted-foreground font-medium">
                {personalInfo.title}
              </p>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((social) => (
                social.href && (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                )
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white dark:text-foreground"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              {personalInfo.resumeUrl && (
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-5 w-5" />
                    Get Resume
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-card border border-border rounded-lg p-6 shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-sm text-muted-foreground">developer.js</span>
                </div>
                <pre className="text-sm text-emerald-400 dark:text-emerald-300 font-mono overflow-x-auto">
                  <code>{displayedCode}<span className="animate-pulse">|</span></code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
