import React from "react";
import ProductCard from "../components/ProductCard";

const FavoritesPage = async () => {
  const API_URL = process.env.API_URL || "http://localhost:3000/api";
  let productsData = await fetch(`${API_URL}/getAllProducts`);
  let departmentsData = await fetch(`${API_URL}/getCategories`);

  if (!productsData.ok || !departmentsData.ok) {
    throw new Error("An error occurred while fetching the data");
  }
  const productsList = await productsData.json();
  const departments = await departmentsData.json();

  const favorites = productsList.filter((product) => product.favorite);

  return (
    <div className="overflow-hidden">
      <h1 className="my-4 text-2xl lg:text-4xl font-bold text-gray-900 text-center">
        Customer Favorites
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {favorites.map((product) => (
          <ProductCard key={`favorites${product.id}`} product={product} departments={departments} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
