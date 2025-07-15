import React from 'react';

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-10">
      <div className="max-w-[1180px] mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10">
          Об РЖУ Кунград
        </h1>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md transform transition-all duration-300 hover:scale-[1.01] hover:bg-white/20 hover:shadow-xl">
          <p className="mb-4 text-lg leading-relaxed">
            РЖУ Кунград — это отдел учёта платформ вагонов, расположенный в
            Кунграде. Он играет ключевую роль в организации учета,
            отслеживания и координации вагонных операций на железнодорожных
            станциях региона.
          </p>

          <div className="mb-4">
            <p className="text-lg font-semibold mb-2">Основные задачи отдела:</p>
            <ul className="list-disc list-inside pl-4 space-y-1 text-lg">
              <li>Учет и контроль платформ вагонов</li>
              <li>Сбор и анализ данных по вагонным перевозкам</li>
              <li>Взаимодействие с другими станциями и департаментами</li>
              <li>Поддержка прозрачности и эффективности операций</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed">
            Мы стремимся к высокому уровню точности и надежности в нашей
            работе, обеспечивая бесперебойную деятельность железнодорожной
            системы региона.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
