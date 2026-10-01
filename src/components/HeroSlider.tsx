"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSlider() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-editorial-grid pt-28 pb-16 flex flex-col items-center justify-between overflow-hidden select-none border-b border-neutral-300"
    >
      {/* Ultra HD Full Width & Height Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=90&w=2400"
          alt="Crystal Clear HD Suit Background"
          className="w-full h-full object-cover object-center brightness-[0.85] contrast-[1.1]"
        />
        {/* Dark High-Contrast Gradient Overlay for 100% Typography Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
      </div>

      {/* Editorial Vertical Grid Lines Overlay */}
      <div className="absolute inset-0 max-w-[1400px] mx-auto pointer-events-none grid grid-cols-12 h-full z-0">
        {[...Array(13)].map((_, i) => (
          <div
            key={i}
            className="h-full border-r border-white/10"
            style={{ gridColumn: i === 0 ? "1" : "auto" }}
          />
        ))}
      </div>

      {/* Top Subtitle */}
      <div className="relative z-10 text-center mt-6 px-4">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-cormorant italic text-xl sm:text-3xl text-emerald-300 font-semibold tracking-wider drop-shadow-lg"
        >
          The Invisible Rules of Gentleman Elegance
        </motion.p>
      </div>

      {/* Main Giant Staggered Typography Box */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 my-auto flex flex-col items-center justify-center">
        
        <div className="relative w-full text-center leading-none">
          
          {/* Top Line: LUCKY (Crystal Clear White with Emerald Glow) */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="font-editorial text-[18vw] md:text-[15vw] font-extrabold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]"
          >
            LUCKY
          </motion.h1>

          {/* Bottom Line: MENS WEAR (Crystal Clear White/Emerald Accent) */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-editorial text-[18vw] md:text-[14vw] font-extrabold text-emerald-400 tracking-tighter uppercase leading-[0.85] drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]"
          >
            MENS WEAR
          </motion.h1>

        </div>
      </div>
    </section>
  );
}
