import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { db } from "@/app/lib/db";

const CartIcon = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId;

  let cart;
  if (userId) {
    cart = await db.cart.findFirst({
      where: { customerId: userId },
      include: { items: true },
    });

  }

  const cartTotal = cart?.items.length;
  let cartId = cart?.id;

  return (
    <div className="mr-6 relative">
      <Link href={`/cart/${cartId}`}>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="h-8 w-8 fill-sky-500"
          >
            <path
              d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 
        32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 
        53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 
        24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 
        54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 
        1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
            />
          </svg>
          {cartTotal > 0 && (
            <p
              className="absolute top-0 right-0 transform 
                translate-x-1/2 -translate-y-1/2 bg-red-600 text-white 
                text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
            >
              {cartTotal}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CartIcon;
