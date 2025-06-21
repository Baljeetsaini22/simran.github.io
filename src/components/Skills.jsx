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
      <div className="w-full px-[7.5%]  text-center">
        <h2 className="text-4xl font-bold mb-10 bg-[#ffe600] text-transparent bg-clip-text">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl flex flex-col items-center justify-center shadow-[0_-5px_5px_#59C378] hover:shadow-[0_5px_5px_#ffe600] transform hover:scale-105 transition-all duration-300"
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

