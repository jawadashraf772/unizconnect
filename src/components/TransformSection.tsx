"use client";

import { motion } from "framer-motion";
import { Check, HelpCircle, ArrowRight, Star, AlertCircle } from "lucide-react";

export default function TransformSection() {
  const scrollToForm = () => {
    const element = document.getElementById("booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const paintPoints = [
    { text: "You've watched videos and read websites but feel more confused", emoji: "😵", gradient: "from-pink-500 to-rose-500", bg: "bg-pink-50", border: "border-pink-200", hoverBg: "hover:bg-pink-100" },
    { text: "You keep switching between UK, US, Canada, Germany, and other countries", emoji: "🔄", gradient: "from-blue-500 to-cyan-500", bg: "bg-blue-50", border: "border-blue-200", hoverBg: "hover:bg-blue-100" },
    { text: "You're worried your grades, study gap, or background is not strong enough", emoji: "😟", gradient: "from-amber-500 to-orange-500", bg: "bg-amber-50", border: "border-amber-200", hoverBg: "hover:bg-amber-100" },
    { text: "You don't have a rich family and are looking for scholarships but don't know which ones fit you", emoji: "💰", gradient: "from-emerald-500 to-teal-500", bg: "bg-emerald-50", border: "border-emerald-200", hoverBg: "hover:bg-emerald-100" },
    { text: "You're scared of choosing the wrong course or country and regretting it later", emoji: "😨", gradient: "from-purple-500 to-violet-500", bg: "bg-purple-50", border: "border-purple-200", hoverBg: "hover:bg-purple-100" },
    { text: "You're working full-time and don't have time to do research anything", emoji: "⏰", gradient: "from-red-500 to-pink-500", bg: "bg-red-50", border: "border-red-200", hoverBg: "hover:bg-red-100" },
    { text: "You want to know how you can improve your profile for admissions and scholarships", emoji: "📈", gradient: "from-indigo-500 to-blue-500", bg: "bg-indigo-50", border: "border-indigo-200", hoverBg: "hover:bg-indigo-100" },
    { text: "You're about to graduate (or recently graduated) and worried about not having experience", emoji: "🎓", gradient: "from-fuchsia-500 to-purple-500", bg: "bg-fuchsia-50", border: "border-fuchsia-200", hoverBg: "hover:bg-fuchsia-100" },
    { text: "You're a mom or a dad exploring options abroad but have concerns", emoji: "👨‍👩‍👧", gradient: "from-cyan-500 to-sky-500", bg: "bg-cyan-50", border: "border-cyan-200", hoverBg: "hover:bg-cyan-100" }
  ];

  return (
    <div className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/20 to-white" />
      {/* Decorative Blob */}
      <div className="absolute top-40 left-0 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[120px] -z-10 mix-blend-multiply" />

      {/* This Session is for You If — SUPER PLAYFUL */}
      <section className="relative py-16 overflow-hidden">
        {/* Fun multi-color background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-violet-50 to-purple-50" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-[300px] h-[300px] bg-purple-300/40 rounded-full blur-[80px] mix-blend-multiply" 
        />
        <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-violet-300/40 rounded-full blur-[80px] mix-blend-multiply" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-[100px] mix-blend-multiply" />



        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center space-y-6 mb-16">
            <motion.div 
              initial={{ rotate: -15, scale: 0.5, opacity: 0 }}
              whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-purple-700 text-base font-black tracking-widest uppercase shadow-xl border-2 border-purple-200"
            >
              <motion.span 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <AlertCircle className="w-6 h-6" />
              </motion.span>
              Is This You?
            </motion.div>
             <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80 }}
              className="text-5xl sm:text-6xl font-black text-slate-900 leading-tight"
            >
              Who Is This{" "}
              <motion.span 
                animate={{ scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-500"
              >
                Session For?
              </motion.span>
            </motion.h2>
            <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
              If you recognise yourself in any of these, this session is for you.
            </p>
          </div>

          {/* Playful Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {paintPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, scale: 0.8, rotate: idx % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ type: "spring", stiffness: 150, damping: 15, delay: idx * 0.07 }}
                whileHover={{ 
                  scale: 1.08, 
                  rotate: idx % 2 === 0 ? 2 : -2, 
                  y: -10,
                  transition: { type: "spring", stiffness: 400, damping: 15 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`relative ${point.bg} ${point.border} border-2 p-6 rounded-[2rem] cursor-crosshair group overflow-hidden shadow-lg ${point.hoverBg} transition-colors duration-300`}
              >
                {/* Gradient accent bar at top */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${point.gradient} rounded-t-[2rem]`} />
                
                {/* Large emoji bubble */}
                <motion.div 
                  whileHover={{ scale: 1.4, rotate: [0, -15, 15, 0] }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-4 border border-white/50"
                >
                  <span className="text-4xl select-none" role="img" aria-label="emoji">
                    {point.emoji}
                  </span>
                </motion.div>

                <p className="text-slate-800 font-bold text-base leading-snug group-hover:text-slate-900 transition-colors">
                  {point.text}
                </p>

                {/* Decorative corner blob */}
                <div className={`absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br ${point.gradient} rounded-full opacity-10 group-hover:opacity-25 group-hover:scale-150 transition-all duration-500`} />
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="mt-20 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.08, rotate: 3 }}
              whileTap={{ scale: 0.92, rotate: -3 }}
              animate={{ boxShadow: ["0 0 0 0 rgba(217,70,239,0)", "0 0 0 15px rgba(217,70,239,0)"] }}
              transition={{ boxShadow: { duration: 1.5, repeat: Infinity } }}
              onClick={scrollToForm}
              className="w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 text-white font-black text-2xl rounded-full shadow-2xl shadow-purple-500/30 cursor-pointer border-b-4 border-purple-800 active:border-b-0 active:mt-1 transition-all"
            >
              Yes, This is Me! 🙋‍♂️ Book My Session
            </motion.button>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
