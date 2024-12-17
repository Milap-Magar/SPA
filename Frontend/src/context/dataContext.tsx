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

      const query = `
        query FetchUser {
          userID {
            id
            name
            email
            phone
            address
            position
          }
        }
      `;

      const requestBody = {
        query,
      };

      const response = await AxiosInstance.post("/", requestBody);
      setUserData(response.data.data.userID);
    } catch (error) {
      console.error("Error fetching user:", error);
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
