import React from "react";
import Navbar from "./Navbar";


function Contact({hideNavbar}) {
  // ✅ ALREADY PRESENT (kept as-is)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = React.useState(false);

  // ✅ ADD: handleChange
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ ADD: handleSubmit (FETCH API)
  const handleSubmit = async (e) => {
  e.preventDefault();

  // ✅ Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ✅ Phone validation (10 digits only)
  const phoneRegex = /^[0-9]{10}$/;

  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (formData.phone && !phoneRegex.test(formData.phone)) {
    alert("Phone number must be exactly 10 digits");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch("/.netlify/functions/send-mail",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    // ✅ SUCCESS ALERT
    alert("✅ Message sent successfully!");

    // ✅ Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });

  } catch (error) {
    alert("❌ Failed to send message");
  } finally {
    setLoading(false);
  }
};

  return (
    <div id="contact" className="min-h-screen bg-[#0e1525] text-white">

      {/* ✅ Only show Navbar if hideNavbar is false/undefined */}
      {!hideNavbar && <Navbar />}
      {/* Contact Section */}
      <section className="py-20 px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
              Let&apos;s <span className="text-blue-500">Work</span> Together
            </h2>

            <p className="text-gray-400 max-w-lg mb-10 leading-relaxed">
              Code that speaks, solutions that deliver—let’s connect.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg  text-black text-xl">
                  📞
                </div>
                <div>
                  <p className="text-[#4cd137] font-semibold">Phone</p>
                  <p className="text-gray-300">(+91) 7377873682</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg  text-black text-xl">
                  📩
                </div>
                <div>
                  <p className="text-[#4cd137] font-semibold">Email</p>
                  <p className="text-gray-300">swatisagarika001@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg  text-black text-xl">
                  📍
                </div>
                <div>
                  <p className="text-[#4cd137] font-semibold">Address</p>
                  <p className="text-gray-300">
                    Near Reliance Petrol Pump Kalakanhu Colony, Nimapada, Puri, Odisha
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="
                bg-gradient-to-br from-gray-900 to-black
                rounded-3xl p-6 md:p-8
                shadow-2xl shadow-black/50
                border border-white/10
                relative overflow-hidden max-w-xl mx-auto
              ">

            {/* Soft Glow Circles */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-green-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 relative z-10">
              Contact <span className="text-green-500">Me!</span>
            </h3>

            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>

              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"                        // ✅ ADD
                  value={formData.name}             // ✅ ADD
                  onChange={handleChange}           // ✅ ADD
                  placeholder="Full Name"
                  className="
                        contact-input w-full p-3 rounded-lg
                        bg-white/5 border border-white/20
                        placeholder-gray-400 text-white
                        focus:outline-none focus:ring-2 focus:ring-green-500/60
                        transition-all duration-300
                          "
                />
                <input
                  type="email"
                  name="email"                      // ✅ ADD
                  value={formData.email}            // ✅ ADD
                  onChange={handleChange}           // ✅ ADD
                  placeholder="Email Address"
                  className="
                      contact-input w-full p-3 rounded-lg
                      bg-white/5 border border-white/20
                      placeholder-gray-400 text-white
                      focus:outline-none focus:ring-2 focus:ring-green-500/60
                      transition-all duration-300
                    "
                />
              </div>

              {/* Phone */}
              <input
                type="text"
                name="phone"                        // ✅ ADD
                value={formData.phone}              // ✅ ADD
                onChange={handleChange}             // ✅ ADD
                placeholder="Phone Number"
                className="
                  contact-input w-full p-3 rounded-lg
                  bg-white/5 border border-white/20
                  placeholder-gray-400 text-white
                  focus:outline-none focus:ring-2 focus:ring-green-500/60
                  transition-all duration-300
                "
              />

              {/* Message */}
              <textarea
                rows="5"
                name="message"                      // ✅ ADD
                value={formData.message}            // ✅ ADD
                onChange={handleChange}             // ✅ ADD
                placeholder="Write your message here..."
                className="
                    contact-input w-full p-3 rounded-lg
                    bg-white/5 border border-white/20
                    placeholder-gray-400 text-white
                    focus:outline-none focus:ring-2 focus:ring-green-500/60
                    resize-none transition-all duration-300
                  "
              />

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={loading}                // ✅ ADD
                  className="
                    bg-green-500 text-black font-semibold
                    px-12 py-3 rounded-full
                    shadow-lg shadow-green-500/40
                    hover:scale-105 hover:shadow-xl hover:shadow-green-500/60
                    active:scale-95
                    transition-all duration-300
                  "
                >
                  {loading ? "Sending..." : "Send Message"} {/* ✅ ADD */}
                </button>
              </div>

            </form>
          </div>


        </div>
      </section>
    </div>
  );
}

export default Contact;
