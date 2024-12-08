import { useUser } from "../hooks/useUser";
// import { Main } from "../components/";
import Sidebar from "../components/ui/Sidebar";

const Dashboard = () => {
  const { user } = useUser();

  if (!user) {
    return <p>Loadingg ....</p>;
  }

  return (
    <Sidebar>
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
    </Sidebar>
  );
};

export default Dashboard;
