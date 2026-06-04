const services = [
  {
    icon: "tour360",
    title: "360° virtuālās tūres",
    text: "Interaktīva telpas apskate ar pārejas punktiem, kur interesents pats var staigāt pa telpu, pagriezties un izpētīt katru stūri tieši pārlūkā.",
    tag: "Interaktīvi",
  },
  {
    icon: "tour3d",
    title: "3D tūres",
    text: "Reālistisks telpu 3D modelis nekustamajiem īpašumiem un komerctelpām ar mērogu, plānojumu un dziļuma sajūtu, kas izceļas no parastām fotogrāfijām.",
    tag: "Nekustamais īpašums",
  },
  {
    icon: "drone",
    title: "Dronu filmēšana",
    text: "Iespaidīgi gaisa kadri, kas parāda objektu, apkārtni un mērogu no augšas — ideāli īpašumiem, teritorijām un pasākumiem.",
    tag: "Gaisa skats",
  },
  {
    icon: "fpv",
    title: "FPV dronu video",
    text: "Dinamiski, kinematogrāfiski lidojumi cauri telpām un ārā no tām vienā nepārtrauktā kadrā, kas piesaista uzmanību sociālajos tīklos.",
    tag: "Kinematogrāfiski",
  },
  {
    icon: "gopro",
    title: "GoPro filmējumi",
    text: "Aktīvi, pirmās personas skata filmējumi sportam, aktīvajai atpūtai un pieredzēm, kas nodod kustību, ātrumu un emociju.",
    tag: "Pieredze",
  },
  {
    icon: "promo",
    title: "Reklāmas video",
    text: "Īsi, mērķtiecīgi reklāmas video sociālajiem tīkliem un mājaslapām, kas apvieno labākos kadrus vienā pārliecinošā stāstā.",
    tag: "Sociālie tīkli",
  },
];

function ServiceIcon({ name }: { name: string }) {
  return (
    <span className={`service-icon service-icon-${name}`} aria-hidden="true">
      <span className="si-core" />
      <span className="si-ring" />
      <span className="si-accent" />
    </span>
  );
}

export default function Services() {
  return (
    <section id="pakalpojumi" className="section services">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Pakalpojumi</span>
          <h2 className="section-title">
            Viss vizuālais saturs, lai telpa{" "}
            <span className="text-gradient">izceltos</span>
          </h2>
          <p className="section-text section-text-center">
            No interaktīvām tūrēm līdz kinematogrāfiskam dronu video — visu
            veidojam vienuviet, vienotā profesionālā stilā.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <article key={s.title} className="service-card">
              <div className="service-card-glow" aria-hidden="true" />
              <div className="service-card-top">
                <ServiceIcon name={s.icon} />
                <span className="service-tag">{s.tag}</span>
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-text">{s.text}</p>
              <a href="#kontakti" className="service-link">
                Uzzināt vairāk
                <span className="service-link-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
