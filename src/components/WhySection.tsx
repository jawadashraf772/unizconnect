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
    <section className="relative pt-12 pb-10 overflow-hidden bg-slate-50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/40 to-slate-50" />
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-violet-600">PKR 5000</span>?
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
          <div className="absolute -inset-[1px] bg-gradient-to-b from-purple-200 via-purple-100 to-transparent rounded-[2rem] blur-md" />

          <div className="relative bg-white backdrop-blur-2xl border border-purple-100 rounded-[2rem] p-8 sm:p-12 shadow-2xl overflow-hidden">

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-50 to-transparent rounded-bl-[4rem]" />

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

                <div className="flex items-start gap-4 bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-100 rounded-xl p-5 shadow-sm">
                  <Target className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
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
                className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-2xl p-8 shadow-lg relative overflow-hidden"
              >
                <motion.div
                  animate={{ x: [0, 30, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 w-40 h-40 bg-white/60 rounded-full blur-3xl"
                />
                <div className="flex items-start gap-4 relative">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-yellow-100">
                    <DollarSign className="w-6 h-6 text-yellow-600" />
                  </div>
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

                <div className="flex items-start gap-4 bg-red-50 border border-red-100 rounded-xl p-5 shadow-sm">
                  <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
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

                <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-700 to-indigo-700 pt-4 leading-tight">
                  That&apos;s how much demand this one session has created since launch.
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="pt-10 mt-10 border-t border-purple-100 text-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToForm}
                className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-600 hover:to-indigo-700 text-white font-black text-lg sm:text-xl rounded-xl shadow-xl shadow-purple-500/30 transition-all inline-flex items-center justify-center gap-3 uppercase tracking-wider group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative flex items-center gap-2">
                  Book Your 1:1 Session Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
