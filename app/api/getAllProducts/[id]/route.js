import { db } from "@/app/lib/db";

export async function GET(request, { params }) {
  console.log("Inside get product by id route");
  const data = await db.product.findUnique({
    where: {
      id: params.id,
    },
    include: {
      category: true,
      reviews: {
        select: {
          id: true,
          rating: true,
          comment: true,
          createdAt: true,
          userAvatarURL: true,
          userName: true,
        },
      },
    },
  });

  return Response.json(data);
}
