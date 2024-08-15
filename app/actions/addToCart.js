'use server';

import { db } from "@/app/lib/db";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

export async function addToCart (productId) {
    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId;

    if (userId) {
        try {
          // Find or create a cart for the user
          let cart = await db.cart.findFirst({
            where: { customerId: userId },
          });
    
          if (!cart) {
            cart = await db.cart.create({
              data: { customerId: userId },
            });
          }
    
          // Add item to the cart
          const cartItem = await db.cartItem.create({
            data: {
              shoppingCartId: cart.id,
              productId: productId.toString(),
              quantity: 1,
            },
          });
          return {success: true, message: "Item added to cart"}; 
        } catch (error) {
            return {success: false, message: "Failed to add item to cart"};
        }
    }


}