'use client';

import { useState } from 'react';

export default function SkillForm({ skill, onClose }) {
  const [formData, setFormData] = useState({
    name: skill?.name || '',
    category: skill?.category || 'Frontend Development',
    percentage: skill?.percentage || 0,
    icon: skill?.icon || '' // Changed to simple icon string
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a frontend-only version, we'll just show an alert
    alert('In a full-stack version, this would save the skill to the database.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-[#1a1b1e] rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl text-white mb-4">
          {skill ? 'Edit Skill' : 'Add New Skill'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Icon Input */}
          <div>
            <label className="block text-gray-400 mb-2">Icon Class/Name</label>
            <input
              type="text"
              placeholder="e.g. FaReact"
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              className="w-full bg-[#212226] text-white rounded-lg p-2"
            />
            <p className="text-xs text-gray-400 mt-1">
              Enter the icon name from react-icons (e.g. FaReact, SiJavascript)
            </p>
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Skill Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
              <option>Frontend Development</option>
              <option>Backend Development</option>
              <option>Animation & Interaction</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-400 mb-2">
              percentage ({formData.percentage}%)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={formData.percentage}
              onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
              className="w-full"
            />
          </div>

          <div className="flex justify-end space-x-3 mt-6">
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
              {skill ? 'Update' : 'Add'} Skill
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
