import { Link } from "react-router";
import { useCart } from "../context/cart-context";
import EmptyCart from "../components/empity-cart";

function CheckoutPage() {
  const { items } = useCart();

  return (
    <div className="gap-2">
      {!items.length && <Link to={"/"}><EmptyCart onStartShopping={() => { }} /></Link>}
      {items.map((item) => (
        <Link to="/detail" state={{ product: item }} key={item.id}>
          <div className="p-4 my-2 border border-gray-300 rounded-md">{item.name} #{item.quantity}</div></Link>
      ))}
    </div>
  );
}

export default CheckoutPage;
