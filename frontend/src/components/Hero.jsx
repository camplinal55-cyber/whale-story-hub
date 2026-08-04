import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Hero = ({ data }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 vignette"
        style={{ transform: `translateY(${offset * 0.35}px) scale(1.1)` }}
      >
        <img src={data.bg} alt="Tony and Louis cruising" className="h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-5"
        style={{ opacity: Math.max(0, 1 - offset / 550) }}
      >
        <img src={data.logo} alt="FTW Logo" className="h-16 md:h-20 w-auto mb-6 drop-shadow-2xl" />
        <p className="font-mono-l text-[0.65rem] md:text-xs tracking-[0.45em] uppercase text-white/70 mb-5">
          {data.presents}
        </p>
        <h1 className="font-display leading-[0.85] uppercase">
          <span className="block text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            {data.titleTop}
          </span>
          <span className="block ftw-red text-6xl sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            {data.titleBottom}
          </span>
        </h1>
        <p className="font-mono-l text-xs md:text-sm tracking-[0.4em] uppercase text-white/80 mt-5">
          {data.tagline}
        </p>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-6 w-6 text-white/50" />
      </div>
    </section>
  );
};

export default Hero;
