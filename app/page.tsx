import Image from "next/image";
import EnquiryForm from "./EnquiryForm";
import RevealOnScroll from "./RevealOnScroll";

const journey = [
  {
    step: "01",
    word: "Understand",
    title: "Find the real learning gap.",
    copy: "We begin with the student’s current level—not assumptions—so every lesson starts from the right point.",
    image: "/academy/journey-find-gap.png",
    imageSide: "right",
  },
  {
    step: "02",
    word: "Simplify",
    title: "Turn difficult ideas into clear steps.",
    copy: "Concepts are broken down, connected and explained until the student can see the logic behind them.",
    image: null,
    imageSide: "right",
  },
  {
    step: "03",
    word: "Practise",
    title: "Build skill through the right questions.",
    copy: "Guided examples lead into independent practice, chapter tests and focused correction.",
    image: "/academy/journey-understand.png",
    imageSide: "left",
  },
  {
    step: "04",
    word: "Own it",
    title: "Move from remembering to knowing.",
    copy: "Revision and recall strengthen understanding until the student can solve with confidence.",
    image: null,
    imageSide: "right",
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
    classes: "Class 8",
    note: "Complete subject support, with Mathematics personally guided by the lead educator.",
    points: ["Homework guidance", "Foundation strengthening", "Regular revision"],
    tone: "foundation",
  },
];

const results = [
  { score: "99/100", name: "Manreet Kaur" },
  { score: "98/100", name: "Manvir Singh" },
  { score: "95/100", name: "Prachi Sharma" },
  { score: "93/100", name: "Ramneek Kaur" },
];

const faqs = [
  {
    question: "Are regular tuition classes online or offline?",
    answer: "Academic tuition is conducted offline at the academy in Jalandhar.",
  },
  {
    question: "Which students can join Mathematics tuition?",
    answer: "Focused Mathematics tuition is available for Classes 6–10.",
  },
  {
    question: "What is available for Class 8?",
    answer: "Class 8 students can receive all-subject support, with Mathematics personally guided by the academy’s lead Mathematics educator.",
  },
  {
    question: "Is Vedic Maths the same as regular tuition?",
    answer: "No. It is a separate crash-course experience focused on mental calculation, speed and number sense. Online and offline batches are available.",
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
  description: "Offline academic tuition and online or offline Vedic Mathematics crash courses in Jalandhar.",
  telephone: ["+91 79734 05625", "+91 88475 88165"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tagore Nagar, near Regent Park Hotel",
    addressLocality: "Jalandhar",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
  areaServed: "Jalandhar",
  knowsAbout: ["Mathematics", "Science", "Class 8 tuition", "Vedic Mathematics"],
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
          <nav className="desktopNav" aria-label="Main navigation">
            <a href="#experience">Experience</a>
            <a href="#journey">The journey</a>
            <a href="#tuition">Tuition</a>
            <a href="#vedic">Vedic Maths</a>
            <a href="#results">Results</a>
          </nav>
          <a className="navCta" href="#contact">Book counselling</a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="heroTexture" aria-hidden="true" />
        <div className="heroGlow" aria-hidden="true" />
        <div className="container heroGrid">
          <div className="heroCopy heroEntrance">
            <div className="heroEyebrow"><span>25+</span><p>Years of Mathematics teaching</p></div>
            <h1>From first doubt<br />to <em>full confidence.</em></h1>
            <p className="heroLead">Premium academic guidance in Jalandhar, built on patient explanation, disciplined practice and an experience students can trust.</p>
            <div className="heroPills">
              <span>Maths · Classes 6–10</span>
              <span>Science · Classes 9–10</span>
              <span>All Subjects · Class 8</span>
            </div>
            <div className="heroActions">
              <a className="button buttonGold" href="#contact">Find the right programme</a>
              <a className="button buttonQuiet" href="#journey">Explore the learning journey ↓</a>
            </div>
          </div>

          <div className="heroVisual mediaEntrance">
            <div className="heroImageFrame">
              <Image src="/academy/student-study-premium.png" fill sizes="(max-width: 980px) 92vw, 48vw" alt="A focused student studying Mathematics independently" priority />
              <div className="imageShade" />
              <div className="imageCaption"><small>THE BRILLIANT MINDSET</small><strong>Understand. Practise. Achieve.</strong></div>
            </div>
            <div className="heroResultCard"><span>FEATURED RESULT</span><strong>99/100</strong><p>Mathematics achievement</p></div>
          </div>
        </div>
        <div className="container heroFoot">
          <span>25+ years of experience</span><span>Offline academic tuition</span><span>Personal Maths guidance</span><span>Focused batch learning</span>
        </div>
      </section>

      <section className="section experienceSection" id="experience">
        <div className="container experienceGrid">
          <div className="experienceNumber" data-reveal="left"><span>25</span><small>YEARS<br />AND COUNTING</small></div>
          <div className="experienceStory" data-reveal="right">
            <span className="sectionLabel">EXPERIENCE THAT SHOWS IN THE EXPLANATION</span>
            <h2>Some things are learned from books.<br /><em>Teaching students</em> is learned over time.</h2>
            <p>For more than 25 years, Brilliant Minds has helped school students understand Mathematics with greater clarity and less fear. That experience shapes how doubts are noticed, concepts are explained and progress is built.</p>
            <div className="experienceProof">
              <div><strong>Clear first</strong><span>Every method begins with understanding.</span></div>
              <div><strong>Practice next</strong><span>Questions are chosen with purpose.</span></div>
              <div><strong>Confidence follows</strong><span>Students learn to work independently.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="journeySection" id="journey">
        <div className="container journeyGrid">
          <div className="journeyIntro">
            <span className="sectionLabel lightLabel">THE BRILLIANT JOURNEY</span>
            <h2>Knowledge is not a jump.<br />It is a journey.</h2>
            <p>Scroll through the learning rhythm that moves a student from uncertainty to ownership.</p>
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
                    <Image src={item.image} fill sizes="(max-width: 760px) 100vw, 24vw" alt={`${item.title} — a student progressing through the learning journey`} />
                    <span aria-hidden="true">{item.step}</span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tuitionSection" id="tuition">
        <div className="container">
          <div className="sectionHead" data-reveal>
            <div><span className="sectionLabel">OFFLINE ACADEMIC TUITION</span><h2>Serious learning.<br />Inside a focused classroom.</h2></div>
            <p>Academic tuition is conducted offline at the academy, giving students direct guidance, consistent routines and timely doubt support.</p>
          </div>
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
            <p>Vedic Mathematics is presented as a focused crash course—designed to strengthen number sense, mental calculation and speed through practical techniques students can carry forward.</p>
            <div className="vedicModes"><span>ONLINE</span><i>+</i><span>OFFLINE</span><b>CRASH COURSE</b></div>
            <div className="vedicBenefits"><span>Faster calculations</span><span>Sharper number sense</span><span>Greater confidence</span></div>
            <a href="#contact">Ask about the next Vedic Maths batch →</a>
          </div>
        </div>
      </section>

      <section className="section resultsSection" id="results">
        <div className="container">
          <div className="sectionHead resultsHead" data-reveal>
            <div><span className="sectionLabel">ACHIEVEMENT WALL · SESSION 2024–25</span><h2>Effort, made visible.</h2></div>
            <p>Real students and real scores—shared by the academy as a record of consistent work, guidance and preparation.</p>
          </div>
          <div className="resultStage" data-reveal>
            <a className="latestBoard" href="/academy/achievers-2024.png" target="_blank" rel="noreferrer" aria-label="Open the 2024–25 achievement wall image full size"><Image src="/academy/achievers-2024.png" fill sizes="(max-width: 900px) 100vw, 67vw" alt="Brilliant Minds Academy achievement wall for the 2024–25 session" /></a>
            <div className="resultList">
              <span className="resultListLabel">FEATURED MATHEMATICS SCORES</span>
              {results.map((result, index) => <article key={result.name}><small>0{index + 1}</small><strong>{result.score}</strong><p>{result.name}</p></article>)}
              <div className="resultPromise"><span>THE REAL WIN</span><p>Clearer thinking, stronger habits and the confidence to solve independently.</p></div>
            </div>
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
              <a href="tel:+917973405625"><span>CALL</span><strong>79734 05625</strong></a>
              <a href="https://wa.me/918847588165" target="_blank" rel="noreferrer"><span>WHATSAPP</span><strong>88475 88165</strong></a>
              <a href="https://www.google.com/maps/search/?api=1&query=Tagore+Nagar+near+Regent+Park+Hotel+Jalandhar" target="_blank" rel="noreferrer"><span>NEARBY LOCATION</span><strong>Open in Maps ↗</strong></a>
            </div>
            <address>Tagore Nagar, Jalandhar<br /><b>Near Regent Park Hotel</b></address>
          </div>
          <div data-reveal="right"><EnquiryForm /></div>
        </div>
      </section>

      <footer>
        <div className="container footerTop">
          <a href="#home" aria-label="Back to top"><BrandLockup footer /></a>
          <p>25+ years of Mathematics teaching, offline academic tuition and a separate Vedic Mathematics crash-course experience.</p>
          <div><a href="#journey">Journey</a><a href="#tuition">Tuition</a><a href="#vedic">Vedic Maths</a><a href="#results">Results</a><a href="#contact">Contact</a></div>
        </div>
        <div className="container footerBottom"><span>© {new Date().getFullYear()} Brilliant Minds Maths Academy</span><span>Tagore Nagar, Jalandhar · Near Regent Park Hotel</span></div>
      </footer>

      <nav className="mobileCta" aria-label="Quick contact"><a href="tel:+917973405625">Call academy</a><a href="https://wa.me/918847588165" target="_blank" rel="noreferrer">WhatsApp</a></nav>
    </main>
  );
}
