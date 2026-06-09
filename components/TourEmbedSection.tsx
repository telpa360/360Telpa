import { Icon } from "./Icons";

/*
 * ADDITIONAL 360° VIRTUAL TOUR (Kuula)
 * ----------------------------------------------------------------------------
 * A second, different interactive Kuula 360° virtual tour (collection 7ZLzC),
 * shown as an extra example below the hero. The hero uses 7qvPx; this section
 * uses 7ZLzC, so the two tours never duplicate. Plain official Kuula iframe —
 * no overlay/placeholder — sized by the responsive .tour360-embed wrapper.
 */
const TOUR_EMBED_SRC =
  "https://kuula.co/share/collection/7ZLzC?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1";

export default function TourEmbedSection() {
  return (
    <section id="tures-piemers" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Papildu piemērs</span>
          <h2 className="section-title">
            Vēl viens <span className="text-gradient">360° tūres</span> piemērs
          </h2>
          <p className="section-text section-text-center">
            Apskati vēl vienu interaktīvu piemēru, kur apmeklētājs pats var
            pārvietoties pa telpu un iepazīt īpašumu attālināti.
          </p>
        </div>

        <div className="tour-showcase reveal">
          <div className="maps-frame">
            <div className="maps-frame-bar">
              <span className="maps-pin">
                <Icon name="panorama" />
              </span>
              <span className="maps-frame-place">
                <strong>Papildu 360° virtuālā tūre</strong>
                <span>Velc, lai pagrieztos · pārvietojies starp telpām</span>
              </span>
              <span className="maps-demo-tag">Demo piemērs</span>
            </div>

            <div className="tour360-embed">
              <iframe
                title="Papildu 360° virtuālā tūre"
                src={TOUR_EMBED_SRC}
                frameBorder="0"
                scrolling="no"
                allow="xr-spatial-tracking; gyroscope; accelerometer"
                allowFullScreen
              />
            </div>

            <p className="maps-note">
              Šis ir demonstrācijas piemērs. Reālā 360° tūre tiek pielāgota
              konkrētajam īpašumam, uzņēmumam vai telpai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
