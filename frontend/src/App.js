import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { content as mockContent } from "./mock";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
import Header from "./components/Header";
import Hero from "./components/Hero";
import DirectorsVision from "./components/DirectorsVision";
import Premise from "./components/Premise";
import StoryRules from "./components/StoryRules";
import MMIW from "./components/MMIW";
import GoldenRule from "./components/GoldenRule";
import Cast from "./components/Cast";
import Filmmakers from "./components/Filmmakers";
import PressKit from "./components/PressKit";
import Philosophy from "./components/Philosophy";
import Trailer from "./components/Trailer";
import FundFilm from "./components/FundFilm";
import Footer from "./components/Footer";

function App() {
  const [rulesBroken, setRulesBroken] = useState(0);
  const [content, setContent] = useState(mockContent);

  useEffect(() => {
    let active = true;
    axios
      .get(`${BACKEND_URL}/api/content`)
      .then((res) => {
        if (active && res.data && res.data.hero) setContent(res.data);
      })
      .catch(() => {
        /* fall back to bundled mock content */
      });
    return () => {
      active = false;
    };
  }, []);

  const markRule = useCallback((n) => {
    setRulesBroken((prev) => Math.max(prev, n));
  }, []);

  const heroData = { ...content.hero, logo: content.logo };

  const pressSynopsis = [
    "FREE THE WHALES — Too Young to Die",
    "Beach Avenue Media presents • FTW Productions Inc.",
    "",
    "LOGLINE",
    content.premise?.quote || "",
    "",
    "SYNOPSIS",
    content.synopsis || "",
    "",
    content.premise?.credit || "",
    content.cast?.credit || "",
    "",
    "SUPPORT: " + (content.kickstarterUrl || ""),
    "EVERY DOLLAR COUNTS. EVERY BACKER MATTERS.",
  ].join("\n");

  return (
    <div className="App">
      <div className="grain" />
      <Header rulesBroken={rulesBroken} kickstarter={content.kickstarterUrl} logo={content.logo} />
      <Hero data={heroData} />
      <DirectorsVision data={content.directorsVision} />
      <Premise data={content.premise} />
      <StoryRules data={content.story} onRule={markRule} />
      <MMIW data={content.mmiw} />
      <GoldenRule data={content.goldenRule} />
      <Cast data={content.cast} />
      <Filmmakers data={content.filmmakers} />
      {content.pressKit && (
        <PressKit data={content.pressKit} synopsis={pressSynopsis} />
      )}
      <Philosophy data={content.philosophy} />
      <Trailer data={content.trailer} />
      <FundFilm data={content.fund} kickstarter={content.kickstarterUrl} />
      <Footer logo={content.logo} />
    </div>
  );
}

export default App;
