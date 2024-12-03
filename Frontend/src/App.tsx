import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Form from "./components/Form";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          {/* Login Route */}
          <Route path="/" element={<Form isRegister={false} />} />

          {/* Register Route */}
          <Route path="/register" element={<Form isRegister={true} />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
