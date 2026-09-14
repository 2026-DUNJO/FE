import { Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
    </Routes>
  );
}

export default App;