"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/SectionHeader";
import { useCart } from "@/components/cart/CartProvider";
import { IMAGES } from "@/lib/constants";
import { formatPKR, PRODUCT_PRICES } from "@/lib/store";

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + PRODUCT_PRICES[item.size] * item.quantity,
    0
  );

  return (
    <>
      <PageHero
        eyebrow="Your Order"
        title="Shopping cart"
        description="Review your selected pack sizes, then send the complete order to Gilgit Naturals on WhatsApp for price and delivery confirmation."
      />
      <section className="bg-cream-dark/30">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          {items.length === 0 ? (
            <div className="mx-auto max-w-3xl border border-border bg-white p-10 text-center shadow-[0_20px_60px_rgba(26,58,42,0.06)] md:p-16">
              <div className="mx-auto flex h-20 w-20 items-center justify-center border border-gold/50 bg-cream text-3xl text-gold">♡</div>
              <p className="eyebrow mt-8">Your selection</p>
              <h2 className="mt-3 font-serif text-4xl text-forest">Your cart is waiting</h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-charcoal-muted">
                Choose your preferred Shilajit resin pack and return here when you are ready to confirm your order.
              </p>
              <Button href="/our-shilajit" className="mt-8">Explore pack sizes</Button>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
              <div className="overflow-hidden border border-border bg-white shadow-[0_20px_60px_rgba(26,58,42,0.05)]">
                <div className="flex items-center justify-between border-b border-border px-6 py-5 md:px-8">
                  <div>
                    <p className="eyebrow">Selected products</p>
                    <h2 className="mt-2 font-serif text-2xl text-forest">Your Shilajit order</h2>
                  </div>
                  <span className="text-xs tracking-[0.08em] text-charcoal-muted uppercase">{itemCount} items</span>
                </div>
                <div className="divide-y divide-border">
                  {items.map((item) => (
                    <div key={item.size} className="flex gap-4 px-6 py-6 md:px-8">
                      <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-cream-dark">
                        <Image src={IMAGES.product} alt="" fill className="object-cover" sizes="64px" />
                      </div>
                      <div className="flex flex-1 items-center justify-between gap-5">
                        <div>
                          <p className="font-serif text-2xl text-forest">{item.size} Shilajit Resin</p>
                          <button type="button" onClick={() => removeItem(item.size)} className="mt-2 text-xs tracking-[0.08em] text-charcoal-muted uppercase underline underline-offset-4 hover:text-forest">
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
                              <option key={quantity} value={quantity}>{quantity}</option>
                            ))}
                          </select>
                        </label>
                        <span className="hidden text-sm font-medium text-forest sm:block">
                          {formatPKR(PRODUCT_PRICES[item.size] * item.quantity)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <aside className="h-fit border border-forest bg-forest p-7 text-cream shadow-[0_20px_60px_rgba(26,58,42,0.14)] md:p-8 lg:sticky lg:top-28">
                <p className="text-[11px] tracking-[0.14em] text-gold uppercase">Ready when you are</p>
                <h2 className="mt-3 font-serif text-3xl">Complete your order</h2>
                <div className="my-6 border-y border-white/15 py-5 text-sm leading-relaxed text-cream/75">
                  <p>Cash on Delivery is available. Delivery is Rs. 200 to Islamabad and Rs. 300 to other cities.</p>
                </div>
                <div className="flex justify-between border-b border-white/15 pb-5 text-sm">
                  <span className="text-cream/70">Subtotal</span>
                  <span>{formatPKR(subtotal)}</span>
                </div>
                <Button href="/checkout" className="mt-2 w-full">Proceed to Checkout</Button>
                <button type="button" onClick={clearCart} className="mt-5 w-full text-xs tracking-[0.08em] text-cream/60 uppercase underline underline-offset-4 hover:text-cream">
                  Clear cart
                </button>
              </aside>
            </div>
          )}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-border pt-7 text-xs tracking-[0.08em] text-charcoal-muted uppercase">
            <span>Gilgit origin</span><span>Sealed packaging</span><span>Personal order support</span>
          </div>
          <p className="mt-7 text-center text-sm text-charcoal-muted">
            Need bulk quantities?{" "}
            <Link href="/wholesale" className="text-forest underline underline-offset-4">View wholesale options</Link>
          </p>
        </div>
      </section>
    </>
  );
}
