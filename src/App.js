import { Routes, Route } from "react-router-dom";
import HeroSection from "./component/HeroSection";
import Services from "./component/Services";
import Resume from "./component/Resume";
import Contact from "./component/Contact";
import Project from "./component/Project";
import Navbar from "./component/Navbar";



function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/services" element={<Services />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/navbar" element={<Navbar/>} />
      
    </Routes>
  );
}

export default App;
