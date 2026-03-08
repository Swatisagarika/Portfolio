import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [activeScrollSection, setActiveScrollSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    // If not on Home page, reset scroll highlight so NavLink's isActive can take over
    if (location.pathname !== "/") {
      setActiveScrollSection("");
      return;
    }

    const handleScroll = () => {
      // These IDs must match the id="..." you put on your section containers
      const sections = ["home", "services", "resume", "project", "contact"];
      const scrollPosition = window.scrollY + 150; // Triggers slightly before reaching the section

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveScrollSection(section);
            break; 
          }
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  // Unified styling function
  const getLinkClass = ({ isActive }, sectionId) => {
    let isHighlighted = false;

    if (location.pathname === "/") {
      // Priority 1: If on Home, use scroll detection to choose the green link
      isHighlighted = activeScrollSection === sectionId;
    } else {
      // Priority 2: If on sub-pages (/services, /project), use standard route matching
      isHighlighted = isActive;
    }

    return isHighlighted
      ? "text-[#4cd137] font-semibold transition duration-300 border-b-2 border-[#4cd137]"
      : "text-white hover:text-[#4cd137] transition duration-300 border-b-2 border-transparent";
  };

  return (
    <div className="bg-[#0e1525] text-white sticky top-0 z-[100] border-b border-gray-800">
      <div className="flex justify-between items-center px-8 lg:px-12 py-6">
        <h1 className="text-3xl font-bold">Swati.</h1>

        <nav className="flex gap-6 lg:gap-10 text-lg">
          <NavLink to="/" end className={(nav) => getLinkClass(nav, "home")}>
            Home
          </NavLink>

          <NavLink to="/services" className={(nav) => getLinkClass(nav, "services")}>
            Services
          </NavLink>

          <NavLink to="/resume" className={(nav) => getLinkClass(nav, "resume")}>
            Resume
          </NavLink>

          <NavLink to="/project" className={(nav) => getLinkClass(nav, "project")}>
            Project
          </NavLink>

          <NavLink to="/contact" className={(nav) => getLinkClass(nav, "contact")}>
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;