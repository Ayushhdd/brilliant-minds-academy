# Brilliant Minds Maths Academy

Production website for Brilliant Minds Maths Academy in Jalandhar. The site presents academic tuition programmes, the academy's learning approach, Vedic Mathematics courses, student achievements, FAQs, and a WhatsApp-based enquiry flow.

## Local development

```bash
npm install
npm run dev
```

The Next.js preview is available at `http://localhost:3000` by default.

## Quality checks

```bash
npm run lint
npm test
```

`npm test` creates a production Next.js build and checks the site's core content, conversion paths, metadata, and required visual assets.

## Sites deployment build

```bash
npm run build:site
```

The Sites build uses the vinext configuration in `vite.config.ts` and writes its deployable output to `dist/`.
