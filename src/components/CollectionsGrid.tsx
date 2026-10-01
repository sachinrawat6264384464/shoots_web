"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { COLLECTION_CATEGORIES } from "@/data/boutiqueData";

interface CollectionsGridProps {
  onSelectCategory?: (category: string) => void;
}

export default function CollectionsGrid({ onSelectCategory }: CollectionsGridProps) {
  return (
    <section id="collections" className="py-24 bg-editorial-grid px-6 border-b border-neutral-300 select-none">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-neutral-300 pb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#007a5e] rounded-full inline-block animate-pulse" />
              <span className="font-editorial text-xs font-bold uppercase tracking-[0.25em] text-[#007a5e]">
                Bespoke Divisions · 2026 Edition
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#121212] font-bold tracking-tight uppercase"
            >
              Our Collections
            </motion.h2>
          </div>

          <div className="text-left md:text-right">
            <p className="font-cormorant italic text-lg sm:text-xl text-neutral-600">
              Curated Gentleman Couture in Dabra
            </p>
            <span className="font-handwritten text-sm text-neutral-400">
              [REF. DABRA.CATALOG.2026]
            </span>
          </div>
        </div>

        {/* High-Fashion Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTION_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              onClick={() => onSelectCategory && onSelectCategory(cat.title)}
              className="group relative bg-white border border-neutral-300 p-4 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Top Technical Metadata Bar */}
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-neutral-200 text-xs">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-400">
                  <span className="text-[#007a5e] font-bold">0{idx + 1}</span>
                  <span>/ 06</span>
                </div>
                <span className="font-editorial text-xs text-[#007a5e] font-bold tracking-widest uppercase">
                  {cat.count}
                </span>
              </div>

              {/* High-Res Image Container with Hover Overlay */}
              <div className="relative overflow-hidden aspect-[3/4] w-full border border-neutral-200 bg-neutral-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1000";
                  }}
                />

                {/* Dark Vignette & Hover Action Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
                
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#121212] p-2 rounded-full shadow-lg group-hover:bg-[#007a5e] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight size={18} />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white transform transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-300 block mb-1">
                    Category Division
                  </span>
                  <h3 className="font-editorial text-2xl font-bold uppercase tracking-tight text-white drop-shadow-md">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Card Bottom CTA Bar */}
              <div className="mt-4 pt-3 flex justify-between items-center text-xs">
                <span className="font-editorial text-xs font-bold uppercase tracking-wider text-neutral-800 group-hover:text-[#007a5e] transition-colors">
                  Explore {cat.title}
                </span>
                <span className="font-handwritten text-base text-[#007a5e] font-bold group-hover:translate-x-1 transition-transform">
                  Browse →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

