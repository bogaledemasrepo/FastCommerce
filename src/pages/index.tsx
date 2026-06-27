import { useEffect, useState } from "react";
import ProductCard from "../components/product-card";
import ProductSkeleton from "../components/product-skeleton";
import Filter from "../components/filter";
import { data, type Item } from "../constants";
const API_URL = ""
function HomePage() {
  const [loading, setLoading] = useState(true)
  const [productList, setProductList] = useState<Item[]>([])

  const getProducts = () => {
    // setLoading(true)
    fetch(API_URL)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        setProductList(response)
      }).catch(err => console.log(err))
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    // (() => {
    //   return getProducts()
    // })();
    getProducts()
  }, [])


  return (<><Filter />
    <div className="grid grid-cols-1 min-[440px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full">
      {loading ? [1, 2, 3, 4, 5].map((item) => (
        <ProductSkeleton key={item} />
      )) : data.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
      {productList.length}
    </div>
  </>
  );
}

export default HomePage;