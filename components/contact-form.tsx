"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  const resolvedEndpoint = formEndpoint ?? (formId ? `https://formspree.io/f/${formId}` : "");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!resolvedEndpoint) {
      setIsSubmitted(false);
      setErrorMessage("Form endpoint is not configured. Set NEXT_PUBLIC_FORMSPREE_ENDPOINT or NEXT_PUBLIC_FORMSPREE_FORM_ID.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setIsSubmitted(false);
    setErrorMessage(null);

    try {
      const response = await fetch(resolvedEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (!response.ok) {
        setErrorMessage("Unable to submit right now. Please try again in a moment.");
        return;
      }

      form.reset();
      setIsSubmitted(true);
    } catch {
      setErrorMessage("A network error occurred while submitting your request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-panel">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm text-slate">
          Full Name
          <input
            name="name"
            required
            type="text"
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-navy outline-none ring-teal/30 transition focus:ring"
          />
        </label>

        <label className="text-sm text-slate">
          Work Email
          <input
            name="email"
            required
            type="email"
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-navy outline-none ring-teal/30 transition focus:ring"
          />
        </label>

        <label className="text-sm text-slate">
          Organization
          <input
            name="organization"
            type="text"
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-navy outline-none ring-teal/30 transition focus:ring"
          />
        </label>

        <label className="text-sm text-slate">
          Service Interest
          <select
            name="serviceInterest"
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-navy outline-none ring-teal/30 transition focus:ring"
          >
            <option>Strategic Advisory</option>
            <option>Program Modernization</option>
            <option>Acquisition Support</option>
            <option>Data and Performance</option>
            <option>Mission Support Services</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block text-sm text-slate">
        Consultation Goals
        <textarea
          name="consultationGoals"
          required
          rows={5}
          className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-navy outline-none ring-teal/30 transition focus:ring"
          placeholder="Describe your agency challenge, timeline, and desired outcomes."
        />
      </label>

      <input type="hidden" name="_subject" value="New consultation request from priceconsultingllc.com" />

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#102a50]"
      >
        {isSubmitting ? "Submitting..." : "Request Consultation"}
      </button>

      {isSubmitted ? (
        <p className="mt-4 rounded-lg border border-teal/30 bg-teal/10 px-4 py-3 text-sm text-teal">
          Thank you. A member of our advisory team will respond within one business day.
        </p>
      ) : null}

      {errorMessage ? (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{errorMessage}</p>
      ) : null}
    </form>
  );
}