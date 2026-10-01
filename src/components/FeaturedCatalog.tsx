"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag, Heart, Eye } from "lucide-react";
import { CATALOG_PRODUCTS } from "@/data/boutiqueData";
import { Product } from "@/types";

interface FeaturedCatalogProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: number[];
  selectedCategoryFilter?: string;
}

export default function FeaturedCatalog({
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  selectedCategoryFilter = "ALL"
}: FeaturedCatalogProps) {
  const [activeFilter, setActiveFilter] = useState<string>(selectedCategoryFilter);
  const sliderRef = useRef<HTMLDivElement>(null);

  const filters = ["ALL", "TRENDING", "NEW", "EXCLUSIVE", "Suits & Blazers", "Royal Sherwanis", "Indo-Western", "Kurta Pyjama"];

  const filteredProducts = CATALOG_PRODUCTS.filter((product) => {
    if (activeFilter === "ALL") return true;
    if (product.tag?.toUpperCase() === activeFilter) return true;
    if (product.category.toUpperCase() === activeFilter.toUpperCase()) return true;
    return false;
  });

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="catalog" className="py-24 bg-editorial-grid relative border-b border-neutral-300">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-handwritten text-2xl text-[#007a5e]"
            >
              Handcrafted Groom Couture
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-editorial text-4xl md:text-5xl text-[#121212] font-bold tracking-tight uppercase"
            >
              Featured Catalog
            </motion.h2>
          </div>

          <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
            <div className="flex space-x-4 md:space-x-6 text-xs font-serif tracking-widest text-neutral-600 overflow-x-auto pb-2 scrollbar-none">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`transition-colors whitespace-nowrap font-editorial ${
                    activeFilter === filter
                      ? "text-[#007a5e] border-b-2 border-[#007a5e] pb-1 font-bold"
                      : "hover:text-[#007a5e]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="flex space-x-2 shrink-0">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll catalog left"
                className="w-10 h-10 border border-neutral-300 text-neutral-800 flex items-center justify-center hover:bg-[#007a5e] hover:text-white transition-all shadow-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll catalog right"
                className="w-10 h-10 border border-neutral-300 text-neutral-800 flex items-center justify-center hover:bg-[#007a5e] hover:text-white transition-all shadow-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* 4-Column Responsive Grid Container (4 Products Per Row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => {
              const isWishlisted = wishlistIds.includes(product.id);
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.04 }}
                  className="w-full group bg-[#f8f7f4] border border-neutral-300 p-3.5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image Container */}
                  <div className="relative h-[320px] sm:h-[340px] w-full overflow-hidden bg-white border border-neutral-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800";
                      }}
                    />

                    {product.tag && (
                      <span className="absolute top-2.5 left-2.5 bg-[#007a5e] text-white text-[9px] uppercase tracking-widest px-2.5 py-0.5 font-sans font-bold shadow-sm">
                        {product.tag}
                      </span>
                    )}

                    {/* Hover Overlay Buttons */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2.5">
                      <button
                        onClick={() => onAddToCart(product)}
                        title="Add to Bag"
                        className="w-9 h-9 bg-white text-neutral-900 flex items-center justify-center hover:bg-[#007a5e] hover:text-white transition-all shadow-md"
                      >
                        <ShoppingBag size={16} />
                      </button>

                      <button
                        onClick={() => onToggleWishlist(product)}
                        title={isWishlisted ? "Remove from Wishlist" : "Save to Wishlist"}
                        className={`w-9 h-9 flex items-center justify-center transition-all shadow-md ${
                          isWishlisted
                            ? "bg-[#007a5e] text-white"
                            : "bg-white text-neutral-900 hover:bg-[#007a5e] hover:text-white"
                        }`}
                      >
                        <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
                      </button>

                      <button
                        onClick={() => onQuickView(product)}
                        title="Quick View Details"
                        className="w-9 h-9 bg-white text-neutral-900 flex items-center justify-center hover:bg-[#007a5e] hover:text-white transition-all shadow-md"
                      >
                        <Eye size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mt-3.5 text-center">
                    <h3 className="font-editorial text-base text-[#121212] tracking-tight group-hover:text-[#007a5e] transition-colors font-bold truncate">
                      {product.name}
                    </h3>
                    <p className="font-editorial text-[#007a5e] font-bold text-sm mt-0.5">
                      {product.price}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View Full Catalog Link */}
        <div className="mt-12 text-center">
          <a
            href="#collections"
            className="editorial-btn-emerald inline-block px-8 py-3.5 text-xs font-editorial font-bold uppercase tracking-[0.2em] shadow-lg"
          >
            View Full Dabra Catalog
          </a>
        </div>
      </div>
    </section>
  );
}
