"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useCart } from "./CartProvider";

export function AddToCartButton({ size }: { size: string }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(size);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <Button type="button" className="mt-5 w-full" onClick={handleAdd}>
      {added ? "Added to Cart" : "Add to Cart"}
    </Button>
  );
}
