"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock body scrolling while initial loader is active
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f2f1ed] bg-editorial-grid select-none pointer-events-auto"
        >
          {/* Central Hand-Drawn Character Box matching Reference Image 1 */}
          <div className="relative flex flex-col items-center justify-center">
            
            {/* Handwritten Annotations surrounding character */}
            <span className="absolute -top-8 -left-14 font-handwritten text-3xl text-neutral-800 tracking-wide font-normal">
              c3
            </span>
            <span className="absolute top-2 -right-20 font-handwritten text-3xl text-neutral-900 font-bold">
              Nf6
            </span>
            <span className="absolute top-20 -right-16 font-handwritten text-2xl text-neutral-400">
              Nc6
            </span>
            <span className="absolute -bottom-10 -left-12 font-handwritten text-3xl text-neutral-700">
              Bc4
            </span>
            <span className="absolute -bottom-10 left-16 font-handwritten text-3xl text-neutral-700">
              Bc5
            </span>

            {/* Detailed Hand-Drawn Character Illustration (Boy scratching head with glasses carrying chessboard) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative p-4"
            >
              <svg
                className="w-32 h-64 sm:w-40 sm:h-80"
                viewBox="0 0 100 200"
                fill="none"
                stroke="#121212"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Hair Spikes */}
                <path d="M 42 35 C 38 18, 58 18, 56 35" strokeWidth="2.5" />
                <path d="M 45 22 C 50 14, 55 16, 56 22" strokeWidth="2" />
                <path d="M 38 28 C 42 20, 48 22, 46 28" strokeWidth="2" />

                {/* Glasses */}
                <circle cx="48" cy="42" r="5" strokeWidth="2" />
                <line x1="43" y1="42" x2="38" y2="42" strokeWidth="2" />
                
                {/* Arm Scratching Head (Right hand going over head) */}
                <path d="M 60 70 C 72 50, 68 22, 53 24" strokeWidth="2.2" />

                {/* Left Arm holding Chessboard */}
                <path d="M 38 70 C 26 80, 24 95, 36 100" strokeWidth="2.2" />

                {/* T-Shirt Body */}
                <path d="M 38 60 L 38 115 L 62 115 L 62 60 Z" fill="#ffffff" strokeWidth="2.5" />
                {/* Collar */}
                <path d="M 44 60 C 48 66, 52 66, 56 60" strokeWidth="2" />

                {/* Chessboard/Book under arm */}
                <rect x="22" y="78" width="24" height="28" fill="#121212" stroke="#121212" strokeWidth="2" />
                <path d="M 24 84 L 44 84 M 24 90 L 44 90 M 24 96 L 44 96 M 24 102 L 44 102" stroke="#ffffff" strokeWidth="1.5" />
                <path d="M 30 78 L 30 106 M 36 78 L 36 106 M 40 78 L 40 106" stroke="#ffffff" strokeWidth="1.5" />

                {/* Pants / Trousers */}
                <path d="M 38 115 L 36 172 M 62 115 L 64 172" strokeWidth="3.2" />
                <path d="M 50 120 L 50 170" strokeWidth="1.8" />

                {/* Shoes */}
                <path d="M 26 172 L 40 172 M 60 172 L 74 172" strokeWidth="4.5" />
              </svg>
            </motion.div>

          </div>

          {/* 3-Second Emerald Loading Line Indicator */}
          <div className="absolute bottom-12 w-48 h-1 bg-neutral-300 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "linear" }}
              className="h-full bg-[#007a5e]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

