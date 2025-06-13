import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSent(false);
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required!");
      return;
    }

    const serviceID = "service_6ttszss";
    const templateID = "template_olj2c0l";
    const publicKey = "sI0dWKwe1S2yy9JQ6";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setError("Failed to send message. Please try again."));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 text-gray-900 pt-32 pb-20 px-2 flex flex-col items-center">
      {/* Large Icon Overlapping Cards */}
      <div className="relative flex justify-center mb-0" style={{ zIndex: 2 }}>
        <div className="w-20 h-20 bg-purple-100 border-4 border-white rounded-full flex items-center justify-center shadow text-5xl absolute -top-10 md:static md:top-0 md:mb-0" style={{ left: '50%', transform: 'translateX(-50%)' }}>
          ✉️
        </div>
      </div>
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-purple-700 mt-12 mb-4 tracking-tight uppercase"
      >
        Contact Us
      </motion.h1>
      <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto text-lg">We'd love to hear from you! Fill out the form or reach us directly.</p>
      {/* Contact Form & Info */}
      <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 max-w-4xl w-full items-start mt-2">
        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative bg-white border border-purple-200 shadow-xl rounded-2xl p-0 flex flex-col min-w-0"
        >
          {/* Accent Bar */}
          <div className="h-2 w-full bg-purple-400 rounded-t-2xl" />
          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-purple-700 text-center mb-4">Send a Message</h2>
            <form onSubmit={sendEmail} className="space-y-5">
              {/* Floating Labels */}
              <div className="relative mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full p-3 bg-white border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 text-gray-900 placeholder-transparent"
                  placeholder="Your Name"
                  autoComplete="off"
                  required
                />
                <label htmlFor="name" className="absolute left-3 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-purple-700 bg-white px-1 pointer-events-none">Your Name</label>
              </div>
              <div className="relative mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full p-3 bg-white border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 text-gray-900 placeholder-transparent"
                  placeholder="Your Email"
                  autoComplete="off"
                  required
                />
                <label htmlFor="email" className="absolute left-3 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-purple-700 bg-white px-1 pointer-events-none">Your Email</label>
              </div>
              <div className="relative mt-2">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full p-3 bg-white border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-400 text-gray-900 placeholder-transparent"
                  placeholder="Your Message"
                  autoComplete="off"
                  required
                ></textarea>
                <label htmlFor="message" className="absolute left-3 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-purple-700 bg-white px-1 pointer-events-none">Your Message</label>
              </div>
              {error && <p className="text-red-500 text-center">{error}</p>}
              {isSent && <p className="text-green-600 text-center">✅ Message sent successfully!</p>}
              <button
                type="submit"
                className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
        {/* Divider with OR on desktop */}
        <div className="hidden md:flex flex-col items-center justify-center min-w-[60px]">
          <div className="w-10 h-10 bg-purple-100 border-2 border-purple-200 rounded-full flex items-center justify-center shadow text-base font-bold text-purple-600 mb-2 opacity-70">OR</div>
        </div>
        {/* Contact Information Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative bg-white border border-purple-200 shadow-xl rounded-2xl p-0 flex flex-col min-w-0"
        >
          {/* Accent Bar */}
          <div className="h-2 w-full bg-purple-400 rounded-t-2xl" />
          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-purple-700 mb-4 text-center">Reach Us Directly</h2>
            <div className="flex flex-col space-y-5">
              <a
                href="https://www.facebook.com/anshikachohann"
                className="flex items-center space-x-4 group"
                target="_blank" rel="noopener noreferrer"
              >
                <span className="w-10 h-10 bg-purple-100 border-2 border-purple-200 rounded-full flex items-center justify-center text-xl group-hover:bg-purple-200 transition">🎵</span>
                <span className="text-base font-medium text-purple-700 group-hover:text-purple-900 transition">Facebook</span>
              </a>
              <a
                href="mailto:internationalswarmusicalfounda@gmail.com"
                className="flex items-center space-x-4 group"
              >
                <span className="w-10 h-10 bg-purple-100 border-2 border-purple-200 rounded-full flex items-center justify-center text-xl group-hover:bg-purple-200 transition">📧</span>
                <span className="text-base font-medium text-purple-700 group-hover:text-purple-900 transition">Email</span>
              </a>
              <a
                href="https://www.youtube.com/@swarmusicalfoundationsmfan2633"
                className="flex items-center space-x-4 group"
                target="_blank" rel="noopener noreferrer"
              >
                <span className="w-10 h-10 bg-purple-100 border-2 border-purple-200 rounded-full flex items-center justify-center text-xl group-hover:bg-purple-200 transition">🎻</span>
                <span className="text-base font-medium text-purple-700 group-hover:text-purple-900 transition">YouTube</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
