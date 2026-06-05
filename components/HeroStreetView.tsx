"use client";

import { useState } from "react";
import { Icon } from "./Icons";

/*
 * HERO 360° STREET VIEW
 * ----------------------------------------------------------------------------
 * Interactive, no-API-key Google Street View panorama (official "output=svembed"
 * format). Public location on a major road so it has official Google car
 * Street View coverage — the user can drag AND move through it with the
 * navigation arrows, and the overlay shows the road/place name (not an
 * individual photographer). Location: 11. novembra krastmala (Vecrīgas
 * krastmala), Rīga — scenic Old Town riverside, different from the Google
 * Maps section lower on the page (Brīvības piemineklis).
 *
 * To try another Latvian location, just swap the cbll coordinates below, e.g.:
 *   Brīvības piemineklis, Rīga:   cbll=56.951357,24.113562
 *   Latvijas Nacionālā bibliotēka: cbll=56.945800,24.097700
 *   Jomas iela, Jūrmala:          cbll=56.972500,23.776800
 *
 * The iframe loads plainly — NOT wrapped in a Promise and never throws. On a
 * load error it shows a graceful Latvian fallback so the page never crashes and
 * no "[object Event]" runtime error can occur.
 */
const HERO_EMBED_SRC =
  "https://maps.google.com/maps?q=&layer=c&cbll=56.948000,24.105200&cbp=12,265,0,0,0&output=svembed";

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
          <strong>360° Street View skats</strong>
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
              title="360° Street View demonstrācijas piemērs — 11. novembra krastmala, Rīga"
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
