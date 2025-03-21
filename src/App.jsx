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




import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
};

export default App;
