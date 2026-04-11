import { Link } from "react-router";
import { useCart } from "../context/cart-context";

function ProductCard({ item }: { item: number }) {
  const { addToCart } = useCart();
  return (
    <Link
      to={"/detail"}
      className="border border-gray-300 rounded-md h-60 grow sm:max-w-[50%] flex flex-col relative"
    >
      <div className="p-4">ProductCard {item}</div>

      <button
        onClick={(e) => {
          e.preventDefault();
          addToCart("Boo");
        }}
        className="p-2 border border-blue-300 rounded-md absolute left-2 right-2 bottom-2 flex grow"
      >
        Add to cart
      </button>
    </Link>
  );
}

export default ProductCard;
