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
    access(new URL("public/academy/achievers-2024.png", root)),
  ]);
});

test("does not contain starter or broken-encoding copy", async () => {
  const files = await Promise.all([
    source("app/page.tsx"),
    source("app/layout.tsx"),
    source("app/EnquiryForm.tsx"),
    source("app/globals.css"),
  ]);
  const combined = files.join("\n");

  assert.doesNotMatch(combined, /Your site is taking shape|codex-preview|SkeletonPreview/);
  assert.doesNotMatch(combined, /â€™|â€”|â†|Â·|Ã—/);
});
