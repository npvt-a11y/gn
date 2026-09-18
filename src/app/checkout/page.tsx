"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/SectionHeader";
import { useCart } from "@/components/cart/CartProvider";
import { IMAGES } from "@/lib/constants";
import {
  DELIVERY_CHARGES,
  formatPKR,
  getDeliveryCharge,
  ORDER_SUBMISSION_URL,
  PRODUCT_PRICES,
} from "@/lib/store";

const phonePattern = /^(?:03\d{9}|\+923\d{9})$/;

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");
  const [city, setCity] = useState("");

  const subtotal = items.reduce(
    (sum, item) => sum + (PRODUCT_PRICES[item.size] || 0) * item.quantity,
    0
  );
  const delivery = getDeliveryCharge(city);
  const total = subtotal + delivery;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get("phone") || "").replace(/[\s-]/g, "");
    if (!phonePattern.test(phone)) {
      setError("Enter a valid Pakistani number, such as 03XXXXXXXXX or +923XXXXXXXXX.");
      return;
    }
    if (!items.length) {
      setError("Your cart is empty. Add a product before checking out.");
      return;
    }

    setSubmitting(true);
    const reference = `GN-${Date.now().toString(36).toUpperCase()}`;
    const itemSummary = items
      .map(
        (item) =>
          `${item.size} Shilajit Resin x ${item.quantity} @ ${formatPKR(PRODUCT_PRICES[item.size])}`
      )
      .join("\n");
    data.set("fullName", String(data.get("fullName") || ""));
    data.set("phone", phone);
    data.set("city", city);
    data.set("quantity", String(items.reduce((sum, item) => sum + item.quantity, 0)));
    data.set("additional", `Order ID: ${reference}\nPayment: Cash on Delivery\nItems:\n${itemSummary}\nSubtotal: ${formatPKR(subtotal)}\nDelivery: ${formatPKR(delivery)}\nTotal: ${formatPKR(total)}\nAddress: ${data.get("address")}\nPostal code: ${data.get("postalCode")}`);
    data.set("orderId", reference);
    data.set("orderStatus", "pending");
    data.set("paymentStatus", "unpaid");

    try {
      await fetch(ORDER_SUBMISSION_URL, { method: "POST", mode: "no-cors", body: data });
      clearCart();
      setOrderId(reference);
    } catch {
      setError("We could not submit your order. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (orderId) {
    return (
      <>
        <PageHero eyebrow="Order received" title="Order Confirmed" description="Thank you for your order. We have received your Cash on Delivery request and will contact you regarding your order." />
        <section className="mx-auto max-w-2xl px-6 py-16 text-center lg:px-8 lg:py-24">
          <div className="border border-gold/40 bg-white p-8 md:p-12">
            <p className="eyebrow">Order reference</p>
            <p className="mt-3 font-serif text-3xl text-forest">{orderId}</p>
            <p className="mt-6 text-sm leading-relaxed text-charcoal-muted">Payment method: Cash on Delivery. Please keep your phone available so our team can confirm the delivery details.</p>
            <Button href="/our-shilajit" className="mt-8">Continue Shopping</Button>
          </div>
        </section>
      </>
    );
  }

  if (!items.length) {
    return (
      <>
        <PageHero
          eyebrow="Checkout"
          title="Your cart is empty"
          description="Add a Shilajit pack before continuing to checkout."
        />
        <section className="mx-auto max-w-2xl px-6 py-16 text-center lg:px-8 lg:py-24">
          <Button href="/our-shilajit">Continue Shopping</Button>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero eyebrow="Secure order" title="Checkout" description="Complete your details below. Your order will be recorded for Cash on Delivery." />
      <section className="bg-cream-dark/30">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1fr_0.75fr] lg:px-8 lg:py-24">
          <form onSubmit={handleSubmit} className="border border-border bg-white p-7 md:p-10">
            <p className="eyebrow">Delivery details</p>
            <h2 className="mt-3 font-serif text-3xl text-forest">Where should we deliver?</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                ["fullName", "Full Name", "text", true],
                ["phone", "Phone Number", "tel", true],
                ["email", "Email Address", "email", false],
                ["city", "City", "text", true],
                ["postalCode", "Postal Code", "text", false],
              ].map(([name, label, type, required]) => (
                <label key={name as string} className={name === "email" ? "md:col-span-2" : undefined}>
                  <span className="mb-2 block text-[11px] tracking-[0.12em] text-charcoal-muted uppercase">{label as string}{required ? " *" : ""}</span>
                  <input name={name as string} type={type as string} required={required as boolean} className="input-field" onChange={name === "city" ? (event) => setCity(event.target.value) : undefined} />
                </label>
              ))}
              <label className="md:col-span-2">
                <span className="mb-2 block text-[11px] tracking-[0.12em] text-charcoal-muted uppercase">Delivery Address *</span>
                <textarea name="address" rows={4} required className="input-field resize-y" />
              </label>
            </div>
            <div className="mt-7 border border-gold/40 bg-cream p-5">
              <p className="text-xs font-medium tracking-[0.1em] text-forest uppercase">Payment method</p>
              <p className="mt-3 font-serif text-xl text-forest">Cash on Delivery</p>
              <p className="mt-1 text-sm text-charcoal-muted">Pay when your order is delivered.</p>
            </div>
            {error && <p role="alert" className="mt-5 text-sm text-red-700">{error}</p>}
            <Button type="submit" disabled={submitting || !items.length} className="mt-7 w-full">
              {submitting ? "Placing Order…" : "Place Order"}
            </Button>
          </form>
          <aside className="h-fit border border-forest bg-forest p-7 text-cream md:p-8 lg:sticky lg:top-28">
            <p className="text-[11px] tracking-[0.14em] text-gold uppercase">Order summary</p>
            <h2 className="mt-3 font-serif text-3xl">Your selection</h2>
            <div className="group relative mt-6 h-32 overflow-hidden border border-white/15 bg-forest-light">
              <Image
                src={IMAGES.productPng}
                alt="Gilgit Naturals Shilajit product"
                fill
                className="product-png-breathe object-contain p-4 transition duration-500 ease-out group-hover:scale-110 group-hover:-rotate-2"
                sizes="(max-width: 1024px) 100vw, 320px"
              />
            </div>
            <div className="my-6 divide-y divide-white/15 border-y border-white/15">
              {items.map((item) => (
                <div key={item.size} className="flex justify-between gap-4 py-4 text-sm">
                  <span>{item.size} × {item.quantity}</span>
                  <span>{formatPKR(PRODUCT_PRICES[item.size] * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3 text-sm text-cream/75">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatPKR(subtotal)}</span></div>
              <div className="flex justify-between"><span>Delivery</span><span>{formatPKR(city.trim().toLowerCase() === "islamabad" ? DELIVERY_CHARGES.islamabad : DELIVERY_CHARGES.other)}</span></div>
            </div>
            <div className="mt-6 flex justify-between border-t border-white/15 pt-5 font-serif text-2xl text-cream">
              <span>Total</span><span>{formatPKR(total)}</span>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-cream/55">Delivery is Rs. 200 to Islamabad and Rs. 300 to other cities.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
