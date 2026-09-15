import { Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash";
import Select from "./pages/Select";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Search from "./pages/Search";

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

      <Route
        path="/search"
        element={<Search />}
      />
    </Routes>
  );
}

export default App;