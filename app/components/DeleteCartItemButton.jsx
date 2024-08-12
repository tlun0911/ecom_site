"use client";

import React from "react";

const DeleteCartItemButton = ({ itemId, cartId }) => {
  const deleteCartItem = async () => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this item from your cart?"
    );

    if (!userConfirmed) {
      return;
    }

    try {
      let res = await fetch(`https://ecom-site-steel-seven.vercel.app/api/cart/${cartId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          itemId: itemId,
        },
      });

      if (res.status === 200) {
        localStorage.setItem('toast', JSON.stringify("Item deleted from cart")); // Set flag in local storage
        window.location.reload(); // Reload the page after successful deletion
      } else {
        console.error("Failed to delete item:", res.statusText);
      }
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };
  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded"
      onClick={() => {
        deleteCartItem();
      }}
    >
      Delete
    </button>
  );
};

export default DeleteCartItemButton;
