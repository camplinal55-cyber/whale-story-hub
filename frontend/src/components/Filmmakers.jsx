import React from "react";
import Reveal from "./Reveal";

// Filmmakers bios
const Filmmakers = ({ data }) => {
  return (
    <section className="relative py-28 md:py-40 px-5 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="section-label mb-6 text-center">{data.label}</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display uppercase text-5xl md:text-8xl leading-[0.85] text-center mb-20">
            <span className="text-white">{data.titleWhite} </span>
            <span className="ftw-red">{data.titleRed}</span>
          </h2>
        </Reveal>

        <div className="space-y-20">
          {data.people.map((p, i) => (
            <Reveal key={p.name}>
              <div className="border-t border-white/10 pt-10">
                <h3 className="font-display uppercase text-4xl md:text-5xl mb-2">{p.name}</h3>
                <p className="font-mono-l text-[0.7rem] md:text-xs tracking-[0.2em] uppercase ftw-red mb-8">
                  {p.role}
                </p>
                <div className="space-y-5 max-w-3xl">
                  {p.bio.map((b, j) => (
                    <p key={j} className="font-body text-lg md:text-xl text-white/70 leading-relaxed">
                      {b}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Filmmakers;
