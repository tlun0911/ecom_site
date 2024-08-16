import FilterList from "../components/FilterList";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import FilterListSkeleton from "../components/FilterListSkeleton";
import { Suspense } from "react";
import fetchProducts from "@/app/lib/fetchProducts";

export default function ProductDisplayLayout({
  children, // will be a page or nested layout
}) {
  fetchProducts();
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-2">
        <Suspense fallback={<FilterListSkeleton />}>
          <FilterList />
        </Suspense>
        <Suspense fallback={<ProductCardSkeleton />}>{children}</Suspense>
      </div>
    </section>
  );
}
