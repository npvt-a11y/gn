"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export function CartButton({ light = false }: { light?: boolean }) {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      aria-label={`Shopping cart with ${itemCount} items`}
      className={`relative flex items-center gap-2 px-2 py-2 text-[0.6875rem] font-medium tracking-[0.08em] uppercase transition-colors ${
        light ? "text-white hover:text-white/80" : "text-forest hover:text-gold"
      }`}
    >
      <span aria-hidden="true" className="text-base">
        ♡
      </span>
      <span className="hidden sm:inline">Cart</span>
      {itemCount > 0 && (
        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] text-forest">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
