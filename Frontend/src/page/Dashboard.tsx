import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../context/authContext";
import { Main } from "../components/";

const Dashboard = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div>
      <Main />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
