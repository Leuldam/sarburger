"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Drop this component anywhere in your Next.js app (e.g., app/about/page.tsx or a section on your homepage)
export default function AboutUsSection() {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Fade + slight rise on paragraphs when the section scrolls into view
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".about-fade");
      gsap.from(items, {
        opacity: 0,
        y: 16,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Subtle parallax on the image card on scroll
      if (imageWrapRef.current) {
        gsap.fromTo(
          imageWrapRef.current,
          { y: 24 },
          {
            y: -24,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#232B23] text-white"
      aria-labelledby="about-heading"
    >
      {/* max width container */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-20 md:grid-cols-2 md:gap-14 md:px-8 lg:gap-20">
        {/* Left: Title + Copy */}
        <div className="about-fade">
          <motion.h2
            id="about-heading"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6 font-serif text-4xl font-semibold tracking-wider md:text-5xl"
          >
            ABOUT US
          </motion.h2>

          <div className="space-y-4 text-sm leading-relaxed text-gray-200 md:text-base">
            <p className="about-fade">
              <span className="font-medium">Burgers. Culture. Craft.</span>
            </p>
            <p className="about-fade">
              SAR was born in Addis Ababa with one mission — to redefine what a burger can be. We’re not just stacking patties and buns; we’re building flavor experiences that blend Ethiopia’s warmth and hospitality with bold, global inspiration.
            </p>
            <p className="about-fade">
              From day one, we’ve believed that great food starts with great ingredients. That’s why we source fresh, local produce, handcraft our sauces, and grill every patty to perfection. Each burger is a balance of texture, taste, and creativity — whether it’s a classic done right or a daring new flavor you didn’t know you needed.
            </p>
            <p className="about-fade">
              But SAR is more than what’s on the plate. It’s the energy of friends gathered around a table, the aroma of the grill, and the pride of serving something we truly stand behind. We’re here for the quick lunch breaks, the late‑night cravings, and the celebrations worth remembering.
            </p>
          </div>
        </div>

        {/* Right: Image Card */}
        <div ref={imageWrapRef} className="about-fade flex items-start justify-center md:justify-end">
          <motion.figure
            initial={{ opacity: 0, scale: 0.96, rotate: -0.6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-black/10 shadow-2xl ring-1 ring-white/10"
          >
            <img
              src="/sar2.jpg" // replace with your actual image path
              alt="SAR interior with cozy seating, warm brick walls, and greenery"
              className="h-full w-full object-cover"
            />
            {/* Soft vignette overlay for the same vibe as the reference */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/10" />
          </motion.figure>
        </div>
      </div>

      {/* Decorative underline flourish under the heading on large screens */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="pointer-events-none absolute left-4 top-24 hidden h-[2px] w-40 origin-left bg-white/60 md:left-8 md:block lg:left-[calc(50%-36rem)]"
      />
    </section>
  );
}