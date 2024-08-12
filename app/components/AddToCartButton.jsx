"use client";

import React from "react";
import ToastNotification from "./ToastNotification";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const AddToCartButton = ({ productId }) => {
  const addToCart = async () => {
    try {
      const response = await fetch("https://ecom-site-steel-seven.vercel.app/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      } else {
        const data = await response.json();
        console.log("Product added to cart:", data);
        localStorage.setItem("toast", JSON.stringify("Item added to cart"));
        window.location.reload();
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <>
      <ToastNotification />
      <SignedIn>
        <button
          className="hover:bg-gray-900 bg-neutral-200 text-gray-900
          hover:text-neutral-200 border-2 border-gray-900
          font-bold py-2 px-4 rounded"
          onClick={addToCart}
        >
          Order Now
        </button>
      </SignedIn>
      <SignedOut>
        <p className="bg-gray-900 text-neutral-200 text-lg p-2 rounded-md">
          Sign in to place your order!
        </p>
      </SignedOut>
    </>
  );
};

export default AddToCartButton;
