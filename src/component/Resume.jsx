import Navbar from "./Navbar";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs,
  FaPinterest
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPostman } from "react-icons/si";
import { DiMysql, DiPostgresql } from "react-icons/di";


function Resume({ hideNavbar }) {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div id="resume" className="min-h-screen bg-[#0e1525] text-white ">
      
      {/* ✅ Only show Navbar if hideNavbar is false/undefined */}
      {!hideNavbar && <Navbar />}
     
      {/* Resume Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 lg:px-12 py-10">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Why Hire Me?</h2>
          <p className="text-gray-300 mb-6">
            I am an experienced full-stack developer specializing in React and Node.js, with a strong focus on building scalable, 
            high-performance web applications. I take ownership of the entire development lifecycle—from designing clean, 
            intuitive user interfaces to developing secure, efficient backend systems and APIs.
          </p>

          <div className="space-y-4">
            <TabButton label="Experience" active={activeTab === "experience"} onClick={() => setActiveTab("experience")} />
            <TabButton label="Education" active={activeTab === "education"} onClick={() => setActiveTab("education")} />
            <TabButton label="Skills" active={activeTab === "skills"} onClick={() => setActiveTab("skills")} />
            <TabButton label="About Me" active={activeTab === "about"} onClick={() => setActiveTab("about")} />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          {activeTab === "experience" && <Experience />}
          {activeTab === "education" && <Education />}
          {activeTab === "skills" && <Skills />}
          {activeTab === "about" && <About />}
        </div>
      </div>
    </div>
  );
}

/* TAB BUTTON */
function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-3 rounded-lg border transition
        ${active
          ? "border-[#4cd137] text-[#4cd137]"
          : "bg-[#2b3442] border-transparent hover:border-[#4cd137]"
        }`}
    >
      {label}
    </button>
  );
}

/* EXPERIENCE */
function Experience() {
  return (
    <>
      <h2 className="text-4xl font-bold mb-6">
        My <span className="text-[#4cd137]">Experience</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ExperienceCard
          year="2025 - Present"
          role="Full Stack Developer"
          company="Freelance / Projects"
          desc="Developing full-stack applications using modern frontend frameworks and backend technologies, focusing on performance and scalability."
        />

        <ExperienceCard
          year="2024 - 2025"
          role="Backend Developer"
          company="Total Technology System"
          desc="Worked on backend development, REST APIs, database design, and integration for production-level applications."
        />
      </div>
    </>
  );
}


/* CARDS */
function ExperienceCard({ year, role, company, desc }) {
  return (
    <div className="bg-[#2b3442] p-6 rounded-xl hover:text-[#4cd137]
      hover:-translate-y-2 hover:shadow-lg hover:shadow-[#4cd137]/30
      transition-all duration-300 cursor-pointer">
      <p className="text-[#4cd137] text-sm mb-1">{year}</p>
      <h3 className="text-xl font-bold">{role}</h3>
      <p className="text-gray-300 mt-2">● {company}</p>
      <p className="text-gray-400 mt-2 text-sm">
        {desc}
      </p>
    </div>
  );
}

/* EDUCATION */
function Education() {
  return (
    <>
      <h2 className="text-4xl font-bold mb-6">
        My <span className="text-[#4cd137]">Education</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EduCard
          year="2024 - 2025"
          title="Backend Developer"
          place="Total Technology System"
          desc="Worked on backend development, REST APIs, database integration, and real-world application logic."
        />

        <EduCard
          year="2023 - 2024"
          title="Certified Full Stack Java Developer"
          place="Naresh IT, Hyderabad"
          desc="Hands-on training in Java, Spring Boot, SQL, HTML, CSS, JavaScript, and full-stack development."
        />

        <EduCard
          year="2021 – 2023"
          title="Master of Computer Applications (MCA)"
          place="College of IT & Management Education, Bhubaneswar"
          desc="Focused on software development, programming concepts, databases, and computer applications."
        />

        <EduCard
          year="2018 – 2021"
          title="B.Sc Mathematics (Hons.)"
          place="Nimapara Autonomous College, Utkal University"
          desc="Built a strong foundation in mathematics, logical reasoning, and analytical problem-solving."
        />
      </div>
    </>
  );
}

function EduCard({ year, title, place, desc }) {
  return (
    <div className="bg-[#2b3442] p-6 rounded-xl hover:text-[#4cd137]
      hover:-translate-y-2 hover:shadow-lg hover:shadow-[#4cd137]/30
      transition-all duration-300 cursor-pointer">
      <p className="text-[#4cd137] text-sm mb-1">{year}</p>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-300 mt-2">● {place}</p>
      <p className="text-gray-400 mt-2 text-sm ">
        {desc}
      </p>
    </div>
  );
}


/* SKILLS */
function Skills() {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4">
        My <span className="text-[#4cd137]">Skills</span>
      </h2>

      <p className="text-gray-300 mb-10 max-w-xl">
        Technologies I use to build modern web applications.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <SkillCard icon={<FaHtml5 />} name="HTML" />
        <SkillCard icon={<FaCss3Alt />} name="CSS" />
        <SkillCard icon={<FaJs />} name="JavaScript" />
        <SkillCard icon={<FaReact />} name="React" />
        <SkillCard icon={<FaNodeJs />} name="Node.js" />  
        <SkillCard icon={<SiExpress />} name="Express js" />     
        <SkillCard icon={<SiTailwindcss />} name="Tailwind" />
        <SkillCard icon={<DiMysql />} name="MySql" />
        <SkillCard icon={<DiPostgresql />} name="PostgreSql" />
        <SkillCard icon={<FaJava />} name="Java" />
        <SkillCard icon={<SiPostman />} name="Postman" />
        <SkillCard icon={<FaPinterest  />} name="Rest Api" />
      </div>
    </>
  );
}

function SkillCard({ icon, name }) {
  return (
    <div
      className="bg-[#1f2937] h-36 rounded-xl
      flex flex-col items-center justify-center gap-3
      text-gray-300
      hover:text-[#4cd137]
      hover:-translate-y-2 hover:shadow-lg hover:shadow-[#4cd137]/30
      transition-all duration-300 cursor-pointer"
    >
      <div className="text-4xl">
        {icon}
      </div>
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
}



/* ABOUT */
function About() {
  return(
    <div>
    <h2 className="text-4xl font-bold mb-4">
        About <span className="text-[#4cd137]">Me</span>
      </h2>
    <p className="text-gray-300 mb-10 max-w-xl">
        A passionate developer who loves learning, building, and bringing ideas to life through code.
      </p>
      {/* Flex container for h5 items */}
      <div className="flex flex-wrap -mx-4">
        <h5 className="w-1/2 px-4 text-sm font-normal mb-2">
          <span className="text-[#4cd137]">Name: </span>Swati Sagarika Mohapatra
        </h5>
        <h5 className="w-1/2 px-4 text-sm font-normal mb-2">
          <span className="text-[#4cd137]">Gender: </span>Female
        </h5>
        <h5 className="w-1/2 px-4 text-sm font-normal mb-2">
          <span className="text-[#4cd137]">Age: </span>24 Years Old
        </h5>
        <h5 className="w-1/2 px-4 text-sm font-normal mb-2">
          <span className="text-[#4cd137]">Status: </span>UnMarried
        </h5>
        <h5 className="w-1/2 px-4 text-sm font-normal mb-2">
          <span className="text-[#4cd137]">City: </span>Puri
        </h5>
        <h5 className="w-1/2 px-4 text-sm font-normal mb-2">
          <span className="text-[#4cd137]">Nationality: </span>Indian
        </h5>
        <h5 className="w-1/2 px-4 text-sm font-normal mb-2">
          <span className="text-[#4cd137]">Experience: </span>1+ Year
        </h5>
        <h5 className="w-1/2 px-4 text-sm font-normal mb-2">
          <span className="text-[#4cd137]">Full Time: </span>Available
        </h5>
        <h5 className="w-1/2 px-4 text-sm font-normal mb-2">
          <span className="text-[#4cd137]">Freelance: </span>Available
        </h5>
        <h5 className="w-1/2 px-4 text-sm font-normal mb-2">
          <span className="text-[#4cd137]">Phone: </span>+91 7377873682
        </h5>
        <h5 className="w-1/2 px-4 text-sm font-normal mb-2">
          <span className="text-[#4cd137]">Email: </span>swatisagarika001@gmail.com
        </h5>
        <h5 className="w-1/2 px-4 text-sm font-normal mb-2">
          <span className="text-[#4cd137]">Language: </span>English, Hindi, Oriya
        </h5>
      </div>
    </div>
  )
}





export default Resume;

