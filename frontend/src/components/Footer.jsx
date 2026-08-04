import React from "react";

const Footer = ({ logo }) => {
  return (
    <footer className="relative border-t border-white/10 py-14 px-5">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-6 text-center">
        <img src={logo} alt="FTW" className="h-12 w-auto" />
        <p className="font-display uppercase text-2xl tracking-wider">Free The Whales</p>
        <p className="font-mono-l text-[0.65rem] tracking-[0.3em] uppercase text-white/40">
          Beach Avenue Media • FTW Productions Inc.
        </p>
        <p className="font-body text-sm text-white/30 mt-2">
          © {new Date().getFullYear()} FTW Productions Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
