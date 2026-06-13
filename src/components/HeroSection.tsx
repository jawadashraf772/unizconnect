"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, GraduationCap, CheckCircle, Sparkles } from "lucide-react";

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
    <section id="home" className="relative overflow-hidden py-20 lg:py-32">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-purple-200 text-purple-700 font-black text-sm tracking-wider shadow-lg shadow-purple-500/10"
            >
              <Award className="w-5 h-5 text-purple-600" />
              British Council Certified
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.05]"
            >
              One Wrong Study Abroad Decision{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-purple-500 animate-gradient">
                Can Cost You Time and Money.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              Wrong guidance can cost scholarships, time, and peace.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4"
            >
              <motion.button 
                onClick={scrollToForm}
                whileHover={{ scale: 1.06, rotate: -1 }}
                whileTap={{ scale: 0.94, rotate: 1 }}
                animate={{ boxShadow: ["0 0 0 0 rgba(124,58,237,0)", "0 0 0 12px rgba(124,58,237,0)"] }}
                transition={{ boxShadow: { duration: 1.5, repeat: Infinity } }}
                className="w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-black text-xl rounded-full shadow-2xl shadow-purple-500/30 cursor-none border-b-4 border-purple-800 active:border-b-0 active:mt-1 transition-all flex items-center justify-center gap-3"
              >
                <Sparkles className="w-6 h-6" />
                Book Your 1:1 Strategy Session
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0"
            >
              {[
                { val: "1,000+", label: "Students", color: "text-purple-600" },
                { val: "Top Offers", label: "Global Scope", color: "text-violet-600" },
                { val: "Scholarship Wins", label: "Secured", color: "text-purple-700" },
                { val: "Certified", label: "British Council", color: "text-violet-700" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -8, scale: 1.08, rotate: i % 2 === 0 ? 2 : -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center lg:items-start bg-white p-4 rounded-2xl shadow-md border-2 border-purple-100/50 cursor-crosshair hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 transition-colors"
                >
                  <span className={`text-xl sm:text-2xl font-black ${stat.color} leading-tight`}>{stat.val}</span>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Visual Portrait */}
          <div className="lg:col-span-5 flex justify-center mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.03, rotate: 1, transition: { type: "spring", stiffness: 300 } }}
              transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.3 }}
              className="relative w-full max-w-[420px] aspect-[4/5]"
            >
              {/* Playful blob behind image */}
              <motion.div 
                animate={{ rotate: [6, -4, 6], scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 bg-gradient-to-tr from-purple-500 via-violet-500 to-purple-600 rounded-[3rem] opacity-30 blur-xl" 
              />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-[2.5rem] border-8 border-white shadow-2xl shadow-purple-500/20 overflow-hidden bg-purple-100 transform transition-transform">
                <img 
                  src="/ayesha.webp" 
                  alt="Ayesha Saleem - UnizConnect Founder" 
                  className="w-full h-full object-cover rounded-[2rem]"
                />
              </div>

              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-3xl shadow-2xl shadow-purple-500/10 flex items-center gap-3 border-2 border-purple-100"
              >
                <div className="p-2 bg-purple-100 rounded-2xl">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-purple-400 font-black uppercase tracking-wider">Rating</p>
                  <p className="text-base font-black text-slate-800">100% Honest Advice</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-3xl shadow-2xl shadow-purple-500/10 flex items-center gap-3 border-2 border-purple-100"
              >
                <div className="p-2 bg-violet-100 rounded-2xl">
                  <GraduationCap className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <p className="text-xs text-violet-400 font-black uppercase tracking-wider">Founder</p>
                  <p className="text-base font-black text-slate-800">UnizConnect</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
