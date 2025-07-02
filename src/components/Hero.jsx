import { FaArrowDown, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import myImg from "/simran/img.jpg";
import figma from "/banner/figma.svg";
import XD from "/banner/AXd.png";
import psIcon from "/banner/photoshop.svg";
import html from "/banner/html.webp";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Simran Kaur", "a UI & UX Designer"],
    loop: true,
    deleteSpeed: 60,
    delaySpeed: 1500,
  });
  return (
    <section
      id="home"
      className="w-full px-[7.5%] bg-black text-white h-[90vh] mt-15  flex items-center"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-2xl md:text-3xl font-bold text-gray-300">Hello</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 leading-tight mb-4">
            I'm {text}
            <Cursor
              cursorStyle="|"
              cursorColor="#fb3834"
              show={true}
            />
          </h1>
          <p className="text-gray-300">
            I craft clean, user-friendly interfaces with a blend of creativity
            and usability. Specialized in Figma, Photoshop, and Canva.
          </p>

          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-[#59C378] hover:bg-[#ffe600] text-white hover:text-black px-4 py-2 rounded font-semibold hover:scale-105 transition"
            >
              Hire Me <FaArrowRight />
            </a>
            <a
              href="/Simran-CV.pdf"
              download
              className="flex items-center gap-2 border border-[#a80002] text-[#a80002] hover:bg-[#59C378] hover:text-white px-4 py-2 rounded font-semibold hover:scale-105 transition duration-300 "
            >
              Download CV <FaArrowDown />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center items-center md:w-1/2 w-full mt-10 md:mt-0">
          {/* Profile Image with Circle Background */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-120 lg:h-120 rounded-full overflow-hidden ">
            <img
              src={myImg}
              alt="Simran"
              className="object-cover w-full h-full animate-pulse"
            />
          </div>

          {/* Floating Icons */}
          <img
            src={figma}
            alt="Figma"
            className="absolute top-4 left-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl p-1 shadow-lg animate-bounce"
          />
          <img
            src={XD}
            alt="Photoshop Express"
            className="absolute top-4 right-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl p-1 shadow-lg animate-bounce"
          />
          <img
            src={psIcon}
            alt="Photoshop"
            className="absolute bottom-4 right-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl p-1 shadow-lg animate-bounce"
          />

          {/* Badge */}
          <img
            src={html}
            className="absolute bottom-4 left-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl p-1 shadow-lg animate-bounce"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
