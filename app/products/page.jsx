import ProductList from "../components/ProductList";
import { getAllProductsNoLimit, getCategories } from "../api/helpers";

const ProductsPage = async ({ searchParams }) => {


  try {
    const products = await getAllProductsNoLimit();
    const departments = await getCategories();

    return (
      <ProductList products={products} departments={departments}  />
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <ProductList products={[]} departments={[]}  />
    );
  }
};


export default ProductsPage;
