"use client";

import React from "react";
import ToastNotification from "./ToastNotification";

const AddToCartButton = ({ productId }) => {
  const addToCart = async () => {
    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (response.status === 401) {
        // User not logged in, add item to localStorage
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ productId, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Item added to cart. Please log in to proceed to checkout.");
      } else if (!response.ok) {
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
      <button
        className="hover:bg-gray-900 bg-neutral-200 text-gray-900
          hover:text-neutral-200 border-2 border-gray-900
          font-bold py-2 px-4 rounded"
        onClick={addToCart}
      >
        Order Now
      </button>
    </>
  );
};

export default AddToCartButton;
