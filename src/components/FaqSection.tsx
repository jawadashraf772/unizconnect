"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle, Phone, Sparkles } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "How long is the 1:1 session?",
      answer: "The session is 40 minutes long, but if your discussion needs more time it can be extended up to 60 minutes."
    },
    {
      question: "Will Ayesha review my personal statement or scholarship essay during the session?",
      answer: "Full personal statement or scholarship essay review is a separate service. However, if you have questions about how to approach your personal statement or scholarship essays, what to include, what to avoid and how to position your experiences effectively, Ayesha can guide you through all of that during the session."
    },
    {
      question: "Can I ask about scholarships?",
      answer: "Yes, absolutely. Ayesha will help you understand your scholarship suitability, where your profile currently stands and what may improve your chances."
    },
    {
      question: "My CGPA is low. Should I still book the session?",
      answer: "Yes of course, especially if you want honest guidance. CGPA does not always mean your options are finished, but it does affect your strategy. The session will help you understand what is realistic, what can be improved, and whether studying abroad is right for you or not."
    },
    {
      question: "Is this session only for UK admissions?",
      answer: "The session is not limited to UK admissions only; you can also discuss study options for the US, Malaysia, Germany, France, Ireland, and Sweden."
    },
    {
      question: "Can I book this session if I need career guidance?",
      answer: "Yes. If you're unsure what career path to pursue, which degree to choose, or whether you should study abroad or stay in Pakistan, this session can help you make an informed decision based on your goals, strengths and situation."
    },
    {
      question: "Will I get a written summary after the session?",
      answer: "Yes, you will receive a custom recap email after the session so you can revisit the key points, advice, and next steps discussed during the session."
    },
    {
      question: "Do I need to upload my CV?",
      answer: "For those who have professional or volunteer/community experience, yes definitely. And for those who are high school leavers or are in high school, they can attach their transcript or a short bio instead. This makes the guidance more personal and useful."
    },
    {
      question: "Is scholarship guaranteed?",
      answer: "No. And honestly, you should be careful of anyone who guarantees scholarships. Scholarships are never decided by consultants. They are decided by universities and scholarship committees, and it's completely their call. What we do is help students target the right opportunities early and build the right essay strategy. In our experience, we've seen that students who apply early with strong profile positioning often have a better chance of securing good offers and funding."
    },
    {
      question: "Which study level is this session for?",
      answer: (
        <div>
          This session is suitable for students planning for:
          <ul className="list-none mt-3 space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span className="font-bold">Undergraduate study</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span className="font-bold">Postgraduate study</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span className="font-bold">Doctoral study</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      question: "If I am based out of Lahore, how will this session be conducted?",
      answer: "Not to worry. Our student body is from across Pakistan, including Lahore, Islamabad, Rawalpindi, Karachi, Faisalabad, Peshawar, Gujrat, Sahiwal, Hyderabad and many other cities. In fact, most students choose to meet online (even those based in Lahore). Once your payment is verified, you'll receive a calendar link where you can choose from any of the three modes: Online via Google Meet, Phone Call, In-person at our office (Al Hafeez Executive, Floor 3, Office 316, Gulberg III, Lahore)."
    }
  ];

  const emojiMap = ["⏱️", "📝", "🎓", "📊", "🇬🇧", "💼", "📩", "📄", "🏆", "🔗", "📚"];

  return (
    <section id="faq" className="relative py-28 overflow-hidden bg-slate-50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-purple-50/30" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-violet-200/30 rounded-full blur-[120px] mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-purple-200/30 rounded-full blur-[100px] mix-blend-multiply pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-5 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest shadow-sm">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight lg:whitespace-nowrap">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">Questions</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Everything you need to know about booking and the strategy session.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: idx * 0.03, type: "spring", stiffness: 150 }}
              >
                <div className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isOpen 
                    ? "bg-white border-purple-200 shadow-lg shadow-purple-500/5" 
                    : "bg-white/80 border-slate-100 shadow-sm hover:border-purple-100 hover:shadow-md"
                }`}>
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex justify-between items-center p-5 sm:p-6 text-left font-bold text-slate-800 text-sm sm:text-base focus:outline-none select-none gap-4 group"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-xl sm:text-2xl select-none shrink-0 group-hover:scale-110 transition-transform">
                        {emojiMap[idx] || "❓"}
                      </span>
                      <span className="group-hover:text-purple-700 transition-colors font-bold leading-snug">{faq.question}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                        isOpen ? "bg-purple-600 text-white" : "bg-purple-50 border border-purple-100 text-purple-600"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-600 font-medium leading-relaxed border-t border-purple-50 pt-4 ml-[52px] sm:ml-[56px]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA (Light Theme Update) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-2xl border border-purple-100 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-white" />
            <motion.div
              animate={{ x: [0, 30, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-60 h-60 bg-purple-200/40 rounded-full blur-3xl mix-blend-multiply"
            />
            
            <div className="relative p-8 sm:p-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-purple-100 shadow-sm flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Still have questions?</h3>
              <p className="text-slate-600 font-medium mb-8">Reach out to us directly and we&apos;ll help you out!</p>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="tel:+923264855658"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-700 to-indigo-800 text-white font-black text-lg rounded-xl shadow-xl shadow-purple-500/20 hover:from-purple-600 hover:to-indigo-700 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call +92-326-4855658
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
