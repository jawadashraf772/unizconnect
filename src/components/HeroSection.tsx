"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToForm = () => {
    const element = document.getElementById("booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingEmojis = [
    { char: "🎓", top: "15%", left: "12%", delay: 0, duration: 6 },
    { char: "✈️", top: "55%", left: "85%", delay: 1, duration: 8 },
    { char: "🌍", top: "75%", left: "20%", delay: 2, duration: 7 },
    { char: "✨", top: "25%", left: "70%", delay: 0.5, duration: 5 },
    { char: "📚", top: "65%", left: "10%", delay: 1.5, duration: 9 },
    { char: "💜", top: "85%", left: "75%", delay: 2.5, duration: 6 },
    { char: "🚀", top: "35%", left: "45%", delay: 1.2, duration: 7 },
  ];

  return (
    <section id="home" className="relative overflow-hidden py-24 lg:py-36">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-violet-50" />

      {/* Playful Floating Background Emojis */}
      {floatingEmojis.map((emoji, idx) => (
        <motion.div
          key={idx}
          className="absolute text-4xl sm:text-5xl select-none z-0 opacity-15"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: emoji.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: emoji.delay,
          }}
          style={{
            top: emoji.top,
            left: emoji.left,
          }}
        >
          {emoji.char}
        </motion.div>
      ))}

      {/* Decorative gradient blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-[100px] -z-10 mix-blend-multiply" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-violet-300/30 rounded-full blur-[100px] -z-10 mix-blend-multiply" 
      />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-fuchsia-200/20 rounded-full blur-[100px] -z-10 mix-blend-multiply" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-10 max-w-4xl mx-auto">
          
          {/* Target Audience Badge */}
          <div className="flex flex-col items-center gap-3">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-500/10 border border-purple-200/50 text-purple-700 text-xs sm:text-sm font-black tracking-widest uppercase shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              College Students • Undergraduates • Graduates • Working Professionals
            </motion.div>

          </div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.2] px-2"
          >
            Get Personalized Guidance That Has Helped{" "}
            <span className="relative inline-block text-purple-600 px-1 font-black">
              1300+ Students
              <span className="absolute left-0 bottom-1.5 w-full h-2 bg-purple-100 rounded-full -z-10 transform -rotate-1" />
            </span>{" "}
            Make Smarter Decisions About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600">
              Admissions, Scholarships, & Careers
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-5xl mx-auto font-semibold leading-relaxed px-4 flex items-center justify-center gap-2 flex-wrap sm:flex-nowrap"
          >
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 text-purple-600 text-[10px] shrink-0 font-black">✕</span>
            <span className="sm:whitespace-nowrap text-center">without feeling overwhelmed by too many options and too little clarity.</span>
          </motion.p>

          {/* CTA & Rating Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4 flex flex-col items-center gap-6"
          >
            <motion.button 
              onClick={scrollToForm}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-16 py-6 bg-gradient-to-r from-purple-800 to-indigo-900 text-white font-black text-xl rounded-full shadow-2xl shadow-purple-900/40 cursor-none border-b-4 border-purple-950 active:border-b-0 active:mt-1 transition-all flex items-center justify-center gap-3"
            >
              <span>Book Your 1/1 Session</span>
              <span className="text-xl">➔</span>
            </motion.button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              {/* Visual Avatar stack */}
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80"
                ].map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Student ${index + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md select-none shrink-0"
                  />
                ))}
              </div>

              <div className="flex flex-col items-center sm:items-start gap-0.5">
                <div className="flex justify-center gap-0.5 text-amber-400 text-lg">
                  ★ ★ ★ ★ ★
                </div>
                <p className="text-sm text-slate-500 font-bold tracking-wide">
                  Trusted by students from different institutions and cities
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
