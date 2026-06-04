/**
 * Lightweight, dependency-free line icons (24x24, stroke = currentColor).
 * Used across the site for a clean, consistent, premium look.
 */
import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export type IconName =
  | "tour360"
  | "maps"
  | "cube"
  | "drone"
  | "fpv"
  | "video"
  | "check"
  | "home"
  | "handshake"
  | "building"
  | "restaurant"
  | "hotel"
  | "scissors"
  | "calendar"
  | "sparkle"
  | "userCheck"
  | "monitor"
  | "globe"
  | "share"
  | "shield"
  | "pin"
  | "panorama";

export function Icon({ name }: { name: IconName }) {
  switch (name) {
    case "tour360":
    case "panorama":
      return (
        <svg {...base}>
          <path d="M21 12c0 2.5-4 4.5-9 4.5S3 14.5 3 12 7 7.5 12 7.5" />
          <path d="M12 7.5c2.8 0 5.3.7 6.9 1.8" />
          <path d="m8.5 12 2.5 2.5L16 9" />
        </svg>
      );
    case "maps":
    case "pin":
      return (
        <svg {...base}>
          <path d="M20 10c0 5-8 11-8 11s-8-6-8-11a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "cube":
      return (
        <svg {...base}>
          <path d="M21 7.5 12 3 3 7.5v9L12 21l9-4.5v-9Z" />
          <path d="m3 7.5 9 4.5 9-4.5" />
          <path d="M12 12v9" />
        </svg>
      );
    case "drone":
      return (
        <svg {...base}>
          <rect x="9" y="9" width="6" height="6" rx="1.2" />
          <path d="M9 9 6 6M15 9l3-3M9 15l-3 3M15 15l3 3" />
          <circle cx="5" cy="5" r="2" />
          <circle cx="19" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
        </svg>
      );
    case "fpv":
      return (
        <svg {...base}>
          <path d="M3 8.5 8 7l4 2 4-2 5 1.5v7L16 17l-4-2-4 2-5-1.5v-7Z" />
          <path d="M8 7v10M16 7v10" />
        </svg>
      );
    case "video":
      return (
        <svg {...base}>
          <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
          <path d="m15.5 10 6-3.5v11L15.5 14" />
        </svg>
      );
    case "check":
      return (
        <svg {...base}>
          <path d="m5 12 4.5 4.5L19 7" />
        </svg>
      );
    case "home":
      return (
        <svg {...base}>
          <path d="M4 11.5 12 5l8 6.5" />
          <path d="M6 10v9h12v-9" />
          <path d="M10 19v-5h4v5" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...base}>
          <path d="m12 9 2-2a2 2 0 0 1 2.8 0l3.2 3.2" />
          <path d="m3 11 3.2-3.2a2 2 0 0 1 2.8 0L12 11l-2.2 2.2a1.5 1.5 0 0 1-2.1 0" />
          <path d="m12 11 3 3a1.5 1.5 0 0 0 2.1-2.1" />
          <path d="M14 13.5 16 15.5a1.5 1.5 0 0 1-2.1 2.1L12 15.6" />
        </svg>
      );
    case "building":
      return (
        <svg {...base}>
          <rect x="5" y="3" width="14" height="18" rx="1.6" />
          <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
          <path d="M10 21v-3h4v3" />
        </svg>
      );
    case "restaurant":
      return (
        <svg {...base}>
          <path d="M6 3v7a2 2 0 0 0 4 0V3M8 10v11" />
          <path d="M17 3c-1.5 0-2.5 1.6-2.5 4s1 4 2.5 4M17 11v10" />
        </svg>
      );
    case "hotel":
      return (
        <svg {...base}>
          <path d="M3 18V8M3 13h14a4 4 0 0 1 4 4v1M3 18h18M7 11h3a2 2 0 0 1 2 2" />
        </svg>
      );
    case "scissors":
      return (
        <svg {...base}>
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <path d="M8 8l12 8M8 16 20 8" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...base}>
          <rect x="4" y="5" width="16" height="16" rx="2.2" />
          <path d="M4 9h16M8 3v4M16 3v4" />
          <path d="M9 14h2v2H9z" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...base}>
          <path d="M12 3.5c.7 3.6 1.9 4.8 5.5 5.5-3.6.7-4.8 1.9-5.5 5.5-.7-3.6-1.9-4.8-5.5-5.5 3.6-.7 4.8-1.9 5.5-5.5Z" />
          <path d="M18.5 14.5c.4 1.6.9 2.1 2.5 2.5-1.6.4-2.1.9-2.5 2.5-.4-1.6-.9-2.1-2.5-2.5 1.6-.4 2.1-.9 2.5-2.5Z" />
        </svg>
      );
    case "userCheck":
      return (
        <svg {...base}>
          <circle cx="9" cy="8" r="3.2" />
          <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
          <path d="m15.5 13 1.8 1.8L21 11" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...base}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" />
          <path d="m9 10 2 2 4-4" />
        </svg>
      );
    case "globe":
      return (
        <svg {...base}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
        </svg>
      );
    case "share":
      return (
        <svg {...base}>
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="18" cy="18" r="2.5" />
          <path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" />
        </svg>
      );
    case "shield":
      return (
        <svg {...base}>
          <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}
