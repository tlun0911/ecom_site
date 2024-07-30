'use client';
import Link from "next/link";
import ProductCard from "../components/ProductCard";

const ProductList = ({ products, categories, page = 1, limit = 10 }) => {
  
  let previous;
  let next;

  if (page > 1 ) {
    previous = (
      <Link href={`products/?page=${page - 1}`}>
        <button className="bg-gray-900 text-white w-40 px-4 py-2 rounded-md">
          Previous Page
        </button>
      </Link>
    );
  } else {
    previous = <div></div>;
  }

  if (products.length < limit) {
    next = <div></div>;
  } else {
    next = (
      <Link href={`products/?page=${page + 1}`}>
        <button className="bg-gray-900 text-white w-40 px-4 py-2 rounded-md">
          Next Page
        </button>
      </Link>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4">
      <aside className="lg:col-span-3 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Sort Options</h2>
        {/* Add your sort options here */}
        <ul>
          <li>
            <h3>Categories</h3>
            <ul>
              {categories?.map((category) => (
                <li key={category}>
                  <button>{category}</button>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <button>Sort by Rating</button>
          </li>
          <li>
            <button>Sort by Name</button>
          </li>
        </ul>
      </aside>
      <main className="lg:col-span-9  content-center">
        <div className="grid lg:grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center space-x-6 mt-6">
          {previous}
          {next}
        </div>
      </main>
    </div>
  );
};

export default ProductList;
