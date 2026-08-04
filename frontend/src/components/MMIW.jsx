import React from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

// MMIW awareness section
const MMIW = ({ data }) => {
  return (
    <section className="relative py-28 md:py-40 px-5 border-t border-white/5">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="section-label mb-6 text-center">{data.label}</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display uppercase text-5xl md:text-8xl leading-[0.85] text-center mb-16">
            <span className="block text-white">{data.titleWhite}</span>
            <span className="block ftw-red">{data.titleRed}</span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="font-body text-xl md:text-2xl text-white/80 leading-relaxed border-l-2 border-ftw-red pl-6 mb-10">
            {data.intro}
          </p>
        </Reveal>

        <div className="space-y-8">
          {data.beats.map((b, i) => (
            <Reveal key={i}>
              <div className="border-l-2 border-white/15 pl-6">
                <p className="font-body text-lg md:text-xl text-white/70 leading-relaxed">
                  <span className="ftw-red font-semibold">{b.head} </span>
                  {b.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Resources */}
        <div className="mt-24">
          <Reveal>
            <h3 className="font-display uppercase text-3xl md:text-4xl mb-4">{data.resourcesTitle}</h3>
          </Reveal>
          <Reveal>
            <p className="font-body text-lg text-white/60 leading-relaxed mb-10 max-w-2xl">
              {data.resourcesIntro}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.resources.map((r, i) => (
              <Reveal key={i} delay={(i % 2) + 1}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 border border-white/10 bg-white/[0.02] p-5 hover:border-ftw-red hover:bg-white/[0.04] transition-all duration-300"
                >
                  <ArrowRight className="h-5 w-5 ftw-red shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="font-cond uppercase tracking-wide text-sm md:text-base text-white/85">
                    {r.name}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MMIW;
