"use client";

import { motion } from "framer-motion";

export default function EditorialQuote() {
  return (
    <section className="py-28 bg-editorial-grid relative border-b border-neutral-300 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Top Minimal Thumbnail Cards (Matching Reference Image 2) */}
        <div className="flex justify-between items-start mb-16 relative">
          
          {/* Thumbnail 1 Left */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-28 sm:w-36 bg-white border border-neutral-300 p-2 shadow-md group cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=400"
              alt="Suit Lookbook"
              className="w-full h-32 sm:h-40 object-cover object-top border border-neutral-200 transition-all duration-500 group-hover:scale-105"
            />
            <p className="font-editorial text-[9px] uppercase tracking-wider text-neutral-800 mt-1.5 font-bold">
              Hot Right Now · Groom Wear
            </p>
          </motion.div>

          {/* Author Badge Top Center */}
          <div className="text-center">
            <span className="font-editorial text-xs font-bold uppercase tracking-widest text-[#121212] block">
              LUCKY MENS WEAR
            </span>
            <span className="font-cormorant italic text-xs text-[#007a5e] block">
              Founder & Master Stylist of Dabra Couture
            </span>
          </div>

          {/* Thumbnail 2 Right */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-28 sm:w-36 bg-white border border-neutral-300 p-2 shadow-md group cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
              alt="Dabra Runway"
              className="w-full h-32 sm:h-40 object-cover object-top border border-neutral-200 transition-all duration-500 group-hover:scale-105"
            />
            <p className="font-editorial text-[9px] uppercase tracking-wider text-neutral-800 mt-1.5 font-bold">
              Wedding Gala 2026
            </p>
          </motion.div>
        </div>

        {/* Giant Headline Typography with Hollow Outline Effect (Matching Image 2) */}
        <div className="text-center py-6 relative">
          
          {/* Line 1: Solid Black Serif */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#121212] font-bold tracking-tight leading-tight"
          >
            Couture, style, and fit
          </motion.h2>

          {/* Line 2: Dual Tone & Semi-Hollow Stroke */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#121212] font-bold tracking-tight leading-tight my-2"
          >
            share one truth
          </motion.h2>

          {/* Line 3: Giant Hollow Outline Serif Text */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-extrabold tracking-tighter leading-none"
            style={{
              WebkitTextStroke: "2.5px #121212",
              color: "transparent",
            }}
          >
            everything changes
          </motion.h2>

          {/* Handwritten Annotations Layer */}
          <div className="absolute inset-0 pointer-events-none font-handwritten text-neutral-400 text-2xl select-none">
            <span className="absolute top-[10%] left-[15%]">Rae8</span>
            <span className="absolute top-[35%] left-[22%]">b3</span>
            <span className="absolute bottom-[25%] left-[10%]">Bbs</span>
            <span className="absolute bottom-[40%] right-[18%]">ab5</span>
            <span className="absolute top-[20%] right-[15%]">Re8</span>
          </div>

          {/* Overlaid Floating Banknote / Fabric Swatch Graphic with Water Ripple Distortion */}
          <motion.div
            initial={{ rotate: -12, y: 20 }}
            whileInView={{ rotate: 18, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 right-4 md:right-16 w-36 sm:w-48 md:w-64 cursor-pointer group shadow-2xl rounded"
          >
            <img
              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=600"
              alt="Fabric Swatch Overlay"
              className="w-full h-24 sm:h-32 object-cover border-2 border-white rounded shadow-2xl rotate-12 transition-all duration-500 group-hover:scale-105"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
