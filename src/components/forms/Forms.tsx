```tsx
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
};

export function ContactForm({
  fields,
  submitLabel,
  successTitle = "Inquiry received",
  successMessage = "Thank you. Your message has been received. We will respond using the contact details you provided.",
}: FormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSending(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "YOUR_NEW_ACCESS_KEY");
    formData.append(
      "subject",
      "New Website Inquiry - Gilgit Naturals"
    );
    formData.append(
      "from_name",
      "Gilgit Naturals Website"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(
          data.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch {
      setError(
        "Unable to send your request. Please check your internet connection and try again."
      );
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-gold/30 bg-white p-10 text-center md:p-14">
        <p className="eyebrow mb-4">
          Thank you
        </p>

        <h3 className="font-serif text-3xl text-forest">
          {successTitle}
        </h3>

        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-charcoal-muted">
          {successMessage}
        </p>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setError("");
          }}
          className="mt-8 text-xs tracking-[0.12em] text-forest uppercase underline underline-offset-4"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
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
              className={
                fullWidth
                  ? "md:col-span-2"
                  : undefined
              }
            >
              <label
                htmlFor={field.name}
                className="mb-2 block text-[11px] tracking-[0.12em] text-charcoal-muted uppercase"
              >
                {field.label}

                {field.required && (
                  <span className="text-gold">
                    {" "}
                    *
                  </span>
                )}
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
                    <option
                      key={opt}
                      value={opt}
                    >
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={
                    field.type || "text"
                  }
                  required={field.required}
                  placeholder={
                    field.placeholder
                  }
                  className="input-field"
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="pt-2">
        {error && (
          <p className="mb-4 text-sm text-red-600">
            {error}
          </p>
        )}

        <Button
          type="submit"
          variant="primary"
          disabled={sending}
        >
          {sending
            ? "Sending..."
            : submitLabel}
        </Button>
      </div>
    </form>
  );
}

export const wholesaleFields: Field[] = [
  {
    name: "fullName",
    label: "Full Name",
    required: true,
  },
  {
    name: "businessName",
    label: "Business Name",
    required: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    required: true,
  },
  {
    name: "whatsapp",
    label: "WhatsApp",
    type: "tel",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
  },
  {
    name: "city",
    label: "City",
    required: true,
  },
  {
    name: "country",
    label: "Country",
    placeholder: "Pakistan",
  },
  {
    name: "businessType",
    label: "Business Type",
    as: "select",
    required: true,
    options: [
      "Retailer",
      "Reseller",
      "Gym",
      "Wellness Business",
      "Online Seller",
      "Private Label Brand",
      "Other",
    ],
  },
  {
    name: "quantity",
    label: "Estimated Quantity",
    required: true,
  },
  {
    name: "packaging",
    label: "Preferred Packaging",
    as: "select",
    options: [
      "Jars",
      "Bulk containers",
      "Flexible / discuss",
      "Private label",
    ],
  },
  {
    name: "privateLabel",
    label: "Private Label Required?",
    as: "select",
    options: [
      "No",
      "Yes",
      "Interested — discuss",
    ],
  },
  {
    name: "additional",
    label: "Additional Requirements",
    as: "textarea",
    placeholder:
      "Tell us about your wholesale needs…",
  },
];

export const contactFields: Field[] = [
  {
    name: "name",
    label: "Name",
    required: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
  },
  {
    name: "subject",
    label: "Subject",
    required: true,
  },
  {
    name: "message",
    label: "Message",
    as: "textarea",
    required: true,
    placeholder:
      "How can we help?",
  },
];

export const inquiryFields: Field[] = [
  {
    name: "name",
    label: "Name",
    required: true,
  },
  {
    name: "businessName",
    label: "Business Name",
  },
  {
    name: "phone",
    label: "Phone / WhatsApp",
    type: "tel",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
  },
  {
    name: "city",
    label: "City",
    required: true,
  },
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
  {
    name: "quantity",
    label: "Required Quantity",
  },
  {
    name: "packaging",
    label: "Packaging Preference",
    as: "select",
    options: [
      "Jars",
      "Bulk",
      "Discuss",
    ],
  },
  {
    name: "message",
    label: "Message",
    as: "textarea",
    placeholder:
      "Share any details about your wholesale inquiry…",
  },
];
```
