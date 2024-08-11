import ProductList from "../components/ProductList";
import FilterList from "../components/FilterList";
import { db } from "@/app/lib/db";

export async function getData() {
  const productsList = await db.product.findMany();
  const departments = await db.category.findMany();
  return { productsList, departments };

}

const ProductsPage = async () => {
  try {
    const { productsList, departments } = await getData();

    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-2">
        <FilterList productsList={productsList} departments={departments} />
        <ProductList />
      </div>
    );
  } catch (error) {
    console.error('Error rendering ProductsPage:', error);
    return <div>Something went wrong</div>;
  }
};

export default ProductsPage;
