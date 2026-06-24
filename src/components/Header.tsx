"use client";

import { motion } from "framer-motion";
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
          className="flex items-center cursor-pointer"
        >
          <div className="w-36 h-12 sm:w-48 sm:h-16 relative flex items-center justify-center overflow-hidden">
            <Image 
              src="/unizconnect.webp" 
              alt="UnizConnect Logo" 
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("booking-form")}
          className="px-6 py-3 sm:px-8 sm:py-3.5 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-black text-sm sm:text-base rounded-full shadow-lg shadow-purple-500/25 cursor-pointer flex items-center gap-2 border-b-2 border-purple-800 active:border-b-0 transition-all"
        >
          Book Session
        </button>

      </div>
    </motion.header>
  );
}
