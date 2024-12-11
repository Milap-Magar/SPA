import { AxiosInstance } from "../config/axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { DataContextType, User } from "../types";

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch User Data After login
  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await AxiosInstance.get<User>("/user");
      setUserData(response.data);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <DataContext.Provider value={{ userData, loading, fetchUser }}>
      {children}
    </DataContext.Provider>
  );
};
