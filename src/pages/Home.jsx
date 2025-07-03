import React from 'react';
import Navbar from '../components/Navbar';
import SearchForm from '../components/SearchForm';
import background from '../assets/qongirot.jpg';

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 text-white">
        <div className="w-full max-w-[1180px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            НАСЛАДИСЬ ПРОГУЛКОЙ В ГОРАХ
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl mb-10">
            С КОМАНДОЙ ЕДИНОМЫШЛЕННИКОВ
          </h2>
          {/* <SearchForm /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
