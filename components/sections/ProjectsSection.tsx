'use client';

import { ExternalLink } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import SectionBadge from '@/components/SectionBadge';
import { useState } from 'react';

interface BaseProject {
  title: string;
  description: string;
  category: string;
  technologies: string[];
}

interface ProjectWithLink extends BaseProject {
  link: string;
}

interface ProjectComingSoon extends BaseProject {
  comingSoon: boolean;
}

type Project = BaseProject | ProjectWithLink | ProjectComingSoon;

const ProjectsSection = () => {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState<'personal' | 'professional'>('personal');

  // Personal projects data
  const personalProjects: Project[] = [
    {
      title: 'LendTrack',
      description: 'A web application system that tracks your lended amount, due date, interest rate and other financial details. Features secure user authentication, automated reminders, and comprehensive reporting tools to help manage personal and business loans efficiently.',
      category: 'FinTech',
      technologies: ['NextJS', 'Supabase', 'OAuth', 'Brevo'],
      link: 'https://lend-track.vercel.app/'
    },
    {
      title: 'BrainStorm Collaboration',
      description: 'A real-time whiteboard collaboration platform featuring private and public collaboration rooms with instant chat functionality. Enables teams to brainstorm, visualize ideas, and work together seamlessly with real-time synchronization and interactive drawing tools.',
      category: 'Collaboration',
      technologies: ['NextJS', 'Socket.io', 'WebSockets', 'Real-time Database'],
      comingSoon: true
    }
  ];

  // Professional projects data (from resume)
  const professionalProjects: Project[] = [
    {
      title: 'Ape Beverages',
      description: 'E-commerce website built on Shopify. Features all standard e-commerce capabilities with special handling for limited edition products like Ape Water. Custom theme development with enhanced product showcase.',
      category: 'E-commerce',
      technologies: ['Shopify Hydrogen', 'React', 'TypeScript', 'Apollo', 'Express'],
      link: 'https://drinkape.com/'
    },
    {
      title: 'Drink the Future',
      description: 'Web3 NFT Minting Application connected with Ape Beverages/Water. Allows users to mint NFT passes directly on the site with integration of various Web3 technologies and wallet connections.',
      category: 'Web3',
      technologies: ['NextJS', 'TypeScript', 'Tailwind CSS', 'Web3 Integration', 'Blockchain'],
      link: 'https://drinkape.com/'
    },
    {
      title: 'WeeComm Portal',
      description: 'Comprehensive real estate management system that integrates with ERPNext/Frappe for property management, featuring advanced search and property management capabilities. Includes print formats and computations.',
      category: 'Real Estate',
      technologies: ['NextJS', 'Redux', 'Tailwind CSS', 'TypeScript', 'ERPNext/Frappe'],
      link: 'https://weecomm.ph/'
    },
    {
      title: 'EatOS',
      description: 'Customizable menu management system for POS applications that enables restaurant owners to efficiently manage their menu items, pricing, and availability across multiple locations. Features an intuitive drag-and-drop interface with real-time preview functionality.',
      category: 'POS System',
      technologies: ['Angular', 'ExpressJS', 'JavaScript', 'Node.js'],
      link: 'https://www.eatos.com/'
    },
    {
      title: 'DIMTS',
      description: 'Cross-platform case management system for tracking and managing legal cases across web and mobile platforms. Features real-time data synchronization, comprehensive case tracking, advanced search and filtering capabilities.',
      category: 'Web & Mobile',
      technologies: ['NextJS', 'React Native', 'Tailwind CSS', 'Django Rest Framework', 'Firebase']
    },
    {
      title: 'Service Booking Web Application',
      description: 'Booking platform for service businesses that enables real-time scheduling and appointment management. It comes with availability tracking to streamline the booking process for service providers and customers.',
      category: 'Booking System',
      technologies: ['ExpressJS', 'NextJS', 'Sequelize ORM', 'Chakra UI', 'MySQL']
    },
  ];

  const projects = activeTab === 'personal' ? personalProjects : professionalProjects;

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center space-y-6">
          <SectionBadge title="Projects" />
          <h2 className={`mb-4 text-balance text-3xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'} md:text-5xl`}>
            Featured Projects
          </h2>
          <p className={`mx-auto max-w-2xl text-pretty text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A selection of production applications I've built across various industries
          </p>
        </div>
        <div className="mb-12 flex justify-center">
          <div className={`inline-flex items-center gap-2 rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} p-1`}>
            <button
              className={`rounded-md px-6 py-2.5 text-sm font-medium transition-all cursor-pointer ${activeTab === 'personal'
                ? `${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`
                : `${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
                }`}
              onClick={() => setActiveTab('personal')}
            >
              Personal Projects
            </button>
            <button
              className={`rounded-md px-6 py-2.5 text-sm font-medium transition-all cursor-pointer ${activeTab === 'professional'
                ? `${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`
                : `${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
                }`}
              onClick={() => setActiveTab('professional')}
            >
              Professional Work
            </button>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-lg border ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} p-6 transition-all hover:border-blue-500 ${'link' in project ? 'cursor-pointer' : ''}`}
              onClick={() => {
                if ('link' in project) {
                  window.open((project as any)?.link ?? '', '_blank');
                }
              }}
            >
              <div className="mb-4 flex items-start justify-between">
                <div className={`inline-block rounded-md ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'} px-2 py-1 text-xs font-medium`}>
                  {project.category}
                </div>
                {'link' in project && (
                  <ExternalLink className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'} opacity-0 transition-opacity group-hover:opacity-100`} />
                )}
              </div>
              <h3 className={`mb-3 text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
                {'comingSoon' in project && project.comingSoon && (
                  <span className={`ml-2 inline-block rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-700'} px-2 py-0.5 text-xs font-medium`}>
                    Coming Soon
                  </span>
                )}
              </h3>
              <p className={`mb-4 text-pretty ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`rounded-full border ${darkMode ? 'border-gray-700 bg-gray-700/50 text-gray-200' : 'border-gray-200 bg-gray-50 text-gray-700'} px-3 py-1 text-xs font-medium`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;