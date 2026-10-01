"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ShieldCheck, CreditCard, Sparkles } from "lucide-react";
import { CartItem } from "@/types";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onClearCart: () => void;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  onClearCart,
}: CheckoutModalProps) {
  const [completed, setCompleted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "UPI / Netbanking",
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.numericPrice * item.quantity,
    0
  );
  const shippingFee = subtotal >= 50000 ? 0 : 500;
  const grandTotal = subtotal + shippingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCompleted(true);
    onClearCart();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 30 }}
          className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl border border-gold-accent/40"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 bg-maroon-900 text-white flex justify-between items-center border-b border-gold-accent/30 sticky top-0 z-20">
            <div className="flex items-center space-x-2">
              <Sparkles className="text-gold-accent" size={20} />
              <h3 className="font-serif text-xl tracking-widest uppercase">
                Sanskriti VIP Order Checkout
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-gold-accent hover:rotate-90 transition-transform p-1"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 sm:p-10">
            {completed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-gold-accent/20 text-gold-700 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold-accent">
                  <CheckCircle2 size={44} />
                </div>
                <h3 className="text-3xl font-serif text-maroon-800 uppercase tracking-wide mb-2">
                  Order Successfully Placed!
                </h3>
                <p className="text-gold-accent font-serif text-xs uppercase tracking-widest mb-4">
                  Order Reference: #SKR-{Math.floor(100000 + Math.random() * 900000)}
                </p>
                <p className="text-maroon-600 font-sans text-sm leading-relaxed max-w-md mx-auto mb-8">
                  Thank you, <strong className="text-maroon-900">{formData.name}</strong>. Your luxury pieces are being prepared for dispatch to <strong>{formData.address}, {formData.city}</strong>. Our VIP concierge will contact you at <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={onClose}
                  className="luxury-button bg-maroon-800 text-white px-8 py-3.5 text-xs font-serif uppercase tracking-widest font-bold"
                >
                  Return to Boutique Home
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Form Inputs */}
                <div className="lg:col-span-7 space-y-6">
                  <h4 className="font-serif text-lg text-maroon-800 uppercase tracking-wide border-b border-maroon-900/10 pb-2">
                    Shipping Details
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-maroon-600 block mb-1 font-bold font-serif">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ananya Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 bg-cream-50 border border-maroon-900/20 text-maroon-800 font-sans text-sm outline-none focus:border-gold-accent transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-maroon-600 block mb-1 font-bold font-serif">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full p-3 bg-cream-50 border border-maroon-900/20 text-maroon-800 font-sans text-sm outline-none focus:border-gold-accent transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-maroon-600 block mb-1 font-bold font-serif">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="ananya@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full p-3 bg-cream-50 border border-maroon-900/20 text-maroon-800 font-sans text-sm outline-none focus:border-gold-accent transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-maroon-600 block mb-1 font-bold font-serif">
                        Delivery Address
                      </label>
                      <textarea
                        required
                        rows={2}
                        placeholder="House / Apartment No, Street Name, Landmark"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full p-3 bg-cream-50 border border-maroon-900/20 text-maroon-800 font-sans text-sm outline-none focus:border-gold-accent transition-colors resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-maroon-600 block mb-1 font-bold font-serif">
                          City / State
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Mumbai, Maharashtra"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full p-3 bg-cream-50 border border-maroon-900/20 text-maroon-800 font-sans text-sm outline-none focus:border-gold-accent transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-widest text-maroon-600 block mb-1 font-bold font-serif">
                          Pincode
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="400001"
                          value={formData.pincode}
                          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                          className="w-full p-3 bg-cream-50 border border-maroon-900/20 text-maroon-800 font-sans text-sm outline-none focus:border-gold-accent transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-maroon-600 block mb-2 font-bold font-serif">
                      Payment Mode
                    </label>
                    <div className="space-y-2">
                      {["UPI / Netbanking", "Credit / Debit Card", "Cash on Delivery"].map(
                        (method) => (
                          <label
                            key={method}
                            className={`flex items-center space-x-3 p-3 border cursor-pointer font-serif text-xs transition-colors ${
                              formData.paymentMethod === method
                                ? "bg-cream-50 border-gold-accent text-maroon-900 font-bold"
                                : "border-maroon-900/10 text-maroon-700"
                            }`}
                          >
                            <input
                              type="radio"
                              name="payment"
                              checked={formData.paymentMethod === method}
                              onChange={() => setFormData({ ...formData, paymentMethod: method })}
                              className="accent-gold-accent"
                            />
                            <CreditCard size={16} className="text-gold-accent" />
                            <span>{method}</span>
                          </label>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Side Summary */}
                <div className="lg:col-span-5 bg-cream-50 p-6 border border-maroon-900/10 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-lg text-maroon-800 uppercase tracking-wide border-b border-maroon-900/10 pb-2 mb-4">
                      Order Summary
                    </h4>

                    <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                      {cartItems.map((item) => (
                        <div
                          key={`${item.product.id}-${item.selectedSize}`}
                          className="flex justify-between items-center text-xs font-serif"
                        >
                          <div className="truncate max-w-[160px]">
                            <span className="font-bold text-maroon-800">
                              {item.product.name}
                            </span>
                            <span className="block text-[10px] text-maroon-600">
                              Qty: {item.quantity} | Size: {item.selectedSize}
                            </span>
                          </div>
                          <span className="text-gold-700 font-bold">
                            ₹{(item.product.numericPrice * item.quantity).toLocaleString("en-IN")}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-maroon-900/10 pt-4 mt-4 space-y-2 text-xs font-serif">
                      <div className="flex justify-between text-maroon-600">
                        <span>Subtotal</span>
                        <span>₹{subtotal.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="flex justify-between text-maroon-600">
                        <span>Shipping</span>
                        <span>{shippingFee === 0 ? "FREE" : `₹${shippingFee}`}</span>
                      </div>
                      <div className="flex justify-between text-base font-bold text-maroon-900 border-t border-maroon-200 pt-3">
                        <span>Grand Total</span>
                        <span className="text-gold-700">
                          ₹{grandTotal.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full luxury-button bg-maroon-800 text-white hover:bg-gold-accent hover:text-black py-4 text-xs font-serif font-bold uppercase tracking-[0.2em] shadow-xl transition-all"
                    >
                      Confirm Order Payment
                    </button>
                    <div className="flex items-center justify-center gap-1 mt-3 text-[9px] text-maroon-600 font-sans">
                      <ShieldCheck size={14} className="text-gold-accent" />
                      <span>Guaranteed Authenticity & Insured Dispatch</span>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
