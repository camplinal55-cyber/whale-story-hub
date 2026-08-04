import React from "react";
import Reveal from "./Reveal";

// The Premise — large serif italic logline centered
const Premise = ({ data }) => {
  return (
    <section className="relative py-28 md:py-36 px-5">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="section-label mb-10">{data.label}</p>
        </Reveal>
        <Reveal delay={1}>
          <blockquote className="font-quote italic text-3xl md:text-5xl leading-[1.25] text-white/95">
            {data.quote}
          </blockquote>
        </Reveal>
        <Reveal delay={2}>
          <div className="flex items-center justify-center gap-5 mt-12">
            <span className="h-px w-12 bg-white/25" />
            <span className="font-mono-l text-[0.7rem] tracking-[0.35em] uppercase text-white/60">
              {data.credit}
            </span>
            <span className="h-px w-12 bg-white/25" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Premise;
