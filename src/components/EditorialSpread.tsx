"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function EditorialSpread() {
  return (
    <section className="py-24 bg-editorial-grid relative border-b border-neutral-300 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex justify-between items-baseline mb-12 border-b border-neutral-300 pb-4">
          <div>
            <span className="font-editorial text-xl font-bold text-[#121212] block">
              The Lookbook
            </span>
            <span className="font-cormorant italic text-sm text-neutral-600">
              5 Categories. 3 Custom Fits. One Signature Style.
            </span>
          </div>
          <span className="font-handwritten text-xl text-neutral-400">
            Nd4
          </span>
        </div>

        {/* Magazine Spread Display (Matching Image 3) */}
        <div className="relative my-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white border border-neutral-300 p-6 sm:p-10 shadow-2xl relative"
          >
            {/* Left Page Spread */}
            <div className="border-r border-neutral-200 pr-0 lg:pr-8 space-y-6 font-serif">
              <div className="flex justify-between items-center text-xs text-neutral-400 border-b border-neutral-200 pb-2">
                <span>Lucky Mens Wear Dabra</span>
                <span>Issue 2026</span>
              </div>
              <h3 className="font-editorial text-2xl text-[#121212] font-bold">
                Royal Groom & Suit Craftsmanship
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans">
                Asymmetry and cut precision are the hallmark of bespoke tailoring. Every stitch at Lucky Mens Wear is calculated to enhance structure, posture, and elegance.
              </p>
              
              {/* Graphic Chart representation */}
              <div className="p-4 bg-[#f8f7f4] border border-neutral-200 text-center">
                <span className="font-handwritten text-lg text-[#007a5e] block mb-1">
                  Tailoring Precision Ratio
                </span>
                <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#007a5e] h-full w-[95%]" />
                </div>
                <span className="text-[10px] font-sans text-neutral-500 mt-1 block">
                  100% Hand-Stitched Canvas Fitting
                </span>
              </div>
            </div>

            {/* Right Page Spread */}
            <div className="pl-0 lg:pl-8 space-y-6 font-serif">
              <div className="flex justify-between items-center text-xs text-neutral-400 border-b border-neutral-200 pb-2">
                <span>Chapter 01: The Royal Groom</span>
                <span>Page 204</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans">
                <p className="font-bold text-[#007a5e] font-editorial text-base">
                  Earn Respect. Keep Tradition. Wear Confidence.
                </p>
                <p>
                  Four principles define Dabra menswear: premium fabric selection, hand zardosi embroidery, structural shoulder canvas, and flawless fit alignment.
                </p>
              </div>

              {/* Bookmark Tag Indicator */}
              <div className="flex items-center gap-2 pt-4">
                <span className="w-4 h-6 bg-[#007a5e] block" />
                <span className="w-4 h-6 bg-emerald-700 block" />
                <span className="font-handwritten text-sm text-neutral-500">
                  Dabra Signature Collection Bookmark
                </span>
              </div>
            </div>

            {/* Overlaid Coin / Seal Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f2f1ed] border border-neutral-400 rounded-full w-14 h-14 flex items-center justify-center text-[10px] font-editorial font-bold shadow-lg text-[#007a5e]">
              DABRA
            </div>
          </motion.div>
        </div>

        {/* Pricing Formats & Headline Grid (Matching Bottom of Image 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16 items-center">
          
          {/* Formats Table (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-neutral-300 p-6 shadow-sm font-sans">
            <div className="flex justify-between text-xs font-bold text-neutral-500 border-b border-neutral-200 pb-2 mb-3 font-serif">
              <span>Couture Options</span>
              <span>Price (INR)</span>
            </div>
            
            <div className="space-y-2 text-xs font-serif">
              <div className="flex justify-between border-b border-neutral-100 pb-2">
                <span className="font-bold text-neutral-800">Kurta & Pyjama Set</span>
                <span className="text-[#007a5e] font-bold">₹7,999</span>
              </div>
              <div className="flex justify-between border-b border-neutral-100 pb-2">
                <span className="font-bold text-neutral-800">Italian 3-Piece Suit</span>
                <span className="text-[#007a5e] font-bold">₹18,500</span>
              </div>
              <div className="flex justify-between border-b border-neutral-100 pb-2">
                <span className="font-bold text-neutral-800">Royal Velvet Sherwani</span>
                <span className="text-[#007a5e] font-bold">₹34,999</span>
              </div>
            </div>
          </div>

          {/* Statement Headline & Navigation Arrows (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h4 className="font-editorial text-2xl md:text-3xl text-[#121212] font-bold leading-snug">
                Not just a clothing store. <br />
                Not just a tailor. <br />
                <span className="text-[#007a5e]">
                  A brand that redefines gentleman couture in Dabra.
                </span>
              </h4>
            </div>

            {/* Pagination Circle Arrows */}
            <div className="flex space-x-3 shrink-0">
              <button className="w-12 h-12 rounded-full border border-neutral-400 flex items-center justify-center text-neutral-800 hover:bg-[#007a5e] hover:text-white hover:border-[#007a5e] transition-all shadow-sm">
                <ArrowLeft size={18} />
              </button>
              <button className="w-12 h-12 rounded-full bg-[#121212] text-white flex items-center justify-center hover:bg-[#007a5e] transition-all shadow-md">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
