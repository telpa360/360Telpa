const points = [
  {
    title: "Uzticība jau pirms saziņas",
    text: "Skaidrs, profesionāls telpas atspoguļojums palīdz cilvēkam saprast piedāvājumu un uzticēties tam vēl pirms pirmā zvana.",
  },
  {
    title: "Mazāk lieku jautājumu",
    text: "360° tūre parāda telpu tādu, kāda tā ir — izkārtojumu, plūsmu un izmērus interesents redz pats, bez papildu skaidrojumiem.",
  },
  {
    title: "Apskate jebkurā laikā",
    text: "Telpu var izpētīt attālināti no jebkuras ierīces, ērtā brīdī — nav uzreiz jāorganizē klātienes vizīte.",
  },
  {
    title: "Nopietnāki interesenti",
    text: "Pie tevis vēršas cilvēki, kuri telpu jau ir redzējuši un saprot, ko sagaida. Tas nozīmē konkrētākas un kvalitatīvākas sarunas.",
  },
];

export default function Intro() {
  return (
    <section id="intro" className="section">
      <div className="container">
        <div className="intro-grid">
          <div className="intro-lead reveal">
            <span className="section-eyebrow">Kāpēc tas palīdz</span>
            <h2 className="section-title">
              Cilvēki vēlas redzēt telpu,{" "}
              <span className="text-gradient">pirms to apmeklē</span>
            </h2>
            <p className="section-text">
              Mūsdienās izvēle sākas ekrānā. Pirms cilvēks aizbrauc apskatīt
              īpašumu, rezervē galdiņu vai izvēlas norises vietu, viņš jau ir
              izveidojis pirmo iespaidu internetā. Telpa360 palīdz, lai šis
              iespaids būtu skaidrs, profesionāls un patiess.
            </p>
            <p className="section-text">
              Vizuāla telpas prezentācija rada uzticību, samazina liekos
              jautājumus un ļauj vietu izpētīt no attāluma. Rezultātā pie tevis
              nonāk vairāk nopietnu un sagatavotu interesentu.
            </p>
          </div>

          <ul className="intro-points reveal-stagger">
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
