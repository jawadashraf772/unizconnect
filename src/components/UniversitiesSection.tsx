"use client";

import { useState } from "react";
import Image from "next/image";

// Using explicit padding controls to resize logos perfectly within card boundaries
// This avoids CSS scale transform overflow bugs on Safari, iPhones, iPads, and Macs.
const universities = [
  { name: "LUMS",                       logo: "/lums.webp",                          mobilePadding: "12px", desktopPadding: "16px" },
  { name: "Bahria University",           logo: "/Bahria-university-logo.webp",        mobilePadding: "12px", desktopPadding: "16px" },
  { name: "Beaconhouse Nat. Uni.",       logo: "/bnu_logo.webp",                      mobilePadding: "12px", desktopPadding: "16px" },
  { name: "Beaconhouse",                 logo: "/beaconhouse-logo.webp",              mobilePadding: "12px", desktopPadding: "16px" },
  { name: "FAST-NU",                     logo: "/FAST-NU-logo.webp",                  mobilePadding: "12px", desktopPadding: "16px" },
  { name: "Forman Christian College",    logo: "/FCCU new logo.webp",                 mobilePadding: "12px", desktopPadding: "16px" },
  { name: "GIKI",                        logo: "/giki logo.png",                      mobilePadding: "15px", desktopPadding: "20px" },
  { name: "IBA Karachi",                 logo: "/IBA_clean.webp",                     mobilePadding: "12px", desktopPadding: "16px" },
  { name: "IIU Islamabad",               logo: "/IIU islamabad.png",                  mobilePadding: "15px", desktopPadding: "20px" },
  { name: "IoBM",                        logo: "/IOBM_clean.webp",                    mobilePadding: "12px", desktopPadding: "16px" },
  { name: "PIEAS",                       logo: "/PIEAS logo.png",                     mobilePadding: "12px", desktopPadding: "16px" },
  { name: "Karachi University",          logo: "/karachi uni.webp",                   mobilePadding: "15px", desktopPadding: "20px" },
  { name: "LACAS",                       logo: "/LACAS.png",                          mobilePadding: "11px", desktopPadding: "15px" },
  { name: "Lahore School of Economics",  logo: "/lahore school of economics logo.webp",mobilePadding: "12px", desktopPadding: "16px" },
  { name: "LGS",                         logo: "/LGS.png",                            mobilePadding: "20px", desktopPadding: "26px" },
  { name: "NED University",              logo: "/NED logo.webp",                      mobilePadding: "12px", desktopPadding: "16px" },
  { name: "NUML",                        logo: "/numl logoss.png",                    mobilePadding: "15px", desktopPadding: "20px" },
  { name: "NUST",                        logo: "/NUST logo.webp",                     mobilePadding: "12px", desktopPadding: "16px" },
  { name: "Virtual University",          logo: "/VU logo.png",                        mobilePadding: "12px", desktopPadding: "16px" },
  { name: "SZABIST",                     logo: "/szabist logoss.png",                 mobilePadding: "12px", desktopPadding: "16px" },
  { name: "UET Lahore",                  logo: "/UET logoss.png",                     mobilePadding: "18px", desktopPadding: "24px" },
  { name: "UMT",                         logo: "/UMT logo.jpg",                       mobilePadding: "15px", desktopPadding: "20px" },
  { name: "University of Peshawar",      logo: "/uni of peshawar logo....png",        mobilePadding: "18px", desktopPadding: "24px" },
  { name: "University of Sahiwal",       logo: "/uni of sahiwal logo.webp",           mobilePadding: "15px", desktopPadding: "20px" },
  { name: "University of Lahore",        logo: "/uol logoss.png",                     mobilePadding: "12px", desktopPadding: "16px" },
  { name: "COMSATS",                     logo: "/comsats.jpg",                        mobilePadding: "15px", desktopPadding: "20px" },
  { name: "University of Agriculture",   logo: "/uni of agriculture.png",             mobilePadding: "17px", desktopPadding: "23px" },
  { name: "Punjab University",           logo: "/pu logo.svg",                        mobilePadding: "18px", desktopPadding: "24px" },
  { name: "Abdul Wali Khan University",  logo: "/abdul wali khan logosss.jpeg",       mobilePadding: "15px", desktopPadding: "20px" },
  { name: "Bahauddin Zakariya Uni.",     logo: "/bzu logo.jpeg",                      mobilePadding: "15px", desktopPadding: "20px" },
];

export default function UniversitiesSection() {
  const [showAll, setShowAll] = useState(false);

  const half = Math.ceil(universities.length / 2);
  const row1 = universities.slice(0, half);
  const row2 = universities.slice(half);
  const row1Extended = [...row1, ...row1, ...row1];
  const row2Extended = [...row2, ...row2, ...row2];

  // Desktop marquee card
  const UniCard = ({ uni }: { uni: typeof universities[0] }) => (
    <div
      style={{
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
        padding: uni.desktopPadding,
      }}
      className="flex-shrink-0 bg-white border-2 border-purple-100/40 rounded-xl w-48 h-24 flex items-center justify-center shadow-sm hover:shadow-md hover:border-purple-300 transition-all duration-300 group overflow-hidden"
    >
      <div className="relative w-full h-full">
        <Image
          src={uni.logo}
          alt={`${uni.name} logo`}
          fill
          style={{
            objectFit: "contain",
            display: "block",
            transition: "transform 0.3s ease",
          }}
          sizes="(max-width: 640px) 0vw, 192px"
          className="group-hover:scale-105"
        />
      </div>
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
                WebkitTransform: "translateZ(0)",
                transform: "translateZ(0)",
                WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                padding: uni.mobilePadding,
              }}
              className={`bg-white border border-purple-100/60 rounded-xl w-full h-20 flex items-center justify-center shadow-sm transition-all duration-300 overflow-hidden ${
                idx >= 6 ? (showAll ? "flex" : "hidden") : "flex"
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={uni.logo}
                  alt={`${uni.name} logo`}
                  fill
                  style={{
                    objectFit: "contain",
                    display: "block",
                  }}
                  sizes="(max-width: 640px) 33vw, 0vw"
                />
              </div>
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
