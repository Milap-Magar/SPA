import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

// import { Main } from "../components/";

const Dashboard = () => {
  const navigate = useNavigate();

  const { user } = useUser();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!user) {
    return <p>Loadingg ....</p>;
  }

  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h1>
        <div className="bg-white p-4 shadow-md rounded-md">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Address:</strong> {user.address}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>
      </div>
      {/* <Main /> */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
