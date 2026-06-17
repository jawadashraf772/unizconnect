"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="sticky top-0 bg-white/70 backdrop-blur-xl z-50 border-b-2 border-purple-100/50 shadow-sm shadow-purple-500/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo and Brand Name */}
        <motion.div 
          onClick={() => scrollToSection("home")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-14 h-14 sm:w-18 sm:h-18 relative flex items-center justify-center overflow-hidden">
            <Image 
              src="/logo.webp" 
              alt="UnizConnect Logo" 
              fill
              className="object-contain"
            />
          </div>
          <span className="font-black text-lg sm:text-xl text-slate-900 tracking-tight hidden xs:block">
            Uniz<span className="text-purple-600">Connect</span>
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.08, rotate: -1 }}
          whileTap={{ scale: 0.95, rotate: 1 }}
          onClick={() => scrollToSection("booking-form")}
          className="px-5 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-black text-sm rounded-full shadow-lg shadow-purple-500/25 cursor-pointer flex items-center gap-2 border-b-2 border-purple-800 active:border-b-0 transition-all"
        >
          <Sparkles className="w-4 h-4" />
          Book Session
        </motion.button>

      </div>
    </motion.header>
  );
}
