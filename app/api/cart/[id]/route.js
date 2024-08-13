import { db } from "@/app/lib/db";

export async function DELETE(request, { params }) {
  const cartId = params.id;
  const itemId = request.headers.get("itemId");
  const userId = request.headers.get("userId");

  try {
    let res = await db.cartItem.delete({
      where: { id: itemId },
    });
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error deleting item from cart" }),
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  const cartId = params.id;
  const userId = request.headers.get("userId");

  let cart;
  cart = await db.cart.findUnique({
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

  return Response.json(cart);
}
