"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Vai cena vienmēr ir fiksēta?",
    a: "Nē, cena ir atkarīga no objekta izmēra, atrašanās vietas un nepieciešamā satura apjoma.",
  },
  {
    q: "Cik ātri iespējams saņemt gatavu materiālu?",
    a: "Parasti pēc vienošanās, atkarībā no projekta apjoma un sarežģītības.",
  },
  {
    q: "Vai iespējams apvienot vairākus pakalpojumus?",
    a: "Jā, iespējams izveidot individuālu komplektu ar 360° tūri, dronu kadriem un reklāmas video.",
  },
  {
    q: "Vai strādājat tikai Rīgā?",
    a: "Pamatā Rīgā un Latvijā, bet iespējams vienoties arī par citiem objektiem.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="biezie-jautajumi" className="section section-soft">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Jautājumi</span>
          <h2 className="section-title">
            Biežāk uzdotie <span className="text-gradient">jautājumi</span>
          </h2>
        </div>

        <div className="faq reveal">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div
                key={item.q}
                className={`faq-item${isOpen ? " is-open" : ""}`}
              >
                <h3 className="faq-q-wrap">
                  <button
                    type="button"
                    id={buttonId}
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq-a"
                >
                  <p className="faq-a-inner">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
