"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
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
            Before you apply, get clarity from someone who{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-300">
              has already guided 1300+ people like you.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-purple-200 max-w-xl mx-auto text-xl font-black leading-relaxed uppercase tracking-wider"
          >
            Your Future Deserves More Than Random Advice!
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
            className="w-full sm:w-auto px-12 py-6 bg-white text-purple-700 font-black text-2xl rounded-full shadow-2xl shadow-purple-500/20 cursor-pointer border-b-4 border-purple-200 active:border-b-0 active:mt-1 transition-all flex items-center gap-3 mx-auto justify-center whitespace-nowrap"
          >
            <Sparkles className="w-7 h-7" />
            Book Your 1:1 Session
          </motion.button>
        </motion.div>

        {/* Footer Info */}
        <div className="border-t-2 border-purple-800/50 pt-10 mt-16 space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 relative rounded-2xl bg-white/10 flex items-center justify-center shadow-lg overflow-hidden">
              <Image 
                src="/logo.webp" 
                alt="UnizConnect Logo" 
                fill
                className="object-contain p-2"
              />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://www.facebook.com/unizconnect" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-white transition-all duration-300 p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 active:scale-95 flex items-center justify-center"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/unizconnect/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-white transition-all duration-300 p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 active:scale-95 flex items-center justify-center"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/unizconnect/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-white transition-all duration-300 p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:scale-110 active:scale-95 flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-purple-300 font-bold">
            <span>© {new Date().getFullYear()} UnizConnect. All Rights Reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
