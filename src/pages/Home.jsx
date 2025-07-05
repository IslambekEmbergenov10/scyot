import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
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

         
          <div className="flex flex-grow items-center justify-center px-4 lg:gap-10">
         
            <div className="hidden lg:block">
              <Sidebar />
            </div>

           
            <div className="text-center max-w-[600px] px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
                КУНГРАД ОТДЕЛ УЧЕТА
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 md:mb-10 drop-shadow leading-tight">
                ПЛАТФОРМА ВАГОНОВ
              </h2>
              
              
              <div className="lg:hidden mt-8">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};




export default Home;
