"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

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

  // Envoi de la demande à brancher sur un service d'emailing (ex: Resend) une fois les identifiants disponibles.
  console.log("Nouvelle demande de contact Propre Éclat:", {
    name,
    email,
    phone,
    city,
    postalCode,
    message,
  });

  return {
    status: "success",
    message: "Merci ! Votre demande a bien été envoyée, nous vous répondrons rapidement.",
  };
}
