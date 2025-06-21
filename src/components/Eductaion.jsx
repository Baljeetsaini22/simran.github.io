import React from "react";

const educationData = [
  {
    title: "Bachelor of Design (UI/UX)",
    institution: "Creative University",
    year: "2021 - 2024",
  },
  {
    title: "Diploma in Graphic Design",
    institution: "Design Institute",
    year: "2019 - 2021",
  },
  {
    title: "High School",
    institution: "St. Xavier's School",
    year: "2017 - 2019",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-black text-white py-16 px-6">
      <div className="w-full px-[7.5%] text-center">
        <h2 className="text-4xl font-bold mb-10 bg-[#ffe600] text-transparent bg-clip-text">
          Education
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-[0_-5px_5px_#59C378] hover:shadow-[0_5px_5px_#ffe600] transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{edu.title}</h3>
              <p className="text-sm text-gray-400">{edu.institution}</p>
              <p className="text-xs text-gray-500 mt-1">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
