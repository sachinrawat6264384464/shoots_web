"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShoppingBag, Heart, Sparkles, X } from "lucide-react";

export interface ToastMessage {
  id: string;
  type: 'cart' | 'wishlist' | 'info';
  title: string;
  description: string;
}

interface ToastNotificationProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export default function ToastNotification({ toasts, onDismiss }: ToastNotificationProps) {
  return (
    <div className="fixed bottom-6 right-6 z-[120] flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="pointer-events-auto bg-maroon-900 border border-gold-accent/40 text-cream-50 p-4 shadow-2xl backdrop-blur-md flex items-start gap-3.5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gold-accent" />
            <div className="p-2 rounded-full bg-gold-accent/10 text-gold-accent mt-0.5 shrink-0">
              {toast.type === 'cart' && <ShoppingBag size={18} />}
              {toast.type === 'wishlist' && <Heart size={18} fill="currentColor" />}
              {toast.type === 'info' && <Sparkles size={18} />}
            </div>

            <div className="flex-1 pr-4">
              <h4 className="font-serif text-sm tracking-wide text-gold-accent font-semibold">
                {toast.title}
              </h4>
              <p className="text-xs text-cream-100/80 font-sans mt-0.5 leading-relaxed">
                {toast.description}
              </p>
            </div>

            <button
              onClick={() => onDismiss(toast.id)}
              className="text-cream-100/40 hover:text-gold-accent transition-colors p-1"
              aria-label="Close notification"
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
