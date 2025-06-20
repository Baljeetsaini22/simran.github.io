import React from "react";

function About() {
  return (
    <section id="about" className="bg-black text-white py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I'm <span className="text-teal-300 font-semibold">Simran</span>, a passionate UI & UX designer with a love for bold visuals and clean aesthetics.
            I specialize in brand identity, digital art, posters, and social media kits. My work blends creativity and communication to bring ideas to life.
          </p>
          <p className="text-gray-400">
            I’ve collaborated with startups, agencies, and personal brands to design content that connects and converts. When I’m not designing, I’m learning new tools or sketching ideas for my next big project.
          </p>
        </div>

        {/* Optional Image or Graphic */}
        <div className="flex justify-center">
          <img
            src="/images/simran.png"
            alt="Simran UI & UX Designer"
            className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-fuchsia-500"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
