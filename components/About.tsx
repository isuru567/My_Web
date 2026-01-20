import React from 'react';
import { Section } from './Section';
import { Code2, Layout, Database, Terminal, Cloud, Globe } from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'React & Ecosystem', icon: Code2, level: 95 },
  { name: 'TypeScript', icon: Terminal, level: 90 },
  { name: 'UI/UX Design', icon: Layout, level: 85 },
  { name: 'Node.js & API', icon: Database, level: 80 },
  { name: 'Cloud Computing', icon: Cloud, level: 85 },
  { name: 'Web Standards', icon: Globe, level: 90 },
];

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white dark:bg-slate-900/50 rounded-3xl my-8">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              I am a passionate Senior Frontend Engineer with over 6 years of experience in building scalable web applications. My journey started with a curiosity for how things work on the internet, and it has evolved into a career of solving complex problems with clean, elegant code.
            </p>
            <p>
              I specialize in the React ecosystem, leveraging TypeScript to build robust systems. I care deeply about user experience, accessibility, and performance.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source, or hiking in the mountains.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
            Tech Stack
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-white dark:bg-slate-700 rounded-lg text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                    <skill.icon size={24} />
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-white">{skill.name}</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                  <div 
                    className="bg-primary-600 h-1.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};