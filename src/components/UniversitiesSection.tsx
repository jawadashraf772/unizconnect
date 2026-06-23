"use client";

import { useState } from "react";

export default function UniversitiesSection() {
  const [showAll, setShowAll] = useState(false);
  const universities = [
    { name: "LUMS", logo: "/lums.webp" },
    { name: "Bahria University", logo: "/Bahria-university-logo.webp" },
    { name: "Beaconhouse National University", logo: "/bnu_logo.webp" },
    { name: "Beaconhouse", logo: "/beaconhouse-logo.webp" },
    { name: "FAST-NU", logo: "/FAST-NU-logo.webp" },
    { name: "Forman Christian College", logo: "/FCCU new logo.webp" },
    { name: "GIKI", logo: "/giki logo.png" },
    { name: "IBA Karachi", logo: "/IBA_clean.webp" },
    { name: "IIU Islamabad", logo: "/IIU islamabad.png" },
    { name: "IoBM", logo: "/iobm logo.webp" },
    { name: "PIEAS", logo: "/PIEAS logo.png" },
    { name: "Karachi University", logo: "/karachi uni.webp" },
    { name: "LACAS", logo: "/LACAS.png" },
    { name: "Lahore School of Economics", logo: "/lahore school of economics logo.webp" },
    { name: "LGS", logo: "/lgs.png" },
    { name: "NED University", logo: "/NED logo.webp" },
    { name: "NUML", logo: "/numl logoss.png" },
    { name: "NUST", logo: "/NUST logo.webp" },
    { name: "Virtual University", logo: "/VU logo.png" },
    { name: "SZABIST", logo: "/szabist logoss.png" },
    { name: "UET Lahore", logo: "/UET logoss.png" },
    { name: "UMT", logo: "/UMT logo.jpg" },
    { name: "University of Peshawar", logo: "/uni of peshawar logo....png" },
    { name: "University of Sahiwal", logo: "/uni of sahiwal logo.webp" },
    { name: "University of Lahore", logo: "/uol logoss.png" },
    { name: "COMSATS", logo: "/comsats.jpg" },
    { name: "University of Agriculture", logo: "/uni of agriculture.png" },
    { name: "Punjab University", logo: "/pu logo.svg" },
    { name: "Abdul Wali Khan University", logo: "/abdul wali khan logosss.jpeg" }
  ];

  const half = Math.ceil(universities.length / 2);
  const row1 = universities.slice(0, half);
  const row2 = universities.slice(half);
  const row1Extended = [...row1, ...row1, ...row1];
  const row2Extended = [...row2, ...row2, ...row2];

  const UniCard = ({ uni }: { uni: typeof universities[0] & { filterClass?: string } }) => (
    <div className="flex-shrink-0 bg-white border-2 border-purple-100/40 rounded-xl w-48 h-24 flex items-center justify-center p-3 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300 group">
      <img
        src={uni.logo}
        alt={`${uni.name} logo`}
        className={`max-w-[85%] max-h-[85%] object-contain group-hover:scale-105 transition-all duration-300 ${uni.filterClass || ""}`}
      />
    </div>
  );

  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden mt-2 sm:mt-4 z-20">
      {/* Mobile/Tablet view: Static logo showcase */}
      <div className="block sm:hidden px-4">

        <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
          {universities.map((uni, idx) => (
            <div 
              key={idx} 
              className={`bg-white border border-purple-100/60 rounded-xl w-full h-14 flex items-center justify-center p-2 shadow-xs hover:border-purple-200 hover:shadow-sm transition-all duration-300 ${
                idx >= 6 ? (showAll ? "flex" : "hidden") : "flex"
              }`}
            >
              <img
                src={uni.logo}
                alt={`${uni.name} logo`}
                className={`max-w-[90%] max-h-[90%] object-contain ${(uni as any).filterClass || ""}`}
              />
            </div>
          ))}
        </div>

        {/* Show More Button for Mobile only */}
        <div className="text-center mt-5">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-2.5 bg-purple-50 hover:bg-purple-100 active:bg-purple-200 text-purple-700 font-extrabold text-xs rounded-full border border-purple-200 transition-all cursor-pointer shadow-xs"
          >
            {showAll ? "Show Less" : `Show All (+${universities.length - 6} More)`}
          </button>
        </div>
      </div>

      {/* Desktop/Tablet view: Smooth Marquee */}
      <div className="hidden sm:block w-full relative">

        
        {/* Marquee Row 1 - scrolls left */}
        <div className="relative mb-6 w-full">
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
          <div className="overflow-hidden w-full">
            <div className="flex gap-5 w-max animate-marquee-right">
              {[...row2Extended, ...row2Extended].map((uni, idx) => (
                <UniCard key={idx} uni={uni} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

