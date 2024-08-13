import ProductCard from "../components/ProductCard";

const ProductList = async () => {
  try {
    const data = await fetch("https://dummyjson.com/products?limit=10");
    const { products } = await data.json();

    return (
      <div className="lg:col-span-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error rendering ProductList:", error);
    return <div>Something went wrong</div>;
  }
};

export default ProductList;
