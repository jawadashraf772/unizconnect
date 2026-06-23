"use client";

import { motion } from "framer-motion";
import { HelpCircle, ArrowRight, DollarSign, Target, Clock, TrendingUp } from "lucide-react";

export default function WhySection() {
  const scrollToForm = () => {
    const element = document.getElementById("booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-6 pb-6 sm:pt-12 sm:pb-10 overflow-hidden bg-slate-50">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-50" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[150px] mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-[120px] mix-blend-multiply pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-5 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest shadow-sm">
            <HelpCircle className="w-4 h-4" />
            Let&apos;s Talk About Value
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight lg:whitespace-nowrap">
            Why It&apos;s For{" "}
            <span className="text-purple-600">PKR 5000</span>?
          </h2>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80 }}
          className="relative"
        >
          <div className="absolute -inset-[1px] border border-purple-200/60 rounded-[2.1rem] pointer-events-none" />

          <div className="relative bg-white backdrop-blur-2xl border border-purple-100 rounded-[2rem] p-6 sm:p-12 shadow-2xl overflow-hidden">

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50/50 rounded-bl-[4rem]" />

            <div className="space-y-8 relative">
              
              <p className="text-2xl sm:text-3xl text-purple-700 font-black italic">
                Fair question.
              </p>

              <div className="space-y-6 text-slate-600 font-medium leading-relaxed text-base sm:text-lg">

                <p>
                  Yes, you can watch videos, attend webinars, Google things, ask friends, or visit education expos. It&apos;s all free.
                </p>

                <p>
                  But most of that free information stays surface-level.
                </p>

                <div className="bg-purple-50/50 border border-purple-100 rounded-xl p-5 shadow-sm">
                  <p className="text-slate-800 font-bold">
                    It tells you what&apos;s possible for students in general.
                  </p>
                </div>

                <p>
                  This 40-minute session helps you understand what applies to <span className="font-black text-slate-900">you specifically</span> - your fears, your goals, your budget, and your situation.
                </p>
              </div>

              {/* Price Highlight Card (Light Theme Version) */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 shadow-lg relative overflow-hidden"
              >
                <motion.div
                  animate={{ x: [0, 30, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 w-40 h-40 bg-white/60 rounded-full blur-3xl"
                />
                <div className="relative">
                  <div className="space-y-2">
                    <p className="text-3xl sm:text-4xl font-black text-slate-900">It just costs PKR 5,000.</p>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      And let&apos;s be honest, most of us have spent that much on food that wasn&apos;t even good or on hangouts with friends.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="space-y-6 text-slate-600 font-medium leading-relaxed text-base sm:text-lg">
                <p>
                  But the wrong degree, missed scholarship, or delayed application can cost you far more than money.
                </p>

                <div className="bg-red-50 border border-red-100 rounded-xl p-5 shadow-sm">
                  <p className="text-slate-900 font-black">
                    It can cost you time, effort, confidence, and mental peace.
                  </p>
                </div>

                <p>
                  And just so you know, our calendar stays booked mostly not because we do aggressive marketing but because students attend a session, find value in it, and then refer their friends and cousins to us.
                </p>

                <p className="text-slate-900 font-black">
                  Every time a spot opens and you choose to wait, someone else books it.
                </p>

                <p className="text-2xl sm:text-3xl font-black text-purple-700 pt-4 leading-tight">
                  That&apos;s how much demand this one session has created since launch.
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="pt-10 mt-10 border-t border-purple-100 text-center">
              <motion.button 
                onClick={scrollToForm}
                className="w-auto px-8 py-3.5 sm:px-12 sm:py-5 bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white font-black text-sm sm:text-base md:text-lg rounded-full shadow-xl shadow-purple-900/20 cursor-pointer transition-all flex items-center justify-center gap-2 sm:gap-3 mx-auto whitespace-nowrap"
              >
                Book Your 1:1 Session
              </motion.button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
