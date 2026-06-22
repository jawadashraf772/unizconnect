"use client";

import { motion } from "framer-motion";
import { Check, Gift, Sparkles, Flame, ShieldCheck, Users, Zap, ArrowRight } from "lucide-react";

export default function OfferSection() {
  const scrollToForm = () => {
    const element = document.getElementById("booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const inclusions = [
    "Personalized guidance",
    "Admission and scholarship discussion",
    "University & course suggestions",
    "Roadmap and timeline",
    "Career direction",
    "Answers to all your queries",
  ];

  const bonuses = [
    { num: 1, text: "Free follow-up questions" },
    { num: 2, text: "Custom recap email" },
    { num: 3, text: "Direct access to Ayesha" },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-white">
      {/* Light Theme Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-violet-50" />

      {/* Soft gradient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[15%] w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-[150px] mix-blend-multiply pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[10%] w-[600px] h-[600px] bg-indigo-300/30 rounded-full blur-[180px] mix-blend-multiply pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80 }}
          className="text-center mb-20 space-y-5"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-purple-100/80 border border-purple-200 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-purple-700 font-black text-xs uppercase tracking-[0.2em]">Exclusive Strategy Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] lg:whitespace-nowrap">
            Take Your{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600">
                FIRST STEP
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full opacity-60"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>{" "}
            Today
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Skip the guesswork. Stop wasting months reading generic online advice. Sit down for a hyper-personalized 1:1 strategy session with Ayesha and leave with a clear blueprint.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Center Column - Premium Pricing Card (Light Theme) */}
          <div className="lg:col-span-12 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="w-full max-w-[520px] relative group"
            >
              {/* Animated border glow */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300 rounded-[2rem] opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-md" />

              {/* Card body */}
              <div className="relative bg-white backdrop-blur-2xl rounded-[2rem] p-8 sm:p-10 border border-purple-100 overflow-hidden shadow-xl">

                {/* Title & Price */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    40-Minute 1:1 Consultation
                  </h3>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">
                      PKR 5,000
                    </span>
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent mb-8" />

                {/* Inclusions */}
                <div className="space-y-5 mb-8">
                  <p className="text-[11px] font-black text-purple-600 uppercase tracking-[0.2em]">What You'll Get in This Session</p>
                  <ul className="space-y-3">
                    {inclusions.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="bg-gradient-to-br from-purple-100 to-fuchsia-100 border border-purple-200 p-1 rounded-lg shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                          <Check className="w-3 h-3 text-purple-600" />
                        </div>
                        <span className="text-sm font-semibold text-slate-700 leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Bonuses Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative bg-gradient-to-br from-purple-50 to-fuchsia-50 border border-purple-100 rounded-2xl p-6 overflow-hidden shadow-sm mt-6 mb-8"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl" />
                  <p className="text-xs font-black text-yellow-600 uppercase tracking-[0.15em] flex items-center gap-2 mb-4 relative">
                    <Gift className="w-4 h-4 text-yellow-500" /> Exclusive Access Bonuses (PKR 15k+ value)
                  </p>
                  <div className="space-y-3 relative">
                    {bonuses.map((bonus, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <span className="w-7 h-7 rounded-lg bg-yellow-100 border border-yellow-200 flex items-center justify-center text-xs text-yellow-600 font-black shrink-0">
                          {bonus.num}
                        </span>
                        <span>{bonus.text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Action Button */}
                <motion.button 
                  onClick={scrollToForm}
                  whileHover={{ scale: 1.08, rotate: -2 }}
                  whileTap={{ scale: 0.92, rotate: 2 }}
                  className="w-full sm:w-auto px-12 py-5 bg-white text-purple-700 font-black text-xl rounded-full shadow-2xl shadow-purple-500/20 cursor-pointer border border-purple-200 transition-all flex items-center justify-center gap-3 mx-auto whitespace-nowrap"
                >
                  Yes! I want to Book My 1:1 Session 🎁
                </motion.button>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
