import React from "react";
// import { useState } from "react";
// import ChildComponent from "../child";

// const Parent = () => {
//   const [message, setMessage] = useState("");

//   const messageToChild = (childmessage) => {
//     setMessage(childmessage);
//     // alert(childmessage);
//   };

//   return (
//     <div>
//       <p>Hello from parent: {message}</p>
//       <ChildComponent onMessage={messageToChild} />
//     </div>
//   );
// };

// export default Parent;

// Child-To-Parent Communication Example....

import { useState } from "react";
import ChildFeedBack from "../components/child"; // Import Child Component.

const ParentManager = () => {
  const [feedback, setFeedback] = useState(""); //store feedback from child
  // Function to receive feedback from child
  const handleFeedback = (customerFeedback) => {
    setFeedback(customerFeedback);
  };

  return (
    <div>
      <h2>Manager Dashboard</h2>
      <p>
        <strong>Customer Feedback:</strong>
        {feedback || "No feedback yet"}
      </p>
      <ChildFeedBack onSendFeedback={handleFeedback} />{" "}
      {/* Passing function to child */}
    </div>
  );
};

export default ParentManager;
