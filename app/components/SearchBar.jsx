"use client";

import { useState, React } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState(false);
  const [mdOptionsToggle, setMdOptionsToggle] = useState(false);

  return (
    <div className="">
      <div className="hidden lg:flex items-center w-full">
        <button
          onClick={() => setSearchInput(!searchInput)}
          aria-label="search bar"
          className="text-gray-800 dark:hover:text-gray-300 dark:text-white hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-gray-800"
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
              d="M5 11C5 15.4183 8.58172 19 13 19C17.4183 19 21 15.4183 21 11C21 6.58172 17.4183 3 13 3C8.58172 3 5 6.58172 5 11Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.99961 20.9999L7.34961 16.6499"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <input
          id="searchInput"
          type="text"
          placeholder="search"
          className={` ${
            searchInput ? "hidden" : ""
          } text-sm dark:bg-gray-900 dark:placeholder-gray-300 text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1`}
        />
        <div className="w-full ml-2">
          <SignedOut>
            <SignInButton className="border-2 border-sky-500 text-sky-500 px-2 min-w-max" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      <div className="flex lg:hidden">
        <button
          aria-label="show options"
          onClick={() => setMdOptionsToggle(!mdOptionsToggle)}
          className="text-black dark:text-white dark:hover:text-sky-400 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
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
      </div>
    </div>
  );
};

export default SearchBar;
