import React from "react";
import Link from "next/link";

const Highlights = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:px-20 md:py-8 md:px-6 py-4 px-4">
      <h1 className="text-center text-3xl lg:text-4xl text-gray-900 font-semibold leading-8 lg:mb-12 mb-6">
        Why Choose shopEase?
      </h1>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 ">
        {/* Fast shipping card */}
        <div className=" p-6 bg-gray-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-truck"
          >
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
          <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">
            Fast Delivery
          </p>
          <p className=" font-normal text-base leading-6 text-gray-600 my-4">
            Local fulfillment centers mean your order is at your doorstep fast
          </p>
          <Link
            href="/"
            className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 "
          >
            Learn More
          </Link>
        </div>

        {/* Personal Shopping Grid Card */}
        <div className=" p-6 bg-gray-50">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 21H21"
              stroke="#1F2937"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 7V8C3 8.79565 3.31607 9.55871 3.87868 10.1213C4.44129 10.6839 5.20435 11 6 11C6.79565 11 7.55871 10.6839 8.12132 10.1213C8.68393 9.55871 9 7.79565 9 7M3 7H9M3 7H21M3 7L5 3H19L21 7M9 7C9 7.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8M9 7H15V8M15 8C15 8.79565 15.3161 9.55871 15.8787 10.1213C16.4413 10.6839 17.2044 11 18 11C18.7956 11 19.5587 10.6839 20.1213 10.1213C20.6839 9.55871 21 8.79565 21 8V7"
              stroke="#1F2937"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 20.9996V10.8496"
              stroke="#1F2937"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 20.9996V10.8496"
              stroke="#1F2937"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 21V17C9 16.4696 9.21071 15.9609 9.58579 15.5858C9.96086 15.2107 10.4696 15 11 15H13C13.5304 15 14.0391 15.2107 14.4142 15.5858C14.7893 15.9609 15 16.4696 15 17V21"
              stroke="#1F2937"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">
            Rewards Program
          </p>
          <p className=" font-normal text-base leading-6 text-gray-600 my-4">
            Join our rewards program and start saving on every purchase!
          </p>
          <Link
            href="/"
            className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 "
          >
            Learn More
          </Link>
        </div>

        {/* Free Shopping Grid Card */}
        <div className=" p-6 bg-gray-50">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M18.4142 12.7573L21.2426 9.92886C21.6177 9.55378 22.1264 9.34307 22.6568 9.34307C23.1873 9.34307 23.696 9.55378 24.071 9.92886C24.4461 10.3039 24.6568 10.8126 24.6568 11.3431C24.6568 11.8735 24.4461 12.3822 24.071 12.7573L21.2426 15.5857L23.3639 23.3639L21.2426 25.4852L17.7071 19.1212L14.8786 21.9497V24.7781L12.7573 26.8994L11.3431 22.6568L7.10048 21.2426L9.2218 19.1212H12.0502L14.8786 16.2928L8.51469 12.7573L10.636 10.636L18.4142 12.7573Z"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.0294189 17) rotate(-45)"
                />
              </clipPath>
            </defs>
          </svg>
          <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">
            Free Shipping
          </p>
          <p className=" font-normal text-base leading-6 text-gray-600 my-4">
            Free shipping all over the world on orders above $100
          </p>
          <Link
            href="/"
            className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 "
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
