import ProductCard from "../components/ProductCard";
import { Suspense } from "react";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { db } from "@/app/lib/db";

const ProductList = async () => {
  const products = await db.product.findMany();
  const departments = await db.category.findMany();

  return (
    <div className="lg:col-span-9">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => {
          const departmentName = departments?.find(
            (department) => department.id === product.categoryId
          )?.name;
          return (
            <Suspense key={product.id} fallback={<ProductCardSkeleton />}>
              <ProductCard
                key={product.id}
                product={product}
                departmentName={departmentName}
              />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
