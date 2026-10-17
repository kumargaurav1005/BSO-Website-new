"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Progressive enhancement: content stays visible without JavaScript. */
export default function MotionEffects() {
  const pathname = usePathname();
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const elements = document.querySelectorAll<HTMLElement>(
      "main section:not(.hero-carousel), .product, .person, .home-grid > *, .value-grid > *",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.add("is-visible");
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.08 },
    );
    elements.forEach((element, index) => {
      // Never hide content already in the viewport or a directly linked section.
      if (
        element.getBoundingClientRect().top < window.innerHeight ||
        (element.id && window.location.hash === `#${element.id}`)
      )
        return;
      element.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
      element.classList.add("motion-reveal");
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      elements.forEach((element) =>
        element.classList.remove("motion-reveal", "is-visible"),
      );
    };
  }, [pathname]);
  return null;
}
