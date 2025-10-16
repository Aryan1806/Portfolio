'use client';

import Marquee from 'react-fast-marquee';
import { skills } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>

        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          className="py-4"
        >
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="mx-4 min-w-[150px] border-2 hover:border-blue-600 dark:hover:border-cyan-400 transition-all hover:scale-105 hover:shadow-lg"
            >
              <CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
                <span className="text-4xl">{skill.icon}</span>
                <span className="font-semibold text-sm text-center">{skill.name}</span>
              </CardContent>
            </Card>
          ))}
        </Marquee>

        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          direction="right"
          className="py-4"
        >
          {skills.slice().reverse().map((skill, index) => (
            <Card
              key={index}
              className="mx-4 min-w-[150px] border-2 hover:border-blue-600 dark:hover:border-cyan-400 transition-all hover:scale-105 hover:shadow-lg"
            >
              <CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
                <span className="text-4xl">{skill.icon}</span>
                <span className="font-semibold text-sm text-center">{skill.name}</span>
              </CardContent>
            </Card>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
