import { useEffect, useState } from "react";
import ProductCard from "../components/product-card";
import ProductSkeleton from "../components/product-skeleton";

function HomePage() {
  const [loading, setLoading] = useState(true)
  async function getProducts() {
    setLoading(true)
    const response = await new Promise((res, rej) => {
      setTimeout(() => {
        return res(true)
        rej()
      }, 2000)
    })
    setLoading(false)
    console.log(response)
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    // This controls how many cards show per row based on screen width
    <div className="grid grid-cols-1 min-[440px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full">
      {loading ? [1, 2, 3, 4, 5].map((item) => (
        <ProductSkeleton key={item} />
      )) : [1, 2, 3, 4, 5].map((item) => (
        <ProductCard key={item} item={item} />
      ))}
    </div>
  );
}

export default HomePage;