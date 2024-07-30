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
    <div className="max-w-sm mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg bg-gray-100">
      <div className="relative">
        <Image
          width={400}
          height={400}
          src={imgUrl}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcu3FjPQAGsgKQ92yjQAAAAABJRU5ErkJggg=="
          placeholder="blur"
          alt="Product"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex text-gray-900 justify-between items-center">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        </div>
        <p className="text-gray-900 text-sm mb-4">
          from <span className="font-medium">{product.company}</span>
        </p>
        <p className="text-gray-900 text-sm mb-4">
          Department: {product.department}
        </p>
        <p className="text-gray-900 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">${product.price}</span>
          <Link
            type="button"
            className="bg-white border-2 border-gray-900 hover:bg-gray-900 text-gray-900 hover:text-white font-bold py-2 px-4 rounded"
            href={`/products/${product.id}`}
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
