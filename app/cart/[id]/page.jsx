import React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/app/lib/db";
import DeleteCartItemButton from "@/app/components/DeleteCartItemButton";
import ToastNotification from "@/app/components/ToastNotification";

export const CartPage = async ({ params }) => {
  const cartId = params.id;
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId;
  const userName = sessionClaims?.firstName;

  const cart = await db.cart.findUnique({
    where: { id: cartId, customerId: userId },
    include: {
      items: {
        include: {
          product: {
            select: { id: true, name: true, price: true, imageURL: true },
          },
        },
      },
    },
  });

  let products =
    cart?.items.map((product) => {
      return {
        name: product.product.name,
        price: product.product.price,
        quantity: product.quantity,
        imageURL: product.product.imageURL,
        cartItemId: product.id,
        productId: product.product.id,
      };
    }) || [];

  let total = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <>
      <ToastNotification />
      <div className="flex flex-col items-center justify-center space-y-4 overflow-hidden">
        <h1 className="text-3xl font-bold mt-4">Cart for {userName}</h1>

        <ul className="space-y-6 w-4/5 md:w-1/2">
          {products.map((product) => (
            <li
              className="flex flex-col lg:flex-row lg:space-x-10 justify-between items-center 
                border-2 border-gray-900 rounded-md lg:min-w-max space-y-4 lg:space-y-0
                p-4 flex-grow"
              key={product.name}
            >
              <Image
                src={product.imageURL}
                alt={product.name}
                width={100}
                height={100}
                className="object-contain"
              />
              <div className="flex flex-col min-w-max lg:flex-grow space-y-2">
                <Link
                  href={`/products/${product.productId}`}
                  key={product.name}
                >
                  <p className="hover:font-bold">{product.name}</p>
                </Link>

                <p>Price - ${product.price}</p>
                <p>Quantity - {product.quantity}</p>
              </div>
              <DeleteCartItemButton
                itemId={product.cartItemId}
                cartId={params.id}
              />
            </li>
          ))}
        </ul>

        <div className="flex flex-col lg:flex-row lg:w-1/2 self-start mx-auto lg:space-x-6">
          <p className="text-xl font-semibold">{cart?.items.length} items</p>
          <p className="text-xl font-semibold">Total: ${total}</p>
        </div>
      </div>
    </>
  );
};

export default CartPage;
