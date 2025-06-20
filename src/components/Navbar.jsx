import React, { useState } from "react";


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Simran
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><a href="#home" className="hover:text-teal-400">Home</a></li>
          <li><a href="#about" className="hover:text-fuchsia-400">About</a></li>
          <li><a href="#portfolio" className="hover:text-cyan-400">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-lime-400">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-lg">
          <a href="#home" className="block hover:text-teal-400">Home</a>
          <a href="#about" className="block hover:text-fuchsia-400">About</a>
          <a href="#portfolio" className="block hover:text-cyan-400">Portfolio</a>
          <a href="#contact" className="block hover:text-lime-400">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
