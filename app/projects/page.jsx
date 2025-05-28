'use client';

import { useState } from 'react';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectForm from '@/components/projects/ProjectForm';
import DeleteModal from '@/components/skills/DeleteModal';

export default function ProjectsPage() {
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A modern e-commerce website built with Angular and Tailwind CSS.',
      image: '/projects/ecommerce.jpg',
      category: 'Web App',
      tech: ['Angular', 'TailwindCSS', 'MongoDB'],
      demo: 'https://demo.com',
      code: 'https://github.com'
    },
    // Add more projects...
  ];

  const handleEdit = (project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleDelete = (project) => {
    setProjectToDelete(project);
    setShowDeleteModal(true);
  };

  return (
    <div className="min-h-screen bg-[#13151a] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-white">Projects</h1>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add New Project
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={() => handleEdit(project)}
              onDelete={() => handleDelete(project)}
            />
          ))}
        </div>

        {/* Add/Edit Form Modal */}
        {showForm && (
          <ProjectForm
            project={editingProject}
            onClose={() => {
              setShowForm(false);
              setEditingProject(null);
            }}
          />
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <DeleteModal
            project={projectToDelete}
            onClose={() => {
              setShowDeleteModal(false);
              setProjectToDelete(null);
            }}
          />
        )}
      </div>
    </div>
  );
}
