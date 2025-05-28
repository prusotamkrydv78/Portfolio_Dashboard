'use client';

import { useState } from 'react';

export default function SkillForm({ skill, onClose }) {
  const [formData, setFormData] = useState({
    name: skill?.name || '',
    category: skill?.category || 'Frontend Development',
    proficiency: skill?.proficiency || 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add API call to save skill
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-[#1a1b1e] rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl text-white mb-4">
          {skill ? 'Edit Skill' : 'Add New Skill'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
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
              Proficiency ({formData.proficiency}%)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={formData.proficiency}
              onChange={(e) => setFormData({ ...formData, proficiency: e.target.value })}
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
