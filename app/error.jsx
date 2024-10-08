"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-6 mt-10 space-y-8">
      <h2 className="text-xl lg:text-2xl text-gray-900 font-medium">Whoops, something went wrong!</h2>
      <button
        className="bg-neutral-200 text-gray-900 font-bold py-2 px-4 rounded border-2 border-gray-900"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
