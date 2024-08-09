
import { db } from "@/app/lib/db";


export async function GET() {
  const categories = await db.category.findMany();

  return Response.json( categories );
}
