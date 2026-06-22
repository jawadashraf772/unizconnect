"use client";

export default function UniversitiesSection() {
  const universities = [
    { name: "LUMS", logo: "/lums.webp" },
    { name: "Bahria University", logo: "/BAHARIA_UNI_clean.webp" },
    { name: "Beaconhouse National University", logo: "/BNU_clean.webp" },
    { name: "Forman Christian College", logo: "/FCC_clean.webp" },
    { name: "IBA Karachi", logo: "/IBA_clean.webp" },
    { name: "IoBM", logo: "/IOBM_clean.webp" },
    { name: "LGS", logo: "/LGS_clean.webp" },
    { name: "NED University", logo: "/NED_clean.webp" },
    { name: "NUST", logo: "/NUST_clean.webp" }
  ];

  const row1 = universities.slice(0, 5);
  const row2 = universities.slice(5, 9);
  const row1Extended = [...row1, ...row1, ...row1];
  const row2Extended = [...row2, ...row2, ...row2];

  const UniCard = ({ uni }: { uni: typeof universities[0] }) => (
    <div className="flex-shrink-0 bg-white border-2 border-purple-100/40 rounded-2xl w-72 h-36 flex items-center justify-center p-2 shadow-md hover:shadow-lg hover:border-purple-300 transition-all duration-300 group">
      <img
        src={uni.logo}
        alt={`${uni.name} logo`}
        className="max-w-[90%] max-h-[90%] object-contain group-hover:scale-110 transition-all duration-300"
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
              className="bg-white border border-purple-100/60 rounded-xl aspect-[1.8/1] flex items-center justify-center p-2 shadow-xs hover:border-purple-200 hover:shadow-sm transition-all duration-300"
            >
              <img
                src={uni.logo}
                alt={`${uni.name} logo`}
                className="max-w-[90%] max-h-[90%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop/Tablet view: Smooth Marquee */}
      <div className="hidden sm:block w-full relative">

        
        {/* Marquee Row 1 - scrolls left */}
        <div className="relative mb-6 w-full">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-purple-50/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-purple-50/50 to-transparent z-10 pointer-events-none" />
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
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-purple-50/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-purple-50/50 to-transparent z-10 pointer-events-none" />
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

