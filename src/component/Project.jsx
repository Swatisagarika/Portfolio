import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
// LMS images
import lmsAdmin from "../assets/lms-admin.png";
import lmsInstructor from "../assets/lms-instructor.png";
import lmsStudent from "../assets/lms-student.png";
// urban images
import home from "../assets/home.png";
import service from "../assets/service.png";


function Projects({ hideNavbar }) {
  const projects = [
    {
      id: "01",
      title: "Learning Management System",
      desc:
        "A complete Learning Management System that supports Admin, Instructor, and Student dashboards. It helps manage courses, users, and learning activities efficiently.",
      tech: "React, Node.js, Express, MySQL",
      images: [lmsAdmin, lmsInstructor, lmsStudent],
    },
    {
      id: "02",
      title: "Hospital Management System",
      desc:
        "A web-based Hospital Management System designed to manage doctors, patients, appointments, and medicines efficiently.",
      tech: "React, Node.js, Express, MySQL",
      images: ["https://via.placeholder.com/900x520?text=Hospital+Management"],
    },
    {
      id: "03",
      title: "Urban Services",
      desc:
        "An Urban Services project aims to simplify and modernize the management of essential community services such as cleaning, plumbing, electrical work, and home maintenance. It provides a centralized platform where users can easily request services, track bookings, and connect with verified service providers",
      tech: "React, Node.js, Express, MySQL",
      images: [home, service],
    },
  ];

  const [index, setIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const project = projects[index];

  // reset image when project changes
  useEffect(() => {
    setImageIndex(0);
  }, [index]);

  return (
    <div id="project" className="min-h-screen bg-[#0e1525] text-white">
      {/* ✅ Only show Navbar if not on Home page */}
      {!hideNavbar && <Navbar />}

      {/* MAIN CONTENT */}
      <div className="grid lg:grid-cols-2 gap-12 px-8 lg:px-16 mt-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-7xl font-bold text-gray-600 mb-4">
            {project.id}
          </h2>

          <h3 className="text-3xl font-semibold mb-4">
            {project.title}
          </h3>

          <p className="text-gray-300 mb-6">
            {project.desc}
          </p>

          <p className="text-[#4cd137] font-medium mb-8">
            {project.tech}
          </p>

          {/* PROJECT NAV BUTTONS */}
          <div className="flex gap-4">
            <button
              onClick={() =>
                setIndex((index - 1 + projects.length) % projects.length)
              }
              className="w-12 h-12 rounded-full border border-gray-400 hover:bg-[#4cd137] hover:text-black transition"
            >
              ←
            </button>

            <button
              onClick={() =>
                setIndex((index + 1) % projects.length)
              }
              className="w-12 h-12 rounded-full border border-gray-400 hover:bg-[#4cd137] hover:text-black transition"
            >
              →
            </button>
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE PREVIEW) */}
        <div className="relative">
          <img
            src={project.images[imageIndex]}
            alt={project.title}
            className="rounded-xl w-full shadow-lg"
          />

          {/* IMAGE SLIDER BUTTONS */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setImageIndex(
                    (imageIndex - 1 + project.images.length) %
                      project.images.length
                  )
                }
                className="absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-[#4cd137] hover:text-black transition"
              >
                ‹
              </button>

              <button
                onClick={() =>
                  setImageIndex(
                    (imageIndex + 1) % project.images.length
                  )
                }
                className="absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-[#4cd137] hover:text-black transition"
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
