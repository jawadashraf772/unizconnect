"use client";

import { motion } from "framer-motion";

export default function AcceptancesSection() {
  const universities = [
    { name: "Imperial College London", logo: "" },
    { name: "UCL", logo: "" },
    { name: "LSE", logo: "/london school of economics.png" },
    { name: "King's College London", logo: "" },
    { name: "University of Bristol", logo: "/university of bristol.png" },
    { name: "University of Edinburgh", logo: "" },
    { name: "University of Manchester", logo: "/Manchester_University_Logo_(2).png" },
    { name: "Newcastle University", logo: "" },
    { name: "University of Exeter", logo: "" },
    { name: "University of Warwick", logo: "" },
    { name: "University of Birmingham", logo: "" },
    { name: "Queen Mary London", logo: "/Queen Mary University.png" },
    { name: "University of Hartford", logo: "" },
    { name: "NJCU", logo: "" },
    { name: "Webster University", logo: "" },
    { name: "University of Liverpool", logo: "/university of liverpool.png" },
    { name: "Durham University", logo: "" },
    { name: "Cardiff University", logo: "" },
    { name: "University of York", logo: "" },
    { name: "University of Sheffield", logo: "/university of Sheffield.png" },
    { name: "University of Nottingham", logo: "" },
    { name: "Loughborough University", logo: "/loughborough University.png" },
    { name: "University of Kent", logo: "" },
    { name: "SOAS London", logo: "" },
    { name: "University of Strathclyde", logo: "" },
    { name: "University of Sussex", logo: "/University of suseex.jpg" },
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
              whileHover={{ y: -4, scale: 1.02, boxShadow: "0 12px 20px -8px rgba(124, 58, 237, 0.1)" }}
              className="bg-white border-2 border-slate-100 rounded-2xl h-24 p-4 flex items-center justify-center text-center shadow-xs hover:border-purple-200 transition-all duration-300 select-none group"
            >
              {uni.logo ? (
                <img
                  src={uni.logo}
                  alt={`${uni.name} logo`}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
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
          <p className="text-lg font-black text-purple-650 tracking-wider text-purple-600 uppercase">
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
