"use client";

import { motion } from "framer-motion";
import { Star, Quote, MessageCircle, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const scrollToForm = () => {
    const element = document.getElementById("booking-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const reviewImages = [
    "/Rectangle 138.png",
    "/Rectangle 136.png",
    "javeria",
    "/shagufta naz.png",
    "irfan",
    "/Muhammad Talal.png",
    "manahil",
    "/hamza akram.png",
    "nayab",
    "/Quratulain Sajid.png",
    "/uzair LSEEE 1.png",
    "nabila",
    "/WhatsApp Image 2026-06-05 at 12.54.54 AM 1.png",
    "/WhatsApp Image 2026-06-05 at 12.55.31 AM 1.png",
    "/WhatsApp Image 2026-06-05 at 12.56.01 AM 1.png"
  ];

  return (
    <section className="py-24 relative overflow-hidden noise-overlay">
      {/* Deep purple background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-violet-900 to-indigo-950" />
      
      {/* Animated blobs */}
      <motion.div 
        animate={{ scale: [1, 1.3, 1], x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[120px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <motion.div 
            initial={{ scale: 0.5, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-500/20 border-2 border-purple-400/30 text-purple-200 font-black text-sm tracking-widest uppercase backdrop-blur-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Student Voices
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
          >
            What Our Students{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-300">
              Have To Say…
            </span>
          </motion.h2>
          <p className="text-xl text-purple-200 font-medium max-w-2xl mx-auto">
            Real stories from real students who took the first step with a 1:1 session.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-6xl mx-auto mb-16">
          {reviewImages.map((src, idx) => {
            const isTalal = src === "/Muhammad Talal.png";
            const isShagufta = src === "/shagufta naz.png";
            const isHamza = src === "/hamza akram.png";
            const isQuratulain = src === "/Quratulain Sajid.png";
            const isJaveria = src === "javeria";
            const isManahil = src === "manahil";
            const isIrfan = src === "irfan";
            const isNayab = src === "nayab";
            const isNabila = src === "nabila";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.05 }}
                whileHover={{ y: -6, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
                className="break-inside-avoid rounded-[2rem] shadow-xl transition-all duration-300 inline-block w-full overflow-hidden"
              >
                {isTalal && (
                  <div className="bg-white border-2 border-purple-100 rounded-[2rem] p-6 text-slate-800 text-left relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-purple-100/50 pointer-events-none">
                      <Quote className="w-12 h-12 rotate-180" />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-br from-purple-200 to-fuchsia-200 rounded-full opacity-60 blur-xs" />
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white bg-purple-50 shadow-md">
                          <img
                            src="/Muhammad Talal.png"
                            alt="Muhammad Talal"
                            className="w-full h-full object-cover object-center scale-[1.05]"
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 leading-tight">Muhammad Talal</h4>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Student Consultation</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-3 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-slate-700 text-xs leading-relaxed font-semibold italic">
                      &ldquo;I recently had the opportunity to attend my first consultation session with Ms. Ayesha Saleem. Although I was unable to reach the office at the scheduled time, she still welcomed me with warmth and maintained a highly positive attitude throughout. Her explanations were clear and comprehensive, covering both directly relevant matters as well as related concerns with equal attention.&rdquo;
                    </p>
                  </div>
                )}

                {isShagufta && (
                  <div className="bg-white border-2 border-purple-100 rounded-[2rem] p-6 text-slate-800 text-left relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-purple-100/50 pointer-events-none">
                      <Quote className="w-12 h-12 rotate-180" />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-br from-purple-200 to-fuchsia-200 rounded-full opacity-60 blur-xs" />
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white bg-purple-50 shadow-md">
                          <img
                            src="/shagufta naz.png"
                            alt="Shagufta Naz"
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 leading-tight">Shagufta Naz</h4>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Student Consultation</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-3 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-slate-700 text-xs leading-relaxed font-semibold italic">
                      &ldquo;Thank you for your excellent counseling and guidance. The study plan you provided was clear, practical and well structured. Ayesha really helped me understand my options for studying and plan accordingly.&rdquo;
                    </p>
                  </div>
                )}

                {isHamza && (
                  <div className="bg-white border-2 border-purple-100 rounded-[2rem] p-6 text-slate-800 text-left relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-purple-100/50 pointer-events-none">
                      <Quote className="w-12 h-12 rotate-180" />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-br from-purple-200 to-fuchsia-200 rounded-full opacity-60 blur-xs" />
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white bg-purple-50 shadow-md">
                          <img
                            src="/hamza akram.png"
                            alt="Hamza Akram"
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 leading-tight">Hamza Akram</h4>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Student Consultation</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-3 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-slate-700 text-xs leading-relaxed font-semibold italic">
                      &ldquo;Had a great session with Ms. Ayesha. She really understands students’ needs and guided me well about scholarships and options in the US, UK and Germany. Very helpful and supportive.&rdquo;
                    </p>
                  </div>
                )}

                {isQuratulain && (
                  <div className="bg-white border-2 border-purple-100 rounded-[2rem] p-6 text-slate-800 text-left relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-purple-100/50 pointer-events-none">
                      <Quote className="w-12 h-12 rotate-180" />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-br from-purple-200 to-fuchsia-200 rounded-full opacity-60 blur-xs" />
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white bg-purple-50 shadow-md">
                          <img
                            src="/Quratulain Sajid.png"
                            alt="Quratulain Sajid"
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 leading-tight">Quratulain Sajid</h4>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Student Consultation</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-3 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-slate-700 text-xs leading-relaxed font-semibold italic">
                      &ldquo;I really enjoyed it as it was both informative and comfortable for me in order to put all my points and concerns.&rdquo;
                    </p>
                  </div>
                )}



                {isJaveria && (
                  <div className="bg-white border-2 border-purple-100 rounded-[2rem] p-6 text-slate-800 text-left relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-purple-100/50 pointer-events-none">
                      <Quote className="w-12 h-12 rotate-180" />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative shrink-0">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white bg-[#0091ff] flex items-center justify-center shadow-md">
                          <span className="text-white text-xl font-black">JI</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 leading-tight text-lg">Javeria Ilahi</h4>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Student Consultation</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-3 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-slate-700 text-xs leading-relaxed font-semibold italic">
                      &ldquo;I had a wonderful experience while consulting with mam ayesha. Her welcoming attitude allowed me to discuss my concerns in detail. Uniz connect is a best paltform for consultation where not only your queries are answered properly but they guide you in a right direction as well.&rdquo;
                    </p>
                  </div>
                )}

                {isManahil && (
                  <div className="bg-white border-2 border-purple-100 rounded-[2rem] p-6 text-slate-800 text-left relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-purple-100/50 pointer-events-none">
                      <Quote className="w-12 h-12 rotate-180" />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative shrink-0">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white bg-[#0091ff] flex items-center justify-center shadow-md">
                          <span className="text-white text-xl font-black">MA</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 leading-tight text-lg">Manahil Afridi</h4>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Student Consultation</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-3 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-slate-700 text-xs leading-relaxed font-semibold italic">
                      &ldquo;I loved the initial session, the counsellor even gave me extra time. ❤️The initial session covered everything.&rdquo;
                    </p>
                  </div>
                )}

                {isIrfan && (
                  <div className="bg-white border-2 border-purple-100 rounded-[2rem] p-6 text-slate-800 text-left relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-purple-100/50 pointer-events-none">
                      <Quote className="w-12 h-12 rotate-180" />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative shrink-0">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white bg-[#0091ff] flex items-center justify-center shadow-md">
                          <span className="text-white text-xl font-black">IK</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 leading-tight text-lg">Irfan Khan</h4>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Student Consultation</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-3 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-slate-700 text-xs leading-relaxed font-semibold italic">
                      &ldquo;I would say Ayesha Mam was really friendly very insightful - to all those who are reading this i would highly recommend you to book the session and you will love it ❤️&rdquo;
                    </p>
                  </div>
                )}

                {isNayab && (
                  <div className="bg-white border-2 border-purple-100 rounded-[2rem] p-6 text-slate-800 text-left relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-purple-100/50 pointer-events-none">
                      <Quote className="w-12 h-12 rotate-180" />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative shrink-0">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white bg-[#0091ff] flex items-center justify-center shadow-md">
                          <span className="text-white text-xl font-black">NA</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 leading-tight text-lg">Nayab Ali</h4>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Student Consultation</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-3 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-slate-700 text-xs leading-relaxed font-semibold italic">
                      &ldquo;I recently had a session with Ms. Ayesha, and I had a great experience. She explained everything clearly and made sure no questions were left unanswered. What I appreciated most was her gentle and kind demeanour, she created the kind of space where you actually feel safe asking things and exploring options.&rdquo;
                    </p>
                  </div>
                )}

                {isNabila && (
                  <div className="bg-white border-2 border-purple-100 rounded-[2rem] p-6 text-slate-800 text-left relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-purple-100/50 pointer-events-none">
                      <Quote className="w-12 h-12 rotate-180" />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative shrink-0">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white bg-purple-600 flex items-center justify-center shadow-md">
                          <span className="text-white text-xl font-black">N</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 leading-tight text-lg">Nabila</h4>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Email Feedback</p>
                      </div>
                    </div>
                    <div className="text-slate-700 text-xs leading-relaxed font-semibold italic space-y-3">
                      <p>Dear Ayesha,</p>
                      <p>
                        Thank you so much for such a detailed and heartwarming recap of our session. To be honest, I had my doubts when I connected you for counselling services since you have more experienced competitors in the market, too. However, I couldn't be happier about choosing UnizConnect for my admission journey. I don't think I could have found more personalized services elsewhere. I am truly grateful to you for showing patience toward the whole process, my nervousness, and especially the technical glitch. It was only your kindness that made me comfortable as we delved deeper into the discussion.
                      </p>
                      <p>
                        I have no doubt that UnizConnect will do great things in no time, insha'Allah. Please don't lose your kindness, sweetness, and personalised approach when it happens because that is exactly what makes your company so special.
                      </p>
                    </div>
                  </div>
                )}

                {!isTalal && !isShagufta && !isHamza && !isQuratulain && !isJaveria && !isManahil && !isIrfan && !isNayab && !isNabila && (
                  <div className="bg-white/5 border-2 border-purple-400/20 p-3 rounded-[2rem]">
                    <img
                      src={src}
                      alt={`Student success review ${idx + 1}`}
                      className="w-full h-auto rounded-[1.5rem] object-contain"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="text-center"
        >
          <motion.button 
            whileHover={{ scale: 1.08, rotate: -2 }}
            whileTap={{ scale: 0.92, rotate: 2 }}
            onClick={scrollToForm}
            className="w-full sm:w-auto px-12 py-5 bg-white text-purple-700 font-black text-xl rounded-full shadow-2xl shadow-purple-500/20 border-b-4 border-purple-200 active:border-b-0 active:mt-1 transition-all flex items-center justify-center gap-3 mx-auto"
          >
            <Sparkles className="w-6 h-6" />
            Book Your 1:1 Strategy Session
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
