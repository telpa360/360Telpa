import { Icon } from "./Icons";

const benefits = [
  "Redzamība Google Maps",
  "Uzticība pirms apmeklējuma",
  "Profesionālāks uzņēmuma profils",
];

/*
 * GOOGLE MAPS 360° DEMO
 * ----------------------------------------------------------------------------
 * Below is a public, no-API-key Google Maps embed (official "output=embed"
 * format) used purely as a demonstration of how a business location appears
 * on Google Maps. It is NOT Telpa360 work.
 *
 * TODO (reālam klientam): nomaini šo iframe ar klienta Google Maps profila
 * oficiālo "Kopīgot vai iegult karti" → "Iegult karti" iframe kodu, kas satur
 * piesaistīto 360° Street View skatu. Vienkārši aizvieto zemāk esošo <iframe>
 * ar Google izsniegto embed kodu (saglabā className="..." uz konteinera).
 */
const DEMO_EMBED_SRC =
  "https://www.google.com/maps?q=R%C4%ABgas%20Centr%C4%81ltirgus%2C%20R%C4%ABga&output=embed";

export default function GoogleMaps() {
  return (
    <section id="google-maps" className="section section-soft">
      <div className="container">
        <div className="maps-grid">
          <div className="maps-lead">
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

            <ul className="maps-benefits">
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

          <div className="maps-frame">
            <div className="maps-frame-bar">
              <span className="maps-pin">
                <Icon name="pin" />
              </span>
              <span className="maps-frame-place">
                <strong>Uzņēmuma atrašanās vieta</strong>
                <span>360° skats · Google Maps</span>
              </span>
              <span className="maps-demo-tag">Demo piemērs</span>
            </div>

            <div className="maps-embed">
              {/* Demonstrācijas embed. Reālam klientam aizvieto ar viņa
                  Google Maps profila iegultās kartes iframe kodu. */}
              {DEMO_EMBED_SRC ? (
                <iframe
                  src={DEMO_EMBED_SRC}
                  title="Google Maps demonstrācijas piemērs"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="maps-placeholder">
                  <span className="maps-placeholder-pin" aria-hidden="true" />
                  <p>
                    Šeit tiks parādīts klienta Google Maps 360° skats. Ievieto
                    oficiālo Google Maps iegultās kartes kodu.
                  </p>
                </div>
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
