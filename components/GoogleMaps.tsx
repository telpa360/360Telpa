"use client";

import { useState } from "react";
import { Icon } from "./Icons";

const benefits = [
  "Redzamība Google Maps",
  "Uzticība pirms apmeklējuma",
  "Profesionālāks uzņēmuma profils",
];

/*
 * GOOGLE MAPS 360° / STREET VIEW DEMO
 * ----------------------------------------------------------------------------
 * Interactive, no-API-key Google Street View panorama (official "output=svembed"
 * format). The visitor can drag to look around 360°, just like a real Google
 * Maps Street View. Public location only (Brīvības piemineklis, Rīga). It is a
 * demonstration — NOT Telpa360 work.
 *
 * The iframe loads plainly — it is NOT wrapped in a Promise and never throws.
 * If it fails to load (e.g. sandboxed preview), a graceful Latvian fallback is
 * shown and the page keeps working.
 *
 * TODO (reālam klientam): nomaini DEMO_EMBED_SRC ar klienta Google Maps profila
 * oficiālo "Iegult karti" iframe saiti, kas satur piesaistīto 360° skatu.
 */
const DEMO_EMBED_SRC =
  "https://maps.google.com/maps?q=&layer=c&cbll=56.951357,24.113562&cbp=12,20,0,0,0&output=svembed";

const FALLBACK_TEXT =
  "Ja karte priekšskatījumā neielādējas, atver lapu pārlūkā. Reālajā mājaslapā šeit tiks ievietots klienta Google Maps 360° skats.";

export default function GoogleMaps() {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const showFallback = !DEMO_EMBED_SRC || failed;

  return (
    <section id="google-maps" className="section section-soft">
      <div className="container">
        <div className="maps-grid">
          <div className="maps-lead reveal">
            <span className="section-eyebrow">Google Maps 360°</span>
            <h2 className="maps-title">
              360° skats tavā <span className="text-gradient">Google Maps</span>{" "}
              profilā
            </h2>
            <p className="maps-text">
              Uzņēmumiem 360° skats Google Maps profilā palīdz klientiem iepazīt
              telpas pirms apmeklējuma, rada uzticību un padara vietu
              pievilcīgāku meklēšanas rezultātos.
            </p>

            <ul className="maps-benefits reveal-stagger">
              {benefits.map((b) => (
                <li key={b} className="maps-benefit">
                  <span className="maps-benefit-check">
                    <Icon name="check" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="maps-frame reveal">
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
                  {!loaded && (
                    <span className="embed-skeleton" aria-hidden="true" />
                  )}
                  <iframe
                    src={DEMO_EMBED_SRC}
                    title="Google Maps 360° Street View demonstrācijas piemērs"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
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
        </div>
      </div>
    </section>
  );
}
