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

  const testimonials = [
    {
      quote: "I loved the initial session, the counsellor even gave me extra time. ❤️The initial session covered everything.",
      name: "Manahil Afridi",
      detail: "FAST University • Applied for Masters",
      highlight: "From confused to clear in 40 minutes",
      emoji: "🎯",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      quote: "I had a wonderful experience while consulting with mam ayesha. Her welcoming attitude allowed me to discuss my concerns in detail. Uniz connect is a best paltform for consultation where not only your queries are answered properly but they guide you in a right direction as well.",
      name: "Javeria Ilahi",
      detail: "NUST Graduate • 2.8 CGPA",
      highlight: "Got into 2 UK Universities despite low CGPA",
      emoji: "💪",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      quote: "I really enjoyed it as it was both informative and comfortable for me in order to put all my points and concerns.",
      name: "Quratulain Sajid",
      detail: "Applied for Masters",
      highlight: "Informative and highly comfortable session",
      emoji: "🌟",
      gradient: "from-blue-500 to-indigo-600",
      avatar: "/Quratulain Sajid.png"
    },
    {
      quote: "Thank you for your excellent counseling and guidance. The study plan you provided was clear, practical and well structured. Ayesha really helped me understand my options for studying and plan accordingly.",
      name: "Shagufta Naz",
      detail: "NUST Graduate • Scholarship Recipient",
      highlight: "Clear, practical, and well-structured plan",
      emoji: "📚",
      gradient: "from-amber-500 to-orange-600",
      avatar: "/shagufta naz.png"
    },
    {
      quote: "I recently had the opportunity to attend my first consultation session with Ms. Ayesha Saleem. Although I was unable to reach the office at the scheduled time, she still welcomed me with warmth and maintained a highly positive attitude throughout. Her explanations were clear and comprehensive, covering both directly relevant matters as well as related concerns with equal attention.",
      name: "Muhammad Talal",
      detail: "Scholarship Winner",
      highlight: "Warm, highly positive & comprehensive",
      emoji: "🎓",
      gradient: "from-fuchsia-500 to-pink-600",
      avatar: "/Muhammad Talal.png"
    },
    {
      quote: "Had a great session with Ms. Ayesha. She really understands students' needs and guided me well about scholarships and options in the US, UK and Germany. Very helpful and supportive.",
      name: "Hamza Akram",
      detail: "IBA Karachi • Masters Applicant",
      highlight: "Understands students' needs & very supportive",
      emoji: "🤝",
      gradient: "from-violet-500 to-purple-600",
      avatar: "/hamza akram.png"
    },
    {
      quote: "I recently had a session with Ms. Ayesha, and I had a great experience. She explained everything clearly and made sure no questions were left unanswered. What I appreciated most was her gentle and kind demeanour, she created the kind of space where you actually feel safe asking things and exploring options.",
      name: "Nayab Ali",
      detail: "Applied for Masters",
      highlight: "Safe space to explore options",
      emoji: "🌟",
      gradient: "from-sky-500 to-blue-600",
    },
    {
      quote: "I would say Ayesha Mam was really friendly very insightful - to all those who are reading this i would highly recommend you to book the session and you will love it ❤️",
      name: "Irfan Khan",
      detail: "Applied for Masters",
      highlight: "Highly recommended & friendly",
      emoji: "👍",
      gradient: "from-rose-500 to-pink-600",
    },
    {
      quote: "Asalam u Alekum Everyone... Thank you Soo much for your efforts✨✨✨✨✨ ... This is a great achievement... Thank you ❤️❤️❤️❤️",
      name: "Eesha",
      detail: "Nottingham Trent University • Scholarship Winner",
      highlight: "50% Scholarship at NTU",
      emoji: "🎓",
      gradient: "from-purple-500 to-indigo-600",
      avatar: "/avatar_eesha.png"
    },
    {
      quote: "Thankyou so muchhh. I was really surprised. didn’t even register it properly lol",
      name: "Alisha",
      detail: "University of Glasgow • Scholarship Recipient",
      highlight: "£10,000 Global Leadership Scholarship",
      emoji: "🎉",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      quote: "Many many congratulations @~muhammad..., as you've managed to secure the £13,000 ThinkBig Scholarship Alhumdullillah 😍🎉🥳\n\nThat's a great achievement MashaAllah 💯👏🏼🔥\n\nMany thanks for your support which has remained a pivotal part in this journey ❤️",
      name: "Muhammad",
      detail: "Bristol University • Scholarship Winner",
      highlight: "£13,000 ThinkBig Scholarship",
      emoji: "🏆",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      quote: "I'd tried a few consultants before but didn't feel I was getting the guidance I needed. A friend of mine, who'd been through the process and had a good experience, suggested I reach out to UnizConnect. At first, I was a bit unsure, especially since I wasn't even in the same city as them. But, based on my friend's recommendation, I decided to give it a try.\n\nFrom our very first session, I felt comfortable and understood. Miss Ayesha walked me through everything I'd been stressing about like writing a personal statement, meeting admissions criteria, and choosing the right course. I found the sessions incredibly helpful and reassuring!",
      name: "Sumbul",
      detail: "Consultation Session",
      highlight: "Extremely helpful & reassuring guidance",
      emoji: "💡",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      quote: "Mam LSE me hogaya Aaaaaaaaaaaaaaaa Ab to Meri treat banti he",
      name: "Uzair",
      detail: "LSE Graduate • Geographic Data Science",
      highlight: "Accepted into LSE",
      emoji: "🎓",
      gradient: "from-purple-500 to-indigo-600",
      avatar: "/uzair LSEEE 1.png"
    },
    {
      quote: "Dear Awaisha Inayat, We are pleased to invite you to interview for a Chevening award. Please book your interview as soon as possible to ensure you secure your preferred slot.",
      name: "Awaisha Inayat",
      detail: "Chevening Scholar",
      highlight: "Chevening Scholarship Interview Invite",
      emoji: "🏆",
      gradient: "from-emerald-500 to-teal-600",
      avatar: "/avatar_awaisha.png"
    },
    {
      quote: "I had a wonderful consultation session with Ms. Ayesha Saleem. She was extremely welcoming and carried such a warm, positive attitude throughout our interaction, which instantly made the discussion comfortable and engaging. Her explanations were very clear and detailed, and I really appreciated how she not only addressed my study abroad queries but also guided me regarding career direction, helping me see what would be most beneficial for my future. The session was both insightful and encouraging, and I left with much more clarity and confidence about my next steps.",
      name: "Yumna",
      detail: "Consultation Session",
      highlight: "Insightful & encouraging guidance",
      emoji: "💡",
      gradient: "from-blue-500 to-indigo-600",
    },
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
              className="bg-white/5 backdrop-blur-sm border-2 border-purple-400/20 rounded-[2rem] p-7 relative overflow-hidden group hover:border-purple-400/40 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-10 h-10 text-purple-300" />
              </div>

              <div className="relative z-10 space-y-5 flex flex-col justify-between h-full">
                <div className="space-y-5">
                  {/* Top Block: Profile & Stars */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {t.avatar ? (
                        <img 
                          src={t.avatar} 
                          alt={t.name} 
                          className="w-16 h-16 rounded-full object-cover border-2 border-purple-400/40 shrink-0"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center font-bold text-white border-2 border-purple-400/40 shrink-0">
                          {t.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                      <div>
                        <p className="font-black text-white text-base sm:text-lg leading-snug">{t.name}</p>
                        <p className="text-[11px] sm:text-xs text-purple-300 font-bold uppercase tracking-wider mt-1 leading-normal">{t.detail}</p>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-purple-100 text-sm font-medium leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Highlight Badge */}
                <div className="pt-2 border-t border-purple-400/10">
                  <div className={`inline-block bg-gradient-to-r ${t.gradient} text-white text-xs font-black px-3 py-1.5 rounded-lg shadow-sm`}>
                    {t.highlight}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
