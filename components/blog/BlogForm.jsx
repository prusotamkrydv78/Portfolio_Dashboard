'use client';

import { useState } from 'react';
import { FiX, FiUpload, FiCheck, FiCalendar } from 'react-icons/fi';

export default function BlogForm({ blog, onClose }) {
  const [formData, setFormData] = useState({
    title: blog?.title || '',
    excerpt: blog?.excerpt || '',
    content: blog?.content || '',
    coverImage: blog?.coverImage || '',
    category: blog?.category || '',
    tags: blog?.tags?.join(', ') || '',
    status: blog?.status || 'draft',
    publishDate: blog?.publishDate || new Date().toISOString().split('T')[0]
  });

  const [showCategoryDialog, setShowCategoryDialog] = useState(false);
  const [showStatusDialog, setShowStatusDialog] = useState(false);

  const categories = [
    { id: 'development', name: 'Development', icon: '💻' },
    { id: 'design', name: 'Design', icon: '🎨' },
    { id: 'tutorial', name: 'Tutorial', icon: '📚' },
    { id: 'career', name: 'Career', icon: '💼' },
    { id: 'other', name: 'Other', icon: '📌' },
  ];

  const statuses = [
    { id: 'draft', name: 'Draft', icon: '📝', color: 'yellow' },
    { id: 'published', name: 'Published', icon: '✅', color: 'green' },
    { id: 'archived', name: 'Archived', icon: '📦', color: 'gray' },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1b1e] rounded-xl w-full max-w-3xl flex flex-col max-h-[90vh] border border-white/10">
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            {blog ? 'Edit Post' : 'Create New Post'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <FiX className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto">
          <form className="p-6 space-y-6">
            {/* Title & Excerpt */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter post title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Excerpt
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={2}
                  placeholder="Brief description of your post"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Content
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={8}
                placeholder="Write your post content here..."
              />
            </div>

            {/* Category and Status */}
            <div className="grid grid-cols-2 gap-6">
              <div>
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
                      {statuses.find(s => s.id === formData.status)?.icon || '📝'}
                    </span>
                    <span>
                      {statuses.find(s => s.id === formData.status)?.name || 'Select Status'}
                    </span>
                  </span>
                </button>
              </div>
            </div>

            {/* Cover Image */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Cover Image
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
                  <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
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
                placeholder="React, Web Development (comma separated)"
              />
            </div>
          </form>
        </div>

        {/* Actions */}
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
            {blog ? 'Update Post' : 'Publish Post'}
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
