import { Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash";
import Select from "./pages/Select";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Splash />}
      />

      <Route
        path="/select"
        element={<Select />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/home"
        element={<Home />}
      />
    </Routes>
  );
}

export default App;