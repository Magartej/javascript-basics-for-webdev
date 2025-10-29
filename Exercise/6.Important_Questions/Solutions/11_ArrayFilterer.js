function filterProducts(products, criterion) {
  return products.filter((product) => {
    // Check if each key in criterion matches the corresponding product property
    return Object.keys(criterion).every(
      (key) => product[key] === criterion[key]
    );
  });
}

// Example usage:
const products = [
  { name: "Laptop", category: "Electronics", price: 800 },
  { name: "Phone", category: "Electronics", price: 500 },
  { name: "Shirt", category: "Clothing", price: 40 },
  { name: "Shoes", category: "Clothing", price: 60 },
];

// Filter by category
console.log(filterProducts(products, { category: "Clothing" }));
// Output: [{ name: "Shirt", category: "Clothing", price: 40 },
//          { name: "Shoes", category: "Clothing", price: 60 }]

// Filter by multiple criteria
console.log(filterProducts(products, { category: "Electronics", price: 500 }));
// Output: [{ name: "Phone", category: "Electronics", price: 500 }]
