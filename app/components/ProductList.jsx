"use client";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductList = ({ products, departments }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-2">
      <div className="relative lg:col-span-3 bg-gray-100 p-2">
        <div className="lg:fixed">
          <h2 className="hidden lg:block text-xl font-bold mb-4">
            Filter Options
          </h2>
          {/* Add your sort options here */}
          <button
            className="lg:hidden w-full mb-2 p-2 bg-blue-500 text-white rounded"
            onClick={toggleFilterVisibility}
          >
            {isFilterVisible ? "Hide Filters" : "Filter"}
          </button>
          <div className={`lg:block ${isFilterVisible ? "block" : "hidden"}`}>
            <ul>
              <li>
                <h3 className="text-base font-semibold mb-2">Departments</h3>
                <ul className="h-72 overflow-y-scroll border-2 border-gray-900 border-opacity-50 p-2">
                  {departments?.map((department) => (
                    <li key={department.id} className="mb-2">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-gray-600"
                        />
                        <span className="ml-2 text-gray-700">
                          {department.name}
                        </span>
                      </label>
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
          </div>
        </div>
      </div>
      <div className="lg:col-span-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => {
            const departmentName = departments.find(
              (department) => department.id === product.categoryId
            )?.name;
            return (
              <ProductCard
                key={product.id}
                product={product}
                departmentName={departmentName}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
