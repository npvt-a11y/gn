"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  size: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  addItem: (size: string) => void;
  updateQuantity: (size: string, quantity: number) => void;
  removeItem: (size: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "gilgit-naturals-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved) as CartItem[]);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, loaded]);

  const value = useMemo(
    () => ({
      items,
      itemCount: items.reduce((total, item) => total + item.quantity, 0),
      addItem: (size: string) =>
        setItems((current) => {
          const existing = current.find((item) => item.size === size);
          if (existing) {
            return current.map((item) =>
              item.size === size
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          }
          return [...current, { size, quantity: 1 }];
        }),
      updateQuantity: (size: string, quantity: number) =>
        setItems((current) =>
          quantity > 0
            ? current.map((item) =>
                item.size === size ? { ...item, quantity } : item
              )
            : current.filter((item) => item.size !== size)
        ),
      removeItem: (size: string) =>
        setItems((current) => current.filter((item) => item.size !== size)),
      clearCart: () => setItems([]),
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
