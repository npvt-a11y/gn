"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";
import { IconShoppingBag } from "@/components/ui/Icons";

export function CartButton({ light = false }: { light?: boolean }) {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      aria-label={`Shopping cart with ${itemCount} items`}
      className={`relative flex h-10 items-center gap-2 border px-3 text-[0.6875rem] font-medium tracking-[0.08em] uppercase transition-all ${
        light
          ? "border-white/60 text-white hover:border-white hover:bg-white/10"
          : "border-border bg-cream/60 text-forest hover:border-gold hover:bg-white"
      }`}
    >
      <IconShoppingBag aria-hidden="true" className="h-4 w-4" />
      <span className="hidden sm:inline">Cart</span>
      {itemCount > 0 && (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] text-forest">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
