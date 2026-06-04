import { Icon, type IconName } from "./Icons";

type Benefit = { icon: IconName; title: string; text: string };

const benefits: Benefit[] = [
  {
    icon: "sparkle",
    title: "Profesionāls iespaids",
    text: "Tava telpa izskatās pārdomāta un uzticama jau no pirmā skatiena.",
  },
  {
    icon: "userCheck",
    title: "Vairāk kvalitatīvu pieprasījumu",
    text: "Pie tevis vēršas cilvēki, kuri telpu jau ir redzējuši un ir patiesi ieinteresēti.",
  },
  {
    icon: "monitor",
    title: "Attālināta apskate",
    text: "Interesents izpēta telpu jebkurā laikā un vietā, bez liekām klātienes vizītēm.",
  },
  {
    icon: "globe",
    title: "Labāka prezentācija internetā",
    text: "Saturs, kas izceļas mājaslapā, sludinājumos un Google Maps profilā.",
  },
  {
    icon: "share",
    title: "Saturs sociālajiem tīkliem",
    text: "Gatavs vizuālais materiāls, ko izmantot uzņēmuma komunikācijā.",
  },
  {
    icon: "shield",
    title: "Spēcīgāka uzticamība",
    text: "Godīgs un caurspīdīgs telpas atspoguļojums veido drošības sajūtu.",
  },
];

export default function Benefits() {
  return (
    <section id="ieguvumi" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Ieguvumi</span>
          <h2 className="section-title">
            Ko tu iegūsti ar <span className="text-gradient">Telpa360</span>
          </h2>
          <p className="section-text section-text-center">
            Tas nav tikai skaists video. Tas ir instruments, kas palīdz parādīt
            telpu un piesaistīt klientus efektīvāk.
          </p>
        </div>

        <div className="benefits-grid reveal-stagger">
          {benefits.map((b) => (
            <article key={b.title} className="benefit-card">
              <span className="benefit-icon">
                <Icon name={b.icon} />
              </span>
              <h3 className="benefit-title">{b.title}</h3>
              <p className="benefit-text">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
