import { db } from '@/app/lib/db';

export const revalidate = 3600;

export async function GET () {
  const products = await db.product.findMany();

  return Response.json( products );
};
