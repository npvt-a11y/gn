"use client";

import { useState, type FormEvent } from "react";
import { Button } from "../ui/Button";
import { IconCheck } from "../ui/Icons";
import { ORDER_SUBMISSION_URL } from "@/lib/store";

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

const GOOGLE_APPS_SCRIPT_URL = ORDER_SUBMISSION_URL;

export function ContactForm({
  fields,
  submitLabel,
  successTitle = "Inquiry received",
  successMessage = "Thank you for reaching out. Your message has been sent successfully, and our team will follow up using the contact details you provided.",
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
      const formData = new FormData(form);
      const name = formData.get("name");
      const subject = formData.get("subject");
      const message = formData.get("message");

      if (name && !formData.has("fullName")) {
        formData.set("fullName", String(name));
      }
      if ((subject || message) && !formData.has("additional")) {
        formData.set(
          "additional",
          [subject && `Subject: ${subject}`, message]
            .filter(Boolean)
            .join("\n\n")
        );
      }

      await fetch(submissionUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
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
      <div className="border border-gold/30 bg-white p-8 text-center md:p-14">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream">
          <IconCheck className="h-7 w-7" />
        </div>
        <p className="eyebrow mt-6 mb-4">Message sent</p>
        <h3 className="font-serif text-3xl text-forest md:text-4xl">
          {successTitle}
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-charcoal-muted">
          {successMessage}
        </p>
        <div className="mx-auto mt-8 max-w-sm border border-border bg-cream px-5 py-4 text-left">
          <p className="text-[11px] tracking-[0.12em] text-gold uppercase">
            What happens next
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">
            We will review your message and contact you as soon as possible.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 text-xs font-medium tracking-[0.12em] text-forest uppercase underline underline-offset-4 transition-colors hover:text-gold"
        >
          Send another message
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
  { name: "fullName", label: "Name", required: true },
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
    name: "additional",
    label: "Message",
    as: "textarea",
    placeholder: "Share any details about your wholesale inquiry…",
  },
];
