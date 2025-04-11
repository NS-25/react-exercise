import React from "react";
import Modal from "../portal/Modal";
import { useState } from "react";

const EditModal = ({ row, onClose, onUpdate }) => {
  const [form, setForm] = useState({ name: row.name, email: row.email });

  const handleSubmit = () => {
    onUpdate({ ...row, ...form });
  };
  return (
    <Modal>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
        <div className="bg-white p-6 rounded w-96 shadow-lg ">
          <h2 className="text-lg font-semibold mb-4">Edit User</h2>
          <input
            className="border p-2 mb-3 w-full"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Name"
          />
          <input
            className="border p-2 mb-3 w-full"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
          />
          <div className="flex justify-end gap-2">
            <button onClick={onClose} className="bg-gray-300 px-4 py-1 rounded">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-1 rounded"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
