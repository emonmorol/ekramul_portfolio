import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./componentss/Navbar/Navbar";
import Landing from "./pages/LandingPage/Landing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
