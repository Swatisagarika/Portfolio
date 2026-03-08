import React from "react";
import profileImg from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "./Navbar";
import Services from "./Services";
import Resume from "./Resume";
import Projects from "./Project";
import Contact from "./Contact";



function HeroSection() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div id="home" className="w-full min-h-screen bg-[#0e1525] text-white">


        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-12 pt-12 lg:pt-20">

          {/* Left Side */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-extrabold mb-3">
              Swati Sagarika Mohapatra
            </h1>

            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
              I'm a{" "}
              <span className="typing">
                <span style={{ "--i": 1 }} data-text="Coder">
                  Coder
                </span>
                <span style={{ "--i": 2 }} data-text="Developer">
                  Developer
                </span>
                <span style={{ "--i": 3 }} data-text="Designer">
                  Designer
                </span>
              </span>
            </h2>

            <p className="text-gray-300 leading-7 mb-8">
              I’m an experienced full-stack developer specializing in designing
              and building scalable, high-quality web applications with a strong
              focus on performance, usability, and clean architecture.
            </p>

            {/* Buttons + Social */}
            <div className="flex items-center gap-6 justify-center lg:justify-start flex-nowrap">

              <a
                href="/Swati-CV.pdf"
                download
                className="bg-[#4cd137] text-black font-semibold px-6 py-3 rounded-full shadow-sm hover:bg-[#45b530] transition hover:scale-105 duration-300"
              >
                Download CV
              </a>


              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Swatisagarika"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-[#4cd137] rounded-full hover:bg-[#4cd137] hover:text-black transition"
                >
                  <FaGithub className="w-5 h-5" />
                </a>

                <a
                  href="https://linkedin.com/in/swati-sagarika07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border-2 border-[#4cd137] rounded-full hover:bg-[#4cd137] hover:text-black transition"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative mt-12 lg:mt-0 flex items-center justify-center">
            <div className="rotate-ring flex items-center justify-center">
              <img
                src={profileImg}
                alt="profile"
                className="w-[330px] h-[330px] rounded-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Services Section */}
      <Services hideNavbar={true} />

      {/* 2. Resume Section */}
      <Resume hideNavbar={true} />

      {/* 3. Projects Section */}
      <Projects hideNavbar={true} />

      {/* 3. Contact Section */}
      <Contact hideNavbar={true} />



    </>
  );
}

export default HeroSection;
