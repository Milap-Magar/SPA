import { useContext } from "react";
import { DataContextType } from "../types";
import { DataContext } from "../context/dataContext";

export const useAuth = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within an DataProvider");
  }
  return context;
};
