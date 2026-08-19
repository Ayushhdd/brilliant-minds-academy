"use client";

import { useRef, useState } from "react";
import styles from "./vedic.module.css";

export default function VedicStoryVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const supportsHover = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const startPreview = async () => {
    const video = videoRef.current;
    if (!video || isActive || !supportsHover()) return;

    video.muted = true;
    video.currentTime = 13;
    try {
      await video.play();
      setIsPreviewing(true);
    } catch {
      setIsPreviewing(false);
    }
  };

  const stopPreview = () => {
    const video = videoRef.current;
    if (!video || isActive) return;

    video.pause();
    video.load();
    setIsPreviewing(false);
  };

  const playWithSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    setIsActive(true);
    setIsPreviewing(false);
    video.currentTime = 0;
    video.muted = false;
    try {
      await video.play();
    } catch {
      video.muted = true;
      await video.play().catch(() => undefined);
    }
  };

  const resetVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    setIsActive(false);
    setIsPreviewing(false);
  };

  return (
    <div
      className={`${styles.videoMedia} ${isPreviewing ? styles.videoMediaPreviewing : ""} ${isActive ? styles.videoMediaActive : ""}`}
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
    >
      <video
        ref={videoRef}
        controls={isActive}
        playsInline
        preload="none"
        poster="/academy/vedic/student-reflection-poster.jpg"
        aria-label="A Brilliant Minds learner sharing her experience"
        onEnded={resetVideo}
        onTimeUpdate={(event) => {
          if (isPreviewing && !isActive && event.currentTarget.currentTime >= 19) {
            event.currentTarget.currentTime = 13;
          }
        }}
      >
        <source src="/academy/vedic/student-reflection.mp4" type="video/mp4" />
        <track
          default
          kind="captions"
          src="/academy/vedic/student-reflection-en.vtt"
          srcLang="en"
          label="English"
        />
        Your browser does not support embedded video.
      </video>

      <button className={styles.videoPlayOverlay} type="button" onClick={playWithSound} aria-label="Play the student reflection with sound">
        <span className={styles.videoPlayDisc} aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M9 6.7 17 12l-8 5.3V6.7Z" /></svg>
        </span>
        <span className={styles.videoPlayCaption}>
          <strong>{isPreviewing ? "Previewing silently" : "Student reflection"}</strong>
          <small className={styles.desktopVideoCue}>{isPreviewing ? "Click to watch with sound" : "Hover to preview · click for sound"}</small>
          <small className={styles.touchVideoCue}>Tap to watch with sound</small>
          <b>33 SEC</b>
        </span>
      </button>
    </div>
  );
}
