import React from "react";
import Reveal from "./Reveal";

// Story + Three Rules section
const StoryRules = ({ data, onRule }) => {
  return (
    <section className="relative py-24 md:py-32">
      {/* Block A — HE BROKE THE RULES */}
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="section-label mb-6">{data.labelA}</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display uppercase text-5xl md:text-8xl leading-[0.85]">
            <span className="block text-white">{data.titleAWhite}</span>
            <span className="block ftw-red">{data.titleARed}</span>
          </h2>
        </Reveal>
        <div className="mt-10 max-w-2xl space-y-6">
          {data.paragraphsA.map((p, i) => (
            <Reveal key={i}>
              <p className="font-body text-lg md:text-xl text-white/70 leading-relaxed">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Rule stills — full-bleed alternating */}
      <div className="mt-24 space-y-24 md:space-y-32">
        {data.rules.map((rule, idx) => (
          <Reveal
            key={rule.n}
            onReveal={() => onRule(rule.n)}
            className="relative"
          >
            <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
              <img src={rule.img} alt={rule.alt} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />
              <div className="absolute inset-0 flex items-end">
                <div className="mx-auto max-w-6xl w-full px-5 pb-12 md:pb-16">
                  <span className="font-mono-l ftw-red text-sm tracking-[0.35em] uppercase">{rule.label}</span>
                  <h3 className="font-display uppercase text-white text-4xl md:text-7xl leading-[0.9] mt-2">
                    {rule.text}
                  </h3>
                </div>
              </div>
            </div>

            {/* Interstitial narrative between rule 2 and 3 */}
            {idx === 1 && (
              <div className="mx-auto max-w-6xl px-5 pt-24">
                <p className="section-label mb-6">{data.labelB}</p>
                <h2 className="font-display uppercase text-4xl md:text-7xl leading-[0.9] mb-8">{data.titleB}</h2>
                <div className="max-w-2xl space-y-6">
                  {data.paragraphsB.map((p, i) => (
                    <p key={i} className="font-body text-lg md:text-xl text-white/70 leading-relaxed">{p}</p>
                  ))}
                </div>
                <div className="mt-16">
                  <p className="section-label mb-6">{data.labelC}</p>
                  <h2 className="font-display uppercase text-4xl md:text-7xl leading-[0.9] mb-8">{data.titleC}</h2>
                  <div className="max-w-2xl space-y-6">
                    {data.paragraphsC.map((p, i) => (
                      <p key={i} className="font-body text-lg md:text-xl text-white/70 leading-relaxed">{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default StoryRules;
