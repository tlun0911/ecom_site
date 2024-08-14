import Link from "next/link";
import Image from "next/image";
import RatingStars from "./RatingStars";
import getBase64 from "./getBase64";

const ProductCard = async ({ product }) => {
  const image = await getBase64(product.thumbnail);

  return (
    <div className="flex flex-col h-full rounded-md overflow-hidden shadow-md hover:shadow-lg bg-gray-100">
      <div className="relative pb-72 overflow-hidden">
        <Image
          src={product.thumbnail}
          alt="Product"
          placeholder="blur"
          blurDataURL={image}
          width={300}
          height={300}
          quality={50}
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover absolute w-full"
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
          <p className="text-gray-900 text-sm mb-4">
            Category: <span className="capitalize">{product.category}</span>
          </p>
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
