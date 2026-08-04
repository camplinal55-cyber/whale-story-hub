import React, { useState } from "react";
import { Play } from "lucide-react";
import Reveal from "./Reveal";

// Trailer — click-to-play YouTube embed (MOCKED video id until real trailer provided)
const Trailer = ({ data }) => {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(data.youtubeId);

  return (
    <section className="relative py-28 md:py-40 px-5 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="section-label mb-6 text-center">{data.label}</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display uppercase text-5xl md:text-8xl leading-[0.85] text-center mb-14">
            {data.title}
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <div className="relative aspect-video w-full overflow-hidden border border-white/10 bg-black">
            {playing && hasVideo ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${data.youtubeId}?autoplay=1&rel=0`}
                title="Free The Whales Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => hasVideo && setPlaying(true)}
                className="group absolute inset-0 h-full w-full"
              >
                <img src={data.poster} alt="Trailer" className="h-full w-full object-cover opacity-70" loading="lazy" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-ftw-red/90 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-red-900/50">
                    <Play className="h-8 w-8 text-white fill-white ml-1" />
                  </span>
                  {!hasVideo && (
                    <span className="font-mono-l text-[0.65rem] tracking-widest uppercase text-white/60 mt-6">
                      Trailer coming soon
                    </span>
                  )}
                </div>
              </button>
            )}
          </div>
        </Reveal>

        <Reveal>
          <p className="font-mono-l text-xs md:text-sm tracking-[0.3em] uppercase text-white/50 text-center mt-10">
            {data.caption}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Trailer;
