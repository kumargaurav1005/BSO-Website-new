"use client";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
const slides = [
  {
    eyebrow: "Bharat Sports Olymps",
    title: "Make every",
    accent: "performance count.",
    copy: "A grassroots sports ecosystem designed to give athletes a credible record of competition and a clearer path to recognition.",
    href: "/about/",
    cta: "Discover our story",
    image: "/stadium.png",
  },
  {
    eyebrow: "ThirdEye AI · In development",
    title: "A closer look",
    accent: "at every call.",
    copy: "Exploring smartphone-based cricket review with on-device video and audio analysis.",
    href: "/products/#thirdeye",
    cta: "Explore ThirdEye AI",
    image: "/thirdeye-scene.png",
  },
  {
    eyebrow: "BirdEye AI · In development",
    title: "See the line.",
    accent: "Understand the moment.",
    copy: "Top-down camera review being developed to support line decisions in badminton and court sports.",
    href: "/products/#birdeye",
    cta: "Explore BirdEye AI",
    image: "/birdeye-scene.png",
  },
];
export default function HeroCarousel() {
  const [current, setCurrent] = useState(0),
    [paused, setPaused] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  useEffect(() => {
    if (
      paused ||
      manualPause ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const timer = window.setInterval(
      () => setCurrent((i) => (i + 1) % slides.length),
      8000,
    );
    return () => window.clearInterval(timer);
  }, [paused, manualPause]);
  return (
    <section
      className="hero hero-carousel"
      aria-label="Featured stories"
      onMouseEnter={() => setPaused(true)}
      aria-roledescription="carousel"
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.eyebrow}
          className={`hero-slide${index === current ? " active" : ""}`}
          style={{ "--hero-image": `url('${slide.image}')` } as CSSProperties}
          aria-hidden={index !== current}
          inert={index !== current}
        >
          <div className="hero-content">
            <div className="overline">{slide.eyebrow}</div>
            <h1>
              {slide.title}
              <br />
              <span>{slide.accent}</span>
            </h1>
            <p>{slide.copy}</p>
            <a
              className="outline-btn"
              href={slide.href}
              tabIndex={index === current ? 0 : -1}
            >
              {slide.cta}
            </a>
          </div>
        </div>
      ))}
      <div className="hero-controls">
        <div className="slide-count">
          <span id="slide-current">{String(current + 1).padStart(2, "0")}</span>
          <span className="slide-rule" />
          {String(slides.length).padStart(2, "0")}
        </div>
        <div className="slide-actions">
          <button
            type="button"
            aria-label={manualPause ? "Play slideshow" : "Pause slideshow"}
            aria-pressed={manualPause}
            onClick={() => setManualPause((value) => !value)}
          >
            {manualPause ? "▶" : "Ⅱ"}
          </button>
          <button
            type="button"
            aria-label="Previous story"
            onClick={() =>
              setCurrent((i) => (i - 1 + slides.length) % slides.length)
            }
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next story"
            onClick={() => setCurrent((i) => (i + 1) % slides.length)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
