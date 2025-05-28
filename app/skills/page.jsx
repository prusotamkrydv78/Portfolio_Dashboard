'use client';

import { useState } from 'react';
import SkillForm from '@/components/skills/SkillForm';
import SkillsList from '@/components/skills/SkillsList';
import DeleteModal from '@/components/skills/DeleteModal';

export default function SkillsPage() {
  const [showForm, setShowForm] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [skillToDelete, setSkillToDelete] = useState(null);

  const handleEdit = (skill) => {
    setEditingSkill(skill);
    setShowForm(true);
  };

  const handleDelete = (skill) => {
    setSkillToDelete(skill);
    setShowDeleteModal(true);
  };

  return (
    <div className="min-h-screen bg-[#13151a] p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-white">Skills Management</h1>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add New Skill
          </button>
        </div>

        <SkillsList onEdit={handleEdit} onDelete={handleDelete} />

        {/* Add/Edit Form Modal */}
        {showForm && (
          <SkillForm
            skill={editingSkill}
            onClose={() => {
              setShowForm(false);
              setEditingSkill(null);
            }}
          />
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <DeleteModal
            skill={skillToDelete}
            onClose={() => {
              setShowDeleteModal(false);
              setSkillToDelete(null);
            }}
          />
        )}
      </div>
    </div>
  );
}
