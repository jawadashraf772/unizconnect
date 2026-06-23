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

export default function CoversSection() {
  const scrollToForm = () => {
    const element = document.getElementById("booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const covers = [
    {
      num: 1,
      title: "REVIEW YOUR PROFILE",
      desc: "Where you actually stand with your academic background, CGPA, professional experience, and what activities you can engage in to strengthen your profile (since competitive scholarships are never just about good grades)."
    },
    {
      num: 2,
      title: "COMPARE COUNTRIES",
      desc: "Which countries are worth considering for your specific situation and how do factors such as field of study, course availability, visa ratio, and long-term career prospects compare."
    },
    {
      num: 3,
      title: "COMMENT ON FIT",
      desc: "Which scholarships are realistic for you to target based on your profile including both mainstream scholarships and university-specific funding opportunities that most students don't know about."
    },
    {
      num: 4,
      title: "TALK ABOUT FINANCES",
      desc: "How much should you expect to spend based on your target country, course duration, university choice, scholarship chances, and whether you intend to study independently or with dependants."
    },
    {
      num: 5,
      title: "DISCUSS PROCESS & TIMELINE",
      desc: "What your application timeline would look like based on your target intake including when to take English language test, prepare documents, apply for scholarships, and submit applications."
    },
    {
      num: 6,
      title: "ADDRESS YOUR CONFUSIONS",
      desc: "Which concerns, fears, or doubts are stopping you from taking the next step and what should you expect from the study abroad process...No question is too small, basic, or silly - you can ask as many as you want."
    }
  ];

  const bonuses = [
    {
      badge: "Bonus 1 - FREE",
      icon: Mail,
      title: "Post-Session Follow-Up Questions",
      description: "After the session ends, you might realize you forgot to ask something. It happens.\n\nBut the good thing is you don't have to pay again and book another session just to ask follow-up questions and get more clarity."
    },
    {
      badge: "Bonus 2 - FREE",
      icon: MessageSquare,
      title: "Custom Recap Email",
      description: "I understand no human (including us 😄) can remember everything word-for-word from a 40-minute session.\n\nDon’t worry...you don’t need to remember anything. Because after the session, you’ll receive a custom-written, detailed recap email covering highlights of the session."
    },
    {
      badge: "Bonus 3 - FREE",
      icon: Smartphone,
      title: "Direct Access to Ayesha",
      description: "We know communicating directly just feels easier. So, in your recap email, you’ll also get Ayesha’s contact number and personal email.\n\nIf something confuses you later or you start overthinking a decision, you can simply reach out to her."
    }
  ];

  return (
    <div className="w-full bg-slate-50">
      <section id="what-is-covered" className="pt-8 pb-10 relative overflow-hidden">
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
            What You'll Get From{" "}
            <span className="inline-block relative">
              <span className="relative z-10 text-white px-4 py-2 bg-purple-600 rounded-2xl rotate-2 inline-block transform hover:-rotate-2 transition-transform cursor-crosshair">This 1:1 Session</span>
            </span>
          </motion.h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="text-xl bg-purple-50 border border-purple-100 rounded-2xl px-6 py-5 inline-block shadow-sm text-center">
              <span className="text-purple-700 font-black block mb-2">
                💡 This is not a random session conducted by a junior counsellor.
              </span>
              <span className="text-slate-900 font-medium block">
                It's a 1:1 session directly with Ayesha. For 40 minutes, she blocks her calendar just for you, looks at your profile properly, and gives you her full attention.
              </span>
            </div>
          </div>
        </div>
  
        {/* 6-Grid Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 mt-12">
          {covers.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.12)" }}
              className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 pt-12 shadow-lg hover:border-purple-200 transition-all duration-300 relative group flex flex-col justify-start h-full"
            >
              {/* Number bubble overlapping top-left of the card */}
              <div className="absolute -top-5 left-8 bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-xl shadow-md border-2 border-white">
                {item.num}
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight mt-2 leading-snug group-hover:text-purple-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-600 text-base font-semibold leading-relaxed whitespace-pre-line">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
 
    {/* Full-width Bonuses Section */}
    <section id="bonuses" className="w-full bg-purple-950 border-y-4 border-purple-900 pt-12 pb-20 relative overflow-hidden">
      {/* Decorative Blur Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        <div className="text-center space-y-4 mb-14 mt-4 w-full">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Not just 40 minutes of guidance... <br />
            when you book this session, you also get access to <span className="whitespace-nowrap"><span className="text-yellow-400 underline decoration-2 underline-offset-4">3 FREE bonuses</span> 👇</span>
          </h3>
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {bonuses.map((bonus, idx) => {
            const IconComponent = bonus.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: idx * 0.15 }}
                whileHover={{ scale: 1.01, y: -4 }}
                className="bg-purple-900 p-4 sm:p-5 rounded-[2rem] shadow-xl transition-all h-full flex flex-col"
              >
                <div className="bg-white rounded-[1.5rem] p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-start">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-red-50 rounded-xl text-red-600">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-extrabold text-red-600 text-xl block">
                      {bonus.badge}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-purple-900 leading-tight">
                    {bonus.title}
                  </h4>
                  <p className="text-slate-700 text-base font-semibold leading-relaxed whitespace-pre-line">
                    {bonus.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <motion.button
            onClick={scrollToForm}
            className="w-full sm:w-auto px-6 sm:px-12 py-4 sm:py-5 bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white font-black text-sm sm:text-base md:text-lg rounded-full shadow-xl shadow-purple-900/20 cursor-pointer transition-all flex items-center justify-center gap-2 sm:gap-3 mx-auto whitespace-nowrap"
          >
            Book Your 1:1 Session
          </motion.button>
        </div>

      </div>
    </section>
  </div>
  );
}
