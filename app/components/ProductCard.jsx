import Link from "next/link";
import Image from "next/image";
import RatingStars from "./RatingStars";
import getBase64 from "./getBase64";

const ProductCard = async ({ product }) => {

  let availability = product.availabilityStatus;
  let availPlaceholder;

  if (availability === "Out of Stock") {
    availPlaceholder = (
      <span className="text-white bg-red-500 text-center ml-auto border-2 px-1 h-fit rounded-md">
        {availability}
      </span>
    );
  } else if (availability === "Low Stock") {
    availPlaceholder = (
      <span className="text-white ml-auto text-center border-2 bg-yellow-500 px-1 h-fit rounded-md">
        {availability}
      </span>
    );
  } else {
    availPlaceholder = null;
  }

  return (
    <div className="flex flex-col h-full rounded-md overflow-hidden shadow-md hover:shadow-lg bg-gray-100">
      <div className="relative pb-72 overflow-hidden">
        <Image
          src={`/product-images/${product.id}-thumbnail.png`}
          alt="Product"
          quality={50}
          width={300}
          height={300}
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-scale-down object-top w-full h-auto absolute"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="h-full flex flex-col text-gray-900 flex-grow">
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          <div className="flex items-center mb-2">
            <RatingStars rating={product.rating} />
            <span className="ml-2 text-sm text-gray-900">
              {product.rating}/5
            </span>
          </div>
          <div className="flex items-center mb-4">
            <p className="text-gray-900 text-sm">
              Category: <span className="capitalize">{product.category}</span>
            </p>
            {availPlaceholder}
          </div>
          <div className="flex justify-self-end items-center justify-between mt-auto">
            <p className="font-bold text-lg">${product.price}</p>
            <Link href={`/product/${product.id}`}>
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
