import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon, EnvelopeIcon, LockClosedIcon, UserIcon, PhoneIcon } from '@heroicons/react/24/outline';
import LogoMain from '../../assets/temir.png';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Ввод имени обязателен';
    if (!formData.lastName.trim()) newErrors.lastName = 'Фамилия обязательна';
    if (!formData.email.trim()) {
      newErrors.email = 'Требуется адрес электронной почты.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Пожалуйста, введите действительный адрес электронной почты.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Требуется номер телефона';
    if (!formData.password) {
      newErrors.password = 'Требуется ввод пароля.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен быть длиной не менее 6 символов.';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Требуется подтверждение пароля.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпали.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch('https://your-api.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Ro‘yxatdan o‘tishda xatolik yuz berdi.');
      }

      // ✅ Role, token va userni saqlash
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.user.role);

      console.log('Ro‘yxatdan o‘tish muvaffaqiyatli:', data);

      // Kerak bo‘lsa sahifani o‘zgartiring, masalan navigate('/profile');

    } catch (error) {
      console.error('Xatolik:', error.message);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img src={LogoMain} alt="Logo" className="mx-auto h-16 w-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-2">Зарегистрироваться</h2>
          <p className="text-gray-300">Введите свои данные, чтобы создать новую учетную запись.</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* First and Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  name="firstName"
                  type="text"
                  required
                  className={`appearance-none relative block w-full px-3 py-3 pl-10 border placeholder-gray-400 text-white bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.firstName ? 'border-red-500' : 'border-gray-600'}`}
                  placeholder="Имя"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>}
              </div>
              <div className="relative">
                <input
                  name="lastName"
                  type="text"
                  required
                  className={`appearance-none relative block w-full px-3 py-3 border placeholder-gray-400 text-white bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.lastName ? 'border-red-500' : 'border-gray-600'}`}
                  placeholder="Фамилия"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                name="email"
                type="email"
                required
                className={`appearance-none relative block w-full px-3 py-3 pl-10 border placeholder-gray-400 text-white bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="Email адресс"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <PhoneIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                name="phone"
                type="tel"
                required
                className={`appearance-none relative block w-full px-3 py-3 pl-10 border placeholder-gray-400 text-white bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.phone ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="Teлефон номер"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
            </div>

            {/* Password */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockClosedIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                className={`appearance-none relative block w-full px-3 py-3 pl-10 pr-10 border placeholder-gray-400 text-white bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.password ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-gray-300" /> : <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-300" />}
              </button>
              {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockClosedIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                required
                className={`appearance-none relative block w-full px-3 py-3 pl-10 pr-10 border placeholder-gray-400 text-white bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="Подтвердите пароль"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-gray-300" /> : <EyeIcon className="h-5 w-5 text-gray-400 hover:text-gray-300" />}
              </button>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>}
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center">
            <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-800" />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
              <span>Я </span>
              <a href="#" className="text-blue-400 hover:text-blue-300">Условия эксплуатации</a>
              <span> va </span>
              <a href="#" className="text-blue-400 hover:text-blue-300">политика конфиденциальности</a>
              <span> я встретил</span>
            </label>
          </div>

          {/* Submit */}
          <div>
            <button type="submit" disabled={isLoading} className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200">
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Зарегистрироваться...
                </div>
              ) : 'Регистрация'}
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-300">
              У вас уже есть аккаунт?{' '}
              <Link to="/login" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
                Авторизоваться
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
