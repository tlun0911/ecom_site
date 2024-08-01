export async function getAllProducts(page = 1, limit = 10) {
  const baseUrl = "https://66a435c844aa637045839087.mockapi.io/api/products";
  const url = new URL(baseUrl);
  url.searchParams.append("page", page);
  url.searchParams.append("limit", limit);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const data = response.json();
  return data;
}

export async function getAllProductsNoLimit() {
  const response = await fetch(
    "https://66a435c844aa637045839087.mockapi.io/api/products",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function getProductById(id) {
  const response = await fetch(
    `https://66a435c844aa637045839087.mockapi.io/api/products/${id}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const product = response.json();
  return product;
}

export async function getAllProductIds() {
  // Fetch or generate the list of product IDs
  const products = await getAllProductsNoLimit();
  return products.map((product) => product.id);
}

export function randomImage(width = 400, height = 400) {
  const min = 1;
  const max = 100;
  let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  //Links for img 86 and 97 are broken, so we skip them
  if (randomValue === 97 || randomValue === 86) {
    randomValue++;
  }
  const img_url = `https://picsum.photos/id/${randomValue}/${width}/${height}`;

  return img_url;
}

export async function getReviews(id) {
  const response = await fetch(
    `https://66a435c844aa637045839087.mockapi.io/api/products/${id}/reviews`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const reviews = response.json();
  return reviews;
}

export async function getCategories() {
  try {
    const products = await getAllProductsNoLimit();
    const categories = products.map((product) => product.department);
    const uniqueCategories = [...new Set(categories)];
    return uniqueCategories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function getProductsByCategory(category) {
  const products = await getAllProducts();
  const filteredProducts = products.filter(
    (product) => product.department === category
  );
  return filteredProducts;
}
