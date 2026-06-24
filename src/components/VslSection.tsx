"use client";

import { motion } from "framer-motion";
import { Play, Video, Star, User } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export default function VslSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlayingVideo(true);
          })
          .catch((error) => {
            console.error("Video play was prevented:", error);
            setIsPlayingVideo(false);
          });
      }
    }
  };

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

  interface Transformation {
    name: string;
    city: string;
    gap: string;
    result: React.ReactNode;
    uni: string;
    avatar: string;
    avatarScale: string;
    quote: string;
  }

  const transformations: Transformation[] = [
    {
      name: "Awaisha Inayat",
      city: "Karachi",
      gap: "10 years of study gap",
      result: "Won £64,000 Total Scholarship (PKR 2.38 Crore+)",
      uni: "LSE, Nottingham, NTU, & Sussex",
      avatar: "/Awaisha Inayat.webp",
      avatarScale: "scale-100",
      quote: "UnizConnect has been an incredible support system for me and I can't thank Ayesha Saleem enough for her guidance. She has been more than just helpful, she's a true mentor and guide. As a student, I was unsure about many things, but Ayesha helped me figure out my passion, guided me through the entire process."
    },
    {
      name: "Eesha Valait",
      city: "Rawalpindi",
      gap: "Recent graduate",
      result: "Won £27,200 Total Scholarship (PKR 1 crore+)",
      uni: "Liverpool, NTU, & Loughborough",
      avatar: "dummy",
      avatarScale: "scale-100",
      quote: "Miss Ayesha openly discusses every possible scenario and provides clear guidance. Her expertise was evident from the very first session. Unlike other consultants, she gives full support and attention to each individual based on their profile, which helped us secure the best options rather than just any options."
    },
    {
      name: "Ahmad Bilal",
      city: "Lahore",
      gap: "9 years of study gap",
      result: "Won £13,000 Scholarship (PKR 4.8 Million+)",
      uni: "University of Bristol",
      avatar: "/avatar_ahmad.webp?v=2",
      avatarScale: "scale-[1.45]",
      quote: "It was an excellent session and it lasted more than 80 minutes (2x the originally allotted slot). Ayesha was kind enough to listen to and address my queries. I had no idea of where to start my journey from but this session gave me a fair idea about the journey ahead."
    }
  ];

  return (
    <section 
      id="video" 
      ref={containerRef} 
      className="relative pt-10 pb-10 sm:pb-16 lg:pt-16 lg:pb-28 overflow-hidden noise-overlay"
      style={{ zIndex: isPlaying ? 999999 : undefined }}
    >
      {/* Deep purple gradient background */}
      <div className="absolute inset-0 bg-purple-950" />
      
      {/* Animated gradient blobs */}
      <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[100px] hidden sm:block animate-gpu-blob-1 pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[100px] hidden sm:block animate-gpu-blob-2 pointer-events-none" />



      {/* Full width content flex container */}
      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* Section Heading (Constrained Width) */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 mb-6 sm:mb-8">

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black max-w-5xl mx-auto leading-tight text-white"
          >
            Before you book, watch Ayesha, <br className="hidden sm:inline" />
            Founder of UnizConnect, explain what's <br className="hidden sm:inline" />
            covered in a{" "}
            <span className="text-purple-300">
              1:1 session
            </span>
          </motion.h2>
        </div>

        {/* Inline Video Player (Centered & Constrained Width) */}
        <div className="max-w-4xl w-full mx-auto px-4 my-4 sm:my-6 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="relative w-full aspect-video rounded-3xl overflow-hidden border-4 border-purple-400/30 bg-purple-950 shadow-2xl transition-all duration-300"
          >
            <video 
              ref={videoRef}
              className="w-full h-full object-fill"
              poster="/image.png"
              controls
              playsInline
              preload="metadata"
              onPlay={() => setIsPlayingVideo(true)}
              onPause={() => setIsPlayingVideo(false)}
              onEnded={() => setIsPlayingVideo(false)}
            >
              <source 
                src="https://assets.cdn.filesafe.space/B1KkpgABfPleeIPoYy8x/media/697b5bdbb3ae839f21a29faa.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
            {!isPlayingVideo && (
              <div 
                onClick={handlePlayClick}
                className="absolute inset-0 flex items-center justify-center bg-black/10 cursor-pointer z-10 group"
              >
                <div className="w-20 h-20 bg-purple-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:bg-purple-600 border-4 border-purple-400/50">
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </div>
                {/* Glowing ring animation */}
                <div className="absolute w-24 h-24 rounded-full border border-white/50 animate-ping pointer-events-none opacity-40 group-hover:border-purple-500/50" />
              </div>
            )}
          </motion.div>
        </div>

        {/* Testimonials Boxes in Purple Background */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 mb-8 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transformations.map((t, idx) => (
              <div
                key={idx}
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
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-200 flex-shrink-0 bg-slate-50 flex items-center justify-center">
                      {t.avatar === "dummy" ? (
                        <User className="w-10 h-10 text-slate-400" />
                      ) : (
                        <img src={t.avatar} alt={t.name} className={`w-full h-full object-cover origin-center ${t.avatarScale}`} />
                      )}
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
                    className="bg-purple-100 text-purple-800 text-sm font-black py-2.5 px-4 rounded-xl text-center shadow-sm"
                  >
                    {t.result}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VSL CTA (Constrained Width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="pt-2 mt-4 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.button 
            onClick={scrollToForm}
            className="w-full max-w-[90%] sm:w-auto px-6 py-3.5 sm:px-12 sm:py-5 bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white font-black text-sm sm:text-base md:text-lg rounded-full shadow-xl shadow-purple-900/20 cursor-pointer transition-all flex items-center justify-center gap-2 sm:gap-3 mx-auto whitespace-normal sm:whitespace-nowrap text-center"
          >
            I Want to Book My 1:1 Session
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
