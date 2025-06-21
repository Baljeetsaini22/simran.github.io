import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import myImg from "/simran/img.png";

import AutoTypingText from "../components/AutoTypeText";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-black text-white h-full min-h-screen mt-4 flex items-center"
    >
      <div className="w-full px-[7.5%] flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white bg-clip-text">
            <span className="text-[#ffe600]">Hello, </span> <br />
            <AutoTypingText texts={["I'm Simran"]} /><br />
            <span className="text-[#59C378]"><AutoTypingText texts={["UI & UX Designer"]} /></span>
          </h1>
          <p className="text-gray-300">
            I craft clean, user-friendly interfaces with a blend of creativity
            and usability. Specialized in Figma, Photoshop, and Canva.
          </p>

          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <button className="flex items-center gap-2 bg-[#59C378] px-5 py-2 rounded-full transition duration-300">
              Hire Me <FaArrowRight />
            </button>
            <a
              href="/Simran-CV.pdf"
              download
              className="flex items-center gap-2 border border-cyan-400 text-cyan-400 hover:bg-[#59C378] hover:text-white px-5 py-2 rounded-full transition duration-300"
            >
              Download CV <FaArrowDown />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={myImg}
            alt="Simran"
            className="w-64 md:w-96 rounded-full shadow-xl hover:scale-105 transition duration-300  bg-[#01b7e6]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
