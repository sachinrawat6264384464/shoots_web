"use client";

import { motion } from "framer-motion";

export default function OurHeritage() {
  return (
    <section id="about" className="py-24 bg-editorial-grid relative border-b border-neutral-300 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left Side Imagery Grid with Black & White to Color Hover Effect */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative">
          
          {/* Photo 1: Tailored Italian Suit (Black & White to Color) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-10 group cursor-pointer"
          >
            <div className="relative overflow-hidden bg-neutral-900 border border-neutral-300 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800"
                alt="Bespoke Suit Craftsmanship"
                className="w-full h-[360px] sm:h-[420px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-editorial uppercase font-bold text-[#121212] tracking-wider">
                Italian 3-Piece Fit
              </div>
            </div>
          </motion.div>

          {/* Photo 2: Royal Groom Sherwani (Black & White to Color) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden bg-neutral-900 border border-neutral-300 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
                alt="Royal Groom Sherwani Craftsmanship"
                className="w-full h-[360px] sm:h-[420px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute bottom-3 left-3 bg-[#007a5e] text-white px-2.5 py-1 text-[10px] font-editorial uppercase font-bold tracking-wider">
                Royal Sherwani Couture
              </div>
            </div>
          </motion.div>

          {/* Technical Blueprint Watermark Annotation */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
            <span className="font-editorial text-[18rem] text-[#121212] font-bold">
              D
            </span>
          </div>
        </div>

        {/* Right Side High-Contrast Crisp Text Content */}
        <div className="lg:w-1/2">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-handwritten text-2xl text-[#007a5e] mb-1"
          >
            New Collection Dabra
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-editorial text-4xl sm:text-5xl font-bold text-[#121212] tracking-tight uppercase mb-6 leading-tight"
          >
            The Art of <br />
            <span className="text-[#007a5e]">Gentleman&apos;s Couture</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-neutral-800 font-sans text-base leading-relaxed"
          >
            <p className="font-medium">
              Located in the heart of Dabra, <strong className="text-[#007a5e]">Lucky Mens Wear (@new_collection_dabra)</strong> is the premier destination for high-end wedding wear, royal groom sherwanis, sharp 3-piece suits, and designer Indo-Western outfits.
            </p>
            <p className="text-neutral-600 text-sm">
              We craft tailored perfection for grooms and gentlemen. From intricate hand embroidery on silk sherwanis to crisp Italian wool suits, our designs embody confidence, heritage, and distinction.
            </p>

            {/* High Contrast Stat Counters */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-neutral-300">
              <div>
                <h4 className="font-editorial text-3xl sm:text-4xl font-bold text-[#007a5e] mb-0.5">
                  1,700+
                </h4>
                <p className="text-xs uppercase font-editorial font-bold tracking-wider text-neutral-800">
                  Happy Clients
                </p>
              </div>
              <div>
                <h4 className="font-editorial text-3xl sm:text-4xl font-bold text-[#007a5e] mb-0.5">
                  500+
                </h4>
                <p className="text-xs uppercase font-editorial font-bold tracking-wider text-neutral-800">
                  Groom Outfits Tailored
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-6">
              <a
                href="#visit"
                className="editorial-btn-emerald inline-block px-8 py-3.5 text-xs font-editorial font-bold uppercase tracking-[0.2em] shadow-lg"
              >
                Book Personal Groom Trial
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

