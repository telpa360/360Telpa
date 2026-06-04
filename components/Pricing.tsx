import { Icon } from "./Icons";

type Plan = {
  title: string;
  price: string;
  fromPrefix?: boolean;
  desc: string;
  includes: string[];
  highlight?: boolean;
};

const mainPlans: Plan[] = [
  {
    title: "360° virtuālā tūre",
    price: "120 €",
    fromPrefix: true,
    highlight: true,
    desc: "Interaktīva telpas apskate dzīvokļiem, mājām, birojiem, restorāniem, viesnīcām un komerctelpām.",
    includes: [
      "360° fotografēšana",
      "Tūres izveide",
      "Pamata navigācijas punkti",
      "Saite ievietošanai mājaslapā vai sludinājumā",
    ],
  },
  {
    title: "Google Maps 360° skati",
    price: "120 €",
    fromPrefix: true,
    desc: "360° skati uzņēmuma Google Maps profilam, lai klienti var apskatīt telpu pirms apmeklējuma.",
    includes: [
      "Telpu fotografēšana",
      "Sagatavošana Google Maps vajadzībām",
      "Palīdzība ar publicēšanu un profila sasaisti",
    ],
  },
];

const extraPlans: Plan[] = [
  {
    title: "Dronu filmēšana",
    price: "180 €",
    fromPrefix: true,
    desc: "Gaisa kadri īpašumiem, zemes gabaliem, viesu namiem, uzņēmumiem un pasākumiem.",
    includes: [
      "Filmēšana ar dronu",
      "Apkārtnes un mēroga parādīšana",
      "Pamata video materiāls",
    ],
  },
  {
    title: "FPV dronu video",
    price: "180 €",
    fromPrefix: true,
    desc: "Dinamisks video cauri telpai, objektam vai pasākuma videi ar īpašu kustības sajūtu.",
    includes: [
      "FPV lidojuma filmēšana",
      "Dinamiska video montāža",
      "Uzņēmumiem, sporta vietām un pasākumiem",
    ],
  },
  {
    title: "Reklāmas video sociālajiem tīkliem",
    price: "250 €",
    fromPrefix: true,
    desc: "Īsi video Instagram, Facebook, TikTok, YouTube Shorts un mājaslapām.",
    includes: [
      "Filmēšana vai esošā materiāla izmantošana",
      "Montāža",
      "Vertikāls vai horizontāls formāts",
    ],
  },
  {
    title: "Komplekti",
    price: "Pēc vienošanās",
    desc: "Apvieno 360° tūri, dronu kadrus un reklāmas video vienā izdevīgākā piedāvājumā.",
    includes: [
      "Individuāls piedāvājums",
      "Vairāki pakalpojumi vienā projektā",
      "Izdevīgāka kopējā cena",
    ],
  },
];

function PriceCard({ plan, compact }: { plan: Plan; compact?: boolean }) {
  return (
    <article
      className={`price-card${plan.highlight ? " is-highlight" : ""}${
        compact ? " price-card--compact" : ""
      }`}
    >
      {plan.highlight && <span className="price-badge">Populārākais</span>}

      <h3 className="price-title">{plan.title}</h3>

      <div className="price-amount">
        {plan.fromPrefix && <span className="price-from">sākot no</span>}
        <span className="price-value">{plan.price}</span>
      </div>

      <p className="price-desc">{plan.desc}</p>

      <ul className="price-list">
        {plan.includes.map((item) => (
          <li key={item}>
            <span className="price-check" aria-hidden="true">
              <Icon name="check" />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <a href="#kontakti" className="btn btn-primary price-cta">
        Pieteikt pakalpojumu
      </a>
    </article>
  );
}

export default function Pricing() {
  return (
    <section id="cenas" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Cenas</span>
          <h2 className="section-title">
            Pakalpojumu cenas{" "}
            <span className="text-gradient">sākot no</span>
          </h2>
          <p className="section-text section-text-center">
            Zemāk redzamas orientējošas cenas. Precīza cena tiek noteikta pēc
            objekta izmēra, atrašanās vietas un nepieciešamā satura apjoma.
          </p>
        </div>

        <div className="pricing-grid reveal-stagger">
          {mainPlans.map((plan) => (
            <PriceCard key={plan.title} plan={plan} />
          ))}
        </div>

        <h3 className="pricing-subhead reveal">Papildu pakalpojumi</h3>

        <div className="pricing-grid pricing-grid--extra reveal-stagger">
          {extraPlans.map((plan) => (
            <PriceCard key={plan.title} plan={plan} compact />
          ))}
        </div>

        <p className="pricing-note reveal">
          Precīza cena tiek noteikta pēc objekta izmēra, atrašanās vietas un
          nepieciešamā satura apjoma. Sazinies, un sagatavosim konkrētu
          piedāvājumu.
        </p>
      </div>
    </section>
  );
}
