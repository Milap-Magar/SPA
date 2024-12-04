import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode; 
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const authToken = localStorage.getItem("token");

  return authToken ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
