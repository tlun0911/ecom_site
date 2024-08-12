import ProductList from "../components/ProductList";
import FilterList from "../components/FilterList";
import { db } from "@/app/lib/db";
import { Suspense } from "react";
import ProductCardSkeleton from "../components/ProductCardSkeleton";

const ProductsPage = async () => {
  try {
    const departments = await db.category.findMany();
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-2">
        <FilterList departments={departments} />
        <Suspense fallback={<ProductCardSkeleton  />}>
          <ProductList />
        </Suspense>
      </div>
    );
  } catch (error) {
    console.error("Error rendering ProductsPage:", error);
    return <div>Something went wrong</div>;
  }
};

export default ProductsPage;
