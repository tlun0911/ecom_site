import Link from "next/link";
import ProductCard from "../components/ProductCard";
import Breadcrumbs from "../components/Breadcrumbs";


const PRODUCTS_API_URL = "https://dummyjson.com/products";

async function fetchProducts(limit, skip, sortBy, order) {
  let url = `${PRODUCTS_API_URL}?limit=${limit}&skip=${skip}`;

  // Add sorting logic
  if (sortBy) {
    url += `&sortBy=${sortBy}&order=${order}`;
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

const ProductsPage = async ({ searchParams }) => {
  const limit = parseInt(searchParams.limit) || 36;
  const skip = parseInt(searchParams.skip) || 0;
  const sortBy = searchParams.sortBy || ""; // Default sort by rating
  const order = searchParams.order || ""; // Default order is ascending

  const { products, total } = await fetchProducts(limit, skip, sortBy, order);

  const hasNextPage = skip + limit < total;
  const hasPreviousPage = skip > 0;

  const nextPageUrl = `?limit=${limit}&skip=${skip + limit}&sortBy=${sortBy}&order=${order}`;
  const previousPageUrl = `?limit=${limit}&skip=${skip - limit}&sortBy=${sortBy}&order=${order}`;

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
          <Link href={previousPageUrl}>
            <button
              className="border-2 border-gray-900 rounded-md text-md px-2
            hover:bg-gray-900 hover:text-neutral-200"
            >
              Previous Page
            </button>
          </Link>
        )}
        {hasNextPage && (
          <Link href={nextPageUrl}>
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
