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

  const navLinks = [
    { label: "Watch Intro", target: "video" },
    { label: "What's Covered", target: "what-is-covered" },
    { label: "Why Trust Ayesha", target: "about-ayesha" },
    { label: "FAQs", target: "faq" }
  ];

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
          className="flex items-center gap-3 cursor-none"
        >
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 h-10 sm:w-12 sm:h-12 relative rounded-2xl bg-purple-100 flex items-center justify-center shadow-lg shadow-purple-500/10 overflow-hidden"
          >
            <Image 
              src="/logo.webp" 
              alt="UnizConnect Logo" 
              fill
              className="object-contain p-1.5"
            />
          </motion.div>
          <span className="font-black text-lg sm:text-xl text-slate-900 tracking-tight hidden xs:block">
            Uniz<span className="text-purple-600">Connect</span>
          </span>
        </motion.div>

        {/* Center Navigation Links (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link, idx) => (
            <motion.button
              key={idx}
              onClick={() => scrollToSection(link.target)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="text-slate-600 hover:text-purple-600 font-bold text-sm lg:text-base tracking-wide transition-colors cursor-none relative group"
            >
              {link.label}
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full" />
            </motion.button>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.08, rotate: -1 }}
          whileTap={{ scale: 0.95, rotate: 1 }}
          onClick={() => scrollToSection("booking-form")}
          className="px-5 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-black text-sm rounded-full shadow-lg shadow-purple-500/25 cursor-none flex items-center gap-2 border-b-2 border-purple-800 active:border-b-0 transition-all"
        >
          <Sparkles className="w-4 h-4" />
          Book Session
        </motion.button>

      </div>
    </motion.header>
  );
}
