const cases = [
  {
    title: "Īpašumu pārdevējiem",
    text: "Pārdod ātrāk un par labāku cenu — interesents redz īpašumu pilnībā jau pirms pirmās tikšanās.",
    span: "wide",
  },
  {
    title: "Mākleriem",
    text: "Izceļ savus sludinājumus ar profesionālu saturu un piesaista nopietnākus klientus.",
    span: "tall",
  },
  {
    title: "Uzņēmumiem un birojiem",
    text: "Parādi savu vidi, kultūru un telpas tā, lai klienti un darbinieki gribētu būt klāt.",
    span: "normal",
  },
  {
    title: "Restorāniem un viesnīcām",
    text: "Ļauj viesiem izstaigāt zāli, numuru vai terasi pirms rezervācijas un radi vēlmi atnākt.",
    span: "normal",
  },
  {
    title: "Pasākumu organizatoriem",
    text: "Iemūžini norisi no gaisa un iekšpuses, un parādi vietas potenciālu nākamajiem klientiem.",
    span: "wide",
  },
  {
    title: "Sporta un aktīvās atpūtas projektiem",
    text: "Nodod ātrumu, adrenalīnu un emociju ar dinamisku FPV un GoPro saturu.",
    span: "tall",
  },
];

export default function UseCases() {
  return (
    <section id="kam-piemerots" className="section usecases">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Kam piemērots</span>
          <h2 className="section-title">
            Veidots tiem, kam telpa ir{" "}
            <span className="text-gradient">daļa no piedāvājuma</span>
          </h2>
          <p className="section-text section-text-center">
            Ja tava telpa, īpašums, bizness vai pasākums ir jāparāda cilvēkiem
            internetā — mēs palīdzam to izdarīt iespaidīgi.
          </p>
        </div>

        <div className="usecases-grid">
          {cases.map((c, i) => (
            <article
              key={c.title}
              className={`usecase-card usecase-${c.span}`}
            >
              <span className="usecase-number">{String(i + 1).padStart(2, "0")}</span>
              <div className="usecase-body">
                <h3 className="usecase-title">{c.title}</h3>
                <p className="usecase-text">{c.text}</p>
              </div>
              <span className="usecase-corner" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
