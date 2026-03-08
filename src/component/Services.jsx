import { Code, ArrowUpRight } from "lucide-react";
import Navbar from "./Navbar";

function Services({ hideNavbar }) {
  return (
    <div id="services" className="min-h-screen bg-[#0e1525] text-white">
      
      {/* ✅ Only show Navbar if hideNavbar is false/undefined */}
      {!hideNavbar && <Navbar />}

      {/* Services Section */}
      <section className="py-20 px-8 lg:px-12">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-14">
          My <span className="text-[#4cd137]">Services</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <ServiceCard
            icon={<Code />}
            title="Frontend Developer"
            description="Creating modern, responsive, and user-friendly interfaces with clean UI and smooth user experience."
          />

          <ServiceCard
            icon={<Code />}
            title="Backend Developer"
            description="Building secure, scalable, and high-performance server-side applications and RESTful APIs."
          />

          <ServiceCard
            icon={<Code />}
            title="Database"
            description="Designing optimized and well-structured databases to ensure fast, secure, and reliable data management."
          />

        </div>
      </section>
    </div>
  );
}

/* ✅ Service Card */
function ServiceCard({ icon, title, description }) {
  return (
    <div
      className="
        group relative rounded-xl p-7 bg-[#2b3442]
        border border-transparent
        hover:text-[#4cd137]
        hover:-translate-y-2 hover:shadow-lg hover:shadow-[#4cd137]/30
        transition-all duration-300 cursor-pointer
      "
    >
      {/* Arrow */}
      <div
        className="
          absolute top-6 right-6 w-10 h-10
          flex items-center justify-center rounded-full
          bg-white text-black
          group-hover:text-[#4cd137]
          transition-colors duration-300
        "
      >
        <ArrowUpRight
          size={18}
          className="group-hover:rotate-45 transition-transform duration-300"
        />
      </div>

      {/* Icon */}
      <div
        className="
          w-12 h-12 flex items-center justify-center
          rounded-lg mb-4 text-white
          group-hover:text-[#4cd137]
          transition-colors duration-300
        "
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 group-hover:text-[#4cd137] transition-colors duration-300">
        {title}
      </h3>

      {/* Text */}
      <p className="text-gray-300 leading-7 text-sm">
        {description}
      </p>
    </div>
  );
}

export default Services;
