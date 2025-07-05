import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { to: '/profile', label: 'Профиль' },
    { to: '/stations', label: 'Станции' },
    { to: '/journals', label: 'Журналы' },
    { to: '/contacts', label: 'Контакты' },
    { to: '/about', label: 'Об РЖУ Кунград' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-24 left-4 z-30">
        <button
          onClick={toggleSidebar}
          className="bg-white/10 backdrop-blur-md p-3 rounded-lg text-white hover:bg-white/20 transition-all duration-200"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-20" onClick={toggleSidebar}>
          <div 
            className="fixed top-0 left-0 h-full w-64 bg-white/10 backdrop-blur-md p-6 text-white shadow-lg transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold">Меню</h3>
              <button
                onClick={toggleSidebar}
                className="text-white hover:text-yellow-300 transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <ul className="space-y-4 font-semibold text-lg">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    onClick={toggleSidebar}
                    className="hover:text-yellow-300 transition duration-200 block py-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed top-32 left-24 bg-white/10 backdrop-blur-md rounded-xl p-4 text-white shadow-lg z-20">
        <ul className="space-y-4 font-semibold text-lg">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className="hover:text-yellow-300 transition duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
