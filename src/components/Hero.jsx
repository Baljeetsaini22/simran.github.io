import { FaArrowDown, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import myImg from "/simran/img.jpg";
import psIcon from "/banner/photoshop.svg"
import aiIcon from "/banner/illustrator.svg"
import sketchIcon from "/banner/diamond.svg"
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Simran Kaur", "UI & UX Designer"],
    loop: true,
    deleteSpeed: 60,
    delaySpeed: 1500,
  });
  return (
    <section
      id="home"
      className="w-full px-[7.5%] bg-black text-white py-16 h-full mt-15  flex items-center"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-2xl md:text-3xl font-bold text-gray-300">Hello</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-[#59C378] leading-tight mb-4">
            I'm {text}
            <Cursor cursorStyle="|" />
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
              className="flex items-center gap-2 border border-[#a80002] text-[#a80002] hover:bg-[#59C378] hover:text-white px-5 py-2 rounded-full transition duration-300"
            >
              Download CV <FaArrowDown />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center items-center md:w-1/2 w-full mt-10 md:mt-0">
          {/* Profile Image with Circle Background */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ">
            <img
              src={myImg}
              alt="Simran"
              className="object-cover w-full h-full animate-pulse"
            />
          </div>

          {/* Floating Icons */}
          <img
            src={psIcon}
            alt="Photoshop"
            className="absolute top-4 left-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl p-1 shadow-lg animate-bounce"
          />
          <img
            src={aiIcon}
            alt="Illustrator"
            className="absolute top-4 right-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl p-1 shadow-lg animate-bounce"
          />
          <img
            src={sketchIcon}
            alt="Sketch"
            className="absolute bottom-6 right-4 w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl p-1 shadow-lg animate-bounce"
          />

          {/* Badge */}
          <div className="absolute bottom-6 left-4 bg-white shadow-md px-4 py-2 rounded-xl flex items-center gap-2 animate-bounce">
            <FaCheckCircle className="text-green-500" />
            <div>
              <p className="text-xs font-semibold text-gray-800">15+</p>
              <p className="text-xs text-gray-500">Complete Project</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
