import React, { useState, useEffect } from "react";
import {
  FaArrowUp,
  FaHome,
  FaServicestack,
  FaProjectDiagram,
  FaEnvelope,
  FaHeart,
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
    <footer className="bg-black text-gray-300 pt-12 px-4 relative" id="footer">
      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 border-b border-gray-700 pb-10">
        {/* Logo + Menu */}
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
            Simran
          </h2>
          <nav className="mt-4 flex flex-col gap-2 text-sm">
            <a href="#home" className="hover:text-cyan-400 flex items-center gap-1">
              <FaHome /> Home
            </a>
            <a href="#services" className="hover:text-cyan-400 flex items-center gap-1">
              <FaServicestack /> Services
            </a>
            <a href="#projects" className="hover:text-cyan-400 flex items-center gap-1">
              <FaProjectDiagram /> Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400 flex items-center gap-1">
              <FaEnvelope /> Contact
            </a>
          </nav>
        </div>

        {/* Services Offered */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Services We Provide</h3>
          <ul className="space-y-2 text-sm">
            <li>🎨 Graphic & UI Design</li>
            <li>🧠 UX Research & Prototyping</li>
            <li>📱 Responsive Web Design</li>
            <li>📷 Social Media Creatives</li>
            <li>📦 Branding & Visual Identity</li>
          </ul>
        </div>

        {/* Let's Talk Form */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Let’s Talk</h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white outline-none focus:ring-2 ring-cyan-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white outline-none focus:ring-2 ring-pink-500"
            />
            <textarea
              placeholder="Your Message"
              rows="3"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white outline-none focus:ring-2 ring-fuchsia-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black px-4 py-2 rounded font-semibold hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-8 text-sm text-gray-400">
        Portfolio developed & designed with <FaHeart className="inline text-red-500" /> by{" "}
        <span className="text-white font-semibold"><a className="decoration-none" href="https://www.linkedin.com/in/baljeet-singh-13590834b/">Baljeet Singh</a> </span> © {new Date().getFullYear()}
      </div>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-400 text-white p-3 rounded-full shadow-lg transition animate-bounce z-50"
          aria-label="Scroll to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
