"use client";

import { motion } from "framer-motion";
import { Check, Gift, Sparkles, Flame, ShieldCheck, Users, Zap, ArrowRight } from "lucide-react";

export default function OfferSection() {
  const scrollToForm = () => {
    const element = document.getElementById("booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const inclusions = [
    "Personalized profile & target country guidance",
    "Comprehensive admission & scholarship strategy",
    "Country-specific comparison & pros/cons",
    "Tailored university & course recommendations",
    "Custom application roadmap & timeline",
    "Future career direction & opportunities",
    "Direct answers to all your specific queries",
  ];

  const bonuses = [
    { num: 1, text: "Free follow-up questions" },
    { num: 2, text: "Custom recap email" },
    { num: 3, text: "Direct access to Ayesha" },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1e1145_0%,#0c0a1d_50%,#080613_100%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMjgsOTAsMjU1LDAuMDQpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-60" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[15%] w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[10%] w-[600px] h-[600px] bg-indigo-500/8 rounded-full blur-[180px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[120px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80 }}
          className="text-center mb-20 space-y-5"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/15 to-indigo-500/15 border border-purple-400/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-black text-xs uppercase tracking-[0.2em]">Exclusive Strategy Offer</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Take Your{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-300">
                FIRST STEP
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>{" "}
            Today
          </h2>
          <p className="text-purple-200/70 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Skip the guesswork. Stop wasting months reading generic online advice. Sit down for a hyper-personalized 1:1 strategy session with Ayesha and leave with a clear blueprint.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left - Trust Stats */}
          <div className="lg:col-span-5 space-y-5">
            {[
              {
                icon: Flame,
                title: "Limited Slots",
                desc: "Only 4 spots left this week!",
                gradient: "from-orange-500/20 to-red-500/20",
                iconColor: "text-orange-400",
                borderColor: "border-orange-500/20",
              },
              {
                icon: ShieldCheck,
                title: "100% Secure",
                desc: "Direct calendar slot booking",
                gradient: "from-emerald-500/20 to-teal-500/20",
                iconColor: "text-emerald-400",
                borderColor: "border-emerald-500/20",
              },
              {
                icon: Users,
                title: "Over 1,300+ Students Mentored",
                desc: "Across LUMS, FAST, LSE, NUST, IBA & working professionals",
                gradient: "from-purple-500/20 to-violet-500/20",
                iconColor: "text-purple-400",
                borderColor: "border-purple-500/20",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ x: 5, scale: 1.02 }}
                className={`group relative bg-white/[0.03] backdrop-blur-xl border ${stat.borderColor} rounded-2xl p-6 flex items-start gap-5 transition-all duration-300 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-purple-500/5`}
              >
                <div className={`bg-gradient-to-br ${stat.gradient} p-3.5 rounded-xl ${stat.iconColor} shrink-0 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-white text-base mb-1">{stat.title}</h4>
                  <p className="text-xs text-purple-300/70 font-semibold uppercase tracking-wider leading-relaxed">{stat.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Micro social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 pt-4 pl-1"
            >
              <div className="flex -space-x-2">
                {["🧕", "👩‍🎓", "👨‍💼", "👩‍💻"].map((emoji, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-purple-500/20 border-2 border-purple-900 flex items-center justify-center text-sm">
                    {emoji}
                  </div>
                ))}
              </div>
              <p className="text-xs text-purple-300/60 font-semibold">
                <span className="text-purple-300 font-black">12 students</span> booked this week
              </p>
            </motion.div>
          </div>

          {/* Right - Premium Pricing Card */}
          <div className="lg:col-span-7 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="w-full max-w-[520px] relative group"
            >
              {/* Animated border glow */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 rounded-[2rem] opacity-40 group-hover:opacity-70 transition-opacity duration-500 blur-sm" />

              {/* Card body */}
              <div className="relative bg-[#0f0b24]/95 backdrop-blur-2xl rounded-[2rem] p-8 sm:p-10 border border-purple-500/10 overflow-hidden">

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                {/* Top badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/15 to-fuchsia-500/15 border border-purple-400/20">
                    <Zap className="w-3.5 h-3.5 text-yellow-400" />
                    <span className="text-xs font-black text-purple-200 uppercase tracking-wider">Most Popular</span>
                  </div>
                  <span className="text-[10px] font-black text-purple-400/60 bg-purple-500/10 px-3 py-1.5 rounded-lg uppercase tracking-wider border border-purple-500/10">
                    100% Certified
                  </span>
                </div>

                {/* Title & Price */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    40-Minute 1:1 Consultation
                  </h3>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
                      PKR 5,000
                    </span>
                    <span className="text-base line-through text-purple-500/60 font-bold">
                      PKR 10,000
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black">
                    <span>🔥</span> 50% OFF — Limited Time
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-8" />

                {/* Inclusions */}
                <div className="space-y-5 mb-8">
                  <p className="text-[11px] font-black text-purple-400/80 uppercase tracking-[0.2em]">What You'll Get in This Session</p>
                  <ul className="space-y-3">
                    {inclusions.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 border border-purple-400/20 p-1 rounded-lg shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                          <Check className="w-3 h-3 text-purple-300" />
                        </div>
                        <span className="text-sm font-semibold text-purple-100/90 leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Bonuses Box */}
                <div className="relative bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 border border-purple-400/15 rounded-2xl p-6 mb-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl" />
                  <p className="text-xs font-black text-yellow-400 uppercase tracking-[0.15em] flex items-center gap-2 mb-4 relative">
                    <Gift className="w-4 h-4" /> Exclusive Access Bonuses (PKR 15k+ value)
                  </p>
                  <div className="space-y-3 relative">
                    {bonuses.map((bonus, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-bold text-purple-200/80">
                        <span className="w-7 h-7 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-xs text-yellow-400 font-black shrink-0">
                          {bonus.num}
                        </span>
                        <span>{bonus.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToForm}
                  className="w-full py-5 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:via-amber-300 hover:to-yellow-400 text-purple-950 font-black text-lg rounded-2xl shadow-2xl shadow-yellow-500/20 transition-all text-center flex items-center justify-center gap-3 uppercase tracking-widest relative overflow-hidden group/btn"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book It NOW!
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </motion.button>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
