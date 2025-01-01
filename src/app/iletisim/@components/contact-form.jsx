"use client";

import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState(""); // New state for the status message
  const [isError, setIsError] = useState(false); // State to track error or success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/server", {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });
      if (response.status === 200) {
        setStatusMessage(
          "Mesajınız alınmıştır, en kısa sürede size geri döneceğiz."
        );
        setIsError(false);
      } else {
        setStatusMessage(
          "Bir hata oluştu, lütfen daha sonra tekrar deneyiniz."
        );
        setIsError(true);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatusMessage("Bir hata oluştu, lütfen daha sonra tekrar deneyiniz.");
      setIsError(true);
    }
  };

  return (
    <div className="w-full md:w-1/2 flex-col flex items-center p-6 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-white mb-2">
              İsminiz
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-400 text-white py-2 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-white mb-2">
              Soyisminiz opsiyonel değil
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-400 text-white py-2 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-white mb-2">
              E-posta
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-400 text-white py-2 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-white mb-2">
              Telefon Numarası
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-400 text-white py-2 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-white mb-2">
            Kısa bir mesaj bırakabilirsiniz istersen
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full bg-transparent border-b border-gray-400 text-white py-2 focus:outline-none"
          ></textarea>
        </div>

        <div className="w-full flex justify-end pt-5">
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2 px-6 rounded-full w-full sm:w-[200px] hover:opacity-90 transition-opacity"
          >
            Gönder
          </button>
        </div>
      </form>

      {statusMessage && (
        <p
          className={`mt-4 text-center ${
            isError ? "text-red-500" : "text-green-500"
          }`}
        >
          {statusMessage}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
