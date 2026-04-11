import { useCart } from "../context/cart-context";

function CheckoutPage() {
  const { items } = useCart();
  return (
    <div className="gap-2">
      {items.map((item) => (
        <div className="p-4 my-2 border border-gray-300 rounded-md">{item}</div>
      ))}
    </div>
  );
}

export default CheckoutPage;
