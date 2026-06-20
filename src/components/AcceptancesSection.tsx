"use client";

import { motion } from "framer-motion";

export default function AcceptancesSection() {
  const universities = [
    { name: "Imperial College London", logo: "/imperial new.webp", scaleClass: "scale-100" },
    { name: "UCL", logo: "/UCL logo.webp", scaleClass: "scale-100" },
    { name: "LSE", logo: "/London School of Economics logo.webp", scaleClass: "scale-100" },
    { name: "King's College London", logo: "/kings logoo.webp", scaleClass: "scale-100" },
    { name: "University of Bristol", logo: "/Uni of Bristol logo.webp", scaleClass: "scale-100" },
    { name: "University of Edinburgh", logo: "/university of edinburgh.webp", scaleClass: "scale-[1.65]" },
    { name: "University of Manchester", logo: "/manchester.webp", scaleClass: "scale-100" },
    { name: "Newcastle University", logo: "/newcastle university.webp", scaleClass: "scale-[1.15]" },
    { name: "University of Exeter", logo: "/university of exeter.webp", scaleClass: "scale-[1.2]" },
    { name: "University of Warwick", logo: "/university of warwick updated logo.webp", scaleClass: "scale-100" },
    { name: "University of Birmingham", logo: "/university of birmingham logo.webp", scaleClass: "scale-[1.65]" },
    { name: "Queen Mary London", logo: "/Queen mary uni of london logo.webp", scaleClass: "scale-100" },
    { name: "University of Hartford", logo: "/uni of hartford.webp", scaleClass: "scale-100" },
    { name: "NJCU", logo: "/mew jersey city uni logo.webp", scaleClass: "scale-100" },
    { name: "Webster University", logo: "/webster uni.webp", scaleClass: "scale-[1.15]" },
    { name: "University of Liverpool", logo: "/uni of liverpool logo.webp", scaleClass: "scale-[1.2]" },
    { name: "Durham University", logo: "/durham logo.webp", scaleClass: "scale-[1.25]" },
    { name: "Cardiff University", logo: "/cardiff uni logo.webp", scaleClass: "scale-100" },
    { name: "University of York", logo: "/uni of york.webp", scaleClass: "scale-100" },
    { name: "University of Sheffield", logo: "/sheffield logo new.webp", scaleClass: "scale-[1.2]" },
    { name: "University of Nottingham", logo: "/uni of nottingham.webp", scaleClass: "scale-100" },
    { name: "Loughborough University", logo: "/Loughborough logo new.webp", scaleClass: "scale-100" },
    { name: "University of Kent", logo: "/uni of kent logo.webp", scaleClass: "scale-[1.25]" },
    { name: "SOAS London", logo: "/SOAS logo.webp", scaleClass: "scale-100" },
    { name: "University of Strathclyde", logo: "/University of Strathclyde.webp", scaleClass: "scale-[1.3]" },
    { name: "University of Sussex", logo: "/uni of sussex logo.webp", scaleClass: "scale-100" },
    { name: "University of Stirling", logo: "/uni of stirling logo.webp", scaleClass: "scale-[1.2]" },
    { name: "University of Reading", logo: "/uni of reading logo.webp", scaleClass: "scale-[1.25]" },
    { name: "University of Leeds", logo: "/University of Leeds.webp", scaleClass: "scale-100" },
    { name: "University of Essex", logo: "/uni of essex logo.webp", scaleClass: "scale-100" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 pointer-events-none" />
      
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-6 mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Across <span className="text-purple-600">1300+ students</span> counselled over the past <span className="text-purple-600">9.5+ years</span> by Ayesha directly, we've <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">successful student acceptances</span> from 👇
          </h2>
        </div>

        {/* Acceptances Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {universities.map((uni, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 100, delay: (idx % 6) * 0.05 }}
              whileHover={{ y: -8, scale: 1.04, rotate: 1, borderColor: "rgba(168, 85, 247, 0.4)", boxShadow: "0 25px 30px -10px rgba(168, 85, 247, 0.2)" }}
              className="bg-white border-2 border-slate-100 rounded-3xl h-28 p-1.5 sm:p-2 flex items-center justify-center text-center shadow-sm hover:border-purple-200 transition-all duration-300 select-none group"
            >
              {uni.logo ? (
                <img
                  src={uni.logo}
                  alt={`${uni.name} logo`}
                  className={`max-w-[85%] max-h-[85%] object-contain origin-center transition-all duration-300 filter contrast-[1.03] brightness-[1.01] ${uni.scaleClass} group-hover:scale-[1.08]`}
                />
              ) : (
                <span className="text-slate-700 text-sm font-extrabold tracking-tight uppercase group-hover:text-purple-600 transition-colors px-1">
                  {uni.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer info below grid */}
        <div className="text-center mt-16 space-y-6">
          <p className="text-sm font-normal tracking-wider text-purple-600">
            and many more...
          </p>
          <p className="text-xl sm:text-2xl font-bold text-slate-800 max-w-4xl mx-auto leading-relaxed">
            All our students who got accepted onto these top schools and won big scholarships,{" "}
            <span className="text-purple-600 font-black">they all started with this 1:1.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
