"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Heart, ShoppingBag, ChevronDown, Sparkles } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onSearchOpen: () => void;
}

export default function Navbar({
  cartCount,
  wishlistCount,
  onOpenCart,
  onSearchOpen
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#f2f1ed]/95 shadow-md backdrop-blur-md" : "bg-[#f2f1ed]"}`}>
      {/* Editorial Grid Border Header Bar */}
      <div className="w-full border-b border-neutral-300">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 items-center text-xs font-sans">
          
          {/* Brand Col (12 cols on mobile, 4 cols on desktop) */}
          <div className="col-span-8 md:col-span-3 px-6 py-4 border-r border-neutral-300 flex items-center gap-2">
            <a href="#home" className="flex items-baseline gap-2 group">
              <span className="font-editorial text-base font-bold tracking-tight text-[#121212] group-hover:text-[#007a5e] transition-colors">
                Lucky Mens Wear
              </span>
              <span className="font-cormorant italic text-xs text-neutral-500">
                2026 Edition
              </span>
            </a>
          </div>

          {/* Desktop Links (6 cols) */}
          <div className="hidden md:flex col-span-6 border-r border-neutral-300 justify-around items-center py-4 text-neutral-700 font-serif">
            <a href="#home" className="hover:text-[#007a5e] underline underline-offset-4 decoration-[#007a5e] font-semibold transition-colors">
              Intro
            </a>
            <a href="#collections" className="hover:text-[#007a5e] transition-colors">
              Collections
            </a>
            <a href="#catalog" className="hover:text-[#007a5e] transition-colors">
              Featured Catalog
            </a>
            <a href="#about" className="hover:text-[#007a5e] transition-colors">
              Our Story
            </a>
            
            {/* Language Pill */}
            <div className="relative">
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center gap-1 border border-[#007a5e] text-[#007a5e] px-3 py-0.5 rounded-full text-[11px] font-sans hover:bg-[#007a5e] hover:text-white transition-all"
              >
                <span>En</span>
                <ChevronDown size={12} />
              </button>
              {langDropdown && (
                <div className="absolute top-full mt-2 left-0 bg-white border border-neutral-300 shadow-xl py-2 px-3 z-50 text-[11px] min-w-[90px]">
                  <p className="font-bold text-[#007a5e] mb-1">Select Language</p>
                  <button onClick={() => setLangDropdown(false)} className="block py-1 hover:text-[#007a5e]">English</button>
                  <button onClick={() => setLangDropdown(false)} className="block py-1 hover:text-[#007a5e]">Hindi (हिंदी)</button>
                </div>
              )}
            </div>
          </div>

          {/* Actions Col (4 cols on mobile, 3 cols on desktop) */}
          <div className="col-span-4 md:col-span-3 px-6 py-4 flex items-center justify-end gap-5">
            <button
              onClick={onSearchOpen}
              className="text-neutral-700 hover:text-[#007a5e] transition-colors"
              title="Search Catalog"
            >
              <Search size={18} />
            </button>

            <a
              href="#catalog"
              className="relative text-neutral-700 hover:text-[#007a5e] transition-colors"
              title="Saved Wishlist"
            >
              <Heart size={18} />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#007a5e] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </a>

            <button
              onClick={onOpenCart}
              className="relative text-neutral-700 hover:text-[#007a5e] transition-colors"
              title="Shopping Bag"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#007a5e] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-neutral-800 p-1"
            >
              <Menu size={22} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-[#f2f1ed] z-[60] flex flex-col p-8 border-b border-neutral-300"
          >
            <div className="flex justify-between items-center pb-6 border-b border-neutral-300 mb-8">
              <div>
                <span className="font-editorial text-2xl font-bold text-[#121212]">
                  Lucky Mens Wear
                </span>
                <p className="font-cormorant italic text-xs text-[#007a5e]">
                  New Collection Dabra
                </p>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-neutral-800">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col space-y-6 text-xl font-editorial">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#007a5e]">
                Intro & Hero
              </a>
              <a href="#collections" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#007a5e]">
                Collections
              </a>
              <a href="#catalog" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#007a5e]">
                Featured Catalog
              </a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#007a5e]">
                Our Story
              </a>
              <a href="#festive" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#007a5e]">
                Wedding Gala
              </a>
              <a href="#visit" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#007a5e]">
                Book Trial Session
              </a>
            </div>

            <div className="mt-auto pt-6 border-t border-neutral-300">
              <a
                href="#visit"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-4 bg-[#007a5e] text-white font-editorial text-sm font-bold uppercase tracking-widest"
              >
                Book VIP Groom Trial! ($0)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
