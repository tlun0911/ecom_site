import FilterList from "../components/FilterList";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { Suspense } from "react";

export default function ProductDisplayLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-2">
        <FilterList />
        <Suspense fallback={<ProductCardSkeleton />}>{children}</Suspense>
      </div>
    </section>
  );
}
