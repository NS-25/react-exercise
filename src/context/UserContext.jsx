import { Children } from "react";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({}) => {
  const [data, setData] = useState([]);
  return (
    <UserContext.Provider value={{ data, setData }}>
      {Children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
