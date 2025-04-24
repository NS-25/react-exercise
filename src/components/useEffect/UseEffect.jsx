import React from "react";
import { useEffect } from "react";
// What is useEffect?

// useEffect is a React Hook that lets you perform side effects in function components.

// Think of side effects like:
// 	•	Fetching data from an API
// 	•	Updating the DOM manually
// 	•	Setting up subscriptions
// 	•	Setting a timer

// Basic Syntax
// useEffect(() => {
//   // This code runs after the component is rendered
// }, []);

function UseEffect() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/api/user").then((response) => {
      setUser(response.data);
    });
  });
  return (
    <div>
      <h1>hello i am useEffect</h1>
    </div>
  );
}

export default UseEffect;
