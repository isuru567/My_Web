import React from 'react';
import { Section } from './Section';
import { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';

const projectData: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive analytics dashboard for online retailers featuring real-time data visualization, inventory management, and reporting tools.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    image: 'https://picsum.photos/600/400?random=1',
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management platform with Kanban boards, drag-and-drop interfaces, and team real-time synchronization.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Socket.io'],
    image: 'https://picsum.photos/600/400?random=2',
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'Content creation tool leveraging the Gemini API to help writers generate outlines, summaries, and creative drafts instantly.',
    tags: ['React', 'Gemini API', 'Node.js', 'OpenAI'],
    image: 'https://picsum.photos/600/400?random=3',
    link: '#',
    github: '#'
  }
];

export const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Here are some of the projects I've worked on recently. Each one presented unique challenges and learning opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <div 
            key={project.id}
            className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative overflow-hidden aspect-video">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a 
                  href={project.github}
                  className="p-2 bg-white rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                  title="View Code"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={project.link}
                  className="p-2 bg-white rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-xs font-medium text-primary-600 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
