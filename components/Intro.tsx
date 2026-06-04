const points = [
  {
    title: "Uzticamība no pirmā skatiena",
    text: "Kvalitatīvs vizuālais saturs rada profesionālu iespaidu un palīdz cilvēkam uzticēties piedāvājumam jau pirms pirmā zvana.",
  },
  {
    title: "Mazāk lieku jautājumu",
    text: "360° tūre parāda telpu tā, kā tā ir patiesībā — interesentam jau iepriekš ir skaidrs izkārtojums, plūsma un noskaņa.",
  },
  {
    title: "Apskate jebkurā laikā",
    text: "Telpu var izpētīt attālināti, no jebkuras ierīces, jebkurā diennakts laikā — bez nepieciešamības uzreiz organizēt klātienes vizīti.",
  },
  {
    title: "Kvalitatīvāki pieprasījumi",
    text: "Pie tevis vēršas cilvēki, kuri jau ir redzējuši telpu un saprot, ko sagaida — tas nozīmē nopietnākas un mērķtiecīgākas sarunas.",
  },
];

export default function Intro() {
  return (
    <section id="intro" className="section intro">
      <div className="container">
        <div className="intro-grid">
          <div className="intro-lead">
            <span className="section-eyebrow">Kāpēc tas strādā</span>
            <h2 className="section-title">
              Labāka prezentācija pārdod, iznomā un piesaista{" "}
              <span className="text-gradient">ātrāk</span>
            </h2>
            <p className="section-text">
              Mūsdienās izvēle sākas ekrānā. Pirms cilvēks aizbrauc apskatīt
              īpašumu, rezervē galdiņu restorānā vai izvēlas pasākuma norises
              vietu, viņš jau ir izveidojis pirmo iespaidu internetā. Telpa360
              palīdz, lai šis iespaids būtu spēcīgs, mūsdienīgs un patiess.
            </p>
            <p className="section-text">
              Immersīvs saturs nav tikai skaists — tas veic darbu. Tas rada
              uzticamību, samazina liekos jautājumus un ļauj telpu izpētīt no
              attāluma, tāpēc pie tevis nonāk kvalitatīvāki un nopietnāki
              interesenti.
            </p>
          </div>

          <ul className="intro-points">
            {points.map((p, i) => (
              <li key={p.title} className="intro-point">
                <span className="intro-point-index">0{i + 1}</span>
                <div>
                  <h3 className="intro-point-title">{p.title}</h3>
                  <p className="intro-point-text">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
