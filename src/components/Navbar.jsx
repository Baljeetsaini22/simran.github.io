import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Skills", "Project", "Contact"];

  return (
    <>
      <header className="w-full px-[7.5%] bg-black text-white fixed top-0 z-50">
        <div className=" py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#ffe600] bg-clip-text">
            Simran
          </h1>

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

          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-5 py-2 bg-[#59c378] hover:bg-[#ffe600] text-white hover:text-black rounded-full font-semibold text-sm hover:scale-105 transition"
            >
              Let’s Talk
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <a
              href="#contact"
              className="px-3 py-1.5 bg-[#59c378] hover:bg-[#ffe600] text-white hover:text-black rounded-full text-xs font-medium"
            >
              Let’s Talk
            </a>
            <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full bg-black border-l border-gray-700 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-[70%] max-w-xs md:hidden`}
      >
        <div className="px-4 py-6 flex flex-col h-full">
          <div className="flex justify-end mb-4">
            <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
              <FaTimes
                size={22}
                className="text-white hover:text-red-400 transition"
              />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 text-center text-white text-sm font-medium">
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
            <a
              href="#contact"
              className="block w-fit mx-auto text-center px-4 py-2 bg-[#59c378] hover:bg-[#ffe600] text-white hover:text-black rounded-full text-sm font-semibold transition"
              onClick={() => setIsOpen(false)}
            >
              Let’s Talk
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
