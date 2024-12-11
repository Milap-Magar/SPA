import Sidebar from "../components/ui/Sidebar";
import { useData } from "../hooks/useData";

const Dashboard = () => {
  const { userData, loading, fetchUser } = useData();

  if (loading) return <div>Loading...</div>;

  if (!userData) {
    return (
      <Sidebar>
        <div className="p-6 bg-gray-100 min-h-screen">
          <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
          <div className="bg-white p-4 shadow-md rounded-md">
            <p>No user data available. Please refresh or log in again.</p>
            <button
              onClick={fetchUser}
              className="mt-4 p-2 bg-blue-500 text-white rounded-md"
            >
              Refresh User Data
            </button>
          </div>
        </div>
      </Sidebar>
    );
  }

  return (
    <Sidebar>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Welcome, {userData.name}!</h1>
        <div className="bg-white p-4 shadow-md rounded-md">
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Address:</strong> {userData.address}
          </p>
          <p>
            <strong>Phone:</strong> {userData.phone}
          </p>
          <button
            onClick={fetchUser}
            className="mt-4 p-2 bg-blue-500 text-white rounded-md"
          >
            Refresh User Data
          </button>
        </div>
      </div>
    </Sidebar>
  );
};

export default Dashboard;
