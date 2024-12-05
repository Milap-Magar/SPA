import { useContext } from "react";
import { UserContext } from "../context/userContext";

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be  with in User Provider");
  }
  return context;
};
