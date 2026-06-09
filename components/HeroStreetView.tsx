import { Icon } from "./Icons";

/*
 * HERO 360° VIRTUAL TOUR (Kuula)
 * ----------------------------------------------------------------------------
 * The hero visual is a real, interactive Kuula 360° virtual tour (collection
 * 7qvPx). It replaces the former Google Maps Street View card so the first
 * impression is a genuine virtual tour. Plain official Kuula iframe — no
 * overlay/placeholder covering it — and responsive via the .maps-embed
 * aspect-ratio wrapper (width/height 100%, border 0 come from CSS). The lower
 * "Reāls 360° tūres piemērs" section uses a different Kuula collection (7l1x8)
 * so the two showcases never look like duplicates.
 */
const HERO_TOUR_SRC = "https://kuula.co/embed/collection/7qvPx";

export default function HeroStreetView() {
  return (
    <div className="maps-frame hero-sv">
      <div className="maps-frame-bar">
        <span className="maps-pin">
          <Icon name="panorama" />
        </span>
        <span className="maps-frame-place">
          <strong>360° virtuālā tūre</strong>
          <span>Velc un pārvietojies, lai apskatītu telpu</span>
        </span>
        <span className="maps-demo-tag">Demo piemērs</span>
      </div>

      <div className="maps-embed">
        <iframe
          src={HERO_TOUR_SRC}
          title="360° virtuālā tūre"
          loading="lazy"
          allowFullScreen
          allow="fullscreen; accelerometer; gyroscope; magnetometer; vr; xr-spatial-tracking"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="maps-note">
        Šis ir demonstrācijas piemērs. Reālā tūre tiek veidota tieši tavam
        īpašumam vai telpai.
      </p>
    </div>
  );
}
