import ProductCard from "../components/product-card";

function HomePage() {
  return (
    <div className="gap-2 flex flex-wrap">
      {[1, 2, 3, 4, 5].map((item) => (
        <>
          <ProductCard item={item} />
        </>
      ))}
    </div>
  );
}

export default HomePage;
