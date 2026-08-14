"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import styles from "./vedic.module.css";

const questions = [
  { prompt: "87 × 96", answer: "8352", note: "Near-base multiplication turns this into a short mental pattern." },
  { prompt: "125 × 48", answer: "6000", note: "Recognising friendly factors removes most of the written work." },
  { prompt: "999 × 37", answer: "36963", note: "A complement-based method makes the calculation direct." },
];

export default function VedicChallenge() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(10);
  const [state, setState] = useState<"idle" | "active" | "correct" | "incorrect" | "expired">("idle");
  const inputRef = useRef<HTMLInputElement>(null);
  const question = questions[questionIndex];

  useEffect(() => {
    if (state !== "active") return;
    if (timeLeft <= 0) {
      setState("expired");
      return;
    }

    const timer = window.setTimeout(() => setTimeLeft((current) => current - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [state, timeLeft]);

  const begin = () => {
    setAnswer("");
    setTimeLeft(10);
    setState("active");
    window.setTimeout(() => inputRef.current?.focus(), 60);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state !== "active") return;
    setState(answer.trim() === question.answer ? "correct" : "incorrect");
  };

  const next = () => {
    setQuestionIndex((current) => (current + 1) % questions.length);
    setAnswer("");
    setTimeLeft(10);
    setState("active");
    window.setTimeout(() => inputRef.current?.focus(), 60);
  };

  return (
    <section className={styles.challengeSection} id="challenge">
      <div className={styles.challengeIntro}>
        <span className={styles.eyebrow}>THE 10-SECOND TEST</span>
        <h2>Can your mind see the shortcut?</h2>
        <p>Try one without a calculator. The goal is not pressure—it is to notice how much faster calculation becomes when the right pattern is visible.</p>
        <div className={styles.challengeFacts}>
          <span><strong>10</strong> seconds</span>
          <span><strong>0</strong> calculators</span>
          <span><strong>1</strong> smarter method</span>
        </div>
      </div>

      <div className={styles.challengeCard} data-state={state}>
        <div className={styles.challengeTopline}>
          <span>MENTAL MULTIPLICATION</span>
          <strong>{state === "active" ? `${timeLeft}s` : "READY"}</strong>
        </div>
        <div className={styles.timerTrack} aria-hidden="true"><i style={{ width: `${state === "active" ? timeLeft * 10 : 100}%` }} /></div>

        <div className={styles.questionStage} key={`${questionIndex}-${state}`}>
          <small>QUESTION {String(questionIndex + 1).padStart(2, "0")}</small>
          <div className={styles.equation}>{question.prompt}<b>=</b><em>?</em></div>
        </div>

        {state === "idle" ? (
          <button className={styles.primaryAction} type="button" onClick={begin}>Start the challenge <span>→</span></button>
        ) : state === "active" ? (
          <form className={styles.answerForm} onSubmit={submit}>
            <label htmlFor="vedic-answer">Your answer</label>
            <div><input ref={inputRef} id="vedic-answer" inputMode="numeric" pattern="[0-9]*" value={answer} onChange={(event) => setAnswer(event.target.value)} placeholder="Type the answer" autoComplete="off" /><button type="submit">Check</button></div>
          </form>
        ) : (
          <div className={styles.feedback}>
            <span>{state === "correct" ? "CORRECT — WELL SPOTTED" : state === "expired" ? "TIME — HERE IS THE SHORTCUT" : "GOOD TRY — HERE IS THE SHORTCUT"}</span>
            <strong>{question.answer}</strong>
            <p>{question.note}</p>
            <button type="button" onClick={next}>Try the next one <span>→</span></button>
          </div>
        )}
      </div>
    </section>
  );
}
