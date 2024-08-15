import React from "react";
import Link from "next/link";

const CategoriesPage = async () => {
  const res = await fetch("https://dummyjson.com/products/categories");
  const categoryList = await res.json();

  function replaceSpaces(str) {
    return str.replace(/ /g, "-");
  }

  return (
    <div className="container mx-auto">
      <h1 className="mt-4 text-4xl font-bold text-center">Categories</h1>
      <div className="grid lg:grid-cols-2 gap-4 my-4 mx-8">
        {categoryList.map((category) => (
          <Link href={`/categories/${replaceSpaces(category.name)}`} key={category.name}>
            <div className="bg-white p-4 pl-10
            rounded-lg shadow-md hover:shadow-xl">
              <h2 className="text-xl text-gray-900 font-bold">{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
