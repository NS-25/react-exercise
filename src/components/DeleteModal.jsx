import React from "react";
const DeleteModal = ({ onClose, onDelete }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-6 rounded w-80 shadow-lg">
        <h2 className="text-lg font-bold text-red-600 mb-3">Are you sure?</h2>
        <p className="text-sm mb-4 ">This action cannot be undone.</p>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-1 rounded">
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-4 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
