import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "../src/services/services";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Form from "./components/Form";
import PrivateRoute from "./Private/PrivateRoute";
import { Dashboard } from "./page/";
import { AuthProvider } from "./context/authContext";
import { UserContextProvider } from "./context/userContext";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <UserContextProvider>
          <ToastContainer />
          <Router>
            <Routes>
              {/* Login Route */}
              <Route path="/" element={<Form isRegister={false} />} />

              {/* Register Route */}
              <Route path="/register" element={<Form isRegister={true} />} />

              {/* Protected Dashboard Route */}
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Router>
        </UserContextProvider>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
