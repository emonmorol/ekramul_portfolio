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
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Blogs from "./pages/Blogs/Blogs";
import About from "./pages/About/About";
import SectionDivider from "./componentss/SectionDivider/SectionDivider";
import Footer from "./componentss/Footer/Footer";

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
        <Route path="/about-me" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <SectionDivider margin={"mt-20"} />
      <Footer />
    </div>
  );
}

export default App;
