import { auth } from '@clerk/nextjs/server';
import { db } from '@/app/lib/db'

export async function POST(request) {
    const {  productId } = await request.json();
    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId;
    console.log("UserID", userId);
  
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
            productId,
            quantity: 1,
          },
        });
  
        return new Response(JSON.stringify(cartItem), { status: 200 });
      } catch (error) {
        return new Response(JSON.stringify({ error: 'Error adding item to cart' }), { status: 500 });
      }
    } else {
      return new Response(JSON.stringify({ error: 'User not logged in' }), { status: 401 });
    }
  }

