import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoMain from "../assets/temir.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 md:py-6 bg-transparent text-white relative z-50">
      <div className="max-w-[1180px] mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div>
          <img src={LogoMain} alt="Logo" className="w-16 md:w-20" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <button className="text-white hover:text-blue-300 transition-colors px-4 py-2">
              Kirish
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-[#1A3E3E] px-4 py-2 rounded text-white hover:bg-[#2A4E4E] transition-colors">
              Ro'yxatdan o'tish
            </button>
          </Link>
          <Link to="/adminom">
            <button className="bg-[#1A3E3E] px-4 py-2 rounded text-white hover:bg-[#2A4E4E] transition-colors">
              Для связи с админом
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-blue-300 transition-colors p-2"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-t border-gray-700">
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-blue-300 transition-colors py-2"
            >
              Kirish
            </Link>
            <Link
              to="/register"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-blue-300 transition-colors py-2"
            >
              Ro'yxatdan o'tish
            </Link>
            <Link
              to="/adminom"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-blue-300 transition-colors py-2"
            >
              Для связи с админом
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
