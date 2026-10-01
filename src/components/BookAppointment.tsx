"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Calendar, Clock, MessageSquare, CheckCircle2, Sparkles } from "lucide-react";

interface BookAppointmentProps {
  preselectedProduct?: string;
}

export default function BookAppointment({ preselectedProduct }: BookAppointmentProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    timeSlot: "Morning (11:00 AM - 1:00 PM)",
    details: preselectedProduct ? `Interested in fitting trial for: ${preselectedProduct}` : "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="visit" className="py-24 bg-editorial-grid relative border-b border-neutral-300 select-none">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-stretch bg-white border border-neutral-300 shadow-2xl overflow-hidden">
          
          {/* Left Side Store Showroom Banner */}
          <div className="lg:w-1/2 relative min-h-[420px] lg:min-h-full bg-neutral-900 flex flex-col justify-between p-8 sm:p-12 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1200"
              alt="Lucky Mens Wear Showroom"
              className="absolute inset-0 w-full h-full object-cover opacity-40 brightness-75"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src =
                  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=1200";
              }}
            />
            {/* Dark Vignette Overlay for Crisp Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-transparent" />

            <div className="relative z-10">
              <span className="bg-[#007a5e] text-white text-[10px] uppercase tracking-[0.25em] font-editorial font-bold px-3 py-1 inline-flex items-center gap-1.5 shadow-md">
                <Sparkles size={12} /> Personal Groom Fitting Trial
              </span>
            </div>

            <div className="relative z-10 mt-auto pt-16 text-white space-y-4">
              <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-snug drop-shadow-md">
                Visit Lucky Mens Wear Dabra
              </h3>
              <p className="font-sans text-neutral-300 text-xs sm:text-sm max-w-md leading-relaxed">
                Experience VIP grooming consultation & bespoke fitting trials for wedding suits, royal sherwanis, and Indo-Western outfits at our Dabra showroom.
              </p>

              <div className="pt-4 border-t border-white/20 flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#007a5e] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-editorial tracking-widest text-emerald-300 font-bold">
                    Store Helpline (Dabra)
                  </p>
                  <span className="font-editorial text-base tracking-wider font-bold text-white">
                    +91 98930 12345
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Interactive Booking Form */}
          <div className="lg:w-1/2 p-8 sm:p-12 bg-[#f8f7f4] flex flex-col justify-center border-l border-neutral-200">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 px-4 space-y-4"
              >
                <div className="w-16 h-16 bg-[#007a5e]/15 text-[#007a5e] rounded-full flex items-center justify-center mx-auto border border-[#007a5e]">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-editorial text-3xl font-bold text-[#121212] uppercase tracking-tight">
                  Fitting Trial Confirmed!
                </h3>
                <p className="font-sans text-neutral-700 text-sm leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong className="text-[#007a5e]">{formData.name}</strong>. Our master stylist at Lucky Mens Wear Dabra will contact you at <strong>{formData.phone}</strong> to confirm your fitting slot for <strong>{formData.date || "your requested date"}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="editorial-btn-emerald px-8 py-3 text-xs font-editorial font-bold uppercase tracking-widest mt-4 inline-block"
                >
                  Book Another Appointment
                </button>
              </motion.div>
            ) : (
              <>
                <div className="mb-8 text-center lg:text-left">
                  <span className="font-handwritten text-xl text-[#007a5e] block mb-1">
                    Reserve VIP Appointment
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#121212] uppercase tracking-tight">
                    Book Trial Session
                  </h2>
                  <div className="w-16 h-1 bg-[#007a5e] mt-3 mx-auto lg:mx-0" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-neutral-700 block mb-2 font-bold font-editorial">
                        Your Full Name
                      </label>
                      <div className="flex items-center border-b border-neutral-400 focus-within:border-[#007a5e] transition-colors pb-2">
                        <User size={16} className="text-[#007a5e] mr-3 shrink-0" />
                        <input
                          type="text"
                          placeholder="Amit Sharma"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-transparent border-none outline-none w-full text-[#121212] font-sans text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-neutral-700 block mb-2 font-bold font-editorial">
                        Contact Number
                      </label>
                      <div className="flex items-center border-b border-neutral-400 focus-within:border-[#007a5e] transition-colors pb-2">
                        <Phone size={16} className="text-[#007a5e] mr-3 shrink-0" />
                        <input
                          type="tel"
                          placeholder="+91 98930 12345"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-transparent border-none outline-none w-full text-[#121212] font-sans text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-neutral-700 block mb-2 font-bold font-editorial">
                        Preferred Date
                      </label>
                      <div className="flex items-center border-b border-neutral-400 focus-within:border-[#007a5e] transition-colors pb-2">
                        <Calendar size={16} className="text-[#007a5e] mr-3 shrink-0" />
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="bg-transparent border-none outline-none w-full text-[#121212] font-sans text-sm cursor-pointer"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-neutral-700 block mb-2 font-bold font-editorial">
                        Time Slot
                      </label>
                      <div className="flex items-center border-b border-neutral-400 focus-within:border-[#007a5e] transition-colors pb-2">
                        <Clock size={16} className="text-[#007a5e] mr-3 shrink-0" />
                        <select
                          value={formData.timeSlot}
                          onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                          className="bg-transparent border-none outline-none w-full text-[#121212] font-sans text-sm cursor-pointer"
                        >
                          <option>Morning (11:00 AM - 1:00 PM)</option>
                          <option>Afternoon (1:00 PM - 4:00 PM)</option>
                          <option>Evening (4:00 PM - 8:00 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-neutral-700 block mb-2 font-bold font-editorial">
                      Wedding / Celebration Details
                    </label>
                    <div className="flex items-start border-b border-neutral-400 focus-within:border-[#007a5e] transition-colors pb-2">
                      <MessageSquare size={16} className="text-[#007a5e] mr-3 mt-1 shrink-0" />
                      <textarea
                        placeholder="Tell us about your wedding date, suit/sherwani preferences..."
                        rows={3}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="bg-transparent border-none outline-none w-full text-[#121212] font-sans text-sm resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="editorial-btn-emerald w-full py-4 text-xs font-editorial font-bold uppercase tracking-[0.2em] shadow-lg mt-6"
                  >
                    Confirm Fitting Invitation
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

