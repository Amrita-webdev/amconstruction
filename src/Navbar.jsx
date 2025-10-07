import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ scrollToElement }) => {
  const [nav, setNav] = useState(false);

  const handleNavClick = (id) => {
    scrollToElement(id);
    setNav(false);
  };

  return (
    <nav className="relative z-20 flex items-center justify-between px-6 py-4 md:px-16 md:py-6">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logoipsum.svg" alt="Logo" className="h-8" />
      </div>

      {/* Hamburger Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-30 text-black md:hidden"
      >
        {nav ? <FaTimes size={24} className="text-white"/> : <FaBars size={24} />}
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-10 text-black font-medium">
        <a className="cursor-pointer" onClick={() => handleNavClick("about")}>
          About
        </a>
        <a className="cursor-pointer" onClick={() => handleNavClick("services")}>
          Services
        </a>
        <a className="cursor-pointer" onClick={() => handleNavClick("contact")}>
          Contact Us
        </a>

        <button
          onClick={() => handleNavClick("contact")}
          className="cursor-pointer ml-8 bg-[#FFAC12] text-black font-semibold px-6 py-2 rounded-tr-2xl flex items-center space-x-2 hover:bg-amber-400 transition"
        >
          <span>Work with us</span>
          <span>→</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 right-0 w-2/3 h-screen bg-black/90 text-white flex flex-col items-end py-10 px-6 space-y-6 font-medium md:hidden ${
          nav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <a
          className="cursor-pointer hover:text-[#FFAC12]"
          onClick={() => handleNavClick("about")}
        >
          About
        </a>
        <a
          className="cursor-pointer hover:text-[#FFAC12]"
          onClick={() => handleNavClick("services")}
        >
          Services
        </a>
        <a
          className="cursor-pointer hover:text-[#FFAC12]"
          onClick={() => handleNavClick("contact")}
        >
          Contact Us
        </a>
        <button
          onClick={() => handleNavClick("contact")}
          className="bg-[#FFAC12] text-black font-semibold px-6 py-2 rounded-tr-2xl hover:bg-amber-400 transition"
        >
          Work with us →
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
