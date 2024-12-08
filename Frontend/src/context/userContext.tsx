import { createContext, ReactNode, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { userContextType } from "../types";

export const UserContext = createContext<userContextType | undefined>(
  undefined
);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<userContextType["user"]>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // console.log("Token found:", token);
      try {
        const decodedUser = jwtDecode<userContextType["user"]>(token);
        // console.log("Decoded user:", decodedUser);
        setUser(decodedUser);
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("token");
      }
    } else {
      console.log("No token found in local storage");
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
