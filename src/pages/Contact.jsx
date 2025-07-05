import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000";

const Contact = () => {
  const [contact, setContact] = useState(null);
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/contact`)
      .then(res => setContact(res.data))
      .catch(err => console.error("Error loading contact info:", err));
  }, []);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-900 px-4 py-12 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">📬 Get in Touch</h1>

      {contact && (
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-3xl w-full mb-10 space-y-4">
          <div className="text-lg leading-relaxed">
            <p><strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">{contact.email}</a></p>
            <p><strong>Telegram:</strong> <a href={`https://t.me/${contact.telegram.replace("@", "")}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">{contact.telegram}</a></p>
            <p><strong>GitHub:</strong> <a href={`https://github.com/${contact.github}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">{contact.github}</a></p>
            <p><strong>Phone:</strong> {contact.Tel}</p>
            <p className="italic text-gray-600 mt-3">“{contact.message}”</p>
          </div>
        </div>
      )}

      {/* Contact Form */}
      <div className="bg-white shadow-md rounded-lg p-6 md:p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-4">💬 Send us a message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.name}
            onChange={handleInput}
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your message..."
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.message}
            onChange={handleInput}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
        {sent && <p className="text-green-600 mt-4">✅ Message sent (simulated)</p>}
      </div>
    </div>
  );
};

export default Contact;
