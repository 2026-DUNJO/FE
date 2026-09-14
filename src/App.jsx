import { Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";

function Home() {
  return <div>Home</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;