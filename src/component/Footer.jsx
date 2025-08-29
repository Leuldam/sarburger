"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;

    gsap.from(footerRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#3a3a3a] text-gray-200"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-4 md:gap-6 md:px-10">
        {/* Brand + Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h3 className="font-extrabold text-xl tracking-wide">SAR</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Questions, feedback, or just craving a burger? Reach out anytime —
            To reserve a table, call us directly or book online through our
            website.
          </p>
        </motion.div>

        {/* Support Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="space-y-3"
        >
          <h4 className="font-semibold text-white">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">FAQ'S</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="space-y-3"
        >
          <h4 className="font-semibold text-white">Phone</h4>
          <p className="flex items-center gap-2 text-sm">
            <FiPhone className="h-4 w-4" /> +251-966333444
          </p>

          <h4 className="mt-4 font-semibold text-white">Email</h4>
          <p className="flex items-center gap-2 text-sm">
            <FiMail className="h-4 w-4" /> info@sar.com
          </p>
        </motion.div>

        {/* Address + Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="space-y-3"
        >
          <h4 className="font-semibold text-white">Address</h4>
          <p className="flex items-center gap-2 text-sm">
            <FiMapPin className="h-4 w-4" /> Bole, Addis Ababa
          </p>

          <h4 className="mt-4 font-semibold text-white">Follow Us</h4>
          <div className="flex items-center gap-4 text-lg">
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaXTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
          </div>
        </motion.div>
      </div>
      {/* Bottom bar */}
      <div className="border-t border-gray-600 px-6 py-5 text-center text-sm text-gray-400 md:px-10">
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <span className="font-medium tracking-wide">AHUNN TECH</span>
          <span>© 2025 SAR. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
