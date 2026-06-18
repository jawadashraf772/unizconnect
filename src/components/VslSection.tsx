"use client";

import { motion } from "framer-motion";
import { Play, Video, Sparkles, Star } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function VslSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPlaying) {
      document.body.style.overflow = "hidden";
      document.body.style.cursor = "default";
    } else {
      document.body.style.overflow = "";
      document.body.style.cursor = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.cursor = "";
    };
  }, [isPlaying]);

  const scrollToForm = () => {
    const element = document.getElementById("booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const transformations = [
    {
      name: "Ahmad Bilal",
      city: "Lahore",
      gap: "9 years of study gap",
      result: "Won £13,000 Scholarship (PKR 4.8 Million+)",
      uni: "University of Bristol",
      avatar: "/avatar_ahmad.png?v=2",
      avatarScale: "scale-[1.45]",
      quote: "It was an excellent session and it lasted more than 80 minutes (2x the originally allotted slot). Ayesha was kind enough to listen to and address my queries. I had no idea of where to start my journey from but this session gave me a fair idea about the journey ahead."
    },
    {
      name: "Kashmala Khan",
      city: "Lahore",
      gap: "BNU Graduate",
      result: "Now at Cardiff Met University, UK",
      uni: "Cardiff Met University",
      avatar: "/kashmala.png?v=2",
      avatarScale: "scale-[1.85]",
      quote: "I've been working with Ayesha since 2023, and I can confidently say that my journey toward pursuing a master's degree would not have been the same without her support and guidance. She never rushed the process and always gave me the time and space I needed to manage things at my own pace, something I deeply appreciated, especially during moments of overwhelm."
    },
    {
      name: "Awaisha Inayat",
      city: "Karachi",
      gap: "10 years of study gap",
      result: "Won £64,000 Total Scholarship (PKR 2.38 Crore+)",
      uni: "LSE, Nottingham, NTU, & Sussex",
      avatar: "/avatar_awaisha.png?v=2",
      avatarScale: "scale-[1.45]",
      quote: "UnizConnect has been an incredible support system for me and I can't thank Ayesha Saleem enough for her guidance. She has been more than just helpful, she's a true mentor and guide. As a student, I was unsure about many things, but Ayesha helped me figure out my passion, guided me through the entire process."
    }
  ];

  return (
    <section 
      id="video" 
      ref={containerRef} 
      className="relative py-20 lg:py-28 overflow-hidden noise-overlay"
      style={{ zIndex: isPlaying ? 999999 : undefined }}
    >
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



      {/* Full width content flex container */}
      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* Section Heading (Constrained Width) */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 mb-12">
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

        {/* Inline Video Player (Centered & Constrained Width) */}
        <div className="max-w-4xl w-full mx-auto px-4 my-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="relative w-full aspect-video rounded-3xl overflow-hidden border-4 border-purple-400/30 bg-purple-950 shadow-2xl transition-all duration-300"
          >
            <video 
              className="w-full h-full object-cover"
              src="https://assets.cdn.filesafe.space/B1KkpgABfPleeIPoYy8x/media/697b5bdbb3ae839f21a29faa.mp4"
              poster="https://assets.cdn.filesafe.space/B1KkpgABfPleeIPoYy8x/media/6928bdac571896657f6dba4d.png"
              controls
              playsInline
              preload="metadata"
            />
          </motion.div>
        </div>

        {/* Testimonials Boxes in Purple Background */}
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transformations.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.15 }}
                whileHover={{ y: -6, scale: 1.01, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)", transition: { type: "spring", stiffness: 300 } }}
                className="bg-white/95 backdrop-blur-sm border border-purple-500/20 p-8 rounded-3xl relative flex flex-col justify-between h-full hover:border-purple-300 shadow-2xl group transition-all duration-300 text-slate-800"
              >
                <div className="flex flex-col gap-4">
                  {/* Top row: University badge */}
                  <div className="flex justify-between items-start">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider border border-purple-100">
                      <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                      {t.uni}
                    </div>
                  </div>

                  {/* Profile info: Avatar, Name, City/Gap */}
                  <div className="flex items-center gap-4 py-2 border-b border-purple-100 pb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-200 flex-shrink-0 bg-white">
                      <img src={t.avatar} alt={t.name} className={`w-full h-full object-cover origin-center ${t.avatarScale}`} />
                    </div>
                    <div>
                      <h4 className="font-black text-base text-slate-900 group-hover:text-purple-600 transition-colors leading-tight">{t.name}</h4>
                      <div className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wide">
                        {t.city} • {t.gap}
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ scale: 1.5, rotate: 15 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 text-base font-medium leading-relaxed my-2">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Result banner at the bottom */}
                <div className="mt-6 pt-4 border-t border-purple-500/10">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-purple-100 to-fuchsia-100 text-purple-800 text-sm font-black py-2.5 px-4 rounded-xl text-center shadow-sm"
                  >
                    {t.result}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* VSL CTA (Constrained Width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="pt-6 mt-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.button 
            whileHover={{ scale: 1.08, rotate: -2 }}
            whileTap={{ scale: 0.92, rotate: 2 }}
            onClick={scrollToForm}
            className="w-full sm:w-auto px-12 py-5 bg-white text-purple-700 font-black text-xl rounded-full shadow-2xl shadow-purple-500/20 cursor-pointer border-b-4 border-purple-200 active:border-b-0 active:mt-1 transition-all flex items-center justify-center gap-3 mx-auto"
          >
            <Sparkles className="w-6 h-6" />
            Yes! I want to Book My 1:1 Session
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
