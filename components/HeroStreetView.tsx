"use client";

import { useState } from "react";
import { Icon } from "./Icons";

/*
 * HERO GOOGLE MAPS EMBED
 * ----------------------------------------------------------------------------
 * Official, no-API-key Google Maps embed ("output=embed") centered on Ventas
 * rumba, Kuldīga. This standard map embed ALWAYS loads, unlike the Street View
 * "output=svembed" format, which only works when a panorama happens to exist at
 * the exact snap coordinate (the river point 56.9680953,21.9769708 has none, so
 * Street View would not load there). The map stays interactive — the user can
 * pan and zoom — and Google's own labels/attribution are left untouched.
 *
 * To recenter, change the q=<lat>,<lng> coordinates below.
 *
 * The iframe loads plainly — NOT wrapped in a Promise and never throws. On a
 * load error it shows a graceful Latvian fallback so the page never crashes and
 * no "[object Event]" runtime error can occur.
 */
const HERO_EMBED_SRC =
  "https://maps.google.com/maps?q=56.9680953,21.9769708&z=16&hl=lv&output=embed";

const FALLBACK_TEXT =
  "Ja priekšskatījumā Street View neielādējas, atver lapu pārlūkā.";

export default function HeroStreetView() {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const showFallback = !HERO_EMBED_SRC || failed;

  return (
    <div className="maps-frame hero-sv">
      <div className="maps-frame-bar">
        <span className="maps-pin">
          <Icon name="pin" />
        </span>
        <span className="maps-frame-place">
          <strong>Google Maps 360° skati</strong>
          <span>Velc un pārvietojies, lai apskatītos apkārt</span>
        </span>
        <span className="maps-demo-tag">Demo piemērs</span>
      </div>

      <div className="maps-embed">
        {showFallback ? (
          <div className="maps-placeholder">
            <span className="maps-placeholder-pin" aria-hidden="true" />
            <p>{FALLBACK_TEXT}</p>
          </div>
        ) : (
          <>
            {!loaded && <span className="embed-skeleton" aria-hidden="true" />}
            <iframe
              src={HERO_EMBED_SRC}
              title="Google Maps 360° skati demonstrācijas piemērs — Ventas rumba, Kuldīga"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
            />
          </>
        )}
      </div>

      <p className="maps-note">
        Šis ir demonstrācijas piemērs. Reālais 360° skats tiek piesaistīts
        klienta Google Maps profilam.
      </p>
    </div>
  );
}
