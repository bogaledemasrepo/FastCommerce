import { Link } from "react-router";
import { useCart } from "../context/cart-context";

function ProductCard({ item }: { item: number }) {
  const { addToCart } = useCart();
  return (
    // <div className="card bg-base-100 max-w-96 shadow-sm">

    // </div>
    <Link
      to={"/detail"}
      className="border card border-gray-300/50 hover:border-blue-500 duration-200 rounded-md h-78 grow min-w-45 max-w-[320px] flex flex-col relative"
    >
      <div className="p-2 w-40 h-40">
        <image href="../assets/hero.png" className="bg-red-500" width={200} height={200}/>
      </div>

      {/* <button
        onClick={(e) => {
          e.preventDefault();
          addToCart("Boo");
        }}
        className="p-2 border border-blue-300 rounded-md absolute left-2 right-2 bottom-2 flex grow"
      >
        Add to cart
      </button> */}
    </Link>
  );
}

export default ProductCard;
