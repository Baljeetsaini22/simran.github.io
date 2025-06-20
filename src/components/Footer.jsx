
import { FaInstagram, FaBehance, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold text-fuchsia-400 mb-4">
          Simran Kaur | UI & UX Designer
        </h3>
        <p className="mb-4 text-sm">
          Designed with 💜 by Simran Kaur. Let’s build user-friendly and beautiful digital experiences together!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6 text-xl">
          <a
            href="https://www.instagram.com/simran_k_design?utm_source=ig_web_button_share_sheet&igsh="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaBehance />
          </a>
          <a
            href="https://www.linkedin.com/in/simran-kaur-a6a111293/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Simran Kaur. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
