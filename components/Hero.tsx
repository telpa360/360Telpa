export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Immersīvs vizuālais saturs · Rīga, Latvija
          </span>

          <h1 className="hero-title">
            Parādi savu telpu tā,{" "}
            <span className="text-gradient">lai to gribas redzēt</span>
          </h1>

          <p className="hero-subtitle">
            Telpa360 veido 360° virtuālās tūres, dronu un FPV video, GoPro
            filmējumus un reklāmas saturu, kas liek īpašumiem, uzņēmumiem un
            pasākumiem izskatīties profesionāli, uzticami un viegli apskatāmi
            internetā.
          </p>

          <div className="hero-actions">
            <a href="#kontakti" className="btn btn-primary btn-lg">
              Saņemt piedāvājumu
            </a>
            <a href="#pakalpojumi" className="btn btn-ghost btn-lg">
              Apskatīt pakalpojumus
            </a>
          </div>

          <ul className="hero-stats" aria-label="Galvenie rādītāji">
            <li>
              <span className="stat-number">360°</span>
              <span className="stat-label">Pilna telpas apskate</span>
            </li>
            <li>
              <span className="stat-number">4K</span>
              <span className="stat-label">Dronu un FPV video</span>
            </li>
            <li>
              <span className="stat-number">24h</span>
              <span className="stat-label">Ātra atbilde uz pieprasījumu</span>
            </li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="tour-panel glass">
            <div className="tour-panel-top">
              <span className="tour-badge">
                <span className="rec-dot" /> 360° TŪRE
              </span>
              <div className="tour-dots">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="tour-stage">
              <div className="tour-room">
                <div className="room-floor" />
                <div className="room-wall room-wall-left" />
                <div className="room-wall room-wall-right" />
                <div className="orbit orbit-1" />
                <div className="orbit orbit-2" />
                <div className="hotspot hotspot-1">
                  <span className="hotspot-pulse" />
                </div>
                <div className="hotspot hotspot-2">
                  <span className="hotspot-pulse" />
                </div>
                <div className="hotspot hotspot-3">
                  <span className="hotspot-pulse" />
                </div>
                <div className="drone-path">
                  <span className="drone" />
                </div>
              </div>

              <div className="tour-compass">
                <span className="compass-n">Z</span>
                <span className="compass-needle" />
              </div>
            </div>

            <div className="tour-panel-bottom">
              <div className="tour-progress">
                <span className="tour-progress-fill" />
              </div>
              <span className="tour-meta">Interaktīva apskate · 12 punkti</span>
            </div>
          </div>

          <div className="floating-card floating-card-1 glass">
            <span className="fc-icon fc-icon-drone" />
            <div>
              <strong>FPV lidojums</strong>
              <span>Kinematogrāfisks kadrs</span>
            </div>
          </div>

          <div className="floating-card floating-card-2 glass">
            <span className="fc-icon fc-icon-eye" />
            <div>
              <strong>+38% apskates</strong>
              <span>Ilgāka uzmanība</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#intro" className="scroll-cue" aria-label="Ritināt uz leju">
        <span className="scroll-cue-line" />
        Ritini
      </a>
    </section>
  );
}
