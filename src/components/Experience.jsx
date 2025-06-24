import React from "react";
import { FaArrowRight } from "react-icons/fa";

// Dummy logos (replace with your actual images)
import logo1 from "/logo/digibeez.svg";


const experienceData = [
  {
    year: "Form Nov 2024",
    logo: logo1,
    role: "UI/UX Designer",
    company: "Digibeez",
    website: "https://digibeez.in/",
    shadow: "shadow-orange-500",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-black text-white py-16 px-4 md:px-[7.5%]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#ffe600]">
          My Work Experience
        </h2>

        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center justify-between bg-gray-900 p-6 rounded-xl shadow-[0_-5px_5px] ${exp.shadow} hover:shadow-[0_5px_5px] hover:${exp.shadow} transform hover:scale-105 transition-all duration-300`}
            >
              {/* Left: Year */}
              <div className="text-gray-300 font-semibold text-sm md:text-base w-full md:w-[15%] mb-4 md:mb-0">
                {exp.year}
              </div>

              {/* Middle: Logo */}
              <div className="flex-shrink-0 rounded-2xl overflow-hidden mb-4 md:mb-0">
                <img src={exp.logo} alt="company logo" className="object-contain w-14 h-full" />
              </div>

              {/* Right: Info */}
              <div className=" md:text-left">
                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                <p className="text-sm text-red-400">{exp.company}</p>
              </div>

              {/* Website link */}
              <div className="mt-4 md:mt-0">
                <a
                  href={exp.website}
                  className="text-white hover:text-[#ffe600] text-sm font-semibold flex items-center gap-2"
                >
                  Go to website <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
