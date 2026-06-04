import { Icon } from "./Icons";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            360° virtuālās tūres · Google Maps · Rīga
          </span>

          <h1 className="hero-title">
            Parādi savu īpašumu vai uzņēmumu{" "}
            <span className="text-gradient">360° skatā</span>
          </h1>

          <p className="hero-subtitle">
            Telpa360 veido 360° virtuālās tūres nekustamajiem īpašumiem,
            uzņēmumu telpām un Google Maps profiliem, lai klienti varētu
            apskatīt vietu attālināti un uzticēties piedāvājumam jau pirms
            pirmās saziņas.
          </p>

          <div className="hero-actions">
            <a href="#kontakti" className="btn btn-primary btn-lg">
              Saņemt piedāvājumu
            </a>
            <a href="#pakalpojumi" className="btn btn-secondary btn-lg">
              Apskatīt pakalpojumus
            </a>
          </div>

          <ul className="hero-stats" aria-label="Galvenie rādītāji">
            <li>
              <span className="stat-number">360°</span>
              <span className="stat-label">Pilna telpas apskate</span>
            </li>
            <li>
              <span className="stat-number">Google Maps</span>
              <span className="stat-label">Redzamība un uzticība</span>
            </li>
            <li>
              <span className="stat-number">24h</span>
              <span className="stat-label">Atbilde uz pieprasījumu</span>
            </li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="tour-panel">
            <div className="tour-panel-top">
              <span className="tour-badge">
                <span className="tour-badge-ring" /> 360° VIRTUĀLĀ TŪRE
              </span>
              <div className="tour-dots">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="tour-stage">
              <div className="room">
                <div className="room-window" />
                <div className="room-sofa" />
                <div className="room-plant" />
                <div className="room-floor" />
              </div>
              <div className="tour-360">
                <span>360°</span>
              </div>
              <div className="hotspot hotspot-1" />
              <div className="hotspot hotspot-2" />
            </div>

            <div className="tour-panel-bottom">
              <div className="tour-thumbs">
                <span />
                <span />
                <span />
              </div>
              <span className="tour-progress">
                <span className="tour-progress-fill" />
              </span>
            </div>
          </div>

          <div className="floating-card floating-card-1">
            <span className="fc-icon">
              <Icon name="panorama" />
            </span>
            <div>
              <strong>Interaktīva tūre</strong>
              <span>Apskate attālināti</span>
            </div>
          </div>

          <div className="floating-card floating-card-2">
            <span className="fc-icon fc-icon-pin">
              <Icon name="pin" />
            </span>
            <div>
              <strong>Google Maps 360°</strong>
              <span>Lielāka uzticība</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
