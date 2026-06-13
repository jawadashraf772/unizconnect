"use client";

import { motion } from "framer-motion";
import { Play, Video, Sparkles } from "lucide-react";
import { useState } from "react";

export default function VslSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToForm = () => {
    const element = document.getElementById("booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="video" className="relative py-20 lg:py-28 overflow-hidden noise-overlay">
      {/* Deep purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-violet-900 to-indigo-950" />
      
      {/* Animated gradient blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px]" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[100px]" 
      />

      {/* Floating sparkle emojis */}
      {["✨", "🎬", "🎓", "💜"].map((e, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl select-none opacity-20 z-10"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 5 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
          style={{
            top: `${15 + i * 20}%`,
            left: `${10 + i * 25}%`,
          }}
        >
          {e}
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative z-10">
        
        {/* Section Heading */}
        <div className="space-y-6">
          <motion.div 
            initial={{ scale: 0.5, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-500/20 border-2 border-purple-400/30 text-purple-200 font-black text-sm tracking-widest uppercase backdrop-blur-sm"
          >
            <Video className="w-4 h-4" />
            Watch First
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black max-w-4xl mx-auto leading-tight text-white"
          >
            Before you book, watch Ayesha, Founder of UnizConnect, explain what's covered in a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-300">
              1:1 session
            </span>
          </motion.h2>
        </div>

        {/* Video Embed Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
          whileHover={{ scale: 1.01, boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.3)" }}
          className="relative max-w-4xl mx-auto aspect-video rounded-[2rem] overflow-hidden border-4 border-purple-400/30 bg-purple-950 shadow-2xl shadow-purple-900/50 group cursor-none transition-all duration-300"
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying ? (
            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-purple-900/80 via-purple-950/90 to-violet-950/95 z-10 p-6">
              {/* Play Button with pulse ring */}
              <div className="relative mb-8">
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-6 bg-purple-500 rounded-full" 
                />
                <motion.div 
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="absolute -inset-10 bg-purple-400 rounded-full" 
                />
                <motion.button 
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative w-24 h-24 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-purple-500/50 cursor-none border-4 border-white/20"
                >
                  <Play className="w-10 h-10 fill-current ml-1.5" />
                </motion.button>
              </div>

              {/* Title Overlay */}
              <h3 className="text-2xl sm:text-3xl font-black max-w-lg text-white mb-3 select-none leading-tight">
                Your Study Abroad Decision Needs a 1:1 Session, Not Guesswork
              </h3>
              <p className="text-base text-purple-300 select-none font-bold">Click to watch video explanation (2 mins)</p>
            </div>
          ) : (
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              src="https://assets.cdn.filesafe.space/B1KkpgABfPleeIPoYy8x/media/697b5bdbb3ae839f21a29faa.mp4"
              autoPlay
              controls
              playsInline
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-violet-900 -z-10" />
        </motion.div>

        {/* VSL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="pt-6"
        >
          <motion.button 
            whileHover={{ scale: 1.08, rotate: -2 }}
            whileTap={{ scale: 0.92, rotate: 2 }}
            onClick={scrollToForm}
            className="w-full sm:w-auto px-12 py-5 bg-white text-purple-700 font-black text-xl rounded-full shadow-2xl shadow-purple-500/20 cursor-none border-b-4 border-purple-200 active:border-b-0 active:mt-1 transition-all flex items-center justify-center gap-3 mx-auto"
          >
            <Sparkles className="w-6 h-6" />
            Yes! I want to Book My 1:1 Session
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
