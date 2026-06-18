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
      label: "worth scholarships won",
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      value: "Certified",
      label: "by the British Council",
      gradient: "from-violet-600 to-purple-600"
    },
    {
      value: "9.5",
      label: "years of experience",
      gradient: "from-indigo-600 to-violet-600"
    },
    {
      value: "10%-100%",
      label: "fee waivers secured for students",
      gradient: "from-purple-600 to-indigo-600"
    }
  ];

  return (
    <section id="about-ayesha" className="py-24 relative overflow-hidden bg-slate-50/50">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/20 to-white pointer-events-none" />
      
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
                Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Ayesha.</span>
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
            
            {/* Ayesha's Portrait Card */}
            <div className="flex justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotate: -1, transition: { type: "spring", stiffness: 300 } }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                className="relative w-full max-w-[340px] bg-white border-4 border-white rounded-[2.5rem] shadow-xl overflow-hidden group"
              >
                {/* Visual purple/pink blob overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-transparent to-transparent pointer-events-none" />
                
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-purple-50">
                  <img 
                    src="/ayesha.webp" 
                    alt="Ayesha Saleem - UnizConnect Founder" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            </div>

            {/* Custom Credentials Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Divider-separated Stat Rows */}
              <div className="divide-y divide-slate-100">
                {credentials.map((c, i) => (
                  <div key={i} className="p-6 transition-colors duration-300 hover:bg-purple-50/10">
                    <span className={`text-3xl sm:text-4xl font-black bg-gradient-to-r ${c.gradient} bg-clip-text text-transparent block leading-none`}>
                      {c.value}
                    </span>
                    <span className="text-sm text-slate-500 font-bold uppercase tracking-wider block mt-2">
                      {c.label}
                    </span>
                  </div>
                ))}

                {/* Consultations List Item */}
                <div className="p-6 transition-colors duration-300 hover:bg-purple-50/10">
                  <span className="text-2xl sm:text-3xl font-black text-indigo-700 block leading-tight">
                    Consultations
                  </span>
                  <span className="text-sm text-slate-800 font-bold uppercase tracking-wider block mt-1">
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
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95, y: 0 }}
            onClick={scrollToForm}
            className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-xl rounded-full shadow-lg shadow-purple-500/20 active:mt-1 transition-all"
          >
            Book Your 1:1 Strategy Session 🚀
          </motion.button>
        </div>

      </div>
    </section>
  );
}
