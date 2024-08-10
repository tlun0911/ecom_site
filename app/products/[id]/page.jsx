import React from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/app/components/AddToCartButton";
import { db } from "@/app/lib/db";
import RatingStars from "@/app/components/RatingStars";
import { auth } from '@clerk/nextjs/server';


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
  const products = await db.product.findMany();
  return products.map((product) => product.id);
}



const ProductPage = async ({ params }) => {

  const product = await db.product.findUnique({
    where: {
      id: params.id,
    },
    include: {
      category: true,
      reviews: {
        select: {
          id: true,
          rating: true,
          comment: true,
          createdAt: true,
          userAvatarURL: true,
          userName: true,
        },
      },
    },
  });

  const reviews = product.reviews;
  const department = product.category;
  const randomDate = getRandomDateWithinTwoWeeks();
  const { userId } = auth();

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

  let in_stock;

  if (product.stock > 0) {
    in_stock = (
      <span className="text-gray-900 text-sm">
        In stock, {product.stock} units available
      </span>
    );
  } else {
    in_stock = <span className="text-gray-900 text-sm">Out of stock</span>;
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
              src={product.imageURL}
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
            <p>Department: {department.name}</p>
            <div className="flex">
              <AddToCartButton productId={product.id} userId={userId} />
              {fav_icon}
            </div>
            <div className="flex flex-col border-2 border-gray-900 p-2 rounded-md">
              {in_stock}
              <span className="text-gray-900 text-sm">
                Order now and recieve by {randomDate.toDateString()}
              </span>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold">Customer Reviews</h2>
              <div className="flex items-center">
                <RatingStars rating={product.rating} />
                <p className="text-lg ml-4">Rating: {product.rating}/5</p>
              </div>
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex flex-col border-2 p-2 border-gray-900 space-y-2 rounded-md"
                >
                  <p className="text-lg font-medium">
                    {'"'}
                    {review.comment}
                    {'"'}
                  </p>
                  <div className="flex flex-col lg:flex-row items-center w-full">
                    <Image
                      src={review.userAvatarURL}
                      alt="avatar"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <p className="ml-2 text-lg">by {review.userName}</p>
                      <p className="ml-2 text-sm">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <p className="lg:text-lg ml-auto mr-2">
                      Rating: {review.rating}/5
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
