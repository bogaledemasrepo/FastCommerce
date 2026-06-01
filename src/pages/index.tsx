import ProductCard from "../components/product-card";

function HomePage() {
  return (
    // This controls how many cards show per row based on screen width
    <div className="grid grid-cols-1 min-[440px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full">
      {[1, 2, 3, 4, 5].map((item) => (
        <ProductCard key={item} item={item} />
      ))}
    </div>
  );
}

export default HomePage;