"use client";

import { useState, type FormEvent } from "react";
import { Button } from "../ui/Button";

type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea" | "select";
  options?: string[];
  placeholder?: string;
};

type FormProps = {
  fields: Field[];
  submitLabel: string;
  successTitle?: string;
  successMessage?: string;
  submissionUrl?: string;
};

const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxLpE4Z8ldIznmYRvpOO2a4TK8oZQuu6G3TodkN-CLkPe1E5T7JtHkZoAC9cqSjnE0T-g/exec";

export function ContactForm({
  fields,
  submitLabel,
  successTitle = "Inquiry received",
  successMessage = "Thank you. Your message has been noted. We will respond using the contact details you provided. (Form submission is a demonstration success state — connect to your backend or form service to go live.)",
  submissionUrl = GOOGLE_APPS_SCRIPT_URL,
}: FormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setSubmissionError("");

    try {
      const form = e.currentTarget;
      await fetch(submissionUrl, {
        method: "POST",
        body: new FormData(form),
      });
      setSubmitted(true);
    } catch {
      setSubmissionError(
        "We could not send your inquiry. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-gold/30 bg-white p-10 text-center md:p-14">
        <p className="eyebrow mb-4">Thank you</p>
        <h3 className="font-serif text-3xl text-forest">{successTitle}</h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-charcoal-muted">
          {successMessage}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 text-xs tracking-[0.12em] text-forest uppercase underline underline-offset-4"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => {
          const fullWidth =
            field.as === "textarea" ||
            field.name === "message" ||
            field.name === "requirements" ||
            field.name === "additional";

          return (
            <div
              key={field.name}
              className={fullWidth ? "md:col-span-2" : undefined}
            >
              <label
                htmlFor={field.name}
                className="mb-2 block text-[11px] tracking-[0.12em] text-charcoal-muted uppercase"
              >
                {field.label}
                {field.required && <span className="text-gold"> *</span>}
              </label>
              {field.as === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  rows={5}
                  placeholder={field.placeholder}
                  className="input-field resize-y"
                />
              ) : field.as === "select" ? (
                <select
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  className="input-field"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type || "text"}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="input-field"
                />
              )}
            </div>
          );
        })}
      </div>
      {submissionError && (
        <p role="alert" className="text-sm text-red-700">
          {submissionError}
        </p>
      )}
      <div className="pt-2">
        <Button type="submit" variant="primary" disabled={submitting}>
          {submitting ? "Sending…" : submitLabel}
        </Button>
      </div>
    </form>
  );
}

export const wholesaleFields: Field[] = [
  { name: "fullName", label: "Full Name", required: true },
  { name: "businessName", label: "Business Name", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true },
  { name: "whatsapp", label: "WhatsApp", type: "tel" },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "city", label: "City", required: true },
  { name: "country", label: "Country", placeholder: "Pakistan" },
  {
    name: "businessType",
    label: "Business Type",
    as: "select",
    required: true,
    options: [
      "Retailer",
      "Reseller",
      "Reseller",
      "Gym",
      "Wellness Business",
      "Online Seller",
      "Private Label Brand",
      "Other",
    ],
  },
  { name: "quantity", label: "Estimated Quantity", required: true },
  {
    name: "packaging",
    label: "Preferred Packaging",
    as: "select",
    options: ["Jars", "Bulk containers", "Flexible / discuss", "Private label"],
  },
  {
    name: "privateLabel",
    label: "Private Label Required?",
    as: "select",
    options: ["No", "Yes", "Interested — discuss"],
  },
  {
    name: "additional",
    label: "Additional Requirements",
    as: "textarea",
    placeholder: "Tell us about your wholesale needs…",
  },
];

export const contactFields: Field[] = [
  { name: "name", label: "Name", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "subject", label: "Subject", required: true },
  {
    name: "message",
    label: "Message",
    as: "textarea",
    required: true,
    placeholder: "How can we help?",
  },
];

export const inquiryFields: Field[] = [
  { name: "name", label: "Name", required: true },
  { name: "businessName", label: "Business Name" },
  { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "city", label: "City", required: true },
  {
    name: "businessType",
    label: "Business Type",
    as: "select",
    options: [
      "Retailer",
      "Reseller",
      "Pharmacy",
      "Gym",
      "Wellness Business",
      "Online Seller",
      "Private Label Brand",
      "Other",
    ],
  },
  { name: "quantity", label: "Required Quantity" },
  {
    name: "packaging",
    label: "Packaging Preference",
    as: "select",
    options: ["Jars", "Bulk", "Discuss"],
  },
  {
    name: "message",
    label: "Message",
    as: "textarea",
    placeholder: "Share any details about your wholesale inquiry…",
  },
];
