import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Form } from "./components/";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<Form isRegister={false} />} />

        {/* Register Route */}
        <Route path="/register" element={<Form isRegister={true} />} />
      </Routes>
    </Router>
  );
};

export default App;
