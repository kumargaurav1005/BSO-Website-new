# Logo and performance update — 17 October 2026

## Changes
- Replaced the previous circular logo with the supplied wide BSO AI Review wordmark. Removed duplicate adjacent brand text. Header and footer preserve the new logo aspect ratio.
- New cache-safe logo and favicon filenames; compact symbol favicon, full wordmark in the page.
- Converted 12 photographs from PNG/JPEG to WebP. Main photograph files: 14,857,356 bytes → 853,086 bytes (94.3% reduction). This measures source asset bytes, not page-load time.
- Added 720-pixel alternatives with responsive srcsets; larger images retained for desktops. Small variants add some total disk bytes but reduce downloads on narrower screens.
- Hero now uses a discoverable high-priority first image. Other carousel images are mounted only when their slide is first selected; revisited slides keep their image. Existing transitions and controls retained.
- Below-fold images lazy-load and decode asynchronously; image dimensions supplied to reduce layout movement.
- Fonts are served locally with font-display: swap. No Google Fonts stylesheet request is required at page load.
- Added one-day browser caching plus stale-while-revalidate for WebP/WOFF2. Compression enabled. Existing standalone Docker build and CI workflow preserved.

## Validation
Production build and TypeScript passed. Local HTTP checks returned 200 for all five pages and their image assets; caching header verified. Source image references verified. Browser visual checks and real-device live performance were not measured. The live URL could not be reliably inspected from this environment, so server/network latency remains unconfirmed.

## Local setup
```bash
cd frontend
npm ci
npm run dev
```

## Deploy your update
Use the existing main-branch workflow, or from frontend run:
```bash
docker compose up -d --build
```
The Docker image runs the production standalone server. Rebuild the image; copying source files alone will not update a running production build. If you use a reverse proxy/CDN, purge any HTML/CSS cache after deployment and verify its asset cache headers. For a non-Docker production run, build with `npm run build`, copy public and .next/static into .next/standalone, and run the generated server.js as described by Next.js standalone output.

Font source: Google Fonts (DM Sans / Manrope), downloaded as local Latin WOFF2 files. Individual photo credits remain in IMAGE-CREDITS.md. Design content and contact/social links were preserved.
