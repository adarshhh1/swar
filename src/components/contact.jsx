import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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
    <div className="min-h-screen bg-[#F5DEB3] text-black">
      {/* Hero Section */}
      <div className="text-center py-16 bg-[#F5DEB3]">
        <h1 className="text-4xl font-bold text-brown-700">Get in Touch</h1>
        <p className="mt-2 text-lg text-brown-500">
          Have questions or feedback? We’d love to hear from you!
        </p>
      </div>

      {/* Contact Form & Details */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white text-black shadow-xl rounded-lg p-8 transition transform hover:scale-105">
          <h2 className="text-3xl font-semibold text-center text-brown-700 mb-5">
            Contact Us
          </h2>
          <form onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-400"
              required
            ></textarea>

            {error && <p className="text-red-500 text-center">{error}</p>}
            {isSent && (
              <p className="text-green-600 text-center">
                ✅ Message sent successfully!
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-[#8B4513] text-white p-3 rounded-lg hover:bg-[#A0522D] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white text-black shadow-xl rounded-lg p-8 transition transform hover:scale-105">
          <h2 className="text-3xl font-semibold text-brown-700 mb-5">
            Reach Us
          </h2>
          <p className="text-brown-600 mb-4">
            Whether you have inquiries about events, collaborations, or just
            want to chat about music, we are here for you! Let's create
            something extraordinary together. Reach out to explore partnership
            opportunities, sponsorships, and event collaborations.
          </p>
          <p className="text-brown-600 mb-4">
            We believe in the power of music to bring people together. If you're
            an artist, sponsor, or event organizer, let's connect and create
            something magical. Partner with us to make an impact in the world of
            classical music!
          </p>

          {/* Social Media Links */}
          <div className="mt-5 flex flex-col space-y-4">
            <a
              href="https://www.facebook.com/anshikachohann"
              className="text-brown-700 text-lg hover:text-brown-500 transition transform hover:scale-110"
            >
              🎵 Facebook
            </a>
            <a
              href="mailto:internationalswarmusicalfounda@gmail.com"
              className="text-brown-700 text-lg hover:text-brown-500 transition transform hover:scale-110"
            >
              📧 Email
            </a>
            <a
              href="https://www.youtube.com/@swarmusicalfoundationsmfan2633"
              className="text-brown-700 text-lg hover:text-brown-500 transition transform hover:scale-110"
            >
              🎻 YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
