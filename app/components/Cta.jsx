import React from "react";
import Link from "next/link";
import Image from "next/image";
import cta1 from "@/app/assets/cta1.png";
import cta2 from "@/app/assets/cta2.png";
const Cta4 = () => {
  return (
    <div className="mx-auto container py-12 px-4 md:px-6 2xl:px-0 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-6 lg:space-y-0">
        <div className="relative">
          <Image
            src={cta1}
            alt="table-chair"
            className="lg:block"
            placeholder="blur"
          />
          <div className="absolute bottom-4 sm:bottom-10 inset-x-4 sm:inset-x-10 p-6 bg-white flex flex-col justify-start items-start">
            <div>
              <p className="text-2xl font-semibold leading-6 text-gray-800">
                Customer Favorites
              </p>
            </div>
            <div className="mt-2">
              <p className="text-base leading-6 sm:leading-4 text-gray-600">
                Check out some of our customer{"'"}s most loved items
              </p>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center space-x-2">
                <Link
                  className="text-base font-medium leading-none hover:underline text-gray-800"
                  href="/products"
                >
                  Explore
                </Link>
                <svg
                  className="fill-current"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33337 8H12.6667"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10.6667L12.6667 8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 5.33333L12.6667 8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
        <Image
            src={cta2}
            alt="chair-wood-fire"
            className="lg:block"
            placeholder="blur"
          />
          <div className="absolute bottom-4 sm:bottom-10 inset-x-4 sm:inset-x-10 p-6 bg-white flex flex-col justify-start items-start">
            <div>
              <p className="text-2xl font-semibold leading-6 text-gray-800">
                Categories
              </p>
            </div>
            <div className="mt-2">
              <p className="text-base leading-6 sm:leading-4 text-gray-600">
                Browse our collection of products by category
              </p>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center space-x-2">
                <Link
                  className="text-base font-medium leading-none hover:underline text-gray-800"
                  href="/categories"
                >
                  Explore
                </Link>
                <svg
                  className="fill-current"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33337 8H12.6667"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10.6667L12.6667 8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 5.33333L12.6667 8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta4;
