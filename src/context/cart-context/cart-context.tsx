// CartContext.ts
import { createContext, useContext } from "react";
import type { Item } from "../../constants";

interface CartContextType {
  items: Item[];
  addToCart: (item: Item) => void;
  removeOne:(id:number,one?:number)=>void,
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
