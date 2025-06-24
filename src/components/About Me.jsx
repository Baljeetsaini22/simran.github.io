import React from "react";
import myImg from "/simran/img.png";

function About() {
  return (
    <section id="about" className="w-full px-[7.5%] bg-black text-white py-16 h-full">
      <div className="grid md:grid-cols-2 gap-12 items-center ">
        {/* Left Content */}
        <div className="text-justify">
          <h2 className="text-4xl font-bold mb-10 bg-[#ffe600] text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Hello! I'm <span className="text-white font-semibold">Simran</span>,
            a passionate and detail-oriented UI & UX designer. I specialize in
            creating clean, user-friendly interfaces that bring ideas to life
            with beautiful, functional design.
          </p>

          <div className="space-y-2 text-sm text-gray-300">
            <p className="flex items-center gap-8 sm:gap-10">
              <span className="font-semibold text-white w-10 md:w-15">Name</span>
              <span>:</span>
              <span>Simran Kaur</span>
            </p>
            <p className="flex items-center gap-8 sm:gap-10">
              <span className="font-semibold text-white w-10 md:w-15">DOB</span>
              <span>:</span>
              <span>9th Nov 2004</span>
            </p>
            <p className="flex items-center gap-8 sm:gap-10">
              <span className="font-semibold text-white w-10 md:w-15">Email</span>
              <span>:</span>
              <span>Simrankaurnagpal01@gmail.com</span>
            </p>
            <p className="flex items-center gap-8 sm:gap-10">
              <span className="font-semibold text-white w-10 md:w-15">Phone</span>
              <span>:</span>
              <span>+91 84277 19801</span>
            </p>
            <p className="flex items-center gap-8 sm:gap-10">
              <span className="font-semibold text-white w-10 md:w-15">Nationality</span>
              <span>:</span>
              <span>Indian</span>
            </p>
            <p className="flex items-center gap-8 sm:gap-10">
              <span className="font-semibold text-white w-10 md:w-15">City</span>
              <span>:</span>
              <span>Chandigarh</span>
            </p>
            <p className="flex items-center gap-8 sm:gap-10">
              <span className="font-semibold text-white w-10 md:w-15">Languages</span>
              <span>:</span>
              <span>English, Hindi, Punjabi</span>
            </p>
          </div>
        </div>
        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={myImg}
            alt="Simran UI & UX Designer"
            className="w-70 h-70 object-cover rounded-full shadow-lg border-4 border-dotted hover:animate-spin border-[#59C378] hover:border-[#ffe600]"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
