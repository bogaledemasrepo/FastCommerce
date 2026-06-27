// CartProvider.tsx
import { useState, type ReactNode } from "react";
import { CartContext } from "./cart-context";
import type { Item } from "../../constants";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  const addToCart = (item: Item) => {

    setItems((prev) => {
      const existing = prev.filter(selectedItem => selectedItem.id == item.id)[0];
      if (!existing) {
        return [...prev, {...item,quantity:1}]
      }
      return [...prev.filter(selectedItem => selectedItem.id != item.id), { ...existing, quantity: existing.quantity + 1 }]
    }
    );
  };
  const removeOne = (id: string, one = 1) => {

    if (one != 1) {
      return setItems((prev) => [...prev.filter((item) => item.id != id)])
    }

    return setItems((prev) => {
      let selected = prev.find((item) => item.id == id);
      if (selected && selected.quantity > 1) {
        selected = { ...selected, quantity: selected.quantity - 1 };
        return [...prev.filter((item) => item.id != id), { ...selected }]
      }
      else return [...prev.filter((item) => item.id != id)]
    })
  }
  return (
    <CartContext.Provider value={{ items, addToCart, removeOne }}>
      {children}
    </CartContext.Provider>
  );
}
