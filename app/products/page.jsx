import Link from "next/link";
import ProductCard from "../components/ProductCard";
import Breadcrumbs from "../components/Breadcrumbs";

const PRODUCTS_API_URL = "https://dummyjson.com/products";

async function fetchProducts(limit, skip) {
  const res = await fetch(`${PRODUCTS_API_URL}?limit=${limit}&skip=${skip}`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

const ProductsPage = async ({ searchParams }) => {
  const limit = parseInt(searchParams.limit) || 12;
  const skip = parseInt(searchParams.skip) || 0;

  const { products, total } = await fetchProducts(limit, skip);

  const hasNextPage = skip + limit < total;
  const hasPreviousPage = skip > 0;

  return (
    <div className="lg:col-span-9">
      <div className="my-4">
        <Breadcrumbs />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        {hasPreviousPage && (
          <Link href={`?limit=${limit}&skip=${skip - limit}`}>
            <button
              className="border-2 border-gray-900 rounded-md text-md px-2
            hover:bg-gray-900 hover:text-neutral-200"
            >
              Previous Page
            </button>
          </Link>
        )}
        {hasNextPage && (
          <Link href={`?limit=${limit}&skip=${skip + limit}`}>
            <button
              className="border-2 border-gray-900 rounded-md text-md px-2
            hover:bg-gray-900 hover:text-neutral-200"
            >
              Next Page
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
