"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

function shouldUseLightweightExperience() {
  // iOS can expose a low core count even on fast phones.  The operating
  // system's Reduce Motion choice is the reliable accessibility signal.
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const heroAchievers = [
  { name: "Ravneet", score: 98, image: "/academy/results-2025/ravneet-enhanced.png" },
  { name: "Jishnu", score: 97, image: "/academy/results-2025/jishnu-enhanced.png" },
  { name: "Manroop", score: 96, image: "/academy/results-2025/manroop-enhanced.png" },
];

export default function HeroExperience() {
  const heroRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const stageRef = useRef(0);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (shouldUseLightweightExperience()) {
      stageRef.current = 0;
      return;
    }

    const desktopQuery = window.matchMedia("(min-width: 761px)");
    const setHeroStage = (nextStage: number) => {
      if (nextStage === stageRef.current) return;
      stageRef.current = nextStage;
      setStage(nextStage);
    };
    const updateHero = () => {
      frameRef.current = null;
      if (!desktopQuery.matches) {
        setHeroStage(0);
        return;
      }

      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const travel = Math.max(hero.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      setHeroStage(progress < 1 / 3 ? 0 : progress < 2 / 3 ? 1 : 2);
    };
    const requestUpdate = () => {
      if (frameRef.current === null) frameRef.current = window.requestAnimationFrame(updateHero);
    };
    const resetForBreakpoint = () => {
      stageRef.current = 0;
      setStage(0);
      requestUpdate();
    };

    updateHero();
    desktopQuery.addEventListener("change", resetForBreakpoint);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      desktopQuery.removeEventListener("change", resetForBreakpoint);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <section ref={heroRef} className="dynamicHero" id="home" data-stage={stage}>
      <div className="heroTexture" aria-hidden="true" />
      <div className="heroGlow" aria-hidden="true" />

      <div className="dynamicHeroSticky">
        <div className="container dynamicHeroShell">
          <div className="dynamicNarrative">
            <div className="dynamicStage dynamicStageOne">
              <span className="dynamicKicker">BRILLIANT MINDS · JALANDHAR</span>
              <h1>Looking for trusted coaching in <em>Jalandhar?</em></h1>
              <p>Begin with clear explanations, disciplined practice and guidance built around the student.</p>
            </div>

            <div className="dynamicStage dynamicStageTwo">
              <span className="dynamicKicker">A STRONGER WAY TO PREPARE</span>
              <h2>Aiming for <em>95+?</em><br />Build the method behind the marks.</h2>
              <p>Better scores follow when concepts become clear, practice becomes purposeful and doubts are solved early.</p>
            </div>

            <div className="dynamicStage dynamicStageThree">
              <span className="dynamicKicker">EFFORT, MADE VISIBLE</span>
              <h2>Meet the students behind our <em>latest results.</em></h2>
              <p>Real Class X Mathematics achievers from the 2025–26 session.</p>
            </div>

            <div className="dynamicHeroActions">
              <a className="button buttonGold" href="#contact">Find the right programme</a>
              <a className="button buttonQuiet" href="#results">View all results ↓</a>
            </div>
          </div>

          <div className="dynamicHeroVisual" aria-live="polite">
            <div className="dynamicStudyFrame">
              <Image
                src="/academy/classroom-mathematics.png"
                fill
                sizes="(max-width: 980px) 92vw, 48vw"
                alt="A Mathematics teacher guiding students in a focused classroom"
                priority
              />
              <div className="dynamicImageShade" />
              <div className="dynamicImageCaption"><small>THE BRILLIANT MINDSET</small><strong>Understand. Practise. Achieve.</strong></div>
            </div>

            <div className="dynamicScoreCard">
              <span>LATEST RESULT</span><strong>98<small>/100</small></strong><p>Class X Mathematics · 2025–26</p>
            </div>

            <div className="dynamicExperienceSeal">
              <strong>25<sup>+</sup></strong><span>Years of Mathematics teaching</span>
            </div>

            <div className="dynamicAchievers" aria-label="Top Class X Mathematics achievers">
              {heroAchievers.map((student, index) => (
                <article key={student.name} style={{ "--student-index": index } as CSSProperties}>
                  <div><Image src={student.image} fill sizes="150px" alt={`${student.name}, ${student.score} marks out of 100`} /></div>
                  <span>{student.name}</span><strong>{student.score}<small>/100</small></strong>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="dynamicScrollCue" aria-hidden="true"><span>SCROLL TO DISCOVER</span><i /></div>
      </div>
    </section>
  );
}
