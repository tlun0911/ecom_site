import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getProductById,
  getReviews,
  getAllProductIds,
} from "@/app/api/helpers";
import { randomImage } from "@/app/api/helpers";

function getRandomDateWithinTwoWeeks() {
  const currentDate = new Date();
  const twoWeeksFromNow = new Date();
  twoWeeksFromNow.setDate(currentDate.getDate() + 14);

  const randomTime =
    currentDate.getTime() +
    Math.random() * (twoWeeksFromNow.getTime() - currentDate.getTime());
  return new Date(randomTime);
}

export async function generateStaticParams() {
 // const productIds = await getAllProductIds();
 const productIds = Array.from({ length: 60 }, (_, index) => index + 1);
  return productIds.map((id) => ({
    id: id.toString(),
  }));
}

const ProductPage = async ({ params: { id } }) => {
  const product = await getProductById(id);
  const img_url = randomImage(600, 600);
  const randomDate = getRandomDateWithinTwoWeeks();
  const reviews = await getReviews(id);

  let fav_icon;
  if (product.favorite) {
    fav_icon = (
      <div
        className="ml-auto p-2 bg-gray-900 text-sky-400 font-bold
    text-center lg:mr-2 border-2 border-sky-400
    rounded-full"
      >
        Customer Favorite
      </div>
    );
  } else {
    fav_icon = <div></div>;
  }

  return (
    <div className="container mx-auto m-4 py-4">
      <div className="flex flex-col items-center justify-center space-y-8">
        <h1 className="text-2xl lg:text-3xl font-bold px-2">
          {product.name} by {product.company}
        </h1>
        <div className="grid lg:grid-cols-2 mx-4 justify-center">
          <div className="relative">
            <Image
              src={img_url}
              alt="Product"
              width={600}
              height={600}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcu3FjPQAGsgKQ92yjQAAAAABJRU5ErkJggg=="
            />
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <p className="text-xl font-medium">{product.description}</p>
            <p className="text-xl font-medium">Price: ${product.price}</p>
            <p>Department: {product.department}</p>
            <div className="flex">
              <Link href="/products">
                <button
                  className="hover:bg-gray-900 bg-nuetral-200 text-gray-900
               hover:text-neutral-200 border-2 border-gray-900
               font-bold py-2 px-4 rounded"
                >
                  Order Now
                </button>
              </Link>
              {fav_icon}
            </div>
            <span className="text-gray-900 text-sm">
              Order now and recieve by {randomDate.toDateString()}
            </span>
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold">Customer Reviews</h2>
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex flex-col border-2 p-2 border-gray-900 space-y-2"
                >
                  <p className="text-lg font-medium">
                    {'"'}
                    {review.review}
                    {'"'}
                  </p>
                  <div className="flex flex-col lg:flex-row items-center w-full">
                    <Image
                      src={review.avatar}
                      alt="avatar"
                      width={50}
                      height={50}
                    />
                    <p className="ml-2 text-lg">by {review.name}</p>
                    <p className="lg:text-lg ml-auto mr-2">
                      Rating: {review.rating}/10
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/products">
              <button
                className="hover:bg-gray-900 bg-nuetral-200 text-gray-900
               hover:text-neutral-200 border-2 border-gray-900
               font-bold py-2 px-4 rounded"
              >
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
