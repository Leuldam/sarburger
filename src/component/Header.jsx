"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/sarback.jpg"
          alt="Restaurant background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-lg italic mb-2"
        >
          Welcome to SAR
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-white text-5xl md:text-6xl font-extrabold mb-4"
        >
          TASTE ROYALE <br /> CUISINE
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="flex space-x-4 justify-center"
        >
          <a
            href="/reservation"
            className="bg-white text-green-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition overflow-hidden"
          >
            Book a Table
          </a>
          <a
            href="/menu"
            className="bg-green-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Discover Menu
          </a>
        </motion.div>
      </div>
    </header>
  );
}
