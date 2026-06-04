import { Icon, type IconName } from "./Icons";

type Service = {
  icon: IconName;
  title: string;
  text: string;
  tag: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    icon: "tour360",
    title: "360° virtuālās tūres",
    text: "Interaktīva telpas apskate, kurā interesents pats pārvietojas pa telpu, pagriežas un izpēta katru stūri tieši pārlūkā. Galvenais Telpa360 pakalpojums nekustamajiem īpašumiem un uzņēmumu telpām.",
    tag: "Galvenais pakalpojums",
    featured: true,
  },
  {
    icon: "maps",
    title: "360° skati Google Maps profilam",
    text: "Piesaistām 360° skatu tava uzņēmuma Google Maps profilam, lai klienti var apskatīt telpas tieši meklēšanas rezultātos un kartē — vēl pirms apmeklējuma.",
    tag: "Galvenais pakalpojums",
    featured: true,
  },
  {
    icon: "cube",
    title: "3D tūres",
    text: "Reālistisks telpu 3D modelis ar mērogu, plānojumu un dziļuma sajūtu, kas izceļas no parastām fotogrāfijām.",
    tag: "Telpu prezentācija",
  },
  {
    icon: "drone",
    title: "Dronu filmēšana",
    text: "Gaisa kadri, kas parāda objektu, apkārtni un mērogu no augšas — īpašumiem, teritorijām un pasākumiem.",
    tag: "Papildu saturs",
  },
  {
    icon: "fpv",
    title: "FPV dronu video",
    text: "Dinamiski, kinematogrāfiski lidojumi cauri telpām vienā nepārtrauktā kadrā, kad nepieciešams īpašs efekts.",
    tag: "Papildu saturs",
  },
  {
    icon: "video",
    title: "Reklāmas video",
    text: "Īsi, mērķtiecīgi video sociālajiem tīkliem un mājaslapām, kas apvieno labākos kadrus vienā stāstā.",
    tag: "Papildu saturs",
  },
];

export default function Services() {
  return (
    <section id="pakalpojumi" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Pakalpojumi</span>
          <h2 className="section-title">
            Galvenais — telpu prezentācija{" "}
            <span className="text-gradient">360° skatā</span>
          </h2>
          <p className="section-text section-text-center">
            Telpa360 specializējas 360° virtuālajās tūrēs un Google Maps skatos.
            Dronu, FPV un reklāmas video pieejami kā papildinājums.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <article
              key={s.title}
              className={`service-card${s.featured ? " is-featured" : ""}`}
            >
              <div className="service-card-top">
                <span className="service-icon">
                  <Icon name={s.icon} />
                </span>
                <span className="service-tag">{s.tag}</span>
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-text">{s.text}</p>
              <a href="#kontakti" className="service-link">
                Uzzināt vairāk
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
