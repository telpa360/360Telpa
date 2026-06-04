const steps = [
  {
    num: "01",
    title: "Saruna",
    text: "Sākam ar īsu sarunu, lai saprastu tavu mērķi, telpu un to, kur saturu izmantosi. Saskaņojam ideju, apjomu un termiņu.",
  },
  {
    num: "02",
    title: "Filmēšana",
    text: "Ierodamies objektā ar profesionālu tehniku — 360° kameras, droni, FPV un GoPro. Uzņemam visu nepieciešamo bez liekas jūsu iesaistes.",
  },
  {
    num: "03",
    title: "Apstrāde",
    text: "Montējam, krāsojam un saliekam interaktīvo tūri vai video. Pievienojam pārejas punktus, mūziku un detaļas, kas izceļ telpu.",
  },
  {
    num: "04",
    title: "Gatavs rezultāts",
    text: "Saņem gatavu saturu, ko uzreiz vari ievietot mājaslapā, sludinājumā vai sociālajos tīklos un sākt piesaistīt interesentus.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Process</span>
          <h2 className="section-title">
            No idejas līdz rezultātam{" "}
            <span className="text-gradient">četros soļos</span>
          </h2>
          <p className="section-text section-text-center">
            Vienkāršs un caurspīdīgs process, kurā tava iesaiste ir minimāla, bet
            rezultāts — maksimāls.
          </p>
        </div>

        <ol className="process-timeline">
          {steps.map((s) => (
            <li key={s.num} className="process-step">
              <div className="process-node" aria-hidden="true">
                <span className="process-node-dot" />
              </div>
              <span className="process-num">{s.num}</span>
              <h3 className="process-step-title">{s.title}</h3>
              <p className="process-step-text">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
