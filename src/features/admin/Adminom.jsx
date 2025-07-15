import React, { useState } from 'react';

const Adminom = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправлено:', form);
    alert("✅ Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#85e5e9] to-[#145858] text-white px-4 py-10">
      <div className="max-w-[800px] mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10">
          Связаться с админом
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-lg font-medium">Ваше имя</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none"
              placeholder="name"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium">Email адрес</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none"
              placeholder="example@email.com"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-medium">Ваше сообщение</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none resize-none"
              placeholder="message"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#1A3E3E] hover:bg-[#145858] transition px-8 py-3 rounded-xl font-semibold text-white shadow-md"
            >
              Отправить сообщение
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adminom;
