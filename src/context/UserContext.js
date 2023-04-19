"use client";
import { createContext, useState, useEffect } from "react";

// Roles
// customer 0
// provider 1
// company 2


export const UserRoleContext = createContext();
export const UserRoleContextProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("company");
  useEffect(() => {
    // const dir = lang === "ar" ? "rtl" : "ltr";
    // document.body.style.direction = dir;
    // document.body.setAttribute("dir", dir);
  }, []);
  return (
    <UserRoleContext.Provider value={{ userRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};
