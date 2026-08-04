import React from "react";
import Reveal from "./Reveal";

// Director's Vision — long-form narrative block
const DirectorsVision = ({ data }) => {
  return (
    <section className="relative py-28 md:py-40 px-5">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="section-label mb-6">{data.label}</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display uppercase text-5xl md:text-7xl leading-[0.9] mb-12">
            {data.title}
          </h2>
        </Reveal>
        <div className="space-y-7">
          {data.paragraphs.map((p, i) => {
            const isQuote = p.trim().startsWith('"');
            return (
              <Reveal key={i}>
                <p
                  className={
                    isQuote
                      ? "font-quote italic text-2xl md:text-3xl text-white/90 leading-snug py-2"
                      : "font-body text-lg md:text-xl text-white/70 leading-relaxed"
                  }
                >
                  {p}
                </p>
              </Reveal>
            );
          })}
          <Reveal>
            <p className="font-mono-l text-sm tracking-wider uppercase ftw-red pt-6">{data.attribution}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default DirectorsVision;
