"use server";

import { createClient } from "@/utils/supabase/server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

/**
 * Server Action: stores a contact form submission in Supabase.
 * No authentication — anyone can submit. Validation happens here on the server
 * and is also enforced by CHECK constraints / RLS in the database.
 */
export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("vards") ?? "").trim();
  const contact = String(formData.get("kontakts") ?? "").trim();
  const service = String(formData.get("pakalpojums") ?? "").trim();
  const message = String(formData.get("zina") ?? "").trim();

  // Basic server-side validation
  if (!name || !contact || !message) {
    return {
      status: "error",
      message: "Lūdzu, aizpildi vārdu, kontaktinformāciju un ziņu.",
    };
  }

  if (name.length > 200 || contact.length > 200 || message.length > 5000) {
    return {
      status: "error",
      message: "Ievadītais teksts ir pārāk garš. Lūdzu, saīsini to.",
    };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("contact_submissions").insert({
      name,
      contact,
      service: service || null,
      message,
    });

    if (error) {
      console.error("Supabase insert error:", error.message);
      return {
        status: "error",
        message:
          "Diemžēl neizdevās nosūtīt pieteikumu. Lūdzu, mēģini vēlreiz vai sazinies pa e-pastu.",
      };
    }

    return {
      status: "success",
      message:
        "Paldies! Tavs pieteikums ir saņemts. Sazināsimies ar tevi tuvākajā laikā.",
    };
  } catch (err) {
    console.error("Unexpected contact submission error:", err);
    return {
      status: "error",
      message:
        "Radās negaidīta kļūda. Lūdzu, mēģini vēlreiz vai sazinies pa e-pastu.",
    };
  }
}
