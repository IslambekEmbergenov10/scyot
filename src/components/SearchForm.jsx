import React from 'react';

const SearchForm = () => {
  return (
    <form className="w-full max-w-[1180px] mx-auto bg-white/10 backdrop-blur-md p-6 rounded-xl grid grid-cols-1 md:grid-cols-4 gap-4">
      
      {/* Локация */}
      <select className="p-3 rounded bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white">
        <option>Локация для тура</option>
      </select>

      {/* Дата */}
      <input
        type="text"
        placeholder="Дата похода"
        className="p-3 rounded bg-white/20 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white"
      />

      {/* Участники */}
      <select className="p-3 rounded bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white">
        <option>Участники</option>
      </select>

      {/* Кнопка */}
      <button
        type="submit"
        className="bg-white text-black font-semibold px-4 py-3 rounded hover:bg-gray-100 transition duration-200"
      >
        Найти программу
      </button>
    </form>
  );
};

export default SearchForm;
