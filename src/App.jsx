// import React from "react";
// // import Parent from "./components/router/parent";
// import ParentManager from "./components/parent";

// function App() {
//   return (
//     <>
//       <div>
//         <ParentManager />
//       </div>
//     </>
//   );
// }

// export default App;

// App.jsx ( wrap the app with context ).

// import React from "react";
// import { ThemeProvider } from "./context/ThemeContext";
// import ThemeToggle from "./components/ThemeToggle";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <ThemeProvider>
//       <ThemeToggle />
//       <Footer />
//     </ThemeProvider>
//   );
// };

// export default App;

// second time.
// import React from "react";
// import { ThemeProvider } from "./context/ThemeContext";
// import ThemeToggle from "./components/ThemeToggle";
// const App = () => {
//   return (
//     <>
//       <ThemeProvider>
//         <ThemeToggle />
//       </ThemeProvider>
//     </>
//   );
// };

// export default App;
/////////////////////////////////
import React from "react";
import { useState } from "react";
import Table from "./components/Table";
import EditModal from "./components/EditModal";
import DeleteModal from "./components/DeleteModal";

const initialData = [
  { id: 1, name: "Nyunt Sein", email: "nyuntsein@gmail.com" },
  { id: 2, name: "George", email: "george@gmail.com" },
];

const App = () => {
  const [data, setData] = useState(initialData);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  // handle click for edit selection
  const handleEditClick = (row) => {
    setSelectedRow(row);
    setEditModalOpen(true);
  };

  //handle click for delete selection
  const handleDeleteClick = (row) => {
    setSelectedRow(row);
    setDeleteModalOpen(true);
  };

  // handle function for update
  const handleUpdate = (updatedRow) => {
    setData(
      data.map((item) => (item.id === updatedRow.id ? updatedRow : item))
    );
    setEditModalOpen(false);
  };

  // handle function for update
  const handleDelete = () => {
    setData(data.filter((item) => item.id !== selectedRow.id));
    setDeleteModalOpen(false);
  };

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">User Table</h1>
        <Table
          data={data}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
        />
        {editModalOpen && (
          <EditModal
            row={selectedRow}
            onClose={() => setEditModalOpen(false)}
            onUpdate={handleUpdate}
          />
        )}
        {deleteModalOpen && (
          <DeleteModal
            row={selectedRow}
            onClose={() => setDeleteModalOpen(false)}
            onDelete={handleDelete}
          />
        )}
      </div>
    </>
  );
};

export default App;
