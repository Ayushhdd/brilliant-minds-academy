import type { Metadata } from "next";
import Link from "next/link";
import VedicChallenge from "./VedicChallenge";
import styles from "./vedic.module.css";

export const metadata: Metadata = {
  title: "Vedic Maths Crash Course | Brilliant Minds Academy",
  description: "A focused online and offline Vedic Mathematics crash course for faster calculation, sharper number sense and confident mental maths.",
  alternates: { canonical: "/vedic-maths" },
};

const methodSteps = [
  { number: "01", title: "See what is missing from 100", formula: "98 needs 2   ·   97 needs 3", note: "Keep these two small numbers: 2 and 3." },
  { number: "02", title: "Subtract across", formula: "98 − 3 = 95   (or 97 − 2 = 95)", note: "95 becomes the first part of the answer." },
  { number: "03", title: "Multiply 2 and 3", formula: "2 × 3 = 6   →   write it as 06", note: "Join the two parts: 95 | 06 = 9,506." },
];

export default function VedicMathsPage() {
  return (
    <main className={styles.page} id="main-content">
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Back to Brilliant Minds Academy home">
          <span className={styles.crest}>BM</span>
          <span><strong>Brilliant Minds</strong><small>VEDIC MATHEMATICS</small></span>
        </Link>
        <nav aria-label="Vedic Maths navigation"><a href="#challenge">Challenge</a><a href="#method">The method</a><a href="#batches">Batches</a></nav>
        <Link className={styles.headerCta} href="/#contact">Ask about a batch</Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>A SEPARATE CALCULATION EXPERIENCE</span>
          <h1>What if difficult sums started to feel <em>obvious?</em></h1>
          <p>Vedic Mathematics trains students to recognise number patterns, calculate mentally and reach answers with fewer, clearer steps.</p>
          <div className={styles.heroActions}><a className={styles.goldButton} href="#challenge">Take the 10-second test</a><a className={styles.textLink} href="#batches">Online + offline batches ↓</a></div>
        </div>

        <div className={styles.orbitScene} aria-hidden="true">
          <div className={`${styles.orbit} ${styles.orbitOne}`}><span>9</span><span>8</span><span>7</span><span>6</span></div>
          <div className={`${styles.orbit} ${styles.orbitTwo}`}><span>×</span><span>+</span><span>÷</span></div>
          <div className={styles.orbitCore}><small>CALCULATE</small><strong>10×</strong><span>smarter</span></div>
          <div className={`${styles.floatingEquation} ${styles.equationOne}`}>98 × 97</div>
          <div className={`${styles.floatingEquation} ${styles.equationTwo}`}>1,000 − 37</div>
          <div className={`${styles.floatingEquation} ${styles.equationThree}`}>125 × 48</div>
        </div>
      </section>

      <VedicChallenge />

      <section className={styles.methodSection} id="method">
        <div className={styles.methodHeading}>
          <span className={styles.eyebrow}>AN EASY VEDIC SHORTCUT</span>
          <h2>Try 98 × 97 using 100.</h2>
          <p>Both numbers are close to 100, so we can reach the answer in three simple steps.</p>
        </div>
        <div className={styles.methodExperience}>
          <div className={styles.methodBoard}>
            <span>WORKED EXAMPLE</span>
            <div className={styles.methodSum}>98 <i>×</i> 97</div>
            <div className={styles.methodDivider} />
            <strong>9,506</strong>
            <small>calculated around base 100</small>
          </div>
          <div className={styles.methodSteps}>
            {methodSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><strong>{step.formula}</strong><p>{step.note}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.proofBand}>
        <div><span>BEYOND QUICK TRICKS</span><h2>Speed is useful.<br />Understanding makes it last.</h2></div>
        <blockquote>“The aim is not to memorise more steps. It is to see a better route through the numbers.”</blockquote>
      </section>

      <section className={styles.batchSection} id="batches">
        <div className={styles.sectionHeading}><span className={styles.eyebrow}>CHOOSE THE LEARNING MODE</span><h2>One crash course. Two ways to join.</h2></div>
        <div className={styles.batchGrid}>
          <article><span>AT THE ACADEMY</span><h3>Offline</h3><p>Face-to-face demonstrations, timed drills and immediate correction in a focused classroom setting.</p><ul><li>Guided practice</li><li>Live doubt support</li><li>Structured pace</li></ul></article>
          <article><span>JOIN FROM ANYWHERE</span><h3>Online</h3><p>Interactive live sessions that bring the same visual methods and guided calculation practice to the student.</p><ul><li>Live instruction</li><li>Digital practice</li><li>Flexible access</li></ul></article>
        </div>
        <div className={styles.finalCta}><span>READY TO CALCULATE DIFFERENTLY?</span><h2>Ask about the next Vedic Maths batch.</h2><p>Share the student’s class and preferred mode. We’ll help you choose the right batch.</p><Link href="/#contact">Continue to WhatsApp enquiry <b>→</b></Link></div>
      </section>

      <footer className={styles.footer}><Link href="/">← Back to Brilliant Minds Academy</Link><span>Online + offline Vedic Maths crash course</span><span>25+ years of Mathematics teaching</span></footer>
    </main>
  );
}
