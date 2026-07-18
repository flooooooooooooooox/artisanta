"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const city = formData.get("city")?.toString().trim() ?? "";
  const postalCode = formData.get("postalCode")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !phone || !city || !postalCode || !message) {
    return { status: "error", message: "Merci de remplir tous les champs obligatoires." };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { status: "error", message: "Merci de renseigner une adresse email valide." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "Propreeclat@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Propre Éclat <onboarding@resend.dev>";

  // Si la clé n'est pas encore configurée : on journalise sans faire échouer l'utilisateur.
  if (!apiKey) {
    console.log("[Contact] RESEND_API_KEY absente — demande non envoyée par email:", {
      name,
      email,
      phone,
      city,
      postalCode,
      message,
    });
    return {
      status: "success",
      message: "Merci ! Votre demande a bien été enregistrée, nous vous répondrons rapidement.",
    };
  }

  const html = `
    <h2>Nouvelle demande de devis — Propre Éclat</h2>
    <ul>
      <li><strong>Nom :</strong> ${escapeHtml(name)}</li>
      <li><strong>Email :</strong> ${escapeHtml(email)}</li>
      <li><strong>Téléphone :</strong> ${escapeHtml(phone)}</li>
      <li><strong>Ville :</strong> ${escapeHtml(city)} (${escapeHtml(postalCode)})</li>
    </ul>
    <p><strong>Message :</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Demande de devis — ${name} (${city})`,
        html,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("[Contact] Échec de l'envoi Resend:", response.status, detail);
      return {
        status: "error",
        message:
          "Une erreur est survenue lors de l'envoi. Vous pouvez nous écrire directement à Propreeclat@gmail.com.",
      };
    }
  } catch (error) {
    console.error("[Contact] Erreur réseau lors de l'envoi:", error);
    return {
      status: "error",
      message:
        "Une erreur est survenue lors de l'envoi. Vous pouvez nous écrire directement à Propreeclat@gmail.com.",
    };
  }

  return {
    status: "success",
    message: "Merci ! Votre demande a bien été envoyée, nous vous répondrons rapidement.",
  };
}
