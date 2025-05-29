'use client';

import { useState } from 'react';
import { FiPlus, FiSearch, FiGrid, FiList } from 'react-icons/fi';
import ProjectForm from '@/components/projects/ProjectForm';
import ProjectCard from '@/components/projects/ProjectCard';

export default function ProjectsPage() {
  const [view, setView] = useState('grid');
  const [showForm, setShowForm] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A modern e-commerce website built with Angular and Tailwind CSS.',
      image: '/projects/ecommerce.jpg',
      category: 'Web App',
      tags: ['Angular', 'TailwindCSS', 'MongoDB'],
      demo: 'https://demo.com',
      code: 'https://github.com'
    },
    // Add more projects...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#13151a] to-[#1a1b1e]">
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-gray-400 mt-1">Manage your portfolio projects</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center justify-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            <FiPlus className="sm:mr-2" /><span className='hidden sm:inline'> Add Project</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex   sm:flex-row gap-4 sm:items-center justify-between bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
          <div className="relative flex-1 max-w-md">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full bg-white/5 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-lg ${view === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <FiGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-lg ${view === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <FiList className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`grid gap-8 ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={() => handleEdit(project)}
              onDelete={() => handleDelete(project)}
            />
          ))}
        </div>

        {/* Project Form Modal */}
        {showForm && (
          <ProjectForm onClose={() => setShowForm(false)} />
        )}
      </div>
    </div>
  );
}
