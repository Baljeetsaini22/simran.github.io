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
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-transparent bg-clip-text">
          Education
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(255,0,255,0.7),0_0_20px_rgba(0,255,255,0.5)]"
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
