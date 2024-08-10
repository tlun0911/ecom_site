import ProductList from "../components/ProductList";
import FilterList from "../components/FilterList";
import { db } from "@/app/lib/db";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { Suspense } from "react";

const ProductsPage = async () => {
  const productsList = await db.product.findMany();
  const departments = await db.category.findMany();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-2">
      <FilterList productsList={productsList} departments={departments} />
      <Suspense fallback={<ProductCardSkeleton />}>
        <ProductList />
      </Suspense>
    </div>
  );
};

export default ProductsPage;
