"use client";

import { useState } from "react";

// mobileMaxW  = max-width  on mobile grid (as % string)
// mobileMaxH  = max-height on mobile grid (as % string)
// desktopMaxW = max-width  in desktop marquee cards
// desktopMaxH = max-height in desktop marquee cards
const universities = [
  { name: "LUMS",                       logo: "/lums.webp",                          mobileMaxW: "76%", mobileMaxH: "72%", desktopMaxW: "88%", desktopMaxH: "88%" },
  { name: "Bahria University",           logo: "/Bahria-university-logo.webp",        mobileMaxW: "72%", mobileMaxH: "68%", desktopMaxW: "84%", desktopMaxH: "84%" },
  { name: "Beaconhouse Nat. Uni.",       logo: "/bnu_logo.webp",                      mobileMaxW: "74%", mobileMaxH: "70%", desktopMaxW: "86%", desktopMaxH: "86%" },
  { name: "Beaconhouse",                 logo: "/beaconhouse-logo.webp",              mobileMaxW: "72%", mobileMaxH: "68%", desktopMaxW: "84%", desktopMaxH: "84%" },
  { name: "FAST-NU",                     logo: "/FAST-NU-logo.webp",                  mobileMaxW: "74%", mobileMaxH: "70%", desktopMaxW: "86%", desktopMaxH: "86%" },
  { name: "Forman Christian College",    logo: "/FCCU new logo.webp",                 mobileMaxW: "72%", mobileMaxH: "68%", desktopMaxW: "84%", desktopMaxH: "84%" },
  { name: "GIKI",                        logo: "/giki logo.png",                      mobileMaxW: "66%", mobileMaxH: "62%", desktopMaxW: "80%", desktopMaxH: "80%" },
  { name: "IBA Karachi",                 logo: "/IBA_clean.webp",                     mobileMaxW: "76%", mobileMaxH: "72%", desktopMaxW: "88%", desktopMaxH: "88%" },
  { name: "IIU Islamabad",               logo: "/IIU islamabad.png",                  mobileMaxW: "66%", mobileMaxH: "62%", desktopMaxW: "80%", desktopMaxH: "80%" },
  { name: "IoBM",                        logo: "/IOBM_clean.webp",                    mobileMaxW: "72%", mobileMaxH: "68%", desktopMaxW: "84%", desktopMaxH: "84%" },
  { name: "PIEAS",                       logo: "/PIEAS logo.png",                     mobileMaxW: "74%", mobileMaxH: "70%", desktopMaxW: "86%", desktopMaxH: "86%" },
  { name: "Karachi University",          logo: "/karachi uni.webp",                   mobileMaxW: "66%", mobileMaxH: "62%", desktopMaxW: "80%", desktopMaxH: "80%" },
  { name: "LACAS",                       logo: "/LACAS.png",                          mobileMaxW: "76%", mobileMaxH: "72%", desktopMaxW: "88%", desktopMaxH: "88%" },
  { name: "Lahore School of Economics",  logo: "/lahore school of economics logo.webp",mobileMaxW: "74%", mobileMaxH: "70%", desktopMaxW: "86%", desktopMaxH: "86%" },
  { name: "LGS",                         logo: "/LGS.png",                            mobileMaxW: "58%", mobileMaxH: "54%", desktopMaxW: "72%", desktopMaxH: "72%" },
  { name: "NED University",              logo: "/NED logo.webp",                      mobileMaxW: "74%", mobileMaxH: "70%", desktopMaxW: "86%", desktopMaxH: "86%" },
  { name: "NUML",                        logo: "/numl logoss.png",                    mobileMaxW: "66%", mobileMaxH: "62%", desktopMaxW: "80%", desktopMaxH: "80%" },
  { name: "NUST",                        logo: "/NUST logo.webp",                     mobileMaxW: "74%", mobileMaxH: "70%", desktopMaxW: "86%", desktopMaxH: "86%" },
  { name: "Virtual University",          logo: "/VU logo.png",                        mobileMaxW: "76%", mobileMaxH: "72%", desktopMaxW: "88%", desktopMaxH: "88%" },
  { name: "SZABIST",                     logo: "/szabist logoss.png",                 mobileMaxW: "72%", mobileMaxH: "68%", desktopMaxW: "84%", desktopMaxH: "84%" },
  { name: "UET Lahore",                  logo: "/UET logoss.png",                     mobileMaxW: "58%", mobileMaxH: "54%", desktopMaxW: "72%", desktopMaxH: "72%" },
  { name: "UMT",                         logo: "/UMT logo.jpg",                       mobileMaxW: "68%", mobileMaxH: "64%", desktopMaxW: "82%", desktopMaxH: "82%" },
  { name: "University of Peshawar",      logo: "/uni of peshawar logo....png",        mobileMaxW: "56%", mobileMaxH: "52%", desktopMaxW: "70%", desktopMaxH: "70%" },
  { name: "University of Sahiwal",       logo: "/uni of sahiwal logo.webp",           mobileMaxW: "64%", mobileMaxH: "60%", desktopMaxW: "78%", desktopMaxH: "78%" },
  { name: "University of Lahore",        logo: "/uol logoss.png",                     mobileMaxW: "76%", mobileMaxH: "72%", desktopMaxW: "88%", desktopMaxH: "88%" },
  { name: "COMSATS",                     logo: "/comsats.jpg",                        mobileMaxW: "68%", mobileMaxH: "64%", desktopMaxW: "82%", desktopMaxH: "82%" },
  { name: "University of Agriculture",   logo: "/uni of agriculture.png",             mobileMaxW: "60%", mobileMaxH: "56%", desktopMaxW: "74%", desktopMaxH: "74%" },
  { name: "Punjab University",           logo: "/pu logo.svg",                        mobileMaxW: "62%", mobileMaxH: "58%", desktopMaxW: "76%", desktopMaxH: "76%" },
  { name: "Abdul Wali Khan University",  logo: "/abdul wali khan logosss.jpeg",       mobileMaxW: "62%", mobileMaxH: "58%", desktopMaxW: "76%", desktopMaxH: "76%" },
  { name: "Bahauddin Zakariya Uni.",     logo: "/bzu logo.jpeg",                      mobileMaxW: "62%", mobileMaxH: "58%", desktopMaxW: "76%", desktopMaxH: "76%" },
];

export default function UniversitiesSection() {
  const [showAll, setShowAll] = useState(false);

  const half = Math.ceil(universities.length / 2);
  const row1 = universities.slice(0, half);
  const row2 = universities.slice(half);
  const row1Extended = [...row1, ...row1, ...row1];
  const row2Extended = [...row2, ...row2, ...row2];

  // Desktop marquee card — no transform scale, just constrained img
  const UniCard = ({ uni }: { uni: typeof universities[0] }) => (
    <div
      style={{ WebkitTransform: "translateZ(0)", transform: "translateZ(0)" }}
      className="flex-shrink-0 bg-white border-2 border-purple-100/40 rounded-xl w-48 h-24 flex items-center justify-center p-3 shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300 group overflow-hidden"
    >
      <img
        src={uni.logo}
        alt={`${uni.name} logo`}
        style={{
          maxWidth: uni.desktopMaxW,
          maxHeight: uni.desktopMaxH,
          width: "auto",
          height: "auto",
          objectFit: "contain",
          display: "block",
          transition: "transform 0.3s ease",
        }}
        className="group-hover:scale-105"
      />
    </div>
  );

  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden mt-2 sm:mt-4 z-20">

      {/* ── Mobile / small tablet: 3-column static grid ── */}
      <div className="block sm:hidden px-4">
        <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
          {universities.map((uni, idx) => (
            <div
              key={idx}
              style={{
                // Safari fix: GPU compositing layer forces overflow-hidden to clip properly
                WebkitTransform: "translateZ(0)",
                transform: "translateZ(0)",
                // clip fallback for older WebKit
                WebkitMaskImage: "-webkit-radial-gradient(white, black)",
              }}
              className={`bg-white border border-purple-100/60 rounded-xl w-full h-20 flex items-center justify-center p-2 shadow-sm transition-all duration-300 overflow-hidden ${
                idx >= 6 ? (showAll ? "flex" : "hidden") : "flex"
              }`}
            >
              <img
                src={uni.logo}
                alt={`${uni.name} logo`}
                style={{
                  maxWidth: uni.mobileMaxW,
                  maxHeight: uni.mobileMaxH,
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>

        {/* Show More / Show Less */}
        <div className="text-center mt-5">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-5 py-2.5 bg-purple-50 hover:bg-purple-100 active:bg-purple-200 text-purple-700 font-extrabold text-xs rounded-full border border-purple-200 transition-all cursor-pointer shadow-sm"
          >
            {showAll ? "Show Less" : `Show All (+${universities.length - 6} More)`}
          </button>
        </div>
      </div>

      {/* ── Desktop / large tablet: Marquee rows ── */}
      <div className="hidden sm:block w-full relative">
        {/* Row 1 — scrolls left */}
        <div className="relative mb-6 w-full">
          <div className="overflow-hidden w-full">
            <div className="flex gap-5 w-max animate-marquee-left">
              {[...row1Extended, ...row1Extended].map((uni, idx) => (
                <UniCard key={idx} uni={uni} />
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 — scrolls right */}
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
