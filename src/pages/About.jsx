import React from 'react';

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#85e5e9] to-[#145858] text-white px-4 py-10">
      <div className="max-w-[1180px] mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10">
          Об РЖУ Кунград
        </h1>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md text-lg leading-relaxed">
          <p className="mb-4">
            РЖУ Кунград — это отдел учёта платформ вагонов, расположенный в
            Кунграде. Он играет ключевую роль в организации учета,
            отслеживания и координации вагонных операций на железнодорожных
            станциях региона.
          </p>

          <p className="mb-4">
            Основные задачи отдела:
            <ul className="list-disc list-inside pl-4 mt-2">
              <li>Учет и контроль платформ вагонов</li>
              <li>Сбор и анализ данных по вагонным перевозкам</li>
              <li>Взаимодействие с другими станциями и департаментами</li>
              <li>Поддержка прозрачности и эффективности операций</li>
            </ul>
          </p>

          <p>
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
