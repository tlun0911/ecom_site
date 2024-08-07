import Link from "next/link";
import Image from "next/image";
import RatingStars from "./RatingStars";

const ProductCard = ({ product, departmentName }) => {
  return (
    <div className="flex flex-col h-full rounded-md overflow-hidden shadow-md hover:shadow-lg bg-gray-100">
      <div className="relative pb-48 overflow-hidden">
        <Image
          src={product.imageURL}
          alt="Product"
          width={400}
          height={400}
          className="object-cover absolute h-full w-full"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAEElEQVR42mP8/w8AAwABgAHBmRkAAAAAElFTkSuQmCC"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="h-full flex flex-col text-gray-900 flex-grow">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <div className="flex items-center mb-2">
            <RatingStars rating={product.rating} />
          </div>
          <p className="text-gray-900 text-sm mb-4">
            Department: {departmentName}
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
