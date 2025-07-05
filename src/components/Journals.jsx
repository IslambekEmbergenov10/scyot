import React from 'react';

const journals = [
  'ДУ-1',
  'ДУ-2',
  'ДУ-3',
  'ДУ-4',
  'ДУ-5',
  'ДУ-6',
  'ДУ-7',
  'ДУ-8',
  'ДУ-9',
  'ДУ-10',
  'ДУ-11',
  'ДУ-12'
];

const Journals = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-10">
      <div className="max-w-[1180px] mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10">
          Журналы
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {journals.map((journal, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-xl cursor-pointer"
            >
              <h2 className="text-xl font-semibold text-white text-center">
                {journal}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journals;
