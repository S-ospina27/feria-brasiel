// RoleContext.js
import React, { createContext, useContext, useState } from "react";

export const RoleContext = createContext();

export const RoleContextProvider = ({ children }) => {
  const [role, setRole] = useState("");
  const [name, setname] = useState("");

  return (
    <RoleContext.Provider
      value={{
        role,
        setRole,
        name,
        setname,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};

export const useRoleContext = () => {
  return useContext(RoleContext);
};
