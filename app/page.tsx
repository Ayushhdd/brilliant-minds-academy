import Image from "next/image";
import DifferenceCards from "./DifferenceCards";
import EnquiryForm from "./EnquiryForm";
import HeroExperience from "./HeroExperience";
import RevealOnScroll from "./RevealOnScroll";
import ResultsShowcase from "./ResultsShowcase";

const journey = [
  {
    step: "01–02",
    word: "Understand · Simplify",
    title: "Find the gap. Make the path clear.",
    copy: "We begin at the student’s level, then turn difficult ideas into connected, clear steps.",
    image: "/academy/journey-find-gap.png",
    imageSide: "right",
  },
  {
    step: "03–04",
    word: "Practise · Own it",
    title: "Practise until the method becomes yours.",
    copy: "Guided questions, correction and revision build independent skill and lasting confidence.",
    image: "/academy/journey-understand.png",
    imageSide: "left",
  },
  {
    step: "05",
    word: "Achieve",
    title: "Walk into every test prepared.",
    copy: "Steady discipline becomes visible progress: stronger answers, calmer exams and better results.",
    image: "/academy/journey-test-ready.png",
    imageSide: "right",
  },
];

const tuitionProgrammes = [
  {
    number: "01",
    subject: "Mathematics",
    classes: "Classes 6–10",
    note: "Personally guided by the academy’s lead Mathematics educator.",
    points: ["Concept clarity", "School & CBSE alignment", "Chapter-wise tests"],
    tone: "maths",
  },
  {
    number: "02",
    subject: "Science",
    classes: "Classes 9–10",
    note: "Focused Physics, Chemistry and Biology support from subject faculty.",
    points: ["Clear explanations", "Written-answer practice", "Exam preparation"],
    tone: "science",
  },
  {
    number: "03",
    subject: "All Subjects",
    classes: "Classes 6–8",
    note: "Complete subject support, with Mathematics personally guided by the lead educator.",
    points: ["Homework guidance", "Foundation strengthening", "Regular revision"],
    tone: "foundation",
  },
];

const faqs = [
  {
    question: "Are regular tuition classes online or offline?",
    answer: "Academic tuition is conducted offline at the academy in Jalandhar.",
  },
  {
    question: "Which students can join Mathematics tuition?",
    answer: "Mathematics for Classes 6–10 is personally taught by the academy’s lead Mathematics educator.",
  },
  {
    question: "Which students can join Science tuition?",
    answer: "Science tuition is available for Classes 9–10, with focused Physics, Chemistry and Biology support from subject faculty.",
  },
  {
    question: "What is available for Classes 6–8?",
    answer: "Students in Classes 6–8 can receive all-subject support, with Mathematics personally taught by the academy’s lead Mathematics educator.",
  },
  {
    question: "Is Vedic Maths the same as regular tuition?",
    answer: "No. It is a separate Sunday-only crash course focused on mental calculation, speed and number sense.",
  },
  {
    question: "How can we confirm fees and timings?",
    answer: "Send an enquiry on WhatsApp or book a counselling call for current batch availability, timings and fee details.",
  },
];

const academySchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Brilliant Minds Maths Academy",
  description: "Offline academic tuition and a Sunday-only Vedic Mathematics crash course in Jalandhar.",
  telephone: ["+91 79734 05625", "+91 88475 88165"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tagore Nagar, near Regent Park Hotel",
    addressLocality: "Jalandhar",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
  areaServed: "Jalandhar",
  knowsAbout: ["Mathematics", "Science", "Classes 6–8 tuition", "Vedic Mathematics"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

function BrandLockup({ footer = false }: { footer?: boolean }) {
  return (
    <span className={`brandLockup${footer ? " footerLockup" : ""}`}>
      <span className="brandCrest" aria-hidden="true"><b>BM</b></span>
      <span className="brandWords"><strong>Brilliant Minds</strong><small>Maths Academy</small></span>
    </span>
  );
}

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <RevealOnScroll />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(academySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="scrollProgress" aria-hidden="true" />

      <div className="announcementBar">
        <div className="container announcementInner">
          <p>Admissions open · Limited batch strength</p>
          <div>
            <span>Academic tuition: offline at the academy</span>
            <a href="tel:+917973405625">79734 05625</a>
            <a href="https://wa.me/918847588165" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>

      <header className="siteHeader">
        <div className="container navShell">
          <a className="brand" href="#home" aria-label="Brilliant Minds Maths Academy home"><BrandLockup /></a>
          <a className="mobileVedicLink" href="/vedic-maths">Vedic Maths</a>
          <nav className="desktopNav" aria-label="Main navigation">
            <a href="#experience">Experience</a>
            <a href="#journey">The journey</a>
            <a href="#tuition">Tuition</a>
            <a href="/vedic-maths">Vedic Maths</a>
            <a href="#results">Results</a>
          </nav>
          <a className="navCta" href="#contact">Book counselling</a>
        </div>
      </header>

      <HeroExperience />

      <section className="section experienceSection" id="experience">
        <div className="container experienceGrid">
          <div className="experienceNumber" data-reveal="left"><span>25<sup>+</sup></span><small>YEARS<br />AND COUNTING</small></div>
          <div className="experienceStory" data-reveal="right">
            <span className="sectionLabel">EXPERIENCE THAT SHOWS IN THE EXPLANATION</span>
            <h2>Some things are learned from books.<br /><em>Teaching students</em> is learned over time.</h2>
            <div className="experienceProof">
              <div><strong>Clear first</strong><span>Every method begins with understanding.</span></div>
              <div><strong>Practice next</strong><span>Questions are chosen with purpose.</span></div>
              <div><strong>Confidence follows</strong><span>Students learn to work independently.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section resultsSection" id="results">
        <div className="container">
          <div className="sectionHead resultsHead" data-reveal>
            <div><span className="sectionLabel">ACHIEVEMENT PORTRAITS AND RESULTS ARCHIVE</span><h2>Effort, made visible.</h2></div>
            <p>Individual students. Verified scores. A clearer, more personal record of the work behind the result.</p>
          </div>
          <ResultsShowcase />
        </div>
      </section>

      <section className="journeySection" id="journey">
        <div className="container journeyGrid">
          <div className="journeyIntro">
            <span className="sectionLabel lightLabel">THE BRILLIANT JOURNEY</span>
            <h2>Knowledge is not a jump.<br />It is a journey.</h2>
            <p>Scroll through the learning rhythm that moves a student from uncertainty to ownership.</p>
            <p className="mobileRailHint journeyRailHint" aria-hidden="true">Swipe through the steps <span>&rarr;</span></p>
            <div className="journeyOrb" aria-hidden="true"><span>0</span><i>→</i><b>∞</b></div>
          </div>
          <div className="journeySteps">
            {journey.map((item, index) => (
              <article className={`journeyCard${item.image ? " hasPhoto" : ""}${item.imageSide === "left" ? " photoLeft" : ""}`} data-reveal={index % 2 ? "right" : "left"} key={item.step}>
                <div className="journeyCardContent">
                  <div className="journeyStepMeta"><span>{item.step}</span><small>{item.word}</small></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                {item.image && (
                  <div className="journeyPhoto">
                    <Image src={item.image} fill sizes="(max-width: 600px) 78vw, (max-width: 1080px) 100vw, 24vw" quality={75} alt={`${item.title} — a student progressing through the learning journey`} />
                    <span aria-hidden="true">{item.step}</span>
                  </div>
                )}
              </article>
            ))}

          </div>
        </div>

        <aside className="container journeyDifference journeyDifferenceWide" data-reveal>
              <div className="journeyDifferenceIntro">
                <span className="sectionLabel lightLabel">THE BRILLIANT DIFFERENCE</span>
                <h3>More than a class. <em>A system that keeps students moving.</em></h3>
                <p>Focused batches, timely doubt support and a routine that turns effort into visible progress.</p>
                <p className="differenceInteractionHint"><span className="desktopFlipHint">Hover a card to reveal the classroom image.</span><span className="mobileFlipHint">Swipe to browse &middot; Tap a card to flip it, then tap again to return.</span></p>
              </div>
              <DifferenceCards />
        </aside>
      </section>

      <section className="section tuitionSection" id="tuition">
        <div className="container">
          <div className="sectionHead" data-reveal>
            <div><span className="sectionLabel">OFFLINE ACADEMIC TUITION</span><h2>Serious learning.<br />Inside a focused classroom.</h2></div>
            <p>Academic tuition is conducted offline at the academy, giving students direct guidance, consistent routines and timely doubt support.</p>
          </div>
          <p className="mobileRailHint tuitionRailHint" aria-hidden="true">Swipe to compare programmes <span>&rarr;</span></p>
          <div className="tuitionGrid staggerGrid" data-reveal>
            {tuitionProgrammes.map((programme) => (
              <article className={`tuitionCard ${programme.tone}`} key={programme.subject}>
                <div className="cardTop"><span>{programme.number}</span><small>OFFLINE AT ACADEMY</small></div>
                <h3>{programme.subject}</h3>
                <strong>{programme.classes}</strong>
                <p>{programme.note}</p>
                <ul>{programme.points.map((point) => <li key={point}>{point}</li>)}</ul>
                <a href="#contact">Discuss this programme →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vedicSection" id="vedic">
        <div className="vedicBackdrop" aria-hidden="true"><span>1</span><span>2</span><span>3</span><span>5</span><span>8</span></div>
        <div className="container vedicGrid">
          <div className="vedicVisual" data-reveal="left">
            <div className="vedicCore"><span>V</span><strong>Speed × Logic</strong><small>MENTAL MATHEMATICS</small></div>
            <div className="numberRing ringOne">9 · 8 · 7 · 6 · 5 · 4</div>
            <div className="numberRing ringTwo">+</div>
          </div>
          <div className="vedicCopy" data-reveal="right">
            <span className="vedicLabel">A DIFFERENT KIND OF LEARNING</span>
            <h2>Not regular tuition.<br /><em>A calculation advantage.</em></h2>
            <p>Vedic Mathematics is a focused Sunday-only crash course—designed to strengthen number sense, mental calculation and speed through practical techniques students can carry forward.</p>
            <div className="vedicModes"><span>SUNDAY ONLY</span><b>CRASH COURSE</b></div>
            <div className="vedicBenefits"><span>Faster calculations</span><span>Sharper number sense</span><span>Greater confidence</span></div>
            <a href="/vedic-maths">Explore the full Vedic Maths experience →</a>
          </div>
        </div>
      </section>

      <section className="section principleSection">
        <div className="container principleGrid">
          <span className="principleQuote" data-reveal="left">“</span>
          <div data-reveal="right"><span className="sectionLabel">OUR TEACHING PRINCIPLE</span><h2>A student should never leave with only an answer. They should leave knowing <em>why.</em></h2><p>Every lesson is designed around the student’s understanding—because real confidence begins when the method makes sense, even without help.</p></div>
        </div>
      </section>

      <section className="section faqSection" id="faq">
        <div className="container faqGrid" data-reveal>
          <div><span className="sectionLabel">BEFORE YOU JOIN</span><h2>Clear answers for parents.</h2></div>
          <div className="faqList">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="container contactGrid">
          <div className="contactCopy" data-reveal="left">
            <span className="sectionLabel lightLabel">ADMISSIONS &amp; COUNSELLING</span>
            <h2>Every strong result begins with the right conversation.</h2>
            <p>Share the student’s class, subject and current concern. The academy will guide you towards the most suitable programme and batch.</p>
            <div className="contactCards">
              <a className="contactCard--call" href="tel:+917973405625" aria-label="Call Brilliant Minds Academy">
                <svg className="contactCardIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.1 3.8 4.9 5.1c-.8.5-1.1 1.5-.8 2.4 1.8 5.3 6 9.5 11.3 11.3.9.3 1.9 0 2.4-.8l1.3-2.2c.4-.7.3-1.6-.4-2.1l-2.4-1.8c-.6-.5-1.5-.4-2.1.1l-1.2 1.2a13.7 13.7 0 0 1-2.2-1.7 13.7 13.7 0 0 1-1.7-2.2l1.2-1.2c.5-.6.6-1.5.1-2.1L9.2 4.2c-.5-.7-1.4-.8-2.1-.4Z" /></svg>
                <span>CALL THE ACADEMY</span><strong>79734 05625</strong>
              </a>
              <a className="contactCard--whatsapp" href="https://wa.me/918847588165" target="_blank" rel="noreferrer" aria-label="Message Brilliant Minds Academy on WhatsApp">
                <svg className="contactCardIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.4a8 8 0 0 1-11.8 7L4 20l1.6-4.1A8 8 0 1 1 20 11.4Z" /><path d="M9.2 7.6 8 8.3c-.4.2-.5.7-.3 1.1.8 2.2 2.5 3.9 4.7 4.7.4.2.9 0 1.1-.3l.7-1.2-1.7-1.1-.8.8a6.2 6.2 0 0 1-2-2l.8-.8-1.3-1.9Z" /></svg>
                <span>WHATSAPP</span><strong>88475 88165</strong>
              </a>
              <a className="contactCard--youtube" href="https://youtube.com/@brilliantmindsmathsacademy" target="_blank" rel="noreferrer" aria-label="Visit Brilliant Minds Academy on YouTube">
                <svg className="contactCardIcon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="3" /><path d="m10 9 5 3-5 3V9Z" /></svg>
                <span>YOUTUBE CHANNEL</span><strong>Watch free lessons ↗</strong>
              </a>
            </div>
            <address>Tagore Nagar, Jalandhar<br /><b>Near Regent Park Hotel</b></address>
          </div>
          <div data-reveal="right"><EnquiryForm /></div>
        </div>
      </section>

      <footer>
        <div className="container footerTop">
          <a href="#home" aria-label="Back to top"><BrandLockup footer /></a>
          <p>25+ years of Mathematics teaching, offline academic tuition and a Sunday-only Vedic Mathematics crash course.</p>
          <div><a href="#journey">Journey</a><a href="#tuition">Tuition</a><a href="/vedic-maths">Vedic Maths</a><a href="#results">Results</a><a href="#contact">Contact</a></div>
        </div>
        <div className="container footerBottom"><span>© {new Date().getFullYear()} Brilliant Minds Maths Academy</span><span>Tagore Nagar, Jalandhar · Near Regent Park Hotel</span></div>
      </footer>

      <nav className="mobileCta" aria-label="Quick contact"><a href="tel:+917973405625">Call academy</a><a href="https://wa.me/918847588165" target="_blank" rel="noreferrer">WhatsApp</a></nav>
    </main>
  );
}
