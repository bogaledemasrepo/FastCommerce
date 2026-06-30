import { useLocation } from "react-router";
import { useCart } from "../context/cart-context";
import CustomButton from "../components/custom-button";

function DetailPage() {
  const location = useLocation();
  const product = location.state?.product;
  const { items, addToCart, removeOne } = useCart();

  const handleAddToCart = () => {
    addToCart(product)
  }
  const handleRemove = () => {
    removeOne(product.id)
  }
  return <div className="w-full grid grid-cols-1 md:grid-cols-2">
    <div className="w-full flex-1 flex flex-col">
      <div className="overflow-hidden rounded-t-md relative flex items-center justify-center p-4">
        <img
          className="flex-1 object-fill hover:scale-105 rounded-sm transition duration-500 overflow-hidden"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt={`Product #`}
        />
      </div>
      <div className="flex gap-1 p-4">
        <div className="flex-1 overflow-hidden rounded-sm relative flex items-center justify-center">
          <img
            className="hover:scale-110 transition duration-500 overflow-hidden"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt={`Product #`}
          />
        </div>
        <div className="flex-1 overflow-hidden rounded-sm relative flex items-center justify-center">
          <img
            className="hover:scale-110 transition duration-500 overflow-hidden"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt={`Product #`}
          />
        </div>
        <div className="flex-1 overflow-hidden rounded-sm relative flex items-center justify-center">
          <img
            className="hover:scale-110 transition duration-500 overflow-hidden"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt={`Product #`}
          />
        </div>
        <div className="flex-1 overflow-hidden bg-base-200 rounded-sm relative flex items-center justify-center">
          <img
            className="hover:scale-110 transition duration-500 overflow-hidden"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt={`Product #`}
          />
        </div>
      </div>
    </div>
    <div className="w-full flex-1 p-2">
      <div className="w-full min-h-104">
        <h1 className="text-2xl font-bold text-neutral-400">{product.title}</h1>
        <p className="text-neutral-400 my-2"># {product.descritpion}</p>
        <p className="text-neutral-400 my-2">Price per item :{product.price}</p>
        <p className="text-neutral-400 my-2">Available Quantity :{product.quantity}</p>
      </div>
      {items.find(item => item.id == product.id)?.quantity ? 
      <div className="w-full flex gap-4">
        <CustomButton onClick={handleRemove} title={"-"} />
        <p className="text-xl font-bold">{items.find(item => item.id == product.id)?.quantity}</p>
        <CustomButton onClick={handleAddToCart} title={"+"} />
      </div> 
      : <div className="w-full flex gap-4">
        <CustomButton onClick={handleAddToCart} title={"+"} />
        </div>
      }
    </div>

  </div>
}

export default DetailPage;
