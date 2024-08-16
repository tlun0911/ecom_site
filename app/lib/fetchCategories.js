// 'use server';

// let cachedProducts = null;

// const fetchCategories = async () => {
//     // Check if the data is already cached
//     if (!cachedProducts) {
//       const res = await fetch('https://dummyjson.com/products?limit=0', { cache: 'force-cache' });
//       const data = await res.json();
//       cachedProducts = data.products; // Cache the data
//     }
//     return cachedProducts;
//   }

// export default fetchAllProducts;