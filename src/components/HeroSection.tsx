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
    <section id="home" className="relative overflow-hidden pt-24 pb-12 lg:pt-36 lg:pb-16">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-violet-50" />

      {/* Decorative gradient blobs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-[100px] -z-10 animate-gpu-blob-1 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-violet-300/20 rounded-full blur-[100px] -z-10 animate-gpu-blob-2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-fuchsia-200/15 rounded-full blur-[100px] -z-10 pointer-events-none" />

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
            <span className="relative inline-block text-red-600 px-1 font-black">
              1300+ Students
              <span className="absolute left-0 bottom-1.5 w-full h-2 bg-red-100 rounded-full -z-10 transform -rotate-1" />
            </span>{" "}
            Make Smarter Decisions About{" "}
            <span className="text-purple-600">
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
              className="w-full sm:w-auto px-16 py-6 bg-gradient-to-r from-purple-800 to-indigo-900 text-white font-black text-xl rounded-full shadow-2xl shadow-purple-900/40 cursor-pointer border-b-4 border-purple-950 active:border-b-0 active:mt-1 transition-all flex items-center justify-center gap-3"
            >
              <span>Book Your 1:1 Session</span>
              <span className="text-xl">➔</span>
            </motion.button>

            {/* Overlapping Trust Badge */}
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 justify-center bg-white/60 backdrop-blur-xs py-3.5 px-6 rounded-full border border-purple-100 shadow-sm max-w-max mx-auto">
              <div className="flex -space-x-3">
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

          {/* Universities Marquee / Showcase emerged into Hero */}
          <div className="w-full relative z-20 mt-8 sm:mt-12">
            <UniversitiesSection />
          </div>

        </div>
      </div>
    </section>
  );
}
