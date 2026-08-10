"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Achiever = {
  name: string;
  score: number;
  image: string;
};

type ArchiveHighlight = {
  name: string;
  score?: number;
};

type SessionBase = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  topScore: number;
  source: string;
  sourceTitle: string;
  sourceCopy: string;
};

type CurrentSession = SessionBase & {
  kind: "current";
  achievers: Achiever[];
};

type ArchiveSession = SessionBase & {
  kind: "archive";
  sheet: string;
  sheetClass?: string;
  highlights: ArchiveHighlight[];
  archiveNote: string;
};

type ResultSession = CurrentSession | ArchiveSession;

const currentAchievers: Achiever[] = [
  { name: "Ravneet", score: 98, image: "/academy/results-2025/ravneet-enhanced.png" },
  { name: "Jishnu", score: 97, image: "/academy/results-2025/jishnu-enhanced.png" },
  { name: "Manroop", score: 96, image: "/academy/results-2025/manroop-enhanced.png" },
  { name: "Shubhnoor", score: 86, image: "/academy/results-2025/shubhnoor-enhanced.png" },
  { name: "Varun", score: 84, image: "/academy/results-2025/varun-enhanced.png" },
  { name: "Piyush", score: 80, image: "/academy/results-2025/piyush-enhanced.png" },
];

const resultSessions: ResultSession[] = [
  {
    id: "2025-26",
    label: "2025-26",
    eyebrow: "LATEST VERIFIED SESSION",
    title: "Class X - Mathematics - 2025-26",
    topScore: 98,
    source: "/academy/results-2025/source-board.jpg",
    sourceTitle: "Academy record - 2025-26",
    sourceCopy: "Names and marks are reproduced from the latest result sheet supplied by Brilliant Minds Academy.",
    kind: "current",
    achievers: currentAchievers,
  },
  {
    id: "2024-25",
    label: "2024-25",
    eyebrow: "ARCHIVED ACHIEVEMENT SHEET",
    title: "Outstanding achievers - 2024-25",
    topScore: 95,
    source: "/academy/results-archive/session-2024-25-original.jpeg",
    sourceTitle: "Academy record - 2024-25",
    sourceCopy: "Highlights are transcribed from the supplied sheet. Open the original for the complete record.",
    kind: "archive",
    sheet: "/academy/achievers-2024.png",
    highlights: [
      { name: "Kanav", score: 95 }, { name: "Ruchi", score: 93 }, { name: "Jasdeep", score: 84 },
      { name: "Sanvi", score: 84 }, { name: "Arshpreet", score: 80 }, { name: "Aniket", score: 80 }, { name: "Champreet", score: 79 },
    ],
    archiveNote: "The photographed achievement sheet has been gently corrected for clearer viewing while retaining the original record.",
  },
  {
    id: "2023-24",
    label: "2023-24",
    eyebrow: "ARCHIVED ACHIEVEMENT SHEET",
    title: "Outstanding achievers - 2023-24",
    topScore: 99,
    source: "/academy/results-archive/session-2023-24-original.jpeg",
    sourceTitle: "Academy record - 2023-24",
    sourceCopy: "The supplied result sheet remains the complete, original source for this session.",
    kind: "archive",
    sheet: "/academy/results-archive/session-2023-24-refined.png",
    highlights: [
      { name: "Manreet Kaur", score: 99 }, { name: "Manvir Singh", score: 98 }, { name: "Prachi Sharma", score: 95 },
      { name: "Ramneet Kaur", score: 93 }, { name: "Drishti" }, { name: "Jatin Nahar" }, { name: "Loveleen Kaur" },
    ],
    archiveNote: "Names with a legible score are listed here; the original supplied sheet is linked for the complete record.",
  },
  {
    id: "2023",
    label: "2023",
    eyebrow: "ARCHIVED ACHIEVEMENT SHEET",
    title: "CBSE Champions - Class X Mathematics - 2023",
    topScore: 97,
    source: "/academy/results-archive/cbse-champions-2023-cropped.jpeg",
    sourceTitle: "Academy record - CBSE Champions 2023",
    sourceCopy: "Highlights are transcribed from the supplied sheet. Open the original for the complete record.",
    kind: "archive",
    sheet: "/academy/results-archive/cbse-champions-2023-cropped.jpeg",
    sheetClass: "archiveSheetImage--portrait",
    highlights: [
      { name: "Yashleen", score: 97 }, { name: "Arshita Aggarwal", score: 95 }, { name: "Jai Aggarwal", score: 93 },
      { name: "Karamjit Singh", score: 90 }, { name: "Namanjot Kaur", score: 89 }, { name: "Gurleen Kaur", score: 86 }, { name: "Raghav Hans", score: 85 },
    ],
    archiveNote: "A clean archive view for the original Class X Mathematics champions sheet.",
  },
  {
    id: "2021",
    label: "2021",
    eyebrow: "ARCHIVED ACHIEVEMENT SHEET",
    title: "CBSE Class X top results - 2021",
    topScore: 96,
    source: "/academy/achievers-blue.png",
    sourceTitle: "Academy record - CBSE Class X 2021",
    sourceCopy: "Highlights are transcribed from the supplied sheet. Open the original for the complete record.",
    kind: "archive",
    sheet: "/academy/achievers-blue.png",
    highlights: [
      { name: "Pranav Bhalla", score: 96 }, { name: "Nippunjot Kaur", score: 96 }, { name: "Hirdey Sikka", score: 96 },
      { name: "Madhuram Sharma", score: 96 }, { name: "Vanshaj Hans", score: 93 }, { name: "Kiratpal Singh", score: 82 },
    ],
    archiveNote: "A clean archive view for the original CBSE Class X result sheet.",
  },
];

const studentStories = [
  {
    number: "01",
    duration: "40 sec",
    title: "A student's experience, in her own words.",
    copy: "A short, unfiltered reflection shared directly by a Brilliant Minds learner.",
    video: "/academy/results-2025/student-voice-01.mp4",
    poster: "/academy/results-2025/student-voice-01-poster.jpg",
  },
  {
    number: "02",
    duration: "26 sec",
    title: "Learning seen from the student's side.",
    copy: "A personal classroom reflection, presented simply without scripts or stock footage.",
    video: "/academy/results-2025/student-voice-02.mp4",
    poster: "/academy/results-2025/student-voice-02-poster.jpg",
  },
  {
    number: "03",
    title: "One more voice from the classroom.",
    copy: "A new student reflection shared directly from the Brilliant Minds learning experience.",
    video: "/academy/results-2025/student-voice-03.mp4",
    poster: "/academy/results-2025/student-voice-03-poster.png",
  },
  {
    number: "04",
    duration: "36 sec",
    title: "A learner's reflection, shared directly.",
    copy: "A personal video shared by a Brilliant Minds learner.",
    video: "/academy/results-2025/student-voice-04.mp4",
    poster: "/academy/results-2025/student-voice-04-poster.jpg",
  },
];

type StudentStory = (typeof studentStories)[number];

function StudentStoryCard({ story }: { story: StudentStory }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundMode, setSoundMode] = useState(false);

  const beginSilentPreview = () => {
    const video = videoRef.current;
    if (!video || soundMode) return;
    video.muted = true;
    void video.play().catch(() => undefined);
  };

  const endSilentPreview = () => {
    const video = videoRef.current;
    if (!video || soundMode) return;
    video.pause();
    video.currentTime = 0;
  };

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (soundMode && !video.paused) {
      video.pause();
      return;
    }

    video.muted = false;
    setSoundMode(true);
    void video.play().catch(() => {
      video.muted = true;
      setSoundMode(false);
    });
  };

  return (
    <article
      className={`studentStoryCard${isPlaying ? " isPlaying" : ""}`}
      onMouseEnter={beginSilentPreview}
      onMouseLeave={endSilentPreview}
    >
      <div className="studentStoryMedia">
        <video
          ref={videoRef}
          poster={story.poster}
          preload="metadata"
          playsInline
          muted={!soundMode}
          loop
          controls={soundMode}
          aria-label={`${story.title}${story.duration ? ` Student video, ${story.duration}.` : " Student video."}`}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={story.video} type="video/mp4" />
        </video>
        <span className="studentStoryNumber">{story.number}</span>
        {story.duration && <span className="studentStoryDuration">{story.duration}</span>}
      </div>
      <div className="studentStoryCopy">
        <span className="studentStoryLabel">STUDENT VOICE</span>
        <h3>{story.title}</h3>
        <p>{story.copy}</p>
        <button type="button" onClick={togglePlayback} aria-pressed={soundMode && isPlaying}>
          <span aria-hidden="true">{soundMode && isPlaying ? "||" : ">"}</span>
          {soundMode && isPlaying ? "Pause story" : isPlaying ? "Play with sound" : "Preview story"}
        </button>
        <small><span className="desktopStoryHint">Hover for a silent preview - tap for sound</span><span className="mobileStoryHint">Tap preview for sound</span></small>
      </div>
    </article>
  );
}

function SessionNavigator({ activeId, onChange }: { activeId: string; onChange: (id: string) => void }) {
  const activeIndex = resultSessions.findIndex((session) => session.id === activeId);
  const previous = resultSessions[(activeIndex - 1 + resultSessions.length) % resultSessions.length];
  const next = resultSessions[(activeIndex + 1) % resultSessions.length];

  return (
    <div className="resultsSessionToolbar" aria-label="Browse result sessions">
      <button className="sessionArrow" type="button" onClick={() => onChange(previous.id)} aria-label={`Show ${previous.label} results`}>
        <span aria-hidden="true">&larr;</span>
      </button>
      <div className="sessionPills" role="tablist" aria-label="Result sessions">
        {resultSessions.map((session) => (
          <button
            aria-controls="result-session-panel"
            aria-selected={session.id === activeId}
            className={`sessionPill${session.id === activeId ? " isActive" : ""}`}
            id={`result-session-${session.id}`}
            key={session.id}
            onClick={() => onChange(session.id)}
            role="tab"
            tabIndex={session.id === activeId ? 0 : -1}
            type="button"
          >
            {session.label}
          </button>
        ))}
      </div>
      <button className="sessionArrow" type="button" onClick={() => onChange(next.id)} aria-label={`Show ${next.label} results`}>
        <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  );
}

function AchievementCards({ achievers }: { achievers: Achiever[] }) {
  return (
    <div className="achieversGrid staggerGrid">
      {achievers.map((student, index) => (
        <article className="achieverCard" key={student.name}>
          <div className="achieverPortrait">
            <Image
              src={student.image}
              width={480}
              height={560}
              sizes="(max-width: 760px) 46vw, (max-width: 1080px) 30vw, 370px"
              quality={75}
              alt={`${student.name}, Class X Mathematics achiever with ${student.score} marks out of 100`}
            />
          </div>
          <div className="achieverMeta">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><h3>{student.name}</h3><p>Class X - Mathematics</p></div>
            <span className="achieverScore"><strong>{student.score}</strong><small>/100</small></span>
          </div>
        </article>
      ))}
    </div>
  );
}

function ArchiveResults({ session }: { session: ArchiveSession }) {
  return (
    <div className="archiveResults">
        <a className="archiveSheet" href={session.source} target="_blank" rel="noreferrer" aria-label={`Open the original ${session.label} result sheet`}>
          <div className={`archiveSheetImage${session.sheetClass ? ` ${session.sheetClass}` : ""}`}>
            <Image src={session.sheet} fill sizes="(max-width: 760px) 100vw, 56vw" quality={75} alt={`${session.title} result sheet`} />
          </div>
          <span>Open original sheet <b aria-hidden="true">&#8599;</b></span>
        </a>
        <div className="archiveDetails">
          <span className="archiveEyebrow">SHEET HIGHLIGHTS</span>
          <h3>{session.title}</h3>
          <p>{session.archiveNote}</p>
          <div className="archiveScores">
            {session.highlights.map((student, index) => (
              <div key={student.name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{student.name}</strong>
                {student.score ? <b>{student.score}<small>/100</small></b> : <em>Shown on sheet</em>}
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default function ResultsShowcase() {
  const [activeSessionId, setActiveSessionId] = useState(resultSessions[0].id);
  const activeSession = resultSessions.find((session) => session.id === activeSessionId) ?? resultSessions[0];

  return (
    <div className="resultsShowcase">
      <SessionNavigator activeId={activeSession.id} onChange={setActiveSessionId} />
      <div className="resultsArchiveFrame" data-reveal>
        <div className="achievementSummary">
          <div>
            <span>{activeSession.eyebrow}</span>
            <strong>{activeSession.title}</strong>
          </div>
          <div className="topScore">
            <span>TOP SCORE</span>
            <strong>{activeSession.topScore}<small>/100</small></strong>
          </div>
        </div>

        <div id="result-session-panel" role="tabpanel" aria-labelledby={`result-session-${activeSession.id}`}>
          {activeSession.kind === "current" ? <AchievementCards achievers={activeSession.achievers} /> : <ArchiveResults session={activeSession} />}
        </div>
      </div>

      <div className="resultSourceBar" data-reveal>
        <div><span aria-hidden="true">&#10003;</span><p><strong>{activeSession.sourceTitle}</strong> {activeSession.sourceCopy}</p></div>
        <a href={activeSession.source} target="_blank" rel="noreferrer">View original result sheet &#8599;</a>
      </div>

      <div className="studentVoicesIntro" data-reveal>
        <div><span className="sectionLabel">BEYOND THE SCORE</span><h3>Hear it from the learners.</h3></div>
        <p>Real student reflections add the context a number alone cannot - shared as received, with no staged visuals.</p>
      </div>

      <p className="mobileRailHint storiesRailHint" aria-hidden="true">Swipe to watch each story <span>&rarr;</span></p>
      <div className="studentVoicesGrid" data-reveal>
        {studentStories.map((story) => <StudentStoryCard story={story} key={story.number} />)}
      </div>
    </div>
  );
}
