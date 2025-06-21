import React from "react";
import myImg from "/simran/img.png";

function About() {
  return (
    <section id="about" className="bg-black text-white py-16 px-4">
      <div className="w-full px-[7.5%]  grid md:grid-cols-2 gap-12 items-center ">
        {/* Left Content */}
        <div>
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
            <p>
              <span className="font-semibold text-white">Name:</span> Simran
              Kaur
            </p>
            <p>
              <span className="font-semibold text-white">DOB:</span> 10th March
              2000
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              Simrankaurnagpal01@gmail.com
            </p>
            <p>
              <span className="font-semibold text-white">Contact No:</span> 91
              84277 19801
            </p>
            <p>
              <span className="font-semibold text-white">Nationality:</span>{" "}
              Indian
            </p>
            <p>
              <span className="font-semibold text-white">City:</span> Chandigarh
            </p>
            <p>
              <span className="font-semibold text-white">Languages:</span>{" "}
              English, Hindi, Punjabi
            </p>
          </div>
        </div>
        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={myImg}
            alt="Simran UI & UX Designer"
            className="w-70 h-70 object-cover rounded-full shadow-lg border-4 border-dotted animate-spin hover:animate-none border-[#59C378] hover:border-[#ffe600]"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
