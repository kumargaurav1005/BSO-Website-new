# BSO AI Review — Next.js Website

Standalone Next.js App Router + TypeScript. No database, hosting adapter, API key or environment variables required.

## Local setup

Install Node.js 22.13 or newer. Extract the ZIP, open `bso-ai-review-local` in VS Code, and open a terminal in that folder:

```bash
npm install
npm run dev
```

Open http://localhost:3000. Stop with Ctrl+C. If the port is occupied, run `npm run dev -- --port 3001`.

## Production build

```bash
npm run typecheck
npm run build
npm start
```

Build before running `npm start`. Deploy later using a platform supporting standard Next.js.

## Folder structure

- `src/app/page.tsx`: Home
- `src/app/products/page.tsx`: Products
- `src/app/about/page.tsx`: About us
- `src/app/team/page.tsx`: Team
- `src/app/contact/page.tsx`: Contact
- `src/app/layout.tsx`: Shared layout and metadata
- `src/app/globals.css`: Responsive styles
- `src/components/Header.tsx`: Navigation and mobile menu
- `src/components/Footer.tsx`: Footer
- `src/components/HeroCarousel.tsx`: Home carousel
- `src/components/ContactForm.tsx`: Contact form
- `public/`: Logo and images
- `next.config.ts`: Next.js configuration

## Editing

Edit the corresponding page file for content changes. Put images in `public/`, referenced as `/filename.jpg`. Update `globals.css` for styling.

Contact form opens an email draft to info@bsolymps.com in the visitor's email application; it does not send or store messages through a backend. Google Fonts requires internet; system font fallbacks are included.

## Animations

Hero crossfade and staggered text, pause/play slideshow control, section reveal, image zoom/card lift, CTA arrow reveal, animated nav underline, sticky header with mobile scroll direction behavior, mobile menu entrance and smooth anchor scrolling. Reduced-motion preferences are supported. Motion code is in `src/components/MotionEffects.tsx` and the end of `src/app/globals.css`.

## Background styling
`src/app/backgrounds.css` defines white/soft surfaces, navy and burgundy feature bands, image gradients and capability hover highlighting. Original SVG patterns live in `public/patterns/`; no external pattern assets are required. Existing text and underline spacing fixes are retained.

About, Products and Team use the shared `DiagonalBanner.tsx` component with cream vertical-line backgrounds and diagonal image clipping. Home and Contact keep their existing banners.
