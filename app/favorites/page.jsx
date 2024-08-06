import React from "react";
import ProductCard from "../components/ProductCard";

const FavoritesPage = async () => {
  // const products = await getAllProductsNoLimit();
  // const favorites = products.filter((product) => product.favorite);
  return (
    <div className="overflow-hidden">
      <h1 className="my-4 text-2xl lg:text-4xl font-bold text-gray-900 text-center">
        Customer Favorites
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {/* {favorites.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))} */}
      </div>
    </div>
  );
};

export default FavoritesPage;
