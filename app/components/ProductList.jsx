import ProductCard from "../components/ProductCard";
import { db } from "@/app/lib/db";

const ProductList = async () => {
  try {
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
              <ProductCard
                key={product.id}
                product={product}
                departmentName={departmentName}
              />
            );
          })}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error rendering ProductList:", error);
    return <div>Something went wrong</div>;
  }
};

export default ProductList;
