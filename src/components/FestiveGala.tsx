"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FestiveGala() {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 6,
    minutes: 30,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="festive" className="relative py-24 overflow-hidden bg-cream-50">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-maroon-900/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Side Info & Timer */}
        <div className="lg:w-1/2">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold-accent font-cursive text-3xl mb-3"
          >
            Wedding & Festive Gala
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-maroon-800 tracking-wide uppercase mb-6 leading-tight"
          >
            Groom & <br />
            Royal{" "}
            <span className="text-gold-accent font-cursive normal-case text-5xl md:text-6xl">
              Couture 2026
            </span>
          </motion.h2>

          <p className="text-maroon-700/80 font-sans text-base md:text-lg mb-10 max-w-md">
            Unveiling our newest wedding edition suits, royal groom sherwanis, and Indo-Western sets at Lucky Mens Wear Dabra. Book your personalized fitting trial today.
          </p>

          {/* Countdown Clock Grid */}
          <div className="flex space-x-3 sm:space-x-6 mb-12">
            {[
              { label: "Days", val: timeLeft.days },
              { label: "Hours", val: timeLeft.hours },
              { label: "Minutes", val: timeLeft.minutes },
              { label: "Seconds", val: timeLeft.seconds },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border border-gold-accent/40 flex items-center justify-center text-2xl sm:text-3xl font-serif text-maroon-800 shadow-xl font-bold">
                  {item.val.toString().padStart(2, "0")}
                </div>
                <p className="text-[10px] uppercase tracking-widest mt-2 text-maroon-600 font-serif font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#visit"
            className="luxury-button inline-block bg-maroon-800 text-white hover:bg-gold-accent hover:text-black border border-gold-accent px-8 py-3.5 text-xs font-serif font-bold uppercase tracking-[0.2em] shadow-xl transition-all"
          >
            Book Fitting Trial
          </a>
        </div>

        {/* Right Side Showcase Frame */}
        <div className="lg:w-1/2 relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200"
              alt="Royal Groom Sherwani"
              className="w-full h-[450px] sm:h-[550px] object-cover border-[12px] border-white shadow-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src =
                  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1200";
              }}
            />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-6 sm:-bottom-10 sm:-left-10 bg-maroon-900 border border-gold-accent/40 p-6 sm:p-8 shadow-2xl max-w-xs"
            >
              <h4 className="text-gold-accent font-serif text-lg sm:text-xl mb-1 uppercase tracking-widest">
                Groom Wedding Package
              </h4>
              <p className="text-cream-100/70 text-xs sm:text-sm font-sans">
                Complete Sherwani, Safa & Dupatta sets starting at ₹25,000
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
