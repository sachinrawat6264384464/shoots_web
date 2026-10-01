"use client";

import CharacterLineup from "./CharacterLineup";
import { MessageCircle, MapPin, ArrowUpRight, Sparkles, Clock, PhoneCall } from "lucide-react";

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-editorial-grid text-[#121212] border-t-2 border-[#121212] relative overflow-hidden select-none">
      
      {/* Editorial Section Header for Lineup */}
      <div className="bg-[#121212] text-white py-3 px-6 text-center text-xs uppercase tracking-[0.25em] font-sans font-medium flex items-center justify-center gap-3">
        <Sparkles className="w-3.5 h-3.5 text-[#007a5e]" />
        <span>Lucky Mens Wear Dabra · Craftsmen & Character Lineup</span>
        <Sparkles className="w-3.5 h-3.5 text-[#007a5e]" />
      </div>

      {/* Hand-Drawn Character Parade Lineup */}
      <CharacterLineup />

      {/* Main Footer Container */}
      <div className="max-w-[1400px] mx-auto px-6 pt-14 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-neutral-300 pb-14">
          
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#007a5e]/10 text-[#007a5e] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <span>Established Heritage</span>
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight">
                Lucky Mens Wear.
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#007a5e] font-semibold mt-1">
                Dabra, Gwalior (M.P.)
              </p>
            </div>

            <p className="text-sm font-serif text-neutral-700 leading-relaxed max-w-sm">
              Dabra’s premier destination for bespoke wedding menswear, tailored tuxedos, royal sherwanis, and contemporary designer attire. Crafted to perfection.
            </p>

            {/* Direct Contact CTA */}
            <div className="pt-2">
              <a 
                href="#visit" 
                className="inline-flex items-center gap-3 bg-[#121212] text-white hover:bg-[#007a5e] transition-colors duration-300 px-5 py-3 rounded-full text-xs uppercase tracking-wider font-bold shadow-md group"
              >
                <span>Say Hello 👋</span>
                <span className="font-serif text-xs text-[#007a5e] group-hover:text-white transition-colors">· Book Trial</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links / Boutique Catalog (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-editorial font-bold uppercase tracking-wider text-xs text-[#121212] border-b-2 border-[#007a5e] pb-2 inline-block">
              Boutique Collection
            </h4>
            <ul className="space-y-3 font-serif text-sm text-neutral-800">
              <li>
                <a href="#catalog" className="hover:text-[#007a5e] transition-colors flex items-center justify-between group">
                  <span>Royal Wedding Sherwanis</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#007a5e]" />
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#007a5e] transition-colors flex items-center justify-between group">
                  <span>Luxury Tuxedos & Suits</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#007a5e]" />
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#007a5e] transition-colors flex items-center justify-between group">
                  <span>Designer Kurta Jackets</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#007a5e]" />
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#007a5e] transition-colors flex items-center justify-between group">
                  <span>Our Heritage & Craftsmen</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#007a5e]" />
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#007a5e] transition-colors flex items-center justify-between group font-semibold text-[#007a5e]">
                  <span>Book Fitting Trial</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#007a5e]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Store Details & Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-editorial font-bold uppercase tracking-wider text-xs text-[#121212] border-b-2 border-[#007a5e] pb-2 inline-block">
              Store Concierge
            </h4>
            
            <div className="space-y-3 text-xs font-serif text-neutral-800">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#007a5e] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#121212]">Boutique Address:</p>
                  <p className="text-neutral-600">Main Market, Dabra, Gwalior (M.P.), India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#007a5e] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#121212]">Store Hours:</p>
                  <p className="text-neutral-600">Mon - Sun: 10:00 AM - 9:30 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PhoneCall className="w-4 h-4 text-[#007a5e] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#121212]">VIP Helpline:</p>
                  <p className="text-neutral-600">+91 98930 12345</p>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <a
                href="https://wa.me/919893012345"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#007a5e] hover:bg-[#00624b] text-white py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* Column 4: Instagram & Credits (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-editorial font-bold uppercase tracking-wider text-xs text-[#121212] border-b-2 border-[#007a5e] pb-2 inline-block">
              Follow Us
            </h4>

            <div className="space-y-3">
              <a
                href="https://www.instagram.com/new_collection_dabra/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white border border-neutral-300 rounded-xl hover:border-[#007a5e] transition-all flex flex-col gap-2 group shadow-sm"
              >
                <div className="flex items-center justify-between text-[#121212] group-hover:text-[#007a5e]">
                  <span className="text-[#007a5e]"><InstagramIcon /></span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#007a5e] transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#121212]">Instagram</p>
                  <p className="text-[11px] text-[#007a5e] font-semibold">@new_collection_dabra</p>
                </div>
              </a>

              <div className="p-3 bg-neutral-200/60 rounded-xl border border-neutral-300 text-center">
                <p className="text-[11px] font-serif text-neutral-700 italic">Site developed for</p>
                <p className="text-xs font-bold text-[#007a5e]">@new_collection_dabra</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Editorial Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-neutral-600">
          <p className="font-medium text-center md:text-left">
            © 2026 <strong className="text-[#121212]">Lucky Mens Wear Dabra</strong>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <span className="text-[11px] uppercase tracking-widest text-neutral-500 font-semibold">
              High Fashion Editorial Blueprint
            </span>
            <button 
              onClick={scrollToTop}
              className="bg-[#121212] text-white hover:bg-[#007a5e] px-3 py-1.5 rounded text-[11px] uppercase tracking-wider font-bold transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

