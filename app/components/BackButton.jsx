"use client";

import React from "react";

const BackButton = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={handleGoBack}
      className="hover:bg-gray-900 bg-white text-gray-900
           hover:text-neutral-200 border-2 border-gray-900
           font-bold py-2 px-4 rounded"
    >
      Go Back
    </button>
  );
};

export default BackButton;
