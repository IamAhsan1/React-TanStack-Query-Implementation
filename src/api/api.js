
// This simulates your Node.js/Express backend

let fakeDatabase = [
  { id: 1, name: "Sapphire Summer Collection", category: "Apparel" },
  { id: 2, name: "Outfitters Denim", category: "Apparel" }
];

export const fetchProducts = async () => {
  // Simulate a 1-second network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return fakeDatabase;
};

export const addProduct = async (newProduct) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Create a random ID
  const productWithId = { ...newProduct, id: Math.random() };
  fakeDatabase.push(productWithId);
  return productWithId;
};