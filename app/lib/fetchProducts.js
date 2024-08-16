import fs from "fs";
import path from "path";
import fetch from "node-fetch";

let cachedProducts = null;

// const downloadImage = async (url, imagePath) => {
//   await new Promise((resolve) => setTimeout(resolve, 500)); // Add a 250ms delay

//   const res = await fetch(url);
//   const arrayBuffer = await res.arrayBuffer();
//   const buffer = Buffer.from(arrayBuffer);
//   fs.writeFileSync(imagePath, buffer);
// };

const fetchProducts = async () => {
  console.log("Inside fetchProducts function");

  if (!cachedProducts) {
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Add a one second delay
    const res = await fetch("https://dummyjson.com/products?limit=0", { cache: "force-cache" });
    console.log("Made a request to the API");
    const data = await res.json();
    console.log("Received data from the API", data.length);
    cachedProducts = data.products;
  }

//   // Define the path to store images
//   const imagesDir = path.join(process.cwd(), "public", "product-images");
//   if (!fs.existsSync(imagesDir)) {
//     fs.mkdirSync(imagesDir, { recursive: true });
//   }

//   // Download and save images locally
//   await Promise.all(
//     cachedProducts.map(async (product) => {
//       await new Promise((resolve) => setTimeout(resolve, 500)); // Add a 500ms delay
//       const thumbnailUrl = new URL(product.thumbnail);
//       const imageName = `${product.id}-${path.basename(thumbnailUrl.pathname)}`;
//       const imagePath = path.join(imagesDir, imageName);

//       if (!fs.existsSync(imagePath)) {
//         await downloadImage(product.thumbnail, imagePath);
//       }
//       // Repeat for additional images if necessary
//       await Promise.all(
//         product.images.map(async (image, index) => {
//           const imageUrl = new URL(image);
//           const imageName = `${product.id}-${index}-${path.basename(
//             imageUrl.pathname
//           )}`;
//           const imagePath = path.join(imagesDir, imageName);

//           if (!fs.existsSync(imagePath)) {
//             await downloadImage(image, imagePath);
//           }
//         })
//       );
//     })
//   );

  return cachedProducts;
};

export default fetchProducts;
