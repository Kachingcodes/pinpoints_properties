import React, { useState } from "react";
import { Link } from 'react-scroll';
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeDeskMenu = () => {
    setIsMenuOpen(isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full p-2">
      <nav className="flex justify-between items-center max-w-6xl mx-auto relative z-50">
        {/* LOGO */}
        <div className="text-white text-xl font-bold">Pinpoints Properties</div>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex gap-6 text-white bg-black/20 p-3 rounded-full cursor-pointer">
          {["home", "about", "explore", "testimonials", "contact"].map((section) => (
          
          <li key={section}>
            <Link className="hover:text-trois" 
            onClick={closeDeskMenu}
            to={section} spy={true} smooth={true} offset={-100} duration={500}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
          </li>

          ))}
          </ul>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden text-white cursor-pointer z-50" onClick={toggleMenu}>
          {isMenuOpen ? <IoClose className="text-[#381904] fixed right-10" size={28} /> : <FaBars size={24} />}
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#fdf6ee] min-h-screen flex flex-col items-center justify-center gap-8 text-xl font-semibold z-40 transition-all duration-500 ease-in-out">
          {["home", "about", "explore", "testimonials", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
              className="text-[#381904] hover:text-[#7a4c2a] transition-colors cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}


    </header>
  );
}

export default Navbar;