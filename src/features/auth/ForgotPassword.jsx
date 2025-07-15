// src/features/auth/ForgotPassword.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import LogoMain from '../../assets/temir.png';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulyatsiya qilish
    setTimeout(() => {
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img src={LogoMain} alt="Logo" className="mx-auto h-16 w-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-2">
            Восстановить пароль
          </h2>
          <p className="text-gray-300">Введите email, чтобы сбросить пароль</p>
        </div>

        {!submitted ? (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите ваш email"
                className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-600 placeholder-gray-400 text-white bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            >
              Отправить ссылку на восстановление
            </button>

            <div className="text-center">
              <Link to="/login" className="text-blue-400 hover:text-blue-300 text-sm">
                Назад ко входу
              </Link>
            </div>
          </form>
        ) : (
          <div className="text-center text-green-400">
            <p className="mb-4">Если email найден, ссылка была отправлена!</p>
            <Link to="/login" className="text-blue-400 hover:text-blue-300 text-sm">
              Назад ко входу
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
