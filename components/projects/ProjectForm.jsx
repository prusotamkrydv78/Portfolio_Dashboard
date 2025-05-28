'use client';

import { useState } from 'react';
import { FiX, FiUpload, FiLink, FiGithub, FiCheck } from 'react-icons/fi';

export default function ProjectForm({ project, onClose }) {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    description: project?.description || '',
    image: project?.image || '',
    category: project?.category || 'Web App',
    tags: project?.tags?.join(', ') || '',
    demo: project?.demo || '',
    code: project?.code || '',
    status: project?.status || 'in-progress'
  });
  const [showCategoryDialog, setShowCategoryDialog] = useState(false);
  const [showStatusDialog, setShowStatusDialog] = useState(false);

  const categories = [
    { id: 'web-app', name: 'Web App', icon: '🌐' },
    { id: 'mobile-app', name: 'Mobile App', icon: '📱' },
    { id: 'desktop-app', name: 'Desktop App', icon: '💻' },
    { id: 'ui-design', name: 'UI/UX Design', icon: '🎨' },
    { id: 'other', name: 'Other', icon: '🔧' },
  ];

  const statuses = [
    { id: 'in-progress', name: 'In Progress', icon: '🚧', color: 'yellow' },
    { id: 'completed', name: 'Completed', icon: '✅', color: 'green' },
    { id: 'planned', name: 'Planned', icon: '📋', color: 'blue' },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1b1e] rounded-xl w-full max-w-3xl flex flex-col max-h-[90vh] border border-white/10">
        {/* Header - Fixed */}
        <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            {project ? 'Edit Project' : 'Add New Project'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <FiX className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Form - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <form className="p-6 space-y-6">
            {/* Main Info */}
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Project Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter project title"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={3}
                  placeholder="Describe your project"
                />
              </div>

              {/* Category Selection */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Category
                </label>
                <button
                  type="button"
                  onClick={() => setShowCategoryDialog(true)}
                  className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white hover:bg-white/10 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xl">
                      {categories.find(c => c.id === formData.category)?.icon || '📁'}
                    </span>
                    <span>
                      {categories.find(c => c.id === formData.category)?.name || 'Select Category'}
                    </span>
                  </span>
                </button>
              </div>

              {/* Status Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Status
                </label>
                <button
                  type="button"
                  onClick={() => setShowStatusDialog(true)}
                  className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white hover:bg-white/10 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xl">
                      {statuses.find(s => s.id === formData.status)?.icon}
                    </span>
                    <span>
                      {statuses.find(s => s.id === formData.status)?.name}
                    </span>
                  </span>
                </button>
              </div>
            </div>

            {/* Image Upload */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Project Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-white/10 border-dashed rounded-lg">
                <div className="space-y-2 text-center">
                  <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="text-sm text-gray-400">
                    <button className="text-purple-400 hover:text-purple-500">
                      Upload a file
                    </button>
                    {" or drag and drop"}
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Demo URL
                </label>
                <div className="relative">
                  <FiLink className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="url"
                    value={formData.demo}
                    onChange={(e) => setFormData({ ...formData, demo: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="https://example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  GitHub URL
                </label>
                <div className="relative">
                  <FiGithub className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="url"
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="https://github.com/username/repo"
                  />
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Tags
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="React, TypeScript, Tailwind (comma separated)"
              />
            </div>
          </form>
        </div>

        {/* Actions - Fixed */}
        <div className="flex-shrink-0 flex justify-end items-center gap-3 p-6 border-t border-white/10 bg-[#1a1b1e]">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
          >
            {project ? 'Save Changes' : 'Create Project'}
          </button>
        </div>
      </div>

      {/* Category Selection Dialog */}
      {showCategoryDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[60]">
          <div className="bg-[#1a1b1e] rounded-xl w-full max-w-md overflow-hidden border border-white/10">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-lg font-semibold text-white">Select Category</h3>
              <button
                onClick={() => setShowCategoryDialog(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <FiX className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, category: category.id });
                      setShowCategoryDialog(false);
                    }}
                    className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                      formData.category === category.id
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'hover:bg-white/5 text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <span>{category.name}</span>
                    </div>
                    {formData.category === category.id && (
                      <FiCheck className="w-5 h-5" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Status Selection Dialog */}
      {showStatusDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[60]">
          <div className="bg-[#1a1b1e] rounded-xl w-full max-w-md overflow-hidden border border-white/10">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-lg font-semibold text-white">Select Status</h3>
              <button
                onClick={() => setShowStatusDialog(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <FiX className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-2">
                {statuses.map((status) => (
                  <button
                    key={status.id}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, status: status.id });
                      setShowStatusDialog(false);
                    }}
                    className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                      formData.status === status.id
                        ? `bg-${status.color}-500/20 text-${status.color}-400`
                        : 'hover:bg-white/5 text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{status.icon}</span>
                      <span>{status.name}</span>
                    </div>
                    {formData.status === status.id && (
                      <FiCheck className="w-5 h-5" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
