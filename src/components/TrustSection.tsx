"use client";

import { motion } from "framer-motion";
import { Award, Compass, Heart } from "lucide-react";
import { MouseParallax } from "./MouseParallax";

export default function TrustSection() {
  const scrollToForm = () => {
    const element = document.getElementById("booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustBadges = [
    { label: "10+ Years", desc: "Experience", color: "text-blue-600" },
    { label: "1,000+", desc: "Students", color: "text-purple-600" },
    { label: "British Council", desc: "Certified", color: "text-fuchsia-600" },
    { label: "Monash Cert.", desc: "Agent", color: "text-pink-600" },
    { label: "£327,000+", desc: "Scholarships", color: "text-emerald-600" },
    { label: "10%–100%", desc: "Fee Waivers", color: "text-cyan-600" },
    { label: "LUMS Speaker", desc: "Industry Expert", color: "text-orange-600" },
    { label: "NUML Trainer", desc: "Professional Coach", color: "text-amber-600" },
    { label: "Qasim Ali Shah", desc: "Feature", color: "text-red-600" }
  ];

  return (
    <section id="about-ayesha" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white" />
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-200/40 rounded-full blur-[100px] -z-10 mix-blend-multiply" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          
          {/* Left Block: Narrative Backstory */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ rotate: -5, scale: 0.9 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-purple-700 text-sm font-black tracking-widest uppercase shadow-lg border-2 border-purple-200"
            >
              <Compass className="w-5 h-5" />
              The Founder's Story
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
              Why Trust Ayesha With This <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">Decision?</span>
            </h2>
            
            <div className="space-y-5 text-slate-700 font-medium text-lg leading-relaxed">
              <p>
                Ayesha Saleem is the Founder and CEO of UnizConnect, a British Council Certified Counsellor, and a study abroad advisor. But her story is not just professional. It is personal.
              </p>
              <p>
                Around 12 years ago, Ayesha got into Chemical Engineering at UET Lahore on merit. At the time, it felt like a major achievement. But by the end of her second year, she realised the core engineering courses did not excite her. She was putting in the effort, but still getting B and C grades.
              </p>
              <p>
                At the same time, she was thriving in non-technical electives, societies, creative writing, and communication-focused roles. She won awards for prose writing and was named Best Presenter in her batch.
              </p>
              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                className="font-bold text-slate-800 italic bg-gradient-to-r from-purple-50 to-violet-50 p-6 border-l-8 border-purple-500 rounded-r-2xl shadow-sm"
              >
                "That is when she realised something many students realise too late: Being capable does not always mean you are on the right path."
              </motion.div>
              <p>
                So, she entered the international education field. Over the years, she was promoted several times, travelled nationally and internationally, worked with students and education leaders, and found work that genuinely energised her.
              </p>
              <p>
                Looking back, she wishes she had a coach or mentor while graduating. Someone who could have helped her understand her strengths earlier. That is exactly why she founded UnizConnect: to help students avoid years of confusion and make better education decisions before it is too late.
              </p>
            </div>
          </div>

          {/* Right Block: Backstory visual quote card */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: -2 }}
              whileHover={{ scale: 1.02, rotate: -1, transition: { type: "spring", stiffness: 300 } }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              className="bg-gradient-to-tr from-purple-700 via-violet-600 to-purple-500 text-white rounded-[2.5rem] p-10 shadow-2xl shadow-purple-500/30 border-8 border-white relative overflow-hidden group cursor-none"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10 space-y-8">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-12 h-12 text-pink-200 fill-pink-200" />
                </motion.div>
                <p className="text-2xl font-black italic leading-tight text-white/95">
                  "I know your 1:1 isn't any therapy session… but it kind of feels therapeutic. This is the first time I've had a safe space to talk openly. I joined at my lowest and left feeling lighter."
                </p>
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                  <p className="font-black text-lg text-white tracking-wide">Political Science Student</p>
                  <p className="text-sm font-bold text-purple-200 uppercase tracking-widest mt-1">Lahore School of Economics (LSE)</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Credentials Grid */}
        <div className="bg-white border-4 border-slate-100 rounded-[3rem] p-8 sm:p-16 shadow-2xl relative">
          
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-purple-700 text-sm font-black tracking-widest uppercase shadow-lg border-2 border-purple-200">
              <Award className="w-5 h-5 text-purple-600" />
              Trusted Results
            </div>
            <h3 className="text-4xl sm:text-5xl font-black text-slate-900">
              Trusted Guidance Backed By Results
            </h3>
            <p className="text-slate-500 text-lg font-bold">Verify credentials & achievements before you book</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {trustBadges.map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: idx * 0.05 }}
                whileHover={{ scale: 1.1, rotate: idx % 2 === 0 ? 2 : -2 }}
                className="bg-slate-50 border-2 border-slate-100 p-6 rounded-3xl text-center flex flex-col justify-center items-center hover:bg-white hover:border-purple-200 hover:shadow-xl transition-all duration-300 cursor-crosshair"
              >
                <span className={`text-2xl sm:text-3xl font-black ${badge.color} leading-tight mb-2`}>
                  {badge.label}
                </span>
                <span className="text-sm sm:text-base text-slate-600 font-bold uppercase tracking-wider">
                  {badge.desc}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95, y: 0 }}
              onClick={scrollToForm}
              className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-xl rounded-2xl shadow-xl shadow-purple-500/30 cursor-none border-b-4 border-indigo-800 active:border-b-0 active:mt-1 transition-all"
            >
              Book Your 1:1 Strategy Session 🚀
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
}
