"use client";
import { useState, React } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <button
        id="open-menu"
        aria-label="open menu"
        onClick={() => setShowMenu(true)}
        className="text-black dark:text-white dark:hover:text-gray-300 lg:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
      >
        <svg
          className="fill-stroke"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 12H20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 18H20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        id="mobile-menu"
        className={`${
          showMenu ? "flex" : "hidden"
        } absolute dark:bg-gray-900 z-10 inset-0 lg:hidden bg-white flex-col h-screen w-full`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
          <button
            onClick={() => setShowMenu(false)}
            aria-label="close menu"
            className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
          >
            <svg
              className="fill-stroke text-gray-800 dark:text-white"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L4 12"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 4L12 12"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 p-4">
          <ul className="flex flex-col space-y-6">
            <li>
              <div>
                <Link
                  href="/"
                  onClick={() => setShowMenu(false)}
                  className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                >
                  Home
                  <svg
                    className="fill-stroke text-black dark:text-white"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 3L7.5 6L4.5 9"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </li>
            <li>
              <Link
                href="/products"
                onClick={() => setShowMenu(false)}
                className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                All Products
                <div>
                  <svg
                    className="fill-stroke text-black dark:text-white"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 3L7.5 6L4.5 9"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                onClick={() => setShowMenu(false)}
                className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                Categories
                <div>
                  <svg
                    className="fill-stroke text-black dark:text-white"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 3L7.5 6L4.5 9"
                      stroke="currentColor"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="h-full flex items-end">
          <ul className="flex flex-col space-y-8 bg-gray-50 w-full py-10 p-4 dark:bg-gray-800">
            <SignedOut>
              <SignInButton className="border-2 border-sky-500 text-sky-500 px-2 min-w-max" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
