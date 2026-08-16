"use client";

import Image from "next/image";
import { useState } from "react";

type DifferenceType = "attention" | "reports" | "doubts" | "concepts" | "teachers" | "faculty";

const cards: Array<{ number: string; type: DifferenceType; title: string; copy: string; image: string; imageClass?: string }> = [
  { number: "01", type: "attention", title: "Small batches, personal attention", copy: "Each learner is noticed, guided and supported at the right pace.", image: "/academy/difference/small-batches-personal-attention-blurred-v2.png" },
  { number: "02", type: "reports", title: "Weekly tests & performance reports", copy: "Regular checks make progress clear for students and parents.", image: "/academy/difference/weekly-tests-performance-reports.png" },
  { number: "03", type: "doubts", title: "Dedicated doubt-clearing sessions", copy: "Questions are addressed before they become learning gaps.", image: "/academy/difference/dedicated-doubt-clearing.png", imageClass: "differenceFlipBackDoubts" },
  { number: "04", type: "concepts", title: "Concept-based learning", copy: "Students understand the method instead of only memorising answers.", image: "/academy/difference/concept-based-learning.png" },
  { number: "05", type: "teachers", title: "Experienced, dedicated teachers", copy: "Patient teaching builds clarity, discipline and confidence.", image: "/academy/difference/experienced-dedicated-teachers.png" },
  { number: "06", type: "faculty", title: "Qualified subject faculty", copy: "Reliable academic support across the subjects that matter most.", image: "/academy/difference/qualified-subject-faculty.png" },
];

function DifferenceIcon({ type }: { type: DifferenceType }) {
  const common = { fill: "none", stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 1.65 };
  if (type === "attention") return <svg className="differenceIcon" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="11" r="5" {...common} /><path d="M10 31c1.4-6 5-9 10-9s8.6 3 10 9M4 16v15h7M29 16h7v15" {...common} /></svg>;
  if (type === "reports") return <svg className="differenceIcon" viewBox="0 0 40 40" aria-hidden="true"><rect x="10" y="6" width="20" height="28" rx="2" {...common} /><path d="M16 6v-2h8v2M15 16l3 3 6-7M15 26h10" {...common} /></svg>;
  if (type === "doubts") return <svg className="differenceIcon" viewBox="0 0 40 40" aria-hidden="true"><path d="M7 8h26v18H19l-7 7v-7H7zM18 14a3 3 0 1 1 5 2.5c-2 1.3-2.5 2-2.5 4M20.5 23h.01" {...common} /></svg>;
  if (type === "concepts") return <svg className="differenceIcon" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="13" {...common} /><circle cx="20" cy="20" r="7" {...common} /><path d="m20 20 12-12M27 8h5v5" {...common} /></svg>;
  if (type === "teachers") return <svg className="differenceIcon" viewBox="0 0 40 40" aria-hidden="true"><path d="m7 17 13-7 13 7-13 7zM12 20v7c4.8 4 11.2 4 16 0v-7M33 18v8" {...common} /><circle cx="33" cy="28" r="1.6" {...common} /></svg>;
  return <svg className="differenceIcon" viewBox="0 0 40 40" aria-hidden="true"><path d="M8 7h10c3 0 5 2 5 5v21c0-3-2-5-5-5H8zM32 7H22c-3 0-5 2-5 5v21c0-3 2-5 5-5h10zM12 13h6M26 13h3M12 18h6M26 18h3" {...common} /></svg>;
}

export default function DifferenceCards() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const toggleCard = (number: string) => setFlippedCard((active) => active === number ? null : number);

  return (
    <div className="journeyDifferenceGrid">
      {cards.map((card) => {
        const isFlipped = flippedCard === card.number;
        return (
          <article
            aria-label={`${card.title}. ${isFlipped ? "Tap to show details." : "Tap to show the classroom image."}`}
            aria-pressed={isFlipped}
            className={`differenceFlipCard${isFlipped ? " isFlipped" : ""}`}
            key={card.number}
            onClick={() => toggleCard(card.number)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleCard(card.number);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div className="differenceFlipInner">
              <div aria-hidden={isFlipped} className="differenceFlipFace differenceFlipFront">
                <span>{card.number}</span><DifferenceIcon type={card.type} /><strong>{card.title}</strong><p>{card.copy}</p>
              </div>
              <div aria-hidden={!isFlipped} className={`differenceFlipFace differenceFlipBack${card.imageClass ? ` ${card.imageClass}` : ""}`}>
                <Image src={card.image} fill sizes="(max-width: 760px) 50vw, 16vw" alt="" />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
