const footerNav = [
  { href: "#pakalpojumi", label: "Pakalpojumi" },
  { href: "#cenas", label: "Cenas" },
  { href: "#google-maps", label: "Google Maps 360°" },
  { href: "#kam-piemerots", label: "Kam piemērots" },
  { href: "#kontakti", label: "Kontakti" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="logo" aria-label="Telpa360 sākums">
              <span className="logo-mark" aria-hidden="true">
                <span className="logo-ring" />
                <span className="logo-dot" />
              </span>
              <span className="logo-text">
                Telpa<span className="logo-accent">360</span>
              </span>
            </a>
            <p className="footer-desc">
              360° virtuālās tūres, Google Maps skati un telpu prezentācija
              nekustamajiem īpašumiem un uzņēmumiem. Parādi savu telpu
              profesionāli un viegli apskatāmi internetā.
            </p>
            <p className="footer-story">
              Telpa360 sākās kā vienkārša pirmā mājaslapa, bet šodien tā
              attīstās par profesionālu 360° telpu prezentācijas pakalpojumu.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Kājenes navigācija">
            <span className="footer-nav-title">Sadaļas</span>
            {footerNav.map((link) => (
              <a key={link.href} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-contact">
            <span className="footer-nav-title">Sazinies</span>
            <a href="mailto:info@telpa360.lv" className="footer-link">
              info@telpa360.lv
            </a>
            <a href="tel:+37128606294" className="footer-link">
              +371 28606294
            </a>
            <span className="footer-link footer-link-static">Rīga, Latvija</span>
            <a href="#kontakti" className="btn btn-primary footer-cta">
              Saņemt piedāvājumu
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} Telpa360. Visas tiesības aizsargātas.
          </p>
          <p className="footer-made">
            Veidots ar uzmanību detaļām · Rīga, Latvija
          </p>
        </div>
      </div>
    </footer>
  );
}
