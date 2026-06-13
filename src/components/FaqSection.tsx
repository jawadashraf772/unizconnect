"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

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
      answer: "The session lasts 40 minutes, with the option to extend up to 60 minutes if needed."
    },
    {
      question: "Will Ayesha review my personal statement or scholarship essay?",
      answer: "No, full essay review is a separate service. You can ask questions about your essays during the session."
    },
    {
      question: "Can I ask about scholarships?",
      answer: "Yes! Ayesha will guide you on scholarship suitability and chances based on your profile."
    },
    {
      question: "My CGPA is low. Should I still book?",
      answer: "Absolutely. A low CGPA affects strategy, not all opportunities. The session will clarify what’s realistic and how to improve your chances."
    },
    {
      question: "Is this session only for UK admissions?",
      answer: "No. You can discuss options for the UK, US, Malaysia, Europe, Turkey, New Zealand, and other destinations. The focus is finding the best fit for your profile."
    },
    {
      question: "Can I book this session for career guidance?",
      answer: "Yes. It’s designed to align your study abroad choices with long-term career goals."
    },
    {
      question: "Will I get a written summary?",
      answer: "Yes. After the session, you will receive a custom recap email covering key advice and next steps."
    },
    {
      question: "Do I need to upload my CV?",
      answer: "Yes. Your CV helps Ayesha assess your profile and prepare for a personalized session."
    },
    {
      question: "Is admission or scholarship guaranteed?",
      answer: "No. The session provides strategy, clarity, and guidance, but does not guarantee results."
    },
    {
      question: "How will I get the session link?",
      answer: "After payment verification, the team will send you Ayesha’s calendar link via email and WhatsApp."
    },
    {
      question: "Which study level is this session for?",
      answer: "This session is for Undergraduate, Postgraduate, and Research-level students planning to study abroad."
    }
  ];

  const emojiMap = ["⏱️", "📝", "🎓", "📊", "🇬🇧", "💼", "📩", "📄", "🏆", "🔗", "📚"];

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-purple-50/50" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-violet-200/40 rounded-full blur-[100px] mix-blend-multiply" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <motion.div 
            initial={{ rotate: -15, scale: 0.5 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white text-purple-700 text-sm font-black tracking-widest uppercase shadow-lg border-2 border-purple-200"
          >
            <motion.span
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <HelpCircle className="w-5 h-5 text-purple-600" />
            </motion.span>
            Got Questions?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900"
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">Questions</span>
          </motion.h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Everything you need to know about booking and the strategy session.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ type: "spring", stiffness: 150, damping: 20, delay: idx * 0.04 }}
                className={`rounded-[1.5rem] overflow-hidden transition-all duration-300 border-2 ${
                  isOpen 
                    ? "bg-white border-purple-300 shadow-xl shadow-purple-500/10" 
                    : "bg-white/80 border-purple-100/50 shadow-sm hover:border-purple-200 hover:shadow-md"
                }`}
              >
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center p-6 sm:p-7 text-left font-black text-slate-800 text-base sm:text-lg focus:outline-hidden cursor-crosshair select-none gap-4"
                >
                  <div className="flex items-center gap-4">
                    <motion.span 
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      className="text-2xl sm:text-3xl select-none shrink-0"
                    >
                      {emojiMap[idx] || "❓"}
                    </motion.span>
                    <span className="group-hover:text-purple-700 transition-colors">{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isOpen ? "bg-purple-600 text-white" : "bg-purple-100 text-purple-600"} transition-colors`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    >
                      <div className="px-6 sm:px-7 pb-7 text-base text-slate-600 font-medium leading-relaxed border-t-2 border-purple-100 pt-5 ml-14 sm:ml-16">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-100 to-violet-100 rounded-[2rem] p-8 sm:p-10 border-2 border-purple-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle className="w-7 h-7 text-purple-600" />
              <h3 className="text-2xl font-black text-slate-900">Still have questions?</h3>
            </div>
            <p className="text-slate-600 font-medium mb-6">Reach out to us directly and we'll help you out!</p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+923264855658" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-black text-lg rounded-full shadow-lg shadow-purple-500/25 cursor-none"
            >
              📞 Call +92-326-4855658
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
