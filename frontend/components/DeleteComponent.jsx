const DeleteDialogComponent = ({
  setShowDeleteDialog,
  confirmDelete,
  itemToDelete,
}) => {
  return (
    <>
      (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-[#1a1b1e] border border-white/10 rounded-lg p-6 px-4 max-w-md w-full">
          <h3 className="text-xl font-semibold text-white mb-2">
            Delete Project
          </h3>
          <p className="text-gray-300 mb-4">
            Are you sure you want to delete "{itemToDelete?.title}"? This
            action cannot be undone.
          </p>
          <div className="flex justify-between space-x-4">
            <button
              onClick={() => setShowDeleteDialog(false)}
              className="px-4 py-2 text-white bg-gray-500 hover:text-white  rounded-lg hover:bg-gray-600 cursor-pointer transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={confirmDelete}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      )
    </>
  );
};
export default DeleteDialogComponent;
