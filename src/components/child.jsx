import React, { useState } from "react";

// const childComponent = ({ onMessage }) => {
//   const [value, setValue] = useState("");
//   // const handleClick = () => {
//   //   onMessage("Hello from child");
//   // };

//   return (
//     <div style={{ padding: "20px" }}>
//       {/* <button onClick={() => onMessage("Hello from child")}>
//         Send message to parent
//       </button> */}
//       <input
//         value={value}
//         onChange={(e) => {
//           setValue(e.target.value);
//           console.log(e.target.value);
//           onMessage(e.target.value);
//         }}
//         placeholder="Enter your name"
//       />
//     </div>
//   );
// };

// export default childComponent;

//////////////////////////////////

// Child-To-Parent Communication Example....

import { useState } from "react";

const ChildFeedBack = ({ onSendFeedback }) => {
  const [inputFeedback, setInputFeedback] = useState(""); //Store user input

  // Handle input change
  const handleChange = (event) => {
    setInputFeedback(event.target.value);
  };

  // Send feedback to parent when clicking submit
  const handleSubmit = (event) => {
    event.preventDefault();
    onSendFeedback(inputFeedback); // Sending data to Parent
    setInputFeedback(""); // Clear input after submission
  };

  return (
    <div>
      <h3>Customer Feedback Form</h3>
      <input
        type="text"
        placeholder="Enter feedback"
        value={inputFeedback}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit Feedback</button>
    </div>
  );
};

export default ChildFeedBack;
