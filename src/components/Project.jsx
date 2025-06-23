

const projects = [
  {
    id: 1,
    title: "UI Design",
    image: "/project/project1.jpg",
    link: "",
    shadow: "shadow-orange-500"
  },
  {
    id: 2,
    title: "UI Design",
    image: "/project/project2.jpg",
    link: "",
    shadow: "shadow-blue-500"
  },
  {
    id: 3,
    title: "UI Design",
    image: "/project/project3.jpg",
    link: "",
    shadow: "shadow-pink-500"
  },
  {
    id: 4,
    title: "UI Design",
    image: "/project/project4.jpg",
    link: "",
    shadow: "shadow-indigo-600"
  },
];

const Projects = () => {
  return (
    <section id="project" className="bg-black text-white w-full h-auto px-[7.5%] py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">My Projects</h2>
        <p className="mt-4 text-gray-300">Click on a project to view it live</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => window.open(project.link, "_blank")}
            className={`cursor-pointer bg-gray-900 overflow-hidden rounded-xl shadow-[0_-5px_5px] ${project.shadow} hover:shadow-[0_5px_5px] hover:${project.shadow} transform hover:scale-105 transition-all duration-300`}
          >
            <img
              src={project.image}
              loading="lazy"
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-yellow-400 text-center">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

