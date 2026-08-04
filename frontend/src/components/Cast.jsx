import React from "react";
import Reveal from "./Reveal";

// Cast grid — 6 members
const Cast = ({ data }) => {
  return (
    <section className="relative py-28 md:py-40 px-5 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-label mb-6">{data.label}</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display uppercase text-5xl md:text-8xl leading-[0.85] mb-16">
            <span className="text-white">{data.titleWhite} </span>
            <span className="ftw-red">{data.titleRed}</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.members.map((m, i) => (
            <Reveal key={m.character} delay={(i % 3) + 1}>
              <div className="group relative overflow-hidden bg-[#0c0c0e] border border-white/8">
                <div className="relative h-[420px] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.actor}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display uppercase text-4xl ftw-red leading-none">{m.character}</h3>
                  <p className="font-cond uppercase tracking-widest text-sm text-white mt-1">{m.actor}</p>
                  <p className="font-body italic text-white/60 mt-2">{m.tagline}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="font-mono-l text-xs md:text-sm tracking-[0.25em] uppercase text-white/50 text-center mt-16">
            {data.credit}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Cast;
