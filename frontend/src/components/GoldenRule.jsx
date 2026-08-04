import React from "react";
import Reveal from "./Reveal";

// The Golden Rule — feature image + statement
const GoldenRule = ({ data }) => {
  return (
    <section className="relative">
      {/* Full-bleed image */}
      <div className="relative h-[70vh] md:h-screen w-full overflow-hidden">
        <img src={data.img} alt="The Golden Rule" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-5xl w-full px-5">
            <Reveal>
              <p className="section-label mb-6">{data.label}</p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-display uppercase text-5xl md:text-8xl leading-[0.85] mb-8">
                <span className="block text-white">{data.titleWhite}</span>
                <span className="block ftw-red">{data.titleRed}</span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="font-body text-lg md:text-2xl text-white/85 leading-relaxed max-w-2xl">
                {data.body}
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p className="font-mono-l text-xs md:text-sm tracking-[0.3em] uppercase text-white/60 mt-10">
                {data.slogan}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldenRule;
