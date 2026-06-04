"use client";

import { useEffect } from "react";

/**
 * Subtle fade + slide reveal on scroll. Adds "is-visible" to elements with the
 * `reveal` / `reveal-stagger` class once they enter the viewport. CSS does the
 * motion; this only toggles classes.
 *
 * Robust by design:
 * - Adds `reveal-ready` to <html> so the hidden state ONLY applies when this
 *   script runs. Without JS, content is never hidden.
 * - Uses a lightweight rAF-throttled scroll/resize check (no IntersectionObserver
 *   dependency), so it works reliably in every environment.
 * - Respects prefers-reduced-motion.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    let pending = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger")
    );

    if (pending.length === 0) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      pending.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // Gate the hidden state on JS being active.
    root.classList.add("reveal-ready");

    const check = () => {
      const triggerY = window.innerHeight * 0.9;
      pending = pending.filter((el) => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < triggerY && rect.bottom > 0;
        if (inView) {
          el.classList.add("is-visible");
          return false; // stop tracking this element
        }
        return true;
      });
      if (pending.length === 0) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };

    // Time-based throttle (no rAF dependency) so it works in every environment.
    let lastRun = 0;
    let trailing: ReturnType<typeof setTimeout> | null = null;
    const onScroll = () => {
      const since = Date.now() - lastRun;
      if (since >= 120) {
        lastRun = Date.now();
        check();
      } else {
        if (trailing) clearTimeout(trailing);
        trailing = setTimeout(() => {
          lastRun = Date.now();
          check();
        }, 120 - since);
      }
    };

    // Reveal whatever is already in view, then watch for more.
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (trailing) clearTimeout(trailing);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
