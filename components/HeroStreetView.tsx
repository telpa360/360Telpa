"use client";

import { useState } from "react";
import { Icon } from "./Icons";

/*
 * HERO 360° STREET VIEW
 * ----------------------------------------------------------------------------
 * Interactive, no-API-key Google Street View panorama (official "output=svembed"
 * format) so the user can look around AND move through it with the navigation
 * arrows. Location: Ventas rumba, Kuldīga — positioned on the old brick bridge
 * (Kuldīgas vecais ķieģeļu tilts), which has official Street View coverage, with
 * the camera aimed toward the waterfall. (The exact river coordinate
 * 56.9680953,21.9769708 has no Street View pano, so it would not load.)
 *
 * To try another Latvian location, just swap the cbll coordinates below:
 *   Bastejkalna parks, Rīga:       cbll=56.950900,24.109300
 *   Vērmanes dārzs, Rīga:          cbll=56.952600,24.116500
 *   Jomas iela, Jūrmala:           cbll=56.972500,23.776800
 *   Dzintaru promenāde, Jūrmala:   cbll=56.976000,23.806000
 *
 * The iframe loads plainly — NOT wrapped in a Promise and never throws. On a
 * load error it shows a graceful Latvian fallback so the page never crashes and
 * no "[object Event]" runtime error can occur.
 */
const HERO_EMBED_SRC =
  "https://maps.google.com/maps?q=&layer=c&cbll=56.967600,21.978300&cbp=12,290,0,0,0&output=svembed";

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
