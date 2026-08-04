import React, { useEffect, useState } from "react";

const Header = ({ rulesBroken, kickstarter, logo }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 flex items-center justify-between">
          {/* Left: logo (fades in on scroll) */}
          <a
            href="#top"
            className={`flex items-center gap-3 transition-all duration-500 ${
              scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <img src={logo} alt="FTW" className="h-8 w-auto" />
            <span className="font-display text-lg tracking-wider hidden sm:block">FREE THE WHALES</span>
          </a>

          {/* Right: rules counter */}
          <div className="flex items-center gap-4">
            <a
              href={kickstarter}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center font-mono-l text-[0.7rem] tracking-widest uppercase bg-ftw-red text-white px-5 py-2.5 hover:bg-[#c11020] transition-colors duration-300 ${
                scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              Fund This Film
            </a>
            <div className="font-mono-l text-[0.7rem] md:text-[0.72rem] tracking-widest uppercase text-white/60 border border-white/15 px-3.5 py-2 bg-black/40">
              Rules Broken:{" "}
              <span className="ftw-red font-bold">{rulesBroken}</span>
              <span className="text-white/40">/3</span>
            </div>
          </div>
        </div>
      </header>

      {/* Fixed bottom-left CTA appears after scroll */}
      <a
        href={kickstarter}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 left-6 z-50 md:hidden font-mono-l text-[0.7rem] tracking-widest uppercase bg-ftw-red text-white px-6 py-3.5 shadow-2xl shadow-red-900/40 transition-all duration-500 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        Fund This Film
      </a>
    </>
  );
};

export default Header;
