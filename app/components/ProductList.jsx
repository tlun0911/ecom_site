import ProductCard from "../components/ProductCard";

const ProductList = async () => {

    if(!data.ok) {
      return <div>Something went wrong fetching the data</div>
    }

    return (
      <div className="lg:col-span-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    );

};

export default ProductList;
