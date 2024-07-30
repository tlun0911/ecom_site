import ProductList from "../components/ProductList";
import { getAllProducts, getCategories } from "../api/helpers";

const ProductsPage = async ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const limit = 10;

  try {
    const products = await getAllProducts(page, limit);
    const categories = await getCategories();

    return (
      <ProductList products={products} categories={categories} page={parseInt(page, 10)} limit={limit} />
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <ProductList products={[]} categories={[]} page={parseInt(page, 10)} limit={limit} />
    );
  }
};


export default ProductsPage;
