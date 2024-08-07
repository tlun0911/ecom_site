import ProductList from "../components/ProductList";

const getData = async () => {
  const API_URL = process.env.API_URL;
  let productsData = await fetch(`${API_URL}/getAllProducts`);
  let departmentsData = await fetch(`${API_URL}/getCategories`);
  

  if (!productsData.ok || !departmentsData.ok) {
    throw new Error("An error occurred while fetching the data");
  }

  const productsList = await productsData.json();
  const departments = await departmentsData.json();

  return { productsList, departments };
};

const ProductsPage = async () => {
  try {
    const { productsList, departments } = await getData();

    return <ProductList products={productsList} departments={departments} />;
  } catch (error) {
    console.error("Error fetching data:", error);
    return <ProductList products={[]} departments={[]} />;
  }
};

export default ProductsPage;
