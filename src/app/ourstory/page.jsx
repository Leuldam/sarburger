"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section
      id="ourstory"
      className="px-6 md:px-20 py-20 bg-white text-center"
    >
      {/* Small Title */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-gray-600 text-sm uppercase tracking-widest mb-3"
      >
        The SAR Way
      </motion.p>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-bold mb-6"
      >
        OUR STORY
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-3xl mx-auto text-gray-700 leading-relaxed mb-12 px-4"
      >
        SAR was born in Addis with one mission: serve burgers that hit different.
        Locally sourced, grilled to perfection, and stacked with flavor — every
        bite is a nod to quality, comfort, and culture. This is our story — and
        every bite is an invitation to be part of it.
      </motion.p>

      {/* Images Side by Side */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.img
          src="/sar1.jpg"
          alt="Restaurant Interior"
          className="rounded-lg shadow-lg w-full object-cover"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="/sar2.jpg"
          alt="Burger"
          className="rounded-lg shadow-lg w-full object-cover"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Signature */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-12 text-lg font-medium tracking-wide"
      >
        JOSEPH ABEL
      </motion.p>
    </section>
  );
}
