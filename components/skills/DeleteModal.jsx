export default function DeleteModal({ skill, onClose }) {
  const handleDelete = () => {
    // TODO: Add API call to delete skill
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-[#1a1b1e] rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl text-white mb-4">Delete Skill</h2>
        <p className="text-gray-400 mb-6">
          Are you sure you want to delete "{skill.name}"? This action cannot be undone.
        </p>
        
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-400 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
