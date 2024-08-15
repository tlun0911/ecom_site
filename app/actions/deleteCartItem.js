'use server';

import { db } from "@/app/lib/db";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

export async function deleteCartItem (itemId, cartId) {
    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId;

    try {
        let res = await db.cartItem.delete({
          where: { id: itemId },
        });
        return {success: true, message: "Item deleted from cart"}; 
    } catch (error) {
        return {success: false, message: "Error deleting item from cart"}; 
    }
    }