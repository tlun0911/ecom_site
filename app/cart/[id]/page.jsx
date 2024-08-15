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
        select: { productId: true, id: true },
      },
    },
  });

  let products = cart?.items;

  // Fetch product details for each productId
  const productDetails = await Promise.all(
    products.map(async (product) => {
      const res = await fetch(
        `https://dummyjson.com/products/${product.productId}`
      );
      let data = await res.json();
      let newData = {...data, "cartItemId": product.id, "quantity": 1}
      
      return newData;
    })
  );

  if (products.length === 0) {
    return (
      <div className="container p-4 mx-auto mt-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-3xl font-semibold text-gray-900">
            It looks like your cart is empty, how about we change that!
          </h1>
          <Link href="/products">
            <button className="bg-gray-900 text-neutral-200 text-lg p-2 rounded-lg mt-4">
              Go Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  let total = productDetails.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  total = total.toFixed(2);

  return (
    <>
      <ToastNotification />
      <div className="flex flex-col items-center justify-center space-y-4 overflow-hidden">
        <h1 className="text-3xl font-bold mt-4">Cart for {userName}</h1>

        <ul className="space-y-6 w-4/5 md:w-1/2">
          {productDetails.map((product) => (
            <li
              className="flex flex-col lg:flex-row lg:space-x-10 justify-between items-center 
                border-2 border-gray-900 rounded-md lg:min-w-max space-y-4 lg:space-y-0
                p-4 flex-grow"
              key={product.cartItemId}
            >
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={100}
                height={100}
                className="object-contain"
              />
              <div className="flex flex-col min-w-max lg:flex-grow space-y-2">
                <Link href={`/products/${product.productId}`} key={product.id}>
                  <p className="hover:font-bold">{product.title}</p>
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
      </div>
      <div
        className="flex flex-col w-full flex-grow lg:flex-row lg:w-1/2 self-start 
        mx-auto space-y-3 lg:space-y-0 lg:space-x-6 mb-8 mt-4 items-center"
      >
        <p className="text-xl font-semibold">{cart?.items.length} items</p>
        <p className="text-xl font-semibold">Total: ${total}</p>
        <Link href={`/cart/${cartId}/checkout`} className="lg:ml-auto">
          <button
            className="bg-gray-900 text-neutral-200 text-lg
          p-2 rounded-lg flex-grow lg:ml-auto"
          >
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </>
  );
};

export default CartPage;
