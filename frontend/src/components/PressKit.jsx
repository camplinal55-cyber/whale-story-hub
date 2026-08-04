import React, { useState } from "react";
import { Download, Expand } from "lucide-react";
import Reveal from "./Reveal";
import { Dialog, DialogContent } from "./ui/dialog";

// Press Kit — behind-the-scenes gallery with lightbox + downloadable synopsis
const PressKit = ({ data, synopsis }) => {
  const [active, setActive] = useState(null);

  const download = () => {
    const blob = new Blob([synopsis], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "FreeTheWhales-PressKit.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative py-28 md:py-40 px-5 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-label mb-6">{data.label}</p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display uppercase text-5xl md:text-8xl leading-[0.85] mb-6">
            {data.title}
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <p className="font-body text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              {data.intro}
            </p>
            <button
              type="button"
              onClick={download}
              className="group inline-flex items-center gap-3 bg-ftw-red text-white font-mono-l uppercase tracking-widest text-xs px-7 py-4 hover:bg-[#c11020] transition-colors duration-300 shrink-0"
            >
              <Download className="h-4 w-4" />
              {data.cta}
            </button>
          </div>
        </Reveal>

        {/* Masonry-style gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {data.photos.map((p, i) => (
            <Reveal key={i} delay={(i % 3) + 1} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(p)}
                className="group relative block w-full overflow-hidden border border-white/10 bg-[#0c0c0e]"
              >
                <img
                  src={p.url}
                  alt={p.caption}
                  loading="lazy"
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-mono-l text-[0.65rem] tracking-widest uppercase text-white/85 text-left">
                    {p.caption}
                  </span>
                  <Expand className="h-4 w-4 ftw-red shrink-0" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl w-[95vw] bg-black border-white/10 p-0 overflow-hidden">
          {active && (
            <div>
              <img src={active.url} alt={active.caption} className="w-full h-auto max-h-[80vh] object-contain bg-black" />
              <p className="font-mono-l text-xs tracking-widest uppercase text-white/60 px-5 py-4">
                {active.caption}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PressKit;
