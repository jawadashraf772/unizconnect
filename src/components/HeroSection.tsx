"use client";

import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";
import UniversitiesSection from "./UniversitiesSection";

export default function HeroSection() {
  const scrollToForm = () => {
    const element = document.getElementById("booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-8 sm:pt-16 lg:pt-20 lg:pb-12">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-violet-50" />

      {/* Decorative gradient blobs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-[100px] -z-10 animate-gpu-blob-1 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-violet-300/20 rounded-full blur-[100px] -z-10 animate-gpu-blob-2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-fuchsia-200/15 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
          
          {/* Target Audience Badge */}
          <div className="flex flex-col items-center gap-2">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-200/50 text-purple-700 text-[10px] sm:text-xs font-black tracking-widest uppercase shadow-sm"
            >
              College Students • Undergraduates • <br className="inline sm:hidden" /> Graduates • Working Professionals
            </motion.div>

          </div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.2] px-2"
          >
            Get Personalized Guidance That <br className="hidden sm:inline" />
            Has Helped{" "}
            <span className="relative inline-block text-red-600 px-1 font-black">
              1300+ Students
              <span className="absolute left-0 bottom-1.5 w-full h-2 bg-red-100 rounded-full -z-10 transform -rotate-1" />
            </span>{" "}
            <br className="hidden sm:inline" />
            Make Smarter Decisions About <br className="hidden sm:inline" />
            <span className="text-purple-600">
              Admissions, Scholarships, & Careers
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-5xl mx-auto font-semibold leading-relaxed px-4 flex items-center justify-center gap-2 flex-wrap sm:flex-nowrap"
          >
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
              whileHover={{ scale: 1.08, rotate: -2 }}
              whileTap={{ scale: 0.92, rotate: 2 }}
              className="w-full sm:w-auto px-12 py-5 bg-white text-purple-700 font-black text-xl rounded-full shadow-2xl shadow-purple-500/20 cursor-pointer border border-purple-200 transition-all flex items-center justify-center gap-3 mx-auto whitespace-nowrap"
            >
              Yes! I want to Book My 1:1 Session 🎁
            </motion.button>

            {/* Overlapping Trust Badge */}
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 justify-center bg-transparent sm:bg-white/60 sm:backdrop-blur-xs py-3.5 px-6 sm:rounded-full border-0 sm:border sm:border-purple-100 shadow-none sm:shadow-sm max-w-max mx-auto">
              <div className="flex justify-center gap-2">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="/image 1.webp"
                  alt="Student 1"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="/image 2.webp"
                  alt="Student 2"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="/image 3.webp"
                  alt="Student 3"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="/image 4.webp"
                  alt="Student 4"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="/image 5.webp"
                  alt="Student 5"
                />
              </div>
              <div className="flex flex-col items-center sm:items-start gap-0.5">
                <div className="flex gap-0.5 text-yellow-500">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                </div>
                <span className="text-[#3b5998] text-xs sm:text-sm font-bold tracking-wide">
                  Trusted by students from different institutions and cities
                </span>
            </div>
          </div>
        </motion.div>

        </div>
      </div>

      {/* Universities Marquee / Showcase emerged into Hero - Full Width */}
      <div className="w-full relative z-20 mt-8 sm:mt-12">
        <UniversitiesSection />
      </div>
    </section>
  );
}
