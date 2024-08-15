"use client";

import React from "react";
import { deleteCartItem } from "@/app/actions/deleteCartItem";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DeleteCartItemButton = ({ itemId, cartId }) => {
  const router = useRouter(); // Initialize

  const handleDeleteCartItem = async () => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this item from your cart?"
    );

    if (!userConfirmed) {
      return;
    }

    const response = await deleteCartItem(itemId, cartId);

    if (response.success) {
      toast(response.message, { type: "success" });
      router.refresh(); // Refresh the page after a successful add to cart
    } else {
      toast(response.message, { type: "error" });
    }
  };
  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded"
      onClick={() => {
        handleDeleteCartItem();
      }}
    >
      Delete
    </button>
  );
};

export default DeleteCartItemButton;
