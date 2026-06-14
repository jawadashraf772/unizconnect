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

  const testimonials = [
    {
      quote: "Ayesha helped me see things I never considered. The session wasn't just advice — it was life-changing. I walked in confused about whether to go for UK or US, and left with a crystal clear plan.",
      name: "Manahil Afridi",
      detail: "FAST University • Applied for Masters",
      highlight: "From confused to clear in 40 minutes",
      emoji: "🎯",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      quote: "I was told by three other consultants that my CGPA was too low. Ayesha not only showed me realistic options but also helped me understand how to strengthen my application. I got into two top UK universities!",
      name: "Javeria Ilahi",
      detail: "NUST Graduate • 2.8 CGPA",
      highlight: "Got into 2 UK Universities despite low CGPA",
      emoji: "💪",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      quote: "I really enjoyed it as it was both informative and comfortable for me in order to put all my points and concerns.",
      name: "Quratulain Sajid",
      detail: "Applied for Masters",
      highlight: "Informative and highly comfortable session",
      emoji: "🌟",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      quote: "The study plan you provided was clear, practical and well structured. Ayesha really helped me understand my options for studying and plan accordingly.",
      name: "Shagufta Naz",
      detail: "NUST Graduate • Scholarship Recipient",
      highlight: "Clear, practical, and well-structured plan",
      emoji: "📚",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      quote: "I recently had the opportunity to attend my first consultation session with Ms. Ayesha Saleem. She welcomed me with warmth and maintained a highly positive attitude throughout. Her explanations were clear and comprehensive.",
      name: "Muhammad Talal",
      detail: "Scholarship Winner",
      highlight: "Warm, highly positive & comprehensive",
      emoji: "🎓",
      gradient: "from-fuchsia-500 to-pink-600",
    },
    {
      quote: "Had a great session with Ms. Ayesha. She really understands students' needs and guided me well about scholarships and options in the US, UK and Germany. Very helpful and supportive.",
      name: "Hamza Akram",
      detail: "IBA Karachi • Masters Applicant",
      highlight: "Understands students' needs & very supportive",
      emoji: "🤝",
      gradient: "from-violet-500 to-purple-600",
    },
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

      {/* Floating emojis */}
      {["⭐", "💬", "🎓", "💜", "✨"].map((e, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl select-none opacity-10 z-10"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
          style={{
            top: `${15 + i * 18}%`,
            left: `${8 + i * 20}%`,
          }}
        >
          {e}
        </motion.div>
      ))}

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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
              className="bg-white/5 backdrop-blur-sm border-2 border-purple-400/20 rounded-[2rem] p-7 relative overflow-hidden group hover:border-purple-400/40 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-10 h-10 text-purple-300" />
              </div>

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <motion.span 
                    whileHover={{ scale: 1.4, rotate: 15 }}
                    className="text-4xl select-none"
                  >
                    {t.emoji}
                  </motion.span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-purple-100 text-sm font-medium leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className={`inline-block bg-gradient-to-r ${t.gradient} text-white text-xs font-black px-3 py-1.5 rounded-lg shadow-sm`}>
                  {t.highlight}
                </div>

                <div className="border-t border-purple-400/20 pt-4">
                  <p className="font-black text-white text-base">{t.name}</p>
                  <p className="text-xs text-purple-300 font-bold uppercase tracking-wider mt-0.5">{t.detail}</p>
                </div>
              </div>
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
