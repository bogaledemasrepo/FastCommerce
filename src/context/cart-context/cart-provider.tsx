// CartProvider.tsx
import { useState, type ReactNode } from "react";
import { CartContext } from "./cart-context";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);

  const addToCart = (item: string) => {
    setItems((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
