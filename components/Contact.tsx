"use client";

import { FormEvent, useState } from "react";

const services = [
  "360° virtuālās tūres",
  "3D tūres",
  "Dronu filmēšana",
  "FPV dronu video",
  "GoPro filmējumi",
  "Reklāmas video",
  "Cits / vēl nezinu",
];

const EMAIL = "Telpa360@gmail.com";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("vards") || "").trim();
    const contact = String(data.get("kontakts") || "").trim();
    const service = String(data.get("pakalpojums") || "").trim();
    const message = String(data.get("zina") || "").trim();

    const subject = `Pieteikums filmēšanai${name ? ` — ${name}` : ""}`;
    const bodyLines = [
      `Vārds: ${name}`,
      `E-pasts vai telefons: ${contact}`,
      `Pakalpojums: ${service}`,
      "",
      "Ziņa:",
      message,
    ];

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <section id="kontakti" className="section contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-eyebrow">Kontakti</span>
            <h2 className="section-title">
              Parunāsim par tavu{" "}
              <span className="text-gradient">projektu</span>
            </h2>
            <p className="section-text">
              Pastāsti, kādu telpu, īpašumu vai pasākumu vēlies parādīt, un mēs
              sagatavosim piedāvājumu. Atbildam parasti 24 stundu laikā.
            </p>

            <ul className="contact-details">
              <li>
                <span className="contact-detail-label">E-pasts</span>
                <a href={`mailto:${EMAIL}`} className="contact-detail-value">
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="contact-detail-label">Telefons</span>
                <a href="tel:+37128606294" className="contact-detail-value">
                  +371 28606294
                </a>
              </li>
              <li>
                <span className="contact-detail-label">Atrašanās vieta</span>
                <span className="contact-detail-value">Rīga, Latvija</span>
              </li>
            </ul>

            <div className="contact-badge glass">
              <span className="rec-dot" />
              Pieejami filmēšanai visā Latvijā
            </div>
          </div>

          <form className="contact-form glass" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="vards" className="form-label">
                Vārds
              </label>
              <input
                id="vards"
                name="vards"
                type="text"
                className="form-input"
                placeholder="Tavs vārds"
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="kontakts" className="form-label">
                E-pasts vai telefons
              </label>
              <input
                id="kontakts"
                name="kontakts"
                type="text"
                className="form-input"
                placeholder="lai mēs varētu sazināties"
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="pakalpojums" className="form-label">
                Pakalpojums
              </label>
              <select
                id="pakalpojums"
                name="pakalpojums"
                className="form-input form-select"
                defaultValue={services[0]}
              >
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="zina" className="form-label">
                Ziņa
              </label>
              <textarea
                id="zina"
                name="zina"
                className="form-input form-textarea"
                placeholder="Pastāsti par savu telpu vai projektu..."
                rows={4}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg form-submit">
              Nosūtīt pieteikumu
            </button>

            {sent && (
              <p className="form-note" role="status">
                Paldies! Atvērsies tava e-pasta programma ar sagatavotu vēstuli —
                nospied “Sūtīt”, lai pabeigtu pieteikumu.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
