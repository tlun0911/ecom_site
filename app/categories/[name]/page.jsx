import ProductCard from "@/app/components/ProductCard";

const CategoryPage = async ({ params }) => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${params.name}`
  );
  const { products } = await res.json();

  function replaceEncodedSpaces(str) {
    return str.replace(/-/g, " ");
  }

  const name = replaceEncodedSpaces(params.name)

  if (products.length === 0) {
    return (
      <div className="container mx-auto lg:w-2/3">
        <h1
          className="text-4xl font-bold text-gray-900 
    mt-4 text-center leading-loose "
        >
          It looks like we don&apost currently have any {name}, check back
          later!
        </h1>
        ;
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h1 className="my-4 text-gray-900 text-4xl font-bold text-center capitalize">
        {name}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 mb-4">
        {products?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
