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
//       {/* <Footer /> */}
//     </ThemeProvider>
//   );
// };

// export default App;

// second time.
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./ThemeContext";
const App = () => {
  return (
    <>
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    </>
  );
};

export default App;
