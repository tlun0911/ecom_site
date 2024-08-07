
import { db } from "@/app/lib/db";

export const revalidate = 5;

export async function GET() {
  const categories = await db.category.findMany();

  return Response.json( categories );
}
