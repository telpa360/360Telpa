const benefits = [
  {
    icon: "shine",
    title: "Profesionāls iespaids",
    text: "Tava telpa izskatās nokomplektēta, pārdomāta un uzticama jau no pirmā kadra.",
  },
  {
    icon: "leads",
    title: "Vairāk kvalitatīvu pieprasījumu",
    text: "Pie tevis vēršas cilvēki, kuri jau ir redzējuši telpu un ir patiesi ieinteresēti.",
  },
  {
    icon: "remote",
    title: "Attālināta apskate",
    text: "Interesents izpēta telpu jebkurā laikā un vietā — bez liekām klātienes vizītēm.",
  },
  {
    icon: "web",
    title: "Labāka prezentācija internetā",
    text: "Saturs, kas izceļas mājaslapā, sludinājumos un meklēšanas rezultātos.",
  },
  {
    icon: "social",
    title: "Saturs sociālajiem tīkliem",
    text: "Gatavi, dinamiski video, kas piesaista uzmanību un veido atpazīstamību.",
  },
  {
    icon: "trust",
    title: "Spēcīgāka uzticamība",
    text: "Caurspīdīgs, godīgs telpas atspoguļojums veido drošības sajūtu un noteiktību.",
  },
];

function BenefitIcon({ name }: { name: string }) {
  return (
    <span className={`benefit-icon benefit-icon-${name}`} aria-hidden="true">
      <span className="bi-shape" />
    </span>
  );
}

export default function Benefits() {
  return (
    <section id="ieguvumi" className="section benefits">
      <div className="benefits-bg" aria-hidden="true">
        <div className="benefits-glow" />
      </div>
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Ieguvumi</span>
          <h2 className="section-title">
            Ko tu iegūsti ar{" "}
            <span className="text-gradient">Telpa360</span>
          </h2>
          <p className="section-text section-text-center">
            Tas nav tikai skaists video. Tas ir instruments, kas palīdz pārdot,
            iznomāt un piesaistīt klientus efektīvāk.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((b) => (
            <article key={b.title} className="benefit-card glass">
              <BenefitIcon name={b.icon} />
              <h3 className="benefit-title">{b.title}</h3>
              <p className="benefit-text">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
