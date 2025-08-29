"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";

export default function ReservationPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    persons: "1 Person",
    date: "",
    time: "07:00 PM",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    // Auto close popup in 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#111] text-white px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-2">Book A Table</h1>
      <p className="text-gray-300 mb-10 text-center">
        Booking request <span className="font-semibold">+251 966334444</span> or fill out the order form
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-[#1a1a1a] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="bg-[#1a1a1a] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-[#1a1a1a] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <div className="relative">
          <FaUser className="absolute left-3 top-3 text-gray-400" />
          <select
            name="persons"
            value={formData.persons}
            onChange={handleChange}
            className="bg-[#1a1a1a] pl-10 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1}>{i + 1} Person{ i > 0 && "s" }</option>
            ))}
          </select>
        </div>

        <div className="relative">
          <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="bg-[#1a1a1a] pl-10 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="relative">
          <FaClock className="absolute left-3 top-3 text-gray-400" />
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="bg-[#1a1a1a] pl-10 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option>06:00 PM</option>
            <option>07:00 PM</option>
            <option>08:00 PM</option>
            <option>09:00 PM</option>
          </select>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="col-span-1 md:col-span-3 bg-yellow-400 text-black font-semibold py-3 rounded-md shadow-lg hover:bg-yellow-500 transition"
        >
          Book a Table
        </motion.button>
      </form>

      <p className="mt-6 text-gray-400">Thank you for choosing us!</p>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
          >
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              className="bg-white text-black rounded-lg p-8 text-center shadow-2xl max-w-sm w-full"
            >
              <h2 className="text-2xl font-bold mb-2">🎉 Reservation Confirmed!</h2>
              <p className="text-gray-700 mb-1">Thank you, <span className="font-semibold">{formData.name}</span>!</p>
              <p className="text-gray-700 mb-1">
                {formData.persons} at {formData.time}, {formData.date}
              </p>
              <p className="text-gray-700">We will contact you at {formData.phone} if needed.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
