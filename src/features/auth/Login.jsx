import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import LogoMain from '../../assets/temir.png';

const Login = () => {
  const [formData, setFormData] = useState({
    username: 'abbos', // static berdm 
    password: 'abbos2009' // static berdm 
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    
    // try {
    //   // ✅ Backend API manzilini o'zingizning URL bilan almashtiring
    //   const response = await fetch('https://your-backend-api.com/api/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });

    //   const data = await response.json();

    //   if (response.ok && data.token && data.role) {
    //     // Token va role ni saqlaymiz
    //     localStorage.setItem('token', data.token);
    //     localStorage.setItem('role', data.role); // 👈 Rolni saqlaymiz

    //     // Masalan, foydalanuvchini dashboard sahifasiga yo'naltirish
    //     window.location.href = '/dashboard';
    //   } else {
    //     alert('Login xatosi: ' + (data.message || 'Noto‘g‘ri foydalanuvchi yoki parol'));
    //   }
    // } catch (error) {
    //   console.error('Login error:', error);
    //   alert('Serverga ulanishda xatolik');
    // } finally {
    //   setIsLoading(false);
    // }

    try {
      //static
      if (formData.username === 'abbos' && formData.password === 'abbos2009') {
        localStorage.setItem('token', 'mock-token');
        localStorage.setItem('role', 'user'); 
        window.location.href = '/'; 
      } else {
        alert('Login yoki parol noto‘g‘ri');
      }
    } catch (error) {
      console.error('Xatolik:', error);
      alert('Xatolik yuz berdi');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img src={LogoMain} alt="Logo" className="mx-auto h-16 w-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-2">
            Войти в систему
          </h2>
          <p className="text-gray-300">
            Введите свои данные, чтобы войти в свою учетную запись
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                name="username"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-600 placeholder-gray-400 text-white bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockClosedIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                className="appearance-none relative block w-full px-3 py-3 pl-10 pr-10 border border-gray-600 placeholder-gray-400 text-white bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Parol"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-800"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Запомни меня
              </label>
            </div>
            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                Забыли пароль?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Войти...
                </div>
              ) : (
                'Авторизоваться'
              )}
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-300">
              Нет аккаунта?{' '}
              <Link
                to="/register"
                className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
