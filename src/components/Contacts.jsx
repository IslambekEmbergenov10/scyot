import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccess("Сообщение успешно отправлено!");
        setForm({ name: '', email: '', message: '' });
      } else {
        setSuccess("Произошла ошибка при отправке.");
      }
    } catch (error) {
      console.error(error);
      setSuccess("Ошибка сервера.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white px-4 py-10">
      <div className="max-w-[1180px] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">Свяжитесь с нами</h2>

        <div className="mb-8 text-gray-200 text-lg">
          <p><strong>📞 Телефон:</strong> +998 90 123 45 67</p>
          <p><strong>📧 Email:</strong> info@namuna.uz</p>
          <p><strong>📍 Адрес:</strong> Республика Каракалпакстан, г. Кунград, ул. Узбекистанская, 156</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 mb-10">
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Адрес электронной почты"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Сообщение"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="p-3 border border-gray-300 rounded text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            {loading ? 'Отправка...' : 'Отправить'}
          </button>
        </form>

        {success && (
          <p className={`text-center font-semibold ${success.includes('успешно') ? 'text-green-400' : 'text-red-400'}`}>
            {success}
          </p>
        )}

        <div className="mb-10 text-gray-300">
          <p className="font-semibold">Следите за обновлениями в социальных сетях:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><a href="https://t.me/kungradrju4" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer">Telegram</a></li>
            <li><a href="https://instagram.com/islambek.qr" className="text-pink-400 hover:underline" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://facebook.com/uzbekistanrailways" className="text-blue-300 hover:underline" target="_blank" rel="noreferrer">Facebook</a></li>
          </ul>
        </div>

        <div className="w-full h-64">
          <iframe
            title="Наш адрес"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11965.770850535026!2d59.6200659!3d43.0709406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9b6a2b4e64ad%3A0x7c3f4819db0aaf67!2zS3VuZ3JhZCwgS2FyYWthbHBha3N0YW4sIFV6YmVraXN0YW4!5e0!3m2!1sru!2s!4v1720609999999!5m2!1sru!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded shadow"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
