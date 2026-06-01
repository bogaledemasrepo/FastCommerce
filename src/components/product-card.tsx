import { Link } from "react-router";
import { useCart } from "../context/cart-context";

function ProductCard({ item }: { item: number }) {
  const { addToCart } = useCart();
  
  return (
    <Link
      to="/detail"
      // REMOVED the complex w-[calc(...)] classes. Added w-full so it spans the grid column perfectly.
      className="border border-neutral-500/50 hover:border-blue-500 duration-200 rounded-md h-82 flex flex-col relative bg-base-100 text-base-content w-full max-w-[320px] mx-auto justify-self-center"
    >
      {/* 1. Constrained Image Container Wrapper */}
      <div className="w-full h-48 min-h-48 overflow-hidden bg-base-200 rounded-t-md relative flex items-center justify-center p-4">
        <img 
          className="w-full h-full object-center hover:scale-110 transition duration-500 overflow-hidden"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt={`Product ${item}`} 
        />
      </div>

      {/* 2. Text content layout wrapper */}
      <div className="p-3 flex-1 flex flex-col mb-16">
        <h3 className="font-semibold text-sm">Product #{item.toString()}</h3>
        <p className="text-xs text-neutral-500 mt-1">High performance training gear.</p>
        <h3 className="font-semibold text-sm">$ 2000.0</h3>
      </div>

      {/* 3. Action Button Footer Container */}
      <button
        onClick={(e) => {
          e.preventDefault();
          addToCart("Boo");
        }}
        className="p-2 border border-blue-300 hover:bg-blue-500 transition duration-200 hover:text-white rounded-md absolute left-2 right-2 bottom-2 flex"
      >
        <span className="w-full text-center font-medium text-sm">
          Add to cart
        </span>
      </button>
    </Link>
  );
}

export default ProductCard;