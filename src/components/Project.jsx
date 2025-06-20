import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React & Tailwind.",
    link: "#",
  },
  {
    title: "E-commerce UI",
    description: "Modern shopping UI with product filters.",
    link: "#",
  },
  {
    title: "Travel Landing Page",
    description: "Animated landing page for a travel agency.",
    link: "#",
  },
  {
    title: "Fitness App UI",
    description: "Clean fitness tracking dashboard design.",
    link: "#",
  },
];

function Projects() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-10" id="project">
      <div className="w-full px-[7.5%] ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-[#ffe600]">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-900 p-6 rounded-xl shadow-[0_-5px_5px_#59C378] hover:shadow-[0_5px_5px_#ffe600] transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
