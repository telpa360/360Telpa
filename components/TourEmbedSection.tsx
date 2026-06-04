"use client";

import { useState } from "react";
import { Icon } from "./Icons";

/*
 * REAL 360° PROPERTY TOUR (Kuula)
 * ----------------------------------------------------------------------------
 * Interactive demo of a virtual property tour. The iframe loads the public
 * Kuula share collection directly — no API key, not wrapped in a Promise,
 * never throws. If it fails to load (e.g. blocked in a sandbox preview), a
 * graceful Latvian fallback is shown and the page keeps working.
 *
 * TODO (reālam projektam): aizvieto TOUR_EMBED_SRC ar gala Kuula tūres vai
 * kolekcijas iegulšanas saiti (Kuula → Share → Embed).
 */
const TOUR_EMBED_SRC =
  "https://kuula.co/share/collection/7l1x8?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&thumbs=1&iosfs=1";

export default function TourEmbedSection() {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const showFallback = !TOUR_EMBED_SRC || failed;

  return (
    <section id="tures-piemers" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Interaktīvas tūres piemērs</span>
          <h2 className="section-title">
            Reāls <span className="text-gradient">360° tūres</span> piemērs
          </h2>
          <p className="section-text section-text-center">
            Apskati, kā izskatās interaktīva nekustamā īpašuma tūre, kur
            interesents pats var pārvietoties pa telpu, aplūkot detaļas un iegūt
            daudz skaidrāku priekšstatu pirms apskates klātienē.
          </p>
        </div>

        <div className="tour-showcase reveal">
          <div className="maps-frame">
            <div className="maps-frame-bar">
              <span className="maps-pin">
                <Icon name="panorama" />
              </span>
              <span className="maps-frame-place">
                <strong>Interaktīva 360° tūre</strong>
                <span>Velc, lai pagrieztos · pārvietojies starp telpām</span>
              </span>
              <span className="maps-demo-tag">Demo piemērs</span>
            </div>

            <div className="maps-embed maps-embed--tour">
              {showFallback ? (
                <div className="maps-placeholder">
                  <span className="maps-placeholder-pin" aria-hidden="true" />
                  <p>
                    Ja tūre priekšskatījumā neielādējas, atver lapu pārlūkā.
                    Reālajā mājaslapā šeit tiek ievietota klienta 360° virtuālā
                    tūre.
                  </p>
                </div>
              ) : (
                <>
                  {!loaded && <span className="embed-skeleton" aria-hidden="true" />}
                  <iframe
                    src={TOUR_EMBED_SRC}
                    title="360° virtuālās tūres piemērs (Kuula)"
                    loading="lazy"
                    allowFullScreen
                    allow="fullscreen; accelerometer; gyroscope; magnetometer; vr; xr-spatial-tracking"
                    referrerPolicy="no-referrer-when-downgrade"
                    onLoad={() => setLoaded(true)}
                    onError={() => setFailed(true)}
                  />
                </>
              )}
            </div>

            <p className="maps-note">
              Šis ir demonstrācijas piemērs, lai parādītu, kā darbojas
              interaktīva 360° tūre. Reālā tūre tiek veidota tieši tavam
              īpašumam vai telpai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
