import React from "react";
// import myImg from "/simran/img.png";

function About() {
  return (
    <section
      id="about"
      className="w-full px-[7.5%] bg-black text-white py-16 h-full"
    >
      <div className="items-center ">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-center text-justify">
          <h2 className="text-4xl font-bold mb-10 bg-[#ffe600] text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Hi, I’m <strong>Simran</strong>, a passionate UI/UX Designer
            dedicated to creating intuitive, user-centered digital experiences.
            With a strong eye for detail and a deep understanding of design
            principles, I strive to blend creativity with functionality in every
            project I take on.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I specialize in crafting clean, modern interfaces that not only look
            great but also solve real user problems. From wireframing and
            prototyping to user research and interaction design, I focus on
            building seamless experiences that keep users engaged and satisfied.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Over the years, I’ve worked on web and mobile platforms,
            collaborating with developers, product managers, and creative teams
            to turn ideas into interactive, user-friendly products. I believe
            that great design is more than just aesthetics — it’s about empathy,
            usability, and making technology accessible.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            When I’m not designing, you’ll find me exploring new design trends,
            testing new tools, or sketching ideas for my next project. I'm
            always excited to take on new challenges and help bring bold ideas
            to life.
          </p>
          <p className="text-gray-300 mb-6 text-2xl font-bold leading-relaxed">👉Let’s create something meaningful together.🫡</p>
        </div>
      </div>
    </section>
  );
}

export default About;
