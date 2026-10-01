"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/boutiqueData";

export default function CherishedGuests() {
  return (
    <section className="py-20 bg-editorial-grid relative border-b border-neutral-300 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Editorial Header - Exact Screenshot Match */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif italic text-lg sm:text-xl text-[#121212] mb-1 tracking-wide"
          >
            Hearts speak loudest
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#121212] font-normal tracking-wide uppercase"
          >
            OUR CHERISHED GUESTS
          </motion.h2>
        </div>

        {/* Testimonial Cards Grid - Exact Reference Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="relative bg-white p-7 sm:p-9 shadow-md border border-neutral-300 border-t-4 border-t-[#121212] group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header row: Avatar + Name + 99 Quote Mark */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-neutral-300 shadow-sm shrink-0"
                    />
                    <div>
                      <h3 className="text-[#121212] font-editorial font-bold uppercase tracking-wider text-base sm:text-lg">
                        {item.name}
                      </h3>
                      <p className="text-neutral-500 font-serif italic text-xs sm:text-sm mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Stylized Double Quote '99' Icon */}
                  <span className="font-editorial text-4xl sm:text-5xl font-bold text-[#121212] leading-none select-none tracking-tighter opacity-95">
                    99
                  </span>
                </div>

                {/* 5 Solid Black Stars */}
                <div className="flex space-x-1 mb-5 text-[#121212]">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" className="text-[#121212]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-neutral-800 font-sans leading-relaxed text-sm sm:text-base">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-3 border-t border-neutral-200 flex justify-between items-center text-[10px] uppercase font-mono text-neutral-400 tracking-widest">
                <span>Verified Groom Story</span>
                <span className="text-[#121212] font-bold">Dabra Boutique</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


