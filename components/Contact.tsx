"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

const initialContactState: ContactState = {
  status: "idle",
  message: "",
};

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
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialContactState
  );
  const formRef = useRef<HTMLFormElement>(null);

  // Reset the form fields after a successful submission.
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

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

          <form ref={formRef} className="contact-form glass" action={formAction}>
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
                disabled={isPending}
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
                disabled={isPending}
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
                disabled={isPending}
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
                disabled={isPending}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg form-submit"
              disabled={isPending}
            >
              {isPending ? "Nosūta..." : "Nosūtīt pieteikumu"}
            </button>

            {state.status !== "idle" && (
              <p
                className={`form-note ${
                  state.status === "error" ? "form-note-error" : ""
                }`}
                role="status"
                aria-live="polite"
              >
                {state.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
