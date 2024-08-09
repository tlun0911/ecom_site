import React from "react";
import ProductCard from "@/app/components/ProductCard";

const DepartmentPage = async ({ params }) => {
  const departmentName = params.name;
  const response = await fetch(
    `http://localhost:3000/api/getCategories/${departmentName}`
  );
  const department = await response.json();

  const products = department.products;

  return (
    <div className="overflow-hidden">
      <h1 className="my-4 text-2xl lg:text-4xl font-bold text-gray-900 text-center">
        {department.name}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {products?.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentPage;
