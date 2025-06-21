import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center justify-center px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
          Hi, I'm Simran
        </h1>
        <h2 className="text-xl md:text-2xl font-medium mb-4">UI & UX Designer</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Crafting beautiful and user-friendly designs with clean interfaces and smart UX thinking.
        </p>

        <div className="flex items-center justify-center space-x-4 mb-6">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:scale-110 transition text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:scale-110 transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:scale-110 transition text-2xl"
          >
            <FaGithub />
          </a>
        </div>

        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
        >
          Let’s Talk
        </a>
      </div>
    </section>
  );
};

export default Hero;
