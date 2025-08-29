"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaChevronDown } from "react-icons/fa";

export default function ReservationHome() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/sarback.jpg')",
      }}
    >
      

      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        className="flex flex-col items-center justify-center h-screen text-center text-white bg-black/40 px-4"
      >
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-sm md:text-lg tracking-widest uppercase"
        >
          Book Your Table
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 leading-tight"
        >
          Reservation
        </motion.h1>


        {/* Scroll Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 text-2xl md:text-3xl text-white cursor-pointer"
        >
          <FaChevronDown />
        </motion.div>
      </motion.div>
    </div>
  );
}