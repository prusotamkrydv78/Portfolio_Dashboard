'use client';

import { useState } from 'react';
import { FiX } from 'react-icons/fi';

export default function BlogForm({ blog, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: blog?.title || '',
    description: blog?.description || '',
    content: blog?.content || '',
    image: blog?.image || '',
    category: blog?.category || '',
    tags: blog?.tags?.join(', ') || '',
    publishDate: blog?.publishDate || new Date().toISOString().split('T')[0],
    status: blog?.status || 'draft'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean)
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-[#1a1b1e] rounded-xl w-full max-w-3xl m-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl text-white">
              {blog ? 'Edit Blog Post' : 'Create New Blog Post'}
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <FiX className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-[#212226] text-white rounded-lg p-2"
                required
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-[#212226] text-white rounded-lg p-2"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Content</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full bg-[#212226] text-white rounded-lg p-2"
                rows={6}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
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

              <div>
                <label className="block text-gray-400 mb-2">Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-[#212226] text-white rounded-lg p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Tags</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full bg-[#212226] text-white rounded-lg p-2"
                  placeholder="tag1, tag2, tag3"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full bg-[#212226] text-white rounded-lg p-2"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {blog ? 'Update' : 'Create'} Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
