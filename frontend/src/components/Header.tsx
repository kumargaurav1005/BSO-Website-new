"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const items = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products/" },
  { label: "About us", href: "/about/" },
  { label: "Team", href: "/team/" },
  { label: "Contact", href: "/contact/" },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let previous = window.scrollY;
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (Math.abs(y - previous) > 8) {
        setHidden(y > previous && y > 160);
        previous = y;
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header
      className={`header${scrolled ? " is-scrolled" : ""}${hidden && !open ? " is-hidden" : ""}`}
    >
      <Link className="brand" href="/" aria-label="BSO AI Review home">
        <img
          src="/bso-logo.webp"
          alt="BSO AI Review"
          width={256}
          height={256}
        />
        <span className="brand-name">
          BSO AI REVIEW<small>PRIVATE LIMITED</small>
        </span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen(!open)}
      >
        Menu
      </button>
      <nav
        className={`nav${open ? " open" : ""}`}
        id="main-nav"
        aria-label="Main navigation"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={
              path === item.href || path === item.href.slice(0, -1)
                ? "page"
                : undefined
            }
            onClick={() => setOpen(false)}
          >
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
