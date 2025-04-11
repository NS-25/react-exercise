import React from "react";

const Table = ({ data, onEdit, onDelete }) => {
  return (
    <div>
      <table className="w-full border border-gray-300">
        <tr className="bg-gray-100">
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Email</th>
          <th className="p-2 border">Actions</th>
        </tr>
        {data.map((row) => (
          <tr key={row.id}>
            <td className="p-2 border">{row.name}</td>
            <td className="p-2 border">{row.email}</td>
            <td className="p-2 border">
              <div className="flex justify-end space-x-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => onEdit(row)}
                >
                  Edit
                </button>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => onDelete(row)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
