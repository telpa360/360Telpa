"use client";

import { useState } from "react";
import { Icon } from "./Icons";

/*
 * HERO 360° STREET VIEW
 * ----------------------------------------------------------------------------
 * Interactive, no-API-key Google Street View panorama (official "output=svembed"
 * format). Public location: Rātslaukums / Melngalvju nams, Rīga — intentionally
 * different from the Google Maps section lower on the page (Brīvības piemineklis).
 *
 * The iframe loads plainly — NOT wrapped in a Promise and never throws. On a load
 * error it shows a graceful Latvian fallback so the page never crashes and no
 * "[object Event]" runtime error can occur.
 */
const HERO_EMBED_SRC =
  "https://maps.google.com/maps?q=&layer=c&cbll=56.947214,24.106392&cbp=12,25,0,0,0&output=svembed";

const FALLBACK_TEXT =
  "Ja priekšskatījumā 360° skats neielādējas, atver lapu pārlūkā.";

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
          <strong>360° Street View skats</strong>
          <span>Velc, lai apskatītos visapkārt</span>
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
              title="360° Street View demonstrācijas piemērs — Rātslaukums, Rīga"
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
