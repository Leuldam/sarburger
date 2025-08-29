"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Link from "next/link";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (id) => {
    gsap.to(window, { duration: 1, scrollTo: id, ease: "power2.inOut" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-green-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-white bg-green-800 font-post-no-bills font-bold text-xl">SAR</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><button onClick={() => handleSmoothScroll("#home")}>Home</button></li>
          <li><button onClick={() => handleSmoothScroll("/menu")}>Menu</button></li>
          <li><button onClick={() => handleSmoothScroll("#about")}>About Us</button></li>
          <li><button onClick={() => handleSmoothScroll("#contact")}>Contact</button></li>
        </ul>

        {/* Right Button (desktop) */}
        <div className="hidden md:block">
          <button
            onClick={() => handleSmoothScroll("/reservation")}
            className="bg-green-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Find a Table
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white text-2xl focus:outline-none"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-green-900 text-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>

        <ul className="flex flex-col space-y-6 px-6 text-lg font-medium">
          <li><button onClick={() => handleSmoothScroll("#home")}>Home</button></li>
          <li><button onClick={() => handleSmoothScroll("#menu")}>Menu</button></li>
          <li><button onClick={() => handleSmoothScroll("#about")}>About Us</button></li>
          <li><button onClick={() => handleSmoothScroll("#contact")}>Contact</button></li>
        </ul>

        <div className="px-6 mt-6">
          <button
            onClick={() => handleSmoothScroll("#book")}
            className="block w-full bg-green-800 text-center text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Find a Table
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </nav>
  );
}
