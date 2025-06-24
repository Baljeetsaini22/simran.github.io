import React, { useState, useEffect } from "react";
import {
  FaArrowUp,
  FaHome,
  FaServicestack,
  FaProjectDiagram,
  FaEnvelope,
  FaHeart,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black w-full h-auto px-[7.5%] pt-16 text-gray-300 relative" id="footer">
      {/* Grid Layout */}
      <div className="grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Logo + Social Icons */}
        <div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-[#ffe600] mb-4">
            Simran
          </h2>
          <p className="text-sm mb-4">
            Crafting elegant and impactful user interfaces with precision and style.
          </p>
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="https://www.linkedin.com/in/simran-kaur-a6a111293/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
              <FaLinkedin />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/simran_k_design" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <nav className="flex flex-col gap-2 text-sm">
            <a href="#home" className="hover:text-cyan-400 flex items-center gap-1">
              <FaHome /> Home
            </a>
            <a href="#skills" className="hover:text-cyan-400 flex items-center gap-1">
              <FaServicestack /> SkillS
            </a>
            <a href="#project" className="hover:text-cyan-400 flex items-center gap-1">
              <FaProjectDiagram /> Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400 flex items-center gap-1">
              <FaEnvelope /> Contact
            </a>
          </nav>
        </div>

        {/* Services List */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>🎨 Graphic & UI Design</li>
            <li>🧠 UX Research & Prototyping</li>
            <li>📱 Responsive Web Design</li>
            <li>📷 Social Media Creatives</li>
            <li>📦 Branding & Visual Identity</li>
          </ul>
        </div>

        {/* Newsletter Form */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-4">Subscribe to get latest design trends and tips.</p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white outline-none focus:ring-2 ring-cyan-500"
            />
            <button
              type="submit"
              className="bg-[#59C378] hover:bg-[#ffe600] text-white hover:text-black px-4 py-2 rounded font-semibold hover:scale-105 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-8 pb-4 text-sm text-gray-400">
        Portfolio Designed with <FaHeart className="inline text-red-500" /> by{" "}
        <a
          href="https://www.linkedin.com/in/simran-kaur-a6a111293/"
          className="text-white font-semibold hover:text-[#ffe600]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Simran Kaur
        </a>{" "}
        & Developed by{" "}
        <a
          href="https://www.linkedin.com/in/baljeet-singh-13590834b/"
          className="text-white font-semibold hover:text-[#ffe600]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Baljeet Singh
        </a>{" "}
        © {new Date().getFullYear()}
      </div>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#ffe600] text-black p-3 rounded-full shadow-lg transition animate-bounce z-50"
          aria-label="Scroll to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
