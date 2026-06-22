"use client";

import { motion } from "framer-motion";
import { Quote, Star, ExternalLink } from "lucide-react";

export default function SpotlightTestimonial() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-purple-50/20 to-slate-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[150px] animate-gpu-blob-1 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="relative group"
        >
          {/* Card glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200 rounded-[2rem] blur-sm opacity-60 group-hover:opacity-100 transition-opacity" />

          <div className="relative bg-white backdrop-blur-2xl border border-purple-100 rounded-[2rem] p-8 sm:p-12 overflow-hidden shadow-xl">

            {/* Decorative quote */}
            <div className="absolute top-8 right-8 text-purple-100 pointer-events-none">
              <Quote className="w-32 h-32 rotate-180" />
            </div>

            {/* 5 Stars */}
            <div className="flex items-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, type: "spring", stiffness: 300 }}
                >
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">

              {/* Portrait */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="shrink-0"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-200 to-fuchsia-200 rounded-2xl opacity-60 blur-sm" />
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-white bg-purple-50 shadow-md">
                    <img
                      src="/avatar_eesha.webp"
                      alt="Eesha Valait"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Text Content */}
              <div className="space-y-6 relative">
                <p className="text-slate-800 text-lg sm:text-xl lg:text-2xl font-bold italic leading-relaxed">
                  &ldquo;Miss Ayesha openly discusses every possible scenario and provides clear guidance. Her expertise was evident from the very first session. Unlike other consultants, she gives full support and attention to each individual based on their profile, which helped us secure the best options rather than just any options.&rdquo;
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <div>
                    <p className="text-lg font-black text-purple-700">Eesha Valait</p>
                    <p className="text-sm font-bold text-slate-500">Recent graduate, Rawalpindi</p>
                  </div>
                  <div className="hidden sm:block w-px h-8 bg-purple-200" />
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-100 shadow-sm">
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-sm font-bold text-emerald-700">
                      Won <span className="font-black">£27,700</span> in scholarships (<span className="text-red-600 font-extrabold">PKR 1 Crore+</span>)
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
