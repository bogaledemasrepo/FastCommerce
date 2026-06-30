import { Link } from "react-router";
import { useCart } from "../context/cart-context";
import type { Item } from "../constants";

function ProductCard({ item }: { item: Item }) {
  const { addToCart } = useCart();
  
  return (
    <Link
      to="/detail" state={{ product: item }}
      // REMOVED the complex w-[calc(...)] classes. Added w-full so it spans the grid column perfectly.
      className="border border-neutral-500/50 hover:border-blue-500 duration-200 rounded-md h-82 flex flex-col relative bg-base-100 text-base-content w-full max-w-[320px] mx-auto justify-self-center"
    >
      {/* 1. Constrained Image Container Wrapper */}
      <div className="w-full h-48 min-h-48 overflow-hidden bg-base-200 rounded-t-md relative flex items-center justify-center p-4">
        <img 
          className="w-full h-full object-center hover:scale-110 transition duration-500 overflow-hidden"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt={`Product ${item.title}`} 
        />
      </div>

      {/* 2. Text content layout wrapper */}
      <div className="p-3 flex-1 flex flex-col mb-16">
        <h3 className="font-semibold text-sm truncate">#{item.title}</h3>
        <p className="text-xs text-neutral-500 mt-1 truncate">{item.descritpion}</p>
        <h3 className="font-semibold text-sm">$ {item.price}</h3>
      </div>

      {/* 3. Action Button Footer Container */}
      <button
        onClick={(e) => {
          e.preventDefault();
          addToCart(item);
        }}
        className="flex-1 sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-medium text-base rounded-lg transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        // className="p-2 border border-blue-300 hover:bg-blue-500 transition duration-200 hover:text-white rounded-md absolute left-2 right-2 bottom-2 flex"
      >
        <span className="w-full text-center font-medium text-sm">
          Add to cart
        </span>
      </button>
    </Link>
  );
}

export default ProductCard;