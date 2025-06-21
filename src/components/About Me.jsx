import React from "react";

function About() {
  return (
    <section id="about" className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
            About Me
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Hello! I'm <span className="text-white font-semibold">Simran</span>, a passionate and detail-oriented UI & UX designer. I specialize in creating clean, user-friendly interfaces that bring ideas to life with beautiful, functional design.
          </p>

          <div className="space-y-2 text-sm text-gray-300">
            <p><span className="font-semibold text-white">Name:</span> Simran</p>
            <p><span className="font-semibold text-white">DOB:</span> 10th March 2000</p>
            <p><span className="font-semibold text-white">Email:</span> simran.uiux@example.com</p>
            <p><span className="font-semibold text-white">Contact No:</span> +91 98765 43210</p>
            <p><span className="font-semibold text-white">Nationality:</span> Indian</p>
            <p><span className="font-semibold text-white">City:</span> Chandigarh</p>
            <p><span className="font-semibold text-white">Languages:</span> English, Hindi, Punjabi</p>
          </div>
        </div>

        {/* Optional Image or Graphic */}
        <div className="flex justify-center">
          <img
            src="/images/simran.png"
            alt="Simran UI & UX Designer"
            className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-fuchsia-500"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
