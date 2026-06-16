"use client";

import { Globe } from "lucide-react";

/* Each university gets a styled shield/crest-style logo box with their brand color + initials.
   This is far more reliable than external image fetching and looks premium. */

export default function UniversitiesSection() {
  const universities = [
    { name: "University of Bristol", country: "UK", logo: "/university of bristol.png" },
    { name: "University of Liverpool", country: "UK", logo: "/university of liverpool.png" },
    { name: "Nottingham Trent University", country: "UK", logo: "/Nottingham Trent University.png" },
    { name: "Loughborough University", country: "UK", logo: "/loughborough University.png" },
    { name: "London School of Economics", country: "UK", logo: "/london school of economics.png" },
    { name: "University of Sussex", country: "UK", logo: "/University of suseex.jpg" },
    { name: "University of Leeds", country: "UK", logo: "/University of Leeds.png" },
    { name: "University of Manchester", country: "UK", logo: "/Manchester_University_Logo_(2).png" },
    { name: "University of Sheffield", country: "UK", logo: "/university of Sheffield.png" },
    { name: "Queen Mary University", country: "UK", logo: "/Queen Mary University.png" },
  ];

  const row1 = universities.slice(0, 5);
  const row2 = universities.slice(5, 10);
  const row1Extended = [...row1, ...row1, ...row1];
  const row2Extended = [...row2, ...row2, ...row2];

  const UniCard = ({ uni }: { uni: typeof universities[0] }) => (
    <div className="flex-shrink-0 bg-white border-2 border-purple-100/40 rounded-2xl w-48 h-24 flex items-center justify-center p-5 shadow-md hover:shadow-lg hover:border-purple-300 transition-all duration-300 group">
      <img
        src={uni.logo}
        alt={`${uni.name} logo`}
        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-all duration-300"
      />
    </div>
  );

  return (
    <section className="py-24 relative overflow-hidden w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/40 to-white" />
      <div 
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-purple-300/30 rounded-full blur-[120px] animate-smooth-pulse-glow" 
      />

      {/* Full-width marquee container */}
      <div className="w-full relative z-10 overflow-hidden">
        
        {/* Marquee Row 1 - scrolls left */}
        <div className="relative mb-6 w-full">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden w-full">
            <div className="flex gap-5 w-max animate-marquee-left">
              {[...row1Extended, ...row1Extended].map((uni, idx) => (
                <UniCard key={idx} uni={uni} />
              ))}
            </div>
          </div>
        </div>

        {/* Marquee Row 2 - scrolls right */}
        <div className="relative w-full">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden w-full">
            <div className="flex gap-5 w-max animate-marquee-right">
              {[...row2Extended, ...row2Extended].map((uni, idx) => (
                <UniCard key={idx} uni={uni} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
