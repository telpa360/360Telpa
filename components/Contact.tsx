"use client";

import { FormEvent, useState } from "react";
import { getErrorMessage } from "@/utils/getErrorMessage";

const services = [
  "360° virtuālās tūres",
  "360° skati Google Maps profilam",
  "3D tūres",
  "Dronu filmēšana",
  "FPV dronu video",
  "Reklāmas video",
  "Cits / vēl nezinu",
];

const EMAIL = "Telpa360@gmail.com";

type Note = { type: "success" | "error"; text: string };

export default function Contact() {
  const [note, setNote] = useState<Note | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const form = event.currentTarget;
      const data = new FormData(form);

      const name = String(data.get("vards") ?? "").trim();
      const contact = String(data.get("kontakts") ?? "").trim();
      const service = String(data.get("pakalpojums") ?? "").trim();
      const message = String(data.get("zina") ?? "").trim();

      const subject = `Pieteikums filmēšanai${name ? ` — ${name}` : ""}`;
      const body = [
        `Vārds: ${name}`,
        `E-pasts vai telefons: ${contact}`,
        `Pakalpojums: ${service}`,
        "",
        "Ziņa:",
        message,
      ].join("\n");

      const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Opens the visitor's email client with a prepared message.
      // Does not throw if no client is configured.
      window.location.href = mailtoUrl;

      setNote({
        type: "success",
        text: "Paldies! Atvērsies tava e-pasta programma ar sagatavotu vēstuli — nospied “Sūtīt”, lai pabeigtu pieteikumu.",
      });
    } catch (error) {
      // Log the safely-converted message; never surface a raw object/Event.
      console.error("Kļūda, atverot e-pastu:", getErrorMessage(error));
      setNote({
        type: "error",
        text: `Neizdevās automātiski atvērt e-pasta programmu. Lūdzu, raksti mums tieši uz ${EMAIL}.`,
      });
    }
  }

  return (
    <section id="kontakti" className="section section-soft">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <span className="section-eyebrow">Kontakti</span>
            <h2 className="section-title">
              Parunāsim par tavu{" "}
              <span className="text-gradient">projektu</span>
            </h2>
            <p className="section-text">
              Pastāsti, kādu telpu, īpašumu vai uzņēmumu vēlies parādīt, un mēs
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

            <div className="contact-badge">
              <span className="dot" />
              Pieejami visā Latvijā
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
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
                maxLength={200}
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
                maxLength={200}
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
                maxLength={5000}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg form-submit"
            >
              Nosūtīt pieteikumu
            </button>

            {note && (
              <p
                className={`form-note ${
                  note.type === "error" ? "form-note-error" : ""
                }`}
                role="status"
                aria-live="polite"
              >
                {note.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
