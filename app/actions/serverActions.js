'use server';
import { db } from "@/app/lib/db";
import { revalidatePath } from "next/cache";

export async function handleCheckout(formData) {
  const { name, address, phone, email, cartId } = formData;
  const cart = await db.cart.findUnique({
    where: { id: cartId },
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
  console.log("Cart: ", cart);

  // Basic validation
  if (!name || !address || !phone || !email) {
    return { success: false, message: 'All fields are required.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  if (!emailRegex.test(email)) {
    return { success: false, message: 'Invalid email format.' };
  }

  if (!phoneRegex.test(phone)) {
    return { success: false, message: 'Invalid phone number format.' };
  }

  // Clear user cart logic here
  // Assuming you have a function clearUserCart() that clears the cart
  try {
    await clearUserCart(cartId);
    revalidatePath('/cart');
    return { success: true, message: 'Your order has been placed!' };
  } catch (error) {
    return { success: false, message: 'An error occurred during checkout, please try again.' };
  }
}

// Mock function to clear user cart
async function clearUserCart(cartId) {
  // Implement your cart clearing logic here
  try {
    // Delete all cart items associated with the cart
    await db.cartItem.deleteMany({
      where: { shoppingCartId: cartId },
    });

    // Delete the cart
    await db.cart.delete({
      where: { id: cartId },
    });

    console.log('User cart cleared.');
  } catch (error) {
    console.error('Error clearing cart:', error);
    throw error;
  }
}

