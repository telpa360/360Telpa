import HeroStreetView from "./HeroStreetView";

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

        <div className="hero-visual">
          <HeroStreetView />
        </div>
      </div>
    </section>
  );
}
