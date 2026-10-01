"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Calendar, Check, Sparkles } from "lucide-react";
import { Product } from "@/types";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
  onBookConsultation: (product: Product) => void;
}

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  onBookConsultation,
}: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const sizes = product.sizes || ["S", "M", "L", "XL", "Custom Fit"];

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 30 }}
          className="bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden relative flex flex-col md:flex-row shadow-2xl border border-gold-accent/40"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left Side Product Image */}
          <div className="md:w-1/2 aspect-[3/4] md:aspect-auto h-72 md:h-auto relative bg-black overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src =
                  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800";
              }}
            />
            {product.tag && (
              <span className="absolute top-4 left-4 bg-gold-accent text-white text-[10px] font-serif uppercase tracking-widest px-3 py-1 shadow-md">
                {product.tag}
              </span>
            )}
          </div>

          {/* Right Side Content & Options */}
          <div className="md:w-1/2 p-6 md:p-10 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] tracking-[0.25em] font-serif uppercase text-gold-accent flex items-center gap-1">
                  <Sparkles size={12} /> Sanskriti Signature
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif text-maroon-800 mb-2">
                {product.name}
              </h3>

              <p className="text-xl md:text-2xl text-gold-700 font-serif mb-4 font-bold">
                {product.price}
              </p>

              <p className="text-maroon-600 font-sans text-xs md:text-sm leading-relaxed mb-6">
                {product.description ||
                  "Hand-spun luxury fabric tailored with precision. Styled for weddings and high-profile celebrations. Crafted with pure gold threads and hand zari weaving."}
              </p>

              {product.fabric && (
                <div className="mb-6 p-3 bg-cream-50 border border-gold-accent/20">
                  <p className="text-[10px] font-serif uppercase tracking-widest text-maroon-400">
                    Fabric & Craftsmanship:
                  </p>
                  <p className="text-xs font-serif text-maroon-800 font-bold mt-0.5">
                    {product.fabric}
                  </p>
                </div>
              )}

              {/* Size Selection */}
              <div className="mb-6">
                <label className="text-[10px] uppercase font-serif tracking-widest text-maroon-400 block mb-2 font-bold">
                  Select Size / Tailoring:
                </label>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1.5 text-xs font-serif transition-all border ${
                        selectedSize === sz
                          ? "bg-maroon-800 text-gold-accent border-gold-accent font-bold shadow-sm"
                          : "border-maroon-800/20 text-maroon-800 hover:border-gold-accent"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 border-t border-maroon-100 pt-6">
              <button
                onClick={handleAdd}
                className={`w-full py-3 text-xs uppercase tracking-widest font-serif font-bold transition-all flex items-center justify-center gap-2 shadow-lg ${
                  added
                    ? "bg-emerald-800 text-white"
                    : "bg-maroon-800 text-white hover:bg-maroon-900"
                }`}
              >
                {added ? (
                  <>
                    <Check size={16} /> Added to Boutique Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag size={16} /> Add to Boutique Bag
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  onBookConsultation(product);
                  onClose();
                }}
                className="w-full py-3 border border-maroon-800 text-maroon-800 font-serif text-xs uppercase tracking-widest hover:bg-gold-accent hover:text-black hover:border-gold-accent transition-all flex items-center justify-center gap-2"
              >
                <Calendar size={16} /> Book Private Fitting
              </button>
            </div>
          </div>

          {/* Modal Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full text-maroon-800 hover:text-gold-accent hover:rotate-90 transition-all duration-300 z-50 shadow-md border border-maroon-900/10"
            aria-label="Close Modal"
          >
            <X size={20} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
