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
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    // Capture the form synchronously (event.currentTarget is null after await).
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("vards") ?? "").trim();
    const contact = String(data.get("kontakts") ?? "").trim();
    const service = String(data.get("pakalpojums") ?? "").trim();
    const message = String(data.get("zina") ?? "").trim();

    if (!name || !contact || !message) {
      setNote({
        type: "error",
        text: "Lūdzu, aizpildi vārdu, kontaktinformāciju un ziņu.",
      });
      return;
    }

    setSubmitting(true);
    setNote(null);

    try {
      // Saves the submission in the background via Supabase's REST endpoint —
      // no email app is opened and the visitor never has to log in to anything.
      // A plain fetch keeps the page bundle small. RLS allows public inserts.
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/contact_submissions`,
        {
          method: "POST",
          headers: {
            apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            name,
            contact,
            service: service || null,
            message,
          }),
        }
      );

      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        throw new Error(`HTTP ${res.status} ${detail}`.trim());
      }

      form.reset();
      setNote({
        type: "success",
        text: "Paldies! Tavs pieteikums ir nosūtīts. Sazināsimies ar tevi tuvākajā laikā.",
      });
    } catch (error) {
      // Convert any unknown error safely; never surface a raw object/Event.
      console.error("Pieteikuma kļūda:", getErrorMessage(error));
      setNote({
        type: "error",
        text: `Neizdevās nosūtīt pieteikumu. Lūdzu, mēģini vēlreiz vai raksti mums uz ${EMAIL}.`,
      });
    } finally {
      setSubmitting(false);
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
                disabled={submitting}
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
                disabled={submitting}
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
                disabled={submitting}
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
                disabled={submitting}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg form-submit"
              disabled={submitting}
            >
              {submitting ? "Nosūta..." : "Nosūtīt pieteikumu"}
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
