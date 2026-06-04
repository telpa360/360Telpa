"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#pakalpojumi", label: "Pakalpojumi" },
  { href: "#kam-piemerots", label: "Kam piemērots" },
  { href: "#process", label: "Process" },
  { href: "#ieguvumi", label: "Ieguvumi" },
  { href: "#kontakti", label: "Kontakti" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#hero" className="logo" aria-label="Telpa360 sākums">
          <span className="logo-mark" aria-hidden="true">
            <span className="logo-ring" />
            <span className="logo-dot" />
          </span>
          <span className="logo-text">
            Telpa<span className="logo-accent">360</span>
          </span>
        </a>

        <nav className="nav-desktop" aria-label="Galvenā navigācija">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#kontakti" className="btn btn-primary header-cta">
          Pieteikt filmēšanu
        </a>

        <button
          type="button"
          className={`burger ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Aizvērt izvēlni" : "Atvērt izvēlni"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobilā navigācija">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakti"
          className="btn btn-primary mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          Pieteikt filmēšanu
        </a>
      </div>
    </header>
  );
}
