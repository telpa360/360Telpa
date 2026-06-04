const steps = [
  {
    num: "1",
    title: "Saruna",
    text: "Sākam ar īsu sarunu, lai saprastu tavu mērķi, telpu un to, kur saturu izmantosi. Saskaņojam apjomu un termiņu.",
  },
  {
    num: "2",
    title: "Filmēšana",
    text: "Ierodamies objektā ar profesionālu 360° tehniku un, ja nepieciešams, dronu. Uzņemam visu bez liekas tavas iesaistes.",
  },
  {
    num: "3",
    title: "Apstrāde",
    text: "Saliekam interaktīvo tūri vai video, pievienojam pārejas punktus un detaļas, kas telpu parāda vislabāk.",
  },
  {
    num: "4",
    title: "Gatavs rezultāts",
    text: "Saņem gatavu saturu mājaslapai, sludinājumam vai Google Maps profilam un sāc piesaistīt interesentus.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Process</span>
          <h2 className="section-title">
            No idejas līdz rezultātam{" "}
            <span className="text-gradient">četros soļos</span>
          </h2>
          <p className="section-text section-text-center">
            Vienkāršs un caurspīdīgs process, kurā tava iesaiste ir minimāla.
          </p>
        </div>

        <ol className="process-timeline">
          {steps.map((s) => (
            <li key={s.num} className="process-step">
              <span className="process-node" aria-hidden="true">
                {s.num}
              </span>
              <h3 className="process-step-title">{s.title}</h3>
              <p className="process-step-text">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
