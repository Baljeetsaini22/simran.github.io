// import React from "react";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaFigma,
//   FaReact,
// } from "react-icons/fa";
// import { SiCanva, SiTailwindcss, SiAdobe } from "react-icons/si";

// const skills = [
//   { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
//   { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
//   { name: "Canva", icon: <SiCanva className="text-purple-400" /> },
//   { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
//   { name: "Photoshop", icon: <SiAdobe className="text-red-600" /> },
//   { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
//   { name: "React", icon: <FaReact className="text-cyan-300" /> },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="bg-black text-white py-16 px-6 md:px-10">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
//           My Skills
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
//             >
//               <div className="text-4xl mb-3">{skill.icon}</div>
//               <p className="text-lg font-semibold">{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import { SiCanva, SiAdobe } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Canva", icon: <SiCanva className="text-purple-400" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
  { name: "Photoshop", icon: <SiAdobe className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
  { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-transparent bg-clip-text">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl flex flex-col items-center justify-center transition-transform transform hover:scale-105 duration-300 hover:shadow-[0_0_20px_rgba(255,0,255,0.7),0_0_20px_rgba(0,255,255,0.5)]"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

