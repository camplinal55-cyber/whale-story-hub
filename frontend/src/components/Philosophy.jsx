import React from "react";
import Reveal from "./Reveal";

// Philosophy — Why This Story Matters
const Philosophy = ({ data }) => {
  return (
    <section className="relative py-28 md:py-40 px-5 border-t border-white/5">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="section-label mb-6">{data.label}</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display uppercase text-5xl md:text-8xl leading-[0.85] mb-14">{data.title}</h2>
        </Reveal>
        <div className="space-y-7 text-left">
          {data.paragraphs.map((p, i) => (
            <Reveal key={i}>
              <p className="font-body text-lg md:text-xl text-white/70 leading-relaxed">{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-16">
            <p className="font-quote italic text-3xl md:text-4xl text-white/90">{data.closingA}</p>
            <p className="font-quote italic text-2xl md:text-3xl text-white/60 mt-2">{data.closingB}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Philosophy;
