"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/SectionHeader";
import { CONTACT } from "@/lib/constants";
import { useCart } from "@/components/cart/CartProvider";

function checkoutLink(items: { size: string; quantity: number }[]) {
  const summary = items
    .map((item) => `- ${item.size} Shilajit Resin: ${item.quantity}`)
    .join("\n");
  const message = `Hello Gilgit Naturals, I would like to place an order:\n${summary}\n\nPlease confirm the total price, delivery charges, availability, and payment details.`;
  return `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart } = useCart();

  return (
    <>
      <PageHero
        eyebrow="Your Order"
        title="Shopping cart"
        description="Review your selected pack sizes, then send the complete order to Gilgit Naturals on WhatsApp for price and delivery confirmation."
      />
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        {items.length === 0 ? (
          <div className="border border-border bg-white p-10 text-center">
            <h2 className="font-serif text-3xl text-forest">Your cart is empty</h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-charcoal-muted">
              Select a Shilajit pack size to begin your order.
            </p>
            <Button href="/our-shilajit" className="mt-7">
              Browse Shilajit
            </Button>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">
            <div className="divide-y divide-border border-y border-border">
              {items.map((item) => (
                <div key={item.size} className="flex items-center justify-between gap-5 py-6">
                  <div>
                    <p className="font-serif text-2xl text-forest">{item.size} Shilajit Resin</p>
                    <button
                      type="button"
                      onClick={() => removeItem(item.size)}
                      className="mt-2 text-xs tracking-[0.08em] text-charcoal-muted uppercase underline underline-offset-4 hover:text-forest"
                    >
                      Remove
                    </button>
                  </div>
                  <label className="flex items-center gap-3 text-xs tracking-[0.08em] text-charcoal-muted uppercase">
                    Qty
                    <select
                      aria-label={`Quantity for ${item.size}`}
                      value={item.quantity}
                      onChange={(event) => updateQuantity(item.size, Number(event.target.value))}
                      className="border border-border bg-cream px-3 py-2 text-sm text-forest"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((quantity) => (
                        <option key={quantity} value={quantity}>
                          {quantity}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              ))}
            </div>
            <aside className="h-fit border border-border bg-cream-dark/40 p-7">
              <p className="eyebrow">Checkout</p>
              <h2 className="mt-3 font-serif text-3xl text-forest">Confirm on WhatsApp</h2>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-muted">
                Pricing and delivery charges are confirmed personally so we can provide the correct total for your location.
              </p>
              <Button href={checkoutLink(items)} className="mt-7 w-full">
                Continue on WhatsApp
              </Button>
              <button
                type="button"
                onClick={clearCart}
                className="mt-4 w-full text-xs tracking-[0.08em] text-charcoal-muted uppercase underline underline-offset-4"
              >
                Clear cart
              </button>
            </aside>
          </div>
        )}
        <p className="mt-10 text-center text-sm text-charcoal-muted">
          Need bulk quantities?{" "}
          <Link href="/wholesale" className="text-forest underline underline-offset-4">
            View wholesale options
          </Link>
        </p>
      </section>
    </>
  );
}
