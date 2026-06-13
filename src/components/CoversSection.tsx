"use client";

import { motion } from "framer-motion";
import { 
  UserCheck, 
  TrendingUp, 
  Briefcase, 
  Compass, 
  GraduationCap, 
  Map, 
  MessageSquare,
  Gift,
  Mail,
  Smartphone,
  CheckCircle2
} from "lucide-react";
import { MouseParallax } from "./MouseParallax";

export default function CoversSection() {
  const scrollToForm = () => {
    const element = document.getElementById("booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const covers = [
    {
      icon: UserCheck,
      title: "1. Deep Profile Assessment",
      color: "from-cyan-400 to-blue-500",
      bg: "bg-cyan-50",
      text: "text-cyan-600",
      items: [
        "Review your academics, CGPA, institution, and experience.",
        "Understand where your profile currently stands.",
        "See which study options may suit you."
      ]
    },
    {
      icon: TrendingUp,
      title: "2. Honest Strengths and Weaknesses",
      color: "from-fuchsia-400 to-purple-500",
      bg: "bg-fuchsia-50",
      text: "text-fuchsia-600",
      items: [
        "Know what makes your profile strong.",
        "See what may weaken your chances.",
        "Learn how to position yourself better."
      ]
    },
    {
      icon: Briefcase,
      title: "3. Career Goals and Preferences",
      color: "from-orange-400 to-amber-500",
      bg: "bg-orange-50",
      text: "text-orange-600",
      items: [
        "Clarify what career path suits your strengths.",
        "Match your course with your long-term goals.",
        "Avoid a degree that feels right now but limits you later."
      ]
    },
    {
      icon: Compass,
      title: "4. Course Comparison Based on Fit",
      color: "from-emerald-400 to-teal-500",
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      items: [
        "Compare courses based on your profile.",
        "Understand which programs make sense.",
        "Avoid choosing only by trend or price."
      ]
    },
    {
      icon: GraduationCap,
      title: "5. Admission and Scholarship Suitability",
      color: "from-purple-400 to-indigo-500",
      bg: "bg-purple-50",
      text: "text-purple-600",
      items: [
        "Check your admission suitability.",
        "Understand your scholarship chances.",
        "Know what to improve before applying."
      ]
    },
    {
      icon: Map,
      title: "6. Roadmap, Strategy, and Timeline",
      color: "from-rose-400 to-pink-500",
      bg: "bg-rose-50",
      text: "text-rose-600",
      items: [
        "Know what steps come first.",
        "Plan around key deadlines.",
        "Leave with a clear action plan."
      ]
    }
  ];

  const bonuses = [
    {
      badge: "BONUS 1",
      icon: MessageSquare,
      title: "Free Follow-Up Questions",
      description: "Ask what you forgot. Get clarity later. No second booking."
    },
    {
      badge: "BONUS 2",
      icon: Mail,
      title: "Custom Recap Email",
      description: "Written session summary. Revisit advice anytime. Clear next steps."
    },
    {
      badge: "BONUS 3",
      icon: Smartphone,
      title: "Direct Access to Ayesha",
      description: "Direct contact options via phone and email. Reach out whenever you need guidance."
    }
  ];

  return (
    <section id="what-is-covered" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Coverage Header */}
        <div className="text-center space-y-6 mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900"
          >
            What This 1:1 Session{" "}
            <span className="inline-block relative">
              <span className="relative z-10 text-white px-3 py-1.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl rotate-2 inline-block transform hover:-rotate-2 transition-transform cursor-crosshair">Actually Covers</span>
            </span>
          </motion.h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            For 40 minutes, Ayesha focuses on your profile, goals, and career.
          </p>
        </div>

        {/* 6-Grid Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {covers.map((item, idx) => {
            const Icon = item.icon;
            return (
              <MouseParallax key={idx} intensity={10}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 100, delay: idx * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 shadow-md hover:shadow-2xl hover:border-transparent transition-all duration-300 relative group overflow-hidden h-full"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.text} mb-8 transform group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-purple-700 transition-colors">{item.title}</h3>
                  <ul className="space-y-4 relative z-10">
                    {item.items.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-base text-slate-600 font-medium leading-relaxed">
                        <CheckCircle2 className={`w-6 h-6 ${item.text} shrink-0 mt-0.5 opacity-80`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </MouseParallax>
            );
          })}
        </div>

        {/* 7. Full-Width Personal Doubt Clearing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-gradient-to-br from-purple-900 via-purple-950 to-violet-950 text-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border-4 border-purple-800 mb-24 relative overflow-hidden group"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-600/30 via-violet-500/30 to-purple-400/30 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/20 text-purple-300 font-bold uppercase tracking-wider text-sm border border-purple-500/30">
                Safe & Confined Space
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                7. Your Big and Small Questions
              </h3>
              <p className="text-slate-300 text-lg font-medium leading-relaxed">
                Bring every question confusing you right now. Discuss small doubts before they become big mistakes. Leave with answers you can actually act on.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <motion.button
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95, rotate: 2 }}
                onClick={scrollToForm}
                className="w-full lg:w-auto px-8 py-5 bg-white text-purple-700 font-black text-xl rounded-full transition-all shadow-xl shadow-purple-500/20 cursor-none border-b-4 border-purple-200 active:border-b-0 active:mt-1"
              >
                Book Your Strategy Session
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bonuses Section */}
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-4 border-white rounded-[3rem] p-8 sm:p-14 shadow-2xl relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border-2 border-purple-100 font-black text-purple-700 uppercase tracking-widest text-sm flex items-center gap-2">
            <Gift className="w-5 h-5" />
            Exclusive Access
          </div>

          <div className="text-center space-y-4 mb-16 mt-4">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
              Not just 40 minutes of guidance...
            </h3>
            <p className="text-purple-600 text-xl font-bold">You also get 3 high-value bonuses included!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bonuses.map((bonus, idx) => {
              const Icon = bonus.icon;
              return (
                <MouseParallax key={idx} intensity={5}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: idx * 0.15 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-white border-2 border-purple-100/50 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all h-full"
                  >
                    <div className="space-y-6">
                      <span className="inline-block font-black text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 px-3 py-1.5 rounded-lg tracking-widest uppercase text-xs shadow-sm">
                        {bonus.badge}
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 leading-tight">{bonus.title}</h4>
                      <p className="text-base text-slate-600 font-medium leading-relaxed">
                        {bonus.description}
                      </p>
                    </div>
                  </motion.div>
                </MouseParallax>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95, rotate: -2 }}
              onClick={scrollToForm}
              className="w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-black text-xl rounded-full shadow-xl shadow-purple-500/30 cursor-none border-b-4 border-purple-800 active:border-b-0 active:mt-1 transition-all"
            >
              Yes! I want to Book My 1:1 Session 🎁
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
}
