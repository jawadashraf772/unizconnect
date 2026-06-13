"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20 px-4 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-200/40 rounded-full blur-[120px] -z-10 mix-blend-multiply" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-10 sm:p-16 shadow-2xl relative max-w-2xl w-full text-center space-y-8"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-28 h-28 bg-gradient-to-br from-emerald-400 to-teal-500 text-white rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/30 border-4 border-white"
          >
            <Check className="w-14 h-14" />
          </motion.div>
          
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">You're All Set! 🎉</h1>
            <p className="text-slate-600 text-xl font-medium max-w-lg mx-auto leading-relaxed">
              Our team is verifying your payment. Keep an eye on your email and WhatsApp for Ayesha's calendar link within 24 hours.
            </p>
          </div>
          
          <div className="pt-6 flex flex-col items-center gap-6">
            <div className="flex items-center justify-center gap-3 text-sm text-slate-500 font-bold bg-slate-50 py-3 rounded-2xl px-6 w-full max-w-md border border-slate-100">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Secure verification in progress.</span>
            </div>
            
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-lg rounded-full transition-colors border-b-4 border-slate-300 active:border-b-0 active:mt-1"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </main>

      <FooterSection />
    </div>
  );
}
