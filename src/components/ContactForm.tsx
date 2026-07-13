"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactState } from "@/app/contact/actions";

const initialState: ContactState = { status: "idle", message: "" };

const inputClasses =
  "w-full rounded-lg border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
            Nom complet
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
            Téléphone
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClasses} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-navy">
              Ville
            </label>
            <input id="city" name="city" type="text" required className={inputClasses} />
          </div>
          <div>
            <label htmlFor="postalCode" className="mb-1.5 block text-sm font-medium text-navy">
              Code postal
            </label>
            <input id="postalCode" name="postalCode" type="text" required className={inputClasses} />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
          Votre demande
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Décrivez votre besoin : type de prestation, surface, disponibilités..."
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>

      {state.status !== "idle" && (
        <p
          role="status"
          className={
            state.status === "success"
              ? "rounded-lg bg-brand/10 px-4 py-3 text-sm font-medium text-brand-dark"
              : "rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
          }
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
