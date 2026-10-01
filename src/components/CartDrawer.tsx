"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck } from "lucide-react";
import { CartItem } from "@/types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, size: string, delta: number) => void;
  onRemoveItem: (id: number, size: string) => void;
  onCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartDrawerProps) {
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.numericPrice * item.quantity,
    0
  );

  const freeShippingThreshold = 50000;
  const progressPercent = Math.min(100, (totalAmount / freeShippingThreshold) * 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 z-[9990] backdrop-blur-sm"
          />

          {/* Drawer Slide-in Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-cream-background z-[9995] shadow-2xl flex flex-col border-l border-gold-accent/30"
          >
            {/* Header */}
            <div className="p-6 bg-maroon-900 text-white flex justify-between items-center border-b border-gold-accent/30">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="text-gold-accent" size={22} />
                <h3 className="font-serif text-lg tracking-widest uppercase">
                  Boutique Bag ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-gold-accent hover:rotate-90 transition-transform p-1"
                aria-label="Close Bag"
              >
                <X size={22} />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div className="p-4 bg-cream-50 border-b border-maroon-900/10">
              <div className="flex justify-between items-center text-xs font-serif text-maroon-800 mb-1.5">
                <span>Complimentary VIP Delivery Threshold</span>
                <span className="font-bold text-gold-700">
                  {totalAmount >= freeShippingThreshold
                    ? "Unlocked!"
                    : `₹${(freeShippingThreshold - totalAmount).toLocaleString("en-IN")} away`}
                </span>
              </div>
              <div className="w-full bg-maroon-900/10 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gold-accent h-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-maroon-900/10 text-maroon-800 flex items-center justify-center mb-4">
                    <ShoppingBag size={28} />
                  </div>
                  <h4 className="font-serif text-xl text-maroon-800 mb-2 uppercase tracking-wide">
                    Your Bag is Empty
                  </h4>
                  <p className="text-maroon-600/70 font-sans text-xs max-w-xs mb-6">
                    Explore our luxury Banarasi sarees, bridal lehengas, and designer kurtas to add items to your selection.
                  </p>
                  <button
                    onClick={onClose}
                    className="luxury-button bg-maroon-800 text-white px-6 py-3 text-xs font-serif uppercase tracking-widest font-bold"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div
                    key={`${item.product.id}-${item.selectedSize}`}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 p-3 bg-white border border-maroon-900/10 shadow-sm"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-24 object-cover object-top border border-gold-accent/20"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-sm text-maroon-800 font-bold truncate pr-2">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                            className="text-maroon-400 hover:text-maroon-800 p-0.5"
                            title="Remove Item"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                        <p className="text-xs font-serif text-gold-accent font-semibold mt-0.5">
                          {item.product.price}
                        </p>
                        <span className="inline-block mt-1 text-[10px] font-serif uppercase tracking-wider text-maroon-600 bg-cream-50 px-2 py-0.5 border border-maroon-900/10">
                          Size: {item.selectedSize}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2 mt-3">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, -1)}
                          className="w-6 h-6 border border-maroon-800/30 flex items-center justify-center text-maroon-800 hover:bg-maroon-800 hover:text-white transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-serif font-bold w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, 1)}
                          className="w-6 h-6 border border-maroon-800/30 flex items-center justify-center text-maroon-800 hover:bg-maroon-800 hover:text-white transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-white border-t border-maroon-900/10 space-y-4">
                <div className="space-y-1.5 text-sm font-serif">
                  <div className="flex justify-between text-maroon-600">
                    <span>Subtotal</span>
                    <span>₹{totalAmount.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-maroon-600">
                    <span>Shipping</span>
                    <span>{totalAmount >= freeShippingThreshold ? "FREE" : "₹500"}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-maroon-900 border-t border-maroon-100 pt-2">
                    <span>Total Amount</span>
                    <span className="text-gold-700">
                      ₹{(totalAmount + (totalAmount >= freeShippingThreshold ? 0 : 500)).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onCheckout}
                  className="w-full luxury-button bg-maroon-800 text-white hover:bg-gold-accent hover:text-black py-4 text-xs font-serif font-bold uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-2 transition-all"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={16} />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-maroon-600 font-sans pt-1">
                  <ShieldCheck size={14} className="text-gold-accent" />
                  <span>Encrypted VIP Checkout & Genuine Handloom Guarantee</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
