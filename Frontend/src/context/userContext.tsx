import { createContext, ReactNode, useState } from "react";
import { userContextType } from "../types";

export const UserContext = createContext<userContextType | undefined>(
  undefined
);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<userContextType["user"]>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
