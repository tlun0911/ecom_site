import React from "react";

const FilterListSkeleton = () => {
  return (
    <div className="relative lg:col-span-3 bg-gray-100 p-2 lg:min-h-screen animate-pulse">
      <div className="lg:fixed text-wrap">
        <h2 className="hidden lg:block text-xl font-bold mb-4 bg-gray-300 rounded h-6 w-1/3"></h2>
        <h3 className="text-lg font-semibold mb-4 break-normal bg-gray-300 rounded h-5 w-2/3"></h3>

        <div className="lg:hidden w-full mb-2 p-2 bg-gray-300 rounded h-10"></div>
        <div className="lg:block">
          <ul className="space-y-4 text-lg font-medium">
            <li>
              <div className="px-2 border-2 border-gray-300 rounded bg-gray-300 h-8 w-2/3"></div>
            </li>
            <li>
              <div className="px-2 border-2 border-gray-300 rounded bg-gray-300 h-8 w-2/3"></div>
            </li>
            <li>
              <div className="px-2 border-2 border-gray-300 rounded bg-gray-300 h-8 w-2/3"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterListSkeleton;
