import { db } from '@/app/lib/db';


export async function GET () {
  const products = await db.product.findMany();

  return Response.json( products );
};
