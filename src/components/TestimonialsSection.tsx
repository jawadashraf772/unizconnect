"use client";

import { motion } from "framer-motion";
import { Star, Quote, MessageCircle, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const scrollToForm = () => {
    const element = document.getElementById("booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const reviewImages = [
    "/Rectangle 138.png",
    "/Rectangle 136.png",
    "/Rectangle 137.png",
    "/shagufta naz.png",
    "/Muhammad Talal.png",
    "/hamza akram.png",
    "/uzair LSEEE 1.png",
    "/avatar_eesha.png",
    "/WhatsApp Image 2026-06-05 at 12.54.54 AM 1.png",
    "/WhatsApp Image 2026-06-05 at 12.55.31 AM 1.png",
    "/WhatsApp Image 2026-06-05 at 12.56.01 AM 1.png",
    "/avatar_awaisha.png"
  ];

  return (
    <section className="py-24 relative overflow-hidden noise-overlay">
      {/* Deep purple background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-violet-900 to-indigo-950" />
      
      {/* Animated blobs */}
      <motion.div 
        animate={{ scale: [1, 1.3, 1], x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[120px]" 
      />



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <motion.div 
            initial={{ scale: 0.5, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-500/20 border-2 border-purple-400/30 text-purple-200 font-black text-sm tracking-widest uppercase backdrop-blur-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Student Voices
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
          >
            What Our Students{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-300">
              Have To Say…
            </span>
          </motion.h2>
          <p className="text-xl text-purple-200 font-medium max-w-2xl mx-auto">
            Real stories from real students who took the first step with a 1:1 session.
          </p>
        </div>

        {/* Testimonials Grid (Direct Screenshot Images) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-6xl mx-auto mb-16">
          {reviewImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.05 }}
              whileHover={{ y: -6, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
              className="break-inside-avoid bg-white/5 backdrop-blur-sm border-2 border-purple-400/20 rounded-[2rem] p-3 shadow-xl hover:border-purple-400/40 transition-all duration-300 inline-block w-full"
            >
              <img
                src={src}
                alt={`Student success review ${idx + 1}`}
                className="w-full h-auto rounded-[1.5rem] object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="text-center"
        >
          <motion.button 
            whileHover={{ scale: 1.08, rotate: -2 }}
            whileTap={{ scale: 0.92, rotate: 2 }}
            onClick={scrollToForm}
            className="w-full sm:w-auto px-12 py-5 bg-white text-purple-700 font-black text-xl rounded-full shadow-2xl shadow-purple-500/20 border-b-4 border-purple-200 active:border-b-0 active:mt-1 transition-all flex items-center justify-center gap-3 mx-auto"
          >
            <Sparkles className="w-6 h-6" />
            Book Your 1:1 Strategy Session
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
