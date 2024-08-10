import React from "react";
import ProductCard from "../components/ProductCard";
import { db } from "@/app/lib/db";

const FavoritesPage = async () => {
  const productsList = await db.product.findMany();
  const departments = await db.category.findMany();
  const favorites = productsList.filter((product) => product.favorite);

  return (
    <div className="overflow-hidden">
      <h1 className="my-4 text-2xl lg:text-4xl font-bold text-gray-900 text-center">
        Customer Favorites
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {favorites.map((product) => (
          <ProductCard
            key={`favorites${product.id}`}
            product={product}
            departmentName={
              departments.find(
                (department) => department.id === product.categoryId
              ).name
            }
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
