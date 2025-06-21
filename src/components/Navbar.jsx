import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Project", "Contact"];

  return (
    <header className="bg-black text-white fixed top-0 w-full z-50 shadow-md">
      <div className="w-full mx-auto px-[7.5%] py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <h1 className="text-2xl font-bold text-[#ffe600] bg-clip-text">
          Simran
        </h1>

        {/* Center: Menu for Desktop */}
        <nav className="hidden md:flex justify-center space-x-6 uppercase text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-[#ffe600] transition"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right: Let's Talk button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2 bg-[#59c378] hover:bg-[#ffe600] text-white hover:text-black rounded-full font-semibold text-sm hover:scale-105 transition"
          >
            Let’s Talk
          </a>
        </div>

        {/* Mobile: Menu Toggle & Let’s Talk */}
        <div className="md:hidden flex items-center space-x-3">
          <a
            href="#contact"
            className="px-3 py-1.5 bg-[#59c378] hover:bg-[#ffe600] text-white hover:text-black rounded-full text-xs font-medium"
          >
            Let’s Talk
          </a>
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700 px-4 py-6">
          <nav className="flex flex-col space-y-4 text-center text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-fuchsia-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
