import { db } from '@/app/lib/db';

export async function GET(request, { params }) {
  console.log(params)
  const department = await db.category.findUnique({
    where: {
      name: params.name,
    },
    include: {
      products: true,
    },
  });

  return Response.json(department);
}
