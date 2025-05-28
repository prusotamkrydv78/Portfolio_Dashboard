'use client';

import { useState } from 'react';

export default function ProjectForm({ project, onClose }) {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    description: project?.description || '',
    category: project?.category || 'Web App',
    image: project?.image || '',
    tech: project?.tech?.join(', ') || '',
    demo: project?.demo || '',
    code: project?.code || '',
    status: project?.status || 'Completed',
    featured: project?.featured || false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectData = {
      ...formData,
      tech: formData.tech.split(',').map(t => t.trim()).filter(Boolean),
      featured: Boolean(formData.featured)
    };
    // TODO: Add API call to save project
    console.log(projectData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-[#1a1b1e] rounded-xl w-full max-w-2xl max-h-[90vh] flex flex-col m-4">
        {/* Header */}
        <div className="p-6 pb-0">
          <h2 className="text-xl text-white">
            {project ? 'Edit Project' : 'Add New Project'}
          </h2>
        </div>

        {/* Scrollable Form Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Basic Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 mb-2">Project Title *</label>
                <input
                  required
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-[#212226] text-white rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-[#212226] text-white rounded-lg p-2"
                >
                  <option>Web App</option>
                  <option>Mobile App</option>
                  <option>Desktop App</option>
                  <option>UI/UX Design</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Description - reduced text area height */}
            <div>
              <label className="block text-gray-400 mb-2">Description *</label>
              <textarea
                required
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-[#212226] text-white rounded-lg p-2"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-gray-400 mb-2">Image URL</label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full bg-[#212226] text-white rounded-lg p-2"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Technologies */}
            <div>
              <label className="block text-gray-400 mb-2">Technologies</label>
              <input
                type="text"
                value={formData.tech}
                onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
                className="w-full bg-[#212226] text-white rounded-lg p-2"
                placeholder="React, Node.js, MongoDB (comma separated)"
              />
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 mb-2">Demo URL</label>
                <input
                  type="url"
                  value={formData.demo}
                  onChange={(e) => setFormData({ ...formData, demo: e.target.value })}
                  className="w-full bg-[#212226] text-white rounded-lg p-2"
                  placeholder="https://demo.com"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Code URL</label>
                <input
                  type="url"
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                  className="w-full bg-[#212226] text-white rounded-lg p-2"
                  placeholder="https://github.com/username/repo"
                />
              </div>
            </div>

            {/* Status and Featured */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full bg-[#212226] text-white rounded-lg p-2"
                >
                  <option>In Progress</option>
                  <option>Completed</option>
                  <option>Archived</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="bg-[#212226] rounded"
                />
                <label htmlFor="featured" className="text-gray-400">
                  Featured Project
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Footer - Fixed at bottom */}
        <div className="p-6 border-t border-gray-800">
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="projectForm"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {project ? 'Update' : 'Add'} Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
