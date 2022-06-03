import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./componentss/Navbar/Navbar";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Landing from "./pages/LandingPage/Landing";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Services from "./pages/Services/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/landing#home" element={<Home />} />
        <Route path="/landing#portfolio" element={<Portfolio />} />
        <Route path="/landing#resume" element={<Resume />} />
        <Route path="/landing#services" element={<Services />} />
        <Route path="/landing#contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
