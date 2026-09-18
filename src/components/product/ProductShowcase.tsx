"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/cart/CartProvider";
import { IMAGES } from "@/lib/constants";
import { formatPKR, PRODUCT_PRICES } from "@/lib/store";

const variants = [
  { size: "10g", label: "Trial size", description: "A considered introduction." },
  { size: "20g", label: "Everyday size", description: "A balanced retail format." },
  { size: "50g", label: "Value size", description: "For regular ordering." },
];

const tabs = {
  details: {
    title: "A product with a clear story",
    text: "Gilgit Naturals Shilajit resin is connected to the mountain region of Gilgit in northern Pakistan and presented in clean, sealed retail packaging.",
  },
  use: {
    title: "Use with care",
    text: "Follow the usage guidance supplied with your specific batch. If guidance is not included, contact us before use rather than guessing. This product page is not medical advice.",
  },
  sourcing: {
    title: "From mountain origin to pack",
    text: "Raw material is selected, cleaned, filtered and concentrated to remove insoluble impurities before packaging. Wholesale buyers can contact us for available batch information.",
  },
};

export function ProductShowcase() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("20g");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<keyof typeof tabs>("details");
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const images = [IMAGES.product, IMAGES.productClose, IMAGES.productJar, IMAGES.texture];
  const imageLabels = ["Product pack", "Sealed resin", "Product jar", "Shilajit texture"];
  const selected = variants.find((variant) => variant.size === selectedSize)!;

  function changeImage(direction: -1 | 1) {
    setActiveImage((current) => (current + direction + images.length) % images.length);
  }

  function addToCart() {
    for (let index = 0; index < quantity; index += 1) addItem(selectedSize);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <section className="overflow-hidden bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <div className="relative aspect-square overflow-hidden bg-forest-muted">
              <Image
                src={images[activeImage]}
                alt={`${imageLabels[activeImage]} - Gilgit Naturals Shilajit`}
                fill
                priority
                className="object-cover transition duration-500 ease-out hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <span className="absolute left-5 top-5 bg-gold px-3 py-2 text-[10px] tracking-[0.14em] text-forest uppercase">
                Gilgit origin
              </span>
              <button
                type="button"
                onClick={() => changeImage(-1)}
                aria-label="View previous product image"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-forest/75 text-xl text-cream backdrop-blur-sm transition hover:border-gold hover:bg-forest"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => changeImage(1)}
                aria-label="View next product image"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-forest/75 text-xl text-cream backdrop-blur-sm transition hover:border-gold hover:bg-forest"
              >
                ›
              </button>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-3">
              {images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`relative aspect-square overflow-hidden border transition-colors ${
                    activeImage === index ? "border-gold" : "border-transparent"
                  }`}
                  aria-label={`View ${imageLabels[index]}`}
                  aria-current={activeImage === index ? "true" : undefined}
                >
                  <Image src={image} alt="" fill className="object-cover" sizes="20vw" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.3em] text-gold uppercase">
              Premium resin
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] md:text-6xl">
              Gilgit Shilajit
              <br />
              <em className="text-gold-light">Resin</em>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/70">
              Carefully handled Shilajit resin in a sealed, retail-ready format.
              Select a size, choose your quantity, and add it to your cart before
              confirming the order at checkout.
            </p>

            <div className="mt-8 border-y border-white/15 py-6">
              <p className="text-[10px] tracking-[0.2em] text-cream/50 uppercase">
                Select pack size
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {variants.map((variant) => (
                  <button
                    key={variant.size}
                    type="button"
                    onClick={() => setSelectedSize(variant.size)}
                    className={`relative border p-3 text-left transition-colors ${
                      selectedSize === variant.size
                        ? "border-gold bg-forest-muted"
                        : "border-white/15 hover:border-gold/60"
                    }`}
                  >
                    <span className="block font-serif text-2xl">{variant.size}</span>
                    <span className="mt-1 block text-[10px] text-cream/50 uppercase">
                      {variant.label} · {formatPKR(PRODUCT_PRICES[variant.size])}
                    </span>
                  </button>
                ))}
              </div>
              <p className="mt-3 text-xs text-cream/50">{selected.description} · {formatPKR(PRODUCT_PRICES[selectedSize])} per pack</p>
            </div>

            <div className="mt-6 flex items-center gap-5">
              <div className="flex items-center border border-white/20">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="h-11 w-10 text-cream/70 hover:bg-forest-muted">−</button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} className="h-11 w-10 text-cream/70 hover:bg-forest-muted">+</button>
              </div>
              <span className="text-xs tracking-[0.12em] text-cream/50 uppercase">{selectedSize} · {quantity} pack{quantity > 1 ? "s" : ""}</span>
            </div>
            <Button
              type="button"
              variant="gold"
              onClick={addToCart}
              className="!mt-7 !w-full !border-gold !bg-gold !text-forest hover:!border-gold-light hover:!bg-gold-light"
            >
              {added ? "Added to Cart" : "Add to Cart"}
            </Button>
            <p className="mt-3 text-center text-[10px] tracking-[0.14em] text-cream/45 uppercase">
              Cash on Delivery · delivery calculated at checkout
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-white/15 pt-8">
          <div className="flex flex-wrap gap-8 text-[10px] tracking-[0.16em] text-cream/60 uppercase md:justify-center md:gap-16">
            <span>Mountain-region sourcing</span>
            <span>Sealed packaging</span>
            <span>Retail and wholesale supply</span>
            <span>Responsive order support</span>
          </div>
        </div>

        <div className="mt-16 border-t border-white/15 pt-10">
          <div className="flex gap-6 overflow-x-auto border-b border-white/15">
            {(Object.keys(tabs) as (keyof typeof tabs)[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 pb-4 text-xs tracking-[0.16em] uppercase ${
                  activeTab === tab ? "border-b-2 border-gold text-cream" : "text-cream/45"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="max-w-2xl pt-8">
            <h3 className="font-serif text-3xl">{tabs[activeTab].title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-cream/65">{tabs[activeTab].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
