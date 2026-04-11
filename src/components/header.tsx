import { Link } from "react-router";
import { useCart } from "../context/cart-context";

function Header() {
  const { items } = useCart();
  return (
    <div className="border border-gray-300 rounded-md p-4 flex justify-between mb-2">
      <Link to={"/"}>
        <h1 className="font-bold">FC</h1>
      </Link>
      <nav className="flex gap-3">
        <Link to={"/"}>Login</Link>
        <Link to={"/checkout"}>check ({items.length})</Link>
        <Link to={"/"}>Login</Link>
      </nav>
    </div>
  );
}

export default Header;
