import { FaHtml5, FaCss3Alt, FaFigma, FaReact } from "react-icons/fa";
import { SiCanva, SiJavascript,SiAdobe, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, border: "border-orange-500", shadow: "shadow-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, border: "border-blue-500", shadow: "shadow-blue-500" },
  { name: "Figma", icon: <FaFigma />, border: "border-pink-500", shadow: "shadow-pink-500" },
  { name: "Photoshop", icon: <SiAdobe />, border: "border-indigo-600", shadow: "shadow-indigo-600" },
  { name: "Canva", icon: <SiCanva />, border: "border-cyan-500", shadow: "shadow-cyan-500" },
  { name: "JavaScript", icon: <SiJavascript />, border: "border-yellow-400", shadow: "shadow-yellow-400" },
  { name: "React.js", icon: <FaReact />, border: "border-sky-500", shadow: "shadow-sky-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, border: "border-teal-400", shadow: "shadow-teal-400" },
];


const Skills = () => {
  return (
    <section id="skills" className="w-full px-[7.5%] bg-black text-white py-16 h-full">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-10 bg-[#ffe600] text-transparent bg-clip-text">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-gray-900 p-6 rounded-xl flex flex-col items-center justify-center shadow-[0_-5px_5px] ${skill.shadow} hover:shadow-md hover:${skill.shadow}  transform hover:scale-105 transition-all duration-300 `}
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
