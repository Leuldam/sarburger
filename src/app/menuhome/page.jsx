"use client";

import { useState, useEffect } from "react";

export default function MenuHome() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">

      {/* Hero Section */}
      <section
       
        className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-6"
        style={{ backgroundImage: "url('/sarback.jpg')" }} // replace with your image
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-4">Menu</h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed">
            Welcome to SAR — Addis Ababa’s Home of Bold, Handcrafted Burgers and
            Flavor Driven Comfort Food. Every bite is a tribute to quality,
            creativity, and the joy of eating well.
          </p>
          <div className="mt-8 animate-bounce">
            <a href="#content">
              <span className="text-3xl">⌄</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
