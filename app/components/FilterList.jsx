"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

const FilterList = ({ departments }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [filterParams, setFilterParams] = useState({
    sortBy: "rating", // Default sortBy value
    order: "desc", // Default order
  });

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const toggleSortOrder = (sortByParam) => {
    const newOrder = filterParams.order === "asc" ? "desc" : "asc";

    setFilterParams({
      sortBy: sortByParam,
      order: newOrder,
    });

    startTransition(() => {
      const searchParams = new URLSearchParams({
        sortBy: sortByParam,
        order: newOrder,
      });
      router.push(`/products?${searchParams.toString()}`);
    });
  };

  return (
    <div className="relative lg:col-span-3 bg-gray-100 p-2 lg:min-h-screen">
      <div className="lg:fixed text-wrap">
        <h2 className="hidden lg:block text-xl font-bold mb-4">
          Filter Options
        </h2>
        <h3 className=" text-lg font-semibold mb-4 break-normal">
          Sorting by <span className="capitalize">{filterParams.sortBy}</span>:
          <br />
          {filterParams.order === "asc" ? "Low to High" : "High to Low"}
        </h3>
        {/* Add your sort options here */}
        <button
          className="lg:hidden w-full mb-2 p-2 bg-gray-900 text-neutral-200 rounded"
          onClick={toggleFilterVisibility}
        >
          {isFilterVisible ? "Hide Filters" : "Filter"}
        </button>
        <div className={`lg:block ${isFilterVisible ? "block" : "hidden"}`}>
          <ul className="space-y-4 text-lg font-medium">
            {/* <li key="departments">
              <h3 className="text-base font-semibold mb-2">Departments</h3>
              <ul className="h-72 overflow-y-scroll border-2 border-gray-900 border-opacity-50 p-2">
                {departments?.map((department) => (
                  <li key={department.id} className="mb-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span
                        className="ml-2 text-gray-700"
                        key={`span${department.id}`}
                      >
                        {department.name}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </li> */}
            <li key="rating">
              <button
                className="px-2 border-2 border-gray-900 rounded text-gray-900"
                onClick={() => toggleSortOrder("rating")}
              >
                Sort by Rating
              </button>
            </li>
            <li key="name">
              <button
                className="px-2 border-2 border-gray-900 rounded text-gray-900"
                onClick={() => toggleSortOrder("title")}
              >
                Sort by Name
              </button>{" "}
            </li>
            <li key="price">
              <button
                className="px-2 border-2 border-gray-900 rounded text-gray-900"
                onClick={() => toggleSortOrder("price")}
              >
                Sort by Price
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterList;
