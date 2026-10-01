"use client";

import { motion } from "framer-motion";
import { Sparkles, Crown, Award, Scissors, ShieldCheck, Gem } from "lucide-react";

export default function BrandMarquee() {
  const brandList1 = [
    { text: "LUCKY MENS WEAR", badge: "BESPOKE" },
    { text: "ROYAL SHERWANI HOUSE", badge: "BRIDAL" },
    { text: "RAYMOND LUXURY SUITING", badge: "PREMIUM" },
    { text: "NEW COLLECTION DABRA", badge: "COUTURE" },
    { text: "HANDMADE EMBROIDERY", badge: "HERITAGE" },
    { text: "CELEBRATION TUXEDOS", badge: "EXCLUSIVE" },
    { text: "SILK KURTA APPAREL", badge: "FESTIVE" },
    { text: "STUDIO DABRA LUXE", badge: "CUSTOM" },
  ];

  const brandList2 = [
    { text: "CUSTOM FIT TRIAL IN DABRA", icon: Scissors },
    { text: "100% HANDCRAFTED FABRICS", icon: Gem },
    { text: "GWALIOR M.P. HERITAGE STORE", icon: Crown },
    { text: "MASTER TAILOR CRAFTSMANSHIP", icon: Award },
    { text: "PREMIUM WEDDING CONCIERGE", icon: ShieldCheck },
    { text: "INSTAGRAM @NEW_COLLECTION_DABRA", icon: Sparkles },
  ];

  // Repeat arrays for smooth infinite loop
  const repeatedBrands1 = [...brandList1, ...brandList1, ...brandList1, ...brandList1];
  const repeatedBrands2 = [...brandList2, ...brandList2, ...brandList2, ...brandList2];

  return (
    <section className="relative w-full bg-editorial-grid bg-[#f2f1ed] text-[#121212] py-8 md:py-12 border-t border-b border-neutral-300 overflow-hidden select-none">
      {/* Side Vignette Fades matching page background */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#f2f1ed] via-[#f2f1ed]/90 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#f2f1ed] via-[#f2f1ed]/90 to-transparent z-20 pointer-events-none" />

      <div className="space-y-4 md:space-y-6 relative z-10">
        
        {/* ROW 1: GIANT BRAND MARQUEE (Right to Left Ultra-Slow Smooth Scroll) */}
        <div className="flex overflow-hidden whitespace-nowrap z-10 relative group">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 450,
            }}
            className="flex items-center gap-10 md:gap-20 shrink-0 group-hover:[animation-play-state:paused]"
          >
            {repeatedBrands1.map((brand, idx) => (
              <div key={idx} className="flex items-center gap-10 md:gap-16 group/item cursor-default">
                <span className="font-editorial text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#121212] group-hover/item:text-[#007a5e] transition-colors duration-300">
                  {brand.text}
                </span>
                
                <span className="text-[#007a5e] font-serif text-xl sm:text-2xl select-none opacity-70">
                  ✦
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2: ELEGANT SECONDARY MARQUEE (Left to Right Reverse Ultra-Slow Scroll) */}
        <div className="flex overflow-hidden whitespace-nowrap z-10 relative pt-3 border-t border-neutral-300/80 group">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 500,
            }}
            className="flex items-center gap-12 md:gap-20 shrink-0 group-hover:[animation-play-state:paused]"
          >
            {repeatedBrands2.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="flex items-center gap-4 text-neutral-700 font-serif text-sm sm:text-base md:text-lg tracking-widest uppercase hover:text-[#007a5e] transition-colors">
                  <IconComponent className="w-4 h-4 text-[#007a5e] shrink-0" />
                  <span>{item.text}</span>
                  <span className="text-neutral-400 font-sans font-light">|</span>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
