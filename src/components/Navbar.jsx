import React from 'react';
import LogoMain from "../assets/temir.png";

const Navbar = () => {
  return (
    <nav className="w-full py-6 bg-transparent text-white">
      <div className="max-w-[1180px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src={LogoMain} alt="Logo" className="w-20" />
        </div>

        {/* Menu */}
        <div className="flex items-center font-[600] text-[18px] text-[#FDFDFD] leading-[100%] gap-[24px] ml-[212px]">
          <ul className="flex gap-6">
            <li><a href="#">Главная</a></li>
            <li><a href="#">Про гида</a></li>
            <li><a href="#">Программа тура</a></li>
            <li><a href="#">Стоимость</a></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>

        {/* Button */}
        <button className="bg-[#1A3E3E] px-4 py-2 rounded text-white">
          Консультация
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
