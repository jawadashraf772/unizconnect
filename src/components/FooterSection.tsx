"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import Image from "next/image";

export default function FooterSection() {
  const scrollToForm = () => {
    const element = document.getElementById("booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden noise-overlay">
      {/* Deep purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-violet-950 to-indigo-950" />
      
      {/* Animated blobs */}
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-600 rounded-full blur-[120px]" 
      />

      {/* Floating emojis */}
      {["🎓", "✈️", "🌍", "💜", "✨", "🚀"].map((e, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl sm:text-5xl select-none opacity-10 z-10"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
          style={{
            top: `${10 + i * 15}%`,
            left: `${5 + i * 17}%`,
          }}
        >
          {e}
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 lg:py-28 relative z-10">
        
        {/* Pitch Headline */}
        <div className="space-y-8 mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black max-w-4xl mx-auto leading-tight text-white"
          >
            Before you apply, get clarity from someone who can{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-300">
              review your profile properly.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-purple-200 max-w-xl mx-auto text-xl font-medium leading-relaxed"
          >
            Your future deserves more than random advice. Make your study abroad decision with absolute confidence.
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          <motion.button 
            whileHover={{ scale: 1.08, rotate: -2 }}
            whileTap={{ scale: 0.92, rotate: 2 }}
            animate={{ boxShadow: ["0 0 0 0 rgba(167,139,250,0)", "0 0 0 20px rgba(167,139,250,0)"] }}
            transition={{ boxShadow: { duration: 1.5, repeat: Infinity } }}
            onClick={scrollToForm}
            className="w-full sm:w-auto px-12 py-6 bg-white text-purple-700 font-black text-2xl rounded-full shadow-2xl shadow-purple-500/20 cursor-none border-b-4 border-purple-200 active:border-b-0 active:mt-1 transition-all flex items-center gap-3 mx-auto justify-center"
          >
            <Sparkles className="w-7 h-7" />
            Book Your 1:1 Strategy Session
          </motion.button>
        </motion.div>

        {/* Footer Info */}
        <div className="border-t-2 border-purple-800/50 pt-10 mt-16 space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 relative rounded-2xl bg-white/10 flex items-center justify-center shadow-lg overflow-hidden">
              <Image 
                src="/logo.webp" 
                alt="UnizConnect Logo" 
                fill
                className="object-contain p-1"
              />
            </div>
            <span className="font-black text-xl text-white tracking-tight">
              Uniz<span className="text-purple-300">Connect</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-purple-300 font-bold">
            <span>© {new Date().getFullYear()} UnizConnect. All Rights Reserved.</span>
            <span className="hidden sm:inline text-purple-600">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-pink-400 fill-pink-400 inline" /> for Students
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
