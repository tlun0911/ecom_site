import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="lg:col-span-9">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col h-full rounded-md overflow-hidden shadow-md hover:shadow-lg bg-gray-100 animate-pulse">
          <div className="relative pb-48 overflow-hidden bg-gray-300"></div>
          <div className="p-4 flex flex-col flex-grow">
            <div className="h-full flex flex-col text-gray-900 flex-grow">
              <div className="h-6 bg-gray-300 rounded mb-2"></div>
              <div className="flex items-center mb-2">
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
              <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full rounded-md overflow-hidden shadow-md hover:shadow-lg bg-gray-100 animate-pulse">
          <div className="relative pb-48 overflow-hidden bg-gray-300"></div>
          <div className="p-4 flex flex-col flex-grow">
            <div className="h-full flex flex-col text-gray-900 flex-grow">
              <div className="h-6 bg-gray-300 rounded mb-2"></div>
              <div className="flex items-center mb-2">
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
              <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full rounded-md overflow-hidden shadow-md hover:shadow-lg bg-gray-100 animate-pulse">
          <div className="relative pb-48 overflow-hidden bg-gray-300"></div>
          <div className="p-4 flex flex-col flex-grow">
            <div className="h-full flex flex-col text-gray-900 flex-grow">
              <div className="h-6 bg-gray-300 rounded mb-2"></div>
              <div className="flex items-center mb-2">
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
              <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
