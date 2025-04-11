import { Children } from "react";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({}) => {
  return (
    <UserContext.Provider value={{ data, setData }}>
      {Children}
    </UserContext.Provider>
  );
};
