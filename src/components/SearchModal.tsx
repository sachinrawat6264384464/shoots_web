"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ShoppingBag, Eye } from "lucide-react";
import { CATALOG_PRODUCTS } from "@/data/boutiqueData";
import { Product } from "@/types";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  onQuickView,
  onAddToCart,
}: SearchModalProps) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const results = query.trim()
    ? CATALOG_PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(query.toLowerCase())) ||
        (product.tag && product.tag.toLowerCase().includes(query.toLowerCase()))
      )
    : CATALOG_PRODUCTS.slice(0, 4);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: -20 }}
          className="bg-white w-full max-w-2xl shadow-2xl border border-gold-accent/40 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Input Header */}
          <div className="p-4 bg-maroon-900 border-b border-gold-accent/30 flex items-center gap-3">
            <Search className="text-gold-accent shrink-0" size={20} />
            <input
              type="text"
              placeholder="Search Banarasi sarees, bridal lehengas, kurtas..."
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent border-none outline-none w-full text-white font-serif text-base placeholder:text-cream-100/50"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-cream-100/50 hover:text-gold-accent text-xs font-serif uppercase tracking-wider"
              >
                Clear
              </button>
            )}
            <button
              onClick={onClose}
              className="text-gold-accent hover:rotate-90 transition-transform p-1"
            >
              <X size={20} />
            </button>
          </div>

          {/* Results List */}
          <div className="p-6 max-h-[60vh] overflow-y-auto space-y-3 bg-cream-background">
            <p className="text-[10px] uppercase tracking-widest font-serif text-maroon-600 font-bold mb-2">
              {query ? `Search Results (${results.length})` : "Featured Suggestions"}
            </p>

            {results.length === 0 ? (
              <p className="text-center text-xs text-maroon-600/60 py-8 font-sans">
                No luxury pieces match &ldquo;{query}&rdquo;. Try searching for Sarees, Lehengas, or Silk.
              </p>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 bg-white border border-maroon-900/10 shadow-sm hover:border-gold-accent/40 transition-colors"
                >
                  <div
                    className="flex items-center gap-4 cursor-pointer flex-1"
                    onClick={() => {
                      onQuickView(product);
                      onClose();
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-16 object-cover object-top border border-gold-accent/20"
                    />
                    <div>
                      <h4 className="font-serif text-sm text-maroon-800 font-bold">
                        {product.name}
                      </h4>
                      <p className="text-xs font-serif text-gold-accent font-semibold">
                        {product.price}
                      </p>
                      <span className="text-[9px] uppercase tracking-widest text-maroon-400 font-serif">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        onAddToCart(product);
                        onClose();
                      }}
                      title="Add to Bag"
                      className="p-2 text-maroon-800 hover:bg-gold-accent hover:text-black transition-colors border border-maroon-900/10"
                    >
                      <ShoppingBag size={16} />
                    </button>
                    <button
                      onClick={() => {
                        onQuickView(product);
                        onClose();
                      }}
                      title="View Details"
                      className="p-2 text-maroon-800 hover:bg-gold-accent hover:text-black transition-colors border border-maroon-900/10"
                    >
                      <Eye size={16} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
