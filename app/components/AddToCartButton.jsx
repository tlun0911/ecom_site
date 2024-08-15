"use client";

import React from "react";
import ToastNotification from "./ToastNotification";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { addToCart } from "@/app/actions/addToCart";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


const AddToCartButton = ({ productId }) => {
  const router = useRouter(); // Initialize the router

  const handleAddToCart = async () => {
    const response = await addToCart(productId);
    console.log("Response", response);

    if (response.success) {
      toast(response.message, { type: "success" });
      router.refresh(); // Refresh the page after a successful add to cart
    } else {
      toast(response.message, { type: "error" });
    }
  };

  return (
    <>
      <ToastNotification />
      <SignedIn>
        <button
          className="hover:bg-gray-900 bg-white text-gray-900
          hover:text-neutral-200 border-2 border-gray-900
          font-bold py-2 px-4 rounded"
          onClick={handleAddToCart}
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
