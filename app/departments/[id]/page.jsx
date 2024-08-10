import React from "react";
import ProductCard from "@/app/components/ProductCard";
import { db } from "@/app/lib/db";

export async function generateStaticParams() {
  const departments = await db.category.findMany();
  return departments.map((department) => department.id);
}

const DepartmentPage = async ({ params }) => {
  const departmentId = parseInt(params.id);
  const department = await db.category.findUnique({
    where: {
      id: departmentId,
    },
    include: {
      products: true,
    },
  }
  )
  const products = department.products;

  return (
    <div className="overflow-hidden">
      <h1 className="my-4 text-2xl lg:text-4xl font-bold text-gray-900 text-center">
        {department.name}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {products?.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} departmentName={department.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentPage;
