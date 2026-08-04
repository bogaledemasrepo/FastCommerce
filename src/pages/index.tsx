import { useEffect, useState } from "react";
import ProductCard from "../components/product-card";
import ProductSkeleton from "../components/product-skeleton";
import Filter from "../components/filter";
import { apiUrl, type Item } from "../constants";
function HomePage() {
  const [loading, setLoading] = useState(true)
  const [productList, setProductList] = useState<Item[]>([])

  const getProducts = () => {
    // setLoading(true)
    fetch(apiUrl + "/products/page?page=0&size=10&sortBy=id&sortDir=asc", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access-token") || ""}`
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log(response)
        setProductList(response.content)
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

  if (productList.length === 0 && !loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="text-lg font-bold">No products found</span>
      </div>
    )
  } 

  return (<><Filter />
    <div className="grid grid-cols-1 min-[440px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full">
      {loading ? [1, 2, 3, 4, 5].map((item) => (
        <ProductSkeleton key={item} />
      )) : productList.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  </>
  );
}

export default HomePage;