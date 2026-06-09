"use client";

import { useState } from "react";
import { Icon } from "./Icons";

/*
 * HERO 360° STREET VIEW
 * ----------------------------------------------------------------------------
 * Interactive, no-API-key Google Street View embed ("output=svembed") — the
 * same format the lower Google Maps section uses and which works. Positioned at
 * the old brick bridge / east approach in Kuldīga old town (regular street with
 * official Street View car coverage), aimed toward Ventas rumba so the waterfall
 * and surroundings are visible. The user can drag to look around and move with
 * the Street View arrows; Google's own labels/attribution are left untouched.
 *
 * Target: Ventas rumba, Kuldīga (56.9680953,21.9769708). That exact point is in
 * the river with no panorama, so we snap to the nearest covered street.
 *
 * If this ever shows Google's "no imagery" screen, paste an official Street View
 * embed here instead: open Google Maps Street View at the spot → Share or embed
 * → "Embed a map" → copy the src. Alternatives to try (cbll):
 *   Kuldīgas vecais tilts:   cbll=56.967550,21.978250&cbp=12,308,0,0,0
 *   Kuldīgas centrs (Liepājas iela): cbll=56.969200,21.973400&cbp=12,200,0,0,0
 *
 * The iframe loads plainly — NOT wrapped in a Promise and never throws. On a
 * load error it shows a graceful Latvian fallback so the page never crashes and
 * no "[object Event]" runtime error can occur.
 */
const HERO_EMBED_SRC =
  "https://maps.google.com/maps?q=&layer=c&cbll=56.967700,21.979000&cbp=12,290,0,0,0&output=svembed";

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
