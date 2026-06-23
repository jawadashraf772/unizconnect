"use client";

import { motion } from "framer-motion";
import { Award, Compass, Heart, Quote } from "lucide-react";

export default function TrustSection() {
  const scrollToForm = () => {
    const element = document.getElementById("booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const credentials = [
    {
      value: "£446,200",
      label: "worth scholarships won"
    },
    {
      value: "Certified",
      label: "by the British Council"
    },
    {
      value: "9.5",
      label: "years of experience"
    },
    {
      value: "10%-100%",
      label: "fee waivers secured for students"
    }
  ];

  return (
    <section id="about-ayesha" className="pt-24 pb-10 relative overflow-hidden bg-slate-50/50">
      <div className="absolute inset-0 bg-slate-50/50 pointer-events-none" />
      
      {/* Decorative Blob */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[120px] -z-10 mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-violet-200/20 rounded-full blur-[100px] -z-10 mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Story & Written Narrative */}
          <div className="lg:col-span-7 space-y-8">

            
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight lg:whitespace-nowrap">
                Hey, I'm <span className="text-purple-600">Ayesha.</span>
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                I understand your confusion because I've lived it.
              </h3>
            </div>
            
            {/* Story Paragraphs */}
            <div className="space-y-6 text-slate-600 font-semibold leading-relaxed text-base sm:text-lg">
              <p>
                Twelve years ago, I enrolled in Chemical Engineering at UET Lahore. As an 18-year old, I thought I had life figured out. I didn't.
              </p>
              <p>
                Two years in, I realized I enjoyed everything except engineering. I was struggling in core modules but thriving in creative writing, communication, and presentations.
              </p>
              <p>
                As the eldest in my family, I badly wanted someone to sit with me and help me find my path.
              </p>
              <p className="font-extrabold text-purple-900 border-l-4 border-purple-500 pl-4 bg-purple-50/50 py-2 rounded-r-xl">
                That person didn't exist. So eventually, I became one.
              </p>
              <p>
                In 2016, I started as a Student Support Officer and found work that I absolutely loved because it made me use my natural strengths.
              </p>
              <p>
                The more students I met, the more I saw my 20-year-old self in them confused and unheard but with much higher stakes and bigger consequences.
              </p>
              <p>
                So in Jan 2024, I launched UnizConnect, a space where every student is heard, advice is never copy-paste, and dreams are treated like futures, not files.
              </p>
              <p>
                Since then, I've conducted hundreds of 1:1 sessions with students from top, mid-tier, and small institutions.
              </p>
            </div>

            {/* Middle Quote block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-purple-50/60 text-slate-800 rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-sm relative overflow-hidden group my-8"
            >
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16 text-purple-600" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex gap-0.5 text-yellow-500 text-sm">★ ★ ★ ★ ★</div>
                <p className="text-base sm:text-lg font-normal italic leading-relaxed text-slate-700">
                  "I know your 1:1 isn't any therapy session… but it kind of feels therapeutic. This is the first time I've had a safe space to talk openly. I joined at my lowest and left feeling lighter."
                </p>
                <div className="pt-2 border-t border-purple-100/50">
                  <span className="font-normal text-purple-700 text-base">
                    - A Political Science student from <span className="underline decoration-purple-400 font-normal text-purple-700">Lahore School of Economics</span>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Ending Narrative */}
            <div className="space-y-6 text-slate-600 font-normal leading-relaxed text-base sm:text-lg">
              <p>
                I've spent thousands of hours reviewing student profiles, understanding scholarship criteria, and helping applicants avoid costly mistakes.
              </p>
              <p>
                This session brings together everything I've learned along the way.
              </p>
              <p>
                For 40 minutes, you'll get direct access to the insights, experience, and guidance I've gained from helping students navigate some of the biggest decisions of their lives.
              </p>
              <p className="font-medium text-slate-800">
                See you inside the session!
              </p>
              <div className="text-xl font-medium text-purple-700 pt-4">
                <p>Until then,</p>
                <p>Ba bye!</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Portrait & Stats Grid */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28 lg:self-start">
            
            {/* Visual Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.1 }}
              className="max-w-[80%] sm:max-w-[70%] lg:max-w-[85%] mx-auto"
            >
              <img
                src="/ayesha_new.webp"
                alt="Ayesha Saleem"
                className="w-full h-auto rounded-[2rem] object-cover"
              />
            </motion.div>

            {/* Custom Credentials Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-xl relative z-10"
            >
              {/* Divider-separated Stat Rows */}
              <div className="divide-y divide-slate-100">
                {credentials.map((c, i) => (
                  <div key={i} className="p-6 transition-colors duration-300 hover:bg-purple-50/10">
                    <span className="text-3xl sm:text-4xl font-black text-red-600 block leading-none">
                      {c.value}
                    </span>
                    <span className="text-sm text-slate-500 font-bold uppercase tracking-wider block mt-2">
                      {c.label}
                    </span>
                  </div>
                ))}

                {/* Consultations List Item */}
                <div className="p-6 transition-colors duration-300 hover:bg-purple-50/10">
                  <span className="text-2xl sm:text-3xl font-black text-red-600 block leading-tight">
                    Consultations
                  </span>
                  <span className="text-sm text-slate-500 font-bold uppercase tracking-wider block mt-1">
                    across disciplines
                  </span>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed mt-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    (Business, Psychology, Computer Science, AI, all sorts of Engineering, Social Sciences, Biology, Geography, Law, Stats, Accounting, Finance, ACCA, and many more)
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Call To Action */}
        <div className="mt-10 text-center">
          <motion.button 
            onClick={scrollToForm}
            className="w-full sm:w-auto px-6 sm:px-12 py-4 sm:py-5 bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white font-black text-sm sm:text-base md:text-lg rounded-full shadow-xl shadow-purple-900/20 cursor-pointer transition-all flex items-center justify-center gap-2 sm:gap-3 mx-auto whitespace-nowrap"
          >
            Book Your 1:1 Session
          </motion.button>
        </div>

      </div>
    </section>
  );
}
