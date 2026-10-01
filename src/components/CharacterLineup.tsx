"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CharacterLineup() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const characterInfo = [
    { title: "Lookbook Model #7", text: "Classic Jersey Profile" },
    { title: "Master Tailor", text: "Heritage Pipe & Briefcase" },
    { title: "Senior Stylist", text: "Minimalist Trench Silhouette" },
    { title: "Head Designer", text: "Overcoat & Audio Luxe" },
    { title: "Client Advisor", text: "Spectacles & Atelier Book" },
    { title: "Runway Model #7", text: "High-Fashion Basketball Cut" },
    { title: "Couture Apprentice", text: "Oversized Streetwear Hoodie" },
    { title: "Young Gentleman & Dog", text: "Loyal Companion" },
    { title: "Heritage Mascot", text: "Spinning Propeller Cap & Dress" }
  ];

  // Hotspots for each character across the image (in percentage relative to one image copy)
  const hotspots = [
    { left: "3%", width: "9%" },
    { left: "13%", width: "11%" },
    { left: "26%", width: "8%" },
    { left: "36%", width: "9.5%" },
    { left: "47%", width: "8.5%" },
    { left: "57%", width: "7%" },
    { left: "66%", width: "9%" },
    { left: "76%", width: "11%" },
    { left: "88%", width: "9%" },
  ];

  return (
    <div className="w-full relative py-4 sm:py-6 overflow-hidden flex items-center justify-center select-none bg-transparent">
      <div className="max-w-[900px] w-full mx-auto px-4 relative">
        
        {/* Floating Tooltip info on hover */}
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#121212] text-white px-3.5 py-1 rounded-full text-[11px] font-serif shadow-2xl z-40 flex items-center gap-2 border border-[#007a5e]/50"
          >
            <span className="w-2 h-2 rounded-full bg-[#007a5e] animate-ping" />
            <span className="font-bold text-[#007a5e]">{characterInfo[hoveredIndex].title}</span>
            <span className="text-neutral-300">· {characterInfo[hoveredIndex].text}</span>
          </motion.div>
        )}

        {/* Smaller Compact Single Centered Hand-Drawn Character Parade Lineup */}
        <div className="relative w-full max-w-[720px] mx-auto py-1 overflow-x-auto scrollbar-none flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut",
            }}
            className="relative min-w-[550px] w-full flex items-center justify-center"
          >
            {/* The Single Hand-Drawn Sketch Image with Mix-Blend-Multiply */}
            <img
              src="/images/character-lineup-sketch.png"
              alt="Hand-Drawn Character Parade Lineup"
              className="w-full h-auto max-h-[110px] sm:max-h-[130px] object-contain mix-blend-multiply contrast-[1.18] brightness-[0.98]"
            />

            {/* Interactive Hover Hotspot overlays for each character */}
            {hotspots.map((spot, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="absolute top-0 bottom-0 cursor-pointer hover:bg-[#007a5e]/10 transition-colors rounded-lg z-30"
                style={{ left: spot.left, width: spot.width }}
              />
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}


