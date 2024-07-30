import React from "react";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../api/helpers";

const AllProductsPage = async () => {
  const products = await getAllProducts();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4">
    <aside className="lg:col-span-3 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Sort Options</h2>
      {/* Add your sort options here */}
      <ul>
        <li><button>Sort by Price</button></li>
        <li><button>Sort by Rating</button></li>
        <li><button>Sort by Name</button></li>
      </ul>
    </aside>
    <main className="lg:col-span-9 grid lg:grid-cols-2 gap-2 content-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  </div>

  );
};

export default AllProductsPage;
