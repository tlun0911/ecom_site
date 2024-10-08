import React from "react";
import Image from "next/image";
import AddToCartButton from "@/app/components/AddToCartButton";
import RatingStars from "@/app/components/RatingStars";
import { format } from "date-fns";
import BackButton from "@/app/components/BackButton";
import Link from "next/link";
import fetchProducts from "@/app/lib/fetchProducts";

export async function generateStaticParams() {
  const products = await fetchProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export function ProductImage({id, alt}) {

  return (
    <Image
      src={`/product-images/${id}-0-1.png`}
      alt={alt}
      width={600}
      height={600}
      quality={75}
      sizes="(max-width: 768px) 100vw, 50vw"
      className="border-2 border-gray-900 bg-white rounded-2xl object-fill"
    />
  );
}

const ProductPage = async ({ params }) => {
  const products = await fetchProducts();
  const product = await products.find((p) => p.id.toString() === params.id);


  let in_stock;
  let disabled;

  const reviews = product.reviews;

  if (product.availabilityStatus === "In Stock") {
    in_stock = (
      <span className="text-gray-900 text-sm">
        In stock, {product.stock} units available
      </span>
    );
  } else if (product.availabilityStatus === "Out of Stock") {
    in_stock = (
      <span className="text-red-600 rounded-md text-center text-sm border-2 border-red-600 p-1">
        Out of stock
      </span>
    );
    disabled = true;
  } else {
    in_stock = (
      <span className="text-yellow-500 rounded-md text-center text-sm border-2 border-yellow-500 p-1">
        Limited stock
      </span>
    );
  }


  return (
    <div className="container mx-auto m-4 py-4">
      <div className="flex flex-col items-center justify-center space-y-8">
        <h1 className="text-2xl lg:text-3xl font-bold px-2">
          {product.title}
          {product.brand ? ` by ${product.brand}` : ""}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-4 justify-center">
          <div className="relative">
            <ProductImage id={product.id} alt={product.title} />
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <p className="text-xl font-medium">{product.description}</p>
            <p className="text-xl font-medium">Price: ${product.price}</p>
            <p>
              Category:{"  "}
              <Link
                href={`../categories/${product.category}`}
                className="hover:font-bold"
              >
                <span className="capitalize">{product.category}</span>
              </Link>
            </p>
            {disabled ? (
              <button
                className="hover:bg-gray-600 bg-white text-gray-600
              hover:text-neutral-200 border-2 border-gray-600
              font-bold py-2 px-4 rounded"
                disabled
              >
                Out of Stock
              </button>
            ) : (
              <div className="flex">
                <AddToCartButton productId={product.id} />
              </div>
            )}
            <div className="flex flex-col border-2 border-gray-900 p-2 rounded-md bg-white">
              {in_stock}
              <span className="text-gray-900 text-sm">
                Order now and it{" "}
                <span className="lowercase">{product.shippingInformation}</span>
              </span>
            </div>
            <div className="border-2 border-gray-900 p-4 rounded-md space-y-4">
              <h2 className="text-xl text-gray-900 font-bold">
                Product Dimensions:
              </h2>
              <p className="text-lg text-gray-900">
                {product.dimensions.height}h x {product.dimensions.width}w x{" "}
                {product.dimensions.depth}d inches
              </p>
              <p className="text-lg text-gray-900">
                Weight: {product.weight} lbs
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold">Customer Reviews</h2>
              <div className="flex items-center">
                <RatingStars rating={product.rating} />
                <p className="text-lg ml-4">Rating: {product.rating}/5</p>
              </div>
              {reviews.map((review) => (
                <div
                  key={review.reviewerName}
                  className="flex flex-col border-2 bg-white p-4 border-gray-900 space-y-2 rounded-md"
                >
                  <p className="text-lg font-medium">
                    {'"'}
                    {review.comment}
                    {'"'}
                  </p>
                  <div className="flex flex-col lg:flex-row items-start w-full">
                    <div className="flex flex-col space-y-2 items-baseline">
                      <p className="ml-2 text-lg align-baseline">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="h-5 w-5 pb-1 fill-gray-900 inline mr-3"
                          >
                            <path
                              d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 
                            128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 
                            0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 
                            304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
                            />
                          </svg>
                        </span>
                        by {review.reviewerName}
                      </p>
                      <p className="ml-2 text-sm align-baseline">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="h-5 w-5 pb-1 fill-gray-900 inline mr-3"
                          >
                            <path
                              d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 
                              17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 
                              212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 
                              328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 
                              0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 
                              0-64-28.7-64-64L0 128z"
                            />
                          </svg>
                        </span>
                        {review.reviewerEmail}
                      </p>
                      <p className="ml-2 text-sm align-baseline">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="h-5 w-5 pb-1 fill-gray-900 inline mr-3"
                          >
                            <path
                              d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 
                        64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 
                        0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 
                        0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 
                        0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 
                        0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 
                        16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 
                        0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z"
                            />
                          </svg>
                        </span>
                        {format(new Date(review.date), "MM/dd/yyyy")}
                      </p>
                    </div>
                    <p className="lg:text-lg ml-auto mr-2">
                      Rating: {review.rating}/5
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
