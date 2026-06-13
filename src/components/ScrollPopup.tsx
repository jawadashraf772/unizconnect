"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Heart, ShieldCheck, TrendingUp } from "lucide-react";

export function ScrollPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessageIdx, setCurrentMessageIdx] = useState(0);
  const [hasClosed, setHasClosed] = useState(false);

  const messages = [
    {
      icon: Sparkles,
      text: "Only 3 slots left for Ayesha's sessions this week.",
      badge: "Urgent",
      color: "from-amber-500 to-orange-500",
      textClass: "text-amber-500"
    },
    {
      icon: TrendingUp,
      text: "A LUMS student just booked a 1:1 strategy session 5m ago.",
      badge: "Live Proof",
      color: "from-purple-500 to-indigo-500",
      textClass: "text-purple-600"
    },
    {
      icon: ShieldCheck,
      text: "100% money-back guarantee if you don't get absolute clarity.",
      badge: "Risk-Free",
      color: "from-emerald-500 to-teal-500",
      textClass: "text-emerald-600"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (hasClosed) return;
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasClosed]);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentMessageIdx((prev) => (prev + 1) % messages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    setHasClosed(true);
  };

  const scrollToForm = () => {
    const element = document.getElementById("booking-form-fields");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ActiveIcon = messages[currentMessageIdx].icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm w-full mx-auto sm:mx-0 p-1"
        >
          <div className="bg-white/95 backdrop-blur-md border-2 border-purple-100 rounded-3xl p-5 shadow-2xl relative flex gap-4 items-start cursor-crosshair">
            
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Icon with animated rings */}
            <div className="relative shrink-0 mt-1">
              <div className="absolute -inset-1.5 bg-purple-500 rounded-2xl opacity-20 animate-ping" />
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/20">
                <ActiveIcon className="w-6 h-6 animate-pulse" />
              </div>
            </div>

            {/* Middle Content */}
            <div className="space-y-2 pr-4">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-black uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-md text-slate-500`}>
                  {messages[currentMessageIdx].badge}
                </span>
              </div>
              <p className="text-slate-800 font-bold text-sm leading-snug">
                {messages[currentMessageIdx].text}
              </p>
              
              <button 
                onClick={scrollToForm}
                className="text-xs font-black text-purple-600 hover:text-purple-800 transition-colors flex items-center gap-1 group uppercase tracking-widest pt-1"
              >
                Book Your Slot Now
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
