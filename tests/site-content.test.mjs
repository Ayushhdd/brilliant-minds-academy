import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("contains the academy's core programmes and conversion paths", async () => {
  const [page, form] = await Promise.all([
    source("app/page.tsx"),
    source("app/EnquiryForm.tsx"),
  ]);

  assert.match(page, /Mathematics/);
  assert.match(page, /Science/);
  assert.match(page, /All Subjects/);
  assert.match(page, /Vedic Mathematics/);
  assert.match(page, /href="tel:\+917973405625"/);
  assert.match(page, /https:\/\/wa\.me\/918847588165/);
  assert.match(page, /youtube\.com\/@brilliantmindsmathsacademy/);
  assert.match(page, /id="main-content"/);
  assert.match(page, /"@type": "FAQPage"/);
  assert.match(form, /Send enquiry on WhatsApp/);
  assert.match(form, /window\.location\.assign/);
});

test("ships production metadata and required visual assets", async () => {
  const layout = await source("app/layout.tsx");

  assert.match(layout, /generateMetadata/);
  assert.match(layout, /x-forwarded-host/);
  assert.match(layout, /images: \["\/og\.png"\]/);
  assert.doesNotMatch(layout, /metadataBase: new URL\("http:\/\/localhost:3000"\)/);

  await Promise.all([
    access(new URL("public/og.png", root)),
    access(new URL("public/academy/student-study-premium.png", root)),
    access(new URL("public/academy/results-2025/source-board-full.webp", root)),
    access(new URL("public/academy/results-2025/ravneet.jpg", root)),
    access(new URL("public/academy/results-2025/student-voice-01.mp4", root)),
    access(new URL("public/academy/results-2025/student-voice-02.mp4", root)),
    access(new URL("public/academy/results-2025/student-voice-03.mp4", root)),
    access(new URL("public/academy/results-2025/student-voice-03-poster.png", root)),
    access(new URL("public/academy/results-2025/student-voice-04.mp4", root)),
    access(new URL("public/academy/results-2025/student-voice-04-poster.jpg", root)),
    access(new URL("public/academy/vedic/student-reflection.mp4", root)),
    access(new URL("public/academy/vedic/student-reflection-poster.jpg", root)),
    access(new URL("public/academy/vedic/student-reflection-en.vtt", root)),
    access(new URL("public/academy/results-archive/session-2023-24-full.webp", root)),
    access(new URL("public/academy/results-archive/session-2024-25-full.webp", root)),
    access(new URL("public/academy/results-archive/cbse-champions-2023-full.webp", root)),
    access(new URL("public/academy/results-archive/cbse-x-2021-full.webp", root)),
  ]);
});

test("provides a source-linked results archive and four student videos", async () => {
  const results = await source("app/ResultsShowcase.tsx");

  assert.match(results, /id: "2025-26"/);
  assert.match(results, /id: "2024-25"/);
  assert.match(results, /id: "2023-24"/);
  assert.match(results, /id: "2023"/);
  assert.match(results, /id: "2021"/);
  assert.match(results, /View original result sheet/);
  assert.match(results, /student-voice-03\.mp4/);
  assert.match(results, /student-voice-04\.mp4/);
  assert.match(results, /Drishti", score: 91/);
  assert.match(results, /Chanpreet", score: 79/);
  assert.match(results, /role="tablist"/);
});

test("provides a separate interactive Vedic Maths experience", async () => {
  const [page, challenge] = await Promise.all([
    source("app/vedic-maths/page.tsx"),
    source("app/vedic-maths/VedicChallenge.tsx"),
  ]);
  const storyVideo = await source("app/vedic-maths/VedicStoryVideo.tsx");

  assert.match(page, /canonical: "\/vedic-maths"/);
  assert.match(page, /Sunday-only Vedic Maths crash course/);
  assert.match(storyVideo, /student-reflection\.mp4/);
  assert.match(page, /IN A LEARNER&apos;S OWN WORDS/);
  assert.match(page, /id="main-content"/);
  assert.match(challenge, /THE 10-SECOND TEST/);
  assert.match(challenge, /setTimeLeft/);
  assert.match(storyVideo, /Hover to preview/);
  assert.match(storyVideo, /Tap to watch with sound/);
  assert.match(storyVideo, /kind="captions"/);
});

test("does not contain starter or broken-encoding copy", async () => {
  const files = await Promise.all([
    source("app/page.tsx"),
    source("app/layout.tsx"),
    source("app/EnquiryForm.tsx"),
    source("app/globals.css"),
    source("app/vedic-maths/page.tsx"),
    source("app/vedic-maths/VedicChallenge.tsx"),
    source("app/vedic-maths/vedic.module.css"),
  ]);
  const combined = files.join("\n");

  assert.doesNotMatch(combined, /Your site is taking shape|codex-preview|SkeletonPreview/);
  assert.doesNotMatch(combined, /â€™|â€”|â†|Â·|Ã—/);
});
