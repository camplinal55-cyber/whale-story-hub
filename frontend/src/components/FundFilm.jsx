import React from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

// Fund This Film — Kickstarter CTA
const FundFilm = ({ data, kickstarter }) => {
  return (
    <section className="relative py-32 md:py-48 px-5 border-t border-white/5 overflow-hidden">
      {/* subtle red radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-ftw-red/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="section-label mb-6">{data.label}</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display uppercase text-6xl md:text-9xl leading-[0.85] mb-10">{data.title}</h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="font-body text-xl md:text-2xl text-white/75 leading-relaxed max-w-2xl mx-auto mb-12">
            {data.body}
          </p>
        </Reveal>
        <Reveal delay={3}>
          <a
            href={kickstarter}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-ftw-red text-white font-mono-l uppercase tracking-widest text-sm px-10 py-5 hover:bg-[#c11020] transition-colors duration-300"
          >
            {data.cta}
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Reveal>
        <Reveal>
          <p className="font-mono-l text-xs tracking-[0.3em] uppercase text-white/50 mt-12">
            {data.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default FundFilm;
