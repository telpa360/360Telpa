import { Icon } from "./Icons";

/*
 * HERO 360° VIRTUAL TOUR (Kuula)
 * ----------------------------------------------------------------------------
 * Main hero visual: a real interactive Kuula 360° virtual tour (collection
 * 7qvPx) shown on the right of the hero headline. Plain official Kuula iframe —
 * no overlay/placeholder covering it — sized by the .tour360-embed wrapper
 * (responsive height) inside the premium .maps-frame card.
 */
const HERO_TOUR_SRC =
  "https://kuula.co/share/collection/7qvPx?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1";

export default function HeroTour() {
  return (
    <div className="maps-frame hero-sv">
      <div className="maps-frame-bar">
        <span className="maps-pin">
          <Icon name="panorama" />
        </span>
        <span className="maps-frame-place">
          <strong>360° virtuālā tūre</strong>
          <span>Velc, lai pagrieztos · pārvietojies starp telpām</span>
        </span>
        <span className="maps-demo-tag">Demo piemērs</span>
      </div>

      <div className="tour360-embed">
        <iframe
          title="360° virtuālā tūre"
          src={HERO_TOUR_SRC}
          frameBorder="0"
          scrolling="no"
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          allowFullScreen
        />
      </div>

      <p className="maps-note">
        Šis ir demonstrācijas piemērs, lai parādītu, kā darbojas 360° virtuālā
        tūre. Reālā tūre tiek veidota tieši tavam īpašumam vai telpai.
      </p>
    </div>
  );
}
