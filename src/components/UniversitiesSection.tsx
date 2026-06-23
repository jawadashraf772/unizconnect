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
    { name: "Forman Christian College", logo: "/fc.png" },
    { name: "IBA Karachi", logo: "/IBA_clean.webp" },
    { name: "IoBM", logo: "/IOBM_clean.webp" },
    { name: "Karachi University", logo: "/karachi uni.webp" },
    { name: "Lahore School of Economics", logo: "/lahore school of economics logo.webp" },
    { name: "LGS", logo: "/lgs logo.webp" },
    { name: "NED University", logo: "/NED_clean.webp" },
    { name: "NUST", logo: "/NUST_clean.webp" }
  ];

  const row1 = universities.slice(6, 13);
  const row2 = universities.slice(0, 6);
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
            {showAll ? "Show Less" : "Show All (+7 More) 🏛️"}
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

