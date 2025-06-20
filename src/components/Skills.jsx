import { FaPaintBrush, FaPenNib, FaInstagram, FaPalette } from "react-icons/fa";

function Skills() {
  const services = [
    {
      icon: <FaPaintBrush className="text-pink-400 text-3xl mb-2" />,
      title: "Branding & Identity",
      desc: "Crafting logos, visual styles, and brand assets that represent your unique story.",
    },
    {
      icon: <FaPenNib className="text-yellow-400 text-3xl mb-2" />,
      title: "Poster & Print Design",
      desc: "Designing stunning posters, flyers, and print materials that grab attention.",
    },
    {
      icon: <FaInstagram className="text-fuchsia-400 text-3xl mb-2" />,
      title: "Social Media Kits",
      desc: "Creating cohesive templates for Instagram posts, stories, and highlights.",
    },
    {
      icon: <FaPalette className="text-cyan-400 text-3xl mb-2" />,
      title: "Creative Art & Illustration",
      desc: "Expressive digital artwork and illustrations tailored for any medium.",
    },
  ];

  return (
    <section id="skills" className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-lime-300">My Skills & Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gradient mb-2 text-teal-300">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
