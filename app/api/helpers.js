export async function getAllProducts() {
  const response = await fetch(
    "https://66a435c844aa637045839087.mockapi.io/api/products",
    {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    }
  );
  const products = response.json();
  return products;
}

export async function getProductById(id) {
  const response = await fetch(
    `https://66a435c844aa637045839087.mockapi.io/api/products/${id}`, {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    }
  );

  const product = response.json();
  return product;
}

export function randomImage(width = 400, height = 400) {
  const min = 1;
  const max = 100;
  let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  //Links for img 86 and 97 are broken, so we skip them
  if (randomValue === 97 || randomValue === 86) {
    randomValue ++;
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
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    }
  );
  const reviews = response.json();
  return reviews;
}
