"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

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
      answer: (
        <div className="space-y-3">
          <p>
            Not to worry. Our student body is from across Pakistan, including Lahore, Islamabad, Rawalpindi, Karachi, Faisalabad, Peshawar, Gujrat, Sahiwal, Hyderabad and many other cities. In fact, most students choose to meet online (even those based in Lahore). Once your payment is verified, you'll receive a calendar link where you can choose from any of the three modes:
          </p>
          <ul className="space-y-1.5 my-2 pl-1">
            <li className="flex items-center gap-2">
              <span className="font-black text-purple-600">1.</span>
              <span className="font-bold text-slate-800">Online via Google Meet</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-black text-purple-600">2.</span>
              <span className="font-bold text-slate-800">Phone Call</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-black text-purple-600">3.</span>
              <span className="font-bold text-slate-800">In-person at our office</span>
            </li>
          </ul>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold border-t border-slate-100 pt-2.5 mt-2">
            📍 Address: Al Hafeez Executive, Floor 3, Office 316, Gulberg III, Lahore.
          </p>
        </div>
      )
    },
    {
      question: "Is the consultation fee refundable if I miss my session?",
      answer: (
        <div className="space-y-3">
          <p>
            The consultation fee is non-refundable because your slot is reserved exclusively for you and cannot be offered to someone else once booked.
          </p>
          <p>
            If something unexpected comes up, simply let us know in advance and we'll do our best to help you reschedule.
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="faq" className="relative pt-6 pb-12 sm:pt-12 sm:pb-24 overflow-hidden bg-slate-50">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-50" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-violet-200/30 rounded-full blur-[120px] mix-blend-multiply hidden sm:block pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-purple-200/30 rounded-full blur-[100px] mix-blend-multiply hidden sm:block pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-5 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight lg:whitespace-nowrap">
            Frequently Asked{" "}
            <span className="text-purple-600">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx}>
                <div className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isOpen 
                    ? "bg-white border-purple-200 shadow-lg shadow-purple-500/5" 
                    : "bg-white/80 border-slate-100 shadow-sm hover:border-purple-100 hover:shadow-md"
                }`}>
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex justify-between items-center p-5 sm:p-6 text-left font-bold text-slate-800 text-[17px] sm:text-[20px] focus:outline-none select-none gap-4 group"
                  >
                    <span className="group-hover:text-purple-700 transition-colors font-bold leading-snug">{faq.question}</span>
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

                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isOpen ? "auto" : 0, 
                      opacity: isOpen ? 1 : 0 
                    }}
                    transition={{ type: "spring", stiffness: 250, damping: 30 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-600 font-medium leading-relaxed border-t border-purple-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
