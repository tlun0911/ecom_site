"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { randomImage } from "../api/helpers";

const ProductCard = ({ product }) => {
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    setImgUrl(randomImage());
  }, []);

  return (
    <div className="flex flex-col h-full rounded-md overflow-hidden shadow-md hover:shadow-lg bg-gray-100">
      <div className="relative pb-48 overflow-hidden">
        <Image
          src={imgUrl}
          alt="Product"
          width={400}
          height={400}
          className="object-cover absolute h-full w-full"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="h-full flex flex-col text-gray-900 flex-grow">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-900 text-sm mb-4">
            from <span className="font-medium">{product.company}</span>
          </p>
          <p className="text-gray-900 text-sm mb-4">
            Department: {product.department}
          </p>
          <p className="text-gray-900 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-self-end items-center justify-between mt-auto">
            <p className="font-bold text-lg">${product.price}</p>
            <Link href={`/products/${product.id}`}>
              <button
                type="button"
                className="bg-white border-2 border-gray-900 hover:bg-gray-900 text-gray-900 hover:text-white font-bold py-2 px-4 rounded"
              >
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
