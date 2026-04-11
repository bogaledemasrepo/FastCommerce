// CartContext.ts
import { createContext, useContext } from "react";

interface CartContextType {
  items: string[];
  addToCart: (item: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
