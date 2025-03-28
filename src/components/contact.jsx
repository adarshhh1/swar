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
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold border-b border-gray-600 pb-2 mb-10 text-center"
      >
        Contact Us
      </motion.h1>

      {/* Contact Form & Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-900 shadow-lg rounded-lg p-8 w-full transform hover:scale-105 transition"
        >
          <h2 className="text-3xl font-semibold text-center mb-5">
            Get in Touch
          </h2>
          <form onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-black text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-black text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-black text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500"
              required
            ></textarea>

            {error && <p className="text-red-500 text-center">{error}</p>}
            {isSent && (
              <p className="text-green-400 text-center">
                ✅ Message sent successfully!
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-white text-black p-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-900 shadow-lg rounded-lg p-8 w-full transform hover:scale-105 transition"
        >
          <h2 className="text-3xl font-semibold mb-5">Reach Us</h2>
          <p className="text-gray-400 mb-4">
            Have questions? Let's collaborate!
          </p>

          {/* Social Links */}
          <div className="mt-5 flex flex-col space-y-4">
            <a
              href="https://www.facebook.com/anshikachohann"
              className="text-white text-lg hover:text-gray-400 transition"
            >
              🎵 Facebook
            </a>
            <a
              href="mailto:internationalswarmusicalfounda@gmail.com"
              className="text-white text-lg hover:text-gray-400 transition"
            >
              📧 Email
            </a>
            <a
              href="https://www.youtube.com/@swarmusicalfoundationsmfan2633"
              className="text-white text-lg hover:text-gray-400 transition"
            >
              🎻 YouTube
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
