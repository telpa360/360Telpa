import { Icon, type IconName } from "./Icons";

type UseCase = { icon: IconName; title: string; text: string };

const cases: UseCase[] = [
  {
    icon: "home",
    title: "Īpašumu pārdevējiem",
    text: "Parādi īpašumu pilnībā un pārdod ātrāk — interesents to redz jau pirms tikšanās.",
  },
  {
    icon: "handshake",
    title: "Mākleriem",
    text: "Izcel savus sludinājumus ar profesionālu 360° saturu un piesaisti nopietnākus klientus.",
  },
  {
    icon: "building",
    title: "Uzņēmumiem",
    text: "Parādi savas telpas un vidi tā, lai klienti un darbinieki tās iepazīst jau iepriekš.",
  },
  {
    icon: "restaurant",
    title: "Restorāniem",
    text: "Ļauj viesiem izstaigāt zāli un terasi pirms rezervācijas un radi vēlmi atnākt.",
  },
  {
    icon: "hotel",
    title: "Viesnīcām un viesu namiem",
    text: "Parādi numurus un koplietošanas telpas, lai viesi droši izvēlas tieši tevi.",
  },
  {
    icon: "scissors",
    title: "Saloniem, studijām un klīnikām",
    text: "Radi sajūtu par vidi un atmosfēru, kas palīdz klientam justies droši jau pirms vizītes.",
  },
  {
    icon: "calendar",
    title: "Pasākumu vietām",
    text: "Parādi norises vietas potenciālu un izkārtojumu nākamajiem klientiem un organizatoriem.",
  },
];

export default function UseCases() {
  return (
    <section id="kam-piemerots" className="section section-soft">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Kam piemērots</span>
          <h2 className="section-title">
            Veidots tiem, kam telpa ir{" "}
            <span className="text-gradient">daļa no piedāvājuma</span>
          </h2>
          <p className="section-text section-text-center">
            Ja tava telpa, īpašums vai bizness ir jāparāda cilvēkiem internetā —
            palīdzam to izdarīt skaidri un profesionāli.
          </p>
        </div>

        <div className="usecases-grid reveal-stagger">
          {cases.map((c) => (
            <article key={c.title} className="usecase-card">
              <span className="usecase-icon">
                <Icon name={c.icon} />
              </span>
              <h3 className="usecase-title">{c.title}</h3>
              <p className="usecase-text">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
