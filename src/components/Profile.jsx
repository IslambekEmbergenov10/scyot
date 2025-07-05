import React, { useEffect, useState } from 'react';
import Profile from './Profile';

const Profil = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://your-backend.com/api/user-profile')
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error('Xatolik:', err));
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#85e5e9] to-[#145858] text-white px-4 py-10">
      <div className="max-w-[800px] mx-auto bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Profil Ma'lumotlari
        </h1>

        {user ? (
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Rasm */}
            <img
              src={user.photo || 'https://via.placeholder.com/150'}
              alt="Profil rasmi"
              className="w-40 h-40 rounded-full object-cover border-4 border-white"
            />

            {/* Ma’lumotlar */}
            <div className="space-y-2 text-lg">
              <p><span className="font-bold">Ismi:</span> {user.name}</p>
              <p><span className="font-bold">Email:</span> {user.email}</p>
              <p><span className="font-bold">Lavozimi:</span> {user.role}</p>
              <p><span className="font-bold">Telefon:</span> {user.phone}</p>
            </div>
          </div>
        ) : (
          <p className="text-center text-white/80">Yuklanmoqda...</p>
        )}
      </div>
    </div>
  );
};

export default Profil;
