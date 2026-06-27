import { Link } from "react-router";
import { useCart } from "../context/cart-context";

function CheckoutPage() {
  const { items } = useCart();
  return (
    <div className="gap-2">
      {items.map((item) => (
        <Link to="/detail" state={{ product: item }} key={item.id}>
          <div className="p-4 my-2 border border-gray-300 rounded-md">{item.title} #{item.quantity}</div></Link>
      ))}
    </div>
  );
}

export default CheckoutPage;
