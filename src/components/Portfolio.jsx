import React from "react";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Brand Identity for Lush Cosmetics",
      category: "Branding",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "Summer Sale Poster",
      category: "Poster Design",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      title: "Instagram Story Templates",
      category: "Social Media",
      image: "/images/project3.jpg",
    },
    {
      id: 4,
      title: "Minimal Business Card",
      category: "Print Design",
      image: "/images/project4.jpg",
    },
  ];

  return (
    <section id="portfolio" className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-cyan-400">My Portfolio</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow hover:scale-105 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-pink-400">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
