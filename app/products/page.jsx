import ProductList from "../components/ProductList";
import { getAllProductsNoLimit, getCategories } from "../api/helpers";

const getAllProducts = async () => {
  const res = await fetch("http://localhost:3000/api/getAllProducts");

  if (!res.ok) {
    throw new Error("An error occurred while fetching the data");
  }

  return res.json();
};

const ProductsPage = async () => {
  try {
    const products = await getAllProducts();
    console.log(products);
    const departments = await getCategories();

    return <ProductList products={products} departments={departments} />;
  } catch (error) {
    console.error("Error fetching data:", error);
    return <ProductList products={[]} departments={[]} />;
  }
};

export default ProductsPage;
