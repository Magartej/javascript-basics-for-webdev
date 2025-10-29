function calculateTotal(cart) {
  return cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
}

// Example usage:
const shoppingCart = [
  { name: "Laptop", price: 800, quantity: 1 },
  { name: "Phone", price: 500, quantity: 2 },
  { name: "Shirt", price: 40, quantity: 3 },
];

const totalCost = calculateTotal(shoppingCart);
console.log("Total Cost: $", totalCost);
// Output: Total Cost: $ 1920
