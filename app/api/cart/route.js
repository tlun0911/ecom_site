import { db } from "@/app/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function GET(request) {
  let userId = request.headers.get("userId");
  let cart;
  let cartItems;

  if (userId) {
    try {
      cart = await db.cart.findFirst({
        where: { customerId: userId },
        include: { items: true },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Error fetching cart" }), {
        status: 500,
      });
    }
  } else {
    return new Response(JSON.stringify({ error: "User not logged in" }), {
      status: 401,
    });
  }

  return Response.json(cart);
}
