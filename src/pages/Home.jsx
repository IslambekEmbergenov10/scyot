import React from 'react';
import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm';
import background from '../assets/qongirot.jpg';

const Home = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Center content */}
        <div className="flex-grow flex items-center justify-center px-4">
          <div className="w-full max-w-[1180px] text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              НАСЛАДИСЬ ПРОГУЛКОЙ В ГОРАХ
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl mb-10">
              С КОМАНДОЙ ЕДИНОМЫШЛЕННИКОВ
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
